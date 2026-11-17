import React, { useState } from 'react'
import {
  SparklesIcon,
  CreditCardIcon,
  BellIcon,
  SmartphoneIcon,
  TrendingUpIcon,
  Building2Icon,
  ShieldCheckIcon,
  BarChart3Icon,
  ChevronDownIcon,
  ChevronUpIcon,
  CheckIcon
} from './Icons'

export default function Features({ onBookDemo }) {
  const [expandedCard, setExpandedCard] = useState(null)

  const features = [
    {
      id: 1,
      title: 'Chit & Scheme Management',
      tag: 'Core Engine',
      icon: <SparklesIcon size={22} />,
      shortDesc: 'Create customizable gold and silver schemes, enrol members in seconds, and track instalments and maturities with zero ledger errors.',
      details: [
        'Supports 11-month weight accumulation schemes, fixed value plans, and flexible gram-saving options',
        'Automatic gram calculation based on exact transaction-time live board rates',
        'Automated maturity calculations with bonus months and discount vouchers upon gold purchase',
        'Bulk import of existing paper passbooks and legacy software databases'
      ]
    },
    {
      id: 2,
      title: 'Automated Reminders',
      tag: 'Zero Defaults',
      icon: <BellIcon size={22} />,
      shortDesc: 'Notify customers about upcoming or overdue instalments via automated WhatsApp, SMS, and push notifications.',
      details: [
        'Pre-scheduled WhatsApp reminders sent 3 days prior and on the instalment due date',
        'Smart retry alerts for overdue customers with personalized payment link triggers',
        'Customizable multilingual message templates in Tamil, Telugu, Hindi, Kannada & English',
        '85%+ reduction in counter follow-up phone calls by sales personnel'
      ]
    },
    {
      id: 3,
      title: 'Customer Mobile App',
      tag: 'Android & iOS',
      icon: <SmartphoneIcon size={22} />,
      shortDesc: 'Empower shoppers to view active schemes, accumulated gold weight, live metal rates, payment history, and maturity dates on their phone.',
      details: [
        'White-labeled with your jewellery showroom brand, logo, and theme colors',
        'Instant digital passbook with downloadable PDF tax receipts for every deposit',
        'In-app live board rate ticker for 24K, 22K, 18K gold and 999 silver',
        'Customer KYC upload and Aadhaar/PAN verification directly inside the app'
      ]
    },
    {
      id: 4,
      title: 'Digital Gold & Silver',
      tag: 'Micro-Savings',
      icon: <TrendingUpIcon size={22} />,
      shortDesc: 'Manage digital metal transactions with live fractional gram rates, vault balance tracking, and physical delivery vouchers.',
      details: [
        'Allow customers to buy digital gold starting from as little as ₹100 anytime',
        'Fractional gram accumulation with real-time rate locking backed by physical inventory',
        'Seamless conversion to showroom jewellery, gold coins, or silver bars at maturity',
        'Automated hedging ledger to protect showroom margins from spot price swings'
      ]
    },
    {
      id: 5,
      title: 'Integrated Payments',
      tag: 'Instant UPI',
      icon: <CreditCardIcon size={22} />,
      shortDesc: 'Automate collections with dynamic QR codes, UPI autopay, net banking, debit cards, and instant bank reconciliation.',
      details: [
        'Zero-drop payment gateway integration supporting GPay, PhonePe, Paytm, and BHIM UPI',
        'Instant T+0 payment settlements directly deposited into your current account',
        'Automated reconciliation engine matching bank settlement files with customer schemes',
        'Direct automated generation of GST-compliant digital receipts'
      ]
    },
    {
      id: 6,
      title: 'Jewellery ERP Modules',
      tag: 'Showroom Suite',
      icon: <Building2Icon size={22} />,
      shortDesc: 'Streamline purchases, inventory, GST accounts, daily metal rates, cashier audit logs, and scheme liability tracking in one hub.',
      details: [
        'Real-time multi-branch inventory tracking with barcode and RFID tag integration',
        'Automated stone weight deduction and purity wastage calculations at billing',
        'Single-click daily board rate broadcast to digital showroom TV screens',
        'Comprehensive balance sheet liability forecasting for upcoming scheme maturities'
      ]
    },
    {
      id: 7,
      title: 'Security & Multi-Branch Control',
      tag: 'Enterprise Shield',
      icon: <ShieldCheckIcon size={22} />,
      shortDesc: 'Granular role-based staff permissions, cryptographic QR passbook verification, immutable audit trails, and multi-store control.',
      details: [
        'Role-based permissions separating counter cashier, store manager, and super admin access',
        'Counter QR scanner verification ensuring counterfeit or altered passbooks are rejected',
        'Bank-grade 256-bit SSL encryption and automated cloud backups every 60 minutes',
        'Multi-showroom centralized analytics tracking top-performing branches and sales staff'
      ]
    },
    {
      id: 8,
      title: 'Smart Analytics & Forecasting',
      tag: 'Predictive BI',
      icon: <BarChart3Icon size={22} />,
      shortDesc: 'Unlock actionable business intelligence with real-time maturity liability forecasting, branch sales leaderboards, and customer retention metrics.',
      details: [
        'Predictive bullion reserve forecasting to prepare showroom stock for upcoming monthly maturities',
        'Customer retention tracking with automated re-enrolment campaigns upon scheme completion',
        'Multi-branch performance leaderboards and counter staff collection KPIs',
        'Instant one-click exports for GST compliance, P&L statements, and CA audit summaries'
      ]
    }
  ]

  const upperFeatures = features.slice(0, 4)
  const lowerFeatures = features.slice(4, 8)

  const toggleExpand = (id) => {
    setExpandedCard(expandedCard === id ? null : id)
  }

  const renderCard = (feat, keySuffix = '') => {
    const isExpanded = expandedCard === feat.id
    return (
      <div
        key={`${feat.id}${keySuffix}`}
        className={`feature-card features-marquee-card ${isExpanded ? 'card-open' : ''}`}
      >
        <div className="feature-card-top">
          <div className="feature-icon-wrap">{feat.icon}</div>
          <span className="feature-tag">{feat.tag}</span>
        </div>

        <h3 className="feature-title">{feat.title}</h3>
        <p className="feature-desc">{feat.shortDesc}</p>

        {/* Expandable Learn More Section */}
        {isExpanded && (
          <div className="feature-expanded-content">
            <h5 className="expanded-heading">Key Capabilities:</h5>
            <ul className="expanded-list">
              {feat.details.map((item, idx) => (
                <li key={idx}>
                  <span className="check-bullet"><CheckIcon size={12} /></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <button
          type="button"
          className="feature-learn-more-btn"
          onClick={() => toggleExpand(feat.id)}
          aria-expanded={isExpanded}
        >
          <span>{isExpanded ? 'Show Less' : 'Learn More'}</span>
          {isExpanded ? <ChevronUpIcon size={14} /> : <ChevronDownIcon size={14} />}
        </button>
      </div>
    )
  }

  return (
    <section id="features" className="features-section features-combined-section">
      {/* Dual Row Marquee (Upper: Left-to-Right | Lower: Right-to-Left) */}
      <div className="features-marquee-container">
        {/* Upper Row: Left to Right */}
        <div className="features-marquee-row marquee-ltr" aria-label="Features row moving left to right">
          <div className="features-marquee-track">
            <div className="features-marquee-group">
              {[...upperFeatures, ...upperFeatures].map((feat, idx) =>
                renderCard(feat, `-upper-g1-${idx}`)
              )}
            </div>
            <div className="features-marquee-group" aria-hidden="true">
              {[...upperFeatures, ...upperFeatures].map((feat, idx) =>
                renderCard(feat, `-upper-g2-${idx}`)
              )}
            </div>
          </div>
        </div>

        {/* Lower Row: Right to Left */}
        <div className="features-marquee-row marquee-rtl" aria-label="Features row moving right to left">
          <div className="features-marquee-track">
            <div className="features-marquee-group">
              {[...lowerFeatures, ...lowerFeatures].map((feat, idx) =>
                renderCard(feat, `-lower-g1-${idx}`)
              )}
            </div>
            <div className="features-marquee-group" aria-hidden="true">
              {[...lowerFeatures, ...lowerFeatures].map((feat, idx) =>
                renderCard(feat, `-lower-g2-${idx}`)
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

