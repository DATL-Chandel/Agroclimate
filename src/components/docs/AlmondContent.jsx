import React from 'react';

const AlmondContent = ({ isMobile, colors, styles }) => {
    return (
        <div style={{
            backgroundColor: colors.background,
            borderRadius: '8px',
            padding: '20px',
            marginBottom: '30px',
            display: 'block'
        }}>
            <h3 style={{
                fontSize: isMobile ? '18px' : '20px',
                color: colors.primary,
                marginBottom: '15px',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
            }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#3498db' }}>
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
                Almond
            </h3>
            
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                marginBottom: '20px'
            }}>
                <p style={{
                    fontSize: isMobile ? '14px' : '16px',
                    lineHeight: '1.6',
                    color: colors.text
                }}>
                    <span style={{ fontWeight: '600', color: colors.primary }}>Base Temperature (T<sub>base</sub>):</span> 40.1°F (4.5°C)
                </p>
            </div>
            
            <h4 style={{
                fontSize: isMobile ? '16px' : '18px',
                color: colors.secondary,
                marginBottom: '15px',
                marginTop: '20px',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
            }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#3498db' }}>
                    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                </svg>
                Growth Stages and GDD Criteria
            </h4>
            
            {/* Visual Flow Diagram for Almond */}
            <div style={{
                backgroundColor: 'white',
                borderRadius: '8px',
                padding: '15px',
                marginBottom: '25px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                overflowX: 'auto'
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    minWidth: isMobile ? '900px' : '100%',
                    gap: '8px'
                }}>
                    {[
                        { stage: 'Dormancy', gdd: '0', color: '#E3F2FD' },
                        { stage: 'Bud Swell', gdd: '0-100', color: '#BBDEFB' },
                        { stage: 'Bloom', gdd: '100-300', color: '#90CAF9' },
                        { stage: 'Fruit Set', gdd: '300-600', color: '#64B5F6' },
                        { stage: 'Nut Development', gdd: '600-1500', color: '#42A5F5' },
                        { stage: 'Hull Split', gdd: '1500-1800', color: '#1E88E5' },
                        { stage: 'Harvest', gdd: '1800-2200', color: '#1565C0' }
                    ].map((item, index) => (
                        <div key={index} style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            position: 'relative',
                            flex: '1'
                        }}>
                            <div style={{
                                width: '100%',
                                height: '30px',
                                backgroundColor: item.color,
                                borderRadius: '4px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                fontWeight: '600',
                                fontSize: '11px',
                                color: index > 5 ? 'white' : '#333',
                                marginBottom: '8px',
                                padding: '2px',
                                textAlign: 'center'
                            }}>
                                {item.stage}
                            </div>
                            <div style={{
                                fontSize: '11px',
                                color: colors.text,
                                textAlign: 'center'
                            }}>
                                {item.gdd} GDD
                            </div>
                            {index < 6 && (
                                <div style={{
                                    position: 'absolute',
                                    right: '-15px',
                                    top: '15px',
                                    zIndex: '1',
                                    backgroundColor: '#3498db',
                                    width: '23px',
                                    height: '2px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'flex-end'
                                }}>
                                    <div style={{
                                        width: 0,
                                        height: 0,
                                        borderTop: '5px solid transparent',
                                        borderBottom: '5px solid transparent',
                                        borderLeft: '6px solid #3498db',
                                        marginRight: '-6px'
                                    }}></div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            
            <div style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                gap: '20px',
                marginLeft: '10px'
            }}>
                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        1. Dormancy (0 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>During winter (November to January), almond trees enter a dormant state, halting visible growth.</li>
                        <li style={styles.listItem}>This period is crucial for accumulating chilling hours (typically between 250 and 350 hours below 7°C) necessary for proper bud development.</li>
                    </ul>
                </div>
                
                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        2. Bud Swell (0-100 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>As temperatures rise in late winter, buds begin to swell.</li>
                        <li style={styles.listItem}>This signals the end of dormancy and the start of the growth cycle.</li>
                    </ul>
                </div>
                
                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        3. Bloom (100-300 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>In February and March, flowers open, and pollination occurs.</li>
                        <li style={styles.listItem}>Since most almond varieties are not self-fertile, cross-pollination by bees is essential for fruit set.</li>
                    </ul>
                </div>
                
                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        4. Fruit Set (300-600 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Post-pollination, fertilized flowers develop into young almonds.</li>
                        <li style={styles.listItem}>This stage is sensitive to environmental conditions, and proper care ensures healthy fruit development.</li>
                    </ul>
                </div>
                
                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        5. Nut Development (600-1500 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>From March to June, almonds grow to full size.</li>
                        <li style={styles.listItem}>The shell hardens around the kernel, and the outer hull protects the developing nut.</li>
                    </ul>
                </div>

                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        6. Hull Split (1500-1800 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>In July, the hulls begin to split open, exposing the shell.</li>
                        <li style={styles.listItem}>This natural process allows the almond to dry in preparation for harvest.</li>
                    </ul>
                </div>

                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        7. Harvest (1800-2200 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>From August through October, mechanical shakers are used to harvest almonds.</li>
                        <li style={styles.listItem}>The nuts are then left to dry naturally in the sun before collection.</li>
                    </ul>
                </div>
            </div>
            
            <h4 style={{
                fontSize: isMobile ? '16px' : '18px',
                color: colors.secondary,
                marginBottom: '15px',
                marginTop: '30px',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
            }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#3498db' }}>
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
                Authoritative Resources
            </h4>
            
            <div style={{
                backgroundColor: 'white',
                borderRadius: '8px',
                padding: '15px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                marginTop: '15px'
            }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                    gap: '15px',
                }}>
                    <div>
                        <ul style={{...styles.list}}>
                            <li style={{...styles.listItem}}>
                                <a 
                                    href="https://link.springer.com/article/10.1007/s10584-023-03569-2" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    style={{color: colors.link, textDecoration: 'none', fontWeight: '500'}}
                                >
                                    SpringerLink: Almond Thermal Conditions
                                </a>
                                <span style={{fontSize: '13px', display: 'block', color: '#666', marginTop: '2px'}}>
                                    Research on historical and future thermal conditions.
                                </span>
                            </li>
                            <li style={{...styles.listItem}}>
                                <a 
                                    href="https://www.yara.us/crop-nutrition/almond/growth-requirements/" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    style={{color: colors.link, textDecoration: 'none', fontWeight: '500'}}
                                >
                                    Yara: Almond Growth Requirements
                                </a>
                                <span style={{fontSize: '13px', display: 'block', color: '#666', marginTop: '2px'}}>
                                    Comprehensive guide on almond growth needs.
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul style={{...styles.list}}>
                            <li style={{...styles.listItem}}>
                                <a 
                                    href="https://www.almonds.com/why-almonds/growing-good/almond-lifecycle" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    style={{color: colors.link, textDecoration: 'none', fontWeight: '500'}}
                                >
                                    Almond Board: California Almonds Lifecycle
                                </a>
                                <span style={{fontSize: '13px', display: 'block', color: '#666', marginTop: '2px'}}>
                                    Detailed almond growth cycle information.
                                </span>
                            </li>
                            <li style={{...styles.listItem}}>
                                <a 
                                    href="https://www.horticulture.com.au/globalassets/hort-innovation/resource-assets/al14006-phenology-standard-for-almonds.pdf" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    style={{color: colors.link, textDecoration: 'none', fontWeight: '500'}}
                                >
                                    Horticulture Innovation: Almond Phenology
                                </a>
                                <span style={{fontSize: '13px', display: 'block', color: '#666', marginTop: '2px'}}>
                                    Standard guide for almond phenology.
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AlmondContent; 