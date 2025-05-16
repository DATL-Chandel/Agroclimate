import React from 'react';

const StrawberryContent = ({ isMobile, colors, styles }) => {
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
                Strawberries
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
                    <span style={{ fontWeight: '600', color: colors.primary }}>Base Temperature (T<sub>base</sub>):</span> 37.4°F (3°C)
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
            
            {/* Visual Flow Diagram for Strawberries */}
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
                    minWidth: isMobile ? '800px' : '100%',
                    gap: '8px'
                }}>
                    {[
                        { stage: 'Emergence', gdd: '100', color: '#E3F2FD' },
                        { stage: 'Leaf Development', gdd: '300', color: '#BBDEFB' },
                        { stage: 'Flower Bud Formation', gdd: '600', color: '#90CAF9' },
                        { stage: 'Flowering (Anthesis)', gdd: '900', color: '#64B5F6' },
                        { stage: 'Fruit Development', gdd: '1200', color: '#42A5F5' },
                        { stage: 'Ripening', gdd: '1500', color: '#1976D2' }
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
                        1. Emergence (~100 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Seedlings emerge from the soil.</li>
                        <li style={styles.listItem}>Initial root and leaf development begins.</li>
                        <li style={styles.listItem}>Sensitive to temperature and moisture conditions.</li>
                    </ul>
                </div>
                
                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        2. Leaf Development (~300 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Formation of multiple leaves.</li>
                        <li style={styles.listItem}>Photosynthetic capacity increases.</li>
                        <li style={styles.listItem}>Establishment of plant structure.</li>
                    </ul>
                </div>
                
                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        3. Flower Bud Formation (~600 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Initiation of flower buds within the crown.</li>
                        <li style={styles.listItem}>Requires adequate light and nutrient availability.</li>
                        <li style={styles.listItem}>Prepares the plant for reproductive phase.</li>
                    </ul>
                </div>
                
                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        4. Flowering (Anthesis) (~900 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Flowers open, allowing for pollination.</li>
                        <li style={styles.listItem}>Critical for fruit set and yield.</li>
                        <li style={styles.listItem}>Pollination by insects is essential.</li>
                    </ul>
                </div>
                
                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        5. Fruit Development (~1200 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Fruits begin to form and enlarge.</li>
                        <li style={styles.listItem}>Transition from green to white stage.</li>
                        <li style={styles.listItem}>High water and nutrient demand.</li>
                    </ul>
                </div>
                
                <div>
                    <h5 style={{
                        fontSize: isMobile ? '15px' : '16px',
                        fontWeight: '600',
                        color: colors.primary,
                        marginBottom: '8px'
                    }}>
                        6. Ripening (~1500 GDD)
                    </h5>
                    <ul style={{...styles.list, marginLeft: '15px'}}>
                        <li style={styles.listItem}>Fruits change color, indicating ripeness.</li>
                        <li style={styles.listItem}>Accumulation of sugars and flavor compounds.</li>
                        <li style={styles.listItem}>Harvest readiness is determined.</li>
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
                                    href="https://www.researchgate.net/figure/Calculated-optimal-base-temperature-T-base-and-GDD-sum-values_tbl2_297944507" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    style={{color: colors.link, textDecoration: 'none', fontWeight: '500'}}
                                >
                                    ResearchGate – Calculated optimal base temperature (T<sub>base</sub>) and GDD sum values
                                </a>
                                <span style={{fontSize: '13px', display: 'block', color: '#666', marginTop: '2px'}}>
                                    Research on base temperature and accumulated GDD values for strawberry varieties.
                                </span>
                            </li>
                            <li style={{...styles.listItem}}>
                                <a 
                                    href="https://www.scielo.org.mx/pdf/rfm/v44n3/0187-7380-rfm-44-03-349.pdf" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    style={{color: colors.link, textDecoration: 'none', fontWeight: '500'}}
                                >
                                    SciELO México – Phenology and growing degree days of Festival strawberry
                                </a>
                                <span style={{fontSize: '13px', display: 'block', color: '#666', marginTop: '2px'}}>
                                    Detailed study on Festival strawberry variety phenology and GDD requirements.
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul style={{...styles.list}}>
                            <li style={{...styles.listItem}}>
                                <a 
                                    href="https://en.wikipedia.org/wiki/BBCH-scale_%28strawberry%29" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    style={{color: colors.link, textDecoration: 'none', fontWeight: '500'}}
                                >
                                    Wikipedia (BBCH Scale for Strawberry)
                                </a>
                                <span style={{fontSize: '13px', display: 'block', color: '#666', marginTop: '2px'}}>
                                    Describes physiological stages in a coded format widely used in research and agriculture.
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StrawberryContent; 