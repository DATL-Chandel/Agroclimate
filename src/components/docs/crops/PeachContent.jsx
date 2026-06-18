import React from 'react';

const PeachContent = ({ isMobile, colors, styles }) => {
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
                    <circle cx="12" cy="12" r="4"/>
                    <path d="M12 2v2"/>
                    <path d="M12 20v2"/>
                    <path d="M4.93 4.93l1.41 1.41"/>
                    <path d="M17.66 17.66l1.41 1.41"/>
                    <path d="M2 12h2"/>
                    <path d="M20 12h2"/>
                    <path d="M6.34 17.66l-1.41 1.41"/>
                    <path d="M19.07 4.93l-1.41 1.41"/>
                </svg>
                Peach
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
                    <span style={styles.bold}>Base Temperature (T<sub>base</sub>):</span> 40°F (4°C)
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
            
            {/* Visual Flow Diagram for Peach */}
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
                        { stage: 'Dormancy Break', gdd: '0-100', color: '#E3F2FD' },
                        { stage: 'Bud Swell', gdd: '100-250', color: '#BBDEFB' },
                        { stage: 'Bloom', gdd: '250-400', color: '#90CAF9' },
                        { stage: 'Fruit Set', gdd: '400-650', color: '#64B5F6' },
                        { stage: 'Pit Hardening', gdd: '650-1100', color: '#42A5F5' },
                        { stage: 'Fruit Development', gdd: '1100-1800', color: '#2196F3' },
                        { stage: 'Harvest Maturity', gdd: '1800-2400', color: '#1976D2' }
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
                                    color: '#1976D2',
                                    textAlign: 'center'
                                }}>
                                    {item.stage}
                                </span>
                            </div>
                            <span style={{
                                fontSize: isMobile ? '8px' : '9px',
                                color: colors.secondary,
                                textAlign: 'center',
                                fontWeight: '500'
                            }}>
                                {item.gdd} GDD
                            </span>
                            {index < 6 && (
                                <div style={{
                                    position: 'absolute',
                                    right: '-10px',
                                    top: '15px',
                                    width: '0',
                                    height: '0',
                                    borderLeft: '6px solid #ddd',
                                    borderTop: '4px solid transparent',
                                    borderBottom: '4px solid transparent',
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
                        1. Dormancy Break (0–100 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Trees exit winter dormancy as chilling requirements are met.</li>
                        <li style={styles.listItem}>Cambial activity resumes and sap flow begins in response to warming temperatures.</li>
                    </ul>
                </div>
                
                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        2. Bud Swell (100–250 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Flower and leaf buds begin to swell and show color (pink stage).</li>
                        <li style={styles.listItem}>Critical period for frost protection as flower buds become more susceptible.</li>
                    </ul>
                </div>
                
                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        3. Bloom (250–400 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Flowers open and pollination occurs; highly frost-sensitive period.</li>
                        <li style={styles.listItem}>Bee activity and favorable weather conditions are crucial for fruit set.</li>
                    </ul>
                </div>
                
                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        4. Fruit Set (400–650 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Successful pollination leads to fruit development; petals fall.</li>
                        <li style={styles.listItem}>Young fruits are still susceptible to frost damage and require protection.</li>
                    </ul>
                </div>
                
                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        5. Pit Hardening (650–1,100 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Stone (pit) formation and hardening occurs within the developing fruit.</li>
                        <li style={styles.listItem}>Critical stage for thinning operations to ensure optimal fruit size and quality.</li>
                    </ul>
                </div>
                
                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        6. Fruit Development (1,100–1,800 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Rapid fruit expansion and sugar accumulation phase.</li>
                        <li style={styles.listItem}>Adequate water and nutrients are essential for fruit quality development.</li>
                    </ul>
                </div>
                
                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        7. Harvest Maturity (1,800–2,400 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Fruits reach optimal color, firmness, and sugar content for harvest.</li>
                        <li style={styles.listItem}>Timing varies by cultivar and intended use (fresh market vs. processing).</li>
                    </ul>
                </div>
            </div>

            <h4 style={{
                fontSize: isMobile ? '16px' : '18px',
                color: colors.secondary,
                marginBottom: '15px',
                marginTop: '25px',
                fontWeight: '600',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
            }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#3498db' }}>
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14,2 14,8 20,8"/>
                    <line x1="16" y1="13" x2="8" y2="13"/>
                    <line x1="16" y1="17" x2="8" y2="17"/>
                    <polyline points="10,9 9,9 8,9"/>
                </svg>
                References for Peach Growth Stages
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
                                    href="https://www.researchgate.net/publication/365315923_Phenological_growth_stages_and_growing_degree_days_of_peach_Prunus_persica_L_Batsch_in_sub-temperate_climatic_zone_of_North-Western_Himalayan_region_using_BBCH_scale"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{color: colors.link, textDecoration: 'none', fontWeight: '500'}}
                                >
                                    Pramod Verma et al. – Phenological growth stages & GDD timing of peach
                                </a>
                                <span style={{fontSize: '13px', display: 'block', color: '#666', marginTop: '2px'}}>
                                    Research on peach phenological growth stages and growing degree days in sub-temperate climatic zones using BBCH scale.
                                </span>
                            </li>
                            <li style={{...styles.listItem}}>
                                <a 
                                    href="https://extension.psu.edu/2025-pennsylvania-apple-and-peach-phenology-report-april-14"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{color: colors.link, textDecoration: 'none', fontWeight: '500'}}
                                >
                                    Penn State Extension – 2025 Apple & Peach Phenology Report
                                </a>
                                <span style={{fontSize: '13px', display: 'block', color: '#666', marginTop: '2px'}}>
                                    Pennsylvania apple and peach phenology monitoring and reporting system.
                                </span>
                            </li>
                            <li style={{...styles.listItem}}>
                                <a 
                                    href="https://projects.sare.org/media/pdf/2/0/2/2024.-Predicting-Floral-Bud-Progression-for-Three-Peach-Cultivars-agronomy-14-00240.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{color: colors.link, textDecoration: 'none', fontWeight: '500'}}
                                >
                                    MDPI (Auburn Univ. & UGA) – Predicting Floral Bud Progression in Peach Cultivars
                                </a>
                                <span style={{fontSize: '13px', display: 'block', color: '#666', marginTop: '2px'}}>
                                    Study on predicting floral bud progression for three peach cultivars using growing degree days.
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul style={{...styles.list}}>
                            <li style={{...styles.listItem}}>
                                <a 
                                    href="https://aces.edu/blog/topics/crop-production/peach-growth-stages-critical-temperatures/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{color: colors.link, textDecoration: 'none', fontWeight: '500'}}
                                >
                                    AL Ext. (ACES) – Peach Growth Stages & Critical Temperature Thresholds
                                </a>
                                <span style={{fontSize: '13px', display: 'block', color: '#666', marginTop: '2px'}}>
                                    Alabama Extension guide on peach growth stages and critical temperature thresholds for frost protection.
                                </span>
                            </li>
                            <li style={{...styles.listItem}}>
                                <a 
                                    href="https://edis.ifas.ufl.edu/publication/MG374"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{color: colors.link, textDecoration: 'none', fontWeight: '500'}}
                                >
                                    UF/IFAS – Florida Peach & Nectarine Variety Phenology
                                </a>
                                <span style={{fontSize: '13px', display: 'block', color: '#666', marginTop: '2px'}}>
                                    University of Florida guide on peach and nectarine variety phenology for Florida growing conditions.
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PeachContent; 