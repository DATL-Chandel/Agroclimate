import React from 'react';

const RiceContent = ({ isMobile, colors, styles }) => {
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
                    <path d="M3 12h3M15 12h6M3 6h18M3 18h18"/>
                    <circle cx="9" cy="12" r="3"/>
                    <circle cx="9" cy="6" r="1"/>
                    <circle cx="9" cy="18" r="1"/>
                </svg>
                Rice
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
            
            {/* Visual Flow Diagram for Rice */}
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
                    gap: '5px'
                }}>
                    {[
                        { stage: 'Germination/Emergence', gdd: '0-150', color: '#E3F2FD' },
                        { stage: 'Vegetative Growth', gdd: '150-600', color: '#BBDEFB' },
                        { stage: 'Stem Elongation/Panicle Init.', gdd: '600-900', color: '#90CAF9' },
                        { stage: 'Booting & Heading', gdd: '900-1200', color: '#64B5F6' },
                        { stage: 'Flowering', gdd: '1200-1400', color: '#42A5F5' },
                        { stage: 'Grain Filling', gdd: '1400-1800', color: '#2196F3' },
                        { stage: 'Maturation/Ripening', gdd: '1800-2200+', color: '#1976D2' }
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
                                    fontSize: isMobile ? '8px' : '9px',
                                    fontWeight: '600',
                                    color: index > 4 ? 'white' : '#1976D2',
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
                        1. Germination / Emergence (0–150 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Under warm, moist soil conditions, rice seeds germinate successfully.</li>
                        <li style={styles.listItem}>Coleoptile pushes through soil surface establishing foundation for growth.</li>
                        <li style={styles.listItem}>Initial shoot and root systems develop to support future plant development.</li>
                    </ul>
                </div>
                
                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        2. Vegetative Growth (150–600 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Plant develops tillers, increasing leaf area and photosynthetic capacity.</li>
                        <li style={styles.listItem}>This critical stage significantly impacts final yield potential.</li>
                        <li style={styles.listItem}>Root system expansion supports increasing nutrient and water uptake needs.</li>
                    </ul>
                </div>
                
                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        3. Stem Elongation / Panicle Initiation (600–900 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Rapid stem growth lifts the developing panicle internally within the stem.</li>
                        <li style={styles.listItem}>Panicle initiation signals the transition to reproductive development.</li>
                        <li style={styles.listItem}>Environmental stress during this phase can significantly reduce yield.</li>
                    </ul>
                </div>
                
                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        4. Booting & Heading (900–1,200 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Flag leaf sheath swells (booting) as panicle develops within the stem.</li>
                        <li style={styles.listItem}>Panicle emerges from the stem (heading) during this sensitive phase.</li>
                        <li style={styles.listItem}>Stable environmental conditions are crucial for proper panicle emergence.</li>
                    </ul>
                </div>
                
                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        5. Flowering (1,200–1,400 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Spikelets open and pollination occurs during anthesis period.</li>
                        <li style={styles.listItem}>Timely water and temperature management crucial for successful seed set.</li>
                        <li style={styles.listItem}>High temperatures or water stress can cause significant spikelet sterility.</li>
                    </ul>
                </div>
                
                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        6. Grain Filling (1,400–1,800 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Grains transition from milky to dough stage as starch accumulates.</li>
                        <li style={styles.listItem}>Proper environmental conditions support optimal grain quality and yield.</li>
                        <li style={styles.listItem}>Peak photosynthate translocation period determines final grain weight.</li>
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
                            7. Maturation / Ripening (1,800–2,200+ GDD)
                        </h5>
                        <ul style={{...styles.list, marginLeft: '15px'}}>
                            <li style={styles.listItem}>Grain moisture content drops as the crop reaches physiological maturity.</li>
                            <li style={styles.listItem}>Once physiological maturity occurs, crop is ready for harvest operations.</li>
                            <li style={styles.listItem}>Timing affects grain quality, milling yield, and storage characteristics.</li>
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
                                    href="https://www.mdpi.com/2077-0472/12/1/59"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{color: colors.link, textDecoration: 'none', fontWeight: '500'}}
                                >
                                    MDPI – Rice growth modeling based on GDD
                                </a>
                                <span style={{fontSize: '13px', display: 'block', color: '#666', marginTop: '2px'}}>
                                    Scientific publication on rice growth modeling using growing degree day accumulation.
                                </span>
                            </li>
                            <li style={{...styles.listItem}}>
                                <a 
                                    href="https://www.ricenortheasternus.org/documents/GDD_Briefing_final.NE_USA_Rice.July2014.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{color: colors.link, textDecoration: 'none', fontWeight: '500'}}
                                >
                                    Rice Northeastern U.S. – GDD briefing PDF
                                </a>
                                <span style={{fontSize: '13px', display: 'block', color: '#666', marginTop: '2px'}}>
                                    Northeastern United States rice growing degree day briefing and thermal requirements.
                                </span>
                            </li>
                            <li style={{...styles.listItem}}>
                                <a 
                                    href="https://rice.ucanr.edu/files/288570.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{color: colors.link, textDecoration: 'none', fontWeight: '500'}}
                                >
                                    Rice UC ANR – Rice growth & development PDF
                                </a>
                                <span style={{fontSize: '13px', display: 'block', color: '#666', marginTop: '2px'}}>
                                    University of California Agriculture and Natural Resources rice development guide.
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul style={{...styles.list}}>
                            <li style={{...styles.listItem}}>
                                <a 
                                    href="https://sciresol.s3.us-east-2.amazonaws.com/IJST/Articles/2013/Issue-8/Article12.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{color: colors.link, textDecoration: 'none', fontWeight: '500'}}
                                >
                                    MDPI – Elevated temperature effect on rice phenology
                                </a>
                                <span style={{fontSize: '13px', display: 'block', color: '#666', marginTop: '2px'}}>
                                    Research on elevated temperature effects on rice phenological development stages.
                                </span>
                            </li>
                            <li style={{...styles.listItem}}>
                                <a 
                                    href="http://data.usanpn.org/geoserver-request-builder"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{color: colors.link, textDecoration: 'none', fontWeight: '500'}}
                                >
                                    U.S. National Phenology Network – AGDD maps & explanation
                                </a>
                                <span style={{fontSize: '13px', display: 'block', color: '#666', marginTop: '2px'}}>
                                    National phenology network accumulated growing degree day maps and data resources.
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RiceContent;
