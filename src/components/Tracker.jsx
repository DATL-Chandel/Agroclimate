import { useEffect, useState } from "react";
import { database, analytics } from "../firebase.jsx";
import { ref, set, get, update, remove, onValue, serverTimestamp } from "firebase/database";
import FingerprintJS from "@fingerprintjs/fingerprintjs";

const Tracker = ({ onShowExitSurvey }) => {
    const [uniqueUserId, setUniqueUserId] = useState(null);
    const [locationData, setLocationData] = useState(null);
    
    const getCurrentLocalDate = () => {
        const now = new Date();
        const formattedDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
        return formattedDate;
    };

    const getPreviousDate = () => {
        const now = new Date();
        now.setDate(now.getDate() - 1);
        return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
    };
    
    // Get or create visit ID (persistent during reloads, new when reopening after close)
    let currentVisitId = sessionStorage.getItem('currentVisitId');
    if (!currentVisitId) {
        currentVisitId = Date.now().toString(36);
        sessionStorage.setItem('currentVisitId', currentVisitId);
        console.log('Created NEW visit ID:', currentVisitId);
    } else {
        console.log('Reusing existing visit ID (reload):', currentVisitId);
    }
    let isVisitActive = false;
    let sessionRef = null;
    let visitRef = null;

    useEffect(() => {
        console.log("Tracker component mounted");
        let heartbeatInterval;
        let visitorId;
        let tempVisitRef = null;

        // Start a temporary visit immediately
        const startTempVisit = async () => {
            const currentDate = getCurrentLocalDate();
            const tempVisitId = Date.now().toString(36);
            tempVisitRef = ref(database, `visits/${currentDate}/${tempVisitId}`);
            
            try {
                await set(tempVisitRef, {
                    timestamp: serverTimestamp(),
                    active: true,
                    temporary: true
                });
                console.log("Started temporary visit tracking");
            } catch (error) {
                console.error("Error starting temporary visit:", error);
            }
        };

        // Start temporary tracking immediately
        startTempVisit();

        const cleanupOldData = async () => {
            try {
                const previousDate = getPreviousDate();
                
                // Clean up old active sessions
                const oldSessionsRef = ref(database, `active-sessions/${previousDate}`);
                await remove(oldSessionsRef);
                console.log(`Cleaned up old sessions from ${previousDate}`);

                // Clean up old visits
                const oldVisitsRef = ref(database, `visits/${previousDate}`);
                await remove(oldVisitsRef);
                console.log(`Cleaned up old visits from ${previousDate}`);

            } catch (error) {
                console.error("Error cleaning up old data:", error);
            }
        };

        const initTracking = async () => {
            try {
                console.log("Initializing tracking...");

                // Clean up old data first
                await cleanupOldData();

                const fp = await FingerprintJS.load();
                const result = await fp.get();
                visitorId = result.visitorId;
                setUniqueUserId(visitorId);
                console.log("Unique browser fingerprint:", visitorId);

                const getUserLocation = async () => {
                    try {
                        const ipResponse = await fetch("https://api.ipify.org?format=json");
                        const ipData = await ipResponse.json();

                        const geoResponse = await fetch(`https://ipapi.co/${ipData.ip}/json/`);
                        const locationData = await geoResponse.json();

                        if (locationData.error) {
                            throw new Error("Location API error: " + locationData.reason);
                        }

                        return {
                            country: locationData.country_name || "Unknown",
                            region: locationData.region || "Unknown",
                            city: locationData.city || "Unknown",
                            latitude: locationData.latitude || "Unknown",
                            longitude: locationData.longitude || "Unknown",
                            ip: ipData.ip
                        };
                    } catch (error) {
                        console.error("Error getting location:", error);
                        return {
                            country: "Unknown",
                            region: "Unknown",
                            city: "Unknown",
                            latitude: "Unknown",
                            longitude: "Unknown",
                            ip: "Unknown"
                        };
                    }
                };

                const locationData = await getUserLocation();
                setLocationData(locationData);
                const currentDate = getCurrentLocalDate();
                
                // Handle unique users and visits count
                const userRef = ref(database, `unique-users/${currentDate}/${visitorId}`);
                const userSnapshot = await get(userRef);

                let currentVisits = 0;
                if (userSnapshot.exists()) {
                    currentVisits = userSnapshot.val().visits || 0;
                }

                // Check for existing session
                sessionRef = ref(database, `active-sessions/${currentDate}/${visitorId}`);
                const sessionSnapshot = await get(sessionRef);
                
                if (!sessionSnapshot.exists()) {
                    console.log("Creating new session and incrementing visit count");
                    await set(sessionRef, {
                        startTime: serverTimestamp(),
                        lastActive: serverTimestamp()
                    });

                    await set(userRef, {
                        lastSeen: serverTimestamp(),
                        visits: currentVisits + 1,
                        location: locationData
                    });
                } else {
                    console.log("Existing session found - updating timestamp only");
                    await update(sessionRef, {
                        lastActive: serverTimestamp()
                    });
                }

                // Set up session heartbeat
                heartbeatInterval = setInterval(async () => {
                    try {
                        await update(sessionRef, {
                            lastActive: serverTimestamp()
                        });
                    } catch (error) {
                        console.error("Error updating session heartbeat:", error);
                    }
                }, 60000);

                // Replace temporary visit with permanent one
                if (tempVisitRef) {
                    try {
                        await remove(tempVisitRef);
                    } catch (error) {
                        console.error("Error removing temporary visit:", error);
                    }
                }

                // Create permanent visit
                visitRef = ref(database, `visits/${currentDate}/${currentVisitId}`);
                await set(visitRef, {
                    userId: visitorId,
                    timestamp: serverTimestamp(),
                    active: true,
                    location: locationData
                });
                isVisitActive = true;
                console.log("Started permanent visit tracking");


                // Simple visibility handler - use timestamp as session ID
                window.sessionCreationInProgress = false;
                
                const handleVisibilityChangeWithTracking = async () => {
                    console.log('Visibility event:', document.hidden ? 'HIDDEN' : 'VISIBLE', 'isTabActive:', isTabActive);
                    
                    if (document.hidden && isTabActive) {
                        // User left - end session immediately
                        console.log('🔚 USER LEFT - Ending session AND removing from active visits');
                        const now = Date.now();
                        totalActiveTime += (now - activeTimeStart);
                        console.log('Session ended. Total time:', Math.round(totalActiveTime / 1000), 'seconds');
                        
                        if (timeTrackingRef) {
                            await update(timeTrackingRef, {
                                sessionEnd: serverTimestamp(),
                                totalTime: now - sessionStartTime,
                                activeTime: totalActiveTime,
                                active: false
                            });
                        }
                        
                        // Remove from active visits AND active sessions immediately
                        if (isVisitActive && visitRef) {
                            await remove(visitRef);
                            isVisitActive = false;
                            console.log('✅ Removed from active visits in real-time');
                        }
                        
                        if (sessionRef) {
                            await remove(sessionRef);
                            console.log('✅ Removed from active sessions - next visit will increment count');
                        }
                        
                        // DON'T clear visitId on tab switch - keep same visit for return
                        
                        isTabActive = false;
                        
                    } else if (!document.hidden && !isTabActive) {
                        // User returned - check global flag first
                        if (window.sessionCreationInProgress) {
                            console.log('⚠️ BLOCKED - Session creation already in progress');
                            return;
                        }
                        
                        window.sessionCreationInProgress = true;
                        console.log('🆕 USER RETURNED - Starting session creation');
                        
                        try {
                            // Check if we need to increment visit count
                            const userRef = ref(database, `unique-users/${currentDate}/${visitorId}`);
                            const userSnapshot = await get(userRef);
                            
                            let currentVisits = 0;
                            if (userSnapshot.exists()) {
                                currentVisits = userSnapshot.val().visits || 0;
                            }
                            
                            // Check for existing session (should be removed when tab left)
                            sessionRef = ref(database, `active-sessions/${currentDate}/${visitorId}`);
                            const sessionSnapshot = await get(sessionRef);
                            
                            if (!sessionSnapshot.exists()) {
                                console.log("No active session found - incrementing visit count on return");
                                await set(sessionRef, {
                                    startTime: serverTimestamp(),
                                    lastActive: serverTimestamp()
                                });

                                await set(userRef, {
                                    lastSeen: serverTimestamp(),
                                    visits: currentVisits + 1,
                                    location: locationData
                                });
                                
                                console.log('✅ Visit count incremented on tab return');
                            } else {
                                console.log("Active session still exists - updating timestamp only");
                                await update(sessionRef, {
                                    lastActive: serverTimestamp()
                                });
                            }
                            
                            // Create unique session ID
                            const now = Date.now();
                            const newSessionId = now + '_' + Math.random().toString(36).substr(2, 5);
                            
                            timeTrackingSessionId = newSessionId;
                            sessionStorage.setItem('timeTrackingSessionId', timeTrackingSessionId);
                            
                            sessionStartTime = now;
                            sessionStorage.setItem('sessionStartTime', sessionStartTime.toString());
                            
                            totalActiveTime = 0;
                            activeTimeStart = now;
                            isTabActive = true;
                            
                            // Create Firebase ref and save
                            timeTrackingRef = ref(database, `time-tracking/${visitorId}/${timeTrackingSessionId}`);
                            await set(timeTrackingRef, {
                                sessionId: timeTrackingSessionId,
                                userId: visitorId,
                                sessionStart: serverTimestamp(),
                                totalTime: 0,
                                activeTime: 0,
                                active: true
                            });
                            
                            console.log('✅ Session created successfully:', timeTrackingSessionId);
                            
                            // Create new active visit when returning
                            if (!isVisitActive) {
                                visitRef = ref(database, `visits/${currentDate}/${currentVisitId}`);
                                await set(visitRef, {
                                    userId: visitorId,
                                    timestamp: serverTimestamp(),
                                    active: true,
                                    location: locationData
                                });
                                isVisitActive = true;
                                console.log('✅ Added back to active visits');
                            }
                            
                        } catch (error) {
                            console.error('Session creation failed:', error);
                        } finally {
                            window.sessionCreationInProgress = false;
                        }
                    }
                };

                document.addEventListener("visibilitychange", handleVisibilityChangeWithTracking);

                // Get or create session ID (persistent per browser tab)
                let timeTrackingSessionId = sessionStorage.getItem('timeTrackingSessionId');
                if (!timeTrackingSessionId) {
                    timeTrackingSessionId = Date.now().toString(36) + Math.random().toString(36).substr(2);
                    sessionStorage.setItem('timeTrackingSessionId', timeTrackingSessionId);
                    console.log('Created NEW session:', timeTrackingSessionId);
                } else {
                    console.log('Using EXISTING session:', timeTrackingSessionId);
                }

                // Get or initialize session start time
                let sessionStartTime = parseInt(sessionStorage.getItem('sessionStartTime'));
                if (!sessionStartTime) {
                    sessionStartTime = Date.now();
                    sessionStorage.setItem('sessionStartTime', sessionStartTime.toString());
                    console.log('Session start time initialized:', new Date(sessionStartTime));
                } else {
                    console.log('Using existing session start time:', new Date(sessionStartTime));
                }

                // Get existing active time or start fresh
                let totalActiveTime = parseInt(sessionStorage.getItem('totalActiveTime')) || 0;
                let activeTimeStart = Date.now();
                let isTabActive = !document.hidden;
                let timeTrackingRef = null;
                let tabHiddenTime = null; // Track when tab was hidden

                // Initialize time tracking in Firebase
                const initTimeTracking = async () => {
                    timeTrackingRef = ref(database, `time-tracking/${visitorId}/${timeTrackingSessionId}`);
                    const deviceType = window.innerWidth <= 768 ? 'mobile' : 'desktop';
                    
                    try {
                        // Check if session already exists
                        const existingSession = await get(timeTrackingRef);
                        
                        if (existingSession.exists()) {
                            // Update existing session
                            await update(timeTrackingRef, {
                                lastUpdate: serverTimestamp(),
                                active: true
                            });
                            console.log('Resumed existing time tracking session');
                        } else {
                            // Create new session
                            await set(timeTrackingRef, {
                                userId: visitorId,
                                sessionId: timeTrackingSessionId,
                                sessionStart: serverTimestamp(),
                                totalTime: 0,
                                activeTime: totalActiveTime,
                                location: locationData,
                                deviceType: deviceType,
                                active: true
                            });
                            console.log('Created new time tracking session');
                        }
                    } catch (error) {
                        console.error('Error initializing time tracking:', error);
                    }
                };

                // Update active time calculation
                const updateActiveTime = () => {
                    if (isTabActive) {
                        const now = Date.now();
                        totalActiveTime += (now - activeTimeStart);
                        activeTimeStart = now;
                    }
                };

                // Save current time data to Firebase and sessionStorage
                const saveTimeData = async () => {
                    if (!timeTrackingRef) return;
                    
                    updateActiveTime();
                    
                    // Save active time to sessionStorage for persistence
                    sessionStorage.setItem('totalActiveTime', totalActiveTime.toString());
                    
                    const now = Date.now();
                    const totalTime = now - sessionStartTime;
                    const engagementRate = totalTime > 0 ? totalActiveTime / totalTime : 0;
                    
                    try {
                        await update(timeTrackingRef, {
                            totalTime: totalTime,
                            activeTime: totalActiveTime,
                            engagementRate: Math.round(engagementRate * 100) / 100,
                            lastUpdate: serverTimestamp()
                        });
                    } catch (error) {
                        console.error('Error saving time data:', error);
                    }
                };

                // Initialize time tracking
                await initTimeTracking();

                // Show survey modal after page load delay
                const showSurveyAfterDelay = () => {
                    console.log('=== Survey Timer Fired ===');
                    console.log('onShowExitSurvey callback:', onShowExitSurvey);
                    console.log('visitorId:', visitorId);
                    console.log('locationData:', locationData);
                    console.log('currentVisitId:', currentVisitId);
                    
                    // Check if already completed in this session
                    const surveyCompleted = sessionStorage.getItem('exitSurveyCompleted');
                    const surveySkipped = sessionStorage.getItem('exitSurveySkipped');
                    
                    console.log('surveyCompleted:', surveyCompleted);
                    console.log('surveySkipped:', surveySkipped);
                    
                    if (surveyCompleted || surveySkipped) {
                        console.log('Survey already completed/skipped in this session');
                        return;
                    }

                    console.log('All conditions met - calling onShowExitSurvey');
                    
                    // Show the survey modal
                    if (onShowExitSurvey) {
                        onShowExitSurvey({
                            uniqueUserId: visitorId,
                            locationData: locationData,
                            currentVisitId: currentVisitId
                        });
                        console.log('onShowExitSurvey called successfully');
                    } else {
                        console.error('onShowExitSurvey callback is missing!');
                    }
                };

                // Show survey after 5 seconds for easier testing
                console.log('Setting up survey timer for 5 seconds...');
                setTimeout(showSurveyAfterDelay, 5000);

                // Track analytics
                analytics.logEvent('page_view', {
                    page_title: document.title,
                    page_location: window.location.href,
                    user_id: visitorId
                });

                // Periodic time data saving (every 30 seconds)
                const timeTrackingInterval = setInterval(async () => {
                    await saveTimeData();
                    const totalSeconds = Math.round((Date.now() - sessionStartTime) / 1000);
                    const activeSeconds = Math.round(totalActiveTime / 1000);
                    console.log(`Time tracking update - Total: ${totalSeconds}s, Active: ${activeSeconds}s`);
                }, 30000);

                const engagementInterval = setInterval(() => {
                    const sessionDuration = Math.floor((Date.now() - sessionStartTime) / 1000);
                    analytics.logEvent('user_engagement', {
                        engagement_time: sessionDuration,
                        type: 'user',
                        user_id: visitorId
                    });
                }, 60000);

                // Handle session end - save final time data
                const handleSessionEnd = async () => {
                    console.log('Session ending - saving final time data AND removing from active visits');
                    updateActiveTime(); // Final active time update
                    
                    const now = Date.now();
                    const totalTime = now - sessionStartTime;
                    const engagementRate = totalTime > 0 ? totalActiveTime / totalTime : 0;
                    
                    try {
                        await update(timeTrackingRef, {
                            sessionEnd: serverTimestamp(),
                            totalTime: totalTime,
                            activeTime: totalActiveTime,
                            engagementRate: Math.round(engagementRate * 100) / 100,
                            active: false
                        });
                        
                        // Remove from active visits on page close/reload
                        if (isVisitActive && visitRef) {
                            await remove(visitRef);
                            isVisitActive = false;
                            console.log('✅ Removed from active visits on page close/reload');
                        }
                        
                        // Clear visit ID only on page close (not reload) - for new visit when reopening
                        sessionStorage.removeItem('currentVisitId');
                        console.log('🗑️ Cleared visit ID - next reopen will create new visit');
                        
                        console.log('Final time data saved:', {
                            totalMinutes: Math.round(totalTime / 60000),
                            activeMinutes: Math.round(totalActiveTime / 60000),
                            engagement: Math.round(engagementRate * 100) + '%'
                        });
                    } catch (error) {
                        console.error('Error saving final time data:', error);
                    }
                };

                // Start new session (simplified - no need to end previous session)
                const startNewSession = async () => {
                    // Create new session ID and reset data
                    timeTrackingSessionId = Date.now().toString(36) + Math.random().toString(36).substr(2);
                    sessionStorage.setItem('timeTrackingSessionId', timeTrackingSessionId);
                    
                    sessionStartTime = Date.now();
                    sessionStorage.setItem('sessionStartTime', sessionStartTime.toString());
                    
                    totalActiveTime = 0;
                    sessionStorage.setItem('totalActiveTime', '0');
                    
                    console.log('🆕 Started NEW session:', timeTrackingSessionId);
                    
                    // Initialize new session in Firebase
                    await initTimeTracking();
                };

                // Add beforeunload for session end
                window.addEventListener('beforeunload', handleSessionEnd);
                window.addEventListener('pagehide', handleSessionEnd);

                // Clean up function
                return () => {
                    clearInterval(engagementInterval);
                    clearInterval(timeTrackingInterval);
                    clearInterval(heartbeatInterval);
                    document.removeEventListener("visibilitychange", handleVisibilityChangeWithTracking);
                    window.removeEventListener('beforeunload', handleSessionEnd);
                    window.removeEventListener('pagehide', handleSessionEnd);
                    
                    // Save final time data before cleanup
                    handleSessionEnd();
                    
                    // Clean up any active visits/sessions
                    if (isVisitActive && visitRef) {
                        remove(visitRef);
                    }
                    if (sessionRef) {
                        remove(sessionRef);
                    }
                };

            } catch (error) {
                console.error("Error in tracking initialization:", error);
            }
        };

        // Initialize full tracking
        initTracking();

    }, []);

    return null;
};

export default Tracker;