import React, { useState, useEffect } from 'react';

const IrrigationSchedulerViewer = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const irrigationUrl = isMobile ? import.meta.env.VITE_GEE_URL_IRRIGATION_SCHEDULER_MOBILE : import.meta.env.VITE_GEE_URL_IRRIGATION_SCHEDULER;

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const containerStyle = {
        margin: 0,
        padding: 0,
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
        ...(isMobile && { height: "calc(100vh - 45px)", marginTop: "45px" })
    };

    const iframeStyle = {
        width: "100%",
        height: "100%",
        border: "none",
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
    };

    return (
        <div style={containerStyle}>
            <iframe
                src={irrigationUrl}
                style={iframeStyle}
                title="Irrigation Scheduler"
            />
        </div>
    );
};

export default IrrigationSchedulerViewer;
