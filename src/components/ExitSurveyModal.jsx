import React, { useState, useEffect } from 'react';
import { database } from '../firebase';
import { ref, set, serverTimestamp } from 'firebase/database';

const ExitSurveyModal = ({ show, onClose, uniqueUserId, locationData, currentVisitId }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const colors = {
        primary: '#1976d2',
        secondary: '#2196f3',
        accent: '#42a5f5',
        background: '#f5f9ff',
        text: '#37474f',
        border: '#e3f2fd',
        success: '#4caf50',
        warning: '#ff9800'
    };

    const styles = {
        overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            zIndex: 9999,
            display: show ? 'flex' : 'none',
            alignItems: 'center',
            justifyContent: 'center',
            padding: isMobile ? '20px' : '40px',
        },
        modal: {
            backgroundColor: 'white',
            borderRadius: isMobile ? '12px' : '16px',
            padding: isMobile ? '24px' : '32px',
            maxWidth: isMobile ? '90vw' : '500px',
            width: '100%',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)',
            position: 'relative',
            animation: show ? 'slideInUp 0.3s ease-out' : 'none',
        },
        header: {
            textAlign: 'center',
            marginBottom: isMobile ? '20px' : '24px',
        },
        title: {
            fontSize: isMobile ? '20px' : '24px',
            fontWeight: '600',
            color: colors.primary,
            marginBottom: isMobile ? '8px' : '12px',
            lineHeight: '1.3',
        },
        subtitle: {
            fontSize: isMobile ? '14px' : '16px',
            color: colors.text,
            lineHeight: '1.5',
        },
        question: {
            fontSize: isMobile ? '16px' : '18px',
            fontWeight: '500',
            color: colors.text,
            textAlign: 'center',
            marginBottom: isMobile ? '20px' : '24px',
            lineHeight: '1.4',
        },
        buttonContainer: {
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: isMobile ? '12px' : '16px',
            marginBottom: isMobile ? '16px' : '20px',
        },
        button: {
            flex: 1,
            padding: isMobile ? '14px 20px' : '16px 24px',
            borderRadius: '8px',
            border: 'none',
            fontSize: isMobile ? '15px' : '16px',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            minHeight: '48px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        yesButton: {
            backgroundColor: colors.success,
            color: 'white',
        },
        noButton: {
            backgroundColor: '#f44336',
            color: 'white',
        },
        maybeButton: {
            backgroundColor: colors.warning,
            color: 'white',
        },
        skipButton: {
            backgroundColor: 'transparent',
            color: colors.text,
            border: `1px solid ${colors.border}`,
            fontSize: isMobile ? '13px' : '14px',
            padding: isMobile ? '8px 16px' : '10px 20px',
            alignSelf: 'center',
        },
        submittingText: {
            textAlign: 'center',
            color: colors.text,
            fontSize: isMobile ? '14px' : '16px',
            padding: '20px',
        }
    };

    const handleResponse = async (response) => {
        if (isSubmitting) return;
        
        setIsSubmitting(true);
        
        try {
            const surveyData = {
                response: response,
                timestamp: serverTimestamp(),
                sessionId: currentVisitId,
                currentRoute: window.location.hash.substring(1) || '/',
                userLocation: locationData,
                deviceType: isMobile ? 'mobile' : 'desktop',
                surveyShown: true
            };
            
            await set(ref(database, `exit-survey/${uniqueUserId}`), surveyData);
            
            // Mark as completed in session storage
            sessionStorage.setItem('exitSurveyCompleted', 'true');
            
            // Close modal after brief delay
            setTimeout(() => {
                onClose();
            }, 500);
            
        } catch (error) {
            console.error('Error saving exit survey:', error);
            onClose(); // Close anyway to not block user
        }
    };

    const handleSkip = () => {
        sessionStorage.setItem('exitSurveySkipped', 'true');
        onClose();
    };

    if (!show) return null;

    return (
        <>
            <style>
                {`
                @keyframes slideInUp {
                    from {
                        transform: translateY(30px);
                        opacity: 0;
                    }
                    to {
                        transform: translateY(0);
                        opacity: 1;
                    }
                }
                `}
            </style>
            <div style={styles.overlay}>
                <div style={styles.modal}>
                    <div style={styles.header}>
                        <h2 style={styles.title}>One Quick Question</h2>
                        <p style={styles.subtitle}>Help us understand our users better</p>
                    </div>
                    
                    {isSubmitting ? (
                        <div style={styles.submittingText}>
                            Thank you for your response! 
                        </div>
                    ) : (
                        <>
                            <p style={styles.question}>
                                Are you using this tool for farming operations?
                            </p>
                            
                            <div style={styles.buttonContainer}>
                                <button
                                    style={{...styles.button, ...styles.yesButton}}
                                    onClick={() => handleResponse('yes')}
                                    onMouseEnter={(e) => {
                                        e.target.style.transform = 'translateY(-2px)';
                                        e.target.style.boxShadow = '0 6px 20px rgba(76, 175, 80, 0.3)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.transform = 'translateY(0)';
                                        e.target.style.boxShadow = 'none';
                                    }}
                                >
                                    Yes
                                </button>
                                
                                <button
                                    style={{...styles.button, ...styles.noButton}}
                                    onClick={() => handleResponse('no')}
                                    onMouseEnter={(e) => {
                                        e.target.style.transform = 'translateY(-2px)';
                                        e.target.style.boxShadow = '0 6px 20px rgba(244, 67, 54, 0.3)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.transform = 'translateY(0)';
                                        e.target.style.boxShadow = 'none';
                                    }}
                                >
                                    No
                                </button>
                                
                                <button
                                    style={{...styles.button, ...styles.maybeButton}}
                                    onClick={() => handleResponse('maybe in future')}
                                    onMouseEnter={(e) => {
                                        e.target.style.transform = 'translateY(-2px)';
                                        e.target.style.boxShadow = '0 6px 20px rgba(255, 152, 0, 0.3)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.target.style.transform = 'translateY(0)';
                                        e.target.style.boxShadow = 'none';
                                    }}
                                >
                                    Maybe in the future
                                </button>
                            </div>
                            
                            <button
                                style={styles.skipButton}
                                onClick={handleSkip}
                                onMouseEnter={(e) => {
                                    e.target.style.backgroundColor = colors.background;
                                }}
                                onMouseLeave={(e) => {
                                    e.target.style.backgroundColor = 'transparent';
                                }}
                            >
                                Skip this question
                            </button>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default ExitSurveyModal;
