import React, { useState } from 'react'
import { CloseIcon, ArrowUpRightIcon, CheckIcon } from './Icons'

export default function StoreModulesModal({ isOpen, onClose, selectedModule, onBookDemo }) {
  if (!isOpen) return null

  const modules = [
    {
      id: 'chit-schemes',
      title: 'Gold Chit Scheme Engine',
      tag: 'Core Module',
      metric: '100% Automated',
      desc: 'Run 11-month weight schemes, value schemes, and flexible digi-gold saving plans. Automatic SMS/WhatsApp payment links, UPI autopay, and automated passbook stamping.',
      features: ['Automated Gold Gram Calculation at daily board rate', 'Zero manual ledger calculation errors', 'Auto-maturity alerts & gold delivery vouchers']
    },
    {
      id: 'modules',
      title: 'Daily Board Rate & Multi-Screen Ticker',
      tag: 'Live Sync',
      metric: 'Real-Time Sync',
      desc: 'Centralized live board rate broadcasting to showroom digital rate screens, customer passbooks, and billing counters simultaneously across all branches.',
      features: ['One-click rate revision for 24K, 22K, 18K and 999 Silver', 'Branch-wise margin or tax adjustments', 'Protection against intraday gold rate shocks']
    },
    {
      id: 'customer-app',
      title: 'White-Labeled Customer Passbook App',
      tag: 'Android & iOS',
      metric: '4.9★ Rating',
      desc: 'Provide your customers with a branded mobile passbook app carrying your showroom logo. Customers view accumulated gold weight, pay instalments via UPI/Card, and get store loyalty rewards.',
      features: ['Instant QR Passbook for verification at delivery', 'Push notifications on gold rate drops', 'Direct digital receipt generation']
    },
    {
      id: 'payments',
      title: 'Instant Settlements & Auto UPI Reconciliation',
      tag: 'Zero Bounce',
      metric: 'T+0 Settlements',
      desc: 'Integrated with top Indian banking gateways with lowest MDR. Instant account reconciliation ensures every single instalment is accounted for in real-time.',
      features: ['Automated bank reconciliation report', 'Instant refund protection & fail-safe retry', 'Automated GST invoice generation']
    },
    {
      id: 'challenges',
      title: 'Live Audit Trail & Liability Hedging',
      tag: 'Enterprise Safety',
      metric: '₹1.48 Cr Protected',
      desc: 'Track live accumulated gold liability in grams and rupees. Automated hedging alerts ensure your jewellery showroom is never exposed to adverse bullion spikes.',
      features: ['Audit-ready reports for Chartered Accountants', 'Role-based access for counter staff vs store manager', 'Encrypted cloud backup with 100% KYC compliance']
    },
    {
      id: 'store-roi',
      title: 'Store ROI & Scheme Retention Analytics',
      tag: 'High Profit',
      metric: '3.4x Repeat Sales',
      desc: 'Convert 80%+ chit scheme customers into high-value bridal and diamond buyers upon scheme maturity with automated VIP customer recommendations.',
      features: ['Customer purchase propensity scoring', 'Incentive calculation for showroom sales staff', 'Predictive footfall analysis']
    }
  ]

  const initialTab = selectedModule ? (modules.find(m => m.id === selectedModule.id) || modules[0]) : modules[0]
  const [activeItem, setActiveItem] = useState(initialTab)

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container modules-modal" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <CloseIcon size={20} />
        </button>

        <div className="modules-header">
          <div className="modal-badge">THANGANIDHI SUITE</div>
          <h3 className="modal-title">Jewellery Showroom Automation Modules</h3>
          <p className="modal-subtitle">
            Engineered exclusively for Indian gold, silver, and diamond jewelers.
          </p>
        </div>

        <div className="modules-layout">
          {/* Module Nav Pills */}
          <div className="modules-nav-list">
            {modules.map((m) => (
              <button
                key={m.id}
                type="button"
                className={`module-tab-btn ${activeItem.id === m.id ? 'active' : ''}`}
                onClick={() => setActiveItem(m)}
              >
                <div className="tab-title-wrap">
                  <span className="tab-title">{m.title}</span>
                  <span className="tab-tag">{m.tag}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Module Detail Card */}
          <div className="module-detail-box">
            <div className="detail-top">
              <span className="detail-metric-badge">{activeItem.metric}</span>
              <h4 className="detail-title">{activeItem.title}</h4>
              <p className="detail-desc">{activeItem.desc}</p>
            </div>

            <div className="detail-features-list">
              <h5>Key Capabilities:</h5>
              <ul>
                {activeItem.features.map((feat, idx) => (
                  <li key={idx}>
                    <span className="feat-check"><CheckIcon size={13} /></span>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="detail-action-footer">
              <button
                type="button"
                className="btn-primary-gold"
                onClick={() => {
                  onClose()
                  onBookDemo()
                }}
              >
                <span>BOOK DEMO FOR THIS MODULE</span>
                <ArrowUpRightIcon size={15} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

