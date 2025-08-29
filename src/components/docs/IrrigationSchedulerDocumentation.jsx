import React, { useState, useEffect } from 'react';

const IrrigationSchedulerDocumentation = () => {
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
        },
        bold: {
            fontWeight: '600',
            color: colors.primary,
        },
        subsectionIcon: {
            minWidth: isMobile ? '20px' : '24px',
            height: isMobile ? '20px' : '24px',
            marginRight: isMobile ? '8px' : '12px',
            color: colors.accent,
        },
        paragraph: {
            fontSize: isMobile ? '14px' : '16px',
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
                <h1 style={styles.title}>Irrigation Scheduler Documentation</h1>
                <p style={{
                    fontSize: isMobile ? '14px' : '16px',
                    lineHeight: '1.6',
                    color: colors.text,
                    maxWidth: '800px',
                    margin: '0 auto',
                    marginBottom: isMobile ? '15px' : '20px',
                }}>
                    Welcome to the comprehensive guide for the Irrigation Scheduler. 
                    This documentation will help you understand and utilize all features for precision irrigation management and water use optimization.
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
                        The Irrigation Scheduler is a comprehensive agricultural water management tool that combines advanced water balance modeling with precise irrigation scheduling capabilities. Using satellite data, weather forecasts, and crop-specific models, it provides farmers with detailed irrigation recommendations with 16-day weather forecasts and precise deficit calculations for optimal water use efficiency.
                    </div>
                </div>
            </div>

            <div style={styles.section}>
                <h2 style={styles.sectionTitle}>2. Key Features</h2>
                <ul style={styles.list}>
                    <li style={styles.listItem}><span style={styles.bold}>Multi-Crop Support:</span> Comprehensive irrigation scheduling for crops including Corn, Cotton, Soybean, Sorghum, Wheat, Strawberry, and Peanut.</li>
                    <li style={styles.listItem}><span style={styles.bold}>Precision Water Management:</span> Detailed water balance calculations and irrigation recommendations based on crop-specific water requirements.</li>
                    <li style={styles.listItem}><span style={styles.bold}>16-Day Weather Forecasting:</span> Advanced weather predictions using NOAA GFS data for irrigation planning and scheduling.</li>
                    <li style={styles.listItem}><span style={styles.bold}>Field-Specific Analysis:</span> Customizable field boundaries with detailed water balance charts and deficit calculations.</li>
                    <li style={styles.listItem}><span style={styles.bold}>Water Use Optimization:</span> Scientific algorithms for maximizing irrigation efficiency and crop water productivity.</li>
                </ul>
            </div>

            <div style={styles.section}>
                <h2 style={styles.sectionTitle}>3. Functional Components</h2>
                
                <div style={styles.subsection}>
                    <SubsectionTitle icon={
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#3498db' }}>
                            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7 7-7z"/>
                        </svg>
                    }>
                        1. Water Balance Modeling
                    </SubsectionTitle>
                    <p style={{
                        fontSize: isMobile ? '14px' : '16px',
                        lineHeight: '1.6',
                        color: colors.text,
                        marginBottom: '15px'
                    }}>
                        The tool provides comprehensive water balance modeling to determine optimal irrigation timing and amounts. The system integrates real-time satellite data, weather forecasts, and crop-specific physiological models to deliver precise irrigation recommendations.
                    </p>

                    <div style={{
                        backgroundColor: 'white',
                        borderRadius: '8px',
                        padding: '20px',
                        marginBottom: '25px',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                        border: '2px solid #e3f2fd'
                    }}>
                        <h4 style={{
                            fontSize: isMobile ? '16px' : '18px',
                            fontWeight: '600',
                            color: colors.primary,
                            marginBottom: '15px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px'
                        }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#2196F3' }}>
                                <path d="M12 2v2"/>
                                <path d="M12 20v2"/>
                                <path d="M2 12h2"/>
                                <path d="M20 12h2"/>
                                <circle cx="12" cy="12" r="5"/>
                            </svg>
                            A. Soil Water Holding Properties
                        </h4>
                        
                        <div style={{
                            backgroundColor: colors.background,
                            borderRadius: '6px',
                            padding: '15px',
                            marginBottom: '20px',
                            borderLeft: '4px solid #2196F3'
                        }}>
                            <h5 style={{
                                fontSize: isMobile ? '15px' : '17px',
                                fontWeight: '600',
                                color: colors.primary,
                                marginBottom: '15px'
                            }}>
                                Key Parameters for Irrigation Planning
                            </h5>
                            
                            <ul style={styles.list}>
                                <li style={styles.listItem}><span style={styles.bold}>Field Capacity (FC):</span> The amount of water that remains in the soil after excess water has drained.</li>
                                <li style={styles.listItem}><span style={styles.bold}>Wilting Point (WP):</span> The amount of water below which plant roots can no longer extract water.</li>
                                <li style={styles.listItem}><span style={styles.bold}>Available Water Capacity (AWC):</span> The difference between Field Capacity and Wilting Point.</li>
                                <li style={styles.listItem}><span style={styles.bold}>Total AWC:</span> AWC per foot × Root Depth for the current growth stage.</li>
                            </ul>
                        </div>
                    </div>

                    <div style={{
                        backgroundColor: 'white',
                        borderRadius: '8px',
                        padding: '20px',
                        marginBottom: '25px',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                        border: '2px solid #e8f5e8'
                    }}>
                        <h4 style={{
                            fontSize: isMobile ? '16px' : '18px',
                            fontWeight: '600',
                            color: colors.primary,
                            marginBottom: '15px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px'
                        }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#4CAF50' }}>
                                <path d="M12 2v2"/>
                                <path d="M12 20v2"/>
                                <path d="M2 12h2"/>
                                <path d="M20 12h2"/>
                                <circle cx="12" cy="12" r="5"/>
                            </svg>
                            B. Evapotranspiration (ET) Modeling
                        </h4>
                        
                        <div style={{
                            backgroundColor: colors.background,
                            borderRadius: '6px',
                            padding: '15px',
                            marginBottom: '20px',
                            borderLeft: '4px solid #4CAF50'
                        }}>
                            <h5 style={{
                                fontSize: isMobile ? '15px' : '17px',
                                fontWeight: '600',
                                color: colors.primary,
                                marginBottom: '15px'
                            }}>
                                ET Calculation Methods
                            </h5>
                            
                            <ul style={styles.list}>
                                <li style={styles.listItem}><span style={styles.bold}>Reference ET (ET₀):</span> Calculated using FAO Penman-Monteith equation with NOAA GFS weather data</li>
                                <li style={styles.listItem}><span style={styles.bold}>Crop ET (ETc):</span> ET₀ × Crop Coefficient (Kc) for current growth stage</li>
                                <li style={styles.listItem}><span style={styles.bold}>Daily Water Use:</span> Real-time ET calculations based on forecasted weather conditions</li>
                                <li style={styles.listItem}><span style={styles.bold}>Stress Factors:</span> Adjustments for water stress, salinity, and disease conditions</li>
                            </ul>
                        </div>
                    </div>

                    <div style={{
                        backgroundColor: 'white',
                        borderRadius: '8px',
                        padding: '20px',
                        marginBottom: '25px',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                        border: '2px solid #FFF3E0'
                    }}>
                        <h4 style={{
                            fontSize: isMobile ? '16px' : '18px',
                            fontWeight: '600',
                            color: colors.primary,
                            marginBottom: '15px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px'
                        }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#FF9800' }}>
                                <path d="M12 2v2"/>
                                <path d="M12 20v2"/>
                                <path d="M2 12h2"/>
                                <path d="M20 12h2"/>
                                <circle cx="12" cy="12" r="5"/>
                            </svg>
                            C. Water Balance Equation
                        </h4>
                        
                        <div style={{
                            backgroundColor: colors.background,
                            borderRadius: '6px',
                            padding: '15px',
                            marginBottom: '20px',
                            borderLeft: '4px solid #FF9800'
                        }}>
                            <h5 style={{
                                fontSize: isMobile ? '15px' : '17px',
                                fontWeight: '600',
                                color: colors.primary,
                                marginBottom: '15px'
                            }}>
                                Daily Water Balance Formula
                            </h5>
                            
                            <div style={{
                                backgroundColor: 'white',
                                borderRadius: '8px',
                                padding: '20px',
                                marginBottom: '15px',
                                border: '2px solid #FFE0B2',
                                textAlign: 'center'
                            }}>
                                <p style={{
                                    fontSize: isMobile ? '16px' : '18px',
                                    fontWeight: '600',
                                    color: colors.primary,
                                    margin: '0 0 10px 0'
                                }}>
                                    SW<sub>t</sub> = SW<sub>t-1</sub> + P + I - ETc
                                </p>
                                <p style={{
                                    fontSize: isMobile ? '12px' : '14px',
                                    color: colors.secondary,
                                    margin: '0'
                                }}>
                                    Where: SW = Soil Water, P = Precipitation, I = Irrigation, ETc = Crop ET
                                </p>
                            </div>
                            
                            <ul style={styles.list}>
                                <li style={styles.listItem}><span style={styles.bold}>Soil Water (SW):</span> Current soil moisture content in the root zone</li>
                                <li style={styles.listItem}><span style={styles.bold}>Precipitation (P):</span> Rainfall from NOAA GFS forecasts</li>
                                <li style={styles.listItem}><span style={styles.bold}>Irrigation (I):</span> Applied irrigation water (if any)</li>
                                <li style={styles.listItem}><span style={styles.bold}>Crop ET (ETc):</span> Daily crop water consumption</li>
                            </ul>
                        </div>
                    </div>

                    <div style={{
                        backgroundColor: 'white',
                        borderRadius: '8px',
                        padding: '20px',
                        marginBottom: '25px',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                        border: '2px solid #E1F5FE'
                    }}>
                        <h4 style={{
                            fontSize: isMobile ? '16px' : '18px',
                            fontWeight: '600',
                            color: colors.primary,
                            marginBottom: '15px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px'
                        }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#03A9F4' }}>
                                <path d="M12 2v2"/>
                                <path d="M12 20v2"/>
                                <path d="M2 12h2"/>
                                <path d="M20 12h2"/>
                                <circle cx="12" cy="12" r="5"/>
                            </svg>
                            D. Irrigation Scheduling Algorithms
                        </h4>
                        
                        <div style={{
                            backgroundColor: colors.background,
                            borderRadius: '6px',
                            padding: '15px',
                            marginBottom: '20px',
                            borderLeft: '4px solid #03A9F4'
                        }}>
                            <h5 style={{
                                fontSize: isMobile ? '15px' : '17px',
                                fontWeight: '600',
                                color: colors.primary,
                                marginBottom: '15px'
                            }}>
                                Smart Irrigation Logic
                            </h5>
                            
                            <ul style={styles.list}>
                                <li style={styles.listItem}><span style={styles.bold}>Deficit Management:</span> Maintains soil moisture above critical stress thresholds</li>
                                <li style={styles.listItem}><span style={styles.bold}>Real-time Adjustments:</span> Updates recommendations based on weather forecast changes</li>
                                <li style={styles.listItem}><span style={styles.bold}>Efficiency Factors:</span> Accounts for irrigation system efficiency (85-95%)</li>
                                <li style={styles.listItem}><span style={styles.bold}>Precision Timing:</span> Schedules irrigation to minimize evaporation losses</li>
                                <li style={styles.listItem}><span style={styles.bold}>Crop-Specific Logic:</span> Different algorithms for different crop types and growth stages</li>
                            </ul>
                        </div>
                    </div>

                    <div style={{
                        backgroundColor: 'white',
                        borderRadius: '8px',
                        padding: '20px',
                        marginBottom: '25px',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                        border: '2px solid #F3E5F5'
                    }}>
                        <h4 style={{
                            fontSize: isMobile ? '16px' : '18px',
                            fontWeight: '600',
                            color: colors.primary,
                            marginBottom: '15px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px'
                        }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#9C27B0' }}>
                                <path d="M12 2v2"/>
                                <path d="M12 20v2"/>
                                <path d="M2 12h2"/>
                                <path d="M20 12h2"/>
                                <circle cx="12" cy="12" r="5"/>
                            </svg>
                            E. Root Zone Dynamics
                        </h4>
                        
                        <div style={{
                            backgroundColor: colors.background,
                            borderRadius: '6px',
                            padding: '15px',
                            marginBottom: '20px',
                            borderLeft: '4px solid #9C27B0'
                        }}>
                            <h5 style={{
                                fontSize: isMobile ? '15px' : '17px',
                                fontWeight: '600',
                                color: colors.primary,
                                marginBottom: '15px'
                            }}>
                                Root Development & Water Extraction
                            </h5>
                            
                            <ul style={styles.list}>
                                <li style={styles.listItem}><span style={styles.bold}>Root Depth Growth:</span> Dynamic root development based on crop growth stage and GDD</li>
                                <li style={styles.listItem}><span style={styles.bold}>Water Extraction Patterns:</span> How roots access soil moisture at different depths</li>
                                <li style={styles.listItem}><span style={styles.bold}>Stress Thresholds:</span> Critical soil moisture levels that trigger irrigation</li>
                                <li style={styles.listItem}><span style={styles.bold}>Salinity Effects:</span> Adjustments for soil salinity impact on water availability</li>
                                <li style={styles.listItem}><span style={styles.bold}>Compaction Considerations:</span> Soil structure effects on water movement and root growth</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div style={styles.subsection}>
                    <SubsectionTitle icon={
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#3498db' }}>
                            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                        </svg>
                    }>
                        2. 16-Day Forecast Table
                    </SubsectionTitle>
                    <p style={{
                        fontSize: isMobile ? '14px' : '16px',
                        lineHeight: '1.6',
                        color: colors.text,
                        marginBottom: '15px'
                    }}>
                        The 16-Day Forecast Table provides comprehensive weather data and irrigation recommendations for advanced planning.
                    </p>

                    <h4 style={{
                        fontSize: isMobile ? '14px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '10px',
                        marginTop: '20px'
                    }}>Weather Parameters:</h4>
                    <ul style={styles.list}>
                        <li style={styles.listItem}><span style={styles.bold}>Daily Temperature:</span> Maximum and minimum temperatures for crop water use calculations</li>
                        <li style={styles.listItem}><span style={styles.bold}>Precipitation:</span> Forecasted rainfall to adjust irrigation requirements</li>
                        <li style={styles.listItem}><span style={styles.bold}>Humidity:</span> Relative humidity for evapotranspiration calculations</li>
                        <li style={styles.listItem}><span style={styles.bold}>Wind Speed:</span> Wind conditions affecting irrigation efficiency</li>
                    </ul>

                    <h4 style={{
                        fontSize: isMobile ? '14px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '10px',
                        marginTop: '20px'
                    }}>Irrigation Recommendations:</h4>
                    <ul style={styles.list}>
                        <li style={styles.listItem}><span style={styles.bold}>Daily Irrigation Amounts:</span> Precise water application recommendations</li>
                        <li style={styles.listItem}><span style={styles.bold}>Deficit Calculations:</span> Water deficit to 0.01 inches accuracy</li>
                        <li style={styles.listItem}><span style={styles.bold}>NOAA GFS Integration:</span> High-resolution weather data for planning</li>
                    </ul>
                </div>

                <div style={styles.subsection}>
                    <SubsectionTitle icon={
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#3498db' }}>
                            <path d="M3 3h18v18H3z"/>
                            <path d="M8 12h8"/>
                            <path d="M12 8v8"/>
                        </svg>
                    }>
                        3. Field Water Balance Chart
                    </SubsectionTitle>
                    <p style={{
                        fontSize: isMobile ? '14px' : '16px',
                        lineHeight: '1.6',
                        color: colors.text,
                        marginBottom: '15px'
                    }}>
                        Visual representation of water balance components for effective irrigation management.
                    </p>

                    <h4 style={{
                        fontSize: isMobile ? '14px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '10px',
                        marginTop: '20px'
                    }}>Chart Components:</h4>
                    <ul style={styles.list}>
                        <li style={styles.listItem}><span style={styles.bold}>Precipitation Tracking:</span> Visual representation of rainfall patterns and irrigation events</li>
                        <li style={styles.listItem}><span style={styles.bold}>Soil Moisture Monitoring:</span> Real-time soil moisture levels with SMAP satellite data</li>
                        <li style={styles.listItem}><span style={styles.bold}>AWC Visualization:</span> Available Water Capacity with field capacity and wilting point markers</li>
                        <li style={styles.listItem}><span style={styles.bold}>Water Deficit Tracking:</span> Continuous monitoring with color-coded indicators</li>
                    </ul>
                </div>
            </div>

            <div style={styles.section}>
                <h2 style={styles.sectionTitle}>4. Supported Crops</h2>
                <p style={{
                    fontSize: isMobile ? '14px' : '16px',
                    lineHeight: '1.6',
                    color: colors.text,
                    marginBottom: '15px'
                }}>
                    The tool supports comprehensive irrigation scheduling for major agricultural crops, each with specific water requirements and growth parameters.
                </p>
                
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr 1fr' : '1fr 1fr 1fr 1fr',
                    gap: '15px',
                    marginTop: '20px'
                }}>
                    {[
                        { crop: 'Corn', icon: '🌽', color: '#FFA726' },
                        { crop: 'Cotton', icon: '🌾', color: '#F4F4F4' },
                        { crop: 'Soybean', icon: '🌱', color: '#8BC34A' },
                        { crop: 'Sorghum', icon: '🌾', color: '#D4A574' },
                        { crop: 'Wheat', icon: '🌾', color: '#FFD54F' },
                        { crop: 'Strawberry', icon: '🍓', color: '#F44336' },
                        { crop: 'Peanut', icon: '🥜', color: '#8D6E63' }
                    ].map((item, index) => (
                        <div key={index} style={{
                            backgroundColor: 'white',
                            borderRadius: '8px',
                            padding: '15px',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center'
                        }}>
                            <div style={{
                                fontSize: '24px',
                                marginBottom: '8px'
                            }}>
                                {item.icon}
                            </div>
                            <span style={{
                                fontSize: isMobile ? '14px' : '16px',
                                fontWeight: '600',
                                color: colors.primary
                            }}>
                                {item.crop}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <div style={styles.section}>
                <h2 style={styles.sectionTitle}>5. Data Sources</h2>
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
                                    NOAA Global Forecast System providing 16-day weather forecasts including temperature, 
                                    precipitation, humidity, and wind speed data for irrigation scheduling and planning.
                                </td>
                                <td style={{ padding: '15px', borderBottom: '1px solid #ddd', backgroundColor: '#f8f9fa' }}>
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
                                        "NASA/SMAP/SPL4SMGP/008"
                                    </code>
                                </td>
                                <td style={{ padding: '15px', borderBottom: '1px solid #ddd', color: '#333' }}>
                                    NASA SMAP Level-4 Global Surface and Root Zone Soil Moisture data providing 
                                    initialization values for water balance calculations and irrigation modeling.
                                </td>
                                <td style={{ padding: '15px', borderBottom: '1px solid #ddd' }}>
                                    <a href="https://developers.google.com/earth-engine/datasets/catalog/NASA_SMAP_SPL4SMGP/008" 
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
                                        SoilGrids
                                    </span>
                                    <code style={{ 
                                        color: '#666',
                                        fontSize: '12px',
                                        backgroundColor: '#f1f1f1',
                                        padding: '4px 6px',
                                        borderRadius: '4px',
                                        display: 'inline-block'
                                    }}>
                                        "projects/soilgrids-isric"
                                    </code>
                                </td>
                                <td style={{ padding: '15px', borderBottom: '1px solid #ddd', color: '#333' }}>
                                    Global soil property data including texture, organic matter, and hydraulic properties 
                                    for water balance modeling and Available Water Capacity calculations.
                                </td>
                                <td style={{ padding: '15px', borderBottom: '1px solid #ddd', backgroundColor: '#f8f9fa' }}>
                                    <a href="https://www.isric.org/explore/soilgrids" 
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
                                        ECMWF ERA5-Land
                                    </span>
                                    <code style={{ 
                                        color: '#666',
                                        fontSize: '12px',
                                        backgroundColor: '#f1f1f1',
                                        padding: '4px 6px',
                                        borderRadius: '4px',
                                        display: 'inline-block'
                                    }}>
                                        "ECMWF/ERA5_LAND/DAILY_AGGR"
                                    </code>
                                </td>
                                <td style={{ padding: '15px', borderBottom: '1px solid #ddd', color: '#333' }}>
                                    High-resolution climate reanalysis data providing daily aggregates of temperature, precipitation, 
                                    evapotranspiration, soil moisture, and vegetation parameters from 1950 to present for enhanced 
                                    irrigation modeling and climate analysis.
                                </td>
                                <td style={{ padding: '15px', borderBottom: '1px solid #ddd', backgroundColor: '#f8f9fa' }}>
                                    <a href="https://developers.google.com/earth-engine/datasets/catalog/ECMWF_ERA5_LAND_DAILY_AGGR" 
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
        </>
    );
};

export default IrrigationSchedulerDocumentation;
