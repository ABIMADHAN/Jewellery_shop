import React, { useState } from 'react'
import { SparklesIcon, ArrowRightIcon, CheckIcon } from './Icons'
import creationSvg from '../assets/small-pics/creation.svg'
import manageSvg from '../assets/small-pics/manage.svg'
import paymentSvg from '../assets/small-pics/Payment Information-bro.svg'

export default function HowItWorks({ onBookDemo }) {
  const [flippedStep, setFlippedStep] = useState(null)

  const steps = [
    {
      num: '01',
      id: 1,
      image: creationSvg,
      title: 'Create Jewellery Schemes',
      subtitle: 'Configurable in under 5 minutes',
      desc: 'Define custom 11-month gold weight schemes, fixed value chits, or digital gold plans with specific maturity bonuses and payment deadlines.',
      highlights: ['Custom bonus months', 'Daily board rate linking', 'Zero technical skills needed'],
      backDesc: 'Configure custom 11-month gold chit plans, bonus formulas, and digital passbooks for your showroom today.'
    },
    {
      num: '02',
      id: 2,
      image: manageSvg,
      title: 'Enrol Customers Seamlessly',
      subtitle: 'Counter QR or Mobile App',
      desc: 'Onboard scheme members in 60 seconds with mobile number, Aadhaar/PAN KYC, and immediately issue a digital passbook with QR code.',
      highlights: ['Instant digital passbook', 'Automated welcome WhatsApp', 'Paperless customer KYC'],
      backDesc: 'Equip your counter staff with instant QR passbook issuance and automated WhatsApp customer onboarding in 60 seconds.'
    },
    {
      num: '03',
      id: 3,
      image: paymentSvg,
      title: 'Track Payments & Auto-Remind',
      subtitle: 'Frictionless UPI & Auto-Pay',
      desc: 'Thanganidhi automatically dispatches reminder alerts with direct UPI links. Each payment updates the customer passbook ledger in real time.',
      highlights: ['95%+ on-time collections', 'Auto bank reconciliation', 'Zero manual ledger entries'],
      backDesc: 'Automate monthly customer collections via UPI links and eliminate manual chit register errors completely.'
    },
    {
      num: '04',
      id: 4,
      image: manageSvg,
      title: 'Manage Maturities & Grow Sales',
      subtitle: 'Effortless Showroom Redemption',
      desc: 'When schemes mature, customers present their passbook QR at the showroom counter. Staff scan it to verify and upsell high-margin bridal jewellery.',
      highlights: ['Counter QR scan verification', '82%+ customer scheme renewal', 'Instant GST delivery voucher'],
      backDesc: 'Transform chit maturities into high-margin jewellery sales with instant counter QR verification and smart upselling.'
    }
  ]

  const handleCardTap = (id) => {
    // Mobile tap-to-flip interaction
    setFlippedStep((prev) => (prev === id ? null : id))
  }

  const handleBookNow = (e) => {
    e.stopPropagation()
    if (onBookDemo) {
      onBookDemo()
    } else {
      const demoSection = document.getElementById('demo-booking')
      if (demoSection) {
        demoSection.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <section id="how-it-works" className="section-padding how-it-works-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header text-center">
          <h2 className="section-title">
            Simplify Your Jewellery Business in 4 Steps
          </h2>
          <p className="section-subtitle">
            Experience end-to-end operational clarity from the moment a customer joins your scheme
            to the day they celebrate their jewellery delivery.
          </p>
        </div>

        {/* 4 Connected Steps Timeline with Premium 3D Flip Cards */}
        <div className="steps-timeline">
          {/* Connecting Gold Pipeline */}
          <div className="timeline-pipeline-bar" />

          <div className="steps-grid">
            {steps.map((st) => {
              const isFlipped = flippedStep === st.id
              return (
                <div
                  key={st.id}
                  className={`step-flip-container ${isFlipped ? 'is-flipped' : ''}`}
                  onClick={() => handleCardTap(st.id)}
                  onMouseLeave={() => setFlippedStep(null)}
                  tabIndex={0}
                  role="button"
                  aria-label={`${st.title} - Click or tap to flip card`}
                >
                  <div className="step-card-flipper">
                    {/* FRONT SIDE (Existing card content with illustration replacing step-badge-wrap) */}
                    <div className="step-card-face step-card-front">
                      {/* Step Illustration Box */}
                      <div className="step-image-wrap">
                        <img
                          src={st.image}
                          alt={st.title}
                          className="step-card-image"
                          loading="lazy"
                        />
                        <span className="step-number-pill">{st.num}</span>
                      </div>

                      <h3 className="step-title">{st.title}</h3>
                      <span className="step-subtitle">{st.subtitle}</span>
                      <p className="step-desc">{st.desc}</p>


                    </div>

                    {/* BACK SIDE (Short description with centered "Book Now" button) */}
                    <div className="step-card-face step-card-back">
                      <div className="step-back-badge">
                        <span className="step-back-num">STEP {st.num}</span>
                        <SparklesIcon size={13} />
                      </div>

                      <h4 className="step-back-title">{st.title}</h4>
                      <p className="step-back-desc">{st.backDesc}</p>

                      <div className="step-back-action">
                        <button
                          type="button"
                          className="btn-step-book-now"
                          onClick={(e) => handleBookNow(e)}
                        >
                          <span>Book Now</span>
                          <ArrowRightIcon size={14} />
                          <div className="btn-shimmer" />
                        </button>
                      </div>

                      <span className="step-back-hint">
                        14-Day Free Trial • Instant Showroom Setup
                      </span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="steps-bottom-action text-center">
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
