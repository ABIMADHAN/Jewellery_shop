import React from 'react'
import {
  SparklesIcon,
  BellIcon,
  TrendingUpIcon,
  CreditCardIcon,
  ArrowRightIcon
} from './Icons'

export default function Features({ onBookDemo }) {
  // Outer Column (3 cards on far left orbit)
  const outerFeatures = [
    {
      id: 1,
      title: 'Complete Chit & Scheme Management',
      desc: 'Set up gold and silver schemes, enrol customers, post instalments and manage accounts and maturity. Paid amount, balance and maturity date are tracked automatically.',
      icon: <SparklesIcon size={18} />,
      badge: 'CORE ENGINE'
    },
    {
      id: 2,
      title: 'Digital Gold & Digital Silver',
      desc: 'Buy and sell at live rates with accounts, transactions and reports; keeps customers investing seamlessly between physical showroom purchases.',
      icon: <TrendingUpIcon size={18} />,
      badge: 'MICRO-SAVINGS'
    },
    {
      id: 3,
      title: 'Integrated Payment',
      desc: 'UPI, card & net banking auto-reconciliation with zero discrepancies, instant receipts and instant ledger updates.',
      icon: <CreditCardIcon size={18} />,
      badge: 'SHOWROOM SUITE'
    }
  ]

  // Inner Column (2 cards staggered on inner orbit)
  const innerFeatures = [
    {
      id: 4,
      title: 'Complete Chit & Scheme',
      desc: 'Set up schemes, enrol customers, track instalments, balance & automated maturities with precision.',
      icon: <SparklesIcon size={18} />,
      badge: 'CORE ENGINE'
    },
    {
      id: 5,
      title: 'Automated Follow-Up & Reminders',
      desc: 'Intelligent WhatsApp, SMS & app notifications for upcoming instalments, balance dues, rate drops and maturity claims.',
      icon: <BellIcon size={18} />,
      badge: 'ZERO DEFAULTS'
    }
  ]

  return (
    <section id="features" className="section-padding split-features-section">
      <div className="section-container">
        <div className="split-features-layout orbital-features-layout">
          {/* Concentric Planetary Orbit Rings centered around the Right Hub */}
          <svg
            className="orbital-connectors-svg"
            viewBox="0 0 1240 680"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            {/* Hub outer halo ring */}
            <circle cx="1020" cy="340" r="230" className="orbit-ring orbit-ring-hub" />
            {/* Orbit ring 1 (passes through the 2 inner cards) */}
            <circle cx="1020" cy="340" r="410" className="orbit-ring orbit-ring-inner" />
            {/* Orbit ring 2 (passes through the 3 outer cards) */}
            <circle cx="1020" cy="340" r="740" className="orbit-ring orbit-ring-outer" />
            {/* Outermost faint cosmic aura */}
            <circle cx="1020" cy="340" r="950" className="orbit-ring orbit-ring-aura" />
          </svg>

          {/* COLUMN 1: Far Left Outer Cards (3 Cards) */}
          <div className="orbital-cards-col outer-col">
            {outerFeatures.map((item) => (
              <div key={item.id} className="orbital-feature-card">
                <div className="feature-card-header">
                  <div className="feature-icon-square">{item.icon}</div>
                  <span className="feature-micro-tag">{item.badge}</span>
                </div>
                <h3 className="feature-item-title">{item.title}</h3>
                <p className="feature-item-desc">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* COLUMN 2: Middle Inner Cards (2 Cards Staggered) */}
          <div className="orbital-cards-col inner-col">
            {innerFeatures.map((item) => (
              <div key={item.id} className="orbital-feature-card">
                <div className="feature-card-header">
                  <div className="feature-icon-square">{item.icon}</div>
                  <span className="feature-micro-tag">{item.badge}</span>
                </div>
                <h3 className="feature-item-title">{item.title}</h3>
                <p className="feature-item-desc">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* COLUMN 3: Right Circular Hub Orb */}
          <div className="orbital-hub-wrapper">
            <div className="orbital-hub-glow" aria-hidden="true" />
            <div className="orbital-hub-orb">
              <div className="orbital-hub-badge">
                <span>★ CORE SOFTWARE CAPABILITIES</span>
              </div>

              <h2 className="orbital-hub-title">
                Complete Jewellery<br />
                Control.<br />
                <span className="gold-text-gradient">Zero Manual Friction.</span>
              </h2>

              <p className="orbital-hub-desc">
                Everything the modern jeweller gets to run showroom operations with 100% auditable clarity.
              </p>

              {onBookDemo && (
                <button
                  type="button"
                  className="orbital-hub-cta"
                  onClick={onBookDemo}
                >
                  <span>BOOK A FREE DEMO</span>
                  <ArrowRightIcon size={14} />
                </button>
              )}

              <div className="orbital-hub-status">
                <span className="status-item">
                  <span className="status-dot green" />
                  <span>Live Rate Sync</span>
                </span>
                <span className="status-sep">•</span>
                <span className="status-item">
                  <span className="status-dot gold" />
                  <span>99.9% Uptime</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
