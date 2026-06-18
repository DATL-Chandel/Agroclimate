import React from 'react';

const SorghumContent = ({ isMobile, colors, styles }) => {
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
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                    <path d="M2 17l10 5 10-5"/>
                    <path d="M2 12l10 5 10-5"/>
                </svg>
                Sorghum
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
            
            {/* Visual Flow Diagram for Sorghum */}
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
                    minWidth: isMobile ? '1000px' : '100%',
                    gap: '5px'
                }}>
                    {[
                        { stage: 'Emergence', gdd: '200', color: '#E3F2FD' },
                        { stage: 'Three-Leaf', gdd: '500', color: '#BBDEFB' },
                        { stage: 'Five-Leaf', gdd: '660', color: '#90CAF9' },
                        { stage: 'GPD', gdd: '924', color: '#64B5F6' },
                        { stage: 'Flag Leaf', gdd: '1287', color: '#42A5F5' },
                        { stage: 'Boot', gdd: '1683', color: '#2196F3' },
                        { stage: 'Heading', gdd: '1749', color: '#1E88E5' },
                        { stage: 'Flowering', gdd: '1848', color: '#1976D2' },
                        { stage: 'Soft Dough', gdd: '2211', color: '#1565C0' },
                        { stage: 'Hard Dough', gdd: '2508', color: '#0D47A1' },
                        { stage: 'Maturity', gdd: '2673', color: '#01579B' }
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
                                marginBottom: '8px'
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
                            {index < 10 && (
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
                        Stage 0: Emergence (~200 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Seedlings break through the soil surface; early growth is slow.</li>
                        <li style={styles.listItem}>Emergence typically occurs 3–10 days after planting, depending on soil temperature and moisture.</li>
                        <li style={styles.listItem}>Early growth relies on seed nutrient reserves; favorable conditions are crucial.</li>
                    </ul>
                </div>
                
                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        Stage 1: Three-Leaf Stage (~500 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Three leaves are fully expanded with visible collars.</li>
                        <li style={styles.listItem}>The growing point remains below the soil surface, offering protection against early damage.</li>
                        <li style={styles.listItem}>Occurs approximately 10–15 days after emergence.</li>
                    </ul>
                </div>
                
                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        Stage 2: Five-Leaf Stage (~660 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Five leaves are fully expanded with visible collars.</li>
                        <li style={styles.listItem}>The plant enters a period of accelerated growth; the root system expands rapidly.</li>
                        <li style={styles.listItem}>Occurs approximately 20–25 days after emergence.</li>
                    </ul>
                </div>
                
                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        Stage 3: Growing Point Differentiation (GPD) (~924 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>The growing point transitions from vegetative to reproductive development.</li>
                        <li style={styles.listItem}>Potential leaf number is determined; rapid stem elongation begins.</li>
                        <li style={styles.listItem}>Occurs approximately 30–40 days after emergence.</li>
                    </ul>
                </div>
                
                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        Stage 4: Flag Leaf Visible (~1287 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>The final leaf (flag leaf) becomes visible; it's crucial for photosynthesis during grain fill.</li>
                        <li style={styles.listItem}>Rapid stem elongation and increases in leaf area occur.</li>
                        <li style={styles.listItem}>Occurs approximately 45–50 days after emergence.</li>
                    </ul>
                </div>
                
                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        Stage 5: Boot Stage (~1683 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>The developing head is enclosed in the flag leaf sheath.</li>
                        <li style={styles.listItem}>Maximum potential head size and seed number are set.</li>
                        <li style={styles.listItem}>Occurs approximately 50–60 days after emergence.</li>
                    </ul>
                </div>
                
                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        Stage 6: Heading (~1749 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>The head begins to emerge from the boot; full emergence occurs over several days.</li>
                        <li style={styles.listItem}>Pollination structures (anthers) begin forming.</li>
                        <li style={styles.listItem}>Occurs approximately 60–65 days after emergence.</li>
                    </ul>
                </div>

                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        Stage 7: Flowering (Anthesis) (~1848 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Pollination and fertilization occur; yellow anthers are visible.</li>
                        <li style={styles.listItem}>This stage is highly sensitive to environmental stresses.</li>
                        <li style={styles.listItem}>Occurs approximately 65–70 days after emergence.</li>
                    </ul>
                </div>
                
                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        Stage 8: Soft Dough (~2211 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Kernels are forming and contain a soft, dough-like consistency.</li>
                        <li style={styles.listItem}>High demand for water and nutrients to support grain fill.</li>
                        <li style={styles.listItem}>Occurs approximately 85–90 days after emergence.</li>
                    </ul>
                </div>
                
                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        Stage 9: Hard Dough (~2508 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Kernels become firm; starch accumulation continues.</li>
                        <li style={styles.listItem}>Plant begins to senesce; nitrogen mobilization from leaves to grain occurs.</li>
                        <li style={styles.listItem}>Occurs approximately 95–100 days after emergence.</li>
                    </ul>
                </div>
                
                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        Stage 10: Physiological Maturity (Black Layer) (~2673 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>A black layer forms at the base of the kernel, indicating maturity.</li>
                        <li style={styles.listItem}>Grain moisture content is around 35%; ready for harvest operations.</li>
                        <li style={styles.listItem}>Occurs approximately 105–110 days after emergence.</li>
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
                Authoritative References
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
                                    href="https://www.bookstore.ksre.ksu.edu/pubs/MF3234.pdf" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    style={{color: colors.link, textDecoration: 'none', fontWeight: '500'}}
                                >
                                    Kansas State University Extension – Sorghum Growth and Development
                                </a>
                                <span style={{fontSize: '13px', display: 'block', color: '#666', marginTop: '2px'}}>
                                    KSRE Publication MF3234 (PDF)
                                </span>
                            </li>
                            <li style={{...styles.listItem}}>
                                <a 
                                    href="https://lubbock.tamu.edu/files/2011/10/sorghumdevstages_2.pdf" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    style={{color: colors.link, textDecoration: 'none', fontWeight: '500'}}
                                >
                                    Texas A&M AgriLife Extension – How a Sorghum Plant Develops
                                </a>
                                <span style={{fontSize: '13px', display: 'block', color: '#666', marginTop: '2px'}}>
                                    TAMU Publication (PDF)
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul style={{...styles.list}}>
                            <li style={{...styles.listItem}}>
                                <a 
                                    href="https://ipad.fas.usda.gov/cropexplorer/cropview/CropModelDefinition.aspx?crop=sorghum" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    style={{color: colors.link, textDecoration: 'none', fontWeight: '500'}}
                                >
                                    USDA Foreign Agricultural Service – Sorghum Growth Stage Model
                                </a>
                                <span style={{fontSize: '13px', display: 'block', color: '#666', marginTop: '2px'}}>
                                    USDA FAS Crop Explorer
                                </span>
                            </li>
                            <li style={{...styles.listItem}}>
                                <a 
                                    href="https://www.sorghumcheckoff.com/education/growth-and-development/" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    style={{color: colors.link, textDecoration: 'none', fontWeight: '500'}}
                                >
                                    Sorghum Checkoff Program – Growth and Development
                                </a>
                                <span style={{fontSize: '13px', display: 'block', color: '#666', marginTop: '2px'}}>
                                    Sorghum Checkoff
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SorghumContent; 