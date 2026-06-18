import React from 'react';

const WheatContent = ({ isMobile, colors, styles }) => {
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
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
                Wheat
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
                Growth Stages and GDD Criteria (Feekes Scale Approximation)
            </h4>
            
            {/* Visual Flow Diagram for Wheat */}
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
                    minWidth: isMobile ? '1200px' : '100%',
                    gap: '8px'
                }}>
                    {[
                        { stage: 'Emergence', gdd: '120', color: '#E3F2FD' },
                        { stage: 'Tillering (F2-3)', gdd: '400', color: '#BBDEFB' },
                        { stage: 'Jointing (F6)', gdd: '600', color: '#90CAF9' },
                        { stage: 'Flag Leaf (F8)', gdd: '900', color: '#64B5F6' },
                        { stage: 'Boot (F10)', gdd: '1200', color: '#42A5F5' },
                        { stage: 'Heading (F10.1-5)', gdd: '1400', color: '#2196F3' },
                        { stage: 'Flowering (F10.5.1)', gdd: '1600', color: '#1E88E5' },
                        { stage: 'Milk (F11.1)', gdd: '1800', color: '#1976D2' },
                        { stage: 'Dough (F11.2-3)', gdd: '2100', color: '#1565C0' },
                        { stage: 'Maturity (F11.4)', gdd: '2400', color: '#0D47A1' }
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
                                marginBottom: '8px',
                                padding: '2px'
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
                            {index < 9 && (
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
                        1. Emergence (~120 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>First leaf breaks through the soil surface and becomes visible.</li>
                        <li style={styles.listItem}>Seedling vigor is critical; uniform emergence leads to better stand establishment.</li>
                        <li style={styles.listItem}>Cool soil temperatures can delay emergence and reduce final plant population.</li>
                    </ul>
                </div>
                
                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        2. Tillering (Feekes 2–3) (~400 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>The plant produces side shoots (tillers) from the base.</li>
                        <li style={styles.listItem}>More tillers can increase yield potential if they survive until heading.</li>
                        <li style={styles.listItem}>Tillering is highly influenced by planting density, nitrogen availability, and temperature.</li>
                    </ul>
                </div>
                
                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        3. Jointing (Feekes 6) (~600 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>The stem begins to elongate; the first node becomes visible above the soil surface.</li>
                        <li style={styles.listItem}>Leaf sheaths become noticeably longer and stand upright.</li>
                        <li style={styles.listItem}>This is a key stage for nitrogen application and growth regulator use.</li>
                    </ul>
                </div>
                
                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        4. Flag Leaf Emergence (Feekes 8) (~900 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>The final leaf (flag leaf) becomes visible; it plays a major role in grain filling.</li>
                        <li style={styles.listItem}>Protecting the flag leaf from diseases (e.g., rust) is essential.</li>
                        <li style={styles.listItem}>Many fungicide applications are timed to this stage to protect upper canopy leaves.</li>
                    </ul>
                </div>
                
                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        5. Boot Stage (Feekes 10) (~1200 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>The developing head swells within the flag leaf sheath (the "boot").</li>
                        <li style={styles.listItem}>Swelling is noticeable and indicates that heading is near.</li>
                        <li style={styles.listItem}>Late fungicide or insecticide applications may target this stage to protect the head.</li>
                    </ul>
                </div>
                
                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        6. Heading (Feekes 10.1–10.5) (~1400 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>The wheat head (spike) begins to emerge from the boot and becomes fully visible.</li>
                        <li style={styles.listItem}>Proper weather conditions are important; cold or rainy weather can reduce grain set.</li>
                        <li style={styles.listItem}>Pollination structures (anthers) begin forming.</li>
                    </ul>
                </div>

                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        7. Flowering / Anthesis (Feekes 10.5.1) (~1600 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>The plant undergoes pollination and fertilization; yellow anthers are visible.</li>
                        <li style={styles.listItem}>Most sensitive stage to heat, drought, or frost — stress here reduces yield significantly.</li>
                        <li style={styles.listItem}>Late fungicide treatments may protect against Fusarium Head Blight (scab).</li>
                    </ul>
                </div>
                
                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        8. Milk Stage (Feekes 11.1) (~1800 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Kernels are forming and contain a milky fluid when crushed.</li>
                        <li style={styles.listItem}>High demand for water and nutrients to support grain fill.</li>
                        <li style={styles.listItem}>Leaf health remains crucial to support photosynthesis during this phase.</li>
                    </ul>
                </div>
                
                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        9. Dough Stage (Feekes 11.2–11.3) (~2100 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Kernels begin to thicken; they transition from soft dough to firm (hard) dough texture.</li>
                        <li style={styles.listItem}>Starch accumulation continues and kernels reach nearly full weight.</li>
                        <li style={styles.listItem}>Plant begins to senesce; nitrogen mobilization from leaves to grain occurs.</li>
                    </ul>
                </div>
                
                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        10. Maturity (Feekes 11.4) (~2400 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Kernels become hard and dry, turning golden brown.</li>
                        <li style={styles.listItem}>Plants dry down rapidly, and green tissue fades.</li>
                        <li style={styles.listItem}>The crop is physiologically mature and ready for harvest operations.</li>
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
                                    href="https://landresources.montana.edu/soilfertility/documents/PDF/pub/GDDPlantStagesMT200103AG.pdf" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    style={{color: colors.link, textDecoration: 'none', fontWeight: '500'}}
                                >
                                    Montana State University Extension — Using Growing Degree Days to Predict Plant Stages
                                </a>
                                <span style={{fontSize: '13px', display: 'block', color: '#666', marginTop: '2px'}}>
                                    Comprehensive guide to understanding how GDD correlates with wheat growth stages.
                                </span>
                            </li>
                            <li style={{...styles.listItem}}>
                                <a 
                                    href="https://eupdate.agronomy.ksu.edu/article/new-kansas-mesonet-tool-for-estimating-wheat-growth-stage-432-3" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    style={{color: colors.link, textDecoration: 'none', fontWeight: '500'}}
                                >
                                    Kansas State University Agronomy — New Kansas Mesonet Tool for Estimating Wheat Growth Stage
                                </a>
                                <span style={{fontSize: '13px', display: 'block', color: '#666', marginTop: '2px'}}>
                                    Explains the relationship between accumulated GDD and wheat development stages.
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul style={{...styles.list}}>
                            <li style={{...styles.listItem}}>
                                <a 
                                    href="https://ohioline.osu.edu/factsheet/agf-126" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    style={{color: colors.link, textDecoration: 'none', fontWeight: '500'}}
                                >
                                    Ohio State University Extension — Wheat Growth Stages and Associated Management
                                </a>
                                <span style={{fontSize: '13px', display: 'block', color: '#666', marginTop: '2px'}}>
                                    Detailed reference on wheat growth stages with management recommendations.
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WheatContent; 