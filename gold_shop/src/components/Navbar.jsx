import React, { useState, useEffect } from 'react'
import { SparklesIcon, ArrowUpRightIcon, MoonIcon, SunIcon, KalashEmblem } from './Icons'

export default function Navbar({ onBookDemo, theme, onToggleTheme }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isRateToastVisible, setIsRateToastVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)

      const sections = ['home', 'challenges', 'solution', 'features', 'how-it-works', 'product-preview', 'benefits', 'demo-booking']
      const scrollPos = window.scrollY + 180

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Challenges', href: '#challenges', id: 'challenges' },
    { name: 'Features', href: '#features', id: 'features' },
    { name: 'Solution', href: '#solution', id: 'solution' },
    { name: 'How It Works', href: '#how-it-works', id: 'how-it-works' },
    { name: 'Customer App', href: '#product-preview', id: 'product-preview' },
    { name: 'Benefits', href: '#benefits', id: 'benefits' },
    { name: 'Contact', href: '#demo-booking', id: 'demo-booking' },
  ]

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const target = document.querySelector(href)
    if (target) {
      const topOffset = 90
      const elementPosition = target.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - topOffset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <>
      <header className={`navbar-wrapper ${scrolled ? 'nav-scrolled' : ''}`}>
        {/* MAIN NAVIGATION */}
        <nav className="main-nav">
        <div className="nav-container">
          {/* Brand Logo */}
          <a href="#home" className="brand-logo" onClick={(e) => handleNavClick(e, '#home')}>
            <div className="logo-emblem-wrap">
              <KalashEmblem size={30} />
            </div>
            <span className="brand-name">THANGANIDHI</span>
          </a>

          {/* Desktop Nav Links */}
          <ul className="nav-links">
            {navLinks.map((item) => {
              const isActive = activeSection === item.id
              return (
                <li key={item.id} className="nav-item">
                  <a
                    href={item.href}
                    className={`nav-link-btn ${isActive ? 'active' : ''}`}
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {isActive && <span className="nav-active-pip" aria-hidden="true" />}
                    <span>{item.name}</span>
                    {item.id === 'product-preview' && <span className="nav-chip-badge">APP</span>}
                  </a>
                </li>
              )
            })}
          </ul>

          {/* Action Buttons */}
          <div className="nav-actions">
            {/* Book Showroom Demo Button */}
            <button
              type="button"
              className="btn-book-demo"
              onClick={onBookDemo}
            >
              <SparklesIcon className="sparkle-icon" size={14} />
              <span>BOOK SHOWROOM DEMO</span>
              <ArrowUpRightIcon size={14} />
            </button>

            {/* Dark/Light Mode Pill
            <button
              type="button"
              className="theme-toggle-pill"
              onClick={onToggleTheme}
              aria-label="Toggle dark/light theme"
              title="Switch Theme"
            >
              {theme === 'dark' ? (
                <>
                  <MoonIcon size={13} className="theme-icon" />
                  <span>DARK</span>
                </>
              ) : (
                <>
                  <SunIcon size={13} className="theme-icon" />
                  <span>LIGHT</span>
                </>
              )}
            </button> */}

            {/* Mobile Menu Hamburger */}
            <button
              type="button"
              className="mobile-hamburger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`bar ${mobileMenuOpen ? 'open-1' : ''}`} />
              <span className={`bar ${mobileMenuOpen ? 'open-2' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="mobile-dropdown-menu">
            <ul>
              {navLinks.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mobile-actions">
              <button
                type="button"
                className="btn-book-demo full-w"
                onClick={() => {
                  onBookDemo()
                  setMobileMenuOpen(false)
                }}
              >
                <SparklesIcon size={14} />
                <span>BOOK SHOWROOM DEMO</span>
                <ArrowUpRightIcon size={14} />
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>

    {/* FLOATING LIVE RATE NOTIFICATION (POPPING OUT FROM RIGHT SIDE CORNER) */}
    {isRateToastVisible && (
      <aside className="rate-toast-notification" aria-label="Live Bullion Rates">
        <div className="rate-toast-capsule">
          <span className="live-dot" aria-hidden="true" />
          <span className="rate-toast-tag">LIVE BOARD RATE:</span>
          <span className="rate-toast-gold">
            24K GOLD <strong className="gold-val">₹7,840/g</strong> <span className="delta-up">(+0.8%)</span>
          </span>
          <span className="ticker-separator" aria-hidden="true">•</span>
          <span className="rate-toast-silver">
            999 SILVER <strong className="silver-val">₹94.50/g</strong>
          </span>
          <button
            type="button"
            className="rate-toast-close"
            onClick={() => setIsRateToastVisible(false)}
            aria-label="Dismiss live rates notification"
            title="Dismiss notification"
          >
            ×
          </button>
        </div>
      </aside>
    )}
  </>
)
}
