import React from 'react';

const CottonContent = ({ isMobile, colors, styles }) => {
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
                    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2z"/>
                    <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/>
                </svg>
                Cotton
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
                    <span style={styles.bold}>Base Temperature (T<sub>base</sub>):</span> 60°F (15.6°C)
                </p>
                <p style={{
                    fontSize: isMobile ? '14px' : '16px',
                    lineHeight: '1.6',
                    color: colors.text
                }}>
                    <span style={styles.bold}>Temperature Cap (T<sub>cap</sub>):</span> No cap — <a href="https://www.cotton.org/beltwide/proceedings/getPDF.cfm?year=2002&paper=I038.pdf" target="_blank" rel="noopener noreferrer" style={{fontSize: '12px', color: colors.link}}>Beltwide Cotton Conference 2002</a>
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
                Growth Stages and DD60 Criteria
            </h4>

            {/* Visual Flow Diagram for Cotton */}
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
                        { stage: 'Emergence', gdd: '50-60', color: '#E3F2FD' },
                        { stage: 'First True Leaf', gdd: '140-160', color: '#BBDEFB' },
                        { stage: 'Squaring', gdd: '400-500', color: '#90CAF9' },
                        { stage: 'First Bloom', gdd: '850-950', color: '#64B5F6' },
                        { stage: 'Peak Bloom', gdd: '1350-1450', color: '#42A5F5' },
                        { stage: 'Open Boll', gdd: '1800-2000', color: '#2196F3' },
                        { stage: 'Harvest Ready', gdd: '2200-2400', color: '#1976D2' }
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
                                fontSize: '13px',
                                color: index > 4 ? 'white' : '#333',
                                marginBottom: '8px'
                            }}>
                                {item.stage}
                            </div>
                            <div style={{
                                fontSize: '12px',
                                color: colors.text,
                                textAlign: 'center'
                            }}>
                                {item.gdd} DD60
                            </div>
                            {index < 6 && (
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
                        1. Emergence (50-60 DD60s)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Cotyledons appear above soil surface</li>
                        <li style={styles.listItem}>Hypocotyl arch visible, cotyledons unfold</li>
                    </ul>
                </div>

                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        2. First True Leaf (140-160 DD60s)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>First true leaf unfolds</li>
                        <li style={styles.listItem}>Leaf fully expanded, approximately 1.5-2 inches in diameter</li>
                    </ul>
                </div>

                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        3. Squaring Initiation (400-500 DD60s)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>First flower buds (squares) appear</li>
                        <li style={styles.listItem}>Pinhead squares visible at terminal, typically 35-45 days after planting</li>
                    </ul>
                </div>

                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        4. First Bloom (850-950 DD60s)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>First white flowers appear</li>
                        <li style={styles.listItem}>White flowers visible, typically 60-70 days after planting</li>
                    </ul>
                </div>

                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        5. Peak Bloom (1350-1450 DD60s)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Maximum flowering rate</li>
                        <li style={styles.listItem}>8-10 white blooms per 25 row feet, maximum node development</li>
                    </ul>
                </div>

                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        6. Open Boll (1800-2000 DD60s)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>First bolls begin to open</li>
                        <li style={styles.listItem}>Sutures begin to crack, lint visible</li>
                    </ul>
                </div>

                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        7. Harvest Ready (2200-2400 DD60s)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>60-70% of bolls open</li>
                        <li style={styles.listItem}>Majority of bolls open, seed cotton fluffed</li>
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
                References for Cotton Growth Stages
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
                                    href="https://www.cotton.org/tech/ace/growth-and-development.cfm" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    style={{color: colors.link, textDecoration: 'none', fontWeight: '500'}}
                                >
                                    Cotton Incorporated - Growth and Development
                                </a>
                                <span style={{fontSize: '13px', display: 'block', color: '#666', marginTop: '2px'}}>
                                    Primary source for cotton growth stages and DD60 requirements
                                </span>
                            </li>
                            <li style={{...styles.listItem}}>
                                <a 
                                    href="https://www.uaex.uada.edu/farm-ranch/crops-commercial-horticulture/cotton/" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    style={{color: colors.link, textDecoration: 'none', fontWeight: '500'}}
                                >
                                    University of Arkansas - Cotton Growth and Development
                                </a>
                                <span style={{fontSize: '13px', display: 'block', color: '#666', marginTop: '2px'}}>
                                    Management recommendations by growth stage
                                </span>
                            </li>
                            <li style={{...styles.listItem}}>
                                <a 
                                    href="https://lubbock.tamu.edu/files/2011/10/cptvol13no22007.pdf" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    style={{color: colors.link, textDecoration: 'none', fontWeight: '500'}}
                                >
                                    Texas A&M AgriLife - Growth and Development – First 60 Days
                                </a>
                                <span style={{fontSize: '13px', display: 'block', color: '#666', marginTop: '2px'}}>
                                    Early-season growth stages and DD60 calculations
                                </span>
                            </li>
                            <li style={{...styles.listItem}}>
                                <a 
                                    href="http://extension.msstate.edu/publications/cotton-growth-and-development" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    style={{color: colors.link, textDecoration: 'none', fontWeight: '500'}}
                                >
                                    Mississippi State University Extension
                                </a>
                                <span style={{fontSize: '13px', display: 'block', color: '#666', marginTop: '2px'}}>
                                    Management timing recommendations
                                </span>
                            </li>
                            <li style={{...styles.listItem}}>
                                <a 
                                    href="https://www.cropscience.bayer.us/articles/dad/cotton-growth-and-development" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    style={{color: colors.link, textDecoration: 'none', fontWeight: '500'}}
                                >
                                    Bayer Crop Science - Cotton Growth and Development
                                </a>
                                <span style={{fontSize: '13px', display: 'block', color: '#666', marginTop: '2px'}}>
                                    DD60 calculation methodology and practical applications
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul style={{...styles.list}}>
                            <li style={{...styles.listItem}}>
                                <a 
                                    href="https://extension.missouri.edu/publications/g4253" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    style={{color: colors.link, textDecoration: 'none', fontWeight: '500'}}
                                >
                                    University of Missouri Extension - Cotton Harvest Aids
                                </a>
                                <span style={{fontSize: '13px', display: 'block', color: '#666', marginTop: '2px'}}>
                                    Harvest preparation guidelines
                                </span>
                            </li>
                            <li style={{...styles.listItem}}>
                                <a 
                                    href="https://cottonbugs.tamu.edu/development-and-growth-monitoring-of-the-cotton-plant/" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    style={{color: colors.link, textDecoration: 'none', fontWeight: '500'}}
                                >
                                    Texas A&M AgriLife - Development and Growth Monitoring
                                </a>
                                <span style={{fontSize: '13px', display: 'block', color: '#666', marginTop: '2px'}}>
                                    Detailed growth monitoring protocols
                                </span>
                            </li>
                            <li style={{...styles.listItem}}>
                                <a 
                                    href="https://extension.okstate.edu/programs/cotton/site-files/docs/crop_maturity_determination_handout_final_2015.pdf" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    style={{color: colors.link, textDecoration: 'none', fontWeight: '500'}}
                                >
                                    Oklahoma State University Extension - Crop Maturity Determination
                                </a>
                                <span style={{fontSize: '13px', display: 'block', color: '#666', marginTop: '2px'}}>
                                    Guidelines for determining cotton maturity
                                </span>
                            </li>
                            <li style={{...styles.listItem}}>
                                <a 
                                    href="https://extension.okstate.edu/fact-sheets/cotton-harvest-aid-considerations.html" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    style={{color: colors.link, textDecoration: 'none', fontWeight: '500'}}
                                >
                                    Oklahoma State University - Cotton Harvest Aid Considerations
                                </a>
                                <span style={{fontSize: '13px', display: 'block', color: '#666', marginTop: '2px'}}>
                                    Harvest timing based on boll maturity
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CottonContent;
