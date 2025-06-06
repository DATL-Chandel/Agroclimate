import React from 'react';

const TobaccoContent = ({ isMobile, colors, styles }) => {
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
                    <path d="M12 22c2-2 4-2 6-4 2-2 4-3.5 4-6 0-4.5-3.5-8-8-8S6 7.5 6 12c0 2.5 2 4 4 6 2 2 4 2 6 4"></path>
                    <path d="M12 22V12"></path>
                    <path d="M12 12c-1.5-1-3-1-4.5-.5s-2.5 1.5-3.5 2.5"></path>
                    <path d="M12 12c1.5-1 3-1 4.5-.5s2.5 1.5 3.5 2.5"></path>
                </svg>
                Tobacco
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
                    <span style={{ fontWeight: '600', color: colors.primary }}>Base Temperature (T<sub>base</sub>):</span> 50°F (10°C)
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
            
            {/* Visual Flow Diagram for Tobacco */}
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
                        { stage: 'Germination', gdd: '0-100', color: '#E3F2FD' },
                        { stage: 'Seedling', gdd: '100-300', color: '#BBDEFB' },
                        { stage: 'Transplanting', gdd: '300-400', color: '#90CAF9' },
                        { stage: 'Vegetative Growth', gdd: '400-900', color: '#64B5F6' },
                        { stage: 'Topping', gdd: '900-1100', color: '#42A5F5' },
                        { stage: 'Maturation', gdd: '1100-1600', color: '#1E88E5' }
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
                                color: index > 4 ? 'white' : '#333',
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
                            {index < 5 && (
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
                        1. Germination (0-100 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Seeds absorb moisture and swell, leading to the emergence of the radicle (root) and plumule (shoot).</li>
                        <li style={styles.listItem}>Optimal soil temperatures for germination range between 68°F and 86°F.</li>
                    </ul>
                </div>
                
                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        2. Seedling (100-300 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>The young plant develops cotyledons followed by the first true leaves.</li>
                        <li style={styles.listItem}>During this stage, the seedling establishes its root system and begins photosynthesis.</li>
                    </ul>
                </div>
                
                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        3. Transplanting (300-400 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Seedlings are moved to the field when they reach about 6 inches in height.</li>
                        <li style={styles.listItem}>Transplanting typically occurs when the risk of frost has passed, and soil temperatures are conducive to growth.</li>
                    </ul>
                </div>
                
                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        4. Vegetative Growth (400-900 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Rapid elongation of stems and expansion of leaves occur, enhancing the plant's photosynthetic capacity.</li>
                        <li style={styles.listItem}>Nutrient uptake intensifies during this period.</li>
                    </ul>
                </div>
                
                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        5. Topping (900-1100 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>The removal of flower buds (topping) is performed to divert the plant's energy toward leaf development.</li>
                        <li style={styles.listItem}>This process improves leaf size and quality.</li>
                    </ul>
                </div>

                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        6. Maturation (1100-1600 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Leaves reach full size with optimal chemical composition.</li>
                        <li style={styles.listItem}>Harvesting is timed to ensure leaves have the desired texture and nicotine content.</li>
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
                                    href="https://tobacco.ces.ncsu.edu/2017/02/from-the-field-agronomy-notes-vol-2-num-2/" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    style={{color: colors.link, textDecoration: 'none', fontWeight: '500'}}
                                >
                                    NC State Extension: From the Field-Agronomy Notes
                                </a>
                                <span style={{fontSize: '13px', display: 'block', color: '#666', marginTop: '2px'}}>
                                    Comprehensive guide on tobacco growth stages.
                                </span>
                            </li>
                            <li style={{...styles.listItem}}>
                                <a 
                                    href="https://www.cigarslover.com/cigars/guides/the-tobacco-plant-growth/" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    style={{color: colors.link, textDecoration: 'none', fontWeight: '500'}}
                                >
                                    CigarsLover Magazine: The Tobacco Plant Growth
                                </a>
                                <span style={{fontSize: '13px', display: 'block', color: '#666', marginTop: '2px'}}>
                                    Detailed guide on tobacco plant development stages.
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul style={{...styles.list}}>
                            <li style={{...styles.listItem}}>
                                <a 
                                    href="https://bmcplantbiol.biomedcentral.com/articles/10.1186/s12870-021-02895-w" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    style={{color: colors.link, textDecoration: 'none', fontWeight: '500'}}
                                >
                                    BMC Plant Biology: Cold Stress Effects
                                </a>
                                <span style={{fontSize: '13px', display: 'block', color: '#666', marginTop: '2px'}}>
                                    Research on temperature effects on tobacco leaf quality.
                                </span>
                            </li>
                            <li style={{...styles.listItem}}>
                                <a 
                                    href="https://edis.ifas.ufl.edu/publication/AE428" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    style={{color: colors.link, textDecoration: 'none', fontWeight: '500'}}
                                >
                                    UF IFAS Extension: Degree-Days Guide
                                </a>
                                <span style={{fontSize: '13px', display: 'block', color: '#666', marginTop: '2px'}}>
                                    Comprehensive guide on using growing degree days.
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TobaccoContent; 