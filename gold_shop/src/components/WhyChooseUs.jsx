import React, { useState, useEffect, useRef, useCallback } from 'react'
import {
  LayersIcon,
  GiftIcon,
  SmartphoneIcon,
  BellIcon,
  ShieldCheckIcon,
  SparklesIcon,
  CheckIcon
} from './Icons'

export default function WhyChooseUs({ onBookDemo }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  const usps = [
    {
      id: 1,
      badge: '4-in-1 Platform',
      title: 'One Platform. Four Solutions.',
      desc: 'Manage Gold Chit, Silver Chit, Digital Gold, and Digital Silver seamlessly within one unified platform.',
      icon: <LayersIcon size={24} />,
      highlight: 'Gold Chit • Silver Chit • Digital Bullion'
    },
    {
      id: 2,
      badge: 'Milestone Loyalty',
      title: 'Rewards That Drive Loyalty.',
      desc: 'Offer gifts based on instalment completion and scheme milestones to encourage timely payments and customer retention.',
      icon: <GiftIcon size={24} />,
      highlight: 'Milestone gifts & on-time bonuses'
    },
    {
      id: 3,
      badge: 'White-Label App',
      title: 'Your Brand. Your Customer App.',
      desc: "Give customers access to balances, payments, notifications, and digital gold and silver through an app integrated with the jeweller's system.",
      icon: <SmartphoneIcon size={24} />,
      highlight: 'Live passbook & instant payment sync'
    },
    {
      id: 4,
      badge: 'Zero Defaults',
      title: 'Never Miss a Follow-Up.',
      desc: 'Automatically track upcoming and overdue instalments and send timely reminders to improve collection consistency.',
      icon: <BellIcon size={24} />,
      highlight: 'Automated WhatsApp & SMS reminders'
    },
    {
      id: 5,
      badge: '100% Audit-Ready',
      title: 'Every Transaction. Fully Traceable.',
      desc: 'Manage collections, receipts, refunds, bank reconciliation, role-based access, and branch-wise audit trails.',
      icon: <ShieldCheckIcon size={24} />,
      highlight: 'Cryptographic receipts & ledger integrity'
    }
  ]

  const total = usps.length

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total)
  }, [total])

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total)
  }, [total])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      const section = document.getElementById('benefits')
      if (!section) return
      const rect = section.getBoundingClientRect()
      const inView = rect.top < window.innerHeight && rect.bottom > 0
      if (!inView) return

      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        handlePrev()
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        handleNext()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handlePrev, handleNext])

  // Touch swipe handling for mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current
    if (diff > 45) {
      handleNext()
    } else if (diff < -45) {
      handlePrev()
    }
  }

  // Calculate relative slot class based on circular offset
  const getCardSlotClass = (idx) => {
    let offset = (idx - activeIndex) % total
    if (offset > 2) offset -= total
    if (offset < -2) offset += total

    if (offset === 0) return 'coverflow-slot is-active'
    if (offset === -1) return 'coverflow-slot is-prev'
    if (offset === 1) return 'coverflow-slot is-next'
    if (offset < -1) return 'coverflow-slot is-hidden-left'
    return 'coverflow-slot is-hidden-right'
  }

  return (
    <section id="benefits" className="section-padding why-choose-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="section-badge">
            <SparklesIcon size={14} />
            <span>TOP 5 STRATEGIC ADVANTAGES</span>
          </div>
          <h2 className="section-title">
            Why Thanganidhi  Choose ADHOC SOFTWARES
          </h2>
          <p className="section-subtitle">
            Engineered specifically to solve the high-stakes operational realities of Indian gold,
            silver, and bridal jewellery showrooms.
          </p>
        </div>

        {/* 3D Coverflow Carousel Container */}
        <div
          className="coverflow-carousel-section"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="coverflow-stage">
            {usps.map((item, idx) => {
              let offset = (idx - activeIndex) % total
              if (offset > 2) offset -= total
              if (offset < -2) offset += total
              const isActive = offset === 0

              return (
                <div
                  key={item.id}
                  className={getCardSlotClass(idx)}
                  onClick={() => {
                    if (!isActive) {
                      setActiveIndex(idx)
                    }
                  }}
                  role="button"
                  tabIndex={isActive ? 0 : -1}
                  aria-label={`${item.title} - Card ${idx + 1} of ${total}`}
                  aria-hidden={!isActive && Math.abs(offset) > 1}
                >
                  <div className="why-card">
                    <div className="why-card-top">
                      <div className="why-icon-box">{item.icon}</div>
                      <span className="why-metric-pill">{item.badge}</span>
                    </div>

                    <h3 className="why-card-title">{item.title}</h3>
                    <p className="why-card-desc">{item.desc}</p>

                    <div className="why-card-footer">
                      <span className="why-check-bullet"><CheckIcon size={12} /></span>
                      <span className="why-highlight-text">{item.highlight}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Bottom Arrow Navigation: ←  01 / 05  → */}
          <div className="coverflow-nav-bar">
            <button
              type="button"
              className="coverflow-arrow-btn"
              onClick={handlePrev}
              aria-label="Previous card"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
            </button>

            <div className="coverflow-counter">
              <span className="counter-current">{`0${activeIndex + 1}`}</span>
              <span className="counter-sep">/</span>
              <span className="counter-total">{`0${total}`}</span>
            </div>

            <button
              type="button"
              className="coverflow-arrow-btn"
              onClick={handleNext}
              aria-label="Next card"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        </div>

       
      </div>
    </section>
  )
}
