import React from 'react'
import { SparklesIcon } from './Icons'
import blackWeb from '../assets/black_web.png'
import lightWeb from '../assets/light_web.png'
import blackMobile from '../assets/black_mobile.png'
import lightMobile from '../assets/light_mobile.png'

export default function ProductPreview({ onBookDemo, theme }) {
  const currentTheme = theme || (typeof document !== 'undefined' ? document.documentElement.getAttribute('data-theme') : 'light')
  const isDark = currentTheme === 'dark'

  const webImage = isDark ? blackWeb : lightWeb
  const mobileImage = isDark ? blackMobile : lightMobile

  return (
    <section id="product-preview" className="section-padding product-preview-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="section-badge">
            <SparklesIcon size={14} />
            <span>INTERACTIVE PRODUCT PREVIEW</span>
          </div>
          <h2 className="section-title">
            Engineered for Showroom Owners.<br />
            <span className="gold-text-gradient">Loved by Gold Buyers.</span>
          </h2>
          <p className="section-subtitle">
            Experience the intuitive dual-experience: an enterprise cloud dashboard for jewellers
            paired with a seamless white-labeled mobile passbook for your customers.
          </p>
        </div>

        {/* Dual Mockup Showcase Container: Both Website & Mobile View */}
        <div className="preview-showcase-stage">
          {/* ============================================================ */}
          {/* 1. LAPTOP ERP MOCKUP (WEBSITE VIEW)                         */}
          {/* ============================================================ */}
          <div className="laptop-preview-container">
            <div className="laptop-chassis">
              {/* Screen Display with Dashboard Image (Border-free) */}
              <div className="laptop-screen-display">
                <img
                  src={webImage}
                  alt={`Jeweller Cloud ERP Dashboard Preview (${isDark ? 'Dark Mode' : 'Light Mode'})`}
                  className="laptop-preview-img"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* ============================================================ */}
          {/* 2. SMARTPHONE CUSTOMER PASSBOOK MOCKUP (MOBILE VIEW)         */}
          {/* ============================================================ */}
          <div className="mobile-preview-container">
            <div className="mobile-phone-frame">
              {/* Phone Screen Display with Mobile App Image */}
              <div className="mobile-phone-screen">
                <img
                  src={mobileImage}
                  alt={`Customer Mobile Passbook App Preview (${isDark ? 'Dark Mode' : 'Light Mode'})`}
                  className="mobile-preview-img"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Demo Disclaimer Note */}
        <div className="preview-disclaimer text-center">
          <span className="disclaimer-text">
            * Live responsive preview based on real Thanganidhi deployment data. Seamlessly adapts between Light and Dark themes.
          </span>
        </div>
      </div>
    </section>
  )
}
