import React from 'react';

const PotatoContent = ({ isMobile, colors, styles }) => {
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
                    <path d="M12 2v20M2 12h20"/>
                    <circle cx="12" cy="12" r="3"/>
                    <circle cx="6" cy="6" r="2"/>
                    <circle cx="18" cy="6" r="2"/>
                    <circle cx="6" cy="18" r="2"/>
                    <circle cx="18" cy="18" r="2"/>
                </svg>
                Potato
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
                    <span style={styles.bold}>Base Temperature (T<sub>base</sub>):</span> 50°F (10°C), Cap: 86°F (30°C)
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
            
            {/* Visual Flow Diagram for Potato */}
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
                        { stage: 'Sprout Development', gdd: '0-200', color: '#E3F2FD' },
                        { stage: 'Vegetative Growth', gdd: '200-400', color: '#BBDEFB' },
                        { stage: 'Tuber Initiation', gdd: '400-600', color: '#90CAF9' },
                        { stage: 'Tuber Bulking', gdd: '600-1200', color: '#64B5F6' },
                        { stage: 'Maturation/Senescence', gdd: '1200-1600+', color: '#2196F3' }
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
                        1. Sprout Development (0–200 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Seed potatoes absorb moisture and sprouts emerge from eyes.</li>
                        <li style={styles.listItem}>Sprouts grow upward toward soil surface breaking through ground.</li>
                        <li style={styles.listItem}>Critical phase highly sensitive to frost damage and soil conditions.</li>
                    </ul>
                </div>
                
                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        2. Vegetative Growth (200–400 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Green shoot and leaf systems develop above ground rapidly.</li>
                        <li style={styles.listItem}>Underground stolons begin to form, laying groundwork for tubers.</li>
                        <li style={styles.listItem}>Root system expands to support future tuber development needs.</li>
                    </ul>
                </div>
                
                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        3. Tuber Initiation (400–600 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Stolons begin to swell into tubers shortly after shoot establishment.</li>
                        <li style={styles.listItem}>This critical stage sets eventual yield potential for the season.</li>
                        <li style={styles.listItem}>Environmental conditions strongly influence tuber number formation.</li>
                    </ul>
                </div>
                
                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        4. Tuber Bulking (600–1,200 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Tubers rapidly increase in size with peak photosynthate allocation.</li>
                        <li style={styles.listItem}>Full canopy coverage supports maximum tuber growth rates.</li>
                        <li style={styles.listItem}>Water and nutrient management critical for optimal tuber sizing.</li>
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
                            5. Maturation / Senescence (1,200–1,600+ GDD)
                        </h5>
                        <ul style={{...styles.list, marginLeft: '15px'}}>
                            <li style={styles.listItem}>Plants yellow and vines desiccate as growth cycle completes.</li>
                            <li style={styles.listItem}>Tuber skins harden providing protection for storage quality.</li>
                            <li style={styles.listItem}>Crops are ready for vine-kill and harvest operations.</li>
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
                                    href="https://www.uidaho.edu/cals/potatoes/storage"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{color: colors.link, textDecoration: 'none', fontWeight: '500'}}
                                >
                                    University of Idaho – Potato GDD accumulation (agrimet)
                                </a>
                                <span style={{fontSize: '13px', display: 'block', color: '#666', marginTop: '2px'}}>
                                    Comprehensive resource on potato growing degree day accumulation and thermal requirements.
                                </span>
                            </li>
                            <li style={{...styles.listItem}}>
                                <a 
                                    href="https://eos.com/crop-management-guide/potato-growth-stages/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{color: colors.link, textDecoration: 'none', fontWeight: '500'}}
                                >
                                    EOS Crop Guide – Potato growth and heat sensitivity
                                </a>
                                <span style={{fontSize: '13px', display: 'block', color: '#666', marginTop: '2px'}}>
                                    Modern agricultural technology guide covering potato growth stages and heat stress management.
                                </span>
                            </li>
                            <li style={{...styles.listItem}}>
                                <a 
                                    href="https://sfyl.ifas.ufl.edu/lawn-and-garden/potatoes-home-garden/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{color: colors.link, textDecoration: 'none', fontWeight: '500'}}
                                >
                                    Florida/IFAS – Potato home gardening & harvest timing
                                </a>
                                <span style={{fontSize: '13px', display: 'block', color: '#666', marginTop: '2px'}}>
                                    University of Florida extension guide for potato cultivation and harvest timing.
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul style={{...styles.list}}>
                            <li style={{...styles.listItem}}>
                                <a 
                                    href="https://journals.flvc.org/fshs/article/download/85974/82890/0"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{color: colors.link, textDecoration: 'none', fontWeight: '500'}}
                                >
                                    Sands et al. – Potato phenology and GDD thresholds
                                </a>
                                <span style={{fontSize: '13px', display: 'block', color: '#666', marginTop: '2px'}}>
                                    Peer-reviewed research on potato phenological development and growing degree day thresholds.
                                </span>
                            </li>
                            <li style={{...styles.listItem}}>
                                <a 
                                    href="https://www.mdpi.com/2223-7747/14/5/750"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{color: colors.link, textDecoration: 'none', fontWeight: '500'}}
                                >
                                    MDPI – GDD effects on potato development and tuberization
                                </a>
                                <span style={{fontSize: '13px', display: 'block', color: '#666', marginTop: '2px'}}>
                                    Scientific publication on growing degree day effects on potato development and tuberization.
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PotatoContent; 