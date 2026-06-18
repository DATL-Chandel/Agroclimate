import React from 'react';

const PecanContent = ({ isMobile, colors, styles }) => {
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
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                Pecan
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
            
            {/* Visual Flow Diagram for Pecan */}
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
                    gap: '4px'
                }}>
                    {[
                        { stage: 'Dormant', gdd: '0-100', color: '#E3F2FD' },
                        { stage: 'Bud Break', gdd: '100-250', color: '#BBDEFB' },
                        { stage: 'Pollination', gdd: '250-400', color: '#90CAF9' },
                        { stage: 'Water Stage', gdd: '400-800', color: '#64B5F6' },
                        { stage: 'Gel Stage', gdd: '800-1200', color: '#42A5F5' },
                        { stage: 'Shell Hardening', gdd: '1200-1600', color: '#2196F3' },
                        { stage: 'Dough Stage', gdd: '1600-2000', color: '#1976D2' }
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
                                    right: '-8px',
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
                        1. Dormant (0–100 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Pecan trees stay in dormancy post leaf-fall; chilling hours accumulate before growth can resume.</li>
                    </ul>
                </div>
                
                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        2. Bud Break (100–250 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>With warming temperatures, bud scales separate and shoot tips begin to unfurl, restarting vegetative growth.</li>
                    </ul>
                </div>
                
                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        3. Pollination (250–400 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Male catkins shed pollen as female flowers become receptive—key stage for fruit set.</li>
                    </ul>
                </div>
                
                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        4. Water Stage (400–800 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Nuts enlarge and fill with water; initial kernel development begins.</li>
                    </ul>
                </div>
                
                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        5. Gel Stage (800–1,200 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Kernel interior becomes gelatinous; rapid cell division proceeds toward maturity.</li>
                    </ul>
                </div>
                
                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        6. Shell Hardening (1,200–1,600 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Shell structure strengthens halfway through; kernel solidifies further.</li>
                    </ul>
                </div>
                
                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        7. Dough Stage (1,600–2,000 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Kernel begins drying inside the shell, with starch conversion nearing completion.</li>
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
                References for Pecan Growth Stages
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
                                    href="https://www.uaex.uada.edu/counties/tri-county-pecan-production/growth-stages-of-pecan.aspx"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{color: colors.link, textDecoration: 'none', fontWeight: '500'}}
                                >
                                    Arkansas Extension – Growth Stages of Pecan
                                </a>
                                <span style={{fontSize: '13px', display: 'block', color: '#666', marginTop: '2px'}}>
                                    University of Arkansas Extension guide on pecan growth stages and development.
                                </span>
                            </li>
                            <li style={{...styles.listItem}}>
                                <a 
                                    href="https://plants.usda.gov/DocumentLibrary/plantguide/pdf/cs_cail2.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{color: colors.link, textDecoration: 'none', fontWeight: '500'}}
                                >
                                    USDA Plant Guide – Pecan (Carya illinoinensis)
                                </a>
                                <span style={{fontSize: '13px', display: 'block', color: '#666', marginTop: '2px'}}>
                                    USDA comprehensive plant guide for Carya illinoinensis (pecan tree).
                                </span>
                            </li>
                            <li style={{...styles.listItem}}>
                                <a 
                                    href="https://pubs.nmsu.edu/_h/H618/index.html"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{color: colors.link, textDecoration: 'none', fontWeight: '500'}}
                                >
                                    Byford, NMSU – Growth and Development of Pecan Nuts
                                </a>
                                <span style={{fontSize: '13px', display: 'block', color: '#666', marginTop: '2px'}}>
                                    New Mexico State University guide on pecan nut growth and development stages.
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul style={{...styles.list}}>
                            <li style={{...styles.listItem}}>
                                <a 
                                    href="https://www.pecansouthmagazine.com/magazine/article/know-your-nuts-from-flowering-to-fruiting/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{color: colors.link, textDecoration: 'none', fontWeight: '500'}}
                                >
                                    Pecan South Magazine – Know Your Nuts: Flowering to Fruiting
                                </a>
                                <span style={{fontSize: '13px', display: 'block', color: '#666', marginTop: '2px'}}>
                                    Industry publication covering pecan development from flowering through fruit maturation.
                                </span>
                            </li>
                            <li style={{...styles.listItem}}>
                                <a 
                                    href="https://blog.pestprophet.com/how-to-use-the-pecan-nut-casebearer-growing-degree-day-model/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{color: colors.link, textDecoration: 'none', fontWeight: '500'}}
                                >
                                    PestProphet Blog – Pecan Nut Casebearer GDD Model
                                </a>
                                <span style={{fontSize: '13px', display: 'block', color: '#666', marginTop: '2px'}}>
                                    Guide on using growing degree day models for pecan nut casebearer pest management.
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PecanContent; 