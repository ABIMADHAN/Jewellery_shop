import React, { useState } from 'react'
import { KalashEmblem, PhoneIcon, MailIcon, MapPinIcon } from './Icons'

export default function Footer({ onOpenLegal }) {
  const currentYear = 2026

  const handleNavScroll = (e, id) => {
    e.preventDefault()
    const target = document.getElementById(id)
    if (target) {
      const topOffset = 80
      const elementPosition = target.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - topOffset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <footer className="footer-section">
      <div className="section-container">
        <div className="footer-grid">
          {/* Col 1: Brand & About */}
          <div className="footer-col brand-col">
            <div className="footer-brand">
              <KalashEmblem size={32} />
              <span className="brand-name">THANGANIDHI</span>
            </div>
            <p className="footer-desc">
              India's premier jewellery scheme automation platform. Empowering retail showrooms,
              family jewelers, and multi-branch chains to digitize gold chits, automate UPI collections,
              and protect bullion liabilities with zero manual register mistakes.
            </p>
            <div className="footer-socials">
              <a href="#" className="social-pill" aria-label="LinkedIn" onClick={(e) => e.preventDefault()}>in</a>
              <a href="#" className="social-pill" aria-label="X / Twitter" onClick={(e) => e.preventDefault()}>𝕏</a>
              <a href="#" className="social-pill" aria-label="Instagram" onClick={(e) => e.preventDefault()}>📸</a>
              <a href="#" className="social-pill" aria-label="YouTube" onClick={(e) => e.preventDefault()}>▶</a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              <li><a href="#home" onClick={(e) => handleNavScroll(e, 'home')}>Home</a></li>
              <li><a href="#challenges" onClick={(e) => handleNavScroll(e, 'challenges')}>Jeweller Challenges</a></li>
              <li><a href="#solution" onClick={(e) => handleNavScroll(e, 'solution')}>Our Solution</a></li>
              <li><a href="#features" onClick={(e) => handleNavScroll(e, 'features')}>Key Features</a></li>
              <li><a href="#how-it-works" onClick={(e) => handleNavScroll(e, 'how-it-works')}>How It Works</a></li>
              <li><a href="#product-preview" onClick={(e) => handleNavScroll(e, 'product-preview')}>Customer Passbook App</a></li>
              <li><a href="#benefits" onClick={(e) => handleNavScroll(e, 'benefits')}>Why Choose Us</a></li>
              <li><a href="#demo-booking" onClick={(e) => handleNavScroll(e, 'demo-booking')}>Book a Demo</a></li>
            </ul>
          </div>

          {/* Col 3: Key Features & Modules */}
          <div className="footer-col">
            <h4 className="footer-col-title">Showroom Modules</h4>
            <ul className="footer-links-list">
              <li><a href="#features" onClick={(e) => handleNavScroll(e, 'features')}>11-Month Gold Weight Scheme</a></li>
              <li><a href="#features" onClick={(e) => handleNavScroll(e, 'features')}>Live Board Rate Sync Screen</a></li>
              <li><a href="#features" onClick={(e) => handleNavScroll(e, 'features')}>Instant Counter QR Passbook</a></li>
              <li><a href="#features" onClick={(e) => handleNavScroll(e, 'features')}>UPI Autopay &amp; Dynamic QR</a></li>
              <li><a href="#features" onClick={(e) => handleNavScroll(e, 'features')}>Bullion Liability &amp; Hedging</a></li>
              <li><a href="#features" onClick={(e) => handleNavScroll(e, 'features')}>Multi-Branch Role Control</a></li>
              <li><a href="#features" onClick={(e) => handleNavScroll(e, 'features')}>Cashier Audit Trail &amp; GST Logs</a></li>
            </ul>
          </div>

          {/* Col 4: Contact Information */}
          <div className="footer-col contact-col">
            <h4 className="footer-col-title">Contact Showroom Team</h4>
            <div className="contact-items-stack">
              <div className="contact-item">
                <MapPinIcon size={18} className="c-icon" />
                <span>
                  Jewellers Arcade, 4th Floor,<br />
                  Usman Road, T. Nagar,<br />
                  Chennai, Tamil Nadu 600017
                </span>
              </div>
              <div className="contact-item">
                <PhoneIcon size={18} className="c-icon" />
                <span>
                  +91 98400 12345<br />
                  +91 94440 67890 (Toll Free)
                </span>
              </div>
              <div className="contact-item">
                <MailIcon size={18} className="c-icon" />
                <span>support@thanganidhi.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="copyright-text">
            © {currentYear} THANGANIDHI Technologies Pvt. Ltd. All rights reserved.
          </div>

          <div className="footer-bottom-links">
            <button
              type="button"
              className="legal-link-btn"
              onClick={() => onOpenLegal('privacy')}
            >
              Privacy Policy
            </button>
            <span className="dot-sep">•</span>
            <button
              type="button"
              className="legal-link-btn"
              onClick={() => onOpenLegal('terms')}
            >
              Terms &amp; Conditions
            </button>
            <span className="dot-sep">•</span>
            <button
              type="button"
              className="legal-link-btn"
              onClick={() => onOpenLegal('security')}
            >
              Data Security &amp; Compliance
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

