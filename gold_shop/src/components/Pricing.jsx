import React, { useState } from 'react'
import { SparklesIcon, CheckCircleIcon, ArrowUpRightIcon } from './Icons'

export default function Pricing({ onBookDemo }) {
  const [chitType, setChitType] = useState('gold') // 'gold' | 'silver'
  const [billingCycle, setBillingCycle] = useState('monthly') // 'monthly' | 'annually'
  const [showComparisonTable, setShowComparisonTable] = useState(false)

  // ==========================================
  // GOLD CHITS CONTENT & PRICING
  // ==========================================
  const goldData = {
    badge: 'TRANSPARENT PLANS FOR GOLD SCHEMES & CHITS',
    title: 'Transparent Pricing for Gold Chit Showrooms',
    subtitle: 'Choose the ideal plan for 22K & 24K gold accumulation, DigiGold schemes, and showroom passbooks.',
    card1: {
      name: 'Swarna Bachat Chit',
      tag: 'Single Showroom Chit',
      members: 'Up to 500 Active Chit Members',
      scope: 'Single Showroom • 1 - 3 Counter Passbooks',
      monthlyPrice: '1,499',
      annualPrice: '999',
      frequencyMonthly: 'Billed monthly',
      frequencyAnnual: 'Billed annually (Save 33%)',
      included: 'Free Onboarding, Staff Training & Ledger Import',
      btnText: 'START GOLD CHIT TRIAL',
      trialText: 'Start 14-day free chit trial →',
      coreFeatures: [
        '11-Month Fixed Gold Chit Scheme Engine',
        'Daily 22K & 24K Live Bullion Rate Lock',
        'Digital Customer Gold Passbook (Web & QR)',
        'Automated SMS & WhatsApp Instalment Alerts'
      ],
      extraFeatures: [
        'Cryptographic QR Counter Passbook Verification',
        'Automated Chit Maturity Weight & Bonus Calculator',
        'Staff Cashier Counter Role Permissions & Limits',
        'Instant PDF Chit Receipts & Passbook Statements',
        '30-Day Upcoming Gold Chit Maturity Forecast',
        'Zero Hidden Chit Admin Fees & Setup Charges',
        'Customer Self-Service Gold Balance Checking',
        'Daily Chit Collection Reconciliation Reports',
        'Dedicated Phone & WhatsApp Support (9 AM - 8 PM)'
      ]
    },
    card2: {
      name: 'Swarna Samriddhi Chit',
      tag: 'Most Popular Gold Chit',
      badge: 'MOST POPULAR CHIT',
      members: 'Up to 2,500 Active Chit Members',
      scope: 'Growing Showrooms • Multi-Counter Chit Engine',
      monthlyPrice: '2,999',
      annualPrice: '1,999',
      frequencyMonthly: 'Billed monthly',
      frequencyAnnual: 'Billed annually (Save 33%)',
      urgency: 'Free Hardware QR Scanner Included!',
      included: 'Free Priority Setup & Physical Ledger Migration',
      btnText: 'GET STARTED WITH GOLD CHIT',
      trialText: 'Start 14-day free chit trial →',
      coreFeatures: [
        'Flexible Gram & Fixed Amount Gold Chit Schemes',
        'Automated 30 / 60 / 90-Day Gold Liability Forecast',
        'WhatsApp 1-Click UPI Payment Gateway (0% Fee)',
        'White-Labeled Customer Mobile Passbook App (Android & iOS)'
      ],
      extraFeatures: [
        'Multi-Counter Live Cash & Gold Gram Settlement',
        'DigiGold Micro-Savings (Daily / Weekly Accumulation)',
        'Automated Bullion Price Hedging & Spike Protection',
        'Counter-Level Tamper-Proof Audit Trail & Logs',
        '1-Click Bulk WhatsApp Chit Due Reminders with UPI Link',
        'Automated Dhanteras / Akshaya Tritiya Bonus Gram Rules',
        'Paper Passbook to QR Digital Passbook Instant Convert',
        'Automated Chit Dropout, Transfer & Premature Closure Rules',
        '24/7 Priority Gold Support via Dedicated WhatsApp Manager'
      ]
    },
    card3: {
      name: 'Swarna Mahasabha Chit',
      tag: 'Multi-Branch Gold Chains',
      members: 'Unlimited Chit Members & Showrooms',
      scope: 'Jewellery Chains • Franchise & Multi-City Networks',
      customPrice: 'Custom Pricing',
      note: 'Tailored architecture for multi-branch jewellery chains',
      included: 'Dedicated Solutions Architect & On-Site Deployment',
      btnText: 'CUSTOMIZE GOLD CHIT PLAN',
      trialText: 'Schedule showroom architecture call →',
      coreFeatures: [
        'Unlimited Showrooms, Branches & Franchise Outlets',
        'Central Bullion Treasury & ERP Direct API Integration',
        'Custom White-Label Customer Android & iOS Apps',
        'Enterprise Multi-Branch Chit Settlement & Audit Hub'
      ],
      extraFeatures: [
        'Direct SAP, Oracle & Tally Prime Bi-Directional Sync',
        'Central Real-Time Bullion Risk & Hedging Dashboard',
        'Dedicated Enterprise Account Director & 24/7 SLA',
        'Private Cloud or On-Premise Showroom Server Deployment',
        'Single Sign-On (SSO / SAML 2.0) & RBAC Security',
        'Custom Chit Duration (6M, 11M, 18M, 24M) Rules Engine',
        'Centralized Multi-GST Billing & Legal Compliance Reports',
        'High-Throughput Akshaya Tritiya Festive Load Engine',
        'Guaranteed 99.99% Uptime SLA & Disaster Recovery'
      ]
    },
    comparisonFeatures: [
      { name: '22K / 24K Live Rate Sync', starter: true, popular: true, enterprise: true },
      { name: 'Gold Gram Accumulation Ledger', starter: true, popular: true, enterprise: true },
      { name: 'Digital Passbook Inventory (QR)', starter: true, popular: true, enterprise: true },
      { name: '11+1 Bonus Gold Gram Engine', starter: true, popular: true, enterprise: true },
      { name: 'WhatsApp Gold Payment Reminders', starter: 'Basic SMS/WA', popular: '1-Click UPI Links', enterprise: 'Custom WhatsApp API' },
      { name: 'Customer Mobile Gold App', starter: 'Web Portal', popular: 'White-Label Android & iOS', enterprise: 'Full Custom App + Source' },
      { name: 'Gold Liability Maturity Forecast', starter: '30-day forecast', popular: '30/60/90-day forecast', enterprise: 'Real-Time Hedging Engine' },
      { name: 'Multi-Branch Gold Reconciliation', starter: 'Single Showroom', popular: 'Up to 5 Branches', enterprise: 'Unlimited Branches' },
      { name: 'ERP / Tally Direct Sync', starter: false, popular: 'Excel / CSV Sync', enterprise: 'Real-Time Direct API / SAP' },
      { name: 'Gold Price Spike Protection', starter: false, popular: 'Daily Buffer', enterprise: 'Automated Bullion Hedge' },
      { name: 'Support Level', starter: 'Standard (Email)', popular: '24/7 Priority WhatsApp', enterprise: 'Dedicated Account Manager' },
      { name: 'Setup & Guided Training', starter: 'Included', popular: 'Included (Guided)', enterprise: 'On-Site Team Training' },
      { name: 'Deployment Mode', starter: 'Secure Cloud', popular: 'Secure Cloud', enterprise: 'Cloud / On-Premise' }
    ]
  }

  // ==========================================
  // SILVER CHITS CONTENT & PRICING
  // ==========================================
  const silverData = {
    badge: 'TRANSPARENT PLANS FOR SILVER SCHEMES & CHITS',
    title: 'Transparent Pricing for Silver Chit Showrooms',
    subtitle: 'Choose the ideal plan for 999 fine silver accumulation, pooja article schemes, and high-volume collections.',
    card1: {
      name: 'Rajatha Bachat Chit',
      tag: 'Single Silver Counter',
      members: 'Up to 1,000 Silver Chit Members',
      scope: 'Retail Counter • Up to 5 Silver POS Terminals',
      monthlyPrice: '999',
      annualPrice: '699',
      frequencyMonthly: 'Billed monthly',
      frequencyAnnual: 'Billed annually (Save 33%)',
      included: 'Free Setup, Barcode/QR Sync & Staff Training',
      btnText: 'START SILVER CHIT TRIAL',
      trialText: 'Start 14-day free chit trial →',
      coreFeatures: [
        'Daily 999 Fine Silver Board Rate Lock',
        'Silver Gram & Kilogram Weight Accumulation Ledger',
        'Fast-Scan QR Passbook for High-Volume Counters',
        'Pooja Articles, Idols & Silver Bar Maturity Engine'
      ],
      extraFeatures: [
        'Real-Time 999 Pure Silver Market Rate Auto-Sync',
        'Rapid Thermal Receipt Printing & Instant WhatsApp Receipts',
        'Silver Coin & Article Redemption with Wastage Discount',
        'Automated SMS & WhatsApp Monthly Instalment Reminders',
        'Customer Self-Service Silver Gram Passbook Portal',
        'Flexible Chit Amount (₹500 / ₹1,000 / ₹2,000 monthly)',
        'Silver Stock Weight Liability & Due Summary Reports',
        'Unlimited Silver Customer Passbooks & Accounts',
        'Standard Phone & WhatsApp Support (9 AM - 8 PM)'
      ]
    },
    card2: {
      name: 'Rajatha Samriddhi Chit',
      tag: 'Most Popular Silver Chit',
      badge: 'MOST POPULAR CHIT',
      members: 'Up to 5,000 Silver Chit Members',
      scope: 'High-Footfall Showrooms • Silver Chit Engine',
      monthlyPrice: '1,999',
      annualPrice: '1,399',
      frequencyMonthly: 'Billed monthly',
      frequencyAnnual: 'Billed annually (Save 33%)',
      urgency: 'Dhanteras & Festive Surge Engine Included',
      included: 'Free Physical Ledger Migration & Dedicated Account Setup',
      btnText: 'GET STARTED WITH SILVER CHIT',
      trialText: 'Start 14-day free chit trial →',
      coreFeatures: [
        'Automated Silver Kg & Gram Weight Reconciliation',
        'Automated 30/60/90-Day Silver Weight Liability Forecast',
        'WhatsApp 1-Click UPI Payment Links (Zero Commission)',
        'White-Labeled Customer Silver Passbook App (Android & iOS)'
      ],
      extraFeatures: [
        'Multi-Counter Cash & Silver Weight Instant Settlement',
        'Dhanteras & Diwali Festive Surge High-Traffic Mode',
        'Automated Free Silver Coin Bonus Allocation Engine',
        'Instant Counter QR Passbook Verification & Anti-Fraud Logs',
        '1-Click Bulk WhatsApp Collection Alerts with Dynamic UPI',
        'Staff Collection Incentive & Counter Turnover Tracking',
        'Paper Chit to Digital QR Passbook 30-Second Onboarding',
        'Automatic Silver Rate Lock at Exact Payment Timestamp',
        '24/7 Dedicated Priority Phone & WhatsApp Support'
      ]
    },
    card3: {
      name: 'Rajatha Mahasabha Chit',
      tag: 'Silver Chains & Wholesalers',
      members: 'Unlimited Silver Chit Members & Showrooms',
      scope: 'Large Silver Chains • Multi-City Wholesalers',
      customPrice: 'Custom Pricing',
      note: 'Tailored architecture for large silver chains & wholesalers',
      included: 'Dedicated Solutions Architect & Enterprise Setup',
      btnText: 'CUSTOMIZE SILVER PLAN',
      trialText: 'Schedule wholesale architecture call →',
      coreFeatures: [
        'Unlimited Silver Showrooms, Counters & Wholesale Hubs',
        'Central Silver Bullion Hedging & ERP Direct Sync',
        'Dedicated Silver Chit Architect & On-Site Setup',
        'Custom White-Label Mobile App for Silver Customers'
      ],
      extraFeatures: [
        'Custom ERP / SAP / Tally Direct Integration',
        'Real-Time Silver Bar & Pooja Article Stock Balancing',
        'Centralized Silver Bullion Risk & Hedging Dashboard',
        'Private Cloud or On-Premise Showroom Server Option',
        'Enterprise Single Sign-On (SSO / SAML 2.0)',
        'Multi-Counter High-Throughput POS Terminal Sync',
        'Multi-Branch Silver Audit Trail & Compliance Reports',
        'Dedicated Executive Account Director & 24/7 SLA',
        'Guaranteed 99.99% Uptime During Festive Peak Days'
      ]
    },
    comparisonFeatures: [
      { name: '999 Fine Silver Daily Rate Sync', starter: true, popular: true, enterprise: true },
      { name: 'Silver Gram / Kg Weight Ledger', starter: true, popular: true, enterprise: true },
      { name: 'QR Passbook for Fast Counter Scans', starter: true, popular: true, enterprise: true },
      { name: 'Pooja Article / Coin Bonus Engine', starter: true, popular: true, enterprise: true },
      { name: 'WhatsApp Silver Payment Reminders', starter: 'Basic SMS/WA', popular: '1-Click UPI Links', enterprise: 'Custom WhatsApp API' },
      { name: 'Customer Mobile Silver App', starter: 'Web Portal', popular: 'White-Label Android & iOS', enterprise: 'Full Custom App + Source' },
      { name: 'Silver Weight Liability Forecast', starter: '30-day forecast', popular: '30/60/90-day forecast', enterprise: 'Real-Time Hedging Engine' },
      { name: 'Multi-Counter Silver Reconciliation', starter: 'Single Showroom', popular: 'Up to 5 Outlets', enterprise: 'Unlimited Outlets' },
      { name: 'ERP / Tally Direct Sync', starter: false, popular: 'Excel / CSV Sync', enterprise: 'Real-Time Direct API / SAP' },
      { name: 'Dhanteras / Festival Surge Mode', starter: false, popular: 'High-Volume Mode', enterprise: 'Unlimited High-Throughput' },
      { name: 'Support Level', starter: 'Standard (Email)', popular: '24/7 Priority WhatsApp', enterprise: 'Dedicated Account Manager' },
      { name: 'Setup & Guided Training', starter: 'Included', popular: 'Included (Guided)', enterprise: 'On-Site Team Training' },
      { name: 'Deployment Mode', starter: 'Secure Cloud', popular: 'Secure Cloud', enterprise: 'Cloud / On-Premise' }
    ]
  }

  const currentData = chitType === 'gold' ? goldData : silverData

  return (
    <section id="pricing" className="section-padding pricing-section">
      <div className="section-container">
        {/* Section Header Matching Site Identity */}
        <div className="pricing-header-wrap text-center">
          <div className="section-badge pricing-section-badge">
            <SparklesIcon size={13} className={chitType === 'gold' ? 'sparkle-gold' : 'sparkle-silver'} />
            <span>{currentData.badge}</span>
          </div>

          <h2 className="section-title pricing-main-title">
            {currentData.title}
          </h2>

          <p className="section-subtitle pricing-main-subtitle">
            {currentData.subtitle}
          </p>

          {/* DUAL TOGGLES: Metal Scheme Switcher + Monthly/Annual Switcher */}
          <div className="pricing-dual-toggles-container">
            {/* 1. Metal Category Switcher: Gold Chits vs Silver Chits */}
            <div className="pricing-toggle-pill metal-toggle-pill" role="group" aria-label="Select chit metal scheme">
              <button
                type="button"
                className={`pricing-toggle-tab metal-tab ${chitType === 'gold' ? 'active-gold' : ''}`}
                onClick={() => setChitType('gold')}
              >
                <span className="metal-icon-dot gold-dot" />
                <span className="metal-tab-text">Gold Chits</span>
                {chitType === 'gold' && <span className="metal-active-tag">22K / 24K</span>}
              </button>

              <button
                type="button"
                className={`pricing-toggle-tab metal-tab ${chitType === 'silver' ? 'active-silver' : ''}`}
                onClick={() => setChitType('silver')}
              >
                <span className="metal-icon-dot silver-dot" />
                <span className="metal-tab-text">Silver Chits</span>
                {chitType === 'silver' && <span className="metal-active-tag silver-tag">999 Fine</span>}
              </button>
            </div>

            {/* 2. Billing Frequency Switcher: Monthly vs Annually */}
            <div className="pricing-toggle-pill billing-toggle-pill" role="group" aria-label="Billing frequency">
              <button
                type="button"
                className={`pricing-toggle-tab ${billingCycle === 'monthly' ? 'active' : ''}`}
                onClick={() => setBillingCycle('monthly')}
              >
                Monthly
              </button>
              <button
                type="button"
                className={`pricing-toggle-tab ${billingCycle === 'annually' ? 'active' : ''}`}
                onClick={() => setBillingCycle('annually')}
              >
                <span>Annually</span>
                <span className="save-badge-pill">SAVE 33%</span>
              </button>
            </div>
          </div>
        </div>

        {/* 3 Chit Pricing Cards Grid */}
        <div key={`${chitType}-${billingCycle}`} className="pricing-cards-grid cards-fade-in">
          {/* ======================================================== */}
          {/* CARD 1: Swarna / Rajatha Bachat Chit (Starter)           */}
          {/* ======================================================== */}
          <div className="pricing-card card-luxury-glass">
            <div className="card-top-content">
              <div className="plan-name-row">
                <div className="plan-header-tag-row">
                  <h3 className="plan-title">{currentData.card1.name}</h3>
                  <span className={`plan-metal-badge ${chitType === 'gold' ? 'badge-gold-tint' : 'badge-silver-tint'}`}>
                    {currentData.card1.tag}
                  </span>
                </div>
                <p className="plan-chit-members">{currentData.card1.members}</p>
                <p className="plan-user-scope">{currentData.card1.scope}</p>
              </div>

              <div className="plan-price-block">
                <div className="price-number-row">
                  <span className="currency-symbol">₹</span>
                  <span className="price-amount">
                    {billingCycle === 'annually' ? currentData.card1.annualPrice : currentData.card1.monthlyPrice}
                  </span>
                  <span className="price-unit">/mo</span>
                </div>
                <div className="billing-frequency-note">
                  {billingCycle === 'annually' ? currentData.card1.frequencyAnnual : currentData.card1.frequencyMonthly}
                </div>
              </div>

              <div className="plan-included-perk">
                <span className="perk-check">✓</span>
                <span>{currentData.card1.included}</span>
              </div>

              {/* Action Buttons */}
              <button
                type="button"
                className="pricing-action-btn btn-luxury-secondary"
                onClick={onBookDemo}
              >
                <span>{currentData.card1.btnText}</span>
                <ArrowUpRightIcon size={14} className="btn-arrow-icon" />
              </button>

              <button
                type="button"
                className="pricing-trial-text-link"
                onClick={onBookDemo}
              >
                {currentData.card1.trialText}
              </button>
            </div>
          </div>

          {/* ======================================================== */}
          {/* CARD 2: Swarna / Rajatha Samriddhi Chit (MOST POPULAR)   */}
          {/* ======================================================== */}
          <div className="pricing-card card-luxury-featured">
            {/* Top Attached Badge */}
            <div className={`popular-top-badge ${chitType === 'gold' ? 'badge-gold-gradient' : 'badge-silver-gradient'}`}>
              <SparklesIcon size={12} className="popular-sparkle" />
              <span>{currentData.card2.badge}</span>
            </div>

            <div className="card-top-content">
              <div className="plan-name-row">
                <div className="plan-header-tag-row">
                  <h3 className="plan-title text-gold-glow">{currentData.card2.name}</h3>
                  <span className={`plan-metal-badge ${chitType === 'gold' ? 'badge-popular-highlight' : 'badge-popular-silver-highlight'}`}>
                    {currentData.card2.tag}
                  </span>
                </div>
                <p className="plan-chit-members text-gold-sub">{currentData.card2.members}</p>
                <p className="plan-user-scope text-white-muted">{currentData.card2.scope}</p>
              </div>

              <div className="plan-price-block">
                <div className="price-number-row">
                  <span className="currency-symbol text-gold-symbol">₹</span>
                  <span className="price-amount text-gold-amount">
                    {billingCycle === 'annually' ? currentData.card2.annualPrice : currentData.card2.monthlyPrice}
                  </span>
                  <span className="price-unit text-white-dim">/mo</span>
                </div>
                <div className="billing-frequency-row">
                  <span className="billing-frequency-note text-white-dim">
                    {billingCycle === 'annually' ? currentData.card2.frequencyAnnual : currentData.card2.frequencyMonthly}
                  </span>
                  <span className="urgency-callout-gold">{currentData.card2.urgency}</span>
                </div>
              </div>

              <div className="plan-included-perk text-white-dim">
                <span className="perk-check text-gold">✓</span>
                <span>{currentData.card2.included}</span>
              </div>

              {/* Action Buttons */}
              <button
                type="button"
                className="pricing-action-btn btn-luxury-gold"
                onClick={onBookDemo}
              >
                <span>{currentData.card2.btnText}</span>
                <ArrowUpRightIcon size={14} className="btn-arrow-icon" />
              </button>

              <button
                type="button"
                className="pricing-trial-text-link link-gold"
                onClick={onBookDemo}
              >
                {currentData.card2.trialText}
              </button>
            </div>
          </div>

          {/* ======================================================== */}
          {/* CARD 3: Swarna / Rajatha Mahasabha Chit (Enterprise)     */}
          {/* ======================================================== */}
          <div className="pricing-card card-luxury-glass">
            <div className="card-top-content">
              <div className="plan-name-row">
                <div className="plan-header-tag-row">
                  <h3 className="plan-title">{currentData.card3.name}</h3>
                  <span className={`plan-metal-badge ${chitType === 'gold' ? 'badge-gold-tint' : 'badge-silver-tint'}`}>
                    {currentData.card3.tag}
                  </span>
                </div>
                <p className="plan-chit-members">{currentData.card3.members}</p>
                <p className="plan-user-scope">{currentData.card3.scope}</p>
              </div>

              <div className="plan-price-block">
                <div className="price-number-row custom-price-row">
                  <span className="price-amount custom-amount">{currentData.card3.customPrice}</span>
                </div>
                <div className="billing-frequency-note">
                  {currentData.card3.note}
                </div>
              </div>

              <div className="plan-included-perk">
                <span className="perk-check">✓</span>
                <span>{currentData.card3.included}</span>
              </div>

              {/* Action Buttons */}
              <button
                type="button"
                className="pricing-action-btn btn-luxury-secondary"
                onClick={onBookDemo}
              >
                <span>{currentData.card3.btnText}</span>
                <ArrowUpRightIcon size={14} className="btn-arrow-icon" />
              </button>

              <button
                type="button"
                className="pricing-trial-text-link"
                onClick={onBookDemo}
              >
                {currentData.card3.trialText}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Comparison Toggle Button */}
        <div className="pricing-comparison-footer text-center">
          <button
            type="button"
            className="comparison-toggle-pill-btn"
            onClick={() => setShowComparisonTable(!showComparisonTable)}
            aria-expanded={showComparisonTable}
          >
            <span>Compare all 13 {chitType === 'gold' ? 'Gold Chit' : 'Silver Chit'} features side-by-side</span>
            <span className="toggle-chevron">{showComparisonTable ? '▲' : '▼'}</span>
          </button>
        </div>

        {/* Expandable Comparison Table */}
        {showComparisonTable && (
          <div className="comparison-table-wrapper">
            <div className="comparison-table-card">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th className="feature-col">
                      {chitType === 'gold' ? 'Gold Chit Feature Matrix' : 'Silver Chit Feature Matrix'}
                    </th>
                    <th className="tier-col">Bachat Chit</th>
                    <th className="tier-col popular-th">
                      <span>Samriddhi Chit (Popular)</span>
                    </th>
                    <th className="tier-col">Mahasabha Chit</th>
                  </tr>
                </thead>
                <tbody>
                  {currentData.comparisonFeatures.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'row-even' : 'row-odd'}>
                      <td className="feature-name-cell">{row.name}</td>
                      <td className="feature-val-cell">
                        {typeof row.starter === 'boolean' ? (
                          row.starter ? (
                            <CheckCircleIcon size={18} className={`matrix-check ${chitType === 'gold' ? 'gold' : 'silver'}`} />
                          ) : (
                            <span className="matrix-cross">—</span>
                          )
                        ) : (
                          <span className="matrix-text-val">{row.starter}</span>
                        )}
                      </td>
                      <td className="feature-val-cell popular-td">
                        {typeof row.popular === 'boolean' ? (
                          row.popular ? (
                            <CheckCircleIcon size={18} className={`matrix-check ${chitType === 'gold' ? 'gold' : 'silver'}`} />
                          ) : (
                            <span className="matrix-cross">—</span>
                          )
                        ) : (
                          <span className="matrix-text-val gold-val">{row.popular}</span>
                        )}
                      </td>
                      <td className="feature-val-cell">
                        {typeof row.enterprise === 'boolean' ? (
                          row.enterprise ? (
                            <CheckCircleIcon size={18} className={`matrix-check ${chitType === 'gold' ? 'gold' : 'silver'}`} />
                          ) : (
                            <span className="matrix-cross">—</span>
                          )
                        ) : (
                          <span className="matrix-text-val">{row.enterprise}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="comparison-table-footer-cta">
                <button
                  type="button"
                  className="pricing-action-btn btn-luxury-gold"
                  onClick={onBookDemo}
                  style={{ maxWidth: '380px', margin: '0 auto' }}
                >
                  <span>START 14-DAY FREE TRIAL FOR {chitType.toUpperCase()} CHITS</span>
                  <ArrowUpRightIcon size={14} className="btn-arrow-icon" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
