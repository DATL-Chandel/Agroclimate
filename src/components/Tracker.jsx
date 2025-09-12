import { useEffect, useState } from "react";
import { database, analytics } from "../firebase.jsx";
import { ref, set, get, update, remove, onValue, serverTimestamp } from "firebase/database";
import FingerprintJS from "@fingerprintjs/fingerprintjs";

// Global flag to prevent any possible double initialization across component instances
window.GLOBAL_TOOL_TRACKING_INITIALIZED = window.GLOBAL_TOOL_TRACKING_INITIALIZED || false;

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

    // Tool tracking functions
    const getCurrentTool = () => {
        const path = window.location.hash.substring(1) || '/';
        const toolMapping = {
            '/': 'home',
            '/ndvi': 'ndvi',
            '/spray': 'spray',
            '/crop-tracking': 'crop-tracking',
            '/crop-risk': 'crop-risk',
            '/irrigation-scheduler': 'irrigation-scheduler',
            '/docs': 'docs',
            '/feedback': 'feedback'
        };
        const detectedTool = toolMapping[path] || 'home';
        console.log('🔍 Tool Detection:', { path, detectedTool, fullHash: window.location.hash });
        return detectedTool;
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
        console.log('🚀 TRACKER useEffect triggered - this might run twice in development due to React Strict Mode');
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

                // Clean up old tool-users data (keep only last 7 days)
                const sevenDaysAgo = new Date();
                sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
                const cleanupDate = `${sevenDaysAgo.getFullYear()}-${String(sevenDaysAgo.getMonth() + 1).padStart(2, '0')}-${String(sevenDaysAgo.getDate()).padStart(2, '0')}`;
                
                const oldToolUsersRef = ref(database, `tool-users/${cleanupDate}`);
                await remove(oldToolUsersRef);
                console.log(`Cleaned up old tool-users from ${cleanupDate}`);

            } catch (error) {
                console.error("Error cleaning up old data:", error);
            }
        };

        // Tool tracking variables
        let currentTool = getCurrentTool();
        let toolStartTime = Date.now();
        let toolTrackingInitialized = false; // Prevent double initialization
        let initializationInProgress = false; // NEW: Prevent concurrent initialization
        let lastSwitchTime = 0; // Prevent double switches
        let lastSwitchTools = { from: '', to: '' }; // Track last switch
        let isTabActive = !document.hidden; // Track if tab is active
        let timeSpentBeforeTabSwitch = 0; // Store time before leaving tab

        // Initialize tool-users tracking
        const initializeToolTracking = async (visitorId, locationData, currentDate) => {
            try {
                if (toolTrackingInitialized) {
                    console.log('⚠️ Tool tracking already initialized (local), skipping...');
                    return;
                }

                if (initializationInProgress) {
                    console.log('⚠️ Initialization already in progress (local), skipping...');
                    return;
                }

                if (window.GLOBAL_TOOL_TRACKING_INITIALIZED) {
                    console.log('⚠️ Tool tracking already initialized (GLOBAL), skipping...');
                    toolTrackingInitialized = true; // Sync local flag
                    return;
                }

                // Mark as initializing to prevent concurrent calls
                initializationInProgress = true;
                window.GLOBAL_TOOL_TRACKING_INITIALIZED = true;
                console.log('🔒 LOCKING initialization - setting ALL flags:', { 
                    toolTrackingInitialized: false, 
                    initializationInProgress: true,
                    GLOBAL_TOOL_TRACKING_INITIALIZED: true
                });

                const currentTool = getCurrentTool();
                console.log('🚀 Initializing tool tracking for:', currentTool, 'User:', visitorId);
                console.log('🔍 Call stack for initialization:', new Error().stack?.split('\n')[2]?.trim());
                
                const toolUserRef = ref(database, `tool-users/${currentDate}/${visitorId}`);
                console.log('📍 Firebase path:', `tool-users/${currentDate}/${visitorId}`);
                
                const toolSnapshot = await get(toolUserRef);
                console.log('📊 Snapshot exists:', toolSnapshot.exists(), 'Data:', toolSnapshot.exists() ? toolSnapshot.val() : 'No existing data');
                
                let existingToolData = toolSnapshot.exists() ? toolSnapshot.val() : {
                    toolVisits: {},
                    toolTimeSpent: {},
                    totalToolSwitches: 0
                };

                // Clean up any undefined values in toolTimeSpent to prevent Firebase errors
                if (existingToolData.toolTimeSpent) {
                    Object.keys(existingToolData.toolTimeSpent).forEach(key => {
                        if (existingToolData.toolTimeSpent[key] === undefined || existingToolData.toolTimeSpent[key] === null) {
                            existingToolData.toolTimeSpent[key] = 0;
                        }
                    });
                } else {
                    existingToolData.toolTimeSpent = {};
                }

                console.log('📊 Existing tool data:', existingToolData);

                // Check if this is truly the first session/visit
                const hasVisitedBefore = existingToolData.toolVisits[currentTool] && existingToolData.toolVisits[currentTool] > 0;
                const currentVisitCount = existingToolData.toolVisits[currentTool] || 0;
                
                console.log('🔍 Visit analysis:', {
                    currentTool,
                    hasVisitedBefore,
                    currentVisitCount,
                    existingVisits: existingToolData.toolVisits
                });
                
                if (!hasVisitedBefore) {
                    // First time visiting this tool - start with 1
                    existingToolData.toolVisits[currentTool] = 1;
                    console.log('🆕 FIRST TIME visit to', currentTool, '- setting count to 1');
                } else {
                    // Already visited before, this is a new session/visit
                    existingToolData.toolVisits[currentTool] = currentVisitCount + 1;
                    console.log('🔄 RETURNING to', currentTool, '- incrementing from', currentVisitCount, 'to', existingToolData.toolVisits[currentTool]);
                }
                
                console.log('📊 Visit count logic:', {
                    tool: currentTool,
                    wasFirstTime: !hasVisitedBefore,
                    previousCount: currentVisitCount,
                    newCount: existingToolData.toolVisits[currentTool]
                });

                console.log('📝 Updating tool data:', {
                    currentTool,
                    toolVisits: existingToolData.toolVisits,
                    totalSwitches: existingToolData.totalToolSwitches
                });

                    // Update tool-users collection
                    const cleanData = {
                        currentTool: currentTool,
                        lastSeen: serverTimestamp(),
                        toolVisits: existingToolData.toolVisits || {},
                        toolTimeSpent: existingToolData.toolTimeSpent || {},
                        totalToolSwitches: existingToolData.totalToolSwitches || 0,
                        deviceType: window.innerWidth <= 480 ? 'mobile' : 'desktop',
                        location: locationData || {}
                    };
                    
                    console.log('💾 Final data to save:', cleanData);
                    await set(toolUserRef, cleanData);

                console.log("✅ Tool tracking initialized successfully for:", currentTool);
                
                // Mark as fully initialized
                toolTrackingInitialized = true;
                initializationInProgress = false;
                console.log('🔓 UNLOCKING initialization - setting flags:', { 
                    toolTrackingInitialized: true, 
                    initializationInProgress: false 
                });
                
            } catch (error) {
                console.error("❌ Error initializing tool tracking:", error);
                
                // Reset flags on error to allow retry
                toolTrackingInitialized = false;
                initializationInProgress = false;
                console.log('🔓 ERROR RESET - setting flags:', { 
                    toolTrackingInitialized: false, 
                    initializationInProgress: false 
                });
            }
        };

        // Handle tool switches
        const handleToolSwitch = async (visitorId, fromTool, toTool, timeSpent, locationData, currentDate) => {
            try {
                console.log('🔀 handleToolSwitch called:', { visitorId, fromTool, toTool, timeSpent, currentDate });
                
                // Prevent duplicate switches within 1 second
                const now = Date.now();
                const timeSinceLastSwitch = now - lastSwitchTime;
                const isSameSwitch = lastSwitchTools.from === fromTool && lastSwitchTools.to === toTool;
                
                if (timeSinceLastSwitch < 1000 && isSameSwitch) {
                    console.log('⚠️ Duplicate switch detected within 1 second, ignoring...', {
                        timeSinceLastSwitch,
                        lastSwitch: lastSwitchTools,
                        currentSwitch: { from: fromTool, to: toTool }
                    });
                    return;
                }
                
                // Update last switch tracking
                lastSwitchTime = now;
                lastSwitchTools = { from: fromTool, to: toTool };
                
                const toolUserRef = ref(database, `tool-users/${currentDate}/${visitorId}`);
                const toolSnapshot = await get(toolUserRef);
                
                let existingToolData = toolSnapshot.exists() ? toolSnapshot.val() : {
                    toolVisits: {},
                    toolTimeSpent: {},
                    totalToolSwitches: 0
                };

                // Clean up any undefined values to prevent Firebase errors
                if (existingToolData.toolTimeSpent) {
                    Object.keys(existingToolData.toolTimeSpent).forEach(key => {
                        if (existingToolData.toolTimeSpent[key] === undefined || existingToolData.toolTimeSpent[key] === null) {
                            existingToolData.toolTimeSpent[key] = 0;
                        }
                    });
                } else {
                    existingToolData.toolTimeSpent = {};
                }

                console.log('📊 Current tool data before update:', existingToolData);

                // Update time spent on previous tool
                if (fromTool && timeSpent > 0) {
                    existingToolData.toolTimeSpent[fromTool] = (existingToolData.toolTimeSpent[fromTool] || 0) + timeSpent;
                    console.log('⏱️ Updated time for', fromTool, ':', existingToolData.toolTimeSpent[fromTool] + 'ms');
                }

                // Only update if switching to a new tool (not when leaving the app)
                if (toTool) {
                    // Always increment visit count each time user visits a tool
                    existingToolData.toolVisits[toTool] = (existingToolData.toolVisits[toTool] || 0) + 1;
                    console.log('🆕 Visit to', toTool, '- count now:', existingToolData.toolVisits[toTool]);
                    
                    // Increment switch count (this should increment on every switch)
                    existingToolData.totalToolSwitches += 1;

                    console.log('📝 Writing to Firebase:', {
                        path: `tool-users/${currentDate}/${visitorId}`,
                        switchNumber: existingToolData.totalToolSwitches,
                        data: {
                            currentTool: toTool,
                            toolVisits: existingToolData.toolVisits,
                            totalSwitches: existingToolData.totalToolSwitches
                        }
                    });

                    // Update tool-users collection with new current tool
                    const cleanSwitchData = {
                        currentTool: toTool,
                        lastSeen: serverTimestamp(),
                        toolVisits: existingToolData.toolVisits || {},
                        toolTimeSpent: existingToolData.toolTimeSpent || {},
                        totalToolSwitches: existingToolData.totalToolSwitches || 0,
                        deviceType: window.innerWidth <= 480 ? 'mobile' : 'desktop',
                        location: locationData || {}
                    };
                    
                    console.log('💾 Switch data to save:', cleanSwitchData);
                    await set(toolUserRef, cleanSwitchData);

                    console.log(`✅ Tool switched successfully: ${fromTool} -> ${toTool}, Time spent: ${timeSpent}ms`);
                    
                    // Summary log for easier debugging
                    console.log('📊 SWITCH SUMMARY:', {
                        switch: `${fromTool} → ${toTool}`,
                        timeSpent: `${Math.round(timeSpent/1000)}s`,
                        visits: existingToolData.toolVisits,
                        totalSwitches: existingToolData.totalToolSwitches,
                        newVisitCount: existingToolData.toolVisits[toTool]
                    });
                } else {
                    // Just update time spent when leaving (final update)
                    const cleanFinalData = {
                        lastSeen: serverTimestamp(),
                        toolTimeSpent: existingToolData.toolTimeSpent || {}
                    };
                    
                    console.log('💾 Final update data:', cleanFinalData);
                    await update(toolUserRef, cleanFinalData);

                    console.log(`✅ Final tool time update: ${fromTool}, Time spent: ${timeSpent}ms`);
                }
            } catch (error) {
                console.error("❌ Error handling tool switch:", error);
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

                // Initialize tool-users tracking
                currentTool = getCurrentTool(); // Update current tool variable
                console.log('🎯 Initial tool set to:', currentTool);
                
                // TEMPORARY: Reset tool data for testing (remove this later)
                if (window.location.search.includes('reset=true')) {
                    console.log('🔄 RESET MODE: Clearing existing tool data for testing...');
                    const toolUserRef = ref(database, `tool-users/${currentDate}/${visitorId}`);
                    await remove(toolUserRef);
                    console.log('✅ Tool data reset complete - you can now test clean visit counting');
                    
                    // Also reset ALL tracking initialization flags
                    toolTrackingInitialized = false;
                    initializationInProgress = false;
                    window.GLOBAL_TOOL_TRACKING_INITIALIZED = false;
                    console.log('🔄 Reset ALL initialization flags - ready for fresh start:', {
                        toolTrackingInitialized: false,
                        initializationInProgress: false,
                        GLOBAL_TOOL_TRACKING_INITIALIZED: false
                    });
                }
                
                console.log('📞 About to call initializeToolTracking - ALL flag status:', { 
                    toolTrackingInitialized, 
                    initializationInProgress,
                    GLOBAL_TOOL_TRACKING_INITIALIZED: window.GLOBAL_TOOL_TRACKING_INITIALIZED
                });
                await initializeToolTracking(visitorId, locationData, currentDate);
                console.log('📞 Completed initializeToolTracking call - ALL flag status:', { 
                    toolTrackingInitialized, 
                    initializationInProgress,
                    GLOBAL_TOOL_TRACKING_INITIALIZED: window.GLOBAL_TOOL_TRACKING_INITIALIZED
                });

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
                        
                        // CRITICAL: Only update totalActiveTime if we have a valid active session
                        if (window.currentActiveSessionId && timeTrackingRef) {
                            const currentSessionFromRef = timeTrackingRef.toString().split('/').pop();
                            if (currentSessionFromRef === window.currentActiveSessionId) {
                        totalActiveTime += (now - activeTimeStart);
                                console.log('✅ Session ended with final time update for:', window.currentActiveSessionId.substr(-5));
                            } else {
                                console.log('🛑 Session end: ID mismatch detected - skipping final time update');
                                console.log('Expected:', window.currentActiveSessionId, 'Found:', currentSessionFromRef);
                            }
                        } else {
                            console.log('⚠️ Session end: No active session ID or ref - skipping final time update');
                        }
                        
                        console.log('Session ended. Total time:', Math.round(totalActiveTime / 1000), 'seconds');
                        
                        if (timeTrackingRef && window.currentActiveSessionId) {
                            // Final validation before ending session
                            const currentSessionFromRef = timeTrackingRef.toString().split('/').pop();
                            if (currentSessionFromRef === window.currentActiveSessionId) {
                            await update(timeTrackingRef, {
                                sessionEnd: serverTimestamp(),
                                totalTime: now - sessionStartTime,
                                activeTime: totalActiveTime,
                                active: false
                            });
                                console.log('✅ Session successfully ended in Firebase:', window.currentActiveSessionId.substr(-5));
                            } else {
                                console.log('🛑 BLOCKED Firebase update - session ID mismatch on end');
                                console.log('Expected:', window.currentActiveSessionId, 'Found:', currentSessionFromRef);
                            }
                        } else {
                            console.log('⚠️ No timeTrackingRef or active session ID - skipping Firebase update');
                        }
                        
                        // CRITICAL: Clear time tracking interval to prevent further updates to ended session
                        if (window.currentTimeTrackingInterval) {
                            clearInterval(window.currentTimeTrackingInterval);
                            window.currentTimeTrackingInterval = null;
                            console.log('🛑 STOPPED time tracking interval - ended session will NOT be updated anymore!');
                            console.log('📊 Final session data is now LOCKED - no more changes will occur');
                        }
                        
                        // Clear active session ID and set end flag to prevent any stray updates
                        const endedSessionId = window.currentActiveSessionId;
                        window.currentActiveSessionId = null;
                        window.sessionEndedFlag = true; // Global flag to block all updates
                        
                        console.log('🔒 Session completely ended and locked:', {
                            endedSession: endedSessionId?.substr(-5),
                            sessionEndedFlag: true,
                            message: 'All further updates to this session are now BLOCKED'
                        });
                        
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
                            
                            // Create COMPLETELY NEW unique session ID (preserves previous session)
                            const now = Date.now();
                            const newSessionId = now + '_' + Math.random().toString(36).substr(2, 5);
                            
                            console.log('🆕 NEW SESSION CREATED:', {
                                previousSession: timeTrackingSessionId || 'none',
                                newSession: newSessionId,
                                behavior: 'Previous session data PRESERVED (no overwriting)'
                            });
                            
                            timeTrackingSessionId = newSessionId;
                            sessionStorage.setItem('timeTrackingSessionId', newSessionId);
                            
                            // CRITICAL: Clear old sessionStartTime first, then set new one
                            sessionStorage.removeItem('sessionStartTime'); 
                            sessionStartTime = now;
                            sessionStorage.setItem('sessionStartTime', sessionStartTime.toString());
                            
                            console.log('🔄 NEW session time set:', {
                                sessionId: newSessionId,
                                sessionStartTime: new Date(sessionStartTime),
                                timestamp: sessionStartTime
                            });
                            
                            // Flag to prevent sessionStartTime from being overridden later
                            window.newSessionJustCreated = true;
                            
                            // CRITICAL: Reset session variables for complete isolation
                            totalActiveTime = 0;
                            sessionStorage.setItem('totalActiveTime', '0'); // Clear stored value too
                            activeTimeStart = now;
                            isTabActive = true;
                            
                            console.log('🔄 Session variables reset for isolation:', {
                                totalActiveTime: 0,
                                activeTimeStart: new Date(now),
                                sessionId: newSessionId.substr(-5)
                            });
                            
                            // CRITICAL: Clear old timeTrackingRef to prevent updates to previous session
                            const oldTimeTrackingRef = timeTrackingRef;
                            timeTrackingRef = null; // Clear first to prevent race conditions
                            
                            // Create Firebase ref with BRAND NEW session ID  
                            timeTrackingRef = ref(database, `time-tracking/${visitorId}/${newSessionId}`);
                            
                            console.log('🔄 Session reference changed:', {
                                oldRef: oldTimeTrackingRef ? 'Previous session ref' : 'None',
                                newRef: `time-tracking/${visitorId}/${newSessionId}`,
                                behavior: 'Old session can no longer be updated'
                            });
                            await set(timeTrackingRef, {
                                sessionId: newSessionId,
                                userId: visitorId,
                                sessionStart: serverTimestamp(),
                                totalTime: 0,
                                activeTime: 0,
                                active: true,
                                sessionType: 'tab-return' // Mark as return session
                            });
                            
                            console.log('✅ NEW session created & saved to Firebase:', newSessionId);
                            console.log('📊 Your session data is preserved - each session gets its own ID!');
                            
                            // Start new time tracking interval SPECIFIC to this session
                            if (window.currentTimeTrackingInterval) {
                                clearInterval(window.currentTimeTrackingInterval);
                                console.log('🧹 Cleared previous session interval');
                            }
                            
                            // Store current session ID for interval validation and clear ended flag
                            window.currentActiveSessionId = newSessionId;
                            window.sessionEndedFlag = false; // Clear ended flag for new session
                            
                            console.log('🆕 New session activated:', {
                                sessionId: newSessionId.substr(-5),
                                sessionEndedFlag: false,
                                message: 'Updates now ENABLED for this session'
                            });
                            
                            window.currentTimeTrackingInterval = setInterval(async () => {
                                // CRITICAL: Check session ended flag first
                                if (window.sessionEndedFlag) {
                                    console.log('🛑 NEW session interval: Session ended flag detected - stopping interval');
                                    clearInterval(window.currentTimeTrackingInterval);
                                    return;
                                }
                                
                                // CRITICAL: Only update if this interval belongs to the current active session
                                if (window.currentActiveSessionId !== newSessionId) {
                                    console.log('🛑 OLD interval detected - stopping to prevent cross-session updates');
                                    clearInterval(window.currentTimeTrackingInterval);
                                    return;
                                }
                                
                                if (isTabActive && timeTrackingRef) {
                                    await saveTimeData();
                                    const totalSeconds = Math.round((Date.now() - sessionStartTime) / 1000);
                                    const activeSeconds = Math.round(totalActiveTime / 1000);
                                    console.log(`Session ${newSessionId.substr(-5)} time update - Total: ${totalSeconds}s, Active: ${activeSeconds}s`);
                                } else {
                                    console.log('⏸️ Session inactive - skipping time update');
                                }
                            }, 30000);
                            console.log('⏰ Started NEW interval for session:', newSessionId.substr(-5));
                            
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

                // Get or initialize session start time (but don't override if new session was just created)
                let sessionStartTime;
                if (window.newSessionJustCreated) {
                    // Use the sessionStartTime that was just set by new session creation
                    sessionStartTime = parseInt(sessionStorage.getItem('sessionStartTime'));
                    console.log('✅ Using NEW session start time (just created):', new Date(sessionStartTime));
                    window.newSessionJustCreated = false; // Clear flag
                } else {
                    // Normal initialization for first-time visits
                    sessionStartTime = parseInt(sessionStorage.getItem('sessionStartTime'));
                if (!sessionStartTime) {
                    sessionStartTime = Date.now();
                    sessionStorage.setItem('sessionStartTime', sessionStartTime.toString());
                        console.log('Session start time initialized for first visit:', new Date(sessionStartTime));
                } else {
                    console.log('Using existing session start time:', new Date(sessionStartTime));
                    }
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
                    const deviceType = window.innerWidth <= 480 ? 'mobile' : 'desktop';
                    
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

                // Update active time calculation with session validation
                const updateActiveTime = () => {
                    // CRITICAL: Check global session ended flag first
                    if (window.sessionEndedFlag) {
                        console.log('🛑 updateActiveTime: Session ended flag detected - BLOCKING all updates');
                        return;
                    }
                    
                    // CRITICAL: Only update if we're in an active session
                    if (!window.currentActiveSessionId || !isTabActive) {
                        console.log('🛑 updateActiveTime: No active session or tab inactive - skipping');
                        return;
                    }
                    
                    // Additional safety: Verify timeTrackingRef matches current session
                    if (timeTrackingRef) {
                        const currentSessionFromRef = timeTrackingRef.toString().split('/').pop();
                        if (currentSessionFromRef !== window.currentActiveSessionId) {
                            console.log('🛑 updateActiveTime: Session mismatch detected - preventing update');
                            console.log('Current session:', window.currentActiveSessionId, 'Ref session:', currentSessionFromRef);
                            return;
                        }
                    }
                    
                    if (isTabActive) {
                        const now = Date.now();
                        totalActiveTime += (now - activeTimeStart);
                        activeTimeStart = now;
                        console.log('✅ Active time updated for session:', window.currentActiveSessionId?.substr(-5));
                    }
                };

                // Save current time data to Firebase and sessionStorage
                const saveTimeData = async () => {
                    // CRITICAL: Check global session ended flag first
                    if (window.sessionEndedFlag) {
                        console.log('🛑 saveTimeData: Session ended flag detected - BLOCKING all updates');
                        return;
                    }
                    
                    if (!timeTrackingRef) {
                        console.log('⚠️ saveTimeData: No timeTrackingRef - skipping update');
                        return;
                    }
                    
                    // Safety check: Don't update if session is not active
                    if (!isTabActive) {
                        console.log('🛑 saveTimeData: Session inactive - skipping update to prevent data corruption');
                        return;
                    }
                    
                    updateActiveTime();
                    
                    // Save active time to sessionStorage for persistence
                    sessionStorage.setItem('totalActiveTime', totalActiveTime.toString());
                    
                    const now = Date.now();
                    const totalTime = now - sessionStartTime;
                    const engagementRate = totalTime > 0 ? totalActiveTime / totalTime : 0;
                    
                    try {
                        // Additional safety check: Verify we're updating the correct session
                        const currentSessionFromRef = timeTrackingRef.toString().split('/').pop();
                        if (window.currentActiveSessionId && window.currentActiveSessionId !== currentSessionFromRef) {
                            console.log('🛑 saveTimeData: Session ID mismatch detected - preventing cross-session update');
                            console.log('Expected:', window.currentActiveSessionId, 'Found:', currentSessionFromRef);
                            return;
                        }
                        
                        await update(timeTrackingRef, {
                            totalTime: totalTime,
                            activeTime: totalActiveTime,
                            engagementRate: Math.round(engagementRate * 100) / 100,
                            lastUpdate: serverTimestamp()
                        });
                        
                        console.log('✅ Time data updated for session:', currentSessionFromRef?.substr(-5));
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

                // Track analytics (with error handling)
                try {
                    if (analytics && typeof analytics.logEvent === 'function') {
                analytics.logEvent('page_view', {
                    page_title: document.title,
                    page_location: window.location.href,
                    user_id: visitorId
                });
                        console.log('📊 Analytics event logged successfully');
                    } else {
                        console.warn('⚠️ Analytics not available or logEvent not a function');
                    }
                } catch (error) {
                    console.warn('⚠️ Analytics error (non-blocking):', error.message);
                }

                // Set up tool tracking hash change listener
                const handleHashChange = (event) => {
                    console.log('🔄 Hash change detected!', { 
                        old: event?.oldURL || 'unknown', 
                        new: event?.newURL || window.location.href,
                        hash: window.location.hash 
                    });
                    
                    const newTool = getCurrentTool();
                    console.log('🔄 Tool change:', { from: currentTool, to: newTool });
                    
                    if (newTool !== currentTool) {
                        // Calculate time spent only if tab was active
                        let timeSpent = 0;
                        if (isTabActive) {
                            timeSpent = Date.now() - toolStartTime;
                        } else {
                            // If tab is not active, use the time before tab switch
                            timeSpent = timeSpentBeforeTabSwitch;
                        }
                        
                        const currentDate = getCurrentLocalDate();
                        
                        console.log('⏱️ Time spent on', currentTool, ':', Math.round(timeSpent / 1000), 'seconds (tab active:', isTabActive, ')');
                        
                        // Handle tool switch
                        handleToolSwitch(visitorId, currentTool, newTool, timeSpent, locationData, currentDate);
                        
                        // Update current tool and reset timer
                        currentTool = newTool;
                        toolStartTime = Date.now();
                        timeSpentBeforeTabSwitch = 0; // Reset
                    } else {
                        console.log('🔄 Same tool, no switch needed');
                    }
                };

                // Also listen for popstate events (browser back/forward)
                const handlePopState = (event) => {
                    console.log('📍 PopState event detected!', window.location.hash);
                    handleHashChange(); // Reuse the hash change logic
                };

                // Listen for hash changes (menu navigation)
                console.log('👂 Setting up navigation listeners for current URL:', window.location.href);
                window.addEventListener('hashchange', handleHashChange);
                window.addEventListener('popstate', handlePopState);

                // Test hash change detection
                console.log('🧪 Testing hash change detection by manually triggering...');
                setTimeout(() => {
                    console.log('🧪 Manual hash change test - current tool:', getCurrentTool());
                }, 1000);

                // Tab visibility change handler for pause/resume time tracking
                const handleVisibilityChange = async () => {
                    const wasActive = isTabActive;
                    isTabActive = !document.hidden;
                    
                    console.log('👁️ Tab visibility changed:', { 
                        wasActive, 
                        nowActive: isTabActive, 
                        currentTool,
                        hidden: document.hidden 
                    });
                    
                    if (!isTabActive && wasActive) {
                        // User left tab - pause time tracking AND clear current tool
                        timeSpentBeforeTabSwitch = Date.now() - toolStartTime;
                        console.log('⏸️ User left tab - paused time tracking after', Math.round(timeSpentBeforeTabSwitch/1000), 'seconds on', currentTool);
                        
                        // Save time spent and clear currentTool when user switches to other tabs
                        try {
                            const currentDate = getCurrentLocalDate();
                            const toolUserRef = ref(database, `tool-users/${currentDate}/${visitorId}`);
                            
                            // Get current data first to update time spent
                            const toolSnapshot = await get(toolUserRef);
                            if (toolSnapshot.exists()) {
                                const existingData = toolSnapshot.val();
                                
                                // Update time spent IMMEDIATELY when leaving tab
                                if (timeSpentBeforeTabSwitch > 0) {
                                    existingData.toolTimeSpent = existingData.toolTimeSpent || {};
                                    existingData.toolTimeSpent[currentTool] = (existingData.toolTimeSpent[currentTool] || 0) + timeSpentBeforeTabSwitch;
                                    
                                    console.log('💾 INSTANT save - added', Math.round(timeSpentBeforeTabSwitch/1000), 'seconds to', currentTool, 'when leaving tab');
                                }
                                
                                const cleanTabSwitchData = {
                                    currentTool: null, // Clear when switching to other tabs
                                    lastSeen: serverTimestamp(),
                                    toolVisits: existingData.toolVisits || {},
                                    toolTimeSpent: existingData.toolTimeSpent || {},
                                    totalToolSwitches: existingData.totalToolSwitches || 0,
                                    deviceType: window.innerWidth <= 480 ? 'mobile' : 'desktop',
                                    location: locationData || {}
                                };
                                
                                await set(toolUserRef, cleanTabSwitchData);
                                console.log('🚫 Cleared currentTool & saved time - user switched to other tab');
                            } else {
                                // Fallback if no existing data
                                await update(toolUserRef, {
                                    currentTool: null,
                                    lastSeen: serverTimestamp()
                                });
                                console.log('🚫 Cleared currentTool - user switched to other tab (no existing data)');
                            }
                        } catch (error) {
                            console.error('❌ Error saving time and clearing currentTool on tab switch:', error);
                        }
                        
                    } else if (isTabActive && !wasActive) {
                        // User returned to tab - resume time tracking and increment visit count
                        toolStartTime = Date.now(); // Reset timer
                        
                        console.log('▶️ User returned to tab - resuming time tracking for', currentTool);
                        
                        // Increment visit count when returning to tab
                        const currentDate = getCurrentLocalDate();
                        const toolUserRef = ref(database, `tool-users/${currentDate}/${visitorId}`);
                        const toolSnapshot = await get(toolUserRef);
                        
                        if (toolSnapshot.exists()) {
                            const existingData = toolSnapshot.val();
                            existingData.toolVisits[currentTool] = (existingData.toolVisits[currentTool] || 0) + 1;
                            
                            // Time already saved when leaving tab, no need to add it again
                            // (timeSpentBeforeTabSwitch was already saved in the leave-tab handler)
                            
                            const cleanReturnData = {
                                currentTool: currentTool, // Restore current tool when returning
                                lastSeen: serverTimestamp(),
                                toolVisits: existingData.toolVisits || {},
                                toolTimeSpent: existingData.toolTimeSpent || {},
                                totalToolSwitches: existingData.totalToolSwitches || 0,
                                deviceType: window.innerWidth <= 480 ? 'mobile' : 'desktop',
                                location: locationData || {}
                            };
                            
                            await set(toolUserRef, cleanReturnData);
                            
                            console.log('🔄 Tab return - incremented visit count for', currentTool, 'to', existingData.toolVisits[currentTool]);
                            console.log('✅ Restored currentTool to:', currentTool, '- user returned from other tab');
                            console.log('ℹ️ Time was already saved when leaving tab, no double-counting');
                        }
                        
                        timeSpentBeforeTabSwitch = 0; // Reset
                    }
                };
                
                // Listen for tab visibility changes
                document.addEventListener('visibilitychange', handleVisibilityChange);
                console.log('👁️ Tab visibility monitoring enabled');

                // Monitor URL changes more broadly (for debugging)
                let lastUrl = window.location.href;
                const urlMonitor = setInterval(() => {
                    const currentUrl = window.location.href;
                    if (currentUrl !== lastUrl) {
                        console.log('🌐 URL changed detected by monitor:', { 
                            from: lastUrl, 
                            to: currentUrl,
                            tool: getCurrentTool()
                        });
                        lastUrl = currentUrl;
                        
                        // Manually trigger hash change handler if needed
                        handleHashChange();
                    }
                }, 500); // Check every 500ms

                // Store initial session ID for interval validation and clear ended flag
                window.currentActiveSessionId = timeTrackingSessionId;
                window.sessionEndedFlag = false; // Ensure ended flag is cleared for initial session
                
                console.log('🚀 Initial session activated:', {
                    sessionId: timeTrackingSessionId.substr(-5),
                    sessionEndedFlag: false,
                    message: 'Updates ENABLED for initial session'
                });
                
                // Periodic time data saving (every 30 seconds) - stored globally so it can be cleared on session end
                window.currentTimeTrackingInterval = setInterval(async () => {
                    // CRITICAL: Check session ended flag first
                    if (window.sessionEndedFlag) {
                        console.log('🛑 Initial interval: Session ended flag detected - stopping interval');
                        clearInterval(window.currentTimeTrackingInterval);
                        return;
                    }
                    
                    // CRITICAL: Only update if this interval belongs to the current active session
                    if (window.currentActiveSessionId !== timeTrackingSessionId) {
                        console.log('🛑 OLD initial interval detected - stopping to prevent cross-session updates');
                        clearInterval(window.currentTimeTrackingInterval);
                        return;
                    }
                    
                    // Only update if session is still active
                    if (isTabActive && timeTrackingRef) {
                    await saveTimeData();
                    const totalSeconds = Math.round((Date.now() - sessionStartTime) / 1000);
                    const activeSeconds = Math.round(totalActiveTime / 1000);
                        console.log(`Session ${timeTrackingSessionId.substr(-5)} time update - Total: ${totalSeconds}s, Active: ${activeSeconds}s`);
                    } else {
                        console.log('⏸️ Session inactive - skipping time update');
                    }
                }, 30000);

                const engagementInterval = setInterval(() => {
                    try {
                    const sessionDuration = Math.floor((Date.now() - sessionStartTime) / 1000);
                        if (analytics && typeof analytics.logEvent === 'function') {
                    analytics.logEvent('user_engagement', {
                        engagement_time: sessionDuration,
                        type: 'user',
                        user_id: visitorId
                    });
                        }
                    } catch (error) {
                        console.warn('⚠️ Engagement analytics error (non-blocking):', error.message);
                    }
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
                        
                        // Clear currentTool in tool-users collection when user leaves website
                        try {
                            const currentDate = getCurrentLocalDate();
                            const toolUserRef = ref(database, `tool-users/${currentDate}/${visitorId}`);
                            
                            await update(toolUserRef, {
                                currentTool: null, // Clear current tool when leaving
                                lastSeen: serverTimestamp()
                            });
                            
                            console.log('🚪 Cleared currentTool on website exit - user left the site');
                        } catch (error) {
                            console.error('❌ Error clearing currentTool on exit:', error);
                        }
                        
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
                    
                    // Clear old sessionStartTime first, then set new one
                    sessionStorage.removeItem('sessionStartTime');
                    sessionStartTime = Date.now();
                    sessionStorage.setItem('sessionStartTime', sessionStartTime.toString());
                    
                    console.log('🔄 Reset sessionStartTime for brand new session:', new Date(sessionStartTime));
                    
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
                    // Save final tool time before cleanup
                    let finalTimeSpent = 0;
                    if (isTabActive) {
                        finalTimeSpent = Date.now() - toolStartTime;
                    } else {
                        finalTimeSpent = timeSpentBeforeTabSwitch;
                    }
                    
                    if (finalTimeSpent > 0 && currentTool && visitorId) {
                        const currentDate = getCurrentLocalDate();
                        console.log('💾 Final cleanup - saving', Math.round(finalTimeSpent/1000), 'seconds for', currentTool);
                        handleToolSwitch(visitorId, currentTool, null, finalTimeSpent, locationData, currentDate).catch(console.error);
                    }

                    // Clear currentTool on component cleanup (redundant with handleSessionEnd but ensures it's cleared)
                    if (visitorId) {
                        try {
                            const currentDate = getCurrentLocalDate();
                            const toolUserRef = ref(database, `tool-users/${currentDate}/${visitorId}`);
                            update(toolUserRef, {
                                currentTool: null,
                                lastSeen: serverTimestamp()
                            }).catch(error => console.error('❌ Error clearing currentTool in cleanup:', error));
                            console.log('🧹 Component cleanup - cleared currentTool');
                        } catch (error) {
                            console.error('❌ Error in currentTool cleanup:', error);
                        }
                    }

                    clearInterval(engagementInterval);
                    if (window.currentTimeTrackingInterval) {
                        clearInterval(window.currentTimeTrackingInterval);
                        window.currentTimeTrackingInterval = null;
                    }
                    clearInterval(heartbeatInterval);
                    clearInterval(urlMonitor);
                    document.removeEventListener("visibilitychange", handleVisibilityChangeWithTracking);
                    document.removeEventListener('visibilitychange', handleVisibilityChange);
                    window.removeEventListener('beforeunload', handleSessionEnd);
                    window.removeEventListener('pagehide', handleSessionEnd);
                    window.removeEventListener('hashchange', handleHashChange);
                    window.removeEventListener('popstate', handlePopState);
                    
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