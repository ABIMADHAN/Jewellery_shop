import React, { useState } from 'react'
import { FileTextIcon, TrendingUpIcon, ClockIcon, ShieldCheckIcon, UsersIcon } from './Icons'
import handshakeVideo from '../assets/handshake.mp4'

const OUTCOMES = [
  {
    id: 1,
    num: '01',
    icon: FileTextIcon,
    title: 'Fewer missed instalments',
    subtitle: 'Overdue collections · 6-month target',
    stat: '30–40%'
  },
  {
    id: 2,
    num: '02',
    icon: TrendingUpIcon,
    title: 'Higher scheme completion',
    subtitle: 'Help more customers reach maturity',
    stat: '15–25%'
  },
  {
    id: 3,
    num: '03',
    icon: ClockIcon,
    title: 'Staff time saved',
    subtitle: 'Less daily manual work',
    stat: '2–3 hrs'
  },
  {
    id: 4,
    num: '04',
    icon: ShieldCheckIcon,
    title: 'Faster, cleaner records',
    subtitle: 'Zero-error aim · Disputes under 5 min',
    stat: '0 errors*'
  },
  {
    id: 5,
    num: '05',
    icon: UsersIcon,
    title: 'New revenue & repeat business',
    subtitle: 'Digital gold & silver · 12-month goal',
    stat: '20–30%'
  }
]

export default function PromiseSection() {
  const [activeOutcome, setActiveOutcome] = useState(1)

  return (
    <section id="promise" className="section-padding promise-section">
      <div className="section-container promise-container">
        
        {/* Header Section */}
        <div className="promise-header-row">
          <div className="promise-title-group">
            <h2 className="promise-main-heading">
              <span>Less chasing.</span>
              <span className="promise-highlight-italic">More shining.</span>
            </h2>
            <p className="promise-subheading">
              Five ambitious outcomes for jewellery showrooms — and the Thanganidhi tools designed to make each one possible.
            </p>
          </div>

          <div className="promise-disclaimer-pill">
            <span className="disclaimer-info-icon" aria-hidden="true">ⓘ</span>
            <span>Illustrative pilot targets · Not measured results</span>
          </div>
        </div>

        {/* 2-Column Content Grid: Left Blank Image Space | Right Interactive Outcomes List */}
        <div className="promise-grid">
          
          {/* Left Column: Handshake Video Showcase */}
          <div className="promise-image-col">
            <div className="promise-image-frame">
              <video
                src={handshakeVideo}
                className="promise-video"
                autoPlay
                loop
                muted
                playsInline
              />
            </div>
          </div>

          {/* Right Column: Outcomes List */}
          <div className="promise-outcomes-col">
            <div className="outcomes-nav-header">
              <span className="outcomes-nav-label">CHOOSE AN OUTCOME</span>
              <span className="outcomes-nav-hint">Tap to explore ↗</span>
            </div>

            <div className="outcomes-list" role="list">
              {OUTCOMES.map((item) => {
                const IconComponent = item.icon
                const isSelected = activeOutcome === item.id
                return (
                  <button
                    key={item.id}
                    type="button"
                    role="listitem"
                    className={`outcome-card-btn outcome-step-${item.id} ${isSelected ? 'active-outcome' : ''}`}
                    onClick={() => setActiveOutcome(item.id)}
                    onMouseEnter={() => setActiveOutcome(item.id)}
                    aria-selected={isSelected}
                  >
                    <div className="outcome-card-left">
                      <span className="outcome-num">{item.num}</span>
                      <div className="outcome-icon-box">
                        <IconComponent size={18} className="outcome-icon" />
                      </div>
                      <div className="outcome-text-block">
                        <h4 className="outcome-title">{item.title}</h4>
                        <p className="outcome-subtitle">{item.subtitle}</p>
                      </div>
                    </div>
                    <div className="outcome-stat-block">
                      <span className="outcome-stat-val">{item.stat}</span>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
