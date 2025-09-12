import React, { useState, useEffect } from 'react';
import MainDocumentation from './MainDocumentation';
import NDVIDocumentation from './NDVIDocumentation';
import SprayDocumentation from './SprayDocumentation';
import GDDDocumentation from './GDDDocumentation';
import IrrigationSchedulerDocumentation from './IrrigationSchedulerDocumentation';

const CropRiskDocumentation = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);
    const [activeTab, setActiveTab] = useState('cropRisk');

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 480);
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
            padding: isMobile ? '15px 10px' : '20px',
            scrollBehavior: 'smooth',
        },
        contentWrapper: {
            maxWidth: '1200px',
            margin: '0 auto',
            backgroundColor: 'white',
            borderRadius: isMobile ? '8px' : '12px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            padding: isMobile ? '20px 10px' : '40px',
        },
        tabContainer: {
            display: 'flex',
            justifyContent: 'center',
            marginBottom: isMobile ? '25px' : '30px',
            flexWrap: isMobile ? 'wrap' : 'nowrap',
            gap: isMobile ? '8px' : '10px',
            marginTop: isMobile ? '10px' : '0',
        },
        tab: {
            padding: isMobile ? '10px 8px' : '10px 20px',
            borderRadius: '8px',
            cursor: 'pointer',
            fontWeight: '500',
            fontSize: isMobile ? '13px' : '16px',
            transition: 'all 0.3s ease',
            textAlign: 'center',
            flex: isMobile ? '1 0 45%' : 'initial',
            marginBottom: isMobile ? '5px' : '0',
        },
        activeTab: {
            backgroundColor: colors.primary,
            color: 'white',
        },
        inactiveTab: {
            backgroundColor: colors.background,
            color: colors.primary,
            border: `1px solid ${colors.border}`,
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
        <div style={styles.container}>
            <div style={styles.contentWrapper}>
                <div style={styles.tabContainer}>
                    <div style={{
                        ...styles.tab,
                        ...(activeTab === 'main' ? styles.activeTab : styles.inactiveTab)
                    }} onClick={() => setActiveTab('main')}>Main Tool</div>
                    <div style={{
                        ...styles.tab,
                        ...(activeTab === 'ndvi' ? styles.activeTab : styles.inactiveTab)
                    }} onClick={() => setActiveTab('ndvi')}>NDVI & LST Viewer</div>
                    <div style={{
                        ...styles.tab,
                        ...(activeTab === 'spray' ? styles.activeTab : styles.inactiveTab)
                    }} onClick={() => setActiveTab('spray')}>Spray Planner</div>
                    <div style={{
                        ...styles.tab,
                        ...(activeTab === 'gdd' ? styles.activeTab : styles.inactiveTab)
                    }} onClick={() => setActiveTab('gdd')}>Crop Growth Tracker</div>
                    <div style={{
                        ...styles.tab,
                        ...(activeTab === 'cropRisk' ? styles.activeTab : styles.inactiveTab)
                    }} onClick={() => setActiveTab('cropRisk')}>Crop Risk Forecaster</div>
                    <div style={{
                        ...styles.tab,
                        ...(activeTab === 'irrigation' ? styles.activeTab : styles.inactiveTab)
                    }} onClick={() => setActiveTab('irrigation')}>Irrigation Scheduler</div>
                </div>

                {activeTab === 'cropRisk' && (
                    <>
                        <header style={styles.header}>
                            <h1 style={styles.title}>Crop Risk Forecaster Documentation</h1>
                            <p style={{
                                fontSize: isMobile ? '14px' : '16px',
                                lineHeight: '1.6',
                                color: colors.text,
                                maxWidth: '800px',
                                margin: '0 auto',
                                marginBottom: isMobile ? '15px' : '20px',
                            }}>
                                Welcome to the comprehensive guide for the Crop Risk Forecaster. 
                                This documentation will help you understand and utilize all features for effective crop risk management and decision-making.
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
                                    The Crop Risk Forecaster is a comprehensive agricultural decision-support tool that provides advanced crop risk analysis using satellite data, weather forecasts, and crop-specific models. It delivers actionable insights on water stress, heat stress, and disease risks to help farmers make informed decisions about crop management and protection strategies.
                                </div>
                            </div>
                        </div>

                        <div style={styles.section}>
                            <h2 style={styles.sectionTitle}>2. Key Features</h2>
                            <ul style={styles.list}>
                                <li style={styles.listItem}><span style={styles.bold}>Multi-Crop Support:</span> Comprehensive analysis for crops including Corn, Cotton, Soybean, Sorghum, Wheat, Strawberry, and Peanut.</li>
                                <li style={styles.listItem}><span style={styles.bold}>Comprehensive Risk Assessment:</span> Detailed analysis of water stress, heat stress, and biotic stress factors affecting crop health.</li>
                                <li style={styles.listItem}><span style={styles.bold}>16-Day Weather Forecasting:</span> Advanced weather predictions using NOAA GFS data for risk assessment and decision-making.</li>
                                <li style={styles.listItem}><span style={styles.bold}>Field-Specific Analysis:</span> Customizable field boundaries with detailed risk assessment and stress factor analysis.</li>
                                <li style={styles.listItem}><span style={styles.bold}>Scientific Validation:</span> Risk thresholds and assessment methods based on peer-reviewed research and agricultural extension guidelines.</li>
                            </ul>
                        </div>

                        <div style={styles.section}>
                            <h2 style={styles.sectionTitle}>3. Functional Components</h2>
                            
                            <div style={styles.subsection}>
                                <SubsectionTitle icon={
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#3498db' }}>
                                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                                    </svg>
                                }>
                                    1. Crop Risk Assessment
                                </SubsectionTitle>
                                <p style={{
                                    fontSize: isMobile ? '14px' : '16px',
                                    lineHeight: '1.6',
                                    color: colors.text,
                                    marginBottom: '15px'
                                }}>
                                    The tool provides comprehensive risk assessment across two primary stress categories that affect crop productivity and yield potential. The assessment system integrates real-time satellite data, weather forecasts, and crop-specific physiological models to deliver actionable risk insights displayed on interactive panels.
                                </p>

                                {/* Abiotic Stress Risk Assessment */}
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
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#3498db' }}>
                                            <path d="M12 2v2"/>
                                            <path d="M12 20v2"/>
                                            <path d="M2 12h2"/>
                                            <path d="M20 12h2"/>
                                            <circle cx="12" cy="12" r="5"/>
                                        </svg>
                                        A. Abiotic Stress Risk Assessment
                                    </h4>
                                    <p style={{
                                        fontSize: isMobile ? '14px' : '16px',
                                        lineHeight: '1.6',
                                        color: colors.text,
                                        marginBottom: '20px'
                                    }}>
                                        Abiotic stress assessment focuses on non-living environmental factors that can negatively impact crop growth and yield. The system evaluates two critical abiotic stress categories with advanced modeling approaches.
                                    </p>

                                            {/* Water Stress Risk - Comprehensive Technical Section */}
                <div style={{
                    backgroundColor: colors.background,
                    borderRadius: '8px',
                    padding: '20px',
                    marginBottom: '25px',
                    borderLeft: '4px solid #2196F3'
                }}>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '17px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '15px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                    }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#2196F3' }}>
                            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7 7-7z"/>
                        </svg>
                        A1. Water Stress Risk Analysis
                    </h5>
                    
                    <div style={{
                        backgroundColor: 'white',
                        borderRadius: '6px',
                        padding: '15px',
                        marginBottom: '20px',
                        border: '1px solid #e0e0e0'
                    }}>
                        <h6 style={{
                            fontSize: isMobile ? '14px' : '15px',
                            fontWeight: '600',
                            color: colors.secondary,
                            marginBottom: '10px'
                        }}>1. Purpose</h6>
                        <p style={{
                            fontSize: isMobile ? '13px' : '14px',
                            lineHeight: '1.6',
                            color: colors.text,
                            marginBottom: '0'
                        }}>
                            To forecast and diagnose daily water stress risk for any field and crop by simulating soil moisture day-by-day over the root zone, integrating local soil texture, crop growth, weather, and irrigation.
                        </p>
                    </div>

                    <div style={{
                        backgroundColor: 'white',
                        borderRadius: '6px',
                        padding: '15px',
                        marginBottom: '20px',
                        border: '1px solid #e0e0e0'
                    }}>
                        <h6 style={{
                            fontSize: isMobile ? '14px' : '15px',
                            fontWeight: '600',
                            color: colors.secondary,
                            marginBottom: '15px'
                        }}>2. Key Datasets & Parameters</h6>
                        
                        <div style={{marginBottom: '15px'}}>
                            <p style={{
                                fontSize: isMobile ? '13px' : '14px',
                                fontWeight: '500',
                                color: colors.primary,
                                marginBottom: '8px'
                            }}>• Soil Texture:</p>
                            <p style={{
                                fontSize: isMobile ? '12px' : '13px',
                                lineHeight: '1.5',
                                color: colors.text,
                                marginBottom: '5px',
                                marginLeft: '15px'
                            }}>From SoilGrids or user input.</p>
                            <p style={{
                                fontSize: isMobile ? '12px' : '13px',
                                lineHeight: '1.5',
                                color: colors.text,
                                marginBottom: '5px',
                                marginLeft: '15px'
                            }}>SoilGrids: <a href="https://soilgrids.org/" style={{color: colors.link}}>https://soilgrids.org/</a></p>
                            <p style={{
                                fontSize: isMobile ? '12px' : '13px',
                                lineHeight: '1.5',
                                color: colors.text,
                                marginBottom: '0',
                                marginLeft: '15px'
                            }}>NRCS Web Soil Survey: <a href="https://websoilsurvey.nrcs.usda.gov/app/HomePage.htm" style={{color: colors.link}}>https://websoilsurvey.nrcs.usda.gov/app/HomePage.htm</a></p>
                        </div>

                        <div style={{marginBottom: '15px'}}>
                            <p style={{
                                fontSize: isMobile ? '13px' : '14px',
                                fontWeight: '500',
                                color: colors.primary,
                                marginBottom: '8px'
                            }}>• Soil Properties:</p>
                            <p style={{
                                fontSize: isMobile ? '12px' : '13px',
                                lineHeight: '1.5',
                                color: colors.text,
                                marginBottom: '5px',
                                marginLeft: '15px'
                            }}>Field Capacity (FC), Wilting Point (WP), Available Water Capacity (AWC) per soil texture (from NRCS table, Appendix 1).</p>
                            <p style={{
                                fontSize: isMobile ? '12px' : '13px',
                                lineHeight: '1.5',
                                color: colors.text,
                                marginBottom: '0',
                                marginLeft: '15px'
                            }}>NRCS Soil Water Relationships Table: <a href="https://weather.wsu.edu/ism/ISMManualOptimized.pdf" style={{color: colors.link}}>https://weather.wsu.edu/ism/ISMManualOptimized.pdf</a></p>
                        </div>

                        <div style={{marginBottom: '15px'}}>
                            <p style={{
                                fontSize: isMobile ? '13px' : '14px',
                                fontWeight: '500',
                                color: colors.primary,
                                marginBottom: '8px'
                            }}>• Crop Parameters:</p>
                            <p style={{
                                fontSize: isMobile ? '12px' : '13px',
                                lineHeight: '1.5',
                                color: colors.text,
                                marginBottom: '5px',
                                marginLeft: '15px'
                            }}>Planting/emergence date, crop coefficient curve (Kc), root depths per growth stage, maximum allowable depletion (MAD) (from WSU/NRCS table, Appendix 2).</p>
                            <p style={{
                                fontSize: isMobile ? '12px' : '13px',
                                lineHeight: '1.5',
                                color: colors.text,
                                marginBottom: '0',
                                marginLeft: '15px'
                            }}>WSU Irrigation Scheduler Manual: <a href="https://weather.wsu.edu/ism/ISMManualOptimized.pdf" style={{color: colors.link}}>https://weather.wsu.edu/ism/ISMManualOptimized.pdf</a></p>
                        </div>

                        <div style={{marginBottom: '15px'}}>
                            <p style={{
                                fontSize: isMobile ? '13px' : '14px',
                                fontWeight: '500',
                                color: colors.primary,
                                marginBottom: '8px'
                            }}>• Weather Data:</p>
                            <p style={{
                                fontSize: isMobile ? '12px' : '13px',
                                lineHeight: '1.5',
                                color: colors.text,
                                marginBottom: '5px',
                                marginLeft: '15px'
                            }}>Daily precipitation, Tmax, Tmin (from NOAA GFS, GEE).</p>
                            <p style={{
                                fontSize: isMobile ? '12px' : '13px',
                                lineHeight: '1.5',
                                color: colors.text,
                                marginBottom: '0',
                                marginLeft: '15px'
                            }}>NOAA GFS Dataset (Earth Engine): <a href="https://developers.google.com/earth-engine/datasets/catalog/NOAA_GFS0P25" style={{color: colors.link}}>https://developers.google.com/earth-engine/datasets/catalog/NOAA_GFS0P25</a></p>
                        </div>

                        <div style={{marginBottom: '15px'}}>
                            <p style={{
                                fontSize: isMobile ? '13px' : '14px',
                                fontWeight: '500',
                                color: colors.primary,
                                marginBottom: '8px'
                            }}>• Irrigation:</p>
                            <p style={{
                                fontSize: isMobile ? '12px' : '13px',
                                lineHeight: '1.5',
                                color: colors.text,
                                marginBottom: '0',
                                marginLeft: '15px'
                            }}>User-entered or modeled.</p>
                        </div>

                        <div style={{marginBottom: '0'}}>
                            <p style={{
                                fontSize: isMobile ? '13px' : '14px',
                                fontWeight: '500',
                                color: colors.primary,
                                marginBottom: '8px'
                            }}>• Initial Soil Moisture:</p>
                            <p style={{
                                fontSize: isMobile ? '12px' : '13px',
                                lineHeight: '1.5',
                                color: colors.text,
                                marginBottom: '5px',
                                marginLeft: '15px'
                            }}>From SMAP satellite.</p>
                            <p style={{
                                fontSize: isMobile ? '12px' : '13px',
                                lineHeight: '1.5',
                                color: colors.text,
                                marginBottom: '0',
                                marginLeft: '15px'
                            }}>NASA SMAP Data (Earth Engine): <a href="https://developers.google.com/earth-engine/datasets/catalog/NASA_SMAP_SPL4SMGP_008" style={{color: colors.link}}>https://developers.google.com/earth-engine/datasets/catalog/NASA_SMAP_SPL4SMGP_008</a></p>
                        </div>
                    </div>

                    <div style={{
                        backgroundColor: 'white',
                        borderRadius: '6px',
                        padding: '15px',
                        marginBottom: '20px',
                        border: '1px solid #e0e0e0'
                    }}>
                        <h6 style={{
                            fontSize: isMobile ? '14px' : '15px',
                            fontWeight: '600',
                            color: colors.secondary,
                            marginBottom: '15px'
                        }}>3. Soil Water Holding Properties Calculation</h6>
                        
                        <div style={{marginBottom: '15px'}}>
                            <p style={{
                                fontSize: isMobile ? '13px' : '14px',
                                fontWeight: '500',
                                color: colors.primary,
                                marginBottom: '8px'
                            }}>3.1 Extract Soil Texture</p>
                            <p style={{
                                fontSize: isMobile ? '12px' : '13px',
                                lineHeight: '1.5',
                                color: colors.text,
                                marginBottom: '5px',
                                marginLeft: '15px'
                            }}>• For each field (or mapped location), determine the local soil texture class using sources like SoilGrids, the NRCS Web Soil Survey, or direct user input.</p>
                            <p style={{
                                fontSize: isMobile ? '12px' : '13px',
                                lineHeight: '1.5',
                                color: colors.text,
                                marginBottom: '0',
                                marginLeft: '15px'
                            }}>• Examples of soil texture classes include: Coarse Sand, Loamy Sand, Sandy Loam, Silt Loam, Clay, Peat Mucks, etc.</p>
                        </div>

                        <div style={{marginBottom: '15px'}}>
                            <p style={{
                                fontSize: isMobile ? '13px' : '14px',
                                fontWeight: '500',
                                color: colors.primary,
                                marginBottom: '8px'
                            }}>3.2 Lookup Soil Properties</p>
                            <p style={{
                                fontSize: isMobile ? '12px' : '13px',
                                lineHeight: '1.5',
                                color: colors.text,
                                marginBottom: '8px',
                                marginLeft: '15px'
                            }}>• Using the identified soil texture, retrieve the following values from the NRCS default soil water content table (Appendix 1):</p>
                            <p style={{
                                fontSize: isMobile ? '12px' : '13px',
                                lineHeight: '1.5',
                                color: colors.text,
                                marginBottom: '5px',
                                marginLeft: '30px'
                            }}>o <span style={{fontWeight: '500'}}>Field Capacity (FC):</span> The amount of water (in inches per foot of soil) that remains in the soil after excess water has drained and the rate of downward movement has decreased.</p>
                            <p style={{
                                fontSize: isMobile ? '12px' : '13px',
                                lineHeight: '1.5',
                                color: colors.text,
                                marginBottom: '5px',
                                marginLeft: '30px'
                            }}>o <span style={{fontWeight: '500'}}>Wilting Point (WP):</span> The amount of water (in inches per foot) below which plant roots can no longer extract water from the soil.</p>
                            <p style={{
                                fontSize: isMobile ? '12px' : '13px',
                                lineHeight: '1.5',
                                color: colors.text,
                                marginBottom: '0',
                                marginLeft: '30px'
                            }}>o <span style={{fontWeight: '500'}}>Available Water Capacity (AWC per foot):</span> The difference between Field Capacity and Wilting Point for that soil, already tabulated as AWC (in/ft) in Appendix 1.</p>
                        </div>

                        <div style={{marginBottom: '0'}}>
                            <p style={{
                                fontSize: isMobile ? '13px' : '14px',
                                fontWeight: '500',
                                color: colors.primary,
                                marginBottom: '8px'
                            }}>3.3 Calculate Total AWC</p>
                            <p style={{
                                fontSize: isMobile ? '12px' : '13px',
                                lineHeight: '1.5',
                                color: colors.text,
                                marginBottom: '10px',
                                marginLeft: '15px'
                            }}>• Root zone depth is determined dynamically each day according to crop growth stage, using crop-specific tables (see crop defaults, GDD-based growth).</p>
                            <p style={{
                                fontSize: isMobile ? '12px' : '13px',
                                lineHeight: '1.5',
                                color: colors.text,
                                marginBottom: '8px',
                                marginLeft: '15px'
                            }}>• Total Available Water Capacity (AWC) for the root zone is then:</p>
                            <div style={{
                                backgroundColor: '#2c3e50',
                                color: 'white',
                                padding: '15px',
                                borderRadius: '8px',
                                fontFamily: 'monospace',
                                fontSize: isMobile ? '14px' : '16px',
                                marginBottom: '10px',
                                border: '2px solid #34495e',
                                marginLeft: '15px',
                                textAlign: 'center',
                                fontWeight: '500'
                            }}>
                                AWC (in/ft) = FC (in/ft) – WP (in/ft)
                            </div>
                            <div style={{
                                backgroundColor: '#2c3e50',
                                color: 'white',
                                padding: '15px',
                                borderRadius: '8px',
                                fontFamily: 'monospace',
                                fontSize: isMobile ? '14px' : '16px',
                                marginBottom: '10px',
                                border: '2px solid #34495e',
                                marginLeft: '15px',
                                textAlign: 'center',
                                fontWeight: '500'
                            }}>
                                Total AWC (inches) = AWC (in/ft) × Root Depth (ft)
                            </div>
                            <p style={{
                                fontSize: isMobile ? '12px' : '13px',
                                lineHeight: '1.5',
                                color: colors.text,
                                marginBottom: '0',
                                marginLeft: '15px'
                            }}>• This calculation is performed for each day of the simulation, as root depth increases during crop development.</p>
                        </div>
                    </div>

                    <div style={{
                        backgroundColor: 'white',
                        borderRadius: '6px',
                        padding: '15px',
                        marginBottom: '20px',
                        border: '1px solid #e0e0e0'
                    }}>
                        <h6 style={{
                            fontSize: isMobile ? '14px' : '15px',
                            fontWeight: '600',
                            color: colors.secondary,
                            marginBottom: '15px'
                        }}>4. Dynamic Daily Crop Parameters: GDD, Kc, Root Depth</h6>
                        
                        <div style={{marginBottom: '15px'}}>
                            <p style={{
                                fontSize: isMobile ? '13px' : '14px',
                                fontWeight: '500',
                                color: colors.primary,
                                marginBottom: '8px'
                            }}>4.1 Calculate Growing Degree Days (GDD)</p>
                            <div style={{
                                backgroundColor: '#2c3e50',
                                color: 'white',
                                padding: '15px',
                                borderRadius: '8px',
                                fontFamily: 'monospace',
                                fontSize: isMobile ? '14px' : '16px',
                                marginBottom: '10px',
                                border: '2px solid #34495e',
                                marginLeft: '15px',
                                textAlign: 'center',
                                fontWeight: '500'
                            }}>
                                GDD_day = max(0, (min(T_max, 86) + max(T_min, T_base))/2 - T_base)
                            </div>
                            <p style={{
                                fontSize: isMobile ? '12px' : '13px',
                                lineHeight: '1.5',
                                color: colors.text,
                                marginBottom: '5px',
                                marginLeft: '15px'
                            }}>• Base temp (T_base): Crop-specific (e.g., corn: 50°F, soybean: 50°F).</p>
                            <p style={{
                                fontSize: isMobile ? '12px' : '13px',
                                lineHeight: '1.5',
                                color: colors.text,
                                marginBottom: '0',
                                marginLeft: '15px'
                            }}>• GDD Accumulation: Sum from planting date to each forecast day.</p>
                        </div>

                        <div style={{marginBottom: '15px'}}>
                            <p style={{
                                fontSize: isMobile ? '13px' : '14px',
                                fontWeight: '500',
                                color: colors.primary,
                                marginBottom: '8px'
                            }}>4.2 Use GDD to Determine Growth Stage</p>
                            <p style={{
                                fontSize: isMobile ? '12px' : '13px',
                                lineHeight: '1.5',
                                color: colors.text,
                                marginBottom: '5px',
                                marginLeft: '15px'
                            }}>• Compare accumulated GDD to crop's development curve (from WSU/NRCS Appendix 2).</p>
                            <p style={{
                                fontSize: isMobile ? '12px' : '13px',
                                lineHeight: '1.5',
                                color: colors.text,
                                marginBottom: '0',
                                marginLeft: '15px'
                            }}>• Stages (Initial, Cover, Final): thresholds by crop/day-of-year or GDD.</p>
                        </div>

                        <div style={{marginBottom: '0'}}>
                            <p style={{
                                fontSize: isMobile ? '13px' : '14px',
                                fontWeight: '500',
                                color: colors.primary,
                                marginBottom: '8px'
                            }}>4.3 Lookup Crop Coefficient (Kc) and Root Depth</p>
                            <p style={{
                                fontSize: isMobile ? '12px' : '13px',
                                lineHeight: '1.5',
                                color: colors.text,
                                marginBottom: '5px',
                                marginLeft: '15px'
                            }}>• For current stage, get Kc and Root Depth (ft) from table (Appendix 2 or WSU manual).</p>
                            <p style={{
                                fontSize: isMobile ? '12px' : '13px',
                                lineHeight: '1.5',
                                color: colors.text,
                                marginBottom: '5px',
                                marginLeft: '15px'
                            }}>• Kc: Used to compute actual crop water use (ETc).</p>
                            <p style={{
                                fontSize: isMobile ? '12px' : '13px',
                                lineHeight: '1.5',
                                color: colors.text,
                                marginBottom: '0',
                                marginLeft: '15px'
                            }}>• Root Depth: Used to scale AWC.</p>
                        </div>
                    </div>

                    <div style={{
                        backgroundColor: 'white',
                        borderRadius: '6px',
                        padding: '15px',
                        marginBottom: '20px',
                        border: '1px solid #e0e0e0'
                    }}>
                        <h6 style={{
                            fontSize: isMobile ? '14px' : '15px',
                            fontWeight: '600',
                            color: colors.secondary,
                            marginBottom: '15px'
                        }}>5. Daily Soil Moisture Simulation (Water Balance)</h6>
                        
                        <p style={{
                            fontSize: isMobile ? '12px' : '13px',
                            lineHeight: '1.5',
                            color: colors.text,
                            marginBottom: '15px'
                        }}>For each forecast day, recursively calculate root zone soil moisture:</p>

                        <div style={{marginBottom: '15px'}}>
                            <p style={{
                                fontSize: isMobile ? '13px' : '14px',
                                fontWeight: '500',
                                color: colors.primary,
                                marginBottom: '8px'
                            }}>5.1 Initial Value</p>
                            <p style={{
                                fontSize: isMobile ? '12px' : '13px',
                                lineHeight: '1.5',
                                color: colors.text,
                                marginBottom: '5px',
                                marginLeft: '15px'
                            }}>• Day 0: Use SMAP root zone soil moisture (mm → inches: ×0.03937)</p>
                            <p style={{
                                fontSize: isMobile ? '12px' : '13px',
                                lineHeight: '1.5',
                                color: colors.text,
                                marginBottom: '0',
                                marginLeft: '15px'
                            }}>If not available, set to FC × root depth.</p>
                        </div>

                        <div style={{marginBottom: '15px'}}>
                            <p style={{
                                fontSize: isMobile ? '13px' : '14px',
                                fontWeight: '500',
                                color: colors.primary,
                                marginBottom: '8px'
                            }}>5.2 Water Balance Equation</p>
                            <div style={{
                                backgroundColor: '#2c3e50',
                                color: 'white',
                                padding: '15px',
                                borderRadius: '8px',
                                fontFamily: 'monospace',
                                fontSize: isMobile ? '14px' : '16px',
                                marginBottom: '10px',
                                border: '2px solid #34495e',
                                marginLeft: '15px',
                                textAlign: 'center',
                                fontWeight: '500'
                            }}>
                                SoilMoisture_t = SoilMoisture_t-1 + Precip_t + Irrigation_t - ETc_t
                            </div>
                            <p style={{
                                fontSize: isMobile ? '12px' : '13px',
                                lineHeight: '1.5',
                                color: colors.text,
                                marginBottom: '5px',
                                marginLeft: '15px'
                            }}>• Precip: Forecast, inches.</p>
                            <p style={{
                                fontSize: isMobile ? '12px' : '13px',
                                lineHeight: '1.5',
                                color: colors.text,
                                marginBottom: '8px',
                                marginLeft: '15px'
                            }}>• Irrigation: User entry, inches.</p>
                            <p style={{
                                fontSize: isMobile ? '12px' : '13px',
                                lineHeight: '1.5',
                                color: colors.text,
                                marginBottom: '8px',
                                marginLeft: '15px'
                            }}>• ETc: Calculated below.</p>
                            <p style={{
                                fontSize: isMobile ? '12px' : '13px',
                                lineHeight: '1.5',
                                color: colors.text,
                                marginBottom: '5px',
                                marginLeft: '15px'
                            }}><span style={{fontWeight: '500'}}>Limits:</span></p>
                            <p style={{
                                fontSize: isMobile ? '12px' : '13px',
                                lineHeight: '1.5',
                                color: colors.text,
                                marginBottom: '5px',
                                marginLeft: '30px'
                            }}>• If SoilMoisture_t &gt; FC × RootDepth → set to FC × RootDepth (drainage).</p>
                            <p style={{
                                fontSize: isMobile ? '12px' : '13px',
                                lineHeight: '1.5',
                                color: colors.text,
                                marginBottom: '0',
                                marginLeft: '30px'
                            }}>• If &lt; WP × RootDepth → set to WP × RootDepth (can't go lower; plants cannot extract).</p>
                        </div>

                        <div style={{marginBottom: '0'}}>
                            <p style={{
                                fontSize: isMobile ? '13px' : '14px',
                                fontWeight: '500',
                                color: colors.primary,
                                marginBottom: '8px'
                            }}>5.3 Daily Crop Evapotranspiration (ETc)</p>
                            <p style={{
                                fontSize: isMobile ? '12px' : '13px',
                                lineHeight: '1.5',
                                color: colors.text,
                                marginBottom: '5px',
                                marginLeft: '15px'
                            }}>1. Reference ET (ET₀) [Hargreaves Equation]:</p>
                            <div style={{
                                backgroundColor: '#2c3e50',
                                color: 'white',
                                padding: '15px',
                                borderRadius: '8px',
                                fontFamily: 'monospace',
                                fontSize: isMobile ? '14px' : '16px',
                                marginBottom: '8px',
                                border: '2px solid #34495e',
                                marginLeft: '15px',
                                textAlign: 'center',
                                fontWeight: '500'
                            }}>
                                ET₀ = 0.0023 × (T_max,C - T_min,C)^0.5 × (T_mean,C + 17.8)
                            </div>
                            <p style={{
                                fontSize: isMobile ? '12px' : '13px',
                                lineHeight: '1.5',
                                color: colors.text,
                                marginBottom: '8px',
                                marginLeft: '15px'
                            }}>• Temperatures in °C.</p>
                            <p style={{
                                fontSize: isMobile ? '12px' : '13px',
                                lineHeight: '1.5',
                                color: colors.text,
                                marginBottom: '5px',
                                marginLeft: '15px'
                            }}>2. Crop Coefficient (Kc):</p>
                            <p style={{
                                fontSize: isMobile ? '12px' : '13px',
                                lineHeight: '1.5',
                                color: colors.text,
                                marginBottom: '8px',
                                marginLeft: '15px'
                            }}>• Get Kc from WSU/NRCS table for stage.</p>
                            <p style={{
                                fontSize: isMobile ? '12px' : '13px',
                                lineHeight: '1.5',
                                color: colors.text,
                                marginBottom: '5px',
                                marginLeft: '15px'
                            }}>3. Actual Crop ET:</p>
                            <div style={{
                                backgroundColor: '#2c3e50',
                                color: 'white',
                                padding: '15px',
                                borderRadius: '8px',
                                fontFamily: 'monospace',
                                fontSize: isMobile ? '14px' : '16px',
                                marginBottom: '0',
                                border: '2px solid #34495e',
                                marginLeft: '15px',
                                textAlign: 'center',
                                fontWeight: '500'
                            }}>
                                ETc = ET₀ × Kc
                            </div>
                        </div>
                    </div>

                    <div style={{
                        backgroundColor: 'white',
                        borderRadius: '6px',
                        padding: '15px',
                        marginBottom: '20px',
                        border: '1px solid #e0e0e0'
                    }}>
                        <h6 style={{
                            fontSize: isMobile ? '14px' : '15px',
                            fontWeight: '600',
                            color: colors.secondary,
                            marginBottom: '15px'
                        }}>6. Water Deficit and Risk Assessment</h6>
                        
                        <div style={{marginBottom: '15px'}}>
                            <p style={{
                                fontSize: isMobile ? '13px' : '14px',
                                fontWeight: '500',
                                color: colors.primary,
                                marginBottom: '8px'
                            }}>6.1 Water Deficit (inches)</p>
                            <div style={{
                                backgroundColor: '#2c3e50',
                                color: 'white',
                                padding: '15px',
                                borderRadius: '8px',
                                fontFamily: 'monospace',
                                fontSize: isMobile ? '14px' : '16px',
                                marginBottom: '8px',
                                border: '2px solid #34495e',
                                marginLeft: '15px',
                                textAlign: 'center',
                                fontWeight: '500'
                            }}>
                                Water Deficit_t = (FC - WP) × Root Depth_t - SoilMoisture_t
                            </div>
                            <p style={{
                                fontSize: isMobile ? '12px' : '13px',
                                lineHeight: '1.5',
                                color: colors.text,
                                marginBottom: '8px',
                                marginLeft: '15px'
                            }}>or simply,</p>
                            <div style={{
                                backgroundColor: '#2c3e50',
                                color: 'white',
                                padding: '15px',
                                borderRadius: '8px',
                                fontFamily: 'monospace',
                                fontSize: isMobile ? '14px' : '16px',
                                marginBottom: '8px',
                                border: '2px solid #34495e',
                                marginLeft: '15px',
                                textAlign: 'center',
                                fontWeight: '500'
                            }}>
                                Deficit_t = AWC_t - SoilMoisture_t
                            </div>
                            <p style={{
                                fontSize: isMobile ? '12px' : '13px',
                                lineHeight: '1.5',
                                color: colors.text,
                                marginBottom: '0',
                                marginLeft: '15px'
                            }}>• AWC: Available Water Capacity for current root depth.</p>
                        </div>

                        <div style={{marginBottom: '15px'}}>
                            <p style={{
                                fontSize: isMobile ? '13px' : '14px',
                                fontWeight: '500',
                                color: colors.primary,
                                marginBottom: '8px'
                            }}>6.2 Deficit Percentage</p>
                            <div style={{
                                backgroundColor: '#2c3e50',
                                color: 'white',
                                padding: '15px',
                                borderRadius: '8px',
                                fontFamily: 'monospace',
                                fontSize: isMobile ? '14px' : '16px',
                                marginBottom: '0',
                                border: '2px solid #34495e',
                                marginLeft: '15px',
                                textAlign: 'center',
                                fontWeight: '500'
                            }}>
                                Deficit%_t = (Deficit_t / AWC_t) × 100
                            </div>
                        </div>

                        <div style={{marginBottom: '15px'}}>
                            <p style={{
                                fontSize: isMobile ? '13px' : '14px',
                                fontWeight: '500',
                                color: colors.primary,
                                marginBottom: '8px'
                            }}>6.3 Assign Water Stress Risk</p>
                            <p style={{
                                fontSize: isMobile ? '12px' : '13px',
                                lineHeight: '1.5',
                                color: colors.text,
                                marginBottom: '8px',
                                marginLeft: '15px'
                            }}>Thresholds (example: Corn, Soybean, Peanut)</p>
                            <p style={{
                                fontSize: isMobile ? '12px' : '13px',
                                lineHeight: '1.5',
                                color: colors.text,
                                marginBottom: '5px',
                                marginLeft: '15px'
                            }}>• High Risk: Deficit% &gt; 80%</p>
                            <p style={{
                                fontSize: isMobile ? '12px' : '13px',
                                lineHeight: '1.5',
                                color: colors.text,
                                marginBottom: '5px',
                                marginLeft: '15px'
                            }}>• Medium: 50–80%</p>
                            <p style={{
                                fontSize: isMobile ? '12px' : '13px',
                                lineHeight: '1.5',
                                color: colors.text,
                                marginBottom: '5px',
                                marginLeft: '15px'
                            }}>• Low: &lt; 50%</p>
                            <p style={{
                                fontSize: isMobile ? '12px' : '13px',
                                lineHeight: '1.5',
                                color: colors.text,
                                marginBottom: '0',
                                marginLeft: '15px'
                            }}>• (Custom per crop; see your crop thresholds table)</p>
                        </div>

                        <div style={{marginBottom: '0'}}>
                            <p style={{
                                fontSize: isMobile ? '13px' : '14px',
                                fontWeight: '500',
                                color: colors.primary,
                                marginBottom: '8px'
                            }}>6.4 Irrigation Advisory</p>
                            <p style={{
                                fontSize: isMobile ? '12px' : '13px',
                                lineHeight: '1.5',
                                color: colors.text,
                                marginBottom: '0',
                                marginLeft: '15px'
                            }}>• If Deficit% exceeds crop's Maximum Allowable Depletion (MAD), recommend irrigation to fill deficit.</p>
                        </div>
                    </div>

                    <div style={{
                        backgroundColor: 'white',
                        borderRadius: '6px',
                        padding: '15px',
                        marginBottom: '0',
                        border: '1px solid #e0e0e0'
                    }}>
                        <h6 style={{
                            fontSize: isMobile ? '14px' : '15px',
                            fontWeight: '600',
                            color: colors.secondary,
                            marginBottom: '15px'
                        }}>7. Crop and Soil Table References</h6>
                        
                        <div style={{marginBottom: '15px'}}>
                            <p style={{
                                fontSize: isMobile ? '13px' : '14px',
                                fontWeight: '500',
                                color: colors.primary,
                                marginBottom: '8px'
                            }}>• Soil Properties:</p>
                            <p style={{
                                fontSize: isMobile ? '12px' : '13px',
                                lineHeight: '1.5',
                                color: colors.text,
                                marginBottom: '0',
                                marginLeft: '15px'
                            }}>NRCS Table, Appendix 1 (in/ft for FC, WP, AWC)</p>
                        </div>

                        <div style={{marginBottom: '15px'}}>
                            <p style={{
                                fontSize: isMobile ? '13px' : '14px',
                                fontWeight: '500',
                                color: colors.primary,
                                marginBottom: '8px'
                            }}>• Crop Coefficients, Root Depths:</p>
                            <p style={{
                                fontSize: isMobile ? '12px' : '13px',
                                lineHeight: '1.5',
                                color: colors.text,
                                marginBottom: '5px',
                                marginLeft: '15px'
                            }}>WSU manual Appendix/NRCS Table, Appendix 2</p>
                            <p style={{
                                fontSize: isMobile ? '12px' : '13px',
                                lineHeight: '1.5',
                                color: colors.text,
                                marginBottom: '0',
                                marginLeft: '15px'
                            }}>(e.g., Corn: Kc=0.2–1.05, Root depth: 0.4–7 ft over season; Soybean: Kc=0.3–1.2, Root depth: 0.5–6 ft)</p>
                        </div>

                        <div style={{marginBottom: '0'}}>
                            <p style={{
                                fontSize: isMobile ? '13px' : '14px',
                                fontWeight: '500',
                                color: colors.primary,
                                marginBottom: '8px'
                            }}>• Source for full tables:</p>
                            <p style={{
                                fontSize: isMobile ? '12px' : '13px',
                                lineHeight: '1.5',
                                color: colors.text,
                                marginBottom: '5px',
                                marginLeft: '15px'
                            }}><a href="https://weather.wsu.edu/ism/ISMManualOptimized.pdf" style={{color: colors.link}}>https://weather.wsu.edu/ism/ISMManualOptimized.pdf</a></p>
                            <p style={{
                                fontSize: isMobile ? '12px' : '13px',
                                lineHeight: '1.5',
                                color: colors.text,
                                marginBottom: '0',
                                marginLeft: '15px'
                            }}>(See end of PDF for soil/crop reference tables)</p>
                        </div>
                    </div>
                </div>

                                            {/* Heat Stress Risk - Comprehensive Technical Section */}
                <div style={{
                    backgroundColor: colors.background,
                    borderRadius: '8px',
                    padding: '20px',
                    marginBottom: '20px',
                    borderLeft: '4px solid #FF9800'
                }}>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '17px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '15px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                    }}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#FF9800' }}>
                            <path d="M12 2v2"/>
                            <path d="M12 20v2"/>
                            <path d="M2 12h2"/>
                            <path d="M20 12h2"/>
                            <path d="M19.07 4.93l-1.41 1.41"/>
                            <path d="M6.34 17.66l-1.41 1.41"/>
                            <path d="M4.93 4.93l1.41 1.41"/>
                            <path d="M17.66 17.66l1.41 1.41"/>
                            <circle cx="12" cy="12" r="8"/>
                        </svg>
                        A2. Heat Stress Risk Analysis
                    </h5>
                    
                    <div style={{
                        backgroundColor: 'white',
                        borderRadius: '6px',
                        padding: '15px',
                        marginBottom: '20px',
                        border: '1px solid #e0e0e0'
                    }}>
                        <h6 style={{
                            fontSize: isMobile ? '14px' : '15px',
                            fontWeight: '600',
                            color: colors.secondary,
                            marginBottom: '10px'
                        }}>1. Overview & Methodology</h6>
                        <p style={{
                            fontSize: isMobile ? '13px' : '14px',
                            lineHeight: '1.6',
                            color: colors.text,
                            marginBottom: '15px'
                        }}>
                            Heat stress risk assessment evaluates temperature-induced crop stress using daily maximum forecast temperatures (T_max) from NOAA GFS data. Risk categories are determined by comparing forecast temperatures against scientifically-established, crop-specific physiological thresholds derived from peer-reviewed research and agricultural extension guidelines.
                        </p>
                        
                        <h6 style={{
                            fontSize: isMobile ? '14px' : '15px',
                            fontWeight: '600',
                            color: colors.secondary,
                            marginBottom: '10px',
                            marginTop: '15px'
                        }}>2. Data Sources & Processing</h6>
                        <ul style={{
                            fontSize: isMobile ? '12px' : '13px',
                            lineHeight: '1.5',
                            color: colors.text,
                            marginBottom: '0',
                            paddingLeft: '20px'
                        }}>
                            <li style={{marginBottom: '5px'}}>
                                <span style={{fontWeight: '500'}}>Weather Forecast:</span> NOAA GFS (Global Forecast System) via Google Earth Engine
                            </li>
                            <li style={{marginBottom: '5px'}}>
                                <span style={{fontWeight: '500'}}>Temperature Data:</span> Daily maximum air temperature (T_max) at 2-meter height, 16-day forecast horizon
                            </li>
                            <li style={{marginBottom: '0'}}>
                                <span style={{fontWeight: '500'}}>Spatial Resolution:</span> 0.25° × 0.25° grid cells (~25km spatial resolution)
                            </li>
                            </ul>
                        </div>

                    <div style={{
                        backgroundColor: 'white',
                        borderRadius: '6px',
                        padding: '15px',
                        marginBottom: '20px',
                        border: '1px solid #e0e0e0'
                    }}>
                        <h6 style={{
                            fontSize: isMobile ? '14px' : '15px',
                            fontWeight: '600',
                            color: colors.secondary,
                            marginBottom: '15px'
                        }}>3. Temperature Unit Conversions</h6>
                        
                        <div style={{marginBottom: '15px'}}>
                            <p style={{
                                fontSize: isMobile ? '13px' : '14px',
                                fontWeight: '500',
                                color: colors.primary,
                                marginBottom: '8px'
                            }}>Kelvin to Celsius:</p>
                            <div style={{
                                backgroundColor: '#FF9800',
                                color: 'white',
                                padding: '15px',
                                borderRadius: '8px',
                                fontFamily: 'monospace',
                                fontSize: isMobile ? '14px' : '16px',
                                marginBottom: '10px',
                                border: '2px solid #F57C00',
                                textAlign: 'center',
                                fontWeight: '500'
                            }}>
                                T_C = T_K - 273.15
                            </div>
                        </div>

                        <div style={{marginBottom: '0'}}>
                            <p style={{
                                fontSize: isMobile ? '13px' : '14px',
                                fontWeight: '500',
                                color: colors.primary,
                                marginBottom: '8px'
                            }}>Celsius to Fahrenheit:</p>
                            <div style={{
                                backgroundColor: '#FF9800',
                                color: 'white',
                                padding: '15px',
                                borderRadius: '8px',
                                fontFamily: 'monospace',
                                fontSize: isMobile ? '14px' : '16px',
                                marginBottom: '0',
                                border: '2px solid #F57C00',
                                textAlign: 'center',
                                fontWeight: '500'
                            }}>
                                T_F = (T_C × 9/5) + 32
                            </div>
                        </div>
                    </div>

                    <div style={{
                        backgroundColor: 'white',
                        borderRadius: '6px',
                        padding: '15px',
                        marginBottom: '20px',
                        border: '1px solid #e0e0e0'
                    }}>
                        <h6 style={{
                            fontSize: isMobile ? '14px' : '15px',
                            fontWeight: '600',
                            color: colors.secondary,
                            marginBottom: '15px'
                        }}>4. Crop-Specific Heat Stress Thresholds</h6>
                        
                        <div style={{
                            overflowX: 'auto',
                            marginBottom: '15px'
                        }}>
                            <table style={{
                                width: '100%',
                                borderCollapse: 'collapse',
                                backgroundColor: 'white',
                                borderRadius: '6px',
                                overflow: 'hidden',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                            }}>
                                <thead>
                                    <tr style={{
                                        backgroundColor: '#FF9800',
                                        color: 'white'
                                    }}>
                                        <th style={{
                                            padding: '15px',
                                            textAlign: 'left',
                                            borderBottom: '1px solid #ddd',
                                            fontWeight: '600',
                                            fontSize: isMobile ? '14px' : '16px'
                                        }}>Crop</th>
                                        <th style={{
                                            padding: '15px',
                                            textAlign: 'center',
                                            borderBottom: '1px solid #ddd',
                                            fontWeight: '600',
                                            fontSize: isMobile ? '14px' : '16px'
                                        }}>High Risk (°F)</th>
                                        <th style={{
                                            padding: '15px',
                                            textAlign: 'center',
                                            borderBottom: '1px solid #ddd',
                                            fontWeight: '600',
                                            fontSize: isMobile ? '14px' : '16px'
                                        }}>Medium Risk (°F)</th>
                                        <th style={{
                                            padding: '15px',
                                            textAlign: 'center',
                                            borderBottom: '1px solid #ddd',
                                            fontWeight: '600',
                                            fontSize: isMobile ? '14px' : '16px'
                                        }}>Low Risk (°F)</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr><td style={{padding: '12px', borderBottom: '1px solid #ddd', backgroundColor: '#f8f9fa', fontWeight: '700', fontSize: isMobile ? '15px' : '17px', color: '#2c3e50'}}>Corn</td><td style={{padding: '12px', borderBottom: '1px solid #ddd', color: '#d32f2f', textAlign: 'center', fontWeight: '600', fontSize: isMobile ? '14px' : '16px'}}>≥ 95</td><td style={{padding: '12px', borderBottom: '1px solid #ddd', color: '#f57c00', textAlign: 'center', fontWeight: '600', fontSize: isMobile ? '14px' : '16px'}}>90-94</td><td style={{padding: '12px', borderBottom: '1px solid #ddd', color: '#388e3c', textAlign: 'center', fontWeight: '600', fontSize: isMobile ? '14px' : '16px'}}>&lt; 90</td></tr>
                                    <tr><td style={{padding: '12px', borderBottom: '1px solid #ddd', backgroundColor: '#f8f9fa', fontWeight: '700', fontSize: isMobile ? '15px' : '17px', color: '#2c3e50'}}>Soybean</td><td style={{padding: '12px', borderBottom: '1px solid #ddd', color: '#d32f2f', textAlign: 'center', fontWeight: '600', fontSize: isMobile ? '14px' : '16px'}}>≥ 95</td><td style={{padding: '12px', borderBottom: '1px solid #ddd', color: '#f57c00', textAlign: 'center', fontWeight: '600', fontSize: isMobile ? '14px' : '16px'}}>90-94</td><td style={{padding: '12px', borderBottom: '1px solid #ddd', color: '#388e3c', textAlign: 'center', fontWeight: '600', fontSize: isMobile ? '14px' : '16px'}}>&lt; 90</td></tr>
                                    <tr><td style={{padding: '12px', borderBottom: '1px solid #ddd', backgroundColor: '#f8f9fa', fontWeight: '700', fontSize: isMobile ? '15px' : '17px', color: '#2c3e50'}}>Peanut</td><td style={{padding: '12px', borderBottom: '1px solid #ddd', color: '#d32f2f', textAlign: 'center', fontWeight: '600', fontSize: isMobile ? '14px' : '16px'}}>≥ 95</td><td style={{padding: '12px', borderBottom: '1px solid #ddd', color: '#f57c00', textAlign: 'center', fontWeight: '600', fontSize: isMobile ? '14px' : '16px'}}>90-94</td><td style={{padding: '12px', borderBottom: '1px solid #ddd', color: '#388e3c', textAlign: 'center', fontWeight: '600', fontSize: isMobile ? '14px' : '16px'}}>&lt; 90</td></tr>
                                    <tr><td style={{padding: '12px', borderBottom: '1px solid #ddd', backgroundColor: '#f8f9fa', fontWeight: '700', fontSize: isMobile ? '15px' : '17px', color: '#2c3e50'}}>Cotton</td><td style={{padding: '12px', borderBottom: '1px solid #ddd', color: '#d32f2f', textAlign: 'center', fontWeight: '600', fontSize: isMobile ? '14px' : '16px'}}>≥ 100</td><td style={{padding: '12px', borderBottom: '1px solid #ddd', color: '#f57c00', textAlign: 'center', fontWeight: '600', fontSize: isMobile ? '14px' : '16px'}}>95-99</td><td style={{padding: '12px', borderBottom: '1px solid #ddd', color: '#388e3c', textAlign: 'center', fontWeight: '600', fontSize: isMobile ? '14px' : '16px'}}>&lt; 95</td></tr>
                                    <tr><td style={{padding: '12px', borderBottom: '1px solid #ddd', backgroundColor: '#f8f9fa', fontWeight: '700', fontSize: isMobile ? '15px' : '17px', color: '#2c3e50'}}>Sorghum</td><td style={{padding: '12px', borderBottom: '1px solid #ddd', color: '#d32f2f', textAlign: 'center', fontWeight: '600', fontSize: isMobile ? '14px' : '16px'}}>≥ 95</td><td style={{padding: '12px', borderBottom: '1px solid #ddd', color: '#f57c00', textAlign: 'center', fontWeight: '600', fontSize: isMobile ? '14px' : '16px'}}>90-94</td><td style={{padding: '12px', borderBottom: '1px solid #ddd', color: '#388e3c', textAlign: 'center', fontWeight: '600', fontSize: isMobile ? '14px' : '16px'}}>&lt; 90</td></tr>
                                    <tr><td style={{padding: '12px', borderBottom: '1px solid #ddd', backgroundColor: '#f8f9fa', fontWeight: '700', fontSize: isMobile ? '15px' : '17px', color: '#2c3e50'}}>Wheat</td><td style={{padding: '12px', borderBottom: '1px solid #ddd', color: '#d32f2f', textAlign: 'center', fontWeight: '600', fontSize: isMobile ? '14px' : '16px'}}>≥ 95</td><td style={{padding: '12px', borderBottom: '1px solid #ddd', color: '#f57c00', textAlign: 'center', fontWeight: '600', fontSize: isMobile ? '14px' : '16px'}}>85-94</td><td style={{padding: '12px', borderBottom: '1px solid #ddd', color: '#388e3c', textAlign: 'center', fontWeight: '600', fontSize: isMobile ? '14px' : '16px'}}>&lt; 85</td></tr>
                                    <tr><td style={{padding: '12px', borderBottom: '1px solid #ddd', backgroundColor: '#f8f9fa', fontWeight: '700', fontSize: isMobile ? '15px' : '17px', color: '#2c3e50'}}>Strawberry</td><td style={{padding: '12px', borderBottom: '1px solid #ddd', color: '#d32f2f', textAlign: 'center', fontWeight: '600', fontSize: isMobile ? '14px' : '16px'}}>≥ 77</td><td style={{padding: '12px', borderBottom: '1px solid #ddd', color: '#f57c00', textAlign: 'center', fontWeight: '600', fontSize: isMobile ? '14px' : '16px'}}>70-76</td><td style={{padding: '12px', borderBottom: '1px solid #ddd', color: '#388e3c', textAlign: 'center', fontWeight: '600', fontSize: isMobile ? '14px' : '16px'}}>&lt; 70</td></tr>
                                </tbody>
                            </table>
                        </div>
                        
                        <div style={{
                            backgroundColor: '#fff3e0',
                            borderRadius: '6px',
                            padding: '12px',
                            marginBottom: '10px',
                            border: '1px solid #ffcc02'
                        }}>
                            <p style={{
                                fontSize: isMobile ? '12px' : '13px',
                                lineHeight: '1.5',
                                color: colors.text,
                                marginBottom: '0',
                                fontStyle: 'italic'
                            }}>
                                <span style={{fontWeight: '500', color: '#FF9800'}}>Risk Assessment Logic:</span> For each forecast day, T_max is compared to crop-specific thresholds to assign risk categories: High Risk (T_max ≥ High threshold), Medium Risk (Medium ≤ T_max &lt; High), Low Risk (T_max &lt; Medium threshold).
                            </p>
                        </div>
                        
                        <div style={{
                            backgroundColor: colors.background,
                            borderRadius: '6px',
                            padding: '15px',
                            marginBottom: '15px',
                            border: '1px solid #e0e0e0'
                        }}>
                            <h6 style={{
                                fontSize: isMobile ? '14px' : '15px',
                                fontWeight: '600',
                                color: colors.secondary,
                                marginBottom: '15px'
                            }}>References (Heat Stress Risk)</h6>
                            
                            <div style={{
                                fontSize: isMobile ? '12px' : '13px',
                                lineHeight: '1.5',
                                color: colors.text
                            }}>
                                <p style={{marginBottom: '8px'}}>1. Purdue University Corn Growth Stages: <a href="https://www.extension.purdue.edu/extmedia/NCH/NCH-18.html" style={{color: colors.link, textDecoration: 'underline'}}>https://www.extension.purdue.edu/extmedia/NCH/NCH-18.html</a></p>
                                <p style={{marginBottom: '8px'}}>2. USDA ARS: High Night Temperature: <a href="https://www.ars.usda.gov/ARSUserFiles/50301000/graphics/Hatfield%20Chapter%202016.pdf" style={{color: colors.link, textDecoration: 'underline'}}>https://www.ars.usda.gov/ARSUserFiles/50301000/graphics/Hatfield%20Chapter%202016.pdf</a></p>
                                <p style={{marginBottom: '8px'}}>3. Iowa State University Corn Production: <a href="https://crops.extension.iastate.edu/encyclopedia/corn-production" style={{color: colors.link, textDecoration: 'underline'}}>https://crops.extension.iastate.edu/encyclopedia/corn-production</a></p>
                                <p style={{marginBottom: '8px'}}>4. University of Minnesota Extension: Soybean Growth Stages: <a href="https://extension.umn.edu/soybean/soybean-growth-stages" style={{color: colors.link, textDecoration: 'underline'}}>https://extension.umn.edu/soybean/soybean-growth-stages</a></p>
                                <p style={{marginBottom: '8px'}}>5. Soybean Heat Stress Guide: <a href="https://extension.umn.edu/soybean/soybean-growth-stages" style={{color: colors.link, textDecoration: 'underline'}}>https://extension.umn.edu/soybean/soybean-growth-stages</a></p>
                                <p style={{marginBottom: '8px'}}>6. University of Georgia Peanut Production Guide: <a href="https://extension.uga.edu/publications/detail.html?number=B1146" style={{color: colors.link, textDecoration: 'underline'}}>https://extension.uga.edu/publications/detail.html?number=B1146</a></p>
                                <p style={{marginBottom: '8px'}}>7. NC State Extension Publications: Peanut Leaf Spots: <a href="https://content.ces.ncsu.edu/early-leaf-spot-of-peanut-1" style={{color: colors.link, textDecoration: 'underline'}}>https://content.ces.ncsu.edu/early-leaf-spot-of-peanut-1</a></p>
                                <p style={{marginBottom: '8px'}}>8. Cotton Physiology Today (Cotton Incorporated): <a href="https://cottoncultivated.cottoninc.com/physiology/" style={{color: colors.link, textDecoration: 'underline'}}>https://cottoncultivated.cottoninc.com/physiology/</a></p>
                                <p style={{marginBottom: '8px'}}>9. Manitoba Agriculture - Cotton Factsheet: <a href="https://www.gov.mb.ca/agriculture/crops/cropproduction/crop-nutrient-management/pubs/factsheet-cotton.pdf" style={{color: colors.link, textDecoration: 'underline'}}>https://www.gov.mb.ca/agriculture/crops/cropproduction/crop-nutrient-management/pubs/factsheet-cotton.pdf</a></p>
                                <p style={{marginBottom: '8px'}}>10. Oosterhuis, D.M. (2002) Cotton Science (Cotton Incorporated): <a href="https://www.cottoninc.com/" style={{color: colors.link, textDecoration: 'underline'}}>https://www.cottoninc.com/</a></p>
                                <p style={{marginBottom: '8px'}}>11. Sorghum Checkoff: <a href="https://www.sorghumcheckoff.com/" style={{color: colors.link, textDecoration: 'underline'}}>https://www.sorghumcheckoff.com/</a></p>
                                <p style={{marginBottom: '8px'}}>12. Purdue University: Sorghum GDD: <a href="https://www.agry.purdue.edu/ext/corn/news/timeless/gdd.html" style={{color: colors.link, textDecoration: 'underline'}}>https://www.agry.purdue.edu/ext/corn/news/timeless/gdd.html</a></p>
                                <p style={{marginBottom: '8px'}}>13. FAO Wheat: <a href="https://www.fao.org/3/y4011e/y4011e05.htm" style={{color: colors.link, textDecoration: 'underline'}}>https://www.fao.org/3/y4011e/y4011e05.htm</a></p>
                                <p style={{marginBottom: '0'}}>14. USDA Wheat Disease Manual: <a href="https://www.ars.usda.gov/ARSUserFiles/50620500/DiseaseManual.pdf" style={{color: colors.link, textDecoration: 'underline'}}>https://www.ars.usda.gov/ARSUserFiles/50620500/DiseaseManual.pdf</a></p>
                            </div>
                        </div>
                    </div>

                    <div style={{
                        backgroundColor: 'white',
                        borderRadius: '6px',
                        padding: '15px',
                        marginBottom: '20px',
                        border: '1px solid #e0e0e0'
                    }}>
                        <h6 style={{
                            fontSize: isMobile ? '14px' : '15px',
                            fontWeight: '600',
                            color: colors.secondary,
                            marginBottom: '15px'
                        }}>5. Crop-Specific Notes & Effects</h6>
                        
                        <div style={{
                            backgroundColor: '#f8f9fa',
                            borderRadius: '6px',
                            padding: '15px',
                            marginBottom: '15px',
                            border: '1px solid #e9ecef'
                        }}>
                            <ul style={{
                                fontSize: isMobile ? '13px' : '14px',
                                lineHeight: '1.5',
                                color: colors.text,
                                marginBottom: '0',
                                paddingLeft: '20px'
                            }}>
                                <li style={{marginBottom: '8px'}}><span style={{fontWeight: '600', color: '#2c3e50'}}>Corn:</span> Silking and pollination are most heat-sensitive; &gt;95°F reduces kernel set and yield.</li>
                                <li style={{marginBottom: '8px'}}><span style={{fontWeight: '600', color: '#2c3e50'}}>Soybean:</span> Heat &gt;95°F reduces flower/pod set.</li>
                                <li style={{marginBottom: '8px'}}><span style={{fontWeight: '600', color: '#2c3e50'}}>Peanut:</span> High Tmax (&gt;95°F) inhibits pod set, increases aflatoxin risk (if droughty).</li>
                                <li style={{marginBottom: '8px'}}><span style={{fontWeight: '600', color: '#2c3e50'}}>Cotton:</span> &gt;100°F stresses bolls and reduces lint yield.</li>
                                <li style={{marginBottom: '8px'}}><span style={{fontWeight: '600', color: '#2c3e50'}}>Sorghum:</span> &gt;100°F reduces grain yield, especially during flowering.</li>
                                <li style={{marginBottom: '8px'}}><span style={{fontWeight: '600', color: '#2c3e50'}}>Wheat:</span> &gt;86°F during pollination causes sterility, shriveled kernels.</li>
                                <li style={{marginBottom: '0'}}><span style={{fontWeight: '600', color: '#2c3e50'}}>Strawberry:</span> &gt;85°F reduces fruit set and quality.</li>
                            </ul>
                        </div>
                        
                        <div style={{
                            backgroundColor: '#fff3e0',
                            borderRadius: '6px',
                            padding: '12px',
                            marginBottom: '0',
                            border: '1px solid #ffcc02'
                        }}>
                            <p style={{
                                fontSize: isMobile ? '12px' : '13px',
                                lineHeight: '1.5',
                                color: colors.text,
                                marginBottom: '0',
                                fontStyle: 'italic'
                            }}>
                                <span style={{fontWeight: '500', color: '#FF9800'}}>How these are used in the tool:</span> For each forecast day and field, compare Tmax to crop&apos;s threshold: High risk (Tmax ≥ High), Medium risk (Medium ≤ Tmax &lt; High), Low risk (Tmax &lt; Medium).
                            </p>
                        </div>
                    </div>
                </div>

                            {/* Biotic Stress Risk Assessment */}
                            <div style={{
                                backgroundColor: 'white',
                                borderRadius: '8px',
                                padding: '20px',
                                marginBottom: '25px',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                                border: '2px solid #f3e5f5'
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
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
                                        <path d="M12 8v4l3 3"/>
                                </svg>
                                    B. Biotic Stress Risk Assessment
                                </h4>
                                
                                <p style={{
                                    fontSize: isMobile ? '14px' : '16px',
                                    lineHeight: '1.6',
                                    color: colors.text,
                                    marginBottom: '20px'
                                }}>
                                    Biotic stress risk evaluates the risk of key diseases for each crop, using forecasted humidity, temperature, and precipitation. Thresholds are based on the disease epidemiology literature and US Extension bulletins. If weather meets/exceeds risk conditions for specific diseases, the tool flags High, Medium, or Low biotic risk for each day and field.
                                </p>

                                <h6 style={{
                                    fontSize: isMobile ? '14px' : '15px',
                                    fontWeight: '600',
                                    color: colors.secondary,
                                    marginBottom: '15px'
                                }}>2.1 Overview</h6>
                                
                                <div style={{
                                    backgroundColor: colors.background,
                                    borderRadius: '6px',
                                    padding: '15px',
                                    marginBottom: '20px',
                                    border: '1px solid #e0e0e0'
                                }}>
                                    <p style={{
                                        fontSize: isMobile ? '13px' : '14px',
                                        lineHeight: '1.6',
                                        color: colors.text,
                                        marginBottom: '15px'
                                    }}>
                                        Biotic stress risk evaluates the risk of key diseases for each crop, using forecasted humidity, temperature, and precipitation. Thresholds are based on the disease epidemiology literature and US Extension bulletins. If weather meets/exceeds risk conditions for specific diseases, the tool flags High, Medium, or Low biotic risk for each day and field.
                                    </p>
                                </div>

                                <h6 style={{
                                    fontSize: isMobile ? '14px' : '15px',
                                    fontWeight: '600',
                                    color: colors.secondary,
                                    marginBottom: '15px'
                                }}>2.2 Data Sources</h6>
                                
                                <div style={{
                                    backgroundColor: colors.background,
                                    borderRadius: '6px',
                                    padding: '15px',
                                    marginBottom: '20px',
                                    border: '1px solid #e0e0e0'
                                }}>
                                    <ul style={{
                                        fontSize: isMobile ? '12px' : '13px',
                                        lineHeight: '1.5',
                                        color: colors.text,
                                        marginBottom: '0',
                                        paddingLeft: '20px'
                                    }}>
                                        <li style={{marginBottom: '8px'}}>
                                            <span style={{fontWeight: '500'}}>Weather Forecast:</span> NOAA GFS (Tmax, Tmin, mean RH, precipitation), 16-day via GEE
                                        </li>
                                        <li style={{marginBottom: '0'}}>
                                            <span style={{fontWeight: '500'}}>Crop and Disease Parameters:</span> University extension guides, USDA, FAO
                                        </li>
                            </ul>
                                </div>

                                <h6 style={{
                                    fontSize: isMobile ? '14px' : '15px',
                                    fontWeight: '600',
                                    color: colors.secondary,
                                    marginBottom: '15px'
                                }}>2.3 Per-Crop Disease & Risk Thresholds</h6>
                                
                                <div style={{
                                    backgroundColor: colors.background,
                                    borderRadius: '6px',
                                    padding: '15px',
                                    marginBottom: '20px',
                                    border: '1px solid #e0e0e0'
                                }}>
                                    <div style={{
                                        backgroundColor: 'white',
                                        borderRadius: '6px',
                                        padding: '15px',
                                        marginBottom: '15px',
                                        border: '1px solid #e0e0e0'
                                    }}>
                                        <h6 style={{
                                            fontSize: isMobile ? '14px' : '15px',
                                            fontWeight: '600',
                                            color: '#2c3e50',
                                            marginBottom: '10px'
                                        }}>🌽 Corn</h6>
                                        <div style={{
                                            overflowX: 'auto',
                                            marginBottom: '10px'
                                        }}>
                                            <table style={{
                                                width: '100%',
                                                borderCollapse: 'collapse',
                                                backgroundColor: 'white',
                                                fontSize: isMobile ? '12px' : '13px'
                                            }}>
                                                <thead>
                                                    <tr style={{backgroundColor: '#f8f9fa'}}>
                                                        <th style={{padding: '8px', borderBottom: '1px solid #ddd', fontWeight: '700', textAlign: 'left', color: '#2c3e50', fontSize: isMobile ? '13px' : '14px'}}>Disease</th>
                                                        <th style={{padding: '8px', borderBottom: '1px solid #ddd', fontWeight: '700', textAlign: 'left', color: '#2c3e50', fontSize: isMobile ? '13px' : '14px'}}>High Risk Criteria</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td style={{padding: '8px', borderBottom: '1px solid #ddd', color: '#2c3e50', fontWeight: '600', fontSize: isMobile ? '13px' : '14px'}}>Gray Leaf Spot</td>
                                                        <td style={{padding: '8px', borderBottom: '1px solid #ddd', color: '#2c3e50', fontSize: isMobile ? '12px' : '13px'}}>RH &gt; 90%, Temp 70–85°F, &gt;12h high humidity</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{padding: '8px', borderBottom: '1px solid #ddd', color: '#2c3e50', fontWeight: '600', fontSize: isMobile ? '13px' : '14px'}}>Northern Corn Leaf Blight</td>
                                                        <td style={{padding: '8px', borderBottom: '1px solid #ddd', color: '#2c3e50', fontSize: isMobile ? '12px' : '13px'}}>RH &gt; 90%, Temp 64–81°F, &gt;6h high humidity</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{padding: '8px', borderBottom: '1px solid #ddd', color: '#2c3e50', fontWeight: '600', fontSize: isMobile ? '13px' : '14px'}}>Southern Rust</td>
                                                        <td style={{padding: '8px', borderBottom: '1px solid #ddd', color: '#2c3e50', fontSize: isMobile ? '12px' : '13px'}}>RH &gt; 90%, Temp 77–82°F, &gt;8h high humidity</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <div style={{
                                        backgroundColor: 'white',
                                        borderRadius: '6px',
                                        padding: '15px',
                                        marginBottom: '15px',
                                        border: '1px solid #e0e0e0'
                                    }}>
                                        <h6 style={{
                                            fontSize: isMobile ? '14px' : '15px',
                                            fontWeight: '600',
                                            color: '#2c3e50',
                                            marginBottom: '10px'
                                        }}>🌱 Soybean</h6>
                                        <div style={{
                                            overflowX: 'auto',
                                            marginBottom: '10px'
                                        }}>
                                            <table style={{
                                                width: '100%',
                                                borderCollapse: 'collapse',
                                                backgroundColor: 'white',
                                                fontSize: isMobile ? '12px' : '13px'
                                            }}>
                                                <thead>
                                                    <tr style={{backgroundColor: '#f8f9fa'}}>
                                                        <th style={{padding: '8px', borderBottom: '1px solid #ddd', fontWeight: '700', textAlign: 'left', color: '#2c3e50', fontSize: isMobile ? '13px' : '14px'}}>Disease</th>
                                                        <th style={{padding: '8px', borderBottom: '1px solid #ddd', fontWeight: '700', textAlign: 'left', color: '#2c3e50', fontSize: isMobile ? '13px' : '14px'}}>High Risk Criteria</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td style={{padding: '8px', borderBottom: '1px solid #ddd', color: '#2c3e50', fontWeight: '600', fontSize: isMobile ? '13px' : '14px'}}>Bacterial Blight</td>
                                                        <td style={{padding: '8px', borderBottom: '1px solid #ddd', color: '#2c3e50', fontSize: isMobile ? '12px' : '13px'}}>RH &gt; 85%, Temp 73–82°F</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{padding: '8px', borderBottom: '1px solid #ddd', color: '#2c3e50', fontWeight: '600', fontSize: isMobile ? '13px' : '14px'}}>Brown Stem Rot</td>
                                                        <td style={{padding: '8px', borderBottom: '1px solid #ddd', color: '#2c3e50', fontSize: isMobile ? '12px' : '13px'}}>RH &gt; 80%, Temp 60–75°F, precip &gt;0.5"</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{padding: '8px', borderBottom: '1px solid #ddd', color: '#2c3e50', fontWeight: '600', fontSize: isMobile ? '13px' : '14px'}}>Sudden Death Syndrome</td>
                                                        <td style={{padding: '8px', borderBottom: '1px solid #ddd', color: '#2c3e50', fontSize: isMobile ? '12px' : '13px'}}>Temp ≤75°F, precip &gt;1.0"</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{padding: '8px', borderBottom: '1px solid #ddd', color: '#2c3e50', fontWeight: '600', fontSize: isMobile ? '13px' : '14px'}}>Powdery Mildew</td>
                                                        <td style={{padding: '8px', borderBottom: '1px solid #ddd', color: '#2c3e50', fontSize: isMobile ? '12px' : '13px'}}>Temp 65–77°F, RH &lt;70%</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <div style={{
                                        backgroundColor: 'white',
                                        borderRadius: '6px',
                                        padding: '15px',
                                        marginBottom: '15px',
                                        border: '1px solid #e0e0e0'
                                    }}>
                                        <h6 style={{
                                            fontSize: isMobile ? '14px' : '15px',
                                            fontWeight: '600',
                                            color: '#2c3e50',
                                            marginBottom: '10px'
                                        }}>🥜 Peanut</h6>
                                        <div style={{
                                            overflowX: 'auto',
                                            marginBottom: '10px'
                                        }}>
                                            <table style={{
                                                width: '100%',
                                                borderCollapse: 'collapse',
                                                backgroundColor: 'white',
                                                fontSize: isMobile ? '12px' : '13px'
                                            }}>
                                                <thead>
                                                    <tr style={{backgroundColor: '#f8f9fa'}}>
                                                        <th style={{padding: '8px', borderBottom: '1px solid #ddd', fontWeight: '700', textAlign: 'left', color: '#2c3e50', fontSize: isMobile ? '13px' : '14px'}}>Disease</th>
                                                        <th style={{padding: '8px', borderBottom: '1px solid #ddd', fontWeight: '700', textAlign: 'left', color: '#2c3e50', fontSize: isMobile ? '13px' : '14px'}}>High Risk Criteria</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td style={{padding: '8px', borderBottom: '1px solid #ddd', color: '#2c3e50', fontWeight: '600', fontSize: isMobile ? '13px' : '14px'}}>Early Leaf Spot</td>
                                                        <td style={{padding: '8px', borderBottom: '1px solid #ddd', color: '#2c3e50', fontSize: isMobile ? '12px' : '13px'}}>RH &gt; 90%, Temp 65–90°F, &gt;8h high humidity</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{padding: '8px', borderBottom: '1px solid #ddd', color: '#2c3e50', fontWeight: '600', fontSize: isMobile ? '13px' : '14px'}}>Late Leaf Spot</td>
                                                        <td style={{padding: '8px', borderBottom: '1px solid #ddd', color: '#2c3e50', fontSize: isMobile ? '12px' : '13px'}}>RH &gt; 85%, Temp 61–86°F, &gt;8h high humidity</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{padding: '8px', borderBottom: '1px solid #ddd', color: '#2c3e50', fontWeight: '600', fontSize: isMobile ? '13px' : '14px'}}>White Mold</td>
                                                        <td style={{padding: '8px', borderBottom: '1px solid #ddd', color: '#2c3e50', fontSize: isMobile ? '12px' : '13px'}}>Temp ≥80°F, RH &gt;80%, &gt;12h high humidity</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{padding: '8px', borderBottom: '1px solid #ddd', color: '#2c3e50', fontWeight: '600', fontSize: isMobile ? '13px' : '14px'}}>Aflatoxin Risk</td>
                                                        <td style={{padding: '8px', borderBottom: '1px solid #ddd', color: '#2c3e50', fontSize: isMobile ? '12px' : '13px'}}>Tmax &gt;95°F, precip &lt;0.5"</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{padding: '8px', borderBottom: '1px solid #ddd', color: '#2c3e50', fontWeight: '600', fontSize: isMobile ? '13px' : '14px'}}>Sclerotinia Blight</td>
                                                        <td style={{padding: '8px', borderBottom: '1px solid #ddd', color: '#2c3e50', fontSize: isMobile ? '12px' : '13px'}}>RH ≥95%, Temp 65–70°F, precip &gt;0.5"</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <div style={{
                                        backgroundColor: 'white',
                                        borderRadius: '6px',
                                        padding: '15px',
                                        marginBottom: '15px',
                                        border: '1px solid #e0e0e0'
                                    }}>
                                        <h6 style={{
                                            fontSize: isMobile ? '14px' : '15px',
                                            fontWeight: '600',
                                            color: '#2c3e50',
                                            marginBottom: '10px'
                                        }}>🌾 Cotton</h6>
                                        <div style={{
                                            overflowX: 'auto',
                                            marginBottom: '10px'
                                        }}>
                                            <table style={{
                                                width: '100%',
                                                borderCollapse: 'collapse',
                                                backgroundColor: 'white',
                                                fontSize: isMobile ? '12px' : '13px'
                                            }}>
                                                <thead>
                                                    <tr style={{backgroundColor: '#f8f9fa'}}>
                                                        <th style={{padding: '8px', borderBottom: '1px solid #ddd', fontWeight: '700', textAlign: 'left', color: '#2c3e50', fontSize: isMobile ? '13px' : '14px'}}>Disease</th>
                                                        <th style={{padding: '8px', borderBottom: '1px solid #ddd', fontWeight: '700', textAlign: 'left', color: '#2c3e50', fontSize: isMobile ? '13px' : '14px'}}>High Risk Criteria</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td style={{padding: '8px', borderBottom: '1px solid #ddd', color: '#2c3e50', fontWeight: '600', fontSize: isMobile ? '13px' : '14px'}}>Bacterial Blight</td>
                                                        <td style={{padding: '8px', borderBottom: '1px solid #ddd', color: '#2c3e50', fontSize: isMobile ? '12px' : '13px'}}>Temp 86–97°F, precip &gt;0.5"</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{padding: '8px', borderBottom: '1px solid #ddd', color: '#2c3e50', fontWeight: '600', fontSize: isMobile ? '13px' : '14px'}}>Target Spot</td>
                                                        <td style={{padding: '8px', borderBottom: '1px solid #ddd', color: '#2c3e50', fontSize: isMobile ? '12px' : '13px'}}>RH &gt;80%, Temp 68–77°F, &gt;12h high humidity</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{padding: '8px', borderBottom: '1px solid #ddd', color: '#2c3e50', fontWeight: '600', fontSize: isMobile ? '13px' : '14px'}}>Boll Rot Complex</td>
                                                        <td style={{padding: '8px', borderBottom: '1px solid #ddd', color: '#2c3e50', fontSize: isMobile ? '12px' : '13px'}}>RH &gt;80%, Temp &gt;75°F, precip &gt;1.0"</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <div style={{
                                        backgroundColor: 'white',
                                        borderRadius: '6px',
                                        padding: '15px',
                                        marginBottom: '15px',
                                        border: '1px solid #e0e0e0'
                                    }}>
                                        <h6 style={{
                                            fontSize: isMobile ? '14px' : '15px',
                                            fontWeight: '600',
                                            color: '#2c3e50',
                                            marginBottom: '10px'
                                        }}>🌾 Sorghum</h6>
                                        <div style={{
                                            overflowX: 'auto',
                                            marginBottom: '10px'
                                        }}>
                                            <table style={{
                                                width: '100%',
                                                borderCollapse: 'collapse',
                                                backgroundColor: 'white',
                                                fontSize: isMobile ? '12px' : '13px'
                                            }}>
                                                <thead>
                                                    <tr style={{backgroundColor: '#f8f9fa'}}>
                                                        <th style={{padding: '8px', borderBottom: '1px solid #ddd', fontWeight: '700', textAlign: 'left', color: '#2c3e50', fontSize: isMobile ? '13px' : '14px'}}>Disease</th>
                                                        <th style={{padding: '8px', borderBottom: '1px solid #ddd', fontWeight: '700', textAlign: 'left', color: '#2c3e50', fontSize: isMobile ? '13px' : '14px'}}>High Risk Criteria</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td style={{padding: '8px', borderBottom: '1px solid #ddd', color: '#2c3e50', fontWeight: '600', fontSize: isMobile ? '13px' : '14px'}}>Anthracnose</td>
                                                        <td style={{padding: '8px', borderBottom: '1px solid #ddd', color: '#2c3e50', fontSize: isMobile ? '12px' : '13px'}}>RH &gt;80%, Temp 77–86°F</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{padding: '8px', borderBottom: '1px solid #ddd', color: '#2c3e50', fontWeight: '600', fontSize: isMobile ? '13px' : '14px'}}>Rust</td>
                                                        <td style={{padding: '8px', borderBottom: '1px solid #ddd', color: '#2c3e50', fontSize: isMobile ? '12px' : '13px'}}>RH &gt;85%, Temp 59–77°F</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{padding: '8px', borderBottom: '1px solid #ddd', color: '#2c3e50', fontWeight: '600', fontSize: isMobile ? '13px' : '14px'}}>Smut</td>
                                                        <td style={{padding: '8px', borderBottom: '1px solid #ddd', color: '#2c3e50', fontSize: isMobile ? '12px' : '13px'}}>RH &gt;80%, Temp 68–86°F, precip &gt;0.5"</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{padding: '8px', borderBottom: '1px solid #ddd', color: '#2c3e50', fontWeight: '600', fontSize: isMobile ? '13px' : '14px'}}>Leaf Blight</td>
                                                        <td style={{padding: '8px', borderBottom: '1px solid #ddd', color: '#2c3e50', fontSize: isMobile ? '12px' : '13px'}}>RH &gt;85%, Temp 77–86°F</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{padding: '8px', borderBottom: '1px solid #ddd', color: '#2c3e50', fontWeight: '600', fontSize: isMobile ? '13px' : '14px'}}>Downy Mildew</td>
                                                        <td style={{padding: '8px', borderBottom: '1px solid #ddd', color: '#2c3e50', fontSize: isMobile ? '12px' : '13px'}}>RH &gt;85%, Temp 68–77°F, precip &gt;0.5"</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <div style={{
                                        backgroundColor: 'white',
                                        borderRadius: '6px',
                                        padding: '15px',
                                        marginBottom: '15px',
                                        border: '1px solid #e0e0e0'
                                    }}>
                                        <h6 style={{
                                            fontSize: isMobile ? '14px' : '15px',
                                            fontWeight: '600',
                                            color: '#2c3e50',
                                            marginBottom: '10px'
                                        }}>🌾 Wheat</h6>
                                        <div style={{
                                            overflowX: 'auto',
                                            marginBottom: '10px'
                                        }}>
                                            <table style={{
                                                width: '100%',
                                                borderCollapse: 'collapse',
                                                backgroundColor: 'white',
                                                fontSize: isMobile ? '12px' : '13px'
                                            }}>
                                                <thead>
                                                    <tr style={{backgroundColor: '#f8f9fa'}}>
                                                        <th style={{padding: '8px', borderBottom: '1px solid #ddd', fontWeight: '700', textAlign: 'left', color: '#2c3e50', fontSize: isMobile ? '13px' : '14px'}}>Disease</th>
                                                        <th style={{padding: '8px', borderBottom: '1px solid #ddd', fontWeight: '700', textAlign: 'left', color: '#2c3e50', fontSize: isMobile ? '13px' : '14px'}}>High Risk Criteria</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td style={{padding: '8px', borderBottom: '1px solid #ddd', color: '#2c3e50', fontWeight: '600', fontSize: isMobile ? '13px' : '14px'}}>Stripe Rust</td>
                                                        <td style={{padding: '8px', borderBottom: '1px solid #ddd', color: '#2c3e50', fontSize: isMobile ? '12px' : '13px'}}>RH &gt;85%, Temp 50–68°F, &gt;8h high humidity</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{padding: '8px', borderBottom: '1px solid #ddd', color: '#2c3e50', fontWeight: '600', fontSize: isMobile ? '13px' : '14px'}}>Leaf Rust</td>
                                                        <td style={{padding: '8px', borderBottom: '1px solid #ddd', color: '#2c3e50', fontSize: isMobile ? '12px' : '13px'}}>RH &gt;80%, Temp 59–77°F, &gt;6h high humidity</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{padding: '8px', borderBottom: '1px solid #ddd', color: '#2c3e50', fontWeight: '600', fontSize: isMobile ? '13px' : '14px'}}>Stem Rust</td>
                                                        <td style={{padding: '8px', borderBottom: '1px solid #ddd', color: '#2c3e50', fontSize: isMobile ? '12px' : '13px'}}>RH &gt;85%, Temp 68–86°F, &gt;8h high humidity</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{padding: '8px', borderBottom: '1px solid #ddd', color: '#2c3e50', fontWeight: '600', fontSize: isMobile ? '13px' : '14px'}}>Powdery Mildew</td>
                                                        <td style={{padding: '8px', borderBottom: '1px solid #ddd', color: '#2c3e50', fontSize: isMobile ? '12px' : '13px'}}>RH &gt;80%, Temp 59–77°F, &gt;12h high humidity</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{padding: '8px', borderBottom: '1px solid #ddd', color: '#2c3e50', fontWeight: '600', fontSize: isMobile ? '13px' : '14px'}}>Fusarium Head Blight</td>
                                                        <td style={{padding: '8px', borderBottom: '1px solid #ddd', color: '#2c3e50', fontSize: isMobile ? '12px' : '13px'}}>RH &gt;90%, Temp 59–86°F, precip &gt;0.5"</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <div style={{
                                        backgroundColor: 'white',
                                        borderRadius: '6px',
                                        padding: '15px',
                                        marginBottom: '0',
                                        border: '1px solid #e0e0e0'
                                    }}>
                                        <h6 style={{
                                            fontSize: isMobile ? '14px' : '15px',
                                            fontWeight: '600',
                                            color: '#2c3e50',
                                            marginBottom: '10px'
                                        }}>🍓 Strawberry</h6>
                                        <div style={{
                                            overflowX: 'auto',
                                            marginBottom: '0'
                                        }}>
                                            <table style={{
                                                width: '100%',
                                                borderCollapse: 'collapse',
                                                backgroundColor: 'white',
                                                fontSize: isMobile ? '12px' : '13px'
                                            }}>
                                                <thead>
                                                    <tr style={{backgroundColor: '#f8f9fa'}}>
                                                        <th style={{padding: '8px', borderBottom: '1px solid #ddd', fontWeight: '700', textAlign: 'left', color: '#2c3e50', fontSize: isMobile ? '13px' : '14px'}}>Disease</th>
                                                        <th style={{padding: '8px', borderBottom: '1px solid #ddd', fontWeight: '700', textAlign: 'left', color: '#2c3e50', fontSize: isMobile ? '13px' : '14px'}}>High Risk Criteria</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td style={{padding: '8px', borderBottom: '1px solid #ddd', color: '#2c3e50', fontWeight: '600', fontSize: isMobile ? '13px' : '14px'}}>Botrytis Fruit Rot</td>
                                                        <td style={{padding: '8px', borderBottom: '1px solid #ddd', color: '#2c3e50', fontSize: isMobile ? '12px' : '13px'}}>RH &gt;85%, Temp 59–77°F, &gt;8h high humidity</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{padding: '8px', borderBottom: '1px solid #ddd', color: '#2c3e50', fontWeight: '600', fontSize: isMobile ? '13px' : '14px'}}>Leaf Spot</td>
                                                        <td style={{padding: '8px', borderBottom: '1px solid #ddd', color: '#2c3e50', fontSize: isMobile ? '12px' : '13px'}}>RH &gt;80%, Temp 68–86°F, precip &gt;0.5"</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{padding: '8px', borderBottom: '1px solid #ddd', color: '#2c3e50', fontWeight: '600', fontSize: isMobile ? '13px' : '14px'}}>Powdery Mildew</td>
                                                        <td style={{padding: '8px', borderBottom: '1px solid #ddd', color: '#2c3e50', fontSize: isMobile ? '12px' : '13px'}}>RH &gt;70%, Temp 68–86°F, &gt;6h high humidity</td>
                                                    </tr>
                                                    <tr>
                                                        <td style={{padding: '8px', borderBottom: '1px solid #ddd', color: '#2c3e50', fontWeight: '600', fontSize: isMobile ? '13px' : '14px'}}>Anthracnose</td>
                                                        <td style={{padding: '8px', borderBottom: '1px solid #ddd', color: '#2c3e50', fontSize: isMobile ? '12px' : '13px'}}>RH &gt;85%, Temp 68–86°F, precip &gt;0.5"</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>

                                <h6 style={{
                                    fontSize: isMobile ? '14px' : '15px',
                                    fontWeight: '600',
                                    color: colors.secondary,
                                    marginBottom: '15px'
                                }}>2.4 Logic in the Tool</h6>
                                
                                <div style={{
                                    backgroundColor: colors.background,
                                    borderRadius: '6px',
                                    padding: '15px',
                                    marginBottom: '20px',
                                    border: '1px solid #e0e0e0'
                                }}>
                                    <ul style={{
                                        fontSize: isMobile ? '12px' : '13px',
                                        lineHeight: '1.5',
                                        color: colors.text,
                                        marginBottom: '0',
                                        paddingLeft: '20px'
                                    }}>
                                        <li style={{marginBottom: '8px'}}>For each day, the tool checks:</li>
                                        <li style={{marginBottom: '3px', marginLeft: '20px'}}>• Humidity threshold (e.g., &gt;80% for fungal risk)</li>
                                        <li style={{marginBottom: '3px', marginLeft: '20px'}}>• Temperature window (disease-specific, see tables above)</li>
                                        <li style={{marginBottom: '8px', marginLeft: '20px'}}>• Precipitation/wetness (recent rain, high dew)</li>
                                        <li style={{marginBottom: '8px'}}>If ALL thresholds are met → High risk</li>
                                        <li style={{marginBottom: '8px'}}>If some are met → Medium risk</li>
                                        <li style={{marginBottom: '0'}}>If few or none are met → Low risk</li>
                                    </ul>
                                    <p style={{
                                        fontSize: isMobile ? '12px' : '13px',
                                        lineHeight: '1.5',
                                        color: colors.text,
                                        marginTop: '10px',
                                        marginBottom: '0',
                                        fontStyle: 'italic'
                                    }}>
                                        Disease risks are presented for the main crop diseases affecting the selected crop, based on local extension and international guidance.
                                    </p>
                                </div>

                                <h6 style={{
                                    fontSize: isMobile ? '14px' : '15px',
                                    fontWeight: '600',
                                    color: colors.secondary,
                                    marginBottom: '15px'
                                }}>2.5 Crop-Specific Notes</h6>
                                
                                <div style={{
                                    backgroundColor: colors.background,
                                    borderRadius: '6px',
                                    padding: '15px',
                                    marginBottom: '20px',
                                    border: '1px solid #e0e0e0'
                                }}>
                                    <ul style={{
                                        fontSize: isMobile ? '12px' : '13px',
                                        lineHeight: '1.5',
                                        color: colors.text,
                                        marginBottom: '0',
                                        paddingLeft: '20px'
                                    }}>
                                        <li style={{marginBottom: '8px'}}><span style={{fontWeight: '600', color: '#2c3e50'}}>Corn:</span> Gray Leaf Spot, Northern Corn Leaf Blight, and Southern Rust thrive under high humidity (&gt;90%) and moderate temperatures.</li>
                                        <li style={{marginBottom: '8px'}}><span style={{fontWeight: '600', color: '#2c3e50'}}>Soybean:</span> Bacterial Blight, Brown Stem Rot, Sudden Death Syndrome, and Powdery Mildew are major concerns with varying environmental triggers.</li>
                                        <li style={{marginBottom: '8px'}}><span style={{fontWeight: '600', color: '#2c3e50'}}>Peanut:</span> Early/Late Leaf Spot, White Mold, Aflatoxin, and Sclerotinia Blight require extended leaf wetness and specific temperature ranges.</li>
                                        <li style={{marginBottom: '8px'}}><span style={{fontWeight: '600', color: '#2c3e50'}}>Cotton:</span> Bacterial Blight, Target Spot, and Boll Rot Complex are promoted by high humidity and warm temperatures.</li>
                                        <li style={{marginBottom: '8px'}}><span style={{fontWeight: '600', color: '#2c3e50'}}>Sorghum:</span> Anthracnose, Rust, Smut, Leaf Blight, and Downy Mildew thrive under humid conditions with specific temperature ranges.</li>
                                        <li style={{marginBottom: '8px'}}><span style={{fontWeight: '600', color: '#2c3e50'}}>Wheat:</span> Stripe Rust, Leaf Rust, Stem Rust, Powdery Mildew, and Fusarium Head Blight are major concerns requiring specific humidity and temperature conditions.</li>
                                        <li style={{marginBottom: '0'}}><span style={{fontWeight: '600', color: '#2c3e50'}}>Strawberry:</span> Botrytis Fruit Rot, Leaf Spot, Powdery Mildew, and Anthracnose thrive under high humidity and moderate temperatures.</li>
                                    </ul>
                                </div>

                                <h6 style={{
                                    fontSize: isMobile ? '14px' : '15px',
                                    fontWeight: '600',
                                    color: colors.secondary,
                                    marginBottom: '15px'
                                }}>2.6 References (Biotic/Disease Stress Risk)</h6>
                                
                                <div style={{
                                    backgroundColor: colors.background,
                                    borderRadius: '6px',
                                    padding: '15px',
                                    marginBottom: '0',
                                    border: '1px solid #e0e0e0'
                                }}>
                                    <div style={{
                                        fontSize: isMobile ? '12px' : '13px',
                                        lineHeight: '1.5',
                                        color: colors.text
                                    }}>
                                        <p style={{marginBottom: '8px'}}>1. Purdue University Corn Disease Guide: <a href="https://www.extension.purdue.edu/extmedia/BP/BP-84-W.pdf" style={{color: colors.link, textDecoration: 'underline'}}>https://www.extension.purdue.edu/extmedia/BP/BP-84-W.pdf</a></p>
                                        <p style={{marginBottom: '8px'}}>2. University of Minnesota Extension: Corn Disease Management: <a href="https://extension.umn.edu/corn-pest-management/corn-diseases" style={{color: colors.link, textDecoration: 'underline'}}>https://extension.umn.edu/corn-pest-management/corn-diseases</a></p>
                                        <p style={{marginBottom: '8px'}}>3. University of Minnesota Extension: Tar Spot in Corn: <a href="https://extension.umn.edu/diseases/tar-spot-corn" style={{color: colors.link, textDecoration: 'underline'}}>https://extension.umn.edu/diseases/tar-spot-corn</a></p>
                                        <p style={{marginBottom: '8px'}}>4. University of Minnesota Extension: Soybean Disease Management: <a href="https://extension.umn.edu/soybean/soybean-disease-management" style={{color: colors.link, textDecoration: 'underline'}}>https://extension.umn.edu/soybean/soybean-disease-management</a></p>
                                        <p style={{marginBottom: '8px'}}>5. USDA: Soybean Rust: <a href="https://www.ars.usda.gov/oc/br/soybeanrust/" style={{color: colors.link, textDecoration: 'underline'}}>https://www.ars.usda.gov/oc/br/soybeanrust/</a></p>
                                        <p style={{marginBottom: '8px'}}>6. NC State Extension Publications: Peanut Leaf Spots: <a href="https://content.ces.ncsu.edu/early-leaf-spot-of-peanut-1" style={{color: colors.link, textDecoration: 'underline'}}>https://content.ces.ncsu.edu/early-leaf-spot-of-peanut-1</a></p>
                                        <p style={{marginBottom: '8px'}}>7. University of Georgia Peanut Production Guide: <a href="https://extension.uga.edu/publications/detail.html?number=B1146" style={{color: colors.link, textDecoration: 'underline'}}>https://extension.uga.edu/publications/detail.html?number=B1146</a></p>
                                        <p style={{marginBottom: '8px'}}>8. University of Georgia Extension: Plow Points - White Mold: <a href="https://site.extension.uga.edu/plowpoints/2022/07/white-mold/" style={{color: colors.link, textDecoration: 'underline'}}>https://site.extension.uga.edu/plowpoints/2022/07/white-mold/</a></p>
                                        <p style={{marginBottom: '8px'}}>9. University of Georgia, Peanut Rx Disease Risk Index: <a href="https://peanuts.caes.uga.edu/content/dam/caes-subsite/peanuts/docs/2020/2020-Peanut-Rx-Disease-Risk-Index.pdf" style={{color: colors.link, textDecoration: 'underline'}}>https://peanuts.caes.uga.edu/content/dam/caes-subsite/peanuts/docs/2020/2020-Peanut-Rx-Disease-Risk-Index.pdf</a></p>
                                        <p style={{marginBottom: '8px'}}>10. Clemson University: Management of Aflatoxins in Peanut: <a href="https://lgpress.clemson.edu/publication/management-of-aflatoxins-in-peanut/" style={{color: colors.link, textDecoration: 'underline'}}>https://lgpress.clemson.edu/publication/management-of-aflatoxins-in-peanut/</a></p>
                                        <p style={{marginBottom: '8px'}}>11. Cotton Disease Guide (Cotton Incorporated): <a href="https://www.cottoninc.com/research/plant-pathology/" style={{color: colors.link, textDecoration: 'underline'}}>https://www.cottoninc.com/research/plant-pathology/</a></p>
                                        <p style={{marginBottom: '8px'}}>12. Hillocks, R.J. (1992). Cotton Diseases. CAB International.</p>
                                        <p style={{marginBottom: '8px'}}>13. Sorghum Checkoff: Grain Mold: <a href="https://www.sorghumcheckoff.com/" style={{color: colors.link, textDecoration: 'underline'}}>https://www.sorghumcheckoff.com/</a></p>
                                        <p style={{marginBottom: '8px'}}>14. Kansas State University: Sorghum Leaf Blight Disease: <a href="https://bookstore.ksre.ksu.edu/pubs/MF3045.pdf" style={{color: colors.link, textDecoration: 'underline'}}>https://bookstore.ksre.ksu.edu/pubs/MF3045.pdf</a></p>
                                        <p style={{marginBottom: '8px'}}>15. USDA Wheat Disease Manual: <a href="https://www.ars.usda.gov/ARSUserFiles/50620500/DiseaseManual.pdf" style={{color: colors.link, textDecoration: 'underline'}}>https://www.ars.usda.gov/ARSUserFiles/50620500/DiseaseManual.pdf</a></p>
                                        <p style={{marginBottom: '8px'}}>16. University of California Strawberry Disease: <a href="https://www.calstrawberry.com/en-us/Farmers/Production-Guidelines" style={{color: colors.link, textDecoration: 'underline'}}>https://www.calstrawberry.com/en-us/Farmers/Production-Guidelines</a></p>
                                        <p style={{marginBottom: '0'}}>17. University of Vermont Strawberry Guide: <a href="https://www.uvm.edu/~entlab/StrawberryGuide.pdf" style={{color: colors.link, textDecoration: 'underline'}}>https://www.uvm.edu/~entlab/StrawberryGuide.pdf</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div style={styles.subsection}>
                            <SubsectionTitle icon={
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#3498db' }}>
                                    <path d="M3 3h18v18H3z"/>
                                    <path d="M8 12h8"/>
                                    <path d="M12 8v8"/>
                                </svg>
                            }>
                                2. Supported Crops
                            </SubsectionTitle>
                            <p style={{
                                fontSize: isMobile ? '14px' : '16px',
                                lineHeight: '1.6',
                                color: colors.text,
                                marginBottom: '15px'
                            }}>
                                The tool supports comprehensive risk analysis and irrigation scheduling for crops, each with specific parameters and thresholds.
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
                                                precipitation, humidity, and wind speed data for irrigation scheduling and risk assessment.
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
                                                initialization values for water stress risk assessment and soil moisture monitoring.
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
                                                Sentinel-2 satellite imagery for crop monitoring, vegetation indices, and 
                                                field boundary analysis supporting comprehensive risk assessment.
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
                                                for water stress risk assessment and Available Water Capacity calculations.
                                            </td>
                                            <td style={{ padding: '15px', borderBottom: '1px solid #ddd' }}>
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
                                            <td style={{ padding: '15px', borderBottom: '1px solid #ddd', backgroundColor: '#f8f9fa' }}>
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
                                                crop risk assessment and climate analysis.
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
                    </div>
                </div>
                </>
                )}
                
                {activeTab === 'main' && (
                    <MainDocumentation />
                )}
                
                {activeTab === 'ndvi' && (
                    <NDVIDocumentation />
                )}
                
                {activeTab === 'spray' && (
                    <SprayDocumentation />
                )}
                
                {activeTab === 'gdd' && (
                    <GDDDocumentation />
                )}
                
                {activeTab === 'irrigation' && (
                    <IrrigationSchedulerDocumentation />
                )}
                
                <footer style={styles.footer}>
                    <p style={{...styles.paragraph, fontWeight: 'bold', color: colors.primary}}>
                        Developed by: Digital Agriculture Technologies Lab, Virginia Tech (PI: Dr.Abhilash Chandel, abhilashchandel@vt.edu)
                    </p>
                    <p style={{...styles.paragraph, color: colors.secondary}}>
                        Supported by: USDA, NIFA, NAPDC, Cotton Incorporated, Virginia Tech Tidewater Agricultural Research & Extension Center (TAREC), College of Agriculture and Life Sciences, and Department of Biological Systems Engineering.
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default CropRiskDocumentation;
