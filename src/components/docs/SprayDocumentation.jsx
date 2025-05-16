import React, { useState, useEffect } from 'react';

const SprayDocumentation = () => {
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
        border: '#e9ecef',
        link: '#3498db'
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
        paragraph: {
            fontSize: isMobile ? '12px' : '14px',
            lineHeight: '1.6',
            color: colors.text,
            maxWidth: '800px',
            margin: '0 auto',
            marginBottom: isMobile ? '15px' : '20px',
        }
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
        <>
            <header style={styles.header}>

                    <h1 style={styles.title}>Spray Planner Documentation</h1>
                    <p style={{
                        fontSize: isMobile ? '14px' : '16px',
                        lineHeight: '1.6',
                        color: colors.text,
                        maxWidth: '800px',
                        margin: '0 auto',
                        marginBottom: isMobile ? '15px' : '20px',
                    }}>
                        Welcome to the comprehensive guide for the Spray Planner tool.
                        This documentation will help you understand how to optimize your spraying operations based on weather forecasts.
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
                                src="/Agroclimate/logo.png"
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
                            The Spray Planner is a specialized tool designed to help growers determine optimal spraying windows based on weather forecasts. It analyzes multiple weather parameters including temperature, wind speed, humidity, and precipitation against research-based thresholds to provide hourly spraying recommendations for up to 16 days in advance. This tool helps farmers reduce chemical waste, improve application efficacy, and minimize environmental impact by spraying only when conditions are favorable.
                        </div>
                    </div>
                </div>

                <div style={styles.section}>
                    <h2 style={styles.sectionTitle}>2. Key Features</h2>
                    <ul style={styles.list}>
                        <li style={styles.listItem}><span style={styles.bold}>Field Selection & Data Management:</span> Users can specify the number of fields to analyze (up to 5 fields per session).</li>
                        <li style={styles.listItem}><span style={styles.bold}>Weather Forecasting:</span> Access 16-day hourly weather predictions for advanced crop management planning.</li>
                        <li style={styles.listItem}><span style={styles.bold}>Field Spray Planner:</span> Determine optimal spraying windows based on weather forecasts with color-coded recommendations.</li>
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
                            <li style={styles.listItem}>The system validates field boundaries and selected dates to ensure proper data retrieval.</li>
                            <li style={styles.listItem}>After setting parameters, users can load data for analysis.</li>
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
                            2. Weather Forecasting
                        </SubsectionTitle>
                        <ul style={styles.list}>
                            <li style={styles.listItem}><span style={styles.bold}>Air Temperature:</span> Provides expected daily temperature changes, essential for predicting heat stress and frost conditions. Units: Fahrenheit.</li>
                            <li style={styles.listItem}><span style={styles.bold}>Specific Humidity:</span> Measures the water vapor content in the air, affecting transpiration and moisture retention. Units: Percentage.</li>
                            <li style={styles.listItem}><span style={styles.bold}>Relative Humidity:</span> Expressed as a percentage, indicating how saturated the air is with moisture. Units: Percentage.</li>
                            <li style={styles.listItem}><span style={styles.bold}>Precipitation:</span> Forecasts expected rainfall, useful for irrigation scheduling and flood risk assessment. Units: Inches.</li>
                            <li style={styles.listItem}><span style={styles.bold}>Wind Speed:</span> Predicts wind conditions, crucial for pesticide spraying and crop lodging risk assessment. Units: Miles per hour.</li>
                            <li style={styles.listItem}>The forecast data is sourced from NOAA's Global Forecast System (GFS) at 0.25-degree resolution, providing up to 16 days of weather predictions.</li>
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
                            3. Field Spray Planner
                        </SubsectionTitle>
                        <p style={{
                            fontSize: isMobile ? '14px' : '16px',
                            lineHeight: '1.6',
                            color: colors.text,
                            marginBottom: '15px'
                        }}>
                            The Field Spray Planner is a specialized tool that helps growers determine optimal spraying windows based on weather forecasts for the next 16 days. It evaluates multiple weather parameters against research-based thresholds to provide hourly spraying recommendations.
                        </p>
                        <h4 style={{
                            fontSize: isMobile ? '14px' : '16px',
                            fontWeight: '600',
                            color: colors.primary,
                            marginBottom: '10px',
                            marginTop: '20px'
                        }}>Key Features:</h4>
                        <ul style={styles.list}>
                            <li style={styles.listItem}><span style={styles.bold}>16-Day Forecast:</span> Provides hourly spraying recommendations for up to 16 days in advance.</li>
                            <li style={styles.listItem}><span style={styles.bold}>Field-Specific Analysis:</span> Generates recommendations tailored to each drawn field (up to 5 fields).</li>
                            <li style={styles.listItem}><span style={styles.bold}>Color-Coded System:</span> Easy-to-interpret recommendations using green (Good to Spray), orange (Use Caution), and red (Not Recommended).</li>
                            <li style={styles.listItem}><span style={styles.bold}>Hourly Breakdown:</span> Detailed hourly conditions for temperature, wind speed, humidity, and precipitation.</li>
                            <li style={styles.listItem}><span style={styles.bold}>Research-Based Thresholds:</span> Uses scientifically validated thresholds from agricultural extension services and research institutions.</li>
                        </ul>

                        <h4 style={{
                            fontSize: isMobile ? '14px' : '16px',
                            fontWeight: '600',
                            color: colors.primary,
                            marginBottom: '10px',
                            marginTop: '20px'
                        }}>Spraying Condition Thresholds:</h4>
                        <ul style={styles.list}>
                            <li style={styles.listItem}><span style={styles.bold}>Wind Speed:</span>
                                <ul style={{...styles.list, marginLeft: '20px', marginTop: '5px'}}>
                                    <li style={{...styles.listItem, marginBottom: '5px'}}>Below 2 mph: Good for Medium/Coarse Sprays Only (light green)</li>
                                    <li style={{...styles.listItem, marginBottom: '5px'}}>2-9 mph: Good for All Sprays (dark green)</li>
                                    <li style={{...styles.listItem, marginBottom: '5px'}}>9-15 mph: Good for Group 4 Herbicides Only (light green)</li>
                                    <li style={{...styles.listItem, marginBottom: '5px'}}>Above 15 mph: Not Recommended (red)</li>
                                </ul>
                            </li>
                            <li style={styles.listItem}><span style={styles.bold}>Temperature:</span> 40-90°F acceptable range. Outside this range: Not Recommended (red).</li>
                            <li style={styles.listItem}><span style={styles.bold}>Humidity:</span> 30-95% acceptable range. Outside this range: Use Caution (orange).</li>
                            <li style={styles.listItem}><span style={styles.bold}>Precipitation:</span> Below 1.5 inches threshold. Above this: Not Recommended (red).</li>
                        </ul>

                        <h4 style={{
                            fontSize: isMobile ? '14px' : '16px',
                            fontWeight: '600',
                            color: colors.primary,
                            marginBottom: '10px',
                            marginTop: '20px'
                        }}>How to Use:</h4>
                        <ol style={{
                            paddingLeft: '20px',
                            margin: '0 0 20px 0',
                            fontSize: isMobile ? '14px' : '16px',
                            lineHeight: '1.6',
                            color: colors.text
                        }}>
                            <li style={{marginBottom: '10px'}}>Select the number of fields (1-5) you want to analyze.</li>
                            <li style={{marginBottom: '10px'}}>Draw your field boundaries on the map.</li>
                            <li style={{marginBottom: '10px'}}>Click the "16-Day Spraying Forecast" button to generate recommendations.</li>
                            <li style={{marginBottom: '10px'}}>Use the Field selector to switch between different fields.</li>
                            <li style={{marginBottom: '10px'}}>Use the Date selector to view recommendations for specific days.</li>
                            <li style={{marginBottom: '10px'}}>Review the hourly breakdown table with color-coded recommendations.</li>
                        </ol>

                        <h4 style={{
                            fontSize: isMobile ? '14px' : '16px',
                            fontWeight: '600',
                            color: colors.primary,
                            marginBottom: '10px',
                            marginTop: '20px'
                        }}>Scientific References:</h4>
                        <ul style={styles.list}>
                            <li style={styles.listItem}>Farm Advisory Service Scotland - Pesticide Information Note: Spray Drift <a href="https://www.fas.scot/environment/water-management/pesticide-management/pesticide-information-note-spray-drift/" target="_blank" rel="noopener noreferrer" style={{color: colors.link}}>[Click here]</a></li>
                            <li style={styles.listItem}>University of Nebraska-Lincoln Extension - Spray Drift of Pesticides <a href="https://extensionpublications.unl.edu/assets/pdf/g1773.pdf" target="_blank" rel="noopener noreferrer" style={{color: colors.link}}>[Click here]</a></li>
                            <li style={styles.listItem}>Government of Manitoba - Current Ag Weather Conditions <a href="https://www.gov.mb.ca/agriculture/weather/current-ag-weather-conditions.html" target="_blank" rel="noopener noreferrer" style={{color: colors.link}}>[Click here]</a></li>
                            <li style={styles.listItem}>Michigan State University Extension - Enviroweather stations detect low level inversions to help reduce pesticide drift <a href="https://www.canr.msu.edu/news/enviroweather-stations-detect-low-level-inversions-to-help-reduce-pesticide-drift" target="_blank" rel="noopener noreferrer" style={{color: colors.link}}>[Click here]</a></li>
                            <li style={styles.listItem}>Kestrel Instruments - Preventing Spray Drift: Key Weather Measurements <a href="https://kestrelinstruments.com/blog/preventing-spray-drift/" target="_blank" rel="noopener noreferrer" style={{color: colors.link}}>[Click here]</a></li>
                            <li style={styles.listItem}>Sprayers101 - Spraying Weather <a href="https://sprayers101.com/spraying-weather/" target="_blank" rel="noopener noreferrer" style={{color: colors.link}}>[Click here]</a></li>
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
                                        forecasts for 16 days with parameters including temperature, humidity, wind speed, and precipitation. 
                                        Used for both general weather forecasting and specialized agricultural applications like the Field Spray Planner.
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
                            </tbody>
                        </table>
                    </div>
                </div>

                <div style={styles.section}>
                    <h2 style={styles.sectionTitle}>5. Product Demo</h2>
                    <div style={{
                        display: 'flex',
                        flexDirection: isMobile ? 'column' : 'row',
                        gap: '20px',
                        marginTop: '20px',
                        flexWrap: 'wrap'
                    }}>
                        {/* Main Tool Demo */}
                        <div style={{
                            flex: '1',
                            background: 'linear-gradient(135deg, #2c3e50 0%, #3498db 100%)',
                            borderRadius: '20px',
                            padding: '40px',
                            color: 'white',
                            position: 'relative',
                            overflow: 'hidden',
                            boxShadow: '0 10px 30px rgba(52, 152, 219, 0.2)',
                            display: 'flex',
                            flexDirection: 'column',
                            minHeight: isMobile ? 'auto' : '600px'
                        }}>
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
                                flex: 1,
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <h3 style={{
                                    margin: '0 0 15px 0',
                                    fontSize: '28px',
                                    fontWeight: '600',
                                    letterSpacing: '0.5px'
                                }}>
                                    Main Tool Demo
                                </h3>
                                <p style={{
                                    margin: '0 0 30px 0',
                                    fontSize: '16px',
                                    opacity: 0.9,
                                    lineHeight: '1.6'
                                }}>
                                    Get a comprehensive walkthrough of all features in the Agroclimate Viewer & Planner App. Learn how to analyze crop data, monitor weather patterns, and make data-driven decisions.
                                </p>
                                <div style={{
                                    flex: 1,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '20px'
                                }}>
                                    <div style={{
                                        position: 'relative',
                                        width: '100%',
                                        flex: 1,
                                        minHeight: '300px',
                                        backgroundColor: 'rgba(0, 0, 0, 0.1)',
                                        borderRadius: '12px',
                                        overflow: 'hidden'
                                    }}>
                                        <iframe
                                            style={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '100%',
                                                border: 'none'
                                            }}
                                            src="https://www.youtube.com/embed/nZ7mCx14ME4"
                                            title="Main Tool Demo Video"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        />
                                    </div>
                                    <a 
                                        href="https://youtu.be/nZ7mCx14ME4"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '10px',
                                            background: 'rgba(255, 255, 255, 0.1)',
                                            padding: '12px 24px',
                                            borderRadius: '30px',
                                            backdropFilter: 'blur(5px)',
                                            color: 'white',
                                            textDecoration: 'none',
                                            transition: 'all 0.3s ease',
                                            cursor: 'pointer'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.background = 'rgba(255, 255, 255, 0.2)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                                        }}
                                    >
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
                                            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
                                            <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor"/>
                                        </svg>
                                        <span style={{
                                            fontSize: '16px',
                                            fontWeight: '500'
                                        }}>
                                            Watch on YouTube
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* NDVI Tool Demo */}
                        <div style={{
                            flex: '1',
                            background: 'linear-gradient(135deg, #1a5f3c 0%, #2ecc71 100%)',
                            borderRadius: '20px',
                            padding: '40px',
                            color: 'white',
                            position: 'relative',
                            overflow: 'hidden',
                            boxShadow: '0 10px 30px rgba(46, 204, 113, 0.2)',
                            display: 'flex',
                            flexDirection: 'column',
                            minHeight: isMobile ? 'auto' : '600px'
                        }}>
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
                                flex: 1,
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <h3 style={{
                                    margin: '0 0 15px 0',
                                    fontSize: '28px',
                                    fontWeight: '600',
                                    letterSpacing: '0.5px'
                                }}>
                                    NDVI Tool Demo
                                </h3>
                                <p style={{
                                    margin: '0 0 30px 0',
                                    fontSize: '16px',
                                    opacity: 0.9,
                                    lineHeight: '1.6'
                                }}>
                                    Learn how to use our specialized NDVI tool for monitoring vegetation health, analyzing crop vigor, and identifying areas of potential stress in your fields.
                                </p>
                                <div style={{
                                    flex: 1,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '20px'
                                }}>
                                    <div style={{
                                        position: 'relative',
                                        width: '100%',
                                        flex: 1,
                                        minHeight: '300px',
                                        backgroundColor: 'rgba(0, 0, 0, 0.1)',
                                        borderRadius: '12px',
                                        overflow: 'hidden'
                                    }}>
                                        <iframe
                                            style={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '100%',
                                                border: 'none'
                                            }}
                                            src="https://www.youtube.com/embed/pB3WCnZKYj8"
                                            title="NDVI Tool Demo Video"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        />
                                    </div>
                                    <a 
                                        href="https://youtu.be/pB3WCnZKYj8"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '10px',
                                            background: 'rgba(255, 255, 255, 0.1)',
                                            padding: '12px 24px',
                                            borderRadius: '30px',
                                            backdropFilter: 'blur(5px)',
                                            color: 'white',
                                            textDecoration: 'none',
                                            transition: 'all 0.3s ease',
                                            cursor: 'pointer'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.background = 'rgba(255, 255, 255, 0.2)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                                        }}
                                    >
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
                                            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
                                            <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor"/>
                                        </svg>
                                        <span style={{
                                            fontSize: '16px',
                                            fontWeight: '500'
                                        }}>
                                            Watch on YouTube
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Main Tool Demo (Mobile) */}
                        <div style={{
                            flex: '1',
                            background: 'linear-gradient(135deg, #8e44ad 0%, #9b59b6 100%)',
                            borderRadius: '20px',
                            padding: '40px',
                            color: 'white',
                            position: 'relative',
                            overflow: 'hidden',
                            boxShadow: '0 10px 30px rgba(155, 89, 182, 0.2)',
                            display: 'flex',
                            flexDirection: 'column',
                            minHeight: isMobile ? 'auto' : '600px'
                        }}>
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
                                flex: 1,
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <h3 style={{
                                    margin: '0 0 15px 0',
                                    fontSize: '28px',
                                    fontWeight: '600',
                                    letterSpacing: '0.5px'
                                }}>
                                    Main Tool Demo (Mobile)
                                </h3>
                                <p style={{
                                    margin: '0 0 30px 0',
                                    fontSize: '16px',
                                    opacity: 0.9,
                                    lineHeight: '1.6'
                                }}>
                                    Explore how to use the Agroclimate Viewer & Planner App on your mobile device. Learn to navigate and utilize all features efficiently on smaller screens.
                                </p>
                                <div style={{
                                    flex: 1,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '20px'
                                }}>
                                    <div style={{
                                        position: 'relative',
                                        width: '100%',
                                        flex: 1,
                                        minHeight: '300px',
                                        backgroundColor: 'rgba(0, 0, 0, 0.1)',
                                        borderRadius: '12px',
                                        overflow: 'hidden'
                                    }}>
                                        <iframe
                                            style={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '100%',
                                                border: 'none'
                                            }}
                                            src="https://www.youtube.com/embed/DZakqHr_jZQ"
                                            title="Main Tool Demo Video (Mobile)"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        />
                                    </div>
                                    <a 
                                        href="https://youtu.be/DZakqHr_jZQ?si=y6hG-Vdpg-UX0MS3"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '10px',
                                            background: 'rgba(255, 255, 255, 0.1)',
                                            padding: '12px 24px',
                                            borderRadius: '30px',
                                            backdropFilter: 'blur(5px)',
                                            color: 'white',
                                            textDecoration: 'none',
                                            transition: 'all 0.3s ease',
                                            cursor: 'pointer'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.background = 'rgba(255, 255, 255, 0.2)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                                        }}
                                    >
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
                                            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
                                            <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor"/>
                                        </svg>
                                        <span style={{
                                            fontSize: '16px',
                                            fontWeight: '500'
                                        }}>
                                            Watch on YouTube
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* NDVI Tool Demo (Mobile)
                        <div style={{
                            flex: '1',
                            background: 'linear-gradient(135deg, #c0392b 0%, #e74c3c 100%)',
                            borderRadius: '20px',
                            padding: '40px',
                            color: 'white',
                            position: 'relative',
                            overflow: 'hidden',
                            boxShadow: '0 10px 30px rgba(231, 76, 60, 0.2)',
                            display: 'flex',
                            flexDirection: 'column',
                            minHeight: isMobile ? 'auto' : '600px'
                        }}>
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
                                flex: 1,
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                <h3 style={{
                                    margin: '0 0 15px 0',
                                    fontSize: '28px',
                                    fontWeight: '600',
                                    letterSpacing: '0.5px'
                                }}>
                                    NDVI Tool Demo (Mobile)
                                </h3>
                                <p style={{
                                    margin: '0 0 30px 0',
                                    fontSize: '16px',
                                    opacity: 0.9,
                                    lineHeight: '1.6'
                                }}>
                                    Master the NDVI tool on your mobile device. This guide shows how to effectively monitor crop health and analyze vegetation data while on the go.
                                </p>
                                <div style={{
                                    flex: 1,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '20px'
                                }}>
                                    <div style={{
                                        position: 'relative',
                                        width: '100%',
                                        flex: 1,
                                        minHeight: '300px',
                                        backgroundColor: 'rgba(0, 0, 0, 0.1)',
                                        borderRadius: '12px',
                                        overflow: 'hidden'
                                    }}>
                                        <iframe
                                            style={{
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '100%',
                                                border: 'none'
                                            }}
                                            src="https://youtube.com/embed/shorts/J8f8W9lJcgM?si=AJnvVV1ISaAcKSBL"
                                            title="NDVI Tool Demo Video (Mobile)"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        />
                                    </div>
                                    <a 
                                        href="https://youtube.com/shorts/J8f8W9lJcgM?si=AJnvVV1ISaAcKSBL"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '10px',
                                            background: 'rgba(255, 255, 255, 0.1)',
                                            padding: '12px 24px',
                                            borderRadius: '30px',
                                            backdropFilter: 'blur(5px)',
                                            color: 'white',
                                            textDecoration: 'none',
                                            transition: 'all 0.3s ease',
                                            cursor: 'pointer'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.background = 'rgba(255, 255, 255, 0.2)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                                        }}
                                    >
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
                                            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
                                            <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor"/>
                                        </svg>
                                        <span style={{
                                            fontSize: '16px',
                                            fontWeight: '500'
                                        }}>
                                            Watch on YouTube
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>

                <footer style={styles.footer}>
                    <p style={{...styles.paragraph, fontWeight: 'bold', color: colors.primary}}>
                        Developed by: Digital Agriculture Technologies Lab, Virginia Tech (PI: Dr.Abhilash Chandel, abhilashchandel@vt.edu)
                    </p>
                    <p style={{...styles.paragraph, color: colors.secondary}}>
                        Supported by: USDA, NIFA, NAPDC, Cotton Incorporated, Virginia Tech Tidewater Agricultural Research & Extension Center (TAREC), College of Agriculture and Life Sciences, and Department of Biological Systems Engineering.
                    </p>
                </footer>
        </>
    );
};

export default SprayDocumentation;
