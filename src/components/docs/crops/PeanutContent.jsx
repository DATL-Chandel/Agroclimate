import React from 'react';

const PeanutContent = ({ isMobile, colors, styles }) => {
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
                    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/>
                    <path d="M12 6v6l4 2"/>
                </svg>
                Peanut
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
                    <span style={styles.bold}>Base Temperature (T<sub>base</sub>):</span> 56°F (13.3°C)
                </p>
                <p style={{
                    fontSize: isMobile ? '14px' : '16px',
                    lineHeight: '1.6',
                    color: colors.text
                }}>
                    <span style={styles.bold}>Temperature Cap (T<sub>cap</sub>):</span> 95°F (35°C) — <a href="https://content.ces.ncsu.edu/pdf/peanut-growth-and-development-an/2025-01-08/11._TERMINOLOGY.pdf" target="_blank" rel="noopener noreferrer" style={{fontSize: '12px', color: colors.link}}>NC State Peanut Info 2025</a>
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

            {/* Visual Flow Diagram for Peanut */}
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
                        { stage: 'Emergence', gdd: '100-125', color: '#E3F2FD' },
                        { stage: 'Vegetative', gdd: '200-250', color: '#BBDEFB' },
                        { stage: 'Bloom (R1)', gdd: '400-500', color: '#90CAF9' },
                        { stage: 'Peg (R2)', gdd: '600-700', color: '#64B5F6' },
                        { stage: 'Pod (R3)', gdd: '800-900', color: '#42A5F5' },
                        { stage: 'Full Pod (R4)', gdd: '1100-1200', color: '#2196F3' },
                        { stage: 'Seed (R5)', gdd: '1400-1500', color: '#1E88E5' },
                        { stage: 'Full Seed (R6)', gdd: '1700-1800', color: '#1976D2' },
                        { stage: 'Maturity (R7)', gdd: '2000-2100', color: '#1565C0' },
                        { stage: 'Harvest (R8)', gdd: '2300-2400', color: '#0D47A1' }
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
                                fontSize: '12px',
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
                            {index < 9 && (
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
                        1. Emergence (100-125 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Cotyledons appear above soil surface</li>
                        <li style={styles.listItem}>Management: Ensure adequate soil moisture, scout for early pests</li>
                    </ul>
                </div>

                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        2. Vegetative/V1-V2 (200-250 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>First true leaves unfold</li>
                        <li style={styles.listItem}>Management: Complete post-emergence herbicide applications</li>
                    </ul>
                </div>

                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        3. Beginning Bloom/R1 (400-500 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Yellow flowers begin to appear</li>
                        <li style={styles.listItem}>Management: Monitor for foliar diseases, maintain soil moisture</li>
                    </ul>
            </div>

                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        4. Beginning Peg/R2 (600-700 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Pegs (gynophores) grow downward from fertilized flowers</li>
                        <li style={styles.listItem}>Management: Critical water needs period, avoid cultivation</li>
                    </ul>
                </div>

                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        5. Beginning Pod/R3 (800-900 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Pegs enter soil and begin pod development</li>
                        <li style={styles.listItem}>Management: Maintain consistent soil moisture, apply calcium if needed</li>
                    </ul>
                </div>

                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        6. Full Pod/R4 (1100-1200 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Pods reach full size but seeds are not mature</li>
                        <li style={styles.listItem}>Management: Monitor for leaf spot and white mold, apply fungicides</li>
                    </ul>
                </div>

                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        7. Beginning Seed/R5 (1400-1500 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Seeds begin filling pods</li>
                        <li style={styles.listItem}>Management: Maintain irrigation, continue disease management</li>
                    </ul>
                </div>

                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        8. Full Seed/R6 (1700-1800 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Seeds fill pod cavity, pods near full size</li>
                        <li style={styles.listItem}>Management: Monitor soil moisture, continue fungicide program</li>
                    </ul>
                </div>

                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        9. Beginning Maturity/R7 (2000-2100 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Inside of pod shell begins to show darkening</li>
                        <li style={styles.listItem}>Management: Begin maturity assessment, prepare for harvest</li>
                    </ul>
                </div>

                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        10. Harvest Maturity/R8 (2300-2400 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>70-80% of pods reach mature color</li>
                        <li style={styles.listItem}>Management: Assess maturity using hull scrape method, time harvest for optimal quality</li>
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
                References for Peanut Growth Stages
            </h4>

            <div style={{
                backgroundColor: 'white',
                borderRadius: '8px',
                padding: '15px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                marginTop: '15px'
            }}>
                <h5 style={{
                    fontSize: '15px',
                    fontWeight: '600',
                    color: colors.primary,
                    marginBottom: '10px'
                }}>
                    Resources
                </h5>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                    gap: '15px',
                }}>
                    <div>
                        <ul style={{...styles.list}}>
                            <li style={{...styles.listItem}}>
                                <a 
                                    href="https://extension.uga.edu/publications/detail.html?number=B1146" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    style={{color: colors.link, textDecoration: 'none', fontWeight: '500'}}
                                >
                                    University of Georgia Extension - Peanut Production Field Guide
                                </a>
                                <span style={{fontSize: '13px', display: 'block', color: '#666', marginTop: '2px'}}>
                                    Contains detailed information on peanut growth stages and management
                                </span>
                            </li>
                            <li style={{...styles.listItem}}>
                                <a 
                                    href="https://content.ces.ncsu.edu/peanut-information" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    style={{color: colors.link, textDecoration: 'none', fontWeight: '500'}}
                                >
                                    North Carolina State University Extension - Peanut Information
                                </a>
                                <span style={{fontSize: '13px', display: 'block', color: '#666', marginTop: '2px'}}>
                                    Includes growth stage information and GDD requirements
                                </span>
                            </li>
                            <li style={{...styles.listItem}}>
                                <a 
                                    href="https://www.aces.edu/blog/topics/crop-production/peanut-ipm-guide/" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    style={{color: colors.link, textDecoration: 'none', fontWeight: '500'}}
                                >
                                    Alabama Cooperative Extension System - Peanut IPM Guide
                                </a>
                                <span style={{fontSize: '13px', display: 'block', color: '#666', marginTop: '2px'}}>
                                    Information on growth stages and management
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul style={{...styles.list}}>
                            <li style={{...styles.listItem}}>
                                <a 
                                    href="https://sites.ext.vt.edu/newsletter-archive/peanut-production/2023.pdf" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    style={{color: colors.link, textDecoration: 'none', fontWeight: '500'}}
                                >
                                    Virginia Tech Tidewater Agricultural Research Center - Virginia Peanut Production Guide
                                </a>
                                <span style={{fontSize: '13px', display: 'block', color: '#666', marginTop: '2px'}}>
                                    Contains growth stage information
                                </span>
                            </li>
                            <li style={{...styles.listItem}}>
                                <a 
                                    href="https://edis.ifas.ufl.edu/publication/AG411" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    style={{color: colors.link, textDecoration: 'none', fontWeight: '500'}}
                                >
                                    University of Florida IFAS Extension - Methods to Evaluate Peanut Maturity for Harvest
                                </a>
                                <span style={{fontSize: '13px', display: 'block', color: '#666', marginTop: '2px'}}>
                                    Guidelines for determining peanut maturity
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PeanutContent;
