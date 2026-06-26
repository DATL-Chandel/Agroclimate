import React, { useState, useEffect } from 'react';

const TillagePlantingDocumentation = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 480);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
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
        header: {
            textAlign: 'center',
            marginBottom: isMobile ? '20px' : '40px',
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
        list: { listStyle: 'none', padding: 0, margin: 0 },
        listItem: {
            marginBottom: isMobile ? '8px' : '12px',
            fontSize: isMobile ? '14px' : '16px',
            lineHeight: '1.6',
            color: colors.text,
            paddingLeft: '20px',
            position: 'relative',
        },
        bold: { fontWeight: '600', color: colors.primary },
        subsectionIcon: {
            minWidth: isMobile ? '20px' : '24px',
            height: isMobile ? '20px' : '24px',
            marginRight: isMobile ? '8px' : '12px',
            color: colors.accent,
        },
        paragraph: {
            fontSize: isMobile ? '14px' : '16px',
            lineHeight: '1.6',
            color: colors.text,
            marginBottom: isMobile ? '15px' : '20px',
        },
    };

    const SubsectionTitle = ({ icon, children }) => (
        <h3 style={{ ...styles.subsectionTitle, display: 'flex', alignItems: 'center' }}>
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

    // ── Reusable simple table styles ──────────────────────────────────────────
    const tbl = {
        width: '100%',
        borderCollapse: 'collapse',
        backgroundColor: 'white',
        fontSize: isMobile ? '13px' : '14px',
        lineHeight: '1.6',
        border: '1px solid #ddd',
    };
    const th = (w) => ({
        padding: '12px 15px',
        textAlign: 'left',
        borderBottom: '2px solid #ddd',
        backgroundColor: '#2c3e50',
        color: 'white',
        fontWeight: '600',
        width: w || 'auto',
    });
    const td = (alt) => ({
        padding: '11px 15px',
        borderBottom: '1px solid #ddd',
        color: '#333',
        backgroundColor: alt ? '#f8f9fa' : 'white',
        verticalAlign: 'top',
    });

    // ── Card helpers ──────────────────────────────────────────────────────────
    const card = (borderColor) => ({
        backgroundColor: 'white',
        borderRadius: '8px',
        padding: '20px',
        marginBottom: '25px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
        border: `2px solid ${borderColor}`,
    });
    const inner = (borderColor) => ({
        backgroundColor: colors.background,
        borderRadius: '6px',
        padding: '15px',
        marginBottom: '20px',
        borderLeft: `4px solid ${borderColor}`,
    });
    const h4s = {
        fontSize: isMobile ? '16px' : '18px',
        fontWeight: '600',
        color: colors.primary,
        marginBottom: '15px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
    };
    const h5s = {
        fontSize: isMobile ? '15px' : '17px',
        fontWeight: '600',
        color: colors.primary,
        marginBottom: '12px',
    };

    return (
        <>
            {/* ── Header ── */}
            <header style={styles.header}>
                <h1 style={styles.title}>Tillage &amp; Planting Scheduler Documentation</h1>
                <p style={{ ...styles.paragraph, maxWidth: '800px', margin: '0 auto 20px' }}>
                    Welcome to the comprehensive guide for the Tillage &amp; Planting Scheduler.
                    This documentation explains how the tool uses satellite soil moisture data, 16-day numerical weather forecasts,
                    and field-specific soil properties to generate daily tillage and planting suitability forecasts with economic cost estimates.
                </p>
            </header>

            {/* ── 1. Overview ── */}
            <div style={styles.section}>
                <h2 style={styles.sectionTitle}>1. Overview</h2>
                <div style={{ display: 'flex', alignItems: 'center', gap: '30px', flexWrap: 'wrap', marginTop: '20px' }}>
                    <div style={{ flex: '0 0 300px', maxWidth: '100%', display: 'flex', justifyContent: 'center' }}>
                        <img src="/Agroclimate/logo.png" alt="Agroclimate Logo" style={{ maxWidth: '100%', height: 'auto', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }} />
                    </div>
                    <div style={{ flex: '1 1 500px', fontSize: isMobile ? '14px' : '16px', lineHeight: '1.6', color: '#333' }}>
                        The Tillage &amp; Planting Scheduler is an agricultural decision-support application built on the Google Earth Engine (GEE) platform.
                        It provides farmers, agronomists, and researchers with a science-based 16-day suitability forecast for three field operations:
                        primary tillage, secondary tillage, and planting. Rather than relying on general weather forecasts or fixed calendar rules,
                        the tool integrates real-time satellite-derived soil moisture (NASA SMAP), 16-day numerical weather prediction (NOAA GFS),
                        and field-specific soil texture data (SoilGrids/ISRIC) to determine — for each day — whether conditions are suitable to
                        perform each operation and at what estimated cost. The tool is designed for US agricultural conditions and supports
                        five major crops: Corn, Cotton, Peanut, Barley, and Wheat.
                    </div>
                </div>
            </div>

            {/* ── 2. Key Features ── */}
            <div style={styles.section}>
                <h2 style={styles.sectionTitle}>2. Key Features</h2>
                <ul style={styles.list}>
                    <li style={styles.listItem}><span style={styles.bold}>Multi-Crop Support:</span> Comprehensive tillage and planting scheduling for five major US crops — Corn, Cotton, Peanut, Barley, and Wheat — each with crop-specific soil temperature thresholds and regional planting windows.</li>
                    <li style={styles.listItem}><span style={styles.bold}>16-Day Suitability Matrix:</span> Daily go/no-go forecast for Primary Tillage, Secondary Tillage, and Planting with explicit limiting-factor explanations for every unsuitable day.</li>
                    <li style={styles.listItem}><span style={styles.bold}>Field-Specific Analysis:</span> User-drawn field polygons on an interactive GEE map — up to 5 simultaneous fields with color-coded display and a map legend.</li>
                    <li style={styles.listItem}><span style={styles.bold}>Satellite Soil Moisture Initialization:</span> NASA SMAP L4 root-zone soil moisture used as the starting condition for the 16-day water balance forecast.</li>
                    <li style={styles.listItem}><span style={styles.bold}>Bare Soil Water Balance Model:</span> Daily soil moisture tracking using Hargreaves ET₀ with tillage-system residue factor and GFS precipitation (incremental differencing method).</li>
                    <li style={styles.listItem}><span style={styles.bold}>Soil Texture &amp; Hydraulic Properties:</span> SoilGrids-derived Field Capacity and Permanent Wilting Point per USDA texture class, scaled to the 6-inch tillage zone.</li>
                    <li style={styles.listItem}><span style={styles.bold}>Operations Scheduling &amp; Cost Analysis:</span> Sequential scheduler assigns work to suitable days and computes fuel, labor, and equipment costs per operation and in total.</li>
                    <li style={styles.listItem}><span style={styles.bold}>Tillage System Residue Modeling:</span> Conventional, Mulch Till, and No-Till systems each apply different residue fractions that reduce bare soil evaporation.</li>
                </ul>
            </div>

            {/* ── 3. Functional Components ── */}
            <div style={styles.section}>
                <h2 style={styles.sectionTitle}>3. Functional Components</h2>

                {/* 3.1 Field Selection */}
                <div style={styles.subsection}>
                    <SubsectionTitle icon={
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#3498db' }}>
                            <polygon points="3 11 22 2 13 21 11 13 3 11"/>
                        </svg>
                    }>1. Field Selection &amp; Setup</SubsectionTitle>
                    <p style={styles.paragraph}>
                        The tool opens with an interactive GEE map. Users navigate to their farm, select the number of fields,
                        and draw polygon boundaries directly on the map. Each field is color-coded (up to 5 fields) and stored as a
                        GEE FeatureCollection for spatial data extraction.
                    </p>
                    <ul style={styles.list}>
                        <li style={styles.listItem}><span style={styles.bold}>Search &amp; Navigate:</span> Use the map search box to locate your farm or field address.</li>
                        <li style={styles.listItem}><span style={styles.bold}>Field Count:</span> Select 1–5 fields from the dropdown before drawing.</li>
                        <li style={styles.listItem}><span style={styles.bold}>Draw Polygons:</span> Click on the map to trace each field boundary; drawing stops automatically once the selected count is reached.</li>
                        <li style={styles.listItem}><span style={styles.bold}>Field Legend:</span> A color-coded legend appears on the map as fields are drawn.</li>
                        <li style={styles.listItem}><span style={styles.bold}>Load Button:</span> Validates the geometries and initializes the analysis interface. Must be clicked before any analysis can begin.</li>
                        <li style={styles.listItem}><span style={styles.bold}>Clear All:</span> Resets all fields, selections, and results to start a fresh analysis.</li>
                    </ul>
                </div>

                {/* 3.2 Water Balance Model */}
                <div style={styles.subsection}>
                    <SubsectionTitle icon={
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#3498db' }}>
                            <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>
                        </svg>
                    }>2. Soil Moisture Water Balance Model</SubsectionTitle>
                    <p style={styles.paragraph}>
                        A daily water balance model tracks soil moisture in the top 6-inch tillage zone over the 16-day forecast period.
                        The model combines a NASA SMAP initial condition with NOAA GFS forecast weather to simulate how soil moisture evolves
                        each day under bare soil pre-planting conditions.
                    </p>

                    {/* A: Water Balance */}
                    <div style={card('#FFF3E0')}>
                        <h4 style={h4s}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FF9800" strokeWidth="2"><path d="M12 2v2"/><path d="M12 20v2"/><path d="M2 12h2"/><path d="M20 12h2"/><circle cx="12" cy="12" r="5"/></svg>
                            A. Daily Water Balance Equation
                        </h4>
                        <div style={inner('#FF9800')}>
                            <h5 style={h5s}>Core Formula</h5>
                            <div style={{ backgroundColor: 'white', borderRadius: '8px', padding: '18px', marginBottom: '15px', border: '1px solid #FFE0B2', textAlign: 'center' }}>
                                <p style={{ fontSize: isMobile ? '15px' : '17px', fontWeight: '600', color: colors.primary, margin: '0 0 8px 0' }}>
                                    SM(t) = SM(t−1) + EffectivePrecip(t) − Evap(t)
                                </p>
                                <p style={{ fontSize: isMobile ? '12px' : '13px', color: colors.secondary, margin: '0 0 4px 0' }}>
                                    EffectivePrecip(t) = min(Precip(t), max(0, FC − SM(t−1)))
                                </p>
                                <p style={{ fontSize: isMobile ? '12px' : '13px', color: colors.secondary, margin: 0 }}>
                                    Bounded daily: SM(t) = max(PWP, min(FC, SM(t)))
                                </p>
                            </div>
                            <ul style={styles.list}>
                                <li style={styles.listItem}><span style={styles.bold}>SM(t):</span> Soil moisture on day t (inches of water in top 6 inches of soil)</li>
                                <li style={styles.listItem}><span style={styles.bold}>SM(t−1):</span> Soil moisture from previous day; Day 0 initialized from NASA SMAP</li>
                                <li style={styles.listItem}><span style={styles.bold}>EffectivePrecip(t):</span> Precipitation capped to soil storage capacity — min(Precip, FC − SM(t−1)) — prevents exceeding Field Capacity before bounding (inches)</li>
                                <li style={styles.listItem}><span style={styles.bold}>Evap(t):</span> Bare soil evaporation = ET₀ × Kc (0.6) × residue factor (inches)</li>
                                <li style={styles.listItem}><span style={styles.bold}>Bounds:</span> Field Capacity (FC) as upper limit; Permanent Wilting Point (PWP) as lower limit</li>
                            </ul>
                        </div>
                    </div>

                    {/* B: ET0 */}
                    <div style={card('#E8F5E9')}>
                        <h4 style={h4s}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#4CAF50" strokeWidth="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
                            B. Reference Evapotranspiration (ET₀) — Hargreaves Method
                        </h4>
                        <div style={inner('#4CAF50')}>
                            <h5 style={h5s}>Hargreaves-Samani (1985) Equation</h5>
                            <div style={{ backgroundColor: 'white', borderRadius: '6px', padding: '14px', marginBottom: '14px', border: '1px solid #C8E6C9', textAlign: 'center' }}>
                                <p style={{ fontSize: isMobile ? '14px' : '16px', fontWeight: '600', color: colors.primary, margin: 0 }}>
                                    ET₀ = 0.0023 × (T<sub>mean</sub> + 17.8) × √(T<sub>max</sub> − T<sub>min</sub>)
                                </p>
                            </div>
                            <ul style={styles.list}>
                                <li style={styles.listItem}><span style={styles.bold}>T<sub>mean</sub>, T<sub>max</sub>, T<sub>min</sub>:</span> Daily mean, maximum, and minimum air temperature (°C) from NOAA GFS 3-hourly forecasts aggregated daily.</li>
                                <li style={styles.listItem}><span style={styles.bold}>ET₀ output:</span> Reference evapotranspiration in mm/day, converted to inches for the water balance.</li>
                                <li style={styles.listItem}><span style={styles.bold}>Bare soil Kc = 0.6:</span> Applied to ET₀ for bare pre-plant soil (no crop canopy). Typical range 0.5–0.7.</li>
                                <li style={styles.listItem}><span style={styles.bold}>Residue factor:</span> Linear reduction up to 50% at 100% residue cover — Evap = ET₀ × 0.6 × (1 − 0.5 × residue_fraction).</li>
                            </ul>
                        </div>
                    </div>

                    {/* C: GFS Precipitation */}
                    <div style={card('#E3F2FD')}>
                        <h4 style={h4s}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2196F3" strokeWidth="2"><line x1="8" y1="19" x2="8" y2="21"/><line x1="8" y1="13" x2="8" y2="15"/><line x1="16" y1="19" x2="16" y2="21"/><line x1="16" y1="13" x2="16" y2="15"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="12" y1="15" x2="12" y2="17"/><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"/></svg>
                            C. GFS Precipitation Extraction (Incremental Differencing)
                        </h4>
                        <div style={inner('#2196F3')}>
                            <h5 style={h5s}>Why Differencing Is Required</h5>
                            <p style={{ fontSize: isMobile ? '14px' : '15px', lineHeight: '1.6', color: colors.text, marginBottom: '12px' }}>
                                GFS stores <code style={{ backgroundColor: '#f1f1f1', padding: '2px 5px', borderRadius: '3px', color: '#333' }}>total_precipitation_surface</code> as a <strong>cumulative accumulation</strong> from
                                the forecast run start — not a per-timestep value. The tool converts it to daily increments using:
                            </p>
                            <ol style={{ paddingLeft: '25px', margin: 0 }}>
                                <li style={styles.listItem}>Sort all GFS images from the same forecast run by <code style={{ backgroundColor: '#f1f1f1', padding: '2px 4px', borderRadius: '3px', color: '#333' }}>forecast_hours</code> (ascending).</li>
                                <li style={styles.listItem}>Compute increment: <strong>Increment(i) = max(0, Cumulative(i) − Cumulative(i−1))</strong></li>
                                <li style={styles.listItem}>Group incremental images by calendar date (UTC) and sum → daily total (mm).</li>
                                <li style={styles.listItem}>Convert to inches: Precip (in) = Precip (mm) × 0.0393701</li>
                            </ol>
                        </div>
                    </div>

                    {/* D: Soil Properties */}
                    <div style={card('#F3E5F5')}>
                        <h4 style={h4s}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9C27B0" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
                            D. Soil Texture Classification &amp; Hydraulic Properties
                        </h4>
                        <div style={inner('#9C27B0')}>
                            <h5 style={h5s}>From SoilGrids to Field Capacity &amp; PWP</h5>
                            <p style={{ fontSize: isMobile ? '14px' : '15px', lineHeight: '1.6', color: colors.text, marginBottom: '12px' }}>
                                Sand, silt, and clay percentages at 0–5 cm depth are extracted from SoilGrids (values in g/kg ÷ 10 = %).
                                The USDA textural triangle assigns one of 15 texture classes, each with lookup FC and PWP values (in/ft from NRCS Web Soil Survey).
                                Values are scaled to the 6-inch tillage zone: <strong>FC (in) = FC_per_foot × 0.5</strong>.
                            </p>
                            <div style={{ overflowX: 'auto' }}>
                                <table style={tbl}>
                                    <thead>
                                        <tr>
                                            <th style={th('35%')}>Texture Class</th>
                                            <th style={{ ...th('22%'), textAlign: 'center' }}>FC (in/ft)</th>
                                            <th style={{ ...th('22%'), textAlign: 'center' }}>PWP (in/ft)</th>
                                            <th style={{ ...th('21%'), textAlign: 'center' }}>AWC (in/ft)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            ['Coarse Sand', '1.2', '0.6', '0.6'],
                                            ['Fine Sand', '1.5', '0.7', '0.8'],
                                            ['Loamy Sand', '2.2', '1.2', '1.0'],
                                            ['Sandy Loam', '2.7', '1.3', '1.4'],
                                            ['Fine Sandy Loam', '3.4', '1.6', '1.8'],
                                            ['Sandy Clay Loam', '4.0', '2.0', '2.0'],
                                            ['Loam', '4.0', '1.8', '2.2'],
                                            ['Silt Loam', '4.3', '2.0', '2.3'],
                                            ['Silty Clay Loam', '4.6', '2.8', '1.8'],
                                            ['Clay Loam', '4.8', '3.0', '1.8'],
                                            ['Silty Clay', '4.8', '3.2', '1.6'],
                                            ['Clay', '4.8', '3.4', '1.4'],
                                            ['Silt', '4.3', '2.0', '2.3'],
                                            ['Sandy Clay', '4.8', '3.0', '1.8'],
                                            ['Peat / Mucks', '5.0', '2.6', '2.4'],
                                        ].map(([name, fc, pwp, awc], i) => (
                                            <tr key={i}>
                                                <td style={td(i % 2 !== 0)}>{name}</td>
                                                <td style={{ ...td(i % 2 !== 0), textAlign: 'center' }}>{fc}</td>
                                                <td style={{ ...td(i % 2 !== 0), textAlign: 'center' }}>{pwp}</td>
                                                <td style={{ ...td(i % 2 !== 0), textAlign: 'center', fontWeight: '600' }}>{awc}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <p style={{ fontSize: '12px', color: '#666', fontStyle: 'italic', marginTop: '8px', marginBottom: 0 }}>
                                Source: Saxton &amp; Rawls (2006); NRCS Web Soil Survey. FC and PWP scaled to 6-inch tillage depth by multiplying by 0.5.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 3.3 Suitability Analysis */}
                <div style={styles.subsection}>
                    <SubsectionTitle icon={
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#3498db' }}>
                            <polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
                        </svg>
                    }>3. Tillage &amp; Planting Suitability Analysis</SubsectionTitle>
                    <p style={styles.paragraph}>
                        Each day is evaluated independently for each enabled operation. A day is marked ✅ <strong>Suitable</strong> only when <strong>all</strong> applicable criteria
                        are simultaneously met. For days that fail, the specific limiting factor is displayed (e.g., "Soil too wet", "Too soon after rain", "Soil too cold").
                    </p>

                    {/* Soil Moisture */}
                    <div style={card('#E8F5E9')}>
                        <h4 style={h4s}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#388E3C" strokeWidth="2"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>
                            A. Soil Moisture Threshold
                        </h4>
                        <div style={inner('#388E3C')}>
                            <h5 style={h5s}>AWC-Based Dryness Check</h5>
                            <div style={{ backgroundColor: 'white', borderRadius: '6px', padding: '12px 15px', marginBottom: '14px', border: '1px solid #ddd', textAlign: 'center' }}>
                                <p style={{ fontSize: isMobile ? '14px' : '15px', fontWeight: '600', color: colors.primary, margin: 0 }}>
                                    Threshold = FC − (minDryFrac × AWC) &nbsp;|&nbsp; Suitable if: SM(t) ≤ Threshold
                                </p>
                            </div>
                            <div style={{ overflowX: 'auto' }}>
                                <table style={tbl}>
                                    <thead>
                                        <tr>
                                            <th style={th('30%')}>Operation</th>
                                            <th style={{ ...th('20%'), textAlign: 'center' }}>minDryFrac</th>
                                            <th style={th('50%')}>Interpretation</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            ['Primary Tillage', '30%', 'Requires firm, dry soil for deep inversion (moldboard / chisel plow).'],
                                            ['Secondary Tillage', '20%', 'Lighter surface operation; tolerates slightly wetter conditions.'],
                                            ['Planting', '20%', 'Ensures good seed-to-soil contact without soil sticking to equipment.'],
                                        ].map(([op, frac, note], i) => (
                                            <tr key={i}>
                                                <td style={{ ...td(i % 2 !== 0), fontWeight: '600' }}>{op}</td>
                                                <td style={{ ...td(i % 2 !== 0), textAlign: 'center' }}>{frac}</td>
                                                <td style={td(i % 2 !== 0)}>{note}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Days Since Rain */}
                    <div style={card('#E3F2FD')}>
                        <h4 style={h4s}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1976D2" strokeWidth="2"><path d="M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"/><line x1="8" y1="19" x2="8" y2="21"/><line x1="16" y1="19" x2="16" y2="21"/><line x1="12" y1="21" x2="12" y2="23"/></svg>
                            B. Days Since Significant Rain
                        </h4>
                        <div style={inner('#1976D2')}>
                            <h5 style={h5s}>Trafficability Counter</h5>
                            <p style={{ fontSize: isMobile ? '14px' : '15px', lineHeight: '1.6', color: colors.text, marginBottom: '12px' }}>
                                A counter tracks consecutive dry days since the last precipitation ≥ 2.5 mm (~0.10 in). The counter resets to 0 on any rainy day above this threshold.
                            </p>
                            <div style={{ overflowX: 'auto' }}>
                                <table style={tbl}>
                                    <thead>
                                        <tr>
                                            <th style={th('30%')}>Operation</th>
                                            <th style={{ ...th('25%'), textAlign: 'center' }}>Min Dry Days</th>
                                            <th style={th('45%')}>Rationale</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            ['Primary Tillage', '1 day', 'Deep tillage requires field trafficability after rain.'],
                                            ['Secondary Tillage', '0 days', 'Surface operation; can work same day as light rain.'],
                                            ['Planting', '1 day', 'Seed placement requires a settled, firm seedbed.'],
                                        ].map(([op, days, note], i) => (
                                            <tr key={i}>
                                                <td style={{ ...td(i % 2 !== 0), fontWeight: '600' }}>{op}</td>
                                                <td style={{ ...td(i % 2 !== 0), textAlign: 'center' }}>{days}</td>
                                                <td style={td(i % 2 !== 0)}>{note}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* Planting-only criteria */}
                    <div style={card('#FFF8E1')}>
                        <h4 style={h4s}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#F57F17" strokeWidth="2"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/></svg>
                            C. Planting-Only Criteria: Soil Temperature, Wind Speed &amp; Planting Window
                        </h4>
                        <div style={inner('#F57F17')}>
                            <h5 style={h5s}>Minimum Soil Temperature by Crop</h5>
                            <p style={{ fontSize: isMobile ? '14px' : '15px', lineHeight: '1.6', color: colors.text, marginBottom: '12px' }}>
                                Soil temperature is approximated by a <strong>5-day rolling mean of daily mean air temperature</strong> (°C → °F).
                                Planting is blocked if this value falls below the crop minimum.
                            </p>
                            <div style={{ overflowX: 'auto', marginBottom: '16px' }}>
                                <table style={tbl}>
                                    <thead>
                                        <tr>
                                            <th style={th('25%')}>Crop</th>
                                            <th style={{ ...th('30%'), textAlign: 'center' }}>Min Soil Temp</th>
                                            <th style={th('45%')}>Planting Window (US)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            ['🌽 Corn', '50°F (10°C)', 'Mar 15 – Jun 15'],
                                            ['🌿 Cotton', '60°F (15.6°C)', 'Apr 1 – Jun 30'],
                                            ['🥜 Peanut', '56°F (13.3°C)', 'Apr 15 – Jul 15'],
                                            ['🌾 Barley', '34°F (1.1°C)', 'Sep 30 – Oct 15'],
                                            ['🌾 Wheat', '34°F (1.1°C)', 'Oct 10 – Nov 10'],
                                        ].map(([crop, temp, win], i) => (
                                            <tr key={i}>
                                                <td style={{ ...td(i % 2 !== 0), fontWeight: '600' }}>{crop}</td>
                                                <td style={{ ...td(i % 2 !== 0), textAlign: 'center' }}>{temp}</td>
                                                <td style={td(i % 2 !== 0)}>{win}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <ul style={styles.list}>
                                <li style={styles.listItem}><span style={styles.bold}>Wind Speed Limit:</span> Planting is blocked if wind exceeds <strong>10 m/s (~22 mph)</strong>. Wind magnitude = √(u² + v²) from GFS 10 m wind components.</li>
                                <li style={styles.listItem}><span style={styles.bold}>Planting Window:</span> Planting is blocked on any day outside the crop-specific window regardless of weather. The window is shown to users after crop selection.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* 3.4 Operations Scheduling */}
                <div style={styles.subsection}>
                    <SubsectionTitle icon={
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#3498db' }}>
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                        </svg>
                    }>4. Operations Scheduling &amp; Economic Analysis</SubsectionTitle>
                    <p style={styles.paragraph}>
                        Once suitability is determined, a sequential scheduler assigns work to suitable days in priority order:
                        Primary Tillage → Secondary Tillage → Planting. It calculates fuel, labor, and equipment costs per session and totals.
                    </p>

                    <div style={card('#E8F5E9')}>
                        <h4 style={h4s}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2E7D32" strokeWidth="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
                            A. Operation Parameters
                        </h4>
                        <div style={inner('#2E7D32')}>
                            <div style={{ overflowX: 'auto' }}>
                                <table style={tbl}>
                                    <thead>
                                        <tr>
                                            <th style={th('25%')}>Operation</th>
                                            <th style={{ ...th('15%'), textAlign: 'center' }}>Priority</th>
                                            <th style={{ ...th('20%'), textAlign: 'center' }}>Capacity (ac/hr)</th>
                                            <th style={{ ...th('15%'), textAlign: 'center' }}>Fuel (gal/ac)</th>
                                            <th style={th('25%')}>Equipment Examples</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            ['Primary Tillage', '1st', '8', '1.6', 'Moldboard plow, chisel plow'],
                                            ['Secondary Tillage', '2nd', '10', '0.7', 'Disk harrow, field cultivator'],
                                            ['Planting', '3rd', '6', '0.45', 'Row planter, grain drill'],
                                        ].map(([op, pri, cap, fuel, equip], i) => (
                                            <tr key={i}>
                                                <td style={{ ...td(i % 2 !== 0), fontWeight: '600' }}>{op}</td>
                                                <td style={{ ...td(i % 2 !== 0), textAlign: 'center' }}>{pri}</td>
                                                <td style={{ ...td(i % 2 !== 0), textAlign: 'center' }}>{cap}</td>
                                                <td style={{ ...td(i % 2 !== 0), textAlign: 'center' }}>{fuel}</td>
                                                <td style={td(i % 2 !== 0)}>{equip}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div style={card('#E3F2FD')}>
                        <h4 style={h4s}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1565C0" strokeWidth="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                            B. Cost Calculation Formulas
                        </h4>
                        <div style={inner('#1565C0')}>
                            <h5 style={h5s}>Per Work Session</h5>
                            <ul style={styles.list}>
                                <li style={styles.listItem}><span style={styles.bold}>Effective Capacity:</span> Operation Capacity (ac/hr) × Field Efficiency (%)</li>
                                <li style={styles.listItem}><span style={styles.bold}>Area Worked:</span> min(Effective Capacity × Hours Available, Area Remaining)</li>
                                <li style={styles.listItem}><span style={styles.bold}>Fuel Cost ($):</span> Area (ac) × Fuel Rate (gal/ac) × Fuel Price ($/gal)</li>
                                <li style={styles.listItem}><span style={styles.bold}>Labor Cost ($):</span> Hours Used × Labor Rate ($/hr)</li>
                                <li style={styles.listItem}><span style={styles.bold}>Equipment Cost ($):</span> Hours Used × Equipment Rate ($/hr)</li>
                                <li style={styles.listItem}><span style={styles.bold}>Total Cost ($):</span> Fuel + Labor + Equipment</li>
                                <li style={styles.listItem}><span style={styles.bold}>Cost per Acre ($/ac):</span> Total Cost ÷ Area Worked</li>
                            </ul>
                            <h5 style={{ ...h5s, marginTop: '15px' }}>Default Parameters (All User-Adjustable in the UI)</h5>
                            <ul style={styles.list}>
                                <li style={styles.listItem}><span style={styles.bold}>Working hours/day:</span> 10 hrs &nbsp;|&nbsp; <span style={styles.bold}>Number of rigs:</span> 1 &nbsp;|&nbsp; <span style={styles.bold}>Field efficiency:</span> 75%</li>
                                <li style={styles.listItem}><span style={styles.bold}>Fuel price:</span> $3.50/gal &nbsp;|&nbsp; <span style={styles.bold}>Labor rate:</span> $20.00/hr &nbsp;|&nbsp; <span style={styles.bold}>Equipment rate:</span> $35.00/hr</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── 4. Tillage System & Residue Cover ── */}
            <div style={styles.section}>
                <h2 style={styles.sectionTitle}>4. Tillage System &amp; Residue Cover</h2>
                <p style={styles.paragraph}>
                    Residue cover reduces bare soil evaporation. The tool applies different residue percentages based on the tillage system, crop,
                    and season (spring = Day of Year ≤ 180; fall = DOY &gt; 180). The reduction is linear: up to 50% at 100% residue cover.
                </p>
                <div style={{ overflowX: 'auto' }}>
                    <table style={tbl}>
                        <thead>
                            <tr>
                                <th style={th('18%')}>Crop</th>
                                <th style={{ ...th('22%'), textAlign: 'center' }}>Conventional</th>
                                <th style={{ ...th('30%'), textAlign: 'center' }}>Mulch Till (Spring / Fall)</th>
                                <th style={{ ...th('30%'), textAlign: 'center' }}>No-Till (Spring / Fall)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ['🌽 Corn', '0%', '40% / 50%', '80% / 90%'],
                                ['🌿 Cotton', '0%', '40% / 50%', '80% / 90%'],
                                ['🥜 Peanut', '0%', '20% / 25%', '40% / 45%'],
                                ['🌾 Barley', '0%', '40% / 50%', '80% / 90%'],
                                ['🌾 Wheat', '0%', '40% / 50%', '80% / 90%'],
                            ].map(([crop, conv, mulch, notill], i) => (
                                <tr key={i}>
                                    <td style={{ ...td(i % 2 !== 0), fontWeight: '600' }}>{crop}</td>
                                    <td style={{ ...td(i % 2 !== 0), textAlign: 'center' }}>{conv}</td>
                                    <td style={{ ...td(i % 2 !== 0), textAlign: 'center' }}>{mulch}</td>
                                    <td style={{ ...td(i % 2 !== 0), textAlign: 'center' }}>{notill}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <p style={{ fontSize: '12px', color: '#666', fontStyle: 'italic', marginTop: '8px' }}>
                    Note: Peanut residue values are ~50% of corn/grain values due to lower residue biomass.
                </p>
            </div>

            {/* ── 5. How to Use ── */}
            <div style={styles.section}>
                <h2 style={styles.sectionTitle}>5. How to Use the Tool</h2>
                <div style={styles.subsection}>
                    <ol style={{ paddingLeft: '25px', margin: 0 }}>
                        {[
                            'Use the map search box to navigate to your field location.',
                            'Select the number of fields (1–5) from the dropdown.',
                            'Draw field polygons on the map using the drawing tool. Drawing stops automatically once all fields are traced.',
                            'Click "Load" to validate geometries and launch the analysis interface.',
                            'Select the crop (Corn, Cotton, Peanut, Barley, or Wheat). The crop-specific planting window is shown automatically.',
                            'Select the tillage system: Conventional, Mulch Till, or No-Till.',
                            'Check / uncheck operations to include: Primary Tillage, Secondary Tillage, Planting.',
                            'Adjust economic parameters if needed (fuel price, labor rate, equipment rate, field efficiency).',
                            'Click "Calculate Tillage & Planting Suitability".',
                            'Review the two output panels: Suitability Matrix and Operations Schedule & Cost Analysis.',
                            'Use "Clear All" to reset and start a new analysis.',
                        ].map((step, i) => (
                            <li key={i} style={{ ...styles.listItem, paddingLeft: '5px', marginBottom: '10px' }}>{step}</li>
                        ))}
                    </ol>
                </div>

                <div style={styles.subsection}>
                    <SubsectionTitle icon={
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#3498db' }}>
                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
                        </svg>
                    }>Output Tables Explained</SubsectionTitle>
                    <ul style={styles.list}>
                        <li style={styles.listItem}><span style={styles.bold}>16-Day Suitability Matrix:</span> Date × operation grid. Each cell shows ✅ Suitable or ❌ Not Suitable with the specific reason for any unsuitable day (e.g., soil too wet, too soon after rain, soil too cold, wind too strong, outside planting window). A summary below the matrix shows the count and percentage of suitable days for each operation.</li>
                        <li style={styles.listItem}><span style={styles.bold}>Operations Schedule &amp; Economic Analysis:</span> A detailed per-session table showing Date, Operation, Acres Worked, Hours Used, Fuel (gal), Fuel $, Labor $, Equipment $, Total $, and $/Acre — with a Totals row and a completion status indicator (✓ All operations completed / ⚠ Incomplete with progress %).</li>
                    </ul>
                </div>
            </div>

            {/* ── 6. Limitations ── */}
            <div style={styles.section}>
                <h2 style={styles.sectionTitle}>6. Limitations &amp; Uncertainties</h2>
                <div style={{ overflowX: 'auto' }}>
                    <table style={tbl}>
                        <thead>
                            <tr>
                                <th style={th('28%')}>Limitation</th>
                                <th style={th('72%')}>Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ['GFS forecast uncertainty', 'Temperature and precipitation forecast accuracy degrades beyond 7–10 days. Days 8–16 should be treated as indicative, not definitive.'],
                                ['Spatial resolution', 'SMAP (~9 km) and GFS (~25 km) are coarser than typical field scale. Results represent field-average conditions and may not capture localized wet spots or drainage variability.'],
                                ['Soil texture single point', 'SoilGrids data represents a spatial mean over the drawn polygon. Fields with heterogeneous soils will receive a single texture class.'],
                                ['Bare soil assumption', 'The water balance assumes bare soil throughout the 16-day period. Standing residue beyond the tillage system defaults is not accounted for.'],
                                ['No runoff or drainage', 'The model does not include surface runoff or subsurface drainage. In high-rainfall events soil moisture may be overestimated (bounded at FC).'],
                                ['Soil temperature proxy', 'Soil temperature is approximated from a 5-day rolling air temperature mean. Thermal inertia, mulch insulation, and residue effects are not modeled.'],
                                ['US-centric planting windows', 'Planting windows reflect typical US mid-Atlantic/southeastern dates and may not match conditions in all US states.'],
                            ].map(([lim, desc], i) => (
                                <tr key={i}>
                                    <td style={{ ...td(i % 2 !== 0), fontWeight: '600' }}>{lim}</td>
                                    <td style={td(i % 2 !== 0)}>{desc}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* ── 7. Supported Crops ── */}
            <div style={styles.section}>
                <h2 style={styles.sectionTitle}>7. Supported Crops</h2>
                <p style={styles.paragraph}>
                    The tool supports five major US crops, each with a crop-specific minimum soil temperature for planting and a defined US planting window.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr 1fr' : '1fr 1fr 1fr 1fr 1fr', gap: '15px', marginTop: '10px' }}>
                    {[
                        { crop: 'Corn', icon: '🌽', temp: '50°F' },
                        { crop: 'Cotton', icon: '🌿', temp: '60°F' },
                        { crop: 'Peanut', icon: '🥜', temp: '56°F' },
                        { crop: 'Barley', icon: '🌾', temp: '34°F' },
                        { crop: 'Wheat', icon: '🌾', temp: '34°F' },
                    ].map((item, i) => (
                        <div key={i} style={{ backgroundColor: 'white', borderRadius: '8px', padding: '15px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', border: '1px solid #e9ecef' }}>
                            <div style={{ fontSize: '28px', marginBottom: '8px' }}>{item.icon}</div>
                            <span style={{ fontSize: isMobile ? '14px' : '16px', fontWeight: '600', color: colors.primary }}>{item.crop}</span>
                            <span style={{ fontSize: '12px', color: '#666', marginTop: '4px' }}>Min Soil: {item.temp}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* ── 8. Data Sources ── */}
            <div style={styles.section}>
                <h2 style={styles.sectionTitle}>8. Data Sources</h2>
                <div style={{ overflowX: 'auto', marginTop: '20px' }}>
                    <table style={tbl}>
                        <thead>
                            <tr>
                                <th style={th('25%')}>Dataset Name</th>
                                <th style={th('55%')}>Description</th>
                                <th style={th('20%')}>Dataset Link</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                {
                                    name: 'NASA SMAP L4',
                                    code: 'NASA/SMAP/SPL4SMGP/008',
                                    desc: 'Level-4 root zone soil moisture (sm_rootzone, m³/m³) at ~9 km / 3-hourly. Initializes the 16-day bare soil water balance model.',
                                    link: 'https://developers.google.com/earth-engine/datasets/catalog/NASA_SMAP_SPL4SMGP_008',
                                    alt: false,
                                },
                                {
                                    name: 'NOAA GFS 0.25°',
                                    code: 'NOAA/GFS0P25',
                                    desc: '16-day numerical weather prediction at ~25 km / 3-hourly. Provides temperature (2 m), cumulative precipitation, and u/v wind components at 10 m.',
                                    link: 'https://developers.google.com/earth-engine/datasets/catalog/NOAA_GFS0P25',
                                    alt: true,
                                },
                                {
                                    name: 'SoilGrids ISRIC',
                                    code: 'projects/soilgrids-isric/sand_mean\nprojects/soilgrids-isric/silt_mean\nprojects/soilgrids-isric/clay_mean',
                                    desc: 'Global soil texture data (sand, silt, clay at 0–5 cm, 250 m resolution). Used to classify USDA texture and derive Field Capacity and Permanent Wilting Point.',
                                    link: 'https://www.isric.org/explore/soilgrids',
                                    alt: false,
                                },
                            ].map((row, i) => (
                                <tr key={i}>
                                    <td style={{ ...td(row.alt), verticalAlign: 'top' }}>
                                        <span style={{ fontWeight: '600', color: '#2c3e50', display: 'block', marginBottom: '5px' }}>{row.name}</span>
                                        {row.code.split('\n').map((c, ci) => (
                                            <code key={ci} style={{ color: '#555', fontSize: '12px', backgroundColor: '#f1f1f1', padding: '3px 6px', borderRadius: '4px', display: 'inline-block', marginBottom: '3px' }}>{c}</code>
                                        ))}
                                    </td>
                                    <td style={{ ...td(row.alt), verticalAlign: 'top' }}>{row.desc}</td>
                                    <td style={{ ...td(row.alt), verticalAlign: 'top' }}>
                                        <a href={row.link} target="_blank" rel="noopener noreferrer" style={{ color: '#3498db', textDecoration: 'none', fontWeight: 'bold' }}>View Dataset →</a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* ── 9. References ── */}
            <div style={styles.section}>
                <h2 style={styles.sectionTitle}>9. Scientific References</h2>
                <div style={styles.subsection}>
                    <ul style={{ ...styles.list, paddingLeft: '5px' }}>
                        {[
                            { text: 'Allen, R.G., Pereira, L.S., Raes, D., & Smith, M. (1998). Crop evapotranspiration: Guidelines for computing crop water requirements. FAO Irrigation and Drainage Paper No. 56. FAO, Rome.', link: null },
                            { text: 'Hargreaves, G.H., & Samani, Z.A. (1985). Reference crop evapotranspiration from temperature. Applied Engineering in Agriculture, 1(2), 96–99.', link: 'https://doi.org/10.13031/2013.26773' },
                            { text: 'National Centers for Environmental Prediction (2015). NOAA Global Forecast System (GFS) Atmospheric Model Collection. NOAA National Centers for Environmental Information.', link: 'https://doi.org/10.7289/V5D21VHZ' },
                            { text: 'Poggio, L., et al. (2021). SoilGrids 2.0: producing soil information for the globe with quantified spatial uncertainty. SOIL, 7(1), 217–240.', link: 'https://doi.org/10.5194/soil-7-217-2021' },
                            { text: 'Reichle, R.H., et al. (2019). Version 4 of the SMAP Level-4 Soil Moisture Algorithm and Data Product. Journal of Advances in Modeling Earth Systems, 11(10), 3106–3130.', link: 'https://doi.org/10.1029/2019MS001729' },
                            { text: 'Saxton, K.E., & Rawls, W.J. (2006). Soil water characteristic estimates by texture and organic matter for hydrologic solutions. Soil Science Society of America Journal, 70(5), 1569–1578.', link: 'https://doi.org/10.2136/sssaj2005.0117' },
                            { text: 'USDA Natural Resources Conservation Service (NRCS). Web Soil Survey.', link: 'https://websoilsurvey.nrcs.usda.gov/' },
                            { text: 'Google Earth Engine Team (2023). Google Earth Engine: A planetary-scale platform for Earth science data and analysis. Science, 340(6183), 209–213.', link: 'https://doi.org/10.1126/science.1244693' },
                        ].map((ref, i) => (
                            <li key={i} style={{ ...styles.listItem, marginBottom: '14px' }}>
                                {ref.text}
                                {ref.link && (
                                    <> <a href={ref.link} target="_blank" rel="noopener noreferrer" style={{ color: colors.link }}>{ref.link}</a></>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div style={styles.section}>
                <h2 style={styles.sectionTitle}>10. Product Demo</h2>
                <div style={{
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    gap: '20px',
                    marginTop: '20px',
                    flexWrap: 'wrap'
                }}>
                    <div style={{
                        flex: '1',
                        background: 'linear-gradient(135deg, #e67e22 0%, #d35400 100%)',
                        borderRadius: '20px',
                        padding: '40px',
                        color: 'white',
                        position: 'relative',
                        overflow: 'hidden',
                        boxShadow: '0 10px 30px rgba(230, 126, 34, 0.2)',
                        display: 'flex',
                        flexDirection: 'column',
                        minHeight: isMobile ? 'auto' : '600px'
                    }}>
                        <div style={{
                            position: 'absolute',
                            top: 0, left: 0, right: 0, bottom: 0,
                            opacity: 0.1,
                            background: 'radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.3) 0%, transparent 40%)',
                            zIndex: 1
                        }} />
                        <div style={{ position: 'relative', zIndex: 2, flex: 1, display: 'flex', flexDirection: 'column' }}>
                            <h3 style={{ margin: '0 0 15px 0', fontSize: '28px', fontWeight: '600', letterSpacing: '0.5px' }}>
                                Tillage &amp; Planting Scheduler Tool Demo
                            </h3>
                            <p style={{ margin: '0 0 30px 0', fontSize: '16px', opacity: 0.9, lineHeight: '1.6' }}>
                                Get a comprehensive walkthrough of all features in the Tillage &amp; Planting Scheduler App. Learn how to identify optimal field entry windows, evaluate soil trafficability, and plan planting operations using weather and soil data.
                            </p>
                            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <div style={{
                                    position: 'relative', width: '100%', flex: 1,
                                    minHeight: '300px', backgroundColor: 'rgba(0, 0, 0, 0.1)',
                                    borderRadius: '12px', overflow: 'hidden'
                                }}>
                                    <iframe
                                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                                        src="https://www.youtube.com/embed/MDI1-GVK5T8"
                                        title="Tillage and Planting Scheduler Video"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                                <a
                                    href="https://youtu.be/MDI1-GVK5T8"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: 'inline-flex', alignItems: 'center', gap: '10px',
                                        background: 'rgba(255, 255, 255, 0.1)', padding: '12px 24px',
                                        borderRadius: '30px', backdropFilter: 'blur(5px)',
                                        color: 'white', textDecoration: 'none',
                                        transition: 'all 0.3s ease', cursor: 'pointer'
                                    }}
                                    onMouseEnter={(e) => { e.target.style.background = 'rgba(255, 255, 255, 0.2)'; }}
                                    onMouseLeave={(e) => { e.target.style.background = 'rgba(255, 255, 255, 0.1)'; }}
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

                    {/* Tillage & Planting Scheduler Tool Demo (Mobile) */}
                    <div style={{
                        flex: '1',
                        background: 'linear-gradient(135deg, #27ae60 0%, #1e8449 100%)',
                        borderRadius: '20px',
                        padding: '40px',
                        color: 'white',
                        position: 'relative',
                        overflow: 'hidden',
                        boxShadow: '0 10px 30px rgba(39, 174, 96, 0.2)',
                        display: 'flex',
                        flexDirection: 'column',
                        minHeight: isMobile ? 'auto' : '600px'
                    }}>
                        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.1, background: 'radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.3) 0%, transparent 40%)', zIndex: 1 }} />
                        <div style={{ position: 'relative', zIndex: 2, flex: 1, display: 'flex', flexDirection: 'column' }}>
                            <h3 style={{ margin: '0 0 15px 0', fontSize: '28px', fontWeight: '600', letterSpacing: '0.5px' }}>
                                Tillage &amp; Planting Scheduler Tool Demo (Mobile)
                            </h3>
                            <p style={{ margin: '0 0 30px 0', fontSize: '16px', opacity: 0.9, lineHeight: '1.6' }}>
                                Use the Tillage &amp; Planting Scheduler on your mobile device. Learn how to evaluate field conditions and plan operations efficiently from the field on smaller screens.
                            </p>
                            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <div style={{ position: 'relative', width: '100%', flex: 1, minHeight: '300px', backgroundColor: 'rgba(0,0,0,0.1)', borderRadius: '12px', overflow: 'hidden' }}>
                                    <iframe
                                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 'none' }}
                                        src="https://www.youtube.com/embed/NRAPNp-nMO0"
                                        title="Tillage and Planting Scheduler Tool Demo Video (Mobile)"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                                <a href="https://youtu.be/NRAPNp-nMO0" target="_blank" rel="noopener noreferrer"
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

export default TillagePlantingDocumentation;
