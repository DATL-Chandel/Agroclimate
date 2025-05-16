import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NavButton = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleClick = (path, e) => {
        e.stopPropagation(); // Prevent event from bubbling
        navigate(path);
        setIsOpen(false);
    };

    // Styles for the overlay that will block iframe interactions when menu is open
    const overlayStyle = {
        display: isMobile && isOpen ? 'block' : 'none',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 999
    };

    const containerStyle = {
        position: 'fixed',
        ...(isMobile ? {
            top: '0px',
            right: '0px',
            left: '0px', // Make it full width in mobile
            zIndex: 1001,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            height: 'auto',
            backgroundColor: '#2c3e50', // Add background color for the header
        } : {
            right: '20px',
            bottom: '20px',
            zIndex: 1000,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end'
        })
    };

    const buttonStyle = {
        backgroundColor: '#2c3e50',
        color: 'white',
        border: 'none',
        borderRadius: isMobile ? '0' : '50%',
        width: isMobile ? '100%' : '40px',
        height: isMobile ? '40px' : '40px',
        display: 'flex',
        justifyContent: isMobile ? 'space-between' : 'center',
        alignItems: 'center',
        cursor: 'pointer',
        zIndex: 1002,
        padding: isMobile ? '0 15px' : '0',
    };

    const titleStyle = {
        fontSize: '20px',
        fontWeight: '500',
        display: isMobile ? 'block' : 'none',
        margin: 0,
    };

    const menuStyle = {
        backgroundColor: '#2c3e50',
        padding: '10px',
        borderRadius: '8px',
        marginTop: '5px',
        display: isOpen ? 'flex' : 'none',
        flexDirection: 'column',
        gap: '10px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
        zIndex: 1001,
        ...(isMobile && {
            position: 'absolute',
            top: '50px',
            right: '0',
            minWidth: '200px' // Ensure menu items have enough space
        })
    };

    const linkStyle = {
        color: 'white',
        textDecoration: 'none',
        padding: '12px 16px', // Increased padding for better touch targets
        borderRadius: '4px',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        fontSize: isMobile ? '16px' : '14px' // Larger font size for mobile
    };

    const handleMenuClick = (e) => {
        e.stopPropagation(); // Prevent click from reaching the iframe
    };

    const toggleMenu = (e) => {
        e.stopPropagation();
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* Overlay to block iframe interactions when menu is open */}
            <div style={overlayStyle} onClick={() => setIsOpen(false)} />
            
            <div style={containerStyle}>
                {isMobile ? (
                    <button 
                        style={buttonStyle}
                        onClick={toggleMenu}
                        aria-label="Toggle navigation menu"
                    >
                        <span style={titleStyle}>Agroclimate Viewer & Planner</span>
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            style={{ display: 'block' }} // Add this to ensure proper SVG rendering
                        >
                            {isOpen ? (
                                <>
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </>
                            ) : (
                                <>
                                    <line x1="3" y1="12" x2="21" y2="12" />
                                    <line x1="3" y1="6" x2="21" y2="6" />
                                    <line x1="3" y1="18" x2="21" y2="18" />
                                </>
                            )}
                        </svg>
                    </button>
                ) : (
                    <button style={buttonStyle} onClick={toggleMenu}>
                        <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            style={{ display: 'block' }} // Add this to ensure proper SVG rendering
                        >
                            {isOpen ? (
                                <>
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </>
                            ) : (
                                <>
                                    <line x1="3" y1="12" x2="21" y2="12" />
                                    <line x1="3" y1="6" x2="21" y2="6" />
                                    <line x1="3" y1="18" x2="21" y2="18" />
                                </>
                            )}
                        </svg>
                    </button>
                )}
                
                <div 
                    style={menuStyle}
                    onClick={handleMenuClick}
                    onMouseEnter={() => !isMobile && setIsOpen(true)}
                    onMouseLeave={() => !isMobile && setIsOpen(false)}
                >
                    <div 
                        style={linkStyle}
                        onClick={(e) => handleClick('/', e)}
                        onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                            <polyline points="9 22 9 12 15 12 15 22"></polyline>
                        </svg>
                        Home
                    </div>
                    <div 
                        style={linkStyle}
                        onClick={(e) => handleClick('/ndvi', e)}
                        onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        NDVI Viewer
                    </div>
                    <div 
                        style={linkStyle}
                        onClick={(e) => handleClick('/spray', e)}
                        onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        Spray Planner
                    </div>
                    <div 
                        style={linkStyle}
                        onClick={(e) => handleClick('/crop-tracking', e)}
                        onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                        </svg>
                        Crop Growth Tracker
                    </div>
                    <div 
                        style={linkStyle}
                        onClick={(e) => handleClick('/crop-risk', e)}
                        onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34"></path>
                            <path d="M23 14h-3a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h3a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2z"></path>
                            <path d="M22 14l-4-4"></path>
                            <path d="M18 18l4-4"></path>
                        </svg>
                        Crop Risk Forecaster
                    </div>
                    <div 
                        style={linkStyle}
                        onClick={(e) => handleClick('/docs', e)}
                        onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                            <line x1="16" y1="13" x2="8" y2="13"></line>
                            <line x1="16" y1="17" x2="8" y2="17"></line>
                            <polyline points="10 9 9 9 8 9"></polyline>
                        </svg>
                        Knowledge Base
                    </div>
                    <div 
                        style={linkStyle}
                        onClick={(e) => handleClick('/feedback', e)}
                        onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
                        </svg>
                        Feedback
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavButton;
