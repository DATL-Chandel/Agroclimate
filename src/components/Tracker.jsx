import { useEffect, useState } from "react";
import { database, analytics } from "../firebase.jsx";
import { ref, set, get, update, remove, onValue, serverTimestamp } from "firebase/database";
import FingerprintJS from "@fingerprintjs/fingerprintjs";

const Tracker = () => {
    const [uniqueUserId, setUniqueUserId] = useState(null);
    
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
    
    const currentVisitId = Date.now().toString(36);
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

                // Handle tab visibility changes
                const handleVisibilityChange = async () => {
                    if (document.visibilityState === "visible") {
                        if (!isVisitActive) {
                            isVisitActive = true;
                            await set(visitRef, {
                                userId: visitorId,
                                timestamp: serverTimestamp(),
                                active: true,
                                location: locationData
                            });
                        }
                    } else {
                        if (isVisitActive) {
                            isVisitActive = false;
                            await remove(visitRef);
                        }
                    }
                };

                document.addEventListener("visibilitychange", handleVisibilityChange);

                // Handle page unload/close
                const handleBeforeUnload = async () => {
                    if (isVisitActive) {
                        await remove(visitRef);
                    }
                    await remove(sessionRef);
                };

                window.addEventListener('beforeunload', handleBeforeUnload);

                // Track analytics
                analytics.logEvent('page_view', {
                    page_title: document.title,
                    page_location: window.location.href,
                    user_id: visitorId
                });

                let sessionStartTime = Date.now();
                const engagementInterval = setInterval(() => {
                    const sessionDuration = Math.floor((Date.now() - sessionStartTime) / 1000);
                    analytics.logEvent('user_engagement', {
                        engagement_time: sessionDuration,
                        type: 'user',
                        user_id: visitorId
                    });
                }, 60000);

                // Clean up function
                return () => {
                    clearInterval(engagementInterval);
                    clearInterval(heartbeatInterval);
                    document.removeEventListener("visibilitychange", handleVisibilityChange);
                    window.removeEventListener('beforeunload', handleBeforeUnload);
                    
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