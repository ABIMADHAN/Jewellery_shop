import React, { useState, useEffect, useRef } from 'react'
import { SparklesIcon, ArrowUpRightIcon, MoonIcon, SunIcon, KalashEmblem, TypeIcon } from './Icons'

const AVAILABLE_FONTS = [
  { name: 'Manrope', label: 'Manrope (Default)', tag: 'Default Sans' },
  { name: 'Playfair Display', label: 'Playfair Display', tag: 'Luxury Serif' },
  { name: 'Cinzel', label: 'Cinzel', tag: 'Royal Classical' },
  { name: 'Inter', label: 'Inter', tag: 'Precision UI' },
  { name: 'Outfit', label: 'Outfit', tag: 'Geometric Sans' },
  { name: 'Plus Jakarta Sans', label: 'Plus Jakarta Sans', tag: 'Modern Tech' },
  { name: 'Cormorant Garamond', label: 'Cormorant Garamond', tag: 'Haute Horlogerie' },
  { name: 'Montserrat', label: 'Montserrat', tag: 'Bold Architecture' },
  { name: 'Poppins', label: 'Poppins', tag: 'Rounded Modern' },
  { name: 'Urbanist', label: 'Urbanist', tag: 'Sleek Minimal' }
]

export default function Navbar({ onBookDemo, theme, onToggleTheme, currentFont = 'Manrope', onChangeFont }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isRateToastVisible, setIsRateToastVisible] = useState(true)
  const [fontDropdownOpen, setFontDropdownOpen] = useState(false)
  const fontMenuRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (fontMenuRef.current && !fontMenuRef.current.contains(e.target)) {
        setFontDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80)

      const sections = ['home', 'challenges', 'solution', 'features', 'how-it-works', 'product-preview', 'benefits', 'promise', 'pricing', 'demo-booking']
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
    { name: 'Promise', href: '#promise', id: 'promise' },
    { name: 'Pricing', href: '#pricing', id: 'pricing' },
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
              const isSecondary = item.id === 'challenges' || item.id === 'benefits'
              return (
                <li key={item.id} className={`nav-item ${isSecondary ? 'nav-item-secondary' : ''}`}>
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
            {/* 10 Fonts Selector Dropdown */}
            <div className="font-picker-container" ref={fontMenuRef}>
              <button
                type="button"
                className="font-picker-toggle-btn"
                onClick={() => setFontDropdownOpen(!fontDropdownOpen)}
                aria-label="Select website font style"
                title="Select Website Font Style (10 Available)"
                aria-expanded={fontDropdownOpen}
              >
                <TypeIcon size={14} className="font-icon" />
                <span className="font-name-label">{currentFont}</span>
                <span className="font-chevron">{fontDropdownOpen ? '▲' : '▼'}</span>
              </button>

              {fontDropdownOpen && (
                <div className="font-dropdown-menu">
                  <div className="font-dropdown-header">
                    <span>SELECT FONT STYLE (10)</span>
                  </div>
                  <ul className="font-options-list">
                    {AVAILABLE_FONTS.map((f) => (
                      <li key={f.name}>
                        <button
                          type="button"
                          className={`font-option-btn ${currentFont === f.name ? 'selected' : ''}`}
                          style={{ fontFamily: `'${f.name}', sans-serif` }}
                          onClick={() => {
                            if (onChangeFont) onChangeFont(f.name)
                            setFontDropdownOpen(false)
                          }}
                        >
                          <span className="font-option-name">{f.label}</span>
                          <span className="font-option-tag">{f.tag}</span>
                          {currentFont === f.name && <span className="font-check-mark">✓</span>}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Book Showroom Demo Button */}
            <button
              type="button"
              className="btn-book-demo"
              onClick={onBookDemo}
            >
              <SparklesIcon className="sparkle-icon" size={14} />
              <span>BOOK DEMO</span>
              <ArrowUpRightIcon size={14} />
            </button>

           

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
              <div className="mobile-font-picker-label">CHOOSE WEBSITE FONT (10):</div>
              <select
                className="mobile-font-select"
                value={currentFont}
                onChange={(e) => {
                  if (onChangeFont) onChangeFont(e.target.value)
                }}
              >
                {AVAILABLE_FONTS.map((f) => (
                  <option key={f.name} value={f.name}>
                    {f.label} — {f.tag}
                  </option>
                ))}
              </select>

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
