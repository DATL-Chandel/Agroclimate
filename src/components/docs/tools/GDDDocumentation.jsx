import React, { useState, useEffect } from 'react';
import SorghumContent from '../crops/SorghumContent';
import SoybeanContent from '../crops/SoybeanContent';
import StrawberryContent from '../crops/StrawberryContent';
import WheatContent from '../crops/WheatContent';
import AppleContent from '../crops/AppleContent';
import GrapeContent from '../crops/GrapeContent';
import TomatoContent from '../crops/TomatoContent';
import WatermelonContent from '../crops/WatermelonContent';
import BlueberryContent from '../crops/BlueberryContent';
import SweetCornContent from '../crops/SweetCornContent';
import BroccoliContent from '../crops/BroccoliContent';
import TobaccoContent from '../crops/TobaccoContent';
import PumpkinContent from '../crops/PumpkinContent';
import GreenBeanContent from '../crops/GreenBeanContent';
import AlmondContent from '../crops/AlmondContent';
import BarleyContent from '../crops/BarleyContent';
import AlfalfaContent from '../crops/AlfalfaContent';
import CabbageContent from '../crops/CabbageContent';
import CanolaContent from '../crops/CanolaContent';
import CantaloupeContent from '../crops/CantaloupeContent';
import CarrotContent from '../crops/CarrotContent';
import CauliflowerContent from '../crops/CauliflowerContent';
import CherryContent from '../crops/CherryContent';
import CitrusContent from '../crops/CitrusContent';
import CranberryContent from '../crops/CranberryContent';
import DryBeanContent from '../crops/DryBeanContent';
import HempContent from '../crops/HempContent';
import LettuceContent from '../crops/LettuceContent';
import OatsContent from '../crops/OatsContent';
import OnionContent from '../crops/OnionContent';
import PeachContent from '../crops/PeachContent';
import PecanContent from '../crops/PecanContent';
import PeasContent from '../crops/PeasContent';
import PeppersContent from '../crops/PeppersContent';
import PlumsContent from '../crops/PlumsContent';
import PotatoContent from '../crops/PotatoContent';
import RiceContent from '../crops/RiceContent';
import SquashContent from '../crops/SquashContent';
import SugarBeetContent from '../crops/SugarBeetContent';
import SunflowerContent from '../crops/SunflowerContent';
import SweetPotatoContent from '../crops/SweetPotatoContent';
import CornContent from '../crops/CornContent';
import CottonContent from '../crops/CottonContent';
import PeanutContent from '../crops/PeanutContent';

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
                                    <li style={{...styles.listItem, marginBottom: '5px'}}><span style={styles.bold}>Daymet V4 (NASA/ORNL)</span> — USA historical temperature, 1 km resolution (1980–2025)</li>
                                    <li style={{...styles.listItem, marginBottom: '5px'}}><span style={styles.bold}>GRIDMET (Univ. of Idaho)</span> — USA near real-time temperature, ~4.6 km resolution (2026+)</li>
                                    <li style={{...styles.listItem, marginBottom: '5px'}}><span style={styles.bold}>ERA5-Land (ECMWF)</span> — Global historical temperature, ~11 km resolution (non-USA fields)</li>
                                    <li style={{...styles.listItem, marginBottom: '5px'}}><span style={styles.bold}>NOAA GFS</span> — Forecasted temperature for up to 16 days ahead (all locations)</li>
                                </ul>
                            </li>
                            <li style={styles.listItem}>The tool automatically selects the appropriate dataset based on <span style={styles.bold}>field location</span> (USA vs. global) and <span style={styles.bold}>date range</span> — no manual selection required.</li>
                            <li style={styles.listItem}>Users can select the crop (from a list of 45+) and define the <span style={styles.bold}>start and end dates</span>.</li>
                            <li style={styles.listItem}>The selected range may include <span style={styles.bold}>future forecast data</span>, enabling prediction.</li>
                            <li style={styles.listItem}>After loading, the tool displays a <span style={styles.bold}>cumulative GDD chart</span>, with one line per field.</li>
                            <li style={styles.listItem}>If the selected date range includes future days, a <span style={styles.bold}>blue Forecast Note</span> is displayed indicating GFS forecast data is in use.</li>
                            <li style={styles.listItem}>A <span style={styles.bold}>data source label</span> is shown below the chart (in italic gray) indicating which temperature dataset(s) were used for the selected period and location.</li>
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
                        {selectedCrop === 'citrus' && <CitrusContent isMobile={isMobile} colors={colors} styles={styles} />}
                        
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
                        {selectedCrop === 'corn' && <CornContent isMobile={isMobile} colors={colors} styles={styles} />}
                        
                        {/* Cotton Growth Stages */}
                        {selectedCrop === 'cotton' && <CottonContent isMobile={isMobile} colors={colors} styles={styles} />}
                        
                        {/* Peanut Growth Stages */}
                        {selectedCrop === 'peanut' && <PeanutContent isMobile={isMobile} colors={colors} styles={styles} />}
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
                        {/* Canola Growth Stages */}
                        {selectedCrop === 'canola' && <CanolaContent isMobile={isMobile} colors={colors} styles={styles} />}
                        {/* Cantaloupe Growth Stages */}
                        {selectedCrop === 'cantaloupe' && <CantaloupeContent isMobile={isMobile} colors={colors} styles={styles} />}
                        {/* Carrot Growth Stages */}
                        {selectedCrop === 'carrot' && <CarrotContent isMobile={isMobile} colors={colors} styles={styles} />}
                        {/* Cauliflower Growth Stages */}
                        {selectedCrop === 'cauliflower' && <CauliflowerContent isMobile={isMobile} colors={colors} styles={styles} />}
                        {/* Cherry Growth Stages */}
                        {selectedCrop === 'cherry' && <CherryContent isMobile={isMobile} colors={colors} styles={styles} />}
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
                                        forecasts up to 16 days ahead with parameters including maximum and minimum temperature, humidity, wind speed, and precipitation. 
                                        Used in the Crop Growth Tracker for future GDD calculations when the selected date range extends beyond today.
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
                                            Daymet V4 (NASA/ORNL)
                                        </span>
                                        <code style={{ 
                                            color: '#666',
                                            fontSize: '12px',
                                            backgroundColor: '#f1f1f1',
                                            padding: '4px 6px',
                                            borderRadius: '4px',
                                            display: 'inline-block'
                                        }}>
                                            'NASA/ORNL/DAYMET_V4'
                                        </code>
                                    </td>
                                    <td style={{ padding: '15px', borderBottom: '1px solid #ddd', color: '#333' }}>
                                        Daily surface weather data for North America at 1 km resolution. Provides daily maximum and minimum 
                                        temperature (°C), precipitation, and other variables. Used for USA historical GDD calculations (1980–2025).
                                    </td>
                                    <td style={{ padding: '15px', borderBottom: '1px solid #ddd' }}>
                                        <a href="https://developers.google.com/earth-engine/datasets/catalog/NASA_ORNL_DAYMET_V4" 
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
                                            GRIDMET (Univ. of Idaho)
                                        </span>
                                        <code style={{ 
                                            color: '#666',
                                            fontSize: '12px',
                                            backgroundColor: '#f1f1f1',
                                            padding: '4px 6px',
                                            borderRadius: '4px',
                                            display: 'inline-block'
                                        }}>
                                            'IDAHO_EPSCOR/GRIDMET'
                                        </code>
                                    </td>
                                    <td style={{ padding: '15px', borderBottom: '1px solid #ddd', color: '#333' }}>
                                        High-resolution (~4.6 km) daily meteorological dataset for the contiguous USA. Provides daily 
                                        maximum and minimum temperature (K), precipitation, humidity, and wind. Near real-time with ~2 day lag. 
                                        Used for USA GDD calculations from 2026 onwards.
                                    </td>
                                    <td style={{ padding: '15px', borderBottom: '1px solid #ddd' }}>
                                        <a href="https://developers.google.com/earth-engine/datasets/catalog/IDAHO_EPSCOR_GRIDMET" 
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
                                            ERA5-Land Daily (ECMWF)
                                        </span>
                                        <code style={{ 
                                            color: '#666',
                                            fontSize: '12px',
                                            backgroundColor: '#f1f1f1',
                                            padding: '4px 6px',
                                            borderRadius: '4px',
                                            display: 'inline-block'
                                        }}>
                                            'ECMWF/ERA5_LAND/DAILY_AGGR'
                                        </code>
                                    </td>
                                    <td style={{ padding: '15px', borderBottom: '1px solid #ddd', color: '#333' }}>
                                        Global daily aggregated land surface variables at ~11 km resolution from ECMWF reanalysis. 
                                        Provides daily maximum and minimum 2m air temperature (K) from 1950 to present. 
                                        Used for GDD calculations for fields outside the contiguous USA.
                                    </td>
                                    <td style={{ padding: '15px', borderBottom: '1px solid #ddd' }}>
                                        <a href="https://developers.google.com/earth-engine/datasets/catalog/ECMWF_ERA5_LAND_DAILY_AGGR" 
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
                                            src="https://www.youtube.com/embed/WgyYWvRVo0s"
                                            title="Crop Growth Tracker Video"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        />
                                </div>
                                    <a 
                                        href="https://youtu.be/WgyYWvRVo0s"
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

                        {/* Crop Growth Tracker Tool Demo (Mobile) */}
                        <div style={{
                            flex: '1',
                            background: 'linear-gradient(135deg, #2980b9 0%, #1a5276 100%)',
                            borderRadius: '20px',
                            padding: '40px',
                            color: 'white',
                            position: 'relative',
                            overflow: 'hidden',
                            boxShadow: '0 10px 30px rgba(41, 128, 185, 0.2)',
                            display: 'flex',
                            flexDirection: 'column',
                            minHeight: isMobile ? 'auto' : '600px'
                        }}>
                            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.1, background: 'radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.3) 0%, transparent 40%)', zIndex: 1 }} />
                            <div style={{ position: 'relative', zIndex: 2, flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ margin: '0 0 15px 0', fontSize: '28px', fontWeight: '600', letterSpacing: '0.5px' }}>
                                    Crop Growth Tracker Tool Demo (Mobile)
                                </h3>
                                <p style={{ margin: '0 0 30px 0', fontSize: '16px', opacity: 0.9, lineHeight: '1.6' }}>
                                    Use the Crop Growth Tracker on your mobile device. Learn how to monitor GDD accumulation and crop growth stages efficiently from the field on smaller screens.
                                </p>
                                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                    <div style={{ position: 'relative', width: '100%', flex: 1, minHeight: '300px', backgroundColor: 'rgba(0,0,0,0.1)', borderRadius: '12px', overflow: 'hidden' }}>
                                        <iframe
                                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                                            src="https://www.youtube.com/embed/jxKydwamnGw"
                                            title="Crop Growth Tracker Tool Demo Video (Mobile)"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        />
                                    </div>
                                    <a href="https://youtube.com/shorts/jxKydwamnGw" target="_blank" rel="noopener noreferrer"
                                        style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'rgba(255,255,255,0.1)', padding: '12px 24px', borderRadius: '30px', backdropFilter: 'blur(5px)', color: 'white', textDecoration: 'none', transition: 'all 0.3s ease', cursor: 'pointer' }}
                                        onMouseEnter={(e) => { e.target.style.background = 'rgba(255,255,255,0.2)'; }}
                                        onMouseLeave={(e) => { e.target.style.background = 'rgba(255,255,255,0.1)'; }}
                                    >
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/>
                                            <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor"/>
                                        </svg>
                                        <span style={{ fontSize: '16px', fontWeight: '500' }}>Watch on YouTube</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                                </div>
                            </div>
                            
        </>
    );
};

export default GDDDocumentation;
