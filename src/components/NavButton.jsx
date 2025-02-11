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
                            <path d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 0 1 9-9"></path>
                        </svg>
                        NDVI
                    </div>
                    <div 
                        style={linkStyle}
                        onClick={(e) => handleClick('/docs', e)}
                        onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
                        onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                    >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                        </svg>
                        Docs
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavButton;
