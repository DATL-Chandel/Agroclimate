import React from 'react';

const SunflowerContent = ({ isMobile, colors, styles }) => {
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
                    <circle cx="12" cy="12" r="5"/>
                    <line x1="12" y1="1" x2="12" y2="3"/>
                    <line x1="12" y1="21" x2="12" y2="23"/>
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                    <line x1="1" y1="12" x2="3" y2="12"/>
                    <line x1="21" y1="12" x2="23" y2="12"/>
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                </svg>
                Sunflower
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
                    <span style={styles.bold}>Base Temperature (T<sub>base</sub>):</span> 44°F (6.7°C)
                </p>
                <p style={{
                    fontSize: isMobile ? '14px' : '16px',
                    lineHeight: '1.6',
                    color: colors.text
                }}>
                    <span style={styles.bold}>Temperature Cap (T<sub>cap</sub>):</span> 86°F (30°C)
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
            
            {/* Visual Flow Diagram for Sunflower */}
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
                        { stage: 'Emergence', gdd: '0-206', color: '#E3F2FD' },
                        { stage: 'Vegetative', gdd: '206-600', color: '#BBDEFB' },
                        { stage: 'Bud Visible (R1)', gdd: '600-900', color: '#90CAF9' },
                        { stage: 'Flowering (R2-R5)', gdd: '900-1749', color: '#64B5F6' },
                        { stage: 'Seed Fill & Maturation (R6-R9)', gdd: '1749-2310+', color: '#2196F3' }
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
                                border: '1px solid #ddd',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '8px'
                            }}>
                                <span style={{
                                    fontSize: isMobile ? '9px' : '10px',
                                    fontWeight: '600',
                                    color: index > 2 ? 'white' : '#1976D2',
                                    textAlign: 'center'
                                }}>
                                    {item.stage}
                                </span>
                            </div>
                            <span style={{
                                fontSize: isMobile ? '9px' : '10px',
                                color: colors.secondary,
                                textAlign: 'center',
                                fontWeight: '500'
                            }}>
                                {item.gdd} GDD
                            </span>
                            {index < 4 && (
                                <div style={{
                                    position: 'absolute',
                                    right: '-12px',
                                    top: '15px',
                                    width: '0',
                                    height: '0',
                                    borderLeft: '8px solid #ddd',
                                    borderTop: '5px solid transparent',
                                    borderBottom: '5px solid transparent',
                                    zIndex: 1
                                }} />
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <h4 style={{
                fontSize: isMobile ? '16px' : '18px',
                color: colors.secondary,
                marginBottom: '15px',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
            }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#3498db' }}>
                    <circle cx="12" cy="12" r="3"/>
                    <path d="M12 1v6M12 17v6M4.22 4.22l4.24 4.24M15.54 15.54l4.24 4.24M1 12h6M17 12h6M4.22 19.78l4.24-4.24M15.54 8.46l4.24-4.24"/>
                </svg>
                Detailed Stage Descriptions
            </h4>
            
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
                        1. Emergence (0–206 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Sunflower seeds imbibe water and sprout with coleoptile reaching surface.</li>
                        <li style={styles.listItem}>Emergence typically occurs within a week under optimal conditions.</li>
                        <li style={styles.listItem}>Cool soils below 50°F significantly delay this critical establishment stage.</li>
                    </ul>
                </div>
                
                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        2. Vegetative (206–600 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Plants generate true leaves sequentially (V1, V2, ...) through tillering phases.</li>
                        <li style={styles.listItem}>Expanding canopy maximizes photosynthetic capacity for energy capture.</li>
                        <li style={styles.listItem}>Foliage supports energy storage preparation for reproductive development.</li>
                    </ul>
                </div>
                
                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        3. Bud Visible (R1, 600–900 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Terminal bud transitions to distinctive star-like appearance above foliage.</li>
                        <li style={styles.listItem}>Marks the critical switch from vegetative to reproductive development.</li>
                        <li style={styles.listItem}>Bud formation signals preparation for flowering initiation phase.</li>
                    </ul>
                </div>
                
                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        4. Flowering (R2–R5, 900–1,749 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Bud elongation and bloom occur with full flowering at ~50% near 1,749 GDD.</li>
                        <li style={styles.listItem}>Peak pollen release coincides with maximum pollinator activity.</li>
                        <li style={styles.listItem}>Critical period for successful pollination and seed set establishment.</li>
                    </ul>
                </div>
                
                <div style={{
                    gridColumn: isMobile ? '1' : '1 / 3',
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                    <div style={{ maxWidth: isMobile ? '100%' : '50%' }}>
                        <h5 style={{
                            fontSize: isMobile ? '15px' : '16px',
                            fontWeight: '600',
                            color: colors.primary,
                            marginBottom: '8px'
                        }}>
                            5. Seed Fill & Maturation (R6–R9, 1,749–2,310+ GDD)
                        </h5>
                        <ul style={{...styles.list, marginLeft: '15px'}}>
                            <li style={styles.listItem}>Seeds fill and dry with physiological maturity beginning around 1,830°C·d.</li>
                            <li style={styles.listItem}>Oil accumulation peaks as moisture content decreases toward harvest.</li>
                            <li style={styles.listItem}>R9 stage at ~2,310 GDD marks optimal harvest timing for maximum yield.</li>
                        </ul>
                    </div>
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
                                    href="https://www.ndsu.edu/agriculture/extension/publications/sunflower-production-guide"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{color: colors.link, textDecoration: 'none', fontWeight: '500'}}
                                >
                                    NDSU Sunflower Production Guide – GDD & growth stages
                                </a>
                                <span style={{fontSize: '13px', display: 'block', color: '#666', marginTop: '2px'}}>
                                    North Dakota State University comprehensive production guide with GDD calculations.
                                </span>
                            </li>
                            <li style={{...styles.listItem}}>
                                <a 
                                    href="https://blog.pestprophet.com/how-to-use-the-sunflower-growing-degree-day-model/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{color: colors.link, textDecoration: 'none', fontWeight: '500'}}
                                >
                                    PestProphet – Sunflower GDD model & emergence detail
                                </a>
                                <span style={{fontSize: '13px', display: 'block', color: '#666', marginTop: '2px'}}>
                                    Agricultural technology platform providing GDD modeling for sunflower emergence.
                                </span>
                            </li>
                            <li style={{...styles.listItem}}>
                                <a 
                                    href="https://eos.com/crop-management-guide/sunflower-growth-stages/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{color: colors.link, textDecoration: 'none', fontWeight: '500'}}
                                >
                                    EOS Crop Management Guide – Sunflower growth stages
                                </a>
                                <span style={{fontSize: '13px', display: 'block', color: '#666', marginTop: '2px'}}>
                                    Earth Observing System guide on sunflower phenology and management practices.
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul style={{...styles.list}}>
                            <li style={{...styles.listItem}}>
                                <a 
                                    href="https://extension.sdstate.edu/sites/default/files/2021-08/P-00205-02.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{color: colors.link, textDecoration: 'none', fontWeight: '500'}}
                                >
                                    SDSU Extension – Sunflower Growth Stages BBCH guide
                                </a>
                                <span style={{fontSize: '13px', display: 'block', color: '#666', marginTop: '2px'}}>
                                    South Dakota State University extension BBCH scale for sunflower development.
                                </span>
                            </li>
                            <li style={{...styles.listItem}}>
                                <a 
                                    href="https://grdc.com.au/__data/assets/pdf_file/0019/370612/GrowNote-Sunflower-North-04-Physiology.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{color: colors.link, textDecoration: 'none', fontWeight: '500'}}
                                >
                                    GRDC – Sunflower phenology & daylength impacts
                                </a>
                                <span style={{fontSize: '13px', display: 'block', color: '#666', marginTop: '2px'}}>
                                    Grains Research and Development Corporation guide on sunflower physiology.
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SunflowerContent; 