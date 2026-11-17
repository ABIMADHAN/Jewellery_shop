import React, { useState, useEffect, useRef } from 'react'
import { AlertCircleIcon } from './Icons'
import instructionManualSvg from '../assets/challenges/Instruction manual.gif'
import worriedGif from '../assets/challenges/Worried.gif'
import shrugSvg from '../assets/challenges/Shrug.gif'
import workInProgressGif from '../assets/challenges/Work in progress.gif'
import downfallGif from '../assets/challenges/Downfall.gif'

export default function Challenges() {
  const [expandedCard, setExpandedCard] = useState(null)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting) {
          setIsVisible(true)
        } else if (entry.boundingClientRect.top > 0) {
          setIsVisible(false)
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
      }
    )

    const currentRef = sectionRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [])

  const challenges = [
    {
      id: 1,
      image: instructionManualSvg,
      title: 'Manual Record Errors',
      subtitle: 'Paper ledgers & math errors',
      problem: 'Duplicated entries & mistaken gold rates lead to bitter customer disputes at scheme maturity.',
      solution: '100% automated digital ledger calculated live at exact transaction board rate.'
    },
    {
      id: 2,
      image: worriedGif,
      title: 'Missed Instalments',
      subtitle: 'Delayed collections & dropouts',
      problem: 'Lack of automated reminders causes delayed payments and unpredictable showroom cash flow.',
      solution: 'Smart WhatsApp alerts with embedded 1-click UPI payment links sent on due date.'
    },
    {
      id: 3,
      image: shrugSvg,
      title: 'No Self-Service',
      subtitle: 'Counter crowd & staff calls',
      problem: 'Customers must visit the store or call staff just to check accumulated gold weight balance.',
      solution: 'White-labeled customer mobile passbook app with 24/7 live gram tracking.'
    },
    {
      id: 4,
      image: workInProgressGif,
      title: 'Fraud & Missing Audit',
      subtitle: 'Lost receipts & cash leakage',
      problem: 'Lost paper receipts, untracked collections, and unverified passbooks create severe risks.',
      solution: 'Role-based cashier permissions, cryptographic QR counter verification, and immutable logs.'
    },
    {
      id: 5,
      image: downfallGif,
      title: 'Poor Liability Visibility',
      subtitle: 'Unhedged bullion spikes',
      problem: 'Owners struggle to monitor upcoming scheme maturities and fluctuating bullion liabilities.',
      solution: 'Real-time gold liability ledger with automated 30/60/90-day maturity forecasts.'
    }
  ]

  const toggleCard = (id) => {
    setExpandedCard(expandedCard === id ? null : id)
  }

  return (
    <section id="challenges" ref={sectionRef} className="section-padding challenges-section">
      <div className="section-container">
        {/* Section Header */}
        <div className={`section-header text-center compact-header ${isVisible ? 'header-revealed' : 'header-pre-reveal'}`}>
          <div className="section-badge">
            <AlertCircleIcon size={13} />
            <span>INDUSTRY BOTTLENECKS</span>
          </div>
          <h2 className="section-title">
            The 5 Biggest Challenges Faced by Jewellers
          </h2>
          <p className="section-subtitle">
            Why traditional paper ledgers and fragmented registers hurt showroom margins and customer trust.
          </p>
        </div>

        {/* Normal Shaped Cards with Scroll-Triggered Staggered Animation */}
        <div className={`normal-challenges-grid ${isVisible ? 'is-animated' : 'is-hidden'}`}>
          {challenges.map((c, index) => {
            const isExpanded = expandedCard === c.id

            return (
              <div
                key={c.id}
                className={`normal-challenge-card ${isExpanded ? 'card-expanded' : ''}`}
                style={{
                  '--delay': index
                }}
                onClick={() => toggleCard(c.id)}
              >
                {/* Image Top Row */}
                <div className="card-top-row">
                  <img
                    src={c.image}
                    alt={c.title}
                    className="challenge-card-img"
                    loading="lazy"
                  />
                </div>

                {/* Title & Subtitle */}
                <h3 className="challenge-card-title">{c.title}</h3>
                <span className="challenge-card-subtitle">{c.subtitle}</span>


                {/* Footer with Thanganidhi Fix Toggle */}
                <div className="challenge-card-footer">
               

                  
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
