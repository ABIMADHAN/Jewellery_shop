import React, { useState } from 'react'
import {
  SparklesIcon,
  ArrowRightIcon,
  LayersIcon,
  UsersIcon,
  CreditCardIcon,
  TrendingUpIcon,
  CheckIcon
} from './Icons'

export default function HowItWorks({ onBookDemo }) {
  const [activeStep, setActiveStep] = useState(null)

  const steps = [
    {
      num: '1',
      id: 1,
      title: 'Create Schemes',
      fullTitle: 'Create Jewellery Schemes',
      subtitle: 'Configurable in under 5 minutes',
      desc: 'Define custom 11-month gold weight schemes, fixed value chits, or digital gold plans with specific maturity bonuses and payment deadlines.',
      icon: <LayersIcon size={22} />,
      highlights: ['Custom bonus months', 'Daily rate linking', 'Zero tech skills needed']
    },
    {
      num: '2',
      id: 2,
      title: 'Enrol Customers',
      fullTitle: 'Enrol Customers Seamlessly',
      subtitle: 'Counter QR or Mobile App',
      desc: 'Onboard scheme members in 60 seconds with mobile number, Aadhaar/PAN KYC, and immediately issue a digital passbook with QR code.',
      icon: <UsersIcon size={22} />,
      highlights: ['Instant digital passbook', 'Welcome WhatsApp', 'Paperless KYC']
    },
    {
      num: '3',
      id: 3,
      title: 'Track Payments',
      fullTitle: 'Track Payments & Auto-Remind',
      subtitle: 'Frictionless UPI & Auto-Pay',
      desc: 'Thanganidhi automatically dispatches reminder alerts with direct UPI links. Each payment updates the customer passbook ledger in real time.',
      icon: <CreditCardIcon size={22} />,
      highlights: ['95%+ on-time collections', 'Auto bank reconciliation', 'Zero manual errors']
    },
    {
      num: '4',
      id: 4,
      title: 'Manage Maturities',
      fullTitle: 'Manage Maturities & Grow Sales',
      subtitle: 'Effortless Showroom Redemption',
      desc: 'When schemes mature, customers present their passbook QR at the showroom counter. Staff scan it to verify and upsell high-margin bridal jewellery.',
      icon: <TrendingUpIcon size={22} />,
      highlights: ['Counter QR scan', '82%+ renewal rate', 'GST delivery voucher']
    }
  ]

  // Height coordinates matching the undulating wave path
  const nodeTops = ['95px', '30px', '95px', '25px']
  const nodeLefts = ['12.5%', '37.5%', '62.5%', '87.5%']

  return (
    <section id="how-it-works" className="section-padding wave-how-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="wave-how-header">
          <div className="section-badge">
            <SparklesIcon size={14} />
            <span>HOW IT WORKS</span>
          </div>
          <h2 className="wave-how-title">
            Our proven blueprint for <br />
            <span className="gold-text-gradient">showroom growth & compliance.</span>
          </h2>
          <p className="wave-how-desc">
            Experience end-to-end operational clarity from the moment a customer joins your scheme
            to the day they celebrate their jewellery delivery.
          </p>
        </div>

        {/* Dynamic Wave Roadmap (Desktop View) */}
        <div className="wave-roadmap-container">
          {/* Continuous Undulating Wave SVG */}
          <div className="wave-svg-track" aria-hidden="true">
            <svg
              className="wave-line-svg"
              viewBox="0 0 1200 130"
              preserveAspectRatio="none"
              fill="none"
            >
              <defs>
                <linearGradient id="waveGoldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#DFAC47" stopOpacity="0.4" />
                  <stop offset="25%" stopColor="#F5BE43" />
                  <stop offset="50%" stopColor="#DFAC47" />
                  <stop offset="75%" stopColor="#F5BE43" />
                  <stop offset="100%" stopColor="#E5B34C" stopOpacity="0.8" />
                </linearGradient>
                <filter id="waveGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Glowing Ambient Wave Path */}
              <path
                d="M 0,95 C 60,95 90,95 150,95 C 270,95 330,30 450,30 C 570,30 630,95 750,95 C 870,95 930,25 1050,25 C 1110,25 1155,18 1200,10"
                className="wave-path-bg"
              />
              {/* Main Crisp Wave Path */}
              <path
                d="M 0,95 C 60,95 90,95 150,95 C 270,95 330,30 450,30 C 570,30 630,95 750,95 C 870,95 930,25 1050,25 C 1110,25 1155,18 1200,10"
                className="wave-path-main"
                stroke="url(#waveGoldGradient)"
              />
              {/* Animated Continuous Golden Energy Stream */}
              <path
                d="M 0,95 C 60,95 90,95 150,95 C 270,95 330,30 450,30 C 570,30 630,95 750,95 C 870,95 930,25 1050,25 C 1110,25 1155,18 1200,10"
                className="wave-path-flow"
                pathLength="100"
              />

              {/* Traveling Golden Light Spark 1 */}
              <circle r="4.5" className="wave-spark-particle" filter="url(#waveGlow)">
                <animateMotion
                  path="M 0,95 C 60,95 90,95 150,95 C 270,95 330,30 450,30 C 570,30 630,95 750,95 C 870,95 930,25 1050,25 C 1110,25 1155,18 1200,10"
                  dur="5.5s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle r="2.5" className="wave-spark-core">
                <animateMotion
                  path="M 0,95 C 60,95 90,95 150,95 C 270,95 330,30 450,30 C 570,30 630,95 750,95 C 870,95 930,25 1050,25 C 1110,25 1155,18 1200,10"
                  dur="5.5s"
                  repeatCount="indefinite"
                />
              </circle>

              {/* Traveling Golden Light Spark 2 (Offset by 2.75s) */}
              <circle r="3.5" className="wave-spark-particle" filter="url(#waveGlow)">
                <animateMotion
                  path="M 0,95 C 60,95 90,95 150,95 C 270,95 330,30 450,30 C 570,30 630,95 750,95 C 870,95 930,25 1050,25 C 1110,25 1155,18 1200,10"
                  dur="5.5s"
                  begin="2.75s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle r="2" className="wave-spark-core">
                <animateMotion
                  path="M 0,95 C 60,95 90,95 150,95 C 270,95 330,30 450,30 C 570,30 630,95 750,95 C 870,95 930,25 1050,25 C 1110,25 1155,18 1200,10"
                  dur="5.5s"
                  begin="2.75s"
                  repeatCount="indefinite"
                />
              </circle>
            </svg>

            {/* Floating Hexagon Badges positioned on the wave curve */}
            {steps.map((st, idx) => (
              <div
                key={st.id}
                className={`wave-hex-node node-${idx + 1} ${activeStep === st.id ? 'is-active' : ''}`}
                style={{
                  left: nodeLefts[idx],
                  top: nodeTops[idx]
                }}
                onMouseEnter={() => setActiveStep(st.id)}
                onMouseLeave={() => setActiveStep(null)}
                aria-label={`Step ${st.num}: ${st.title}`}
              >
                <svg viewBox="0 0 64 72" className="hex-node-svg">
                  <polygon
                    points="32,3 61,19 61,53 32,69 3,53 3,19"
                    className="hex-node-polygon"
                  />
                </svg>
                <div className="hex-node-icon">
                  {st.icon}
                </div>
              </div>
            ))}
          </div>

          {/* 4 Step Information Cards */}
          <div className="wave-steps-grid">
            {steps.map((st, idx) => (
              <div
                key={st.id}
                className={`wave-step-card ${activeStep === st.id ? 'is-hovered' : ''}`}
                onMouseEnter={() => setActiveStep(st.id)}
                onMouseLeave={() => setActiveStep(null)}
              >
                {/* Mobile-only Hexagon Node */}
                <div className="mobile-hex-wrapper" aria-hidden="true">
                  <div className="wave-hex-node mobile-node">
                    <svg viewBox="0 0 64 72" className="hex-node-svg">
                      <polygon
                        points="32,3 61,19 61,53 32,69 3,53 3,19"
                        className="hex-node-polygon"
                      />
                    </svg>
                    <div className="hex-node-icon">{st.icon}</div>
                  </div>
                </div>

                {/* Giant Faint Watermark Number matching Reference Image */}
                <span className="step-watermark-num" aria-hidden="true">
                  {st.num}
                </span>

                {/* Step Content */}
                <div className="wave-step-content">
                  <span className="wave-step-pill">STEP 0{st.num}</span>
                  <h3 className="wave-step-title">{st.title}</h3>
                  <span className="wave-step-sub">{st.subtitle}</span>
                  <p className="wave-step-desc">{st.desc}</p>

                  <div className="wave-step-pills">
                    {st.highlights.map((h, i) => (
                      <span key={i} className="wave-micro-pill">
                        <CheckIcon size={11} className="pill-check" />
                        <span>{h}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Button */}
        <div className="wave-bottom-cta text-center">
          <button
            type="button"
            className="btn-primary-gold"
            onClick={onBookDemo}
          >
            <span>START YOUR 14-DAY SHOWROOM TRIAL</span>
            <ArrowRightIcon size={15} />
            <div className="btn-shimmer" />
          </button>
        </div>
      </div>
    </section>
  )
}
