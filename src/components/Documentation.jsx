import React, { useState, useEffect } from 'react';

const Documentation = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const colors = {
        primary: '#2c3e50',
        secondary: '#34495e',
        accent: '#3498db',
        background: '#f8f9fa',
        text: '#2c3e50',
        border: '#e9ecef'
    };

    const styles = {
        container: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: colors.background,
            overflowY: 'auto',
            padding: isMobile ? '10px' : '20px',
            scrollBehavior: 'smooth',
        },
        contentWrapper: {
            maxWidth: '1200px',
            margin: '0 auto',
            backgroundColor: 'white',
            borderRadius: isMobile ? '8px' : '12px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            padding: isMobile ? '15px' : '40px',
        },
        header: {
            textAlign: 'center',
            marginBottom: isMobile ? '20px' : '40px',
            position: 'relative',
            padding: isMobile ? '10px 0' : '20px 0',
        },
        title: {
            fontSize: isMobile ? '24px' : '32px',
            color: colors.primary,
            marginBottom: isMobile ? '10px' : '20px',
            fontWeight: '600',
            lineHeight: '1.3',
        },
        section: {
            marginBottom: isMobile ? '25px' : '40px',
        },
        sectionTitle: {
            fontSize: isMobile ? '20px' : '24px',
            color: colors.primary,
            marginBottom: isMobile ? '15px' : '20px',
            fontWeight: '600',
        },
        subsection: {
            marginBottom: isMobile ? '20px' : '30px',
            padding: isMobile ? '15px' : '20px',
            backgroundColor: colors.background,
            borderRadius: '8px',
        },
        subsectionTitle: {
            fontSize: isMobile ? '16px' : '20px',
            color: colors.secondary,
            marginBottom: isMobile ? '10px' : '15px',
            fontWeight: '500',
        },
        list: {
            listStyle: 'none',
            padding: 0,
            margin: 0,
        },
        listItem: {
            marginBottom: isMobile ? '8px' : '12px',
            fontSize: isMobile ? '14px' : '16px',
            lineHeight: '1.6',
            color: colors.text,
            paddingLeft: '20px',
            position: 'relative',
            '&::before': {
                content: '"•"',
                position: 'absolute',
                left: '0',
                color: colors.accent,
            },
        },
        bold: {
            fontWeight: '600',
            color: colors.primary,
        },
        footer: {
            marginTop: isMobile ? '30px' : '50px',
            textAlign: 'center',
            color: colors.secondary,
            fontSize: isMobile ? '12px' : '14px',
        },
        table: {
            width: '100%',
            overflowX: 'auto',
            display: 'block',
            WebkitOverflowScrolling: 'touch',
            marginBottom: isMobile ? '15px' : '20px',
            fontSize: isMobile ? '13px' : '14px',
        },
        subsectionIcon: {
            minWidth: isMobile ? '20px' : '24px',
            height: isMobile ? '20px' : '24px',
            marginRight: isMobile ? '8px' : '12px',
            color: colors.accent,
        },
    };

    const SubsectionTitle = ({ icon, children }) => (
        <h3 style={{
            ...styles.subsectionTitle,
            display: 'flex',
            alignItems: 'center',
        }}>
            <span style={styles.subsectionIcon}>{icon}</span>
            <span style={{
                flex: 1,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: isMobile ? 'normal' : 'nowrap',
                lineHeight: isMobile ? '1.3' : '1.5',
            }}>{children}</span>
        </h3>
    );

    return (
        <div style={styles.container}>
            <div style={styles.contentWrapper}>
                <header style={styles.header}>
                    <h1 style={styles.title}>Agroclimate Viewer & Planner App Documentation</h1>
                    <p style={{
                        fontSize: isMobile ? '14px' : '16px',
                        lineHeight: '1.6',
                        color: colors.text,
                        maxWidth: '800px',
                        margin: '0 auto',
                        marginBottom: isMobile ? '15px' : '20px',
                    }}>
                        Welcome to the comprehensive guide for the Agroclimate Viewer & Planner App. 
                        This documentation will help you understand and utilize all the features effectively.
                    </p>
                </header>

                <div style={styles.section}>
                    <h2 style={styles.sectionTitle}>1. Overview</h2>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '30px',
                        flexWrap: 'wrap',
                        marginTop: '20px'
                    }}>
                        <div style={{
                            flex: '0 0 300px',
                            maxWidth: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <img 
                                src="./logo.png"
                                alt="Agroclimate Logo"
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                    borderRadius: '8px',
                                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                                }}
                            />
                        </div>
                        <div style={{
                            flex: '1 1 500px',
                            fontSize: isMobile ? '14px' : '16px',
                            lineHeight: '1.6',
                            color: '#333'
                        }}>
                            The Agroclimate Viewer & Planner App is an interactive web-based tool designed to help users monitor, forecast, and analyze agroclimatic conditions for their croplands. By leveraging Google Earth Engine (GEE), the application provides insights through satellite imagery, weather forecasts, soil data, and climate patterns. Users can draw field boundaries, select specific parameters, and generate visualizations to aid in informed agricultural decision-making.
                        </div>
                    </div>
                </div>

                <div style={styles.section}>
                    <h2 style={styles.sectionTitle}>2. Key Features</h2>
                    <ul style={styles.list}>
                        <li style={styles.listItem}><span style={styles.bold}>Field Selection & Data Management:</span> Users can specify the number of fields to analyze (up to 5 fields per session).</li>
                        <li style={styles.listItem}><span style={styles.bold}>Vegetation Index (VI) Analysis:</span> Evaluate NDVI for crop health monitoring.</li>
                        <li style={styles.listItem}><span style={styles.bold}>NDVI Mean Temporal Plot:</span> Evaluate average NDVI trends over time for selected regions.</li>
                        <li style={styles.listItem}><span style={styles.bold}>Climatic Data Trends:</span> Observe temperature, soil moisture, and evapotranspiration trends.</li>
                        <li style={styles.listItem}><span style={styles.bold}>Rainfall Data Analysis:</span> Visualize historical precipitation data for cropland planning.</li>
                        <li style={styles.listItem}><span style={styles.bold}>Weather Forecasting:</span> Access 16-day weather predictions for selected locations.</li>
                        <li style={styles.listItem}><span style={styles.bold}>Soil Parameter Analysis:</span> Analyze soil composition, pH, and other characteristics at different depths.</li>
                        <li style={styles.listItem}><span style={styles.bold}>Growing Degree Days (GDD) Calculation:</span> Track crop growth stages using temperature-based heat accumulation.</li>
                    </ul>
                </div>

                <div style={styles.section}>
                    <h2 style={styles.sectionTitle}>3. Functional Components</h2>
                    
                    <div style={styles.subsection}>
                        <SubsectionTitle icon={
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#3498db' }}>
                                <path d="M3 3h18v18H3z"/>
                                <path d="M8 12h8"/>
                                <path d="M12 8v8"/>
                            </svg>
                        }>
                            1. Field Selection & Data Management
                        </SubsectionTitle>
                        <ul style={styles.list}>
                            <li style={styles.listItem}>Users can select the number of fields to analyze (up to 5 fields per session).</li>
                            <li style={styles.listItem}>The tool allows drawing and adjusting field boundaries on an interactive map.</li>
                            <li style={styles.listItem}>Users can define the start and end dates for data analysis (up to 10 months).</li>
                            <li style={styles.listItem}>The system validates field boundaries and selected dates to ensure proper data retrieval.</li>
                            <li style={styles.listItem}>After setting parameters, users can load data for analysis.</li>
                        </ul>
                    </div>

                    <div style={styles.subsection}>
                        <SubsectionTitle icon={
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#3498db' }}>
                                <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                <path d="M9 12l2 2 4-4"/>
                            </svg>
                        }>
                            2. Vegetation Index (VI) Analysis
                        </SubsectionTitle>
                        <ul style={styles.list}>
                            <li style={styles.listItem}>Provides NDVI-based vegetation monitoring using Sentinel-2 satellite data.</li>
                            <li style={styles.listItem}>Users can select NDVI values for specific fields over a selected time range.</li>
                            <li style={styles.listItem}>The system calculates and visualizes NDVI trends in both graphical and map formats.</li>
                            <li style={styles.listItem}>NDVI helps determine vegetation health, crop vigor, and areas of potential stress.</li>
                            <li style={styles.listItem}>The visualization includes a color-coded map indicating NDVI intensity levels.</li>
                            <li style={styles.listItem}>NDVI data is automatically updated with the latest satellite observations.</li>
                        </ul>
                    </div>

                    <div style={styles.subsection}>
                        <SubsectionTitle icon={
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#3498db' }}>
                                <path d="M3 3v18h18"/>
                                <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/>
                            </svg>
                        }>
                            3. NDVI Mean Temporal Plot
                        </SubsectionTitle>
                        <ul style={styles.list}>
                            <li style={styles.listItem}>Displays the average NDVI values over time for selected fields.</li>
                            <li style={styles.listItem}>Helps assess long-term trends in vegetation health and seasonal changes.</li>
                            <li style={styles.listItem}>Enables users to compare NDVI fluctuations across different growing seasons.</li>
                            <li style={styles.listItem}>The plot is useful for detecting potential stress areas and growth patterns.</li>
                        </ul>
                    </div>

                    <div style={styles.subsection}>
                        <SubsectionTitle icon={
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#3498db' }}>
                            <path d="M12 2v2"/>
                            <path d="M12 20v2"/>
                            <path d="M2 12h2"/>
                            <path d="M20 12h2"/>
                            <circle cx="12" cy="12" r="5"/>
                        </svg>
                        }>
                            4. Climatic Data Trends
                        </SubsectionTitle>
                        <ul style={styles.list}>
                            <li style={styles.listItem}><span style={styles.bold}>Frequency Selection:</span> Users can choose to visualize data at daily, weekly, or monthly intervals.</li>
                            <li style={styles.listItem}><span style={styles.bold}>Surface Soil Moisture:</span> Measures moisture availability in the topsoil layer, influencing seed germination and early plant growth. Units: Percentage.</li>
                            <li style={styles.listItem}><span style={styles.bold}>Rootzone Soil Moisture:</span> Indicates moisture levels in deeper soil layers, impacting crop water uptake. Units: Percentage.</li>
                            <li style={styles.listItem}><span style={styles.bold}>Surface Temperature:</span> Measures the temperature at the land surface, affecting plant heat stress. Units: Fahrenheit.</li>
                            <li style={styles.listItem}><span style={styles.bold}>Soil Temperature:</span> Indicates temperature variations at different soil depths, influencing microbial activity and root development. Units: Fahrenheit.</li>
                            <li style={styles.listItem}><span style={styles.bold}>Evapotranspiration:</span> Represents water loss due to soil evaporation and plant transpiration, crucial for irrigation planning. Units: Inches.</li>
                            <li style={styles.listItem}><span style={styles.bold}>Precipitation:</span> Tracks historical and seasonal rainfall trends, affecting soil moisture and crop yields. Units: Inches.</li>
                            <li style={styles.listItem}><span style={styles.bold}>Specific Humidity:</span> Measures the water vapor content in the atmosphere, influencing plant transpiration rates. Units: Percentage.</li>
                            <li style={styles.listItem}><span style={styles.bold}>Wind Speed:</span> Analyzes air movement across croplands, affecting evapotranspiration and crop lodging risks. Units: Miles per hour.</li>
                            <li style={styles.listItem}><span style={styles.bold}>Air Temperature:</span> Tracks daily, seasonal, and long-term temperature fluctuations, impacting plant growth cycles. Units: Fahrenheit.</li>
                        </ul>
                    </div>

                    <div style={styles.subsection}>
                        <SubsectionTitle icon={
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#3498db' }}>
                            <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 1 1 2.5 8.242"/>
                            <path d="M16 14v6"/>
                            <path d="M8 14v6"/>
                            <path d="M12 16v6"/>
                        </svg>
                        }>
                            5. Rainfall Data Analysis
                        </SubsectionTitle>
                        <ul style={styles.list}>
                            <li style={styles.listItem}>Visualizes historical precipitation data over a selected time period.</li>
                            <li style={styles.listItem}>Helps in assessing drought conditions and water availability for crops.</li>
                            <li style={styles.listItem}>Provides seasonal and monthly rainfall trends for agricultural planning.</li>
                            <li style={styles.listItem}>Units: Inches.</li>
                        </ul>
                    </div>

                    <div style={styles.subsection}>
                        <SubsectionTitle icon={
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#3498db' }}>
                            <path d="M6.083 13a6 6 0 1 1 11.834 0h-2.834l-3 9-3-9h-3z"/>
                            <path d="M5 13a9 9 0 0 1 6-6.75"/>
                            <path d="M19 13a9 9 0 0 0-6-6.75"/>
                        </svg>
                        }>
                            6. Weather Forecasting
                        </SubsectionTitle>
                        <ul style={styles.list}>
                            <li style={styles.listItem}><span style={styles.bold}>Air Temperature:</span> Provides expected daily temperature changes, essential for predicting heat stress and frost conditions. Units: Fahrenheit.</li>
                            <li style={styles.listItem}><span style={styles.bold}>Specific Humidity:</span> Measures the water vapor content in the air, affecting transpiration and moisture retention. Units: Percentage.</li>
                            <li style={styles.listItem}><span style={styles.bold}>Relative Humidity:</span> Expressed as a percentage, indicating how saturated the air is with moisture. Units: Percentage.</li>
                            <li style={styles.listItem}><span style={styles.bold}>Precipitation:</span> Forecasts expected rainfall, useful for irrigation scheduling and flood risk assessment. Units: Inches.</li>
                            <li style={styles.listItem}><span style={styles.bold}>Wind Speed:</span> Predicts wind conditions, crucial for pesticide spraying and crop lodging risk assessment. Units: Miles per hour.</li>
                        </ul>
                    </div>

                    <div style={styles.subsection}>
                        <SubsectionTitle icon={
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#3498db' }}>
                            <path d="M2 22h20"/>
                            <path d="M7 10l5-6 5 6"/>
                            <path d="M12 4v16"/>
                        </svg>
                        }>
                            7. Soil Parameter Analysis
                        </SubsectionTitle>
                        <ul style={styles.list}>
                            <li style={styles.listItem}><span style={styles.bold}>Sand Content:</span> Indicates the proportion of sand particles in the soil, affecting drainage and aeration. Units: Percentage.</li>
                            <li style={styles.listItem}><span style={styles.bold}>Silt Content:</span> Represents medium-sized soil particles that retain moisture while providing good drainage. Units: Percentage.</li>
                            <li style={styles.listItem}><span style={styles.bold}>Clay Content:</span> Measures the smallest soil particles, which help with nutrient retention but can cause compaction. Units: Percentage.</li>
                            <li style={styles.listItem}><span style={styles.bold}>Bulk Density:</span> Defines soil compaction, influencing root penetration and water movement. Units: Pounds per cubic foot.</li>
                            <li style={styles.listItem}><span style={styles.bold}>Cation Exchange Capacity:</span> Shows the soil’s ability to hold and exchange nutrients, affecting fertility. Units: Centimoles per kilogram (cmol/kg).</li>
                            <li style={styles.listItem}><span style={styles.bold}>Nitrogen Content:</span> Measures the amount of nitrogen available for plant uptake, essential for crop growth. Units: Percentage.</li>
                            <li style={styles.listItem}><span style={styles.bold}>Organic Carbon Content:</span> Reflects the amount of organic matter in the soil, improving fertility and structure. Units: Percentage.</li>
                            <li style={styles.listItem}><span style={styles.bold}>Volumetric Fraction of Coarse Fragments:</span> Represents the proportion of large soil particles that impact soil aeration and water retention. Units: Percentage.</li>
                            <li style={styles.listItem}><span style={styles.bold}>Organic Carbon Stocks:</span> Indicates the amount of organic carbon stored in the soil, essential for soil health and carbon sequestration. Units: Inches.</li>
                            <li style={styles.listItem}><span style={styles.bold}>Soil pH:</span> Determines soil acidity or alkalinity, influencing nutrient availability. Units: pH scale (0–14).</li>
                        </ul>
                    </div>

                    <div style={styles.subsection}>
                        <SubsectionTitle icon={
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#3498db' }}>
                            <circle cx="12" cy="12" r="10"/>
                            <path d="M12 6v6l4 2"/>
                        </svg>
                        }>
                            8. Growing Degree Days (GDD) Calculation
                        </SubsectionTitle>
                        <ul style={styles.list}>
                            <li style={styles.listItem}>Helps track cumulative heat accumulation required for crop growth and development.</li>
                            <li style={styles.listItem}>Used to predict key growth stages such as germination, flowering, and maturity.</li>
                            <li style={styles.listItem}>Assists in determining optimal planting and harvesting times.</li>
                            <li style={styles.listItem}><span style={styles.bold}>Crop Selections:</span> Corn, Soybeans, Peanut, Cotton, Rice, Wheat, Barley, Sunflower, Potato, Sorghum, Lettuce.</li>
                            <li style={styles.listItem}>Fahrenheit based on crop-specific base temperature.</li>
                        </ul>
                    </div>
                </div>

                <div style={styles.section}>
                    <h2 style={styles.sectionTitle}>4. Data Sources</h2>
                    <div style={{
                        overflowX: 'auto',
                        marginTop: '20px'
                    }}>
                        <table style={{
                            width: '100%',
                            borderCollapse: 'collapse',
                            backgroundColor: 'white',
                            fontSize: isMobile ? '13px' : '14px',
                            lineHeight: '1.6',
                            border: '1px solid #ddd'
                        }}>
                            <thead>
                                <tr style={{
                                    backgroundColor: '#2c3e50',
                                    color: 'white',
                                }}>
                                    <th style={{
                                        padding: '15px',
                                        textAlign: 'left',
                                        borderBottom: '2px solid #ddd',
                                        width: '25%'
                                    }}>Dataset Name</th>
                                    <th style={{
                                        padding: '15px',
                                        textAlign: 'left',
                                        borderBottom: '2px solid #ddd',
                                        width: '55%'
                                    }}>Description</th>
                                    <th style={{
                                        padding: '15px',
                                        textAlign: 'left',
                                        borderBottom: '2px solid #ddd',
                                        width: '20%'
                                    }}>Dataset Link</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ padding: '15px', borderBottom: '1px solid #ddd', backgroundColor: '#f8f9fa' }}>
                                        <span style={{ fontWeight: 'bold', color: '#2c3e50', display: 'block', marginBottom: '5px' }}>
                                            Sentinel-2
                                        </span>
                                        <code style={{ 
                                            color: '#666',
                                            fontSize: '12px',
                                            backgroundColor: '#f1f1f1',
                                            padding: '4px 6px',
                                            borderRadius: '4px',
                                            display: 'inline-block'
                                        }}>
                                            "COPERNICUS/S2"
                                        </code>
                                    </td>
                                    <td style={{ padding: '15px', borderBottom: '1px solid #ddd', color: '#333' }}>
                                        Sentinel-2 MSI Level-1C data for vegetation monitoring. Provides high-resolution optical imagery 
                                        for land monitoring, emergency management, and security services.
                                    </td>
                                    <td style={{ padding: '15px', borderBottom: '1px solid #ddd', backgroundColor: '#f8f9fa' }}>
                                        <a href="https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S2" 
                                           target="_blank" 
                                           rel="noopener noreferrer"
                                           style={{ 
                                               color: '#3498db',
                                               textDecoration: 'none',
                                               fontWeight: 'bold'
                                           }}>
                                            View Dataset →
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '15px', borderBottom: '1px solid #ddd' }}>
                                        <span style={{ fontWeight: 'bold', color: '#2c3e50', display: 'block', marginBottom: '5px' }}>
                                            NOAA GFS
                                        </span>
                                        <code style={{ 
                                            color: '#666',
                                            fontSize: '12px',
                                            backgroundColor: '#f1f1f1',
                                            padding: '4px 6px',
                                            borderRadius: '4px',
                                            display: 'inline-block'
                                        }}>
                                            "NOAA/GFS0P25"
                                        </code>
                                    </td>
                                    <td style={{ padding: '15px', borderBottom: '1px solid #ddd', color: '#333' }}>
                                        NOAA Global Forecast System (GFS) weather forecast data. Provides global weather 
                                        forecasts at 0.25-degree resolution for various atmospheric parameters.
                                    </td>
                                    <td style={{ padding: '15px', borderBottom: '1px solid #ddd' }}>
                                        <a href="https://developers.google.com/earth-engine/datasets/catalog/NOAA_GFS0P25" 
                                           target="_blank" 
                                           rel="noopener noreferrer"
                                           style={{ 
                                               color: '#3498db',
                                               textDecoration: 'none',
                                               fontWeight: 'bold'
                                           }}>
                                            View Dataset →
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '15px', borderBottom: '1px solid #ddd', backgroundColor: '#f8f9fa' }}>
                                        <span style={{ fontWeight: 'bold', color: '#2c3e50', display: 'block', marginBottom: '5px' }}>
                                            CHIRPS
                                        </span>
                                        <code style={{ 
                                            color: '#666',
                                            fontSize: '12px',
                                            backgroundColor: '#f1f1f1',
                                            padding: '4px 6px',
                                            borderRadius: '4px',
                                            display: 'inline-block'
                                        }}>
                                            'UCSB-CHG/CHIRPS/DAILY'
                                        </code>
                                    </td>
                                    <td style={{ padding: '15px', borderBottom: '1px solid #ddd', color: '#333' }}>
                                        Climate Hazards Group InfraRed Precipitation with Station Data. Provides daily 
                                        precipitation estimates from rain gauge and satellite observations.
                                    </td>
                                    <td style={{ padding: '15px', borderBottom: '1px solid #ddd', backgroundColor: '#f8f9fa' }}>
                                        <a href="https://developers.google.com/earth-engine/datasets/catalog/UCSB-CHG_CHIRPS_DAILY" 
                                           target="_blank" 
                                           rel="noopener noreferrer"
                                           style={{ 
                                               color: '#3498db',
                                               textDecoration: 'none',
                                               fontWeight: 'bold'
                                           }}>
                                            View Dataset →
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '15px', borderBottom: '1px solid #ddd' }}>
                                        <span style={{ fontWeight: 'bold', color: '#2c3e50', display: 'block', marginBottom: '5px' }}>
                                            NASA SMAP
                                        </span>
                                        <code style={{ 
                                            color: '#666',
                                            fontSize: '12px',
                                            backgroundColor: '#f1f1f1',
                                            padding: '4px 6px',
                                            borderRadius: '4px',
                                            display: 'inline-block'
                                        }}>
                                            'NASA/SMAP/SPL4SMGP/007'
                                        </code>
                                    </td>
                                    <td style={{ padding: '15px', borderBottom: '1px solid #ddd', color: '#333' }}>
                                        NASA SMAP Level-4 Global 3-hourly Surface and Root Zone Soil Moisture. Provides 
                                        global soil moisture data at various depths.
                                    </td>
                                    <td style={{ padding: '15px', borderBottom: '1px solid #ddd' }}>
                                        <a href="https://developers.google.com/earth-engine/datasets/catalog/NASA_SMAP_SPL4SMGP_007" 
                                           target="_blank" 
                                           rel="noopener noreferrer"
                                           style={{ 
                                               color: '#3498db',
                                               textDecoration: 'none',
                                               fontWeight: 'bold'
                                           }}>
                                            View Dataset →
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '15px', borderBottom: '1px solid #ddd', backgroundColor: '#f8f9fa' }}>
                                        <span style={{ fontWeight: 'bold', color: '#2c3e50', display: 'block', marginBottom: '5px' }}>
                                            USDA NASS CDL
                                        </span>
                                        <code style={{ 
                                            color: '#666',
                                            fontSize: '12px',
                                            backgroundColor: '#f1f1f1',
                                            padding: '4px 6px',
                                            borderRadius: '4px',
                                            display: 'inline-block'
                                        }}>
                                            "USDA/NASS/CDL"
                                        </code>
                                    </td>
                                    <td style={{ padding: '15px', borderBottom: '1px solid #ddd', color: '#333' }}>
                                        USDA National Agricultural Statistics Service Cropland Data Layer. Provides crop-specific 
                                        land cover data for the continental United States.
                                    </td>
                                    <td style={{ padding: '15px', borderBottom: '1px solid #ddd', backgroundColor: '#f8f9fa' }}>
                                        <a href="https://developers.google.com/earth-engine/datasets/catalog/USDA_NASS_CDL" 
                                           target="_blank" 
                                           rel="noopener noreferrer"
                                           style={{ 
                                               color: '#3498db',
                                               textDecoration: 'none',
                                               fontWeight: 'bold'
                                           }}>
                                            View Dataset →
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                <div style={styles.section}>
                    <h2 style={styles.sectionTitle}>5. Product Demo</h2>
                    <div style={{
                        background: 'linear-gradient(135deg, #2c3e50 0%, #3498db 100%)',
                        borderRadius: '20px',
                        padding: '40px',
                        color: 'white',
                        position: 'relative',
                        overflow: 'hidden',
                        marginTop: '20px',
                        boxShadow: '0 10px 30px rgba(52, 152, 219, 0.2)'
                    }}>
                        {/* Background Pattern */}
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            opacity: 0.1,
                            background: 'radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.3) 0%, transparent 40%)',
                            zIndex: 1
                        }} />

                        <div style={{
                            position: 'relative',
                            zIndex: 2,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '30px',
                            flexWrap: 'wrap'
                        }}>
                            {/* YouTube Icon Section */}
                            <div style={{
                                flex: '0 0 auto',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '80px',
                                height: '80px',
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                borderRadius: '50%',
                                backdropFilter: 'blur(5px)'
                            }}>
                                <svg 
                                    width="40" 
                                    height="40" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke="currentColor" 
                                    strokeWidth="2" 
                                    strokeLinecap="round" 
                                    strokeLinejoin="round"
                                >
                                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
                                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="white"/>
                                </svg>
                            </div>

                            {/* Content Section */}
                            <div style={{
                                flex: '1',
                                minWidth: '280px'
                            }}>
                                <h3 style={{
                                    margin: '0 0 15px 0',
                                    fontSize: '24px',
                                    fontWeight: '600',
                                    letterSpacing: '0.5px'
                                }}>
                                    Watch the Demo
                                </h3>
                                <p style={{
                                    margin: '0 0 20px 0',
                                    fontSize: '16px',
                                    opacity: 0.9,
                                    lineHeight: '1.6'
                                }}>
                                    Get a quick walkthrough of the Agroclimate Viewer & Planner's key features. Learn how to analyze crop data, monitor weather patterns, and make data-driven decisions for your agricultural needs.
                                </p>
                                <div style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    background: 'rgba(255, 255, 255, 0.1)',
                                    padding: '12px 24px',
                                    borderRadius: '30px',
                                    backdropFilter: 'blur(5px)',
                                    opacity: 0.6,
                                    cursor: 'not-allowed',
                                    userSelect: 'none'
                                }}>
                                    <svg 
                                        width="20" 
                                        height="20" 
                                        viewBox="0 0 24 24" 
                                        fill="none" 
                                        stroke="currentColor" 
                                        strokeWidth="2" 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round"
                                    >
                                        <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/>
                                        <line x1="7" y1="2" x2="7" y2="22"/>
                                        <line x1="17" y1="2" x2="17" y2="22"/>
                                        <line x1="2" y1="12" x2="22" y2="12"/>
                                        <line x1="2" y1="7" x2="7" y2="7"/>
                                        <line x1="2" y1="17" x2="7" y2="17"/>
                                        <line x1="17" y1="17" x2="22" y2="17"/>
                                        <line x1="17" y1="7" x2="22" y2="7"/>
                                    </svg>
                                    <span style={{
                                        fontSize: '16px',
                                        fontWeight: '500'
                                    }}>
                                        Demo Video Coming Soon
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <footer style={styles.footer}>
                    <p style={{...styles.paragraph, fontWeight: 'bold', color: colors.primary}}>
                        Developed by: Digital Agriculture Technologies and Data Management Lab, Virginia Tech
                    </p>
                    <p style={{...styles.paragraph, color: colors.secondary}}>
                        Supported by: USDA, NIFA, NAPDC, Cotton Incorporated, and Virginia Tech's College of Engineering and Agriculture
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default Documentation;
