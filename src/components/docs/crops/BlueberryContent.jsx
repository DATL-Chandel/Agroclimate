import React from 'react';

const BlueberryContent = ({ isMobile, colors, styles }) => {
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
                Blueberries
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
            
            {/* Visual Flow Diagram for Blueberry */}
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
                        { stage: 'Dormant', gdd: '0', color: '#E3F2FD' },
                        { stage: 'Bud Swell', gdd: '50-100', color: '#BBDEFB' },
                        { stage: 'Green Tip', gdd: '100-200', color: '#90CAF9' },
                        { stage: 'Bud Break', gdd: '200-300', color: '#64B5F6' },
                        { stage: 'Tight Cluster', gdd: '300-400', color: '#42A5F5' },
                        { stage: 'Pink Bud', gdd: '400-500', color: '#2196F3' },
                        { stage: 'Bloom', gdd: '500-600', color: '#1E88E5' },
                        { stage: 'Petal Fall', gdd: '600-700', color: '#1976D2' },
                        { stage: 'Fruit Development', gdd: '700-1000', color: '#1565C0' },
                        { stage: 'Harvest', gdd: '1000-1200', color: '#0D47A1' }
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
                        1. Dormant (0 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Buds are in a state of rest during winter, showing no signs of growth.</li>
                        <li style={styles.listItem}>Plants require a specific number of chilling hours to break dormancy properly.</li>
                        <li style={styles.listItem}>This is an ideal time for pruning and applying dormant oil sprays.</li>
                    </ul>
                </div>
                
                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        2. Bud Swell (50-100 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Buds begin to swell as internal growth processes resume, indicating the end of dormancy.</li>
                        <li style={styles.listItem}>Scales loosen, and buds increase slightly in size.</li>
                        <li style={styles.listItem}>Last opportunity for dormant season disease control measures.</li>
                    </ul>
                </div>
                
                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        3. Green Tip (100-200 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Green leaf tissue emerges at the tips of buds, marking the onset of visible growth.</li>
                        <li style={styles.listItem}>First sign of new season growth becoming visible.</li>
                        <li style={styles.listItem}>Time to begin monitoring for early-season pests like scales and mites.</li>
                    </ul>
                </div>
                
                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        4. Bud Break (200-300 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Buds burst open, and initial leaf and shoot growth commence, leading to canopy development.</li>
                        <li style={styles.listItem}>Leaf tissue expands and begins photosynthesis.</li>
                        <li style={styles.listItem}>Critical period for initial fungicide applications to protect new growth.</li>
                    </ul>
                </div>
                
                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        5. Tight Cluster (300-400 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Flower clusters form but remain compact; individual flowers become distinguishable.</li>
                        <li style={styles.listItem}>Floral structures develop within protective bud scales.</li>
                        <li style={styles.listItem}>Susceptible to mummy berry disease; maintain protective fungicide coverage.</li>
                    </ul>
                </div>
                
                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        6. Pink Bud (400-500 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Flower buds exhibit pink coloration as corollas begin to expand, preparing for bloom.</li>
                        <li style={styles.listItem}>Flower clusters elongate, and individual flowers separate.</li>
                        <li style={styles.listItem}>Begin preparation for pollinator introduction to the field.</li>
                    </ul>
                </div>

                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        7. Bloom (500-600 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Flowers fully open, allowing for pollination; this stage is critical for fruit set.</li>
                        <li style={styles.listItem}>Effective pollination determines yield potential.</li>
                        <li style={styles.listItem}>Avoid insecticide applications that might harm pollinators; monitor for pollinators.</li>
                    </ul>
                </div>
                
                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        8. Petal Fall (600-700 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Petals drop from the flowers, and small green fruits become visible, signaling the beginning of fruit development.</li>
                        <li style={styles.listItem}>Fertilization completed; fruit development begins.</li>
                        <li style={styles.listItem}>Critical period for insect pest control (fruit fly, maggots); apply appropriate pesticides.</li>
                    </ul>
                </div>
                
                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        9. Fruit Development (700-1000 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Berries grow in size, transitioning in color from green to blue as they mature.</li>
                        <li style={styles.listItem}>Fruit undergoes rapid cell division followed by cell expansion.</li>
                        <li style={styles.listItem}>Maintain adequate soil moisture and nutrients; monitor for fruit rot pathogens.</li>
                    </ul>
                </div>
                
                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        10. Harvest (1000-1200 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Berries reach full ripeness with optimal sugar content and flavor, indicating the ideal time for harvest.</li>
                        <li style={styles.listItem}>Fruit develops full blue color and detaches easily from the stem.</li>
                        <li style={styles.listItem}>Plan harvest based on berry maturity; harvest every 5-7 days for optimal quality.</li>
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
                                    href="https://www.canr.msu.edu/blueberries/growing_blueberries/growth-stages" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    style={{color: colors.link, textDecoration: 'none', fontWeight: '500'}}
                                >
                                    Michigan State University Extension: Growth Stages - Blueberries
                                </a>
                                <span style={{fontSize: '13px', display: 'block', color: '#666', marginTop: '2px'}}>
                                    Detailed guide on blueberry growth stages and development.
                                </span>
                            </li>
                            <li style={{...styles.listItem}}>
                                <a 
                                    href="https://extension.uga.edu/publications/detail.html?number=C1294&title=blueberry-fruit-set-development-and-ripening" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    style={{color: colors.link, textDecoration: 'none', fontWeight: '500'}}
                                >
                                    University of Georgia Extension: Blueberry Fruit Set, Development and Ripening
                                </a>
                                <span style={{fontSize: '13px', display: 'block', color: '#666', marginTop: '2px'}}>
                                    Comprehensive information on blueberry fruit development.
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul style={{...styles.list}}>
                            <li style={{...styles.listItem}}>
                                <a 
                                    href="https://extension.umaine.edu/blueberries/real-time-wild-blueberry-phenology/" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    style={{color: colors.link, textDecoration: 'none', fontWeight: '500'}}
                                >
                                    University of Maine Cooperative Extension: Real-Time Wild Blueberry Phenology
                                </a>
                                <span style={{fontSize: '13px', display: 'block', color: '#666', marginTop: '2px'}}>
                                    Real-time tracking of blueberry growth stages.
                                </span>
                            </li>
                            <li style={{...styles.listItem}}>
                                <a 
                                    href="https://www.perennia.ca/wp-content/uploads/2022/05/Understanding-Growing-Degree-Days-in-Wild-Blueberry-Production.pdf" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    style={{color: colors.link, textDecoration: 'none', fontWeight: '500'}}
                                >
                                    Perennia Food and Agriculture Inc.: Understanding Growing Degree Days in Wild Blueberry Production
                                </a>
                                <span style={{fontSize: '13px', display: 'block', color: '#666', marginTop: '2px'}}>
                                    Guide on applying GDD to blueberry cultivation.
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlueberryContent; 