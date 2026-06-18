import React from 'react';

const SquashContent = ({ isMobile, colors, styles }) => {
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
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
                    <path d="M8 12h8M12 8v8"/>
                    <circle cx="6" cy="6" r="2"/>
                    <circle cx="18" cy="18" r="2"/>
                </svg>
                Squash
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
            
            {/* Visual Flow Diagram for Squash */}
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
                        { stage: 'Germination', gdd: '0-100', color: '#E3F2FD' },
                        { stage: 'Seedling', gdd: '100-200', color: '#BBDEFB' },
                        { stage: 'Vine/Leaf Growth', gdd: '200-400', color: '#90CAF9' },
                        { stage: 'Flowering', gdd: '400-600', color: '#64B5F6' },
                        { stage: 'Fruit Set', gdd: '600-800', color: '#42A5F5' },
                        { stage: 'Fruit Development', gdd: '800-1200', color: '#2196F3' },
                        { stage: 'Maturation/Harvest', gdd: '1200-1600+', color: '#1976D2' }
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
                        1. Germination (0–100 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Seeds absorb moisture and sprout with radicle emerging first.</li>
                        <li style={styles.listItem}>Soil temperatures must stay above ~60°F for successful germination.</li>
                        <li style={styles.listItem}>Warm soil conditions are critical for uniform seed sprouting.</li>
                    </ul>
                </div>
                
                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        2. Seedling (100–200 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Cotyledons open and first true leaves appear above ground.</li>
                        <li style={styles.listItem}>Photosynthesis begins as young plant establishes root system.</li>
                        <li style={styles.listItem}>Vulnerable stage requiring protection from frost and pests.</li>
                    </ul>
                </div>
                
                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        3. Vine/Leaf Growth (200–400 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Vines quickly spread and produce abundant foliage rapidly.</li>
                        <li style={styles.listItem}>Forming canopy that supports future flower and fruit development.</li>
                        <li style={styles.listItem}>Critical period for establishing strong vegetative framework.</li>
                    </ul>
                </div>
                
                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        4. Flowering (400–600 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Male and female blossoms appear on the same plant.</li>
                        <li style={styles.listItem}>Effective pollination by insects is necessary for successful fruit set.</li>
                        <li style={styles.listItem}>Weather conditions affect pollinator activity and flower viability.</li>
                    </ul>
                </div>
                
                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        5. Fruit Set (600–800 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Fertilized flowers begin forming small squash fruits successfully.</li>
                        <li style={styles.listItem}>Initial fruit development and cell division starts during this phase.</li>
                        <li style={styles.listItem}>Adequate water and nutrients essential for proper fruit initiation.</li>
                    </ul>
                </div>
                
                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        6. Fruit Development (800–1,200 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Squashes expand rapidly in size through cell expansion.</li>
                        <li style={styles.listItem}>Fruits accumulate sugars and mature physically during this period.</li>
                        <li style={styles.listItem}>Peak water and nutrient demands for optimal fruit sizing.</li>
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
                            7. Maturation/Harvest (1,200–1,600+ GDD)
                        </h5>
                        <ul style={{...styles.list, marginLeft: '15px'}}>
                            <li style={styles.listItem}>Fruits reach peak size and hardness for harvest readiness.</li>
                            <li style={styles.listItem}>Summer types picked early while tender, winter types when rind tough.</li>
                            <li style={styles.listItem}>Harvest timing affects storage life and eating quality significantly.</li>
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
                                    href="https://extension.umn.edu/vegetables/growing-summer-squash-and-zucchini"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{color: colors.link, textDecoration: 'none', fontWeight: '500'}}
                                >
                                    University of Minnesota Extension – Growing summer squash and zucchini
                                </a>
                                <span style={{fontSize: '13px', display: 'block', color: '#666', marginTop: '2px'}}>
                                    Comprehensive guide to summer squash and zucchini cultivation practices.
                                </span>
                            </li>
                            <li style={{...styles.listItem}}>
                                <a 
                                    href="http://www.jofamericanscience.org/journals/am sci/am0910/039_20703am0910_302_307.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{color: colors.link, textDecoration: 'none', fontWeight: '500'}}
                                >
                                    Journal of American Science – Squash GDD & evapotranspiration study (Egypt)
                                </a>
                                <span style={{fontSize: '13px', display: 'block', color: '#666', marginTop: '2px'}}>
                                    Research on squash growing degree days and water requirements in arid conditions.
                                </span>
                            </li>
                            <li style={{...styles.listItem}}>
                                <a 
                                    href="https://extension.usu.edu/yardandgarden/research/summer-and-winter-squash-in-the-garden"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{color: colors.link, textDecoration: 'none', fontWeight: '500'}}
                                >
                                    USU Extension – How to Grow Summer and Winter Squash
                                </a>
                                <span style={{fontSize: '13px', display: 'block', color: '#666', marginTop: '2px'}}>
                                    Utah State University extension guide for both summer and winter squash varieties.
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul style={{...styles.list}}>
                            <li style={{...styles.listItem}}>
                                <a 
                                    href="https://extension.uga.edu/publications/detail.html?number=C993&title=homegrown-summer-and-winter-squash"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{color: colors.link, textDecoration: 'none', fontWeight: '500'}}
                                >
                                    University of Georgia Extension – Homegrown Summer and Winter Squash
                                </a>
                                <span style={{fontSize: '13px', display: 'block', color: '#666', marginTop: '2px'}}>
                                    Georgia Extension comprehensive guide to growing summer and winter squash varieties.
                                </span>
                            </li>
                            <li style={{...styles.listItem}}>
                                <a 
                                    href="https://www.researchgate.net/publication/274953939_Comparing_Four_Different_Squash_Hybrids_on_Growing_Degree_Days_GDD_Bases"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{color: colors.link, textDecoration: 'none', fontWeight: '500'}}
                                >
                                    ResearchGate – Comparing squash hybrids with GDD
                                </a>
                                <span style={{fontSize: '13px', display: 'block', color: '#666', marginTop: '2px'}}>
                                    Scientific research comparing different squash hybrid performance using GDD analysis.
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SquashContent; 