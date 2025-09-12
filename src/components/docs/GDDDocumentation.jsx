import React, { useState, useEffect } from 'react';
import SorghumContent from './SorghumContent';
import SoybeanContent from './SoybeanContent';
import StrawberryContent from './StrawberryContent';
import WheatContent from './WheatContent';
import AppleContent from './AppleContent';
import GrapeContent from './GrapeContent';
import TomatoContent from './TomatoContent';
import WatermelonContent from './WatermelonContent';
import BlueberryContent from './BlueberryContent';
import SweetCornContent from './SweetCornContent';
import BroccoliContent from './BroccoliContent';
import TobaccoContent from './TobaccoContent';
import PumpkinContent from './PumpkinContent';
import GreenBeanContent from './GreenBeanContent';
import AlmondContent from './AlmondContent';
import BarleyContent from './BarleyContent';
import AlfalfaContent from './AlfalfaContent';
import CabbageContent from './CabbageContent';
import CanolaContent from './CanolaContent';
import CantaloupeContent from './CantaloupeContent';
import CarrotContent from './CarrotContent';
import CauliflowerContent from './CauliflowerContent';
import CherryContent from './CherryContent';
import CitrusContent from './CitrusContent';
import CranberryContent from './CranberryContent';
import DryBeanContent from './DryBeanContent';
import HempContent from './HempContent';
import LettuceContent from './LettuceContent';
import OatsContent from './OatsContent';
import OnionContent from './OnionContent';
import PeachContent from './PeachContent';
import PecanContent from './PecanContent';
import PeasContent from './PeasContent';
import PeppersContent from './PeppersContent';
import PlumsContent from './PlumsContent';
import PotatoContent from './PotatoContent';
import RiceContent from './RiceContent';
import SquashContent from './SquashContent';
import SugarBeetContent from './SugarBeetContent';
import SunflowerContent from './SunflowerContent';
import SweetPotatoContent from './SweetPotatoContent';

