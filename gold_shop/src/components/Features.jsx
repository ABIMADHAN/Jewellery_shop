import React from 'react'
import {
  SparklesIcon,
  BellIcon,
  SmartphoneIcon,
  TrendingUpIcon,
  CreditCardIcon,
  Building2Icon,
  ShieldCheckIcon,
  ArrowRightIcon
} from './Icons'

export default function Features({ onBookDemo }) {
  const featuresList = [
    {
      id: 1,
      title: 'Complete Chit & Scheme Management',
      desc: 'Set up gold and silver schemes, enrol customers, post instalments and manage accounts and maturity. Paid amount, balance and maturity date are tracked automatically.',
      icon: <SparklesIcon size={20} />,
      badge: 'Core Engine'
    },
    {
      id: 2,
      title: 'Automated Follow-Up & Reminders',
      desc: 'A follow-up module and push notifications flag overdue and upcoming instalments, reducing defaults without staff calls.',
      icon: <BellIcon size={20} />,
      badge: 'Zero Defaults'
    },
    {
      id: 3,
      title: 'Customer Mobile App',
      desc: 'Customers see chit balance, instalments paid and maturity date, pay online and receive live board rate alerts.',
      icon: <SmartphoneIcon size={20} />,
      badge: 'Live Passbook'
    },
    {
      id: 4,
      title: 'Digital Gold & Digital Silver',
      desc: 'Buy and sell at live rates with accounts, transactions and reports; keeps customers investing between purchases.',
      icon: <TrendingUpIcon size={20} />,
      badge: 'Micro-Savings'
    },
    {
      id: 5,
      title: 'Integrated Payments & Reconciliation',
      desc: 'UPI and gateway collections, receipts, refunds and bank reconciliation in one place, with traceable payments.',
      icon: <CreditCardIcon size={20} />,
      badge: 'T+0 Settlements'
    },
    {
      id: 6,
      title: 'Jewellery ERP Modules',
      desc: 'Purchase, inventory, accounts (GST, day book), daily metal rate and purity masters, with outstanding liabilities and maturities on the dashboard.',
      icon: <Building2Icon size={20} />,
      badge: 'Showroom Suite'
    },
    {
      id: 7,
      title: 'Security, Audit Trail & Multi-Branch Control',
      desc: 'User groups, role permissions, audit trail and branch management for accountability, regulatory compliance and showroom growth.',
      icon: <ShieldCheckIcon size={20} />,
      badge: '100% Audit-Ready',
      isFeatured: true
    }
  ]

  return (
    <section id="features" className="section-padding split-features-section">
      <div className="section-container">
        <div className="split-features-layout">
          {/* LEFT COLUMN: Sticky Header & Value Proposition */}
          <div className="split-features-left">
            <div className="split-features-sticky">
              <div className="section-badge">
                <SparklesIcon size={14} />
                <span>TOP 7 SOFTWARE CAPABILITIES</span>
              </div>
              <h2 className="split-features-title">
                Complete Jewellery Control.<br />
                <span className="gold-text-gradient">Zero Manual Friction.</span>
              </h2>
              <p className="split-features-desc">
                Everything the modern jeweller gets to run showroom operations with 100% auditable clarity, alongside the white-labeled customer mobile app.
              </p>

              <div className="split-features-meta">
                <div className="meta-pill">
                  <span className="meta-dot" />
                  <span>7 Enterprise Modules</span>
                </div>
                <div className="meta-pill">
                  <span className="meta-dot" />
                  <span>Cloud & Mobile Sync</span>
                </div>
              </div>

              {onBookDemo && (
                <button
                  type="button"
                  className="btn-primary-gold split-cta-btn"
                  onClick={onBookDemo}
                >
                  <span>BOOK A FREE DEMO</span>
                  <ArrowRightIcon size={14} />
                  <div className="btn-shimmer" />
                </button>
              )}
            </div>
          </div>

          {/* RIGHT COLUMN: Grid of Feature Cards (Matching Reference Layout) */}
          <div className="split-features-right">
            <div className="features-card-matrix">
              {featuresList.map((item) => (
                <div
                  key={item.id}
                  className={`split-feature-card ${item.isFeatured ? 'card-featured-span' : ''}`}
                >
                  <div className="feature-card-header">
                    <div className="feature-icon-circle">
                      {item.icon}
                    </div>
                    {item.badge && (
                      <span className="feature-micro-tag">{item.badge}</span>
                    )}
                  </div>

                  <h3 className="feature-item-title">{item.title}</h3>
                  <p className="feature-item-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
