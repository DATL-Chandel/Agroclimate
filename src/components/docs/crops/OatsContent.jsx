import React from 'react';

const OatsContent = ({ isMobile, colors, styles }) => {
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
                    <path d="M2 12h20"/>
                    <path d="M6 4l4 8-4 8"/>
                    <path d="M18 4l-4 8 4 8"/>
                </svg>
                Oats
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
                    <span style={styles.bold}>Base Temperature (T<sub>base</sub>):</span> 32°F (0°C)
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
            
            {/* Visual Flow Diagram for Oats */}
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
                    gap: '3px'
                }}>
                    {[
                        { stage: 'Germination', gdd: '0-180', color: '#E3F2FD' },
                        { stage: 'Seedling', gdd: '180-384', color: '#BBDEFB' },
                        { stage: 'Tillering', gdd: '384-800', color: '#90CAF9' },
                        { stage: 'Stem Elongation', gdd: '800-1218', color: '#64B5F6' },
                        { stage: 'Booting/Heading', gdd: '1218-1500', color: '#42A5F5' },
                        { stage: 'Flowering', gdd: '1500-1700', color: '#2196F3' },
                        { stage: 'Grain Filling', gdd: '1700-2000', color: '#1E88E5' },
                        { stage: 'Maturity', gdd: '2000-2200', color: '#1976D2' },
                        { stage: 'Harvest', gdd: '2200+', color: '#1565C0' }
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
                            {index < 8 && (
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
                        1. Germination (0–180 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>After sowing, oat seeds absorb soil moisture and begin metabolic activity.</li>
                        <li style={styles.listItem}>The coleoptile emerges from the soil, signaling the start of vegetative growth.</li>
                    </ul>
                </div>
                
                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        2. Seedling (180–384 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>True leaves emerge and photosynthesis initiates.</li>
                        <li style={styles.listItem}>The plant focuses on early shoot and root development to anchor and nourish itself.</li>
                    </ul>
                </div>
                
                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        3. Tillering (384–800 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>The plant produces tillers—secondary shoots from the base.</li>
                        <li style={styles.listItem}>This stage significantly influences yield by increasing potential grain-bearing stems.</li>
                    </ul>
                </div>
                
                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        4. Stem Elongation (800–1218 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Main stems grow rapidly upward as internodes extend.</li>
                        <li style={styles.listItem}>The flag leaf, essential for grain filling, begins to form at the top.</li>
                    </ul>
                </div>
                
                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        5. Booting/Heading (1218–1500 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>The flag leaf sheath swells as the developing panicle (grain head) pushes upward and begins to emerge.</li>
                        <li style={styles.listItem}>The crop becomes more susceptible to environmental stress.</li>
                    </ul>
                </div>
                
                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        6. Flowering (1500–1700 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Tiny oat florets open and fertilization takes place.</li>
                        <li style={styles.listItem}>This is a critical period for kernel set and yield determination.</li>
                    </ul>
                </div>
                
                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        7. Grain Filling (1700–2000 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Nutrients and sugars are mobilized to fill developing kernels.</li>
                        <li style={styles.listItem}>Kernel weight increases rapidly, and any stress may reduce yield quality.</li>
                    </ul>
                </div>
                
                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        8. Maturity (2000–2200 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>The plant enters senescence and kernels become firm.</li>
                        <li style={styles.listItem}>Moisture content declines to safe post-harvest levels.</li>
                    </ul>
                </div>
                
                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        9. Harvest (2200+ GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>When kernel moisture is sufficiently low (typically 12–14%), the crop is harvested.</li>
                        <li style={styles.listItem}>Harvesting is done using a combine or forage system.</li>
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
                References for Oats Growth Stages
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
                                    href="https://www.hutton.ac.uk/sites/default/files/files/publications/Oat-Growth-Guide.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{color: colors.link, textDecoration: 'none', fontWeight: '500'}}
                                >
                                    James Hutton Institute – Oat Growth Guide (GS10–GS91)
                                </a>
                                <span style={{fontSize: '13px', display: 'block', color: '#666', marginTop: '2px'}}>
                                    Comprehensive oat growth guide covering growth stages from GS10 to GS91.
                                </span>
                            </li>
                            <li style={{...styles.listItem}}>
                                <a 
                                    href="https://blog.pestprophet.com/how-to-use-the-oat-growing-degree-day-model/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{color: colors.link, textDecoration: 'none', fontWeight: '500'}}
                                >
                                    Pest Prophet Blog – Using the Oat GDD Model
                                </a>
                                <span style={{fontSize: '13px', display: 'block', color: '#666', marginTop: '2px'}}>
                                    Practical guide on using growing degree day models for oat management.
                                </span>
                            </li>
                            <li style={{...styles.listItem}}>
                                <a 
                                    href="https://extension.okstate.edu/fact-sheets/managing-spring-planted-oats-for-hay-production.html"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{color: colors.link, textDecoration: 'none', fontWeight: '500'}}
                                >
                                    Oklahoma State University – Managing Spring-Planted Oats for Hay Production
                                </a>
                                <span style={{fontSize: '13px', display: 'block', color: '#666', marginTop: '2px'}}>
                                    Extension guide for spring-planted oats management for hay production.
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul style={{...styles.list}}>
                            <li style={{...styles.listItem}}>
                                <a 
                                    href="https://practicalfarmers.org/wp-content/uploads/2018/10/OatProductionBook-2016-1-1.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{color: colors.link, textDecoration: 'none', fontWeight: '500'}}
                                >
                                    Practical Farmers of Iowa – Oat Production Guide
                                </a>
                                <span style={{fontSize: '13px', display: 'block', color: '#666', marginTop: '2px'}}>
                                    Comprehensive oat production guide for farmers in Iowa and similar regions.
                                </span>
                            </li>
                            <li style={{...styles.listItem}}>
                                <a 
                                    href="https://extension.umn.edu/small-grains-harvest-and-storage/harvesting-small-grains-forage"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{color: colors.link, textDecoration: 'none', fontWeight: '500'}}
                                >
                                    University of Minnesota Extension – Harvesting Small Grains for Forage
                                </a>
                                <span style={{fontSize: '13px', display: 'block', color: '#666', marginTop: '2px'}}>
                                    Guide for harvesting small grains including oats for forage purposes.
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OatsContent; 