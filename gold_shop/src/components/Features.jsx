import React, { useState, useEffect, useRef, useCallback } from 'react'
import { SparklesIcon, ArrowRightIcon } from './Icons'
import completedGif from '../assets/features/Completed.gif'
import crmGif from '../assets/features/Customer relationship management.gif'
import eWalletGif from '../assets/features/E-Wallet.gif'
import potOfGoldGif from '../assets/features/Pot of gold.gif'
import pushNotificationsGif from '../assets/features/Push notifications.gif'

export default function Features({ onBookDemo }) {
  const sectionRef = useRef(null)
  const layoutRef = useRef(null)
  const [isAnimated, setIsAnimated] = useState(false)

  // Helper to check user motion preference
  const prefersReducedMotion = () => {
    return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  }

  // Restart hallmark stamp and wipe animations cleanly via DOM reflow
  const restartAnimation = useCallback(() => {
    if (prefersReducedMotion()) return
    const layoutEl = layoutRef.current
    if (!layoutEl) return

    layoutEl.classList.remove('is-animated')
    // Reset animated elements to allow clean re-stamping across all browsers
    const animElements = layoutEl.querySelectorAll(
      '.orbital-feature-card, .orbital-hub-orb, .orbital-hub-glow, .stamp-wipe-text'
    )
    animElements.forEach((el) => {
      el.style.animation = 'none'
    })
    void layoutEl.offsetWidth // force DOM reflow
    animElements.forEach((el) => {
      el.style.animation = ''
    })
    layoutEl.classList.add('is-animated')
  }, [])

  // Trigger effect whenever user sees the section (scrolls/drags window into view)
  // Resets when scrolled out of view so it plays again when seen again (no looping).
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    if (prefersReducedMotion()) {
      setIsAnimated(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsAnimated(true)
          restartAnimation()
        } else {
          // Reset when scrolled out of view so it presents again when scrolled back
          setIsAnimated(false)
          const layoutEl = layoutRef.current
          if (layoutEl) {
            layoutEl.classList.remove('is-animated')
          }
        }
      },
      { threshold: 0.25 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [restartAnimation])

  // Replay animation handler for manual testing
  const handleReplay = (e) => {
    if (e) e.stopPropagation()
    setIsAnimated(true)
    restartAnimation()
  }

  // Outer Column (3 cards on far left orbit)
  const outerFeatures = [
    {
      id: 1,
      title: 'Complete Chit & Scheme Management',
      desc: 'Set up gold and silver schemes, enrol customers, post instalments and manage accounts and maturity. Paid amount, balance and maturity date are tracked automatically.',
      image: completedGif
    },
    {
      id: 2,
      title: 'Digital Gold & Digital Silver',
      desc: 'Buy and sell at live rates with accounts, transactions and reports; keeps customers investing seamlessly between physical showroom purchases.',
      image: potOfGoldGif
    },
    {
      id: 3,
      title: 'Integrated Payment',
      desc: 'UPI, card & net banking auto-reconciliation with zero discrepancies, instant receipts and instant ledger updates.',
      image: eWalletGif
    }
  ]

  // Inner Column (2 cards staggered on inner orbit)
  const innerFeatures = [
    {
      id: 4,
      title: 'Complete Chit & Scheme',
      desc: 'Set up schemes, enrol customers, track instalments, balance & automated maturities with precision.',
      image: crmGif
    },
    {
      id: 5,
      title: 'Automated Follow-Up & Reminders',
      desc: 'Intelligent WhatsApp, SMS & app notifications for upcoming instalments, balance dues, rate drops and maturity claims.',
      image: pushNotificationsGif
    }
  ]

  return (
    <section
      ref={sectionRef}
      id="features"
      className="section-padding split-features-section"
    >
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header text-center features-main-header">
          <div className="section-badge-wrap">
            <div className="section-badge">
              <SparklesIcon size={14} />
              <span>SOFTWARE CAPABILITIES</span>
            </div>
            <button
              type="button"
              className="stamp-replay-btn"
              onClick={handleReplay}
              title="Click to replay hallmark stamp animation (or hover anywhere in this section to loop)"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21.5 2v6h-6M2.5 22v-6h6M2 11.5a10 10 0 0 1 18.8-4.3M22 12.5a10 10 0 0 1-18.8 4.2"/>
              </svg>
              <span>Replay</span>
            </button>
          </div>

          <h2 className="section-title">
            Everything You Need to Run a <br />
            <span className="gold-text-gradient">High-Growth Jewellery Showroom</span>
          </h2>
          <p className="section-subtitle">
            From automated chit schemes and digital gold investing to real-time counter reconciliation and multi-branch control — engineered specifically for modern Indian jewellers.
          </p>
        </div>

        <div
          ref={layoutRef}
          className={`split-features-layout orbital-features-layout ${isAnimated ? 'is-animated' : ''}`}
        >
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

          {/* COLUMN 1: Far Left Outer Cards (3 Cards: top to bottom, delay 0s, 0.16s, 0.32s) */}
          <div className="orbital-cards-col outer-col">
            {outerFeatures.map((item, index) => (
              <div
                key={item.id}
                className="orbital-feature-card"
                style={{ '--stamp-delay': `${index * 0.16}s` }}
              >
                {/* Feature GIF Media */}
                <div className="feature-card-media">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="feature-card-gif"
                    loading="lazy"
                  />
                </div>
                <h3 className="feature-item-title">{item.title}</h3>
                <p className="feature-item-desc">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* COLUMN 2: Middle Inner Cards (2 Cards: top to bottom, delay 0.48s, 0.64s) */}
          <div className="orbital-cards-col inner-col">
            {innerFeatures.map((item, index) => (
              <div
                key={item.id}
                className="orbital-feature-card"
                style={{ '--stamp-delay': `${(3 + index) * 0.16}s` }}
              >
                {/* Feature GIF Media */}
                <div className="feature-card-media">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="feature-card-gif"
                    loading="lazy"
                  />
                </div>
                <h3 className="feature-item-title">{item.title}</h3>
                <p className="feature-item-desc">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* COLUMN 3: Right Circular Hub Orb (drops in at 0.85s) */}
          <div className="orbital-hub-wrapper">
            <div className="orbital-hub-glow" aria-hidden="true" />
            <div className="orbital-hub-orb">
              <div className="orbital-hub-badge">
                <span>★ CORE SOFTWARE CAPABILITIES</span>
              </div>

              <h2 className="orbital-hub-title">
                Complete Jewellery<br />
                Control.<br />
                <span className="gold-text-gradient stamp-wipe-text">Zero Manual Friction.</span>
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
