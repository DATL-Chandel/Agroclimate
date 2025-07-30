import React, { useState, useEffect } from 'react';

const NDVIDocumentation = () => {
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

                    <h1 style={styles.title}>NDVI & LST Analysis Tool Documentation</h1>
                    <p style={{
                        fontSize: isMobile ? '14px' : '16px',
                        lineHeight: '1.6',
                        color: colors.text,
                        maxWidth: '800px',
                        margin: '0 auto',
                        marginBottom: isMobile ? '15px' : '20px',
                    }}>
                        Welcome to the comprehensive guide for the NDVI & LST Viewer. This documentation will help you understand and utilize all the features effectively.
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
                            The NDVI & LST Analysis Tool is a comprehensive platform for visualizing and analyzing both Normalized Difference Vegetation Index (NDVI) and Land Surface Temperature (LST) data. It provides farmers, agronomists, and researchers with the ability to monitor crop health, track vegetation changes over time, assess thermal conditions, and make informed decisions based on satellite imagery. This tool leverages Google Earth Engine's vast repository of satellite imagery to deliver up-to-date NDVI and LST data for agricultural fields.
                        </div>
                    </div>
                </div>

                <div style={styles.section}>
                    <h2 style={styles.sectionTitle}>2. Key Features</h2>
                    <ul style={styles.list}>
                        <li style={styles.listItem}><span style={styles.bold}>Field Selection & Data Management:</span> Users can specify the number of fields to analyze (up to 5 fields per session).</li>
                        <li style={styles.listItem}><span style={styles.bold}>Vegetation Index (VI) Analysis:</span> Evaluate NDVI maps and trends over time for crop health monitoring.</li>
                        <li style={styles.listItem}><span style={styles.bold}>NDVI Mean Temporal Plot:</span> Evaluate average NDVI trends over time for selected regions.</li>
                        <li style={styles.listItem}><span style={styles.bold}>LST Analysis:</span> Land Surface Temperature monitoring using Landsat satellite data.</li>
                        <li style={styles.listItem}><span style={styles.bold}>LST Mean Temporal Plot:</span> Evaluate average LST trends over time for selected regions.</li>
                        <li style={styles.listItem}><span style={styles.bold}>Download Features:</span> Export NDVI and LST data as TIFF files for individual fields.</li>
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
                                <path d="M12 2v10l8-8-8 8"/>
                                <path d="M18.36 6.64a9 9 0 11-12.73 0"/>
                            </svg>
                        }>
                            3. LST Analysis
                        </SubsectionTitle>
                        <ul style={styles.list}>
                            <li style={styles.listItem}>Provides Land Surface Temperature monitoring using Landsat 7/8/9 satellite data.</li>
                            <li style={styles.listItem}>Users can select LST values for specific fields over a selected time range.</li>
                            <li style={styles.listItem}>The system calculates and visualizes LST trends in both graphical and map formats.</li>
                            <li style={styles.listItem}>LST helps determine field temperature patterns and thermal stress conditions.</li>
                            <li style={styles.listItem}>Temperature data displayed in Fahrenheit with dynamic color-coded visualization.</li>
                            <li style={styles.listItem}>Multi-satellite support with automatic selection of best available data.</li>
                        </ul>
                    </div>

                    <div style={styles.subsection}>
                        <SubsectionTitle icon={
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#3498db' }}>
                                <path d="M3 3v18h18"/>
                                <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/>
                            </svg>
                        }>
                            4. NDVI Mean Temporal Plot
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
                                <path d="M3 3v18h18"/>
                                <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/>
                            </svg>
                        }>
                            5. LST Mean Temporal Plot
                        </SubsectionTitle>
                        <ul style={styles.list}>
                            <li style={styles.listItem}>Displays average LST values over time for selected fields.</li>
                            <li style={styles.listItem}>Helps assess temperature trends and seasonal thermal patterns.</li>
                            <li style={styles.listItem}>Enables users to compare temperature fluctuations across different periods.</li>
                            <li style={styles.listItem}>Useful for detecting heat stress periods and optimal planting/harvesting times.</li>
                        </ul>
                    </div>

                    <div style={styles.subsection}>
                        <SubsectionTitle icon={
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#3498db' }}>
                                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                                <path d="M7 10l5 5 5-5"/>
                                <path d="M12 15V3"/>
                            </svg>
                        }>
                            6. Download Features
                        </SubsectionTitle>
                        <ul style={styles.list}>
                            <li style={styles.listItem}>Export NDVI and LST data in multiple formats for each drawn field.</li>
                            <li style={styles.listItem}><span style={styles.bold}>TIFF Raw:</span> Georeferenced raw data values for analysis and processing.</li>
                            <li style={styles.listItem}><span style={styles.bold}>TIFF Color:</span> Color-coded visualization with applied color palette for visual interpretation.</li>
                            <li style={styles.listItem}><span style={styles.bold}>PNG Image:</span> High-quality image format for presentations and reports.</li>
                            <li style={styles.listItem}>Files include proper coordinate system and metadata for GIS compatibility.</li>
                            <li style={styles.listItem}>High-resolution satellite background imagery included in downloads.</li>
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
                                            Landsat 7
                                        </span>
                                        <code style={{ 
                                            color: '#666',
                                            fontSize: '12px',
                                            backgroundColor: '#f1f1f1',
                                            padding: '4px 6px',
                                            borderRadius: '4px',
                                            display: 'inline-block'
                                        }}>
                                            "LANDSAT/LE07/C02/T1_L2"
                                        </code>
                                    </td>
                                    <td style={{ padding: '15px', borderBottom: '1px solid #ddd', color: '#333', backgroundColor: '#f8f9fa' }}>
                                        Landsat 7 Collection 2 Level 2 surface reflectance and temperature data. Used for Land Surface Temperature (LST) analysis and thermal monitoring.
                                    </td>
                                    <td style={{ padding: '15px', borderBottom: '1px solid #ddd' }}>
                                        <a href="https://developers.google.com/earth-engine/datasets/catalog/LANDSAT_LE07_C02_T1_L2" 
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
                                            Landsat 8
                                        </span>
                                        <code style={{ 
                                            color: '#666',
                                            fontSize: '12px',
                                            backgroundColor: '#f1f1f1',
                                            padding: '4px 6px',
                                            borderRadius: '4px',
                                            display: 'inline-block'
                                        }}>
                                            "LANDSAT/LC08/C02/T1_L2"
                                        </code>
                                    </td>
                                    <td style={{ padding: '15px', borderBottom: '1px solid #ddd', color: '#333' }}>
                                        Landsat 8 Collection 2 Level 2 surface reflectance and temperature data. Primary source for LST analysis with enhanced thermal infrared capabilities.
                                    </td>
                                    <td style={{ padding: '15px', borderBottom: '1px solid #ddd', backgroundColor: '#f8f9fa' }}>
                                        <a href="https://developers.google.com/earth-engine/datasets/catalog/LANDSAT_LC08_C02_T1_L2" 
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
                                            Landsat 9
                                        </span>
                                        <code style={{ 
                                            color: '#666',
                                            fontSize: '12px',
                                            backgroundColor: '#f1f1f1',
                                            padding: '4px 6px',
                                            borderRadius: '4px',
                                            display: 'inline-block'
                                        }}>
                                            "LANDSAT/LC09/C02/T1_L2"
                                        </code>
                                    </td>
                                    <td style={{ padding: '15px', borderBottom: '1px solid #ddd', color: '#333', backgroundColor: '#f8f9fa' }}>
                                        Landsat 9 Collection 2 Level 2 surface reflectance and temperature data. Latest generation Landsat satellite for comprehensive LST monitoring.
                                    </td>
                                    <td style={{ padding: '15px', borderBottom: '1px solid #ddd' }}>
                                        <a href="https://developers.google.com/earth-engine/datasets/catalog/LANDSAT_LC09_C02_T1_L2" 
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

export default NDVIDocumentation;