const GDDDocumentation = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);
    const [selectedCrop, setSelectedCrop] = useState('corn');
    const [searchTerm, setSearchTerm] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Crop options array
    const cropOptions = [
        { value: 'alfalfa', label: 'Alfalfa' },
        { value: 'almond', label: 'Almond' },
        { value: 'apple', label: 'Apple' },
        { value: 'barley', label: 'Barley' },
        { value: 'blueberry', label: 'Blueberry' },
        { value: 'broccoli', label: 'Broccoli' },
        { value: 'cabbage', label: 'Cabbage' },
        { value: 'canola', label: 'Canola' },
        { value: 'cantaloupe', label: 'Cantaloupe' },
        { value: 'Carrot', label: 'Carrot' },
        { value: 'Cauliflower', label: 'Cauliflower' },
        { value: 'Cherry', label: 'Cherry' },
        { value: 'Citrus', label: 'Citrus' },
        { value: 'corn', label: 'Corn' },
        { value: 'cotton', label: 'Cotton' },
        { value: 'cranberry', label: 'Cranberry' },
        { value: 'drybean', label: 'Dry Bean' },
        { value: 'grape', label: 'Grape' },
        { value: 'greenbean', label: 'Green Bean' },
        { value: 'hemp', label: 'Hemp' },
        { value: 'lettuce', label: 'Lettuce' },
        { value: 'oats', label: 'Oats' },
        { value: 'onion', label: 'Onion' },
        { value: 'peach', label: 'Peach' },
        { value: 'peanut', label: 'Peanut' },
        { value: 'peas', label: 'Peas' },
        { value: 'pecan', label: 'Pecan' },
        { value: 'peppers', label: 'Peppers' },
        { value: 'plums', label: 'Plums' },
        { value: 'potato', label: 'Potato' },
        { value: 'pumpkin', label: 'Pumpkin' },
        { value: 'rice', label: 'Rice' },
        { value: 'sorghum', label: 'Sorghum' },
        { value: 'soybean', label: 'Soybean' },
        { value: 'squash', label: 'Squash' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'sugarbeet', label: 'Sugar Beet' },
        { value: 'sunflower', label: 'Sunflower' },
        { value: 'sweetcorn', label: 'Sweet Corn' },
        { value: 'sweetpotato', label: 'Sweet Potato' },
        { value: 'tobacco', label: 'Tobacco' },
        { value: 'tomato', label: 'Tomato' },
        { value: 'watermelon', label: 'Watermelon' },
        { value: 'wheat', label: 'Wheat' }
    ];

    // Filter crops based on search term
    const filteredCrops = cropOptions.filter(crop =>
        crop.label.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Get selected crop label
    const selectedCropLabel = cropOptions.find(crop => crop.value === selectedCrop)?.label || '';

    // Handle crop selection
    const handleCropSelect = (cropValue, cropLabel) => {
        setSelectedCrop(cropValue);
        setSearchTerm('');
        setIsDropdownOpen(false);
    };

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 480);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.crop-dropdown')) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const colors = {
        primary: '#2c3e50',
        secondary: '#34495e',
        accent: '#3498db',
        background: '#f8f9fa',
        text: '#2c3e50',
        border: '#e9ecef',
        link: '#3498db'
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
            maxWidth: '1200px',
            margin: '0 auto',
            backgroundColor: 'white',
            borderRadius: isMobile ? '8px' : '12px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            padding: isMobile ? '15px' : '40px',
        },
        header: {
            textAlign: 'center',
            marginBottom: isMobile ? '20px' : '40px',
            position: 'relative',
            padding: isMobile ? '10px 0' : '20px 0',
        },
        title: {
            fontSize: isMobile ? '24px' : '32px',
            color: colors.primary,
            marginBottom: isMobile ? '10px' : '20px',
            fontWeight: '600',
            lineHeight: '1.3',
        },
        section: {
            marginBottom: isMobile ? '25px' : '40px',
        },
        sectionTitle: {
            fontSize: isMobile ? '20px' : '24px',
            color: colors.primary,
            marginBottom: isMobile ? '15px' : '20px',
            fontWeight: '600',
        },
        subsection: {
            marginBottom: isMobile ? '20px' : '30px',
            padding: isMobile ? '15px' : '20px',
            backgroundColor: colors.background,
            borderRadius: '8px',
        },
        subsectionTitle: {
            fontSize: isMobile ? '16px' : '20px',
            color: colors.secondary,
            marginBottom: isMobile ? '10px' : '15px',
            fontWeight: '500',
        },
        list: {
            listStyle: 'none',
            padding: 0,
            margin: 0,
        },
        listItem: {
            marginBottom: isMobile ? '8px' : '12px',
            fontSize: isMobile ? '14px' : '16px',
            lineHeight: '1.6',
            color: colors.text,
            paddingLeft: '20px',
            position: 'relative',
            '&::before': {
                content: '"•"',
                position: 'absolute',
                left: '0',
                color: colors.accent,
            },
        },
        bold: {
            fontWeight: '600',
            color: colors.primary,
        },
        footer: {
            marginTop: isMobile ? '30px' : '50px',
            textAlign: 'center',
            color: colors.secondary,
            fontSize: isMobile ? '12px' : '14px',
        },
        table: {
            width: '100%',
            overflowX: 'auto',
            display: 'block',
            WebkitOverflowScrolling: 'touch',
            marginBottom: isMobile ? '15px' : '20px',
            fontSize: isMobile ? '13px' : '14px',
        },
        subsectionIcon: {
            minWidth: isMobile ? '20px' : '24px',
            height: isMobile ? '20px' : '24px',
            marginRight: isMobile ? '8px' : '12px',
            color: colors.accent,
        },
        paragraph: {
            fontSize: isMobile ? '12px' : '14px',
            lineHeight: '1.6',
            color: colors.text,
            maxWidth: '800px',
            margin: '0 auto',
            marginBottom: isMobile ? '15px' : '20px',
        }
    };

    const SubsectionTitle = ({ icon, children }) => (
        <h3 style={{
            ...styles.subsectionTitle,
            display: 'flex',
            alignItems: 'center',
        }}>
            <span style={styles.subsectionIcon}>{icon}</span>
            <span style={{
                flex: 1,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: isMobile ? 'normal' : 'nowrap',
                lineHeight: isMobile ? '1.3' : '1.5',
            }}>{children}</span>
        </h3>
    );

    return (
        <>
            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
            <header style={styles.header}>

                    <h1 style={styles.title}>Crop Growth Tracking</h1>
                    <p style={{
                        fontSize: isMobile ? '14px' : '16px',
                        lineHeight: '1.6',
                        color: colors.text,
                        maxWidth: '800px',
                        margin: '0 auto',
                        marginBottom: isMobile ? '15px' : '20px',
                    }}>
                        Welcome to the comprehensive guide for the Crop Growth Tracking App. 
                        This documentation will help you understand and utilize all the features effectively.
                    </p>
                </header>

                <div style={styles.section}>
                    <h2 style={styles.sectionTitle}>1. Overview</h2>
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '30px',
                        flexWrap: 'wrap',
                        marginTop: '20px'
                    }}>
                        <div style={{
                            flex: '0 0 300px',
                            maxWidth: '100%',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <img 
                                src="/Agroclimate/logo.png"
                                alt="Agroclimate Logo"
                                style={{
                                    maxWidth: '100%',
                                    height: 'auto',
                                    borderRadius: '8px',
                                    boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                                }}
                            />
                        </div>
                        <div style={{
                            flex: '1 1 500px',
                            fontSize: isMobile ? '14px' : '16px',
                            lineHeight: '1.6',
                            color: '#333'
                        }}>
                           The Crop Growth Tracker is a lightweight, focused application built using Google Earth Engine (GEE) to help users monitor crop growth using Growing Degree Days (GDD). It enables farmers, researchers, and agricultural planners to estimate heat accumulation and crop development phases by selecting crop types, defining custom field locations, and specifying growth periods (including forecasted days). The tool uses both historical and forecast temperature data to visualize GDD trends, allowing better planning for irrigation, fertilization, pest control, and harvest readiness.
                        </div>
                    </div>
                </div>

                <div style={styles.section}>
                    <h2 style={styles.sectionTitle}>2. Key Features</h2>
                    <ul style={styles.list}>
                        <li style={styles.listItem}><span style={styles.bold}>Field Selection & Data Management:</span> Users can draw up to 5 custom fields, assign field names, and manage geometry using a built-in map drawing tool.</li>
                        <li style={styles.listItem}><span style={styles.bold}>GDD Calculation:</span> Calculates daily and cumulative Growing Degree Days (GDD) based on crop-specific base temperatures and capped max temperatures.</li>
                        <li style={styles.listItem}><span style={styles.bold}>Custom Time Range:</span> Allows selection of any date window including historical and up to 16-day forecasted temperature data.</li>
                        <li style={styles.listItem}><span style={styles.bold}>Cumulative GDD Visualization:</span> Displays a clear, color-coded line chart showing GDD trends for each field across the selected duration.</li>
                        <li style={styles.listItem}><span style={styles.bold}>Growth Stage Analysis:</span> Maps current GDD to crop-specific phenological stages and provides actionable agronomic guidance.</li>
                    </ul>
                </div>

                <div style={styles.section}>
                    <h2 style={styles.sectionTitle}>3. Functional Components</h2>
                    
                    <div style={styles.subsection}>
                        <SubsectionTitle icon={
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#3498db' }}>
                                <path d="M3 3h18v18H3z"/>
                                <path d="M8 12h8"/>
                                <path d="M12 8v8"/>
                            </svg>
                        }>
                            1. Field Selection & Data Management
                        </SubsectionTitle>
                        <ul style={styles.list}>
                            <li style={styles.listItem}>Users can choose to analyze up to <span style={styles.bold}>5 custom fields</span> using an intuitive field count dropdown.</li>
                            <li style={styles.listItem}>A <span style={styles.bold}>polygon drawing tool</span> allows users to mark their crop fields directly on the interactive map.</li>
                            <li style={styles.listItem}>Each drawn field is:
                                <ul style={{...styles.list, marginLeft: '20px', marginTop: '5px'}}>
                                    <li style={{...styles.listItem, marginBottom: '5px'}}>Automatically named (e.g., Field 1, Field 2)</li>
                                    <li style={{...styles.listItem, marginBottom: '5px'}}>Stored as a GEE FeatureCollection</li>
                                    <li style={{...styles.listItem, marginBottom: '5px'}}>Colored distinctly to track separately on the chart</li>
                                </ul>
                            </li>
                            <li style={styles.listItem}>A <span style={styles.bold}>legend box</span> displays the field-color mapping and updates in real-time.</li>
                            <li style={styles.listItem}>Validation ensures that users draw the specified number of fields before continuing.</li>
                            <li style={styles.listItem}>A <span style={styles.bold}>Reset button</span> clears all fields, dropdowns, and results, enabling fresh analysis anytime.</li>
                        </ul>
                    </div>

                    <div style={styles.subsection}>
                        <SubsectionTitle icon={
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#3498db' }}>
                                <circle cx="12" cy="12" r="10"/>
                                <path d="M12 6v6l4 2"/>
                            </svg>
                        }>
                            2. GDD over Selected Duration
                        </SubsectionTitle>
                        <ul style={styles.list}>
                            {/* <li style={styles.listItem}>The tool calculates <span style={styles.bold}>Growing Degree Days (GDD)</span> using this formula:
                                <div style={{backgroundColor: '#f0f0f0', padding: '8px 12px', borderRadius: '4px', margin: '8px 0', fontFamily: 'monospace'}}>
                                    GDD = max( ( (TMAX + TMIN)/2 ) - TBASE , 0 )
                                </div>
                            </li> */}
                            <li style={styles.listItem}><span style={styles.bold}>TMAX is capped at 86°F; TMIN is floored at TBASE</span>, which is specific to each crop.</li>
                            <li style={styles.listItem}>The temperature data is fetched from:
                                <ul style={{...styles.list, marginLeft: '20px', marginTop: '5px'}}>
                                    <li style={{...styles.listItem, marginBottom: '5px'}}><span style={styles.bold}>NASA SMAP</span> (historical temperature data)</li>
                                    <li style={{...styles.listItem, marginBottom: '5px'}}><span style={styles.bold}>NOAA GFS</span> (forecasted temperature for up to 16 days ahead)</li>
                                </ul>
                            </li>
                            <li style={styles.listItem}>Users can select the crop (from a list of 45+) and define the <span style={styles.bold}>start and end dates</span>.</li>
                            <li style={styles.listItem}>The selected range may include <span style={styles.bold}>future forecast data</span>, enabling prediction.</li>
                            <li style={styles.listItem}>After loading, the tool displays a <span style={styles.bold}>cumulative GDD chart</span>, with one line per field.</li>
                            <li style={styles.listItem}>If the selected date range includes future days, a red <span style={styles.bold}>Forecast Warning</span> is displayed.</li>
                        </ul>
                    </div>

                    <div style={styles.subsection}>
                        <SubsectionTitle icon={
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#3498db' }}>
                                <path d="M12 2v8l4 4-4 4v4"/>
                                <path d="M2 12h20"/>
                            </svg>
                        }>
                            3. Growth Stages Analysis
                        </SubsectionTitle>
                        <p style={{
                            fontSize: isMobile ? '14px' : '16px',
                            lineHeight: '1.6',
                            color: colors.text,
                            marginBottom: '15px'
                        }}>
                            The tool provides a comprehensive phenological analysis by mapping cumulative GDD values to crop-specific growth stages. It enables users to understand how crops have progressed or are expected to progress based on both historical and forecast temperature data.
                        </p>

                        <div style={{marginLeft: '20px', marginTop: '20px', marginBottom: '20px'}}>
                            <h4 style={{
                                fontSize: isMobile ? '14px' : '16px',
                                fontWeight: '600',
                                color: colors.primary,
                                marginBottom: '10px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px'
                            }}>
                                <span>3.1 Stage Reference Table</span>
                            </h4>
                            <p style={{
                                fontSize: isMobile ? '14px' : '16px',
                                lineHeight: '1.6',
                                color: colors.text,
                                marginBottom: '15px'
                            }}>
                                For selected crops (e.g., Corn, Cotton, Peanut, Soybean, Sorghum, Wheat, Strawberries, Apple, Grape, Tomato, Watermelon, Blueberry), the tool displays a <span style={styles.bold}>predefined table</span> containing:
                            </p>
                            <ul style={styles.list}>
                                <li style={styles.listItem}><span style={styles.bold}>Stage name</span> (e.g., "Emergence", "Silking", "Harvest Maturity")</li>
                                <li style={styles.listItem}><span style={styles.bold}>GDD threshold</span> for stage transition</li>
                                <li style={styles.listItem}><span style={styles.bold}>Brief stage description</span> outlining developmental milestones</li>
                            </ul>
                            <p style={{
                                fontSize: isMobile ? '14px' : '16px',
                                lineHeight: '1.6',
                                color: colors.text,
                                marginBottom: '15px',
                                marginTop: '15px'
                            }}>
                                This table appears below the GDD chart and serves as a <span style={styles.bold}>visual guide</span> for interpreting crop progress. The data for these thresholds is hardcoded in your tool for each crop.
                            </p>
                        </div>

                        <div style={{marginLeft: '20px', marginTop: '20px', marginBottom: '20px'}}>
                            <h4 style={{
                                fontSize: isMobile ? '14px' : '16px',
                                fontWeight: '600',
                                color: colors.primary,
                                marginBottom: '10px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px'
                            }}>
                                <span>3.2 Crop Status Update</span>
                            </h4>
                            <p style={{
                                fontSize: isMobile ? '14px' : '16px',
                                lineHeight: '1.6',
                                color: colors.text,
                                marginBottom: '15px'
                            }}>
                                The tool dynamically identifies and highlights the <span style={styles.bold}>current growth stage</span> of the crop based on the selected date range and cumulative GDD:
                            </p>
                            <ul style={styles.list}>
                                <li style={styles.listItem}>If the date range includes the <span style={styles.bold}>current or future date</span>, it uses real-time and forecast data to <span style={styles.bold}>project the current stage</span>.</li>
                                <li style={styles.listItem}>If the range is entirely <span style={styles.bold}>in the past</span>, it uses historical data to determine the <span style={styles.bold}>last completed stage</span>.</li>
                                <li style={styles.listItem}>The stage is <span style={styles.bold}>updated live</span> upon any change in crop, field, or date selection, helping users answer: "Where is my crop right now in its growth journey?"</li>
                            </ul>
                            <p style={{
                                fontSize: isMobile ? '14px' : '16px',
                                lineHeight: '1.6',
                                color: colors.text,
                                marginBottom: '15px',
                                marginTop: '15px'
                            }}>
                                This update is shown as a labeled section above the growth stage table.
                            </p>
                        </div>

                        <div style={{marginLeft: '20px', marginTop: '20px', marginBottom: '20px'}}>
                            <h4 style={{
                                fontSize: isMobile ? '14px' : '16px',
                                fontWeight: '600',
                                color: colors.primary,
                                marginBottom: '10px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px'
                            }}>
                                <span>3.3 Important Dates for Field Checks</span>
                            </h4>
                            <p style={{
                                fontSize: isMobile ? '14px' : '16px',
                                lineHeight: '1.6',
                                color: colors.text,
                                marginBottom: '15px'
                            }}>
                                The tool pinpoints <span style={styles.bold}>key calendar dates</span> on which important GDD milestones (growth stages) are reached.
                            </p>
                            <ul style={styles.list}>
                                <li style={styles.listItem}>These are derived by matching <span style={styles.bold}>cumulative GDD per day with stage thresholds</span></li>
                                <li style={styles.listItem}>The corresponding dates act as <span style={styles.bold}>reminders for field monitoring</span>, such as:
                                    <ul style={{...styles.list, marginLeft: '20px', marginTop: '5px'}}>
                                        <li style={{...styles.listItem, marginBottom: '5px'}}>Emergence</li>
                                        <li style={{...styles.listItem, marginBottom: '5px'}}>Flowering</li>
                                        <li style={{...styles.listItem, marginBottom: '5px'}}>Pod fill</li>
                                        <li style={{...styles.listItem, marginBottom: '5px'}}>Physiological maturity</li>
                                    </ul>
                                </li>
                            </ul>
                            <p style={{
                                fontSize: isMobile ? '14px' : '16px',
                                lineHeight: '1.6',
                                color: colors.text,
                                marginBottom: '15px',
                                marginTop: '15px'
                            }}>
                                These dates are <span style={styles.bold}>implicitly communicated</span> through the GDD chart's time axis and the <span style={styles.bold}>growth stage panel</span>, allowing farmers to plan timely field visits aligned with physiological transitions.
                            </p>
                        </div>
                    </div>

                </div>

                <div style={styles.section}>
                    <h2 style={styles.sectionTitle}>4. Growth Stages of Crop</h2>
                    <div style={styles.subsection}>
                        <p style={{
                            fontSize: isMobile ? '14px' : '16px',
                            lineHeight: '1.6',
                            color: colors.text,
                            marginBottom: '20px'
                        }}>
                            Select a crop to view its specific growth stages, GDD requirements, and management recommendations:
                        </p>
                        
                        <div style={{
                            marginBottom: '25px',
                            display: 'flex',
                            flexDirection: isMobile ? 'column' : 'row',
                            alignItems: isMobile ? 'flex-start' : 'center',
                            gap: '15px'
                        }}>
                            <label htmlFor="cropSelect" style={{
                                fontSize: isMobile ? '14px' : '16px',
                                fontWeight: '600',
                                color: colors.primary,
                                marginRight: '10px'
                            }}>
                                Select Crop:
                            </label>
                            <div 
                                style={{ position: 'relative', width: isMobile ? '100%' : '250px' }}
                                className="crop-dropdown"
                            >
                                <input
                                    type="text"
                                    placeholder={selectedCropLabel || "Search crops..."}
                                    value={searchTerm}
                                    onChange={(e) => {
                                        setSearchTerm(e.target.value);
                                        setIsDropdownOpen(true);
                                    }}
                                    style={{
                                        width: '100%',
                                        padding: '10px 40px 10px 16px',
                                        borderRadius: '8px',
                                        border: `2px solid ${colors.border}`,
                                        backgroundColor: 'white',
                                        fontSize: isMobile ? '14px' : '16px',
                                        color: colors.text,
                                        cursor: 'pointer',
                                        outline: 'none',
                                        transition: 'border-color 0.2s ease',
                                        boxSizing: 'border-box'
                                    }}
                                    onFocus={(e) => {
                                        setIsDropdownOpen(true);
                                        e.target.style.borderColor = colors.accent;
                                    }}
                                    onBlur={(e) => {
                                        e.target.style.borderColor = colors.border;
                                    }}
                                />
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    style={{
                                        position: 'absolute',
                                        right: '12px',
                                        top: '50%',
                                        transform: isDropdownOpen ? 'translateY(-50%) rotate(180deg)' : 'translateY(-50%)',
                                        color: colors.secondary,
                                        pointerEvents: 'none',
                                        transition: 'transform 0.2s ease'
                                    }}
                                >
                                    <polyline points="6 9 12 15 18 9"></polyline>
                                </svg>
                                
                                {isDropdownOpen && (
                                    <div style={{
                                        position: 'absolute',
                                        top: 'calc(100% + 4px)',
                                        left: 0,
                                        right: 0,
                                        backgroundColor: 'white',
                                        border: `2px solid ${colors.border}`,
                                        borderRadius: '8px',
                                        maxHeight: '250px',
                                        overflowY: 'auto',
                                        zIndex: 9999,
                                        boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
                                        animation: 'fadeIn 0.2s ease'
                                    }}>
                                        {filteredCrops.length > 0 ? (
                                            filteredCrops.map((crop, index) => (
                                                <div
                                                    key={crop.value}
                                                    onClick={() => handleCropSelect(crop.value, crop.label)}
                                                    style={{
                                                        padding: '12px 16px',
                                                        cursor: 'pointer',
                                                        borderBottom: index < filteredCrops.length - 1 ? `1px solid ${colors.border}` : 'none',
                                                        backgroundColor: selectedCrop === crop.value ? '#e3f2fd' : 'white',
                                                        fontSize: isMobile ? '14px' : '16px',
                                                        color: colors.text,
                                                        transition: 'background-color 0.2s ease'
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        if (selectedCrop !== crop.value) {
                                                            e.target.style.backgroundColor = '#f5f5f5';
                                                        }
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        if (selectedCrop !== crop.value) {
                                                            e.target.style.backgroundColor = 'white';
                                                        } else {
                                                            e.target.style.backgroundColor = '#e3f2fd';
                                                        }
                                                    }}
                                                >
                                                    {crop.label}
                                                    {selectedCrop === crop.value && (
                                                        <svg 
                                                            width="16" 
                                                            height="16" 
                                                            viewBox="0 0 24 24" 
                                                            fill="none" 
                                                            stroke="currentColor" 
                                                            strokeWidth="2" 
                                                            strokeLinecap="round" 
                                                            strokeLinejoin="round"
                                                            style={{ 
                                                                float: 'right', 
                                                                color: colors.accent,
                                                                marginTop: '2px'
                                                            }}
                                                        >
                                                            <polyline points="20 6 9 17 4 12"></polyline>
                                                        </svg>
                                                    )}
                                                </div>
                                            ))
                                        ) : (
                                            <div style={{
                                                padding: '16px',
                                                color: colors.secondary,
                                                fontSize: isMobile ? '14px' : '16px',
                                                fontStyle: 'italic',
                                                textAlign: 'center'
                                            }}>
                                                No crops found matching "{searchTerm}"
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                        
                        {/* Alfalfa Growth Stages */}
                        {selectedCrop === 'alfalfa' && <AlfalfaContent isMobile={isMobile} colors={colors} styles={styles} />}
                        
                        {/* Almond Growth Stages */}
                        {selectedCrop === 'almond' && <AlmondContent isMobile={isMobile} colors={colors} styles={styles} />}
                        
                        {/* Barley Growth Stages */}
                        {selectedCrop === 'barley' && <BarleyContent isMobile={isMobile} colors={colors} styles={styles} />}
                        
                        {/* Cabbage Growth Stages */}
                        {selectedCrop === 'cabbage' && <CabbageContent isMobile={isMobile} colors={colors} styles={styles} />}
                        
                        {/* Green Bean Growth Stages */}
                        {selectedCrop === 'greenbean' && <GreenBeanContent isMobile={isMobile} colors={colors} styles={styles} />}

                        {/* Citrus Growth Stages */}
                        {selectedCrop === 'Citrus' && <CitrusContent isMobile={isMobile} colors={colors} styles={styles} />}
                        
                        {/* Cranberry Growth Stages */}
                        {selectedCrop === 'cranberry' && <CranberryContent isMobile={isMobile} colors={colors} styles={styles} />}
                        
                        {/* Dry Bean Growth Stages */}
                        {selectedCrop === 'drybean' && <DryBeanContent isMobile={isMobile} colors={colors} styles={styles} />}
                        
                        {/* Hemp Growth Stages */}
                        {selectedCrop === 'hemp' && <HempContent isMobile={isMobile} colors={colors} styles={styles} />}
                        
                        {/* Lettuce Growth Stages */}
                        {selectedCrop === 'lettuce' && <LettuceContent isMobile={isMobile} colors={colors} styles={styles} />}
                        
                        {/* Oats Growth Stages */}
                        {selectedCrop === 'oats' && <OatsContent isMobile={isMobile} colors={colors} styles={styles} />}
                        
                        {/* Onion Growth Stages */}
                        {selectedCrop === 'onion' && <OnionContent isMobile={isMobile} colors={colors} styles={styles} />}
                        
                        {/* Peach Growth Stages */}
                        {selectedCrop === 'peach' && <PeachContent isMobile={isMobile} colors={colors} styles={styles} />}
                        
                        {/* Pecan Growth Stages */}
                        {selectedCrop === 'pecan' && <PecanContent isMobile={isMobile} colors={colors} styles={styles} />}
                        
                        {/* Peas Growth Stages */}
                        {selectedCrop === 'peas' && <PeasContent isMobile={isMobile} colors={colors} styles={styles} />}
                        
                        {/* Peppers Growth Stages */}
                        {selectedCrop === 'peppers' && <PeppersContent isMobile={isMobile} colors={colors} styles={styles} />}
                        
                        {/* Plums Growth Stages */}
                        {selectedCrop === 'plums' && <PlumsContent isMobile={isMobile} colors={colors} styles={styles} />}
                        
                        {/* Potato Growth Stages */}
                        {selectedCrop === 'potato' && <PotatoContent isMobile={isMobile} colors={colors} styles={styles} />}
                        
                        {/* Rice Growth Stages */}
                        {selectedCrop === 'rice' && <RiceContent isMobile={isMobile} colors={colors} styles={styles} />}
                        
                        {/* Squash Growth Stages */}
                        {selectedCrop === 'squash' && <SquashContent isMobile={isMobile} colors={colors} styles={styles} />}
                        
                        {/* Sugar Beet Growth Stages */}
                        {selectedCrop === 'sugarbeet' && <SugarBeetContent isMobile={isMobile} colors={colors} styles={styles} />}
                        
                        {/* Sunflower Growth Stages */}
                        {selectedCrop === 'sunflower' && <SunflowerContent isMobile={isMobile} colors={colors} styles={styles} />}
                        
                        {/* Sweet Potato Growth Stages */}
                        {selectedCrop === 'sweetpotato' && <SweetPotatoContent isMobile={isMobile} colors={colors} styles={styles} />}
                        
                        {/* Pumpkin Growth Stages */}
                        {selectedCrop === 'pumpkin' && <PumpkinContent isMobile={isMobile} colors={colors} styles={styles} />}
                        
                        {/* Tobacco Growth Stages */}
                        {selectedCrop === 'tobacco' && <TobaccoContent isMobile={isMobile} colors={colors} styles={styles} />}
                        
                        {/* Broccoli Growth Stages */}
                        {selectedCrop === 'broccoli' && <BroccoliContent isMobile={isMobile} colors={colors} styles={styles} />}
                        
                        {/* Sweet Corn Growth Stages */}
                        {selectedCrop === 'sweetcorn' && <SweetCornContent isMobile={isMobile} colors={colors} styles={styles} />}
                        
                        {/* Corn Growth Stages */}
                        {selectedCrop === 'corn' && <div style={{
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
                                    <path d="M17 18a5 5 0 0 1-10 0"/>
                                    <line x1="12" y1="2" x2="12" y2="9"/>
                                    <line x1="4.22" y1="10.22" x2="5.64" y2="11.64"/>
                                    <line x1="1" y1="18" x2="3" y2="18"/>
                                    <line x1="21" y1="18" x2="23" y2="18"/>
                                    <line x1="18.36" y1="11.64" x2="19.78" y2="10.22"/>
                                    <line x1="23" y1="22" x2="1" y2="22"/>
                                </svg>
                                Corn
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
                                    <span style={styles.bold}>Base Temperature (T<sub>base</sub>):</span> 50°F (10°C)
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
                            
                            {/* Visual Flow Diagram */}
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
                                        { stage: 'Emergence', gdd: '100-120', color: '#E3F2FD' },
                                        { stage: 'V2-V3', gdd: '200-350', color: '#BBDEFB' },
                                        { stage: 'V6', gdd: '475', color: '#90CAF9' },
                                        { stage: 'VT', gdd: '1135', color: '#64B5F6' },
                                        { stage: 'R1', gdd: '1400', color: '#42A5F5' },
                                        { stage: 'R3', gdd: '1800', color: '#2196F3' },
                                        { stage: 'R5', gdd: '2450', color: '#1E88E5' },
                                        { stage: 'R6', gdd: '2700', color: '#1976D2' }
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
                                            {index < 7 && (
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
                                        1. Emergence (~100–120 GDD)
                                    </h5>
                                    <ul style={{...styles.list, marginLeft: '15px'}}>
                                        <li style={styles.listItem}>Seedlings break through the soil surface.</li>
                                        <li style={styles.listItem}>Initial root system establishes.</li>
                                        <li style={styles.listItem}>Cool soil temperatures can delay uniform stand.</li>
                                    </ul>
                                </div>
                                
                                <div>
                                    <h5 style={{
                                        fontSize: isMobile ? '15px' : '16px',
                                        fontWeight: '600',
                                        color: colors.primary,
                                        marginBottom: '8px'
                                    }}>
                                        2. V2–V3 Stage (~200–350 GDD)
                                    </h5>
                                    <ul style={{...styles.list, marginLeft: '15px'}}>
                                        <li style={styles.listItem}>Two to three leaf collars are visible.</li>
                                        <li style={styles.listItem}>Early vegetative growth begins.</li>
                                        <li style={styles.listItem}>Nitrogen uptake starts ramping up.</li>
                                    </ul>
                                </div>
                                
                                <div>
                                    <h5 style={{
                                        fontSize: isMobile ? '15px' : '16px',
                                        fontWeight: '600',
                                        color: colors.primary,
                                        marginBottom: '8px'
                                    }}>
                                        3. V6 Stage (~475 GDD)
                                    </h5>
                                    <ul style={{...styles.list, marginLeft: '15px'}}>
                                        <li style={styles.listItem}>Six leaf collars present; plant rapidly increases in size.</li>
                                        <li style={styles.listItem}>Growing point rises above the soil.</li>
                                        <li style={styles.listItem}>A key time for post-emergence herbicides and side-dress N.</li>
                                    </ul>
                                </div>
                                
                                <div>
                                    <h5 style={{
                                        fontSize: isMobile ? '15px' : '16px',
                                        fontWeight: '600',
                                        color: colors.primary,
                                        marginBottom: '8px'
                                    }}>
                                        4. VT – Tasseling (~1135 GDD)
                                    </h5>
                                    <ul style={{...styles.list, marginLeft: '15px'}}>
                                        <li style={styles.listItem}>Tassel fully emerged; pollen shed begins.</li>
                                        <li style={styles.listItem}>Reproductive stage officially starts.</li>
                                        <li style={styles.listItem}>Stress here can directly reduce yield.</li>
                                    </ul>
                                </div>
                                
                                <div>
                                    <h5 style={{
                                        fontSize: isMobile ? '15px' : '16px',
                                        fontWeight: '600',
                                        color: colors.primary,
                                        marginBottom: '8px'
                                    }}>
                                        5. R1 – Silking (~1400 GDD)
                                    </h5>
                                    <ul style={{...styles.list, marginLeft: '15px'}}>
                                        <li style={styles.listItem}>Silks appear and pollination happens.</li>
                                        <li style={styles.listItem}>This is the most sensitive stage for drought stress.</li>
                                        <li style={styles.listItem}>Successful fertilization determines kernel number.</li>
                                    </ul>
                                </div>
                                
                                <div>
                                    <h5 style={{
                                        fontSize: isMobile ? '15px' : '16px',
                                        fontWeight: '600',
                                        color: colors.primary,
                                        marginBottom: '8px'
                                    }}>
                                        6. R3 – Milk Stage (~1800 GDD)
                                    </h5>
                                    <ul style={{...styles.list, marginLeft: '15px'}}>
                                        <li style={styles.listItem}>Kernels are developing milky content.</li>
                                        <li style={styles.listItem}>Starch begins accumulating in the grain.</li>
                                        <li style={styles.listItem}>Proper moisture is key for grain fill.</li>
                                    </ul>
                                </div>
                                
                                <div>
                                    <h5 style={{
                                        fontSize: isMobile ? '15px' : '16px',
                                        fontWeight: '600',
                                        color: colors.primary,
                                        marginBottom: '8px'
                                    }}>
                                        7. R5 – Dent Stage (~2450 GDD)
                                    </h5>
                                    <ul style={{...styles.list, marginLeft: '15px'}}>
                                        <li style={styles.listItem}>Top of kernels begins to dent.</li>
                                        <li style={styles.listItem}>"Milk line" forms and moves down with time.</li>
                                        <li style={styles.listItem}>Nutrients move from stalks to kernels.</li>
                                    </ul>
                                </div>
                                
                                <div>
                                    <h5 style={{
                                        fontSize: isMobile ? '15px' : '16px',
                                        fontWeight: '600',
                                        color: colors.primary,
                                        marginBottom: '8px'
                                    }}>
                                        8. R6 – Physiological Maturity (~2700 GDD)
                                    </h5>
                                    <ul style={{...styles.list, marginLeft: '15px'}}>
                                        <li style={styles.listItem}>Black layer forms at kernel base.</li>
                                        <li style={styles.listItem}>Kernels reach final dry weight.</li>
                                        <li style={styles.listItem}>Harvest is typically ~30% grain moisture.</li>
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
                                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                                </svg>
                                Primary References
                            </h4>
                            
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                                gap: '15px',
                                marginTop: '15px',
                                marginBottom: '10px'
                            }}>
                                <div style={{
                                    backgroundColor: 'white',
                                    borderRadius: '8px',
                                    padding: '15px',
                                    boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                                }}>
                                    <h5 style={{
                                        fontSize: '15px',
                                        fontWeight: '600',
                                        color: colors.primary,
                                        marginBottom: '8px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px'
                                    }}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#3498db' }}>
                                            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
                                        </svg>
                                        Midwest Regional Climate Center
                                    </h5>
                                    <p style={{
                                        fontSize: '14px',
                                        color: colors.text,
                                        marginBottom: '8px'
                                    }}>
                                        Modified Growing Degree Days - Base temperature of 50°F and 86°F cap for corn GDD calculations
                                    </p>
                                    <a 
                                        href="https://mrcc.purdue.edu/modified-growing-degree-days" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '5px',
                                            fontSize: '14px',
                                            color: colors.link,
                                            textDecoration: 'none',
                                            fontWeight: '500'
                                        }}
                                    >
                                        View Resource
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                                            <polyline points="15 3 21 3 21 9"/>
                                            <line x1="10" y1="14" x2="21" y2="3"/>
                                        </svg>
                                    </a>
                                </div>
                                
                                <div style={{
                                    backgroundColor: 'white',
                                    borderRadius: '8px',
                                    padding: '15px',
                                    boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                                }}>
                                    <h5 style={{
                                        fontSize: '15px',
                                        fontWeight: '600',
                                        color: colors.primary,
                                        marginBottom: '8px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px'
                                    }}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#3498db' }}>
                                            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
                                        </svg>
                                        Iowa State University Extension
                                    </h5>
                                    <p style={{
                                        fontSize: '14px',
                                        color: colors.text,
                                        marginBottom: '8px'
                                    }}>
                                        Corn Growth and Development - Growth stage descriptions and GDD thresholds
                                    </p>
                                    <a 
                                        href="https://store.extension.iastate.edu/Product/Corn-Growth-and-Development" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '5px',
                                            fontSize: '14px',
                                            color: colors.link,
                                            textDecoration: 'none',
                                            fontWeight: '500'
                                        }}
                                    >
                                        View Resource
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                                            <polyline points="15 3 21 3 21 9"/>
                                            <line x1="10" y1="14" x2="21" y2="3"/>
                                        </svg>
                                    </a>
                                </div>
                                
                                <div style={{
                                    backgroundColor: 'white',
                                    borderRadius: '8px',
                                    padding: '15px',
                                    boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                                }}>
                                    <h5 style={{
                                        fontSize: '15px',
                                        fontWeight: '600',
                                        color: colors.primary,
                                        marginBottom: '8px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px'
                                    }}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#3498db' }}>
                                            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
                                        </svg>
                                        University of Nebraska-Lincoln Extension
                                    </h5>
                                    <p style={{
                                        fontSize: '14px',
                                        color: colors.text,
                                        marginBottom: '8px'
                                    }}>
                                        Growing Degree Units and Corn Emergence - Early growth stage GDD requirements
                                    </p>
                                    <a 
                                        href="https://cropwatch.unl.edu/growing-degree-units-and-corn-emergence/" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '5px',
                                            fontSize: '14px',
                                            color: colors.link,
                                            textDecoration: 'none',
                                            fontWeight: '500'
                                        }}
                                    >
                                        View Resource
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                                            <polyline points="15 3 21 3 21 9"/>
                                            <line x1="10" y1="14" x2="21" y2="3"/>
                                        </svg>
                                    </a>
                                </div>
                                
                                <div style={{
                                    backgroundColor: 'white',
                                    borderRadius: '8px',
                                    padding: '15px',
                                    boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                                }}>
                                    <h5 style={{
                                        fontSize: '15px',
                                        fontWeight: '600',
                                        color: colors.primary,
                                        marginBottom: '8px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '8px'
                                    }}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#3498db' }}>
                                            <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
                                        </svg>
                                        Other Resources
                                    </h5>
                                    <ul style={{...styles.list, marginLeft: '5px', marginTop: '5px'}}>
                                        <li style={{...styles.listItem, marginBottom: '8px'}}>
                                            <a 
                                                href="http://corn.agronomy.wisc.edu/" 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                style={{color: colors.link, textDecoration: 'none', fontWeight: '500'}}
                                            >
                                                UW Extension Corn Agronomy
                                            </a>
                                            <span style={{fontSize: '13px', display: 'block', color: '#666', marginTop: '2px'}}>
                                                Management recommendations and growth stage verification
                                            </span>
                                        </li>
                                        <li style={{...styles.listItem}}>
                                            <a 
                                                href="https://www.extension.purdue.edu/extmedia/ID/ID-179.html" 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                style={{color: colors.link, textDecoration: 'none', fontWeight: '500'}}
                                            >
                                                Purdue Corn & Soybean Field Guide
                                            </a>
                                            <span style={{fontSize: '13px', display: 'block', color: '#666', marginTop: '2px'}}>
                                                Management timing recommendations
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        }
                        
                        {/* Cotton Growth Stages */}
                        {selectedCrop === 'cotton' && <div style={{
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
                        }
                        
                        {/* Peanut Growth Stages */}
                        {selectedCrop === 'peanut' && <div style={{
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
                        }
                        {/* Sorghum Growth Stages */}
                        {selectedCrop === 'sorghum' && <SorghumContent isMobile={isMobile} colors={colors} styles={styles} />}
                        {/* Soybean Growth Stages */}
                        {selectedCrop === 'soybean' && <SoybeanContent isMobile={isMobile} colors={colors} styles={styles} />}
                        {/* Strawberry Growth Stages */}
                        {selectedCrop === 'strawberry' && <StrawberryContent isMobile={isMobile} colors={colors} styles={styles} />}
                        {/* Wheat Growth Stages */}
                        {selectedCrop === 'wheat' && <WheatContent isMobile={isMobile} colors={colors} styles={styles} />}
                        {/* Apple Growth Stages */}
                        {selectedCrop === 'apple' && <AppleContent isMobile={isMobile} colors={colors} styles={styles} />}
                        {/* Grape Growth Stages */}
                        {selectedCrop === 'grape' && <GrapeContent isMobile={isMobile} colors={colors} styles={styles} />}
                        {/* Tomato Growth Stages */}
                        {selectedCrop === 'tomato' && <TomatoContent isMobile={isMobile} colors={colors} styles={styles} />}
                        {/* Watermelon Growth Stages */}
                        {selectedCrop === 'watermelon' && <WatermelonContent isMobile={isMobile} colors={colors} styles={styles} />}
                        {/* Blueberry Growth Stages */}
                        {selectedCrop === 'blueberry' && <BlueberryContent isMobile={isMobile} colors={colors} styles={styles} />}
                        {/* Green Bean Growth Stages */}
                        {selectedCrop === 'greenbean' && <GreenBeanContent isMobile={isMobile} colors={colors} styles={styles} />}
                        {/* Almond Growth Stages */}
                        {selectedCrop === 'almond' && <AlmondContent isMobile={isMobile} colors={colors} styles={styles} />}
                        {/* Barley Growth Stages */}
                        {selectedCrop === 'barley' && <BarleyContent isMobile={isMobile} colors={colors} styles={styles} />}
                        {/* Cabbage Growth Stages */}
                        {selectedCrop === 'cabbage' && <CabbageContent isMobile={isMobile} colors={colors} styles={styles} />}
                        {/* Canola Growth Stages */}
                        {selectedCrop === 'canola' && <CanolaContent isMobile={isMobile} colors={colors} styles={styles} />}
                        {/* Cantaloupe Growth Stages */}
                        {selectedCrop === 'cantaloupe' && <CantaloupeContent isMobile={isMobile} colors={colors} styles={styles} />}
                        {selectedCrop === 'Carrot' && <CarrotContent isMobile={isMobile} colors={colors} styles={styles} />}
                        {selectedCrop === 'Cauliflower' && <CauliflowerContent isMobile={isMobile} colors={colors} styles={styles} />}
                        {selectedCrop === 'Cherry' && <CherryContent isMobile={isMobile} colors={colors} styles={styles} />}
                        {selectedCrop === 'Citrus' && <CitrusContent isMobile={isMobile} colors={colors} styles={styles} />}
                        {selectedCrop === 'cranberry' && <CranberryContent isMobile={isMobile} colors={colors} styles={styles} />}
                        {selectedCrop === 'drybean' && <DryBeanContent isMobile={isMobile} colors={colors} styles={styles} />}
                        {selectedCrop === 'hemp' && <HempContent isMobile={isMobile} colors={colors} styles={styles} />}
                        {selectedCrop === 'sweetpotato' && <SweetPotatoContent isMobile={isMobile} colors={colors} styles={styles} />}
                    </div>
                </div>

                <div style={styles.section}>
                    <h2 style={styles.sectionTitle}>5. Data Sources</h2>
                            <div style={{
                        overflowX: 'auto',
                        marginTop: '20px'
                    }}>
                        <table style={{
                            width: '100%',
                            borderCollapse: 'collapse',
                            backgroundColor: 'white',
                            fontSize: isMobile ? '13px' : '14px',
                                    lineHeight: '1.6',
                            border: '1px solid #ddd'
                        }}>
                            <thead>
                                <tr style={{
                                    backgroundColor: '#2c3e50',
                                    color: 'white',
                                }}>
                                    <th style={{
                                padding: '15px',
                                        textAlign: 'left',
                                        borderBottom: '2px solid #ddd',
                                        width: '25%'
                                    }}>Dataset Name</th>
                                    <th style={{
                                        padding: '15px',
                                        textAlign: 'left',
                                        borderBottom: '2px solid #ddd',
                                        width: '55%'
                                    }}>Description</th>
                                    <th style={{
                                        padding: '15px',
                                        textAlign: 'left',
                                        borderBottom: '2px solid #ddd',
                                        width: '20%'
                                    }}>Dataset Link</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style={{ padding: '15px', borderBottom: '1px solid #ddd' }}>
                                        <span style={{ fontWeight: 'bold', color: '#2c3e50', display: 'block', marginBottom: '5px' }}>
                                            NOAA GFS
                                        </span>
                                        <code style={{ 
                                            color: '#666',
                                            fontSize: '12px',
                                            backgroundColor: '#f1f1f1',
                                            padding: '4px 6px',
                                                borderRadius: '4px',
                                            display: 'inline-block'
                                        }}>
                                            "NOAA/GFS0P25"
                                        </code>
                                    </td>
                                    <td style={{ padding: '15px', borderBottom: '1px solid #ddd', color: '#333' }}>
                                        NOAA Global Forecast System (GFS) weather forecast data. Provides global weather 
                                        forecasts for 16 days with parameters including temperature, humidity, wind speed, and precipitation. 
                                        Used for both general weather forecasting and specialized agricultural applications like the Field Spray Planner.
                                    </td>
                                    <td style={{ padding: '15px', borderBottom: '1px solid #ddd' }}>
                                        <a href="https://developers.google.com/earth-engine/datasets/catalog/NOAA_GFS0P25" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        style={{
                                               color: '#3498db',
                                            textDecoration: 'none',
                                               fontWeight: 'bold'
                                           }}>
                                            View Dataset →
                                        </a>
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ padding: '15px', borderBottom: '1px solid #ddd' }}>
                                        <span style={{ fontWeight: 'bold', color: '#2c3e50', display: 'block', marginBottom: '5px' }}>
                                            NASA SMAP
                                        </span>
                                        <code style={{ 
                                            color: '#666',
                                            fontSize: '12px',
                                            backgroundColor: '#f1f1f1',
                                            padding: '4px 6px',
                                            borderRadius: '4px',
                                            display: 'inline-block'
                                        }}>
                                            'NASA/SMAP/SPL4SMGP/008'
                                        </code>
                                    </td>
                                    <td style={{ padding: '15px', borderBottom: '1px solid #ddd', color: '#333' }}>
                                        NASA SMAP Level-4 Global 3-hourly Surface and Root Zone Soil Moisture. Provides 
                                        global soil moisture data at various depths.
                                    </td>
                                    <td style={{ padding: '15px', borderBottom: '1px solid #ddd' }}>
                                        <a href="https://developers.google.com/earth-engine/datasets/catalog/NASA_SMAP_SPL4SMGP_008" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        style={{
                                               color: '#3498db',
                                            textDecoration: 'none',
                                               fontWeight: 'bold'
                                           }}>
                                            View Dataset →
                                        </a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                                </div>
                            </div>

                <div style={styles.section}>
                    <h2 style={styles.sectionTitle}>6. Product Demo</h2>
                            <div style={{
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                        padding: '60px 20px',
                        backgroundColor: colors.background,
                        borderRadius: '12px',
                        margin: '20px 0',
                                                textAlign: 'center'
                                            }}>
                        {/* <div>
                            <h3 style={{
                                fontSize: '24px',
                                color: colors.primary,
                                marginBottom: '15px'
                            }}>
                                Coming Soon
                            </h3>
                                <p style={{
                                fontSize: '16px',
                                color: colors.text,
                                maxWidth: '600px',
                                margin: '0 auto'
                            }}>
                                Video demonstrations of the GDD Tracker tool are currently being developed and will be available here shortly.
                            </p>
                        </div> */}
                        {/* Spray Planner (Mobile) */}
                            <div style={{
                            flex: '1',
                            background: 'linear-gradient(135deg, #8e44ad 0%, #9b59b6 100%)',
                            borderRadius: '20px',
                            padding: '40px',
                            color: 'white',
                            position: 'relative',
                            overflow: 'hidden',
                            boxShadow: '0 10px 30px rgba(155, 89, 182, 0.2)',
                                            display: 'flex',
                                            flexDirection: 'column',
                            minHeight: isMobile ? 'auto' : '600px'
                        }}>
                                                <div style={{
                                                    position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                opacity: 0.1,
                                background: 'radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.3) 0%, transparent 40%)',
                                zIndex: 1
                            }} />
                            
                            <div style={{
                                position: 'relative',
                                zIndex: 2,
                                flex: 1,
                                display: 'flex',
                                flexDirection: 'column'
                        }}>
                            <h3 style={{
                                    margin: '0 0 15px 0',
                                    fontSize: '28px',
                                fontWeight: '600',
                                    letterSpacing: '0.5px'
                                }}>
                                    Crop Growth Tracker Tool Demo
                            </h3>
                                <p style={{
                                    margin: '0 0 30px 0',
                                    fontSize: '16px',
                                    opacity: 0.9,
                                    lineHeight: '1.6'
                                }}>
                                    Get a comprehensive walkthrough of all features in the Crop Growth Tracker App . Learn to navigate and utilize all features efficiently and make data-driven decisionson smaller screens.
                                </p>
                            <div style={{
                                    flex: 1,
                                            display: 'flex',
                                            flexDirection: 'column',
                                    gap: '20px'
                                        }}>
                                            <div style={{
                                        position: 'relative',
                                                width: '100%',
                                        flex: 1,
                                        minHeight: '300px',
                                        backgroundColor: 'rgba(0, 0, 0, 0.1)',
                                        borderRadius: '12px',
                                        overflow: 'hidden'
                                    }}>
                                        <iframe
                                            style={{
                                                    position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                width: '100%',
                                                height: '100%',
                                                border: 'none'
                                            }}
                                            src="https://www.youtube.com/embed/HU4G0rHSZ08?si=kXS9FdQVtGZU64Jb"
                                            title="Crop Growth Tracker Video"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        />
                                </div>
                                    <a 
                                        href="https://youtu.be/HU4G0rHSZ08?si=kXS9FdQVtGZU64Jb"
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '10px',
                                            background: 'rgba(255, 255, 255, 0.1)',
                                            padding: '12px 24px',
                                            borderRadius: '30px',
                                            backdropFilter: 'blur(5px)',
                                            color: 'white',
                                            textDecoration: 'none',
                                            transition: 'all 0.3s ease',
                                            cursor: 'pointer'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.background = 'rgba(255, 255, 255, 0.2)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.background = 'rgba(255, 255, 255, 0.1)';
                                        }}
                                    >
                                        <svg 
                                            width="20" 
                                            height="20" 
                                            viewBox="0 0 24 24" 
                                            fill="none" 
                                            stroke="currentColor" 
                                            strokeWidth="2" 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round"
                                        >
                                            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
                                            <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor"/>
                                        </svg>
                                        <span style={{
                                            fontSize: '16px',
                                            fontWeight: '500'
                                        }}>
                                            Watch on YouTube
                                            </span>
                                    </a>
                                </div>
                            </div>
                        </div>

                                </div>
                            </div>
                            
                <footer style={styles.footer}>
                    <p style={{...styles.paragraph, fontWeight: 'bold', color: colors.primary}}>
                        Developed by: Digital Agriculture Technologies Lab, Virginia Tech (PI: Dr.Abhilash Chandel, abhilashchandel@vt.edu)
                    </p>
                    <p style={{...styles.paragraph, color: colors.secondary}}>
                        Supported by: USDA, NIFA, NAPDC, Cotton Incorporated, Virginia Tech Tidewater Agricultural Research & Extension Center (TAREC), College of Agriculture and Life Sciences, and Department of Biological Systems Engineering.
                    </p>
                </footer>
        </>
    );
};

export default GDDDocumentation;
