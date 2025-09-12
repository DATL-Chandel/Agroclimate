import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { database } from '../firebase';
import { ref, push } from 'firebase/database';

const FeedbackForm = () => {
    const navigate = useNavigate();
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);
    const initialFormData = {
        helpfulRating: '',
        willUseAgain: '',
        userType: '',
        otherUserType: '',  
        wantCollaborate: '',
        name: '',           
        phone: '',
        email: '',
        comments: '',
    };
    const [formData, setFormData] = useState(initialFormData);
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 480);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const colors = {
        primary: '#1976d2',      // Main blue
        secondary: '#2196f3',    // Lighter blue
        accent: '#42a5f5',       // Even lighter blue for interactive elements
        background: '#f5f9ff',   // Very light blue background
        text: '#37474f',         // Dark gray text
        border: '#e3f2fd',       // Light blue border
        link: '#1976d2'          // Same as primary for consistency
    };

    const styles = {
        container: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: colors.background,
            overflowY: 'auto',
            padding: isMobile ? '10px' : '20px',
            scrollBehavior: 'smooth',
        },
        contentWrapper: {
            maxWidth: '800px',
            margin: '0 auto',
            backgroundColor: 'white',
            borderRadius: isMobile ? '8px' : '12px',
            boxShadow: '0 4px 15px rgba(25, 118, 210, 0.1)',
            padding: isMobile ? '15px' : '40px',
        },
        logo: {
            width: isMobile ? '120px' : '150px',
            height: 'auto',
            marginBottom: '20px',
            display: 'block',
            margin: '0 auto',
        },
        header: {
            textAlign: 'center',
            marginBottom: '32px',
            padding: '20px 0',
        },
        title: {
            fontSize: isMobile ? '24px' : '28px',
            color: colors.primary,
            marginBottom: '24px',
            textAlign: 'center',
            fontWeight: '600',
        },
        subtitle: {
            fontSize: isMobile ? '15px' : '16px',
            color: colors.text,
            marginBottom: '32px',
            textAlign: 'center',
            lineHeight: '1.5',
        },
        section: {
            marginBottom: isMobile ? '25px' : '30px',
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: isMobile ? '20px' : '25px',
            border: `1px solid ${colors.border}`,
            transition: 'box-shadow 0.2s',
            width: '100%',
            maxWidth: '100%',
            boxSizing: 'border-box',
            '&:hover': {
                boxShadow: '0 4px 12px rgba(25, 118, 210, 0.08)',
            }
        },
        label: {
            fontSize: isMobile ? '16px' : '18px',
            fontWeight: '500',
            color: colors.text,
            marginBottom: '12px',
            display: 'block',
        },
        required: {
            color: '#d32f2f',
            marginLeft: '4px',
        },
        selectWrapper: {
            position: 'relative',
            width: '100%',
            maxWidth: '100%',
            boxSizing: 'border-box',
        },
        select: {
            width: '100%',
            maxWidth: '100%',
            padding: '14px 16px',
            borderRadius: '8px',
            border: `2px solid ${colors.border}`,
            backgroundColor: 'white',
            fontSize: isMobile ? '15px' : '16px',
            color: colors.text,
            marginBottom: '8px',
            transition: 'all 0.2s',
            appearance: 'none',
            cursor: 'pointer',
            boxSizing: 'border-box',
            '&:hover': {
                borderColor: colors.secondary,
            },
            '&:focus': {
                borderColor: colors.primary,
                boxShadow: '0 0 0 3px rgba(25, 118, 210, 0.1)',
                outline: 'none',
            }
        },
        selectArrow: {
            position: 'absolute',
            right: '16px',
            top: '50%',
            transform: 'translateY(-50%)',
            pointerEvents: 'none',
            color: colors.primary,
        },
        radioGroup: {
            display: 'flex',
            gap: '16px',
            padding: '8px 0',
        },
        radioOption: {
            position: 'relative',
            flex: '1',
            maxWidth: '150px',
        },
        radioInput: {
            position: 'absolute',
            opacity: 0,
            width: '100%',
            height: '100%',
            cursor: 'pointer',
            zIndex: 1,
        },
        radioButton: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '12px 24px',
            backgroundColor: 'white',
            border: `2px solid ${colors.border}`,
            borderRadius: '30px',
            fontSize: isMobile ? '15px' : '16px',
            color: colors.text,
            transition: 'all 0.2s ease',
            position: 'relative',
            overflow: 'hidden',
            fontWeight: '500',
            '&:before': {
                content: '""',
                position: 'absolute',
                top: '0',
                left: '0',
                right: '0',
                bottom: '0',
                backgroundColor: colors.primary,
                opacity: '0',
                transition: 'opacity 0.2s ease',
                zIndex: -1,
            },
        },
        radioButtonActive: {
            backgroundColor: colors.background,
            borderColor: colors.primary,
            color: colors.primary,
            boxShadow: '0 2px 8px rgba(25, 118, 210, 0.15)',
        },
        input: {
            width: '100%',
            maxWidth: '100%',
            padding: '12px 16px',
            marginBottom: '8px',
            border: `2px solid ${colors.border}`,
            borderRadius: '8px',
            fontSize: isMobile ? '15px' : '16px',
            backgroundColor: '#FFFFFF',
            color: '#333333',
            transition: 'all 0.2s',
            boxSizing: 'border-box',
            '&:focus': {
                outline: 'none',
                borderColor: colors.primary,
                boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
            },
            '&::placeholder': {
                color: '#666666',
            },
        },
        textarea: {
            width: '100%',
            maxWidth: '100%',
            padding: '16px',
            borderRadius: '8px',
            border: `2px solid ${colors.border}`,
            fontSize: isMobile ? '15px' : '16px',
            color: colors.text,
            minHeight: '150px',
            resize: 'vertical',
            marginBottom: '12px',
            transition: 'all 0.2s',
            backgroundColor: 'white',
            lineHeight: '1.5',
            boxSizing: 'border-box',
            '&:hover': {
                borderColor: colors.secondary,
            },
            '&:focus': {
                borderColor: colors.primary,
                boxShadow: '0 0 0 3px rgba(25, 118, 210, 0.1)',
                outline: 'none',
            },
            '&::placeholder': {
                color: '#9e9e9e',
            }
        },
        button: {
            display: 'inline-block',
            padding: '12px 32px',
            backgroundColor: colors.primary,
            color: 'white',
            border: 'none',
            borderRadius: '6px',
            fontSize: isMobile ? '16px' : '18px',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'all 0.2s',
            '&:hover': {
                backgroundColor: colors.secondary,
                transform: 'translateY(-1px)',
                boxShadow: '0 4px 8px rgba(33, 150, 243, 0.2)',
            }
        },
        successMessage: {
            textAlign: 'center',
            color: '#4caf50',
            padding: isMobile ? '20px' : '40px',
        },
        successTitle: {
            fontSize: isMobile ? '24px' : '32px',
            color: colors.primary,
            marginBottom: '20px',
            fontWeight: '600',
        },
        successText: {
            fontSize: isMobile ? '16px' : '18px',
            color: colors.text,
        },
        starRating: {
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: isMobile ? 'flex-start' : 'center',
            gap: '10px',
            position: 'relative',
            marginTop: '8px',
        },
        stars: {
            display: 'flex',
            gap: '4px',
            order: isMobile ? 1 : 2,
        },
        ratingText: {
            color: colors.text,
            fontSize: isMobile ? '14px' : '16px',
            marginTop: isMobile ? '8px' : '0',
            marginLeft: isMobile ? '0' : '16px',
            order: isMobile ? 2 : 1,
        },
        star: {
            fontSize: isMobile ? '32px' : '36px',
            color: colors.border,
            cursor: 'pointer',
            transition: 'all 0.2s',
            '&:hover': {
                transform: 'scale(1.1)',
            }
        },
        starActive: {
            color: '#FFD700', // Golden color for filled stars
        },
        errorText: {
            color: '#d32f2f',
            fontSize: '14px',
            marginTop: '4px',
            marginBottom: '8px',
        },
        errorInput: {
            borderColor: '#d32f2f',
            '&:focus': {
                borderColor: '#d32f2f',
                boxShadow: '0 0 0 1px #d32f2f',
            },
        },
    };

    const getRatingText = (rating) => {
        switch(rating) {
            case '1': return 'Could be more helpful';
            case '2': return 'Somewhat helpful';
            case '3': return 'Quite helpful';
            case '4': return 'Very helpful';
            case '5': return 'Extremely helpful';
            default: return 'How helpful was our tool?';
        }
    };

    const StarIcon = ({ filled }) => (
        <svg 
            width="36" 
            height="36" 
            viewBox="0 0 24 24" 
            fill={filled ? '#FFD700' : 'none'}
            stroke={filled ? '#FFD700' : colors.border}
            strokeWidth="1.5"
            style={{
                transition: 'all 0.2s',
                cursor: 'pointer',
                '&:hover': {
                    transform: 'scale(1.1)',
                }
            }}
        >
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
    );

    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.helpfulRating) {
            newErrors.helpfulRating = 'Please rate your experience';
        }
        
        if (!formData.willUseAgain) {
            newErrors.willUseAgain = 'Please select whether you would use this tool again';
        }
        
        if (!formData.userType) {
            newErrors.userType = 'Please select your role';
        }
        
        if (formData.userType === 'Other' && !formData.otherUserType.trim()) {
            newErrors.otherUserType = 'Please specify your role';
        }
        
        if (!formData.wantCollaborate) {
            newErrors.wantCollaborate = 'Please select if you want to collaborate';
        }

        if (!formData.comments.trim()) {
            newErrors.comments = 'Please share your thoughts with us';
        }
        
        if (formData.wantCollaborate === 'yes') {
            if (!formData.name.trim()) {
                newErrors.name = 'Please enter your name';
            }
            if (!formData.phone.trim()) {
                newErrors.phone = 'Please enter your phone number';
            } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
                newErrors.phone = 'Please enter a valid 10-digit phone number';
            }
            if (!formData.email.trim()) {
                newErrors.email = 'Please enter your email';
            } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
                newErrors.email = 'Please enter a valid email address';
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            // Scroll to the first error
            const firstError = document.querySelector('.error-field');
            if (firstError) {
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            return;
        }

        try {
            const feedbackRef = ref(database, 'feedback');
            await push(feedbackRef, {
                ...formData,
                timestamp: new Date().toISOString(),
            });
            setSubmitted(true);
            setFormData(initialFormData);
            
            // Wait for 2 seconds before redirecting
            setTimeout(() => {
                navigate('/');  // Redirect to home page
            }, 2000);

        } catch (error) {
            console.error('Error submitting feedback:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        setErrors(prev => ({ ...prev, [name]: '' }));
    };

    if (submitted) {
        return (
            <div style={styles.container}>
                <div style={styles.contentWrapper}>
                    <div style={styles.successMessage}>
                        <h2 style={styles.successTitle}>Thank you for your feedback!</h2>
                        <p style={styles.successText}>Your response has been recorded successfully.</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div style={styles.container}>
            <div style={styles.contentWrapper}>
                <div style={styles.header}>
                    <img 
                        src="logo.png" 
                        alt="Logo" 
                        style={styles.logo}
                        onError={(e) => {
                            e.target.style.display = 'none';
                            console.error('Error loading logo');
                        }}
                    />
                    <h1 style={styles.title}>We Value Your Feedback</h1>
                    <p style={styles.subtitle}>
                        Thank you for using our Agroclimate tool. Your feedback will help us improve and better serve our agricultural community.
                    </p>
                </div>
                <form onSubmit={handleSubmit} noValidate>
                    <div style={styles.section}>
                        <label style={styles.label}>
                            How would you rate your experience with our tool?
                            <span style={styles.required}>*</span>
                        </label>
                        <div style={styles.starRating} className={errors.helpfulRating ? 'error-field' : ''}>
                            <div style={styles.stars}>
                                {[1, 2, 3, 4, 5].map((num) => (
                                    <div
                                        key={num}
                                        onClick={() => {
                                            handleChange({
                                                target: {
                                                    name: 'helpfulRating',
                                                    value: num.toString()
                                                }
                                            });
                                            setErrors({...errors, helpfulRating: ''});
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'scale(1.1)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'scale(1)';
                                        }}
                                    >
                                        <StarIcon filled={num <= parseInt(formData.helpfulRating || 0)} />
                                    </div>
                                ))}
                            </div>
                            <span style={styles.ratingText}>
                                {getRatingText(formData.helpfulRating)}
                            </span>
                        </div>
                        {errors.helpfulRating && (
                            <div style={styles.errorText}>{errors.helpfulRating}</div>
                        )}
                    </div>

                    <div style={styles.section}>
                        <label style={styles.label}>
                            Would you consider using this tool for your agricultural applications?
                            <span style={styles.required}>*</span>
                        </label>
                        <div style={styles.radioGroup} className={errors.willUseAgain ? 'error-field' : ''}>
                            <div style={styles.radioOption}>
                                <input
                                    type="radio"
                                    name="willUseAgain"
                                    value="yes"
                                    checked={formData.willUseAgain === 'yes'}
                                    onChange={(e) => {
                                        handleChange(e);
                                        setErrors({...errors, willUseAgain: ''});
                                    }}
                                    style={{
                                        ...styles.radioInput,
                                        ...(errors.willUseAgain && styles.errorInput)
                                    }}
                                />
                                <label
                                    htmlFor="willUseAgain-yes"
                                    style={{
                                        ...styles.radioButton,
                                        ...(formData.willUseAgain === 'yes' && styles.radioButtonActive),
                                        ...(errors.willUseAgain && styles.errorInput)
                                    }}
                                >
                                    Yes
                                </label>
                            </div>
                            <div style={styles.radioOption}>
                                <input
                                    type="radio"
                                    name="willUseAgain"
                                    value="no"
                                    checked={formData.willUseAgain === 'no'}
                                    onChange={(e) => {
                                        handleChange(e);
                                        setErrors({...errors, willUseAgain: ''});
                                    }}
                                    style={{
                                        ...styles.radioInput,
                                        ...(errors.willUseAgain && styles.errorInput)
                                    }}
                                />
                                <label
                                    htmlFor="willUseAgain-no"
                                    style={{
                                        ...styles.radioButton,
                                        ...(formData.willUseAgain === 'no' && styles.radioButtonActive),
                                        ...(errors.willUseAgain && styles.errorInput)
                                    }}
                                >
                                    No
                                </label>
                            </div>
                        </div>
                        {errors.willUseAgain && (
                            <div style={styles.errorText}>{errors.willUseAgain}</div>
                        )}
                    </div>

                    <div style={styles.section}>
                        <label style={styles.label}>
                            Please select your professional role:
                            <span style={styles.required}>*</span>
                        </label>
                        <div style={styles.selectWrapper} className={errors.userType ? 'error-field' : ''}>
                            <select
                                name="userType"
                                value={formData.userType}
                                onChange={(e) => {
                                    handleChange(e);
                                    setErrors({...errors, userType: ''});
                                }}
                                style={{
                                    ...styles.select,
                                    ...(errors.userType && styles.errorInput)
                                }}
                            >
                                <option value="">Select your role</option>
                                <option value="Farmer">Farmer</option>
                                <option value="Researcher">Researcher</option>
                                <option value="Ag Extension Agent">Ag Extension Agent</option>
                                <option value="Government Agency">Government Agency</option>
                                <option value="Other">Other</option>
                            </select>
                            <div style={styles.selectArrow}>▼</div>
                        </div>
                        {errors.userType && (
                            <div style={styles.errorText}>{errors.userType}</div>
                        )}
                        
                        {formData.userType === 'Other' && (
                            <div style={{ 
                                marginTop: '12px',
                                width: '100%',
                                maxWidth: '100%',
                                boxSizing: 'border-box'
                            }}>
                                <input
                                    type="text"
                                    name="otherUserType"
                                    value={formData.otherUserType}
                                    onChange={(e) => {
                                        handleChange(e);
                                        setErrors({...errors, otherUserType: ''});
                                    }}
                                    placeholder="Please specify your role"
                                    style={{
                                        ...styles.input,
                                        width: '100%',
                                        maxWidth: '100%',
                                        boxSizing: 'border-box',
                                        ...(errors.otherUserType && styles.errorInput)
                                    }}
                                    className={errors.otherUserType ? 'error-field' : ''}
                                />
                                {errors.otherUserType && (
                                    <div style={styles.errorText}>{errors.otherUserType}</div>
                                )}
                            </div>
                        )}
                    </div>

                    <div style={styles.section}>
                        <label style={styles.label}>
                            Would you be interested in collaborating with us?
                            <span style={styles.required}>*</span>
                        </label>
                        <div style={styles.radioGroup} className={errors.wantCollaborate ? 'error-field' : ''}>
                            <div style={styles.radioOption}>
                                <input
                                    type="radio"
                                    name="wantCollaborate"
                                    value="yes"
                                    checked={formData.wantCollaborate === 'yes'}
                                    onChange={(e) => {
                                        handleChange(e);
                                        setErrors({...errors, wantCollaborate: ''});
                                    }}
                                    style={{
                                        ...styles.radioInput,
                                        ...(errors.wantCollaborate && styles.errorInput)
                                    }}
                                />
                                <label
                                    htmlFor="wantCollaborate-yes"
                                    style={{
                                        ...styles.radioButton,
                                        ...(formData.wantCollaborate === 'yes' && styles.radioButtonActive),
                                        ...(errors.wantCollaborate && styles.errorInput)
                                    }}
                                >
                                    Yes
                                </label>
                            </div>
                            <div style={styles.radioOption}>
                                <input
                                    type="radio"
                                    name="wantCollaborate"
                                    value="no"
                                    checked={formData.wantCollaborate === 'no'}
                                    onChange={(e) => {
                                        handleChange(e);
                                        setErrors({...errors, wantCollaborate: ''});
                                    }}
                                    style={{
                                        ...styles.radioInput,
                                        ...(errors.wantCollaborate && styles.errorInput)
                                    }}
                                />
                                <label
                                    htmlFor="wantCollaborate-no"
                                    style={{
                                        ...styles.radioButton,
                                        ...(formData.wantCollaborate === 'no' && styles.radioButtonActive),
                                        ...(errors.wantCollaborate && styles.errorInput)
                                    }}
                                >
                                    No
                                </label>
                            </div>
                        </div>
                        {errors.wantCollaborate && (
                            <div style={styles.errorText}>{errors.wantCollaborate}</div>
                        )}
                    </div>

                    {formData.wantCollaborate === 'yes' && (
                        <div style={styles.section}>
                            <label style={styles.label}>
                                Contact Information
                                <span style={styles.required}>*</span>
                            </label>
                            <div style={{
                                marginBottom: '16px',
                                width: '100%',
                                maxWidth: '100%',
                                boxSizing: 'border-box'
                            }}>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={(e) => {
                                        handleChange(e);
                                        setErrors({...errors, name: ''});
                                    }}
                                    placeholder="Full Name"
                                    style={{
                                        ...styles.input,
                                        width: '100%',
                                        maxWidth: '100%',
                                        boxSizing: 'border-box',
                                        ...(errors.name && styles.errorInput)
                                    }}
                                    autoComplete="name"
                                    className={errors.name ? 'error-field' : ''}
                                />
                                {errors.name && (
                                    <div style={styles.errorText}>{errors.name}</div>
                                )}
                            </div>
                            <div style={{
                                marginBottom: '16px',
                                width: '100%',
                                maxWidth: '100%',
                                boxSizing: 'border-box'
                            }}>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={(e) => {
                                        const value = e.target.value.replace(/\D/g, '');
                                        if (value.length <= 10) {
                                            handleChange({
                                                target: {
                                                    name: 'phone',
                                                    value: value
                                                }
                                            });
                                            setErrors({...errors, phone: ''});
                                        }
                                    }}
                                    placeholder="Phone Number (10 digits)"
                                    style={{
                                        ...styles.input,
                                        width: '100%',
                                        maxWidth: '100%',
                                        boxSizing: 'border-box',
                                        ...(errors.phone && styles.errorInput)
                                    }}
                                    autoComplete="tel"
                                    className={errors.phone ? 'error-field' : ''}
                                />
                                {errors.phone && (
                                    <div style={styles.errorText}>{errors.phone}</div>
                                )}
                            </div>
                            <div style={{
                                marginBottom: '16px',
                                width: '100%',
                                maxWidth: '100%',
                                boxSizing: 'border-box'
                            }}>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={(e) => {
                                        handleChange(e);
                                        setErrors({...errors, email: ''});
                                    }}
                                    placeholder="Email Address"
                                    style={{
                                        ...styles.input,
                                        width: '100%',
                                        maxWidth: '100%',
                                        boxSizing: 'border-box',
                                        ...(errors.email && styles.errorInput)
                                    }}
                                    autoComplete="email"
                                    className={errors.email ? 'error-field' : ''}
                                />
                                {errors.email && (
                                    <div style={styles.errorText}>{errors.email}</div>
                                )}
                            </div>
                        </div>
                    )}

                    <div style={styles.section}>
                        <label style={styles.label}>
                            Please share any additional feedback or suggestions:
                            <span style={styles.required}>*</span>
                        </label>
                        <div style={{
                            width: '100%',
                            maxWidth: '100%',
                            boxSizing: 'border-box'
                        }}>
                            <textarea
                                name="comments"
                                value={formData.comments}
                                onChange={(e) => {
                                    handleChange(e);
                                    setErrors({...errors, comments: ''});
                                }}
                                style={{
                                    ...styles.textarea,
                                    ...(errors.comments && styles.errorInput)
                                }}
                                placeholder="We welcome your thoughts on how we can improve our tool to better serve your needs..."
                                className={errors.comments ? 'error-field' : ''}
                            />
                            {errors.comments && (
                                <div style={styles.errorText}>{errors.comments}</div>
                            )}
                        </div>
                    </div>

                    <div style={{ textAlign: 'center', marginTop: '20px' }}>
                        <button type="submit" style={styles.button}>
                            Submit Feedback
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FeedbackForm;
