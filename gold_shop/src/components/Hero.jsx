import React, { useState } from 'react'
import { FileTextIcon, CheckIcon, ArrowUpRightIcon, Building2Icon } from './Icons'

export default function Hero({ onGetStarted, onExploreFeatures }) {
  const [activeInstalment, setActiveInstalment] = useState(8)
  const [qrScanned, setQrScanned] = useState(false)

  return (
    <section id="home" className="hero-section">
      <div className="hero-grid">
        {/* ============================================================== */}
        {/* LEFT COLUMN: GOLDEN QR PASSBOOK STAND ON MARBLE PEDESTAL      */}
        {/* ============================================================== */}
        <div className="hero-left-column">
          <div className="pedestal-stage">
            {/* Acrylic Glass Plaque */}
            <div
              className={`acrylic-plaque ${qrScanned ? 'scanned-pulse' : ''}`}
              onClick={() => setQrScanned(!qrScanned)}
              title="Click to simulate Passbook QR scan"
            >
              {/* Acrylic glass edge reflection */}
              <div className="acrylic-glass-reflection" />
              
              {/* Inner Gold Metal Plate */}
              <div className="gold-engraved-plate">
                {/* Traditional South Indian Corner Filigrees */}
                <div className="filigree filigree-tl" />
                <div className="filigree filigree-tr" />
                <div className="filigree filigree-bl" />
                <div className="filigree filigree-br" />

                {/* Plaque Header */}
                <h4 className="plaque-title">Scan Passbook QR<br />for Delivery</h4>

                {/* High Detail Vector QR Code */}
                <div className="qr-container">
                  <svg viewBox="0 0 140 140" className="qr-code-svg">
                    <rect width="140" height="140" fill="#fff7e0" rx="6" />
                    
                    {/* Top-Left Finder */}
                    <rect x="12" y="12" width="34" height="34" fill="#2d1b04" rx="3" />
                    <rect x="17" y="17" width="24" height="24" fill="#fff7e0" />
                    <rect x="22" y="22" width="14" height="14" fill="#c79224" rx="2" />
                    
                    {/* Top-Right Finder */}
                    <rect x="94" y="12" width="34" height="34" fill="#2d1b04" rx="3" />
                    <rect x="99" y="17" width="24" height="24" fill="#fff7e0" />
                    <rect x="104" y="22" width="14" height="14" fill="#c79224" rx="2" />
                    
                    {/* Bottom-Left Finder */}
                    <rect x="12" y="94" width="34" height="34" fill="#2d1b04" rx="3" />
                    <rect x="17" y="99" width="24" height="24" fill="#fff7e0" />
                    <rect x="22" y="104" width="14" height="14" fill="#c79224" rx="2" />
                    
                    {/* Data Matrix Modules Pattern */}
                    <g fill="#2d1b04">
                      <rect x="52" y="16" width="6" height="6" />
                      <rect x="64" y="16" width="12" height="6" />
                      <rect x="80" y="16" width="6" height="6" />

                      <rect x="52" y="26" width="12" height="6" />
                      <rect x="70" y="26" width="6" height="6" />
                      <rect x="82" y="26" width="6" height="6" />

                      <rect x="52" y="36" width="6" height="6" />
                      <rect x="62" y="36" width="6" height="14" />
                      <rect x="74" y="36" width="14" height="6" />

                      <rect x="16" y="52" width="6" height="12" />
                      <rect x="28" y="52" width="14" height="6" />
                      <rect x="46" y="52" width="6" height="6" />
                      <rect x="58" y="52" width="8" height="8" fill="#b07d1a" />
                      <rect x="74" y="52" width="8" height="8" fill="#b07d1a" />
                      <rect x="90" y="52" width="12" height="6" />
                      <rect x="110" y="52" width="14" height="6" />

                      <rect x="16" y="70" width="12" height="6" />
                      <rect x="34" y="70" width="6" height="12" />
                      <rect x="46" y="66" width="10" height="10" fill="#c79224" />
                      <rect x="62" y="66" width="16" height="16" fill="#7a520e" rx="2" />
                      <rect x="84" y="66" width="10" height="10" fill="#c79224" />
                      <rect x="100" y="70" width="8" height="6" />
                      <rect x="114" y="66" width="10" height="12" />

                      <rect x="16" y="82" width="18" height="6" />
                      <rect x="52" y="86" width="6" height="14" />
                      <rect x="64" y="86" width="14" height="6" />
                      <rect x="84" y="82" width="6" height="18" />
                      <rect x="96" y="86" width="12" height="6" />
                      <rect x="114" y="84" width="10" height="6" />

                      <rect x="52" y="106" width="12" height="6" />
                      <rect x="70" y="106" width="8" height="14" />
                      <rect x="84" y="106" width="14" height="6" />
                      <rect x="104" y="100" width="8" height="8" />
                      <rect x="118" y="106" width="6" height="14" />

                      <rect x="52" y="120" width="6" height="8" />
                      <rect x="64" y="120" width="12" height="8" />
                      <rect x="82" y="120" width="6" height="8" />
                      <rect x="94" y="118" width="18" height="8" />
                    </g>
                  </svg>

                  {/* QR Scan laser simulator */}
                  <div className="qr-laser-scanner" />
                </div>

                <div className="plaque-sub">
                  {qrScanned ? '✓ Passbook #TN-9842 Verified' : 'Instant Counter Verification'}
                </div>
              </div>

              {/* Acrylic base slot */}
              <div className="acrylic-base-slot" />
            </div>

            {/* Marble Tiered Pedestal Base */}
            <div className="marble-pedestal">
              <div className="pedestal-top-rim" />
              <div className="pedestal-marble-body">
                <div className="marble-veins" />
              </div>
              <div className="pedestal-bottom-base" />
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* CENTER COLUMN: MAIN HEADINGS, DESCRIPTION, 3 HIGHLIGHTS, CTAS  */}
        {/* ============================================================== */}
        <div className="hero-center-column">
          {/* Main Hero Headings */}
          <h1 className="hero-main-title">
            <span className="title-white">RUN HIGH-PROFIT JEWELLERY</span>
            <span className="title-white">SCHEMES</span>
            <span className="title-gold-emboss">WITH ZERO MANUAL STRESS</span>
          </h1>

          {/* Subtitle description */}
          <p className="hero-description">
            One easy software for jewellers to manage gold chit schemes, digital gold &amp; silver,
            daily board rates, multi-language customer passbooks, cashier audits, and multi-branch
            stock — all in one place.
          </p>

          {/* Three Compact Highlights */}
          <div className="badges-row">
            {/* Highlight 1: Audit Trail */}
            <div className="badge-item glass-pill">
              <FileTextIcon size={16} className="badge-icon-gold" />
              <span className="badge-text">Audit Trail</span>
            </div>

            {/* Highlight 2: Liability Tracking (₹1.48 Cr) */}
            <div className="badge-item badge-liability-highlight">
              <span className="liability-label">Liability Tracking:</span>
              <span className="liability-value">₹1.48 Cr</span>
            </div>

            {/* Highlight 3: Multi-Branch Control */}
            <div className="badge-item glass-pill">
              <Building2Icon size={15} className="badge-icon-gold" />
              <span className="badge-text">Multi-Branch Control</span>
            </div>
          </div>

          {/* Primary Action Buttons */}
          <div className="hero-cta-group">
            {/* Button 1: Get Started Now */}
            <button
              type="button"
              className="btn-primary-gold"
              onClick={onGetStarted}
            >
              <span>GET STARTED NOW</span>
              <ArrowUpRightIcon size={16} />
              <div className="btn-shimmer" />
            </button>

            {/* Button 2: Explore Features */}
            <button
              type="button"
              className="btn-secondary-glass"
              onClick={onExploreFeatures}
            >
              <span>EXPLORE FEATURES</span>
            </button>
          </div>
        </div>

        {/* ============================================================== */}
        {/* RIGHT COLUMN: 3D SMARTPHONE MOCKUP ON GOLD PEDESTAL            */}
        {/* ============================================================== */}
        <div className="hero-right-column">
          <div className="phone-stage">
            {/* Floating Card 1: Gold Mentions (Bangles) */}
            <div className="floating-widget widget-gold-mentions">
              <div className="widget-glass">
                <div className="widget-header">
                  <span className="widget-title">Gold<br />Mentions</span>
                </div>
                <div className="widget-bangles-preview">
                  <svg viewBox="0 0 70 70" className="bangles-svg">
                    <circle cx="35" cy="35" r="28" stroke="url(#goldGradBangle)" strokeWidth="5" fill="none" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.6))" />
                    <circle cx="33" cy="33" r="23" stroke="#F4D58D" strokeWidth="2.5" fill="none" opacity="0.9" />
                    <circle cx="35" cy="35" r="18" stroke="#D4AF37" strokeWidth="2" fill="none" strokeDasharray="3 3" />
                    <defs>
                      <linearGradient id="goldGradBangle" x1="0" y1="0" x2="1" y2="1">
                        <stop offset="0%" stopColor="#FFF9EE" />
                        <stop offset="40%" stopColor="#F5BE43" />
                        <stop offset="80%" stopColor="#D4AF37" />
                        <stop offset="100%" stopColor="#F4D58D" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>

            {/* Floating Card 2: Liability Modules (Necklace) */}
            <div className="floating-widget widget-liability-modules">
              <div className="widget-glass">
                <div className="widget-header">
                  <span className="widget-title">Liability<br />Modules</span>
                </div>
                <div className="widget-necklace-preview">
                  <svg viewBox="0 0 70 70" className="necklace-svg">
                    <path d="M12 25 Q35 55 58 25" stroke="url(#goldGradBangle)" strokeWidth="4.5" fill="none" />
                    <path d="M18 29 Q35 60 52 29" stroke="#FFF9EE" strokeWidth="2.5" fill="none" />
                    <circle cx="35" cy="52" r="5" fill="#F5BE43" stroke="#fff" strokeWidth="1" />
                    <circle cx="28" cy="47" r="3.5" fill="#D4AF37" />
                    <circle cx="42" cy="47" r="3.5" fill="#D4AF37" />
                    <circle cx="22" cy="40" r="3" fill="#F5BE43" />
                    <circle cx="48" cy="40" r="3" fill="#F5BE43" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Realistic iPhone Mockup */}
            <div className="smartphone-mockup">
              <div className="phone-bezel">
                {/* Dynamic Island Notch */}
                <div className="dynamic-island">
                  <div className="camera-lens" />
                </div>

                {/* Smartphone Screen Content */}
                <div className="phone-screen">
                  {/* App Header */}
                  <div className="app-topbar">
                    <span className="app-back">‹</span>
                    <span className="app-title">Thanganidhi<br /><small>Customer Passbook</small></span>
                    <span className="app-home">⌂</span>
                  </div>

                  {/* Customer Passbook VIP Gold Card */}
                  <div className="user-passbook-card">
                    <div className="avatar-wrap">
                      <div className="avatar-img">
                        <span className="avatar-initials">AK</span>
                      </div>
                    </div>
                    <div className="user-details">
                      <div className="user-name">Ananya Krishnan</div>
                      <div className="user-sub">Customer Passbook • #TK-8402</div>
                    </div>
                    <div className="card-chip" />
                  </div>

                  {/* Active Scheme Progress Card (Emerald Green & Gold) */}
                  <div className="scheme-card-green">
                    <div className="scheme-row-top">
                      <span className="scheme-name">Active Scheme: Plan 11 Months</span>
                    </div>
                    <div className="scheme-progress-wrap">
                      <div className="scheme-progress-bar">
                        <div
                          className="scheme-progress-fill"
                          style={{ width: `${(activeInstalment / 11) * 100}%` }}
                        />
                      </div>
                      <div className="scheme-progress-label">
                        <span>{activeInstalment}/11 Instalments Paid</span>
                        <span className="scheme-percentage">
                          {Math.round((activeInstalment / 11) * 100)}%
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Gold Weight Ledger Card */}
                  <div className="ledger-card">
                    <div className="ledger-header">
                      <span>Gold Weight Ledger</span>
                      <span className="ledger-col-head">Weight</span>
                    </div>

                    <div className="ledger-summary-row">
                      <span className="ledger-label">Total Gold Value</span>
                      <span className="ledger-val-gold">₹1.48 Cr</span>
                    </div>

                    <div className="ledger-rows-list">
                      <div className="ledger-item">
                        <span className="ledger-item-month">Month 8 (Nov)</span>
                        <span className="ledger-item-grams">+2.450 g</span>
                      </div>
                      <div className="ledger-item">
                        <span className="ledger-item-month">Month 7 (Oct)</span>
                        <span className="ledger-item-grams">+2.520 g</span>
                      </div>
                      <div className="ledger-item">
                        <span className="ledger-item-month">Month 6 (Sep)</span>
                        <span className="ledger-item-grams">+2.610 g</span>
                      </div>
                    </div>
                  </div>

                  {/* Phone Bottom App Navigation */}
                  <div className="phone-bottom-nav">
                    <span className="nav-icon active">⌂</span>
                    <span className="nav-icon">📖</span>
                    <span className="nav-icon">🔔</span>
                    <span className="nav-icon">👤</span>
                  </div>

                  {/* iOS bottom indicator */}
                  <div className="ios-home-indicator" />
                </div>
              </div>
            </div>

            {/* Gold Tiered Pedestal below Phone */}
            <div className="gold-cylinder-pedestal">
              <div className="pedestal-gold-top" />
              <div className="pedestal-ribbed-body" />
              <div className="pedestal-gold-bottom" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
