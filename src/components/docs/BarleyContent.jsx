import React from 'react';

const BarleyContent = ({ isMobile, colors, styles }) => {
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
                Barley
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
                    <span style={{ fontWeight: '600', color: colors.primary }}>Base Temperature (T<sub>base</sub>):</span> 32°F (0°C)
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
            
            {/* Visual Flow Diagram for Barley */}
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
                        { stage: 'Germination', gdd: '0-180', color: '#E3F2FD' },
                        { stage: 'Seedling', gdd: '180-384', color: '#BBDEFB' },
                        { stage: 'Tillering', gdd: '384-800', color: '#90CAF9' },
                        { stage: 'Stem Elongation', gdd: '800-1218', color: '#64B5F6' },
                        { stage: 'Booting', gdd: '1218-1500', color: '#42A5F5' },
                        { stage: 'Heading', gdd: '1500-1600', color: '#2196F3' },
                        { stage: 'Flowering', gdd: '1600-1700', color: '#1E88E5' },
                        { stage: 'Grain Filling', gdd: '1700-2000', color: '#1976D2' },
                        { stage: 'Maturity', gdd: '2000-2200', color: '#1565C0' },
                        { stage: 'Harvest', gdd: '2200+', color: '#0D47A1' }
                    ].map((item, index, array) => (
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
                                color: index > 7 ? 'white' : '#333',
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
                            {index < array.length - 1 && (
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
                        1. Germination (0-180 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Seeds absorb moisture and swell, leading to the emergence of the radicle (root) and plumule (shoot).</li>
                        <li style={styles.listItem}>Optimal soil temperatures for germination range between 40°F and 86°F.</li>
                    </ul>
                </div>
                
                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        2. Seedling (180-384 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>The coleoptile emerges, followed by the first true leaves.</li>
                        <li style={styles.listItem}>The young plant establishes its root system and begins photosynthesis.</li>
                    </ul>
                </div>
                
                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        3. Tillering (384-800 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Side shoots, or tillers, develop from the base of the main stem.</li>
                        <li style={styles.listItem}>This stage determines the potential number of grain-bearing stems.</li>
                    </ul>
                </div>
                
                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        4. Stem Elongation (800-1218 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Internodes elongate, raising the developing head above the canopy.</li>
                        <li style={styles.listItem}>Nodes become distinguishable along the stem.</li>
                    </ul>
                </div>
                
                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        5. Booting (1218-1500 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>The flag leaf sheath swells as the barley head develops inside.</li>
                        <li style={styles.listItem}>This stage is critical for determining final yield.</li>
                    </ul>
                </div>

                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        6. Heading (1500-1600 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>The barley head emerges from the flag leaf sheath.</li>
                        <li style={styles.listItem}>Pollination occurs shortly after, essential for grain set.</li>
                    </ul>
                </div>

                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        7. Flowering (1600-1700 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Fertilization of florets takes place.</li>
                        <li style={styles.listItem}>Environmental stresses during this stage can significantly impact yield.</li>
                    </ul>
                </div>

                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        8. Grain Filling (1700-2000 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Kernels accumulate starch and nutrients, increasing in size and weight.</li>
                        <li style={styles.listItem}>Adequate moisture and nutrients are vital.</li>
                    </ul>
                </div>

                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        9. Maturity (2000-2200 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Grains reach physiological maturity.</li>
                        <li style={styles.listItem}>Moisture content decreases to safe levels for harvest.</li>
                    </ul>
                </div>

                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        10. Harvest (2200+ GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Grains are dry, hard, and ready for harvest.</li>
                        <li style={styles.listItem}>Timely harvesting prevents losses due to shattering or lodging.</li>
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
                                    href="https://extension.umn.edu/growing-small-grains/spring-barley-growth-and-development-guide" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    style={{color: colors.link, textDecoration: 'none', fontWeight: '500'}}
                                >
                                    University of Minnesota Extension
                                </a>
                                <span style={{fontSize: '13px', display: 'block', color: '#666', marginTop: '2px'}}>
                                    Spring Barley Growth and Development Guide
                                </span>
                            </li>
                            <li style={{...styles.listItem}}>
                                <a 
                                    href="https://climate.umt.edu/mesonet/ag_tools/gdds/" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    style={{color: colors.link, textDecoration: 'none', fontWeight: '500'}}
                                >
                                    Montana Climate Office
                                </a>
                                <span style={{fontSize: '13px', display: 'block', color: '#666', marginTop: '2px'}}>
                                    Growing Degree Days Calculation
                                </span>
                            </li>
                            <li style={{...styles.listItem}}>
                                <a 
                                    href="https://cales.arizona.edu/forageandgrain/sites/cals.arizona.edu.forageandgrain/files/az1347-2015.pdf" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    style={{color: colors.link, textDecoration: 'none', fontWeight: '500'}}
                                >
                                    University of Arizona Cooperative Extension
                                </a>
                                <span style={{fontSize: '13px', display: 'block', color: '#666', marginTop: '2px'}}>
                                    Small Grain Growth and Development
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul style={{...styles.list}}>
                            <li style={{...styles.listItem}}>
                                <a 
                                    href="https://www.ag.ndsu.edu/sgdfs/wheat/growth_stages2.htm" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    style={{color: colors.link, textDecoration: 'none', fontWeight: '500'}}
                                >
                                    North Dakota State University Agriculture
                                </a>
                                <span style={{fontSize: '13px', display: 'block', color: '#666', marginTop: '2px'}}>
                                    Growth Stages
                                </span>
                            </li>
                            <li style={{...styles.listItem}}>
                                <a 
                                    href="https://agresearch.montana.edu/wtarc/producerinfo/agronomy-nutrient-management/Barley/IdahoSpringBarleyProdGuide.pdf" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    style={{color: colors.link, textDecoration: 'none', fontWeight: '500'}}
                                >
                                    Idaho Spring Barley Production Guide
                                </a>
                                <span style={{fontSize: '13px', display: 'block', color: '#666', marginTop: '2px'}}>
                                    Agriculture Research
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BarleyContent; 