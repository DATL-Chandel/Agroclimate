import React, { useState, useEffect } from 'react';

const CropRiskDocumentation = () => {
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

                    <h1 style={styles.title}>Crop Stress Risk Analysis</h1>
                    <p style={{
                        fontSize: isMobile ? '14px' : '16px',
                        lineHeight: '1.6',
                        color: colors.text,
                        maxWidth: '800px',
                        margin: '0 auto',
                        marginBottom: isMobile ? '15px' : '20px',
                    }}>
                        Welcome to the comprehensive guide for the Crop Stress Risk Analysis App. 
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
                           This GEE-powered tool enables field-level crop stress monitoring and forecasting using 16-day weather predictions. It helps users assess abiotic (e.g., temperature extremes) and biotic (e.g., disease susceptibility) risks by selecting fields, crops, and forecast windows. The tool includes detailed risk breakdowns per date and crop-specific disease models, empowering farmers to make proactive field management decisions.
                        </div>
                    </div>
                </div>

                <div style={styles.section}>
                    <h2 style={styles.sectionTitle}>2.Key Features</h2>
                    <ul style={styles.list}>
                        <li style={styles.listItem}><span style={styles.bold}>Field Selection & Drawing:</span> Draw up to 5 fields on the map and track stress forecasts by location.</li>
                        <li style={styles.listItem}><span style={styles.bold}>Crop-Based Stress Modeling:</span> Supports 7 crops with tailored temperature and disease risk profiles.</li>
                        <li style={styles.listItem}><span style={styles.bold}>16-Day Forecast Analysis:</span> Displays abiotic and biotic risk levels for each day in the forecast range.</li>
                        <li style={styles.listItem}><span style={styles.bold}>Disease Risk Panel:</span> Lists disease-specific threats with real-time temp, humidity, and precipitation mapping.</li>
                        <li style={styles.listItem}><span style={styles.bold}>Field-Specific Recommendations:</span> Lets users choose fields and crops independently to view localized risks.</li>
                    </ul>
                </div>

                <div style={styles.section}>
                    <h2 style={styles.sectionTitle}>3. ⚙️ Functional Components</h2>
                    
                    <div style={styles.subsection}>
                        <SubsectionTitle icon={
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#3498db' }}>
                                <path d="M3 3h18v18H3z"/>
                                <path d="M8 12h8"/>
                                <path d="M12 8v8"/>
                            </svg>
                        }>
                            1. Field Selection & Geometry Management
                        </SubsectionTitle>
                        <ul style={styles.list}>
                            <li style={styles.listItem}>Users select how many fields (1–5) to draw and then use a polygon tool to define them.</li>
                            <li style={styles.listItem}>Each field is uniquely colored and labeled (e.g., Field 1, Field 2).</li>
                            <li style={styles.listItem}>Drawn fields are stored as a <code style={{backgroundColor: '#f0f0f0', padding: '2px 4px', borderRadius: '3px', fontFamily: 'monospace'}}>FeatureCollection</code>, used to fetch field-specific forecast values.</li>
                            <li style={styles.listItem}>A live legend appears in the map corner to help track each field's data and color.</li>
                        </ul>
                    </div>

                    <div style={styles.subsection}>
                        <SubsectionTitle icon={
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#3498db' }}>
                                <circle cx="12" cy="12" r="10"/>
                                <path d="M12 6v6l4 2"/>
                            </svg>
                        }>
                            2. Crop & Date Selection Interface
                        </SubsectionTitle>
                        <ul style={styles.list}>
                            <li style={styles.listItem}>Dropdowns let users choose one of 7 supported crops: Corn, Cotton, Peanut, Soybean, Sorghum, Wheat, Strawberry.</li>
                            <li style={styles.listItem}>Once a crop is chosen, a <span style={styles.bold}>field selector</span> becomes available (if more than one is drawn).</li>
                            <li style={styles.listItem}>A <span style={styles.bold}>date dropdown</span> then appears to pick a specific day from the 16-day forecast period for focused analysis.</li>
                        </ul>
                    </div>

                    <div style={styles.subsection}>
                        <SubsectionTitle icon={
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#3498db' }}>
                                <path d="M12 2v8l4 4-4 4v4"/>
                                <path d="M2 12h20"/>
                            </svg>
                        }>
                            3. Stress Risk Analysis (Per Day)
                        </SubsectionTitle>
                        <p style={{
                            fontSize: isMobile ? '14px' : '16px',
                            lineHeight: '1.6',
                            color: colors.text,
                            marginBottom: '15px'
                        }}>
                            When a user selects a date:
                        </p>
                        <ul style={styles.list}>
                            <li style={styles.listItem}>The tool fetches <span style={styles.bold}>NOAA GFS</span> forecast data for:
                                <ul style={{...styles.list, marginLeft: '20px', marginTop: '5px'}}>
                                    <li style={{...styles.listItem, marginBottom: '5px'}}>Daily <span style={styles.bold}>temperature range</span></li>
                                    <li style={{...styles.listItem, marginBottom: '5px'}}><span style={styles.bold}>Relative humidity</span></li>
                                    <li style={{...styles.listItem, marginBottom: '5px'}}><span style={styles.bold}>Precipitable water</span></li>
                                </ul>
                            </li>
                            <li style={styles.listItem}>It evaluates <span style={styles.bold}>abiotic risks</span>:
                                <ul style={{...styles.list, marginLeft: '20px', marginTop: '5px'}}>
                                    <li style={{...styles.listItem, marginBottom: '5px'}}>Heat Stress Risk: e.g., cold stress, heat stress, frost thresholds</li>
                                </ul>
                            </li>
                            <li style={styles.listItem}>And <span style={styles.bold}>biotic risks</span>:
                                <ul style={{...styles.list, marginLeft: '20px', marginTop: '5px'}}>
                                    <li style={{...styles.listItem, marginBottom: '5px'}}>Disease Stress Risk: Derived from humidity, leaf wetness proxies, and crop-specific thresholds</li>
                                    <li style={{...styles.listItem, marginBottom: '5px'}}>Specific Disease Table: Lists key diseases per crop (e.g., Gray Leaf Spot for Corn, Boll Rot for Cotton)</li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div style={styles.subsection}>
                        <SubsectionTitle icon={
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#3498db' }}>
                                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                                <line x1="3" y1="9" x2="21" y2="9"/>
                                <line x1="9" y1="21" x2="9" y2="9"/>
                            </svg>
                        }>
                            4. Daily Risk Panels
                        </SubsectionTitle>
                        <ul style={styles.list}>
                            <li style={styles.listItem}>For each selected date, a color-coded panel is displayed showing:
                                <ul style={{...styles.list, marginLeft: '20px', marginTop: '5px'}}>
                                    <li style={{...styles.listItem, marginBottom: '5px'}}>Heat stress</li>
                                    <li style={{...styles.listItem, marginBottom: '5px'}}>Cold/freeze stress</li>
                                    <li style={{...styles.listItem, marginBottom: '5px'}}>Humidity</li>
                                    <li style={{...styles.listItem, marginBottom: '5px'}}>Precipitation (converted to inches)</li>
                                    <li style={{...styles.listItem, marginBottom: '5px'}}>Disease threat by type</li>
                                </ul>
                            </li>
                            <li style={styles.listItem}>Each disease row includes:
                                <div style={{backgroundColor: '#f0f0f0', padding: '8px 12px', borderRadius: '4px', margin: '8px 0', fontFamily: 'monospace'}}>
                                    Disease | Temp | Humidity | Precip | Risk Level
                                </div>
                            </li>
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
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '60px 20px',
                        backgroundColor: colors.background,
                        borderRadius: '12px',
                        margin: '20px 0',
                        textAlign: 'center'
                    }}>
                        <div>
                            <h3 style={{
                                fontSize: '24px',
                                color: colors.primary,
                                marginBottom: '15px'
                            }}>
                                Coming Soon
                            </h3>
                            <p style={{
                                fontSize: '16px',
                                color: colors.text,
                                maxWidth: '600px',
                                margin: '0 auto'
                            }}>
                                Video demonstrations of the GDD Tracker tool are currently being developed and will be available here shortly.
                            </p>
                        </div>
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

export default CropRiskDocumentation;
