import React, { useState, useEffect } from 'react';
import MainDocumentation from './docs/MainDocumentation';
import NDVIDocumentation from './docs/NDVIDocumentation';
import SprayDocumentation from './docs/SprayDocumentation';
import GDDDocumentation from './docs/GDDDocumentation';
import CropRiskDocumentation from './docs/CropRiskDocumentation';

const Documentation = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [activeTab, setActiveTab] = useState('main');

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
    };

    return (
        <div style={styles.container}>
            <div style={styles.contentWrapper}>
                <div style={styles.tabContainer}>
                    <div 
                        style={{
                            ...styles.tab,
                            ...(activeTab === 'main' ? styles.activeTab : styles.inactiveTab)
                        }}
                        onClick={() => setActiveTab('main')}
                        onMouseEnter={(e) => {
                            if (activeTab !== 'main') {
                                e.target.style.backgroundColor = 'rgba(44, 62, 80, 0.1)';
                            }
                        }}
                        onMouseLeave={(e) => {
                            if (activeTab !== 'main') {
                                e.target.style.backgroundColor = colors.background;
                            }
                        }}
                    >
                        Main Tool
                    </div>
                    <div 
                        style={{
                            ...styles.tab,
                            ...(activeTab === 'ndvi' ? styles.activeTab : styles.inactiveTab)
                        }}
                        onClick={() => setActiveTab('ndvi')}
                        onMouseEnter={(e) => {
                            if (activeTab !== 'ndvi') {
                                e.target.style.backgroundColor = 'rgba(44, 62, 80, 0.1)';
                            }
                        }}
                        onMouseLeave={(e) => {
                            if (activeTab !== 'ndvi') {
                                e.target.style.backgroundColor = colors.background;
                            }
                        }}
                    >
                        NDVI & LST Viewer
                    </div>
                    <div 
                        style={{
                            ...styles.tab,
                            ...(activeTab === 'spray' ? styles.activeTab : styles.inactiveTab)
                        }}
                        onClick={() => setActiveTab('spray')}
                        onMouseEnter={(e) => {
                            if (activeTab !== 'spray') {
                                e.target.style.backgroundColor = 'rgba(44, 62, 80, 0.1)';
                            }
                        }}
                        onMouseLeave={(e) => {
                            if (activeTab !== 'spray') {
                                e.target.style.backgroundColor = colors.background;
                            }
                        }}
                    >
                        Spray Planner
                    </div>
                    <div 
                        style={{
                            ...styles.tab,
                            ...(activeTab === 'gdd' ? styles.activeTab : styles.inactiveTab)
                        }}
                        onClick={() => setActiveTab('gdd')}
                        onMouseEnter={(e) => {
                            if (activeTab !== 'gdd') {
                                e.target.style.backgroundColor = 'rgba(44, 62, 80, 0.1)';
                            }
                        }}
                        onMouseLeave={(e) => {
                            if (activeTab !== 'gdd') {
                                e.target.style.backgroundColor = colors.background;
                            }
                        }}
                    >
                        Crop Growth Tracker
                    </div>
                    <div 
                        style={{
                            ...styles.tab,
                            ...(activeTab === 'cropRisk' ? styles.activeTab : styles.inactiveTab)
                        }}
                        onClick={() => setActiveTab('cropRisk')}
                        onMouseEnter={(e) => {
                            if (activeTab !== 'cropRisk') {
                                e.target.style.backgroundColor = 'rgba(44, 62, 80, 0.1)';
                            }
                        }}
                        onMouseLeave={(e) => {
                            if (activeTab !== 'cropRisk') {
                                e.target.style.backgroundColor = colors.background;
                            }
                        }}
                    >
                        Crop Risk Analysis
                    </div>
                </div>

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
                {activeTab === 'cropRisk' && (
                    <CropRiskDocumentation />
                )}
            </div>
        </div>
    );
};

export default Documentation;
