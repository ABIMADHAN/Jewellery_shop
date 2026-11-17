import React from 'react'
import { SparklesIcon, ArrowUpRightIcon, PhoneIcon } from './Icons'

export default function CtaBanner({ onBookDemo, onContactClick }) {
  return (
    <section className="cta-banner-section">
      <div className="section-container">
        <div className="cta-banner-card">
          <div className="cta-ambient-glow" />
          
          <div className="cta-content">
            <div className="cta-badge">
              <SparklesIcon size={14} />
              <span>TRANSFORM YOUR SHOWROOM OPERATIONS</span>
            </div>

            <h2 className="cta-title">
              Ready to Transform Your<br />
              <span className="gold-text-gradient">Jewellery Business?</span>
            </h2>

            <p className="cta-description">
              Modernize your jewellery schemes, improve customer engagement, and simplify everyday
              operations with Thanganidhi. Join leading jewellers who have achieved zero manual stress.
            </p>

            <div className="cta-btn-group">
              <button
                type="button"
                className="btn-primary-gold"
                onClick={onBookDemo}
              >
                <span>BOOK A FREE DEMO</span>
                <ArrowUpRightIcon size={16} />
                <div className="btn-shimmer" />
              </button>

              <button
                type="button"
                className="btn-secondary-glass"
                onClick={onContactClick}
              >
                <PhoneIcon size={15} />
                <span>CONTACT US</span>
              </button>
            </div>

            <div className="cta-trust-strip">
              <span>✓ 14-Day Free Evaluation</span>
              <span>•</span>
              <span>✓ Legacy Passbook Data Migration Included</span>
              <span>•</span>
              <span>✓ Dedicated Relationship Manager</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

