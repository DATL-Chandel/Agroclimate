import React from 'react';

const CornContent = ({ isMobile, colors, styles }) => {
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
                    <path d="M17 18a5 5 0 0 1-10 0"/>
                    <line x1="12" y1="2" x2="12" y2="9"/>
                    <line x1="4.22" y1="10.22" x2="5.64" y2="11.64"/>
                    <line x1="1" y1="18" x2="3" y2="18"/>
                    <line x1="21" y1="18" x2="23" y2="18"/>
                    <line x1="18.36" y1="11.64" x2="19.78" y2="10.22"/>
                    <line x1="23" y1="22" x2="1" y2="22"/>
                </svg>
                Corn
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
                    <span style={styles.bold}>Base Temperature (T<sub>base</sub>):</span> 50°F (10°C)
                </p>
                <p style={{
                    fontSize: isMobile ? '14px' : '16px',
                    lineHeight: '1.6',
                    color: colors.text
                }}>
                    <span style={styles.bold}>Temperature Cap (T<sub>cap</sub>):</span> 86°F (30°C) — <a href="https://ndawn.ndsu.nodak.edu/help-corn-growing-degree-days.html" target="_blank" rel="noopener noreferrer" style={{fontSize: '12px', color: colors.link}}>NDAWN</a>
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

            {/* Visual Flow Diagram */}
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
                    minWidth: isMobile ? '700px' : '100%',
                    gap: '5px'
                }}>
                    {[
                        { stage: 'Emergence', gdd: '100-120', color: '#E3F2FD' },
                        { stage: 'V2-V3', gdd: '200-350', color: '#BBDEFB' },
                        { stage: 'V6', gdd: '475', color: '#90CAF9' },
                        { stage: 'VT', gdd: '1135', color: '#64B5F6' },
                        { stage: 'R1', gdd: '1400', color: '#42A5F5' },
                        { stage: 'R3', gdd: '1800', color: '#2196F3' },
                        { stage: 'R5', gdd: '2450', color: '#1E88E5' },
                        { stage: 'R6', gdd: '2700', color: '#1976D2' }
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
                                fontSize: '13px',
                                color: index > 4 ? 'white' : '#333',
                                marginBottom: '8px'
                            }}>
                                {item.stage}
                            </div>
                            <div style={{
                                fontSize: '12px',
                                color: colors.text,
                                textAlign: 'center'
                            }}>
                                {item.gdd} GDD
                            </div>
                            {index < 7 && (
                                <div style={{
                                    position: 'absolute',
                                    right: '-12px',
                                    top: '15px',
                                    zIndex: '1',
                                    backgroundColor: '#3498db',
                                    width: '24px',
                                    height: '2px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'flex-end'
                                }}>
                                    <div style={{
                                        width: 0,
                                        height: 0,
                                        borderTop: '6px solid transparent',
                                        borderBottom: '6px solid transparent',
                                        borderLeft: '8px solid #3498db',
                                        marginRight: '-8px'
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
                        1. Emergence (~100–120 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Seedlings break through the soil surface.</li>
                        <li style={styles.listItem}>Initial root system establishes.</li>
                        <li style={styles.listItem}>Cool soil temperatures can delay uniform stand.</li>
                    </ul>
                </div>

                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        2. V2–V3 Stage (~200–350 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Two to three leaf collars are visible.</li>
                        <li style={styles.listItem}>Early vegetative growth begins.</li>
                        <li style={styles.listItem}>Nitrogen uptake starts ramping up.</li>
                    </ul>
                </div>

                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        3. V6 Stage (~475 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Six leaf collars present; plant rapidly increases in size.</li>
                        <li style={styles.listItem}>Growing point rises above the soil.</li>
                        <li style={styles.listItem}>A key time for post-emergence herbicides and side-dress N.</li>
                    </ul>
                </div>

                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        4. VT – Tasseling (~1135 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Tassel fully emerged; pollen shed begins.</li>
                        <li style={styles.listItem}>Reproductive stage officially starts.</li>
                        <li style={styles.listItem}>Stress here can directly reduce yield.</li>
                    </ul>
                </div>

                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        5. R1 – Silking (~1400 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Silks appear and pollination happens.</li>
                        <li style={styles.listItem}>This is the most sensitive stage for drought stress.</li>
                        <li style={styles.listItem}>Successful fertilization determines kernel number.</li>
                    </ul>
                </div>

                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        6. R3 – Milk Stage (~1800 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Kernels are developing milky content.</li>
                        <li style={styles.listItem}>Starch begins accumulating in the grain.</li>
                        <li style={styles.listItem}>Proper moisture is key for grain fill.</li>
                    </ul>
                </div>

                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        7. R5 – Dent Stage (~2450 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Top of kernels begins to dent.</li>
                        <li style={styles.listItem}>"Milk line" forms and moves down with time.</li>
                        <li style={styles.listItem}>Nutrients move from stalks to kernels.</li>
                    </ul>
                </div>

                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        8. R6 – Physiological Maturity (~2700 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Black layer forms at kernel base.</li>
                        <li style={styles.listItem}>Kernels reach final dry weight.</li>
                        <li style={styles.listItem}>Harvest is typically ~30% grain moisture.</li>
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
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                </svg>
                Primary References
            </h4>

            <div style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                gap: '15px',
                marginTop: '15px',
                marginBottom: '10px'
            }}>
                <div style={{
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    padding: '15px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                }}>
                    <h5 style={{
                        fontSize: '15px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                    }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#3498db' }}>
                            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
                        </svg>
                        Midwest Regional Climate Center
                    </h5>
                    <p style={{
                        fontSize: '14px',
                        color: colors.text,
                        marginBottom: '8px'
                    }}>
                        Modified Growing Degree Days - Base temperature of 50°F and 86°F cap for corn GDD calculations
                    </p>
                    <a 
                        href="https://mrcc.purdue.edu/modified-growing-degree-days" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '5px',
                            fontSize: '14px',
                            color: colors.link,
                            textDecoration: 'none',
                            fontWeight: '500'
                        }}
                    >
                        View Resource
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                            <polyline points="15 3 21 3 21 9"/>
                            <line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                    </a>
                </div>

                <div style={{
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    padding: '15px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                }}>
                    <h5 style={{
                        fontSize: '15px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                    }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#3498db' }}>
                            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
                        </svg>
                        Iowa State University Extension
                    </h5>
                    <p style={{
                        fontSize: '14px',
                        color: colors.text,
                        marginBottom: '8px'
                    }}>
                        Corn Growth and Development - Growth stage descriptions and GDD thresholds
                    </p>
                    <a 
                        href="https://store.extension.iastate.edu/Product/Corn-Growth-and-Development" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '5px',
                            fontSize: '14px',
                            color: colors.link,
                            textDecoration: 'none',
                            fontWeight: '500'
                        }}
                    >
                        View Resource
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                            <polyline points="15 3 21 3 21 9"/>
                            <line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                    </a>
                </div>

                <div style={{
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    padding: '15px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                }}>
                    <h5 style={{
                        fontSize: '15px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                    }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#3498db' }}>
                            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
                        </svg>
                        University of Nebraska-Lincoln Extension
                    </h5>
                    <p style={{
                        fontSize: '14px',
                        color: colors.text,
                        marginBottom: '8px'
                    }}>
                        Growing Degree Units and Corn Emergence - Early growth stage GDD requirements
                    </p>
                    <a 
                        href="https://cropwatch.unl.edu/growing-degree-units-and-corn-emergence/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '5px',
                            fontSize: '14px',
                            color: colors.link,
                            textDecoration: 'none',
                            fontWeight: '500'
                        }}
                    >
                        View Resource
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                            <polyline points="15 3 21 3 21 9"/>
                            <line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                    </a>
                </div>

                <div style={{
                    backgroundColor: 'white',
                    borderRadius: '8px',
                    padding: '15px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                }}>
                    <h5 style={{
                        fontSize: '15px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                    }}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#3498db' }}>
                            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
                        </svg>
                        Other Resources
                    </h5>
                    <ul style={{...styles.list, marginLeft: '5px', marginTop: '5px'}}>
                        <li style={{...styles.listItem, marginBottom: '8px'}}>
                            <a 
                                href="http://corn.agronomy.wisc.edu/" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                style={{color: colors.link, textDecoration: 'none', fontWeight: '500'}}
                            >
                                UW Extension Corn Agronomy
                            </a>
                            <span style={{fontSize: '13px', display: 'block', color: '#666', marginTop: '2px'}}>
                                Management recommendations and growth stage verification
                            </span>
                        </li>
                        <li style={{...styles.listItem}}>
                            <a 
                                href="https://www.extension.purdue.edu/extmedia/ID/ID-179.html" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                style={{color: colors.link, textDecoration: 'none', fontWeight: '500'}}
                            >
                                Purdue Corn & Soybean Field Guide
                            </a>
                            <span style={{fontSize: '13px', display: 'block', color: '#666', marginTop: '2px'}}>
                                Management timing recommendations
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CornContent;
