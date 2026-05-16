import React, { useState, useEffect } from 'react';

const TillagePlantingViewer = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);
    const tillagePlantingUrl = isMobile ? import.meta.env.VITE_GEE_URL_TILLAGE_AND_PLANTING_MOBILE : import.meta.env.VITE_GEE_URL_TILLAGE_AND_PLANTING;

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 480);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
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
                src={tillagePlantingUrl}
                style={iframeStyle}
                title="Tillage & Planting"
            />
        </div>
    );
};

export default TillagePlantingViewer;
