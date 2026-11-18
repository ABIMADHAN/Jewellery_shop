import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Challenges from './components/Challenges'
import Solution from './components/Solution'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import ProductPreview from './components/ProductPreview'
import WhyChooseUs from './components/WhyChooseUs'
import PromiseSection from './components/PromiseSection'
import Pricing from './components/Pricing'
import DemoBookingSection from './components/DemoBookingSection'
import Footer from './components/Footer'
import ShowroomDemoModal from './components/ShowroomDemoModal'
import LegalModal from './components/LegalModal'
import './App.css'

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('thanganidhi_theme') || 'light'
  })
  const [currentFont, setCurrentFont] = useState(() => {
    return localStorage.getItem('thanganidhi_font') || 'Manrope'
  })
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false)
  const [legalModalState, setLegalModalState] = useState({ isOpen: false, type: 'privacy' })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('thanganidhi_theme', theme)
  }, [theme])

  useEffect(() => {
    const fontValue = currentFont === 'Manrope'
      ? "'Manrope', sans-serif"
      : `'${currentFont}', sans-serif`
    document.documentElement.style.setProperty('--font-active', fontValue)
    localStorage.setItem('thanganidhi_font', currentFont)
  }, [currentFont])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  const scrollToSection = (id) => {
    const el = document.getElementById(id)
    if (el) {
      const topOffset = 80
      const elementPosition = el.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - topOffset
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div className="thanganidhi-app">
      {/* Ambient Chandelier & Gold Bokeh Atmosphere */}
      <div className="ambient-lighting" aria-hidden="true">
        <div className="ambient-chandelier-left" />
        <div className="ambient-chandelier-center" />
        <div className="ambient-chandelier-right" />
        <div className="chandelier-crystal-overlay" />
        <div className="ambient-vignette" />
      </div>

      {/* 1. TOP TICKER & STICKY NAVBAR */}
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        onBookDemo={() => setIsDemoModalOpen(true)}
        currentFont={currentFont}
        onChangeFont={setCurrentFont}
      />

      <main className="main-content">
        {/* 2. HERO SECTION (REFERENCE IMAGE 1 COMPOSITION) */}
        <Hero
          onGetStarted={() => scrollToSection('demo-booking')}
          onExploreFeatures={() => scrollToSection('solution')}
        />

        {/* 3. 5 BIGGEST CHALLENGES SECTION */}
        <Challenges />

        {/* 4. SOLUTION SECTION (SPLIT ARCHITECTURE ECOSYSTEM) */}
        <Solution
          onBookDemo={() => setIsDemoModalOpen(true)}
        />

        {/* 5. TOP 7 FEATURES SECTION (SPLIT VALUE PROPOSITION & CARDS GRID) */}
        <Features
          onBookDemo={() => setIsDemoModalOpen(true)}
        />

        {/* 6. HOW IT WORKS (4-STEP CONNECTED TIMELINE) */}
        <HowItWorks
          onBookDemo={() => setIsDemoModalOpen(true)}
        />

        {/* 7. SOFTWARE & CUSTOMER APP PREVIEW (REFERENCE IMAGE 2 INSPIRATION) */}
        <ProductPreview
          theme={theme}
          onBookDemo={() => setIsDemoModalOpen(true)}
        />

        {/* 8. WHY CHOOSE THANGANIDHI (6 BENEFIT CARDS) */}
        <WhyChooseUs
          onBookDemo={() => setIsDemoModalOpen(true)}
        />

        {/* 8.5. PROMISE SECTION (OUTCOMES & IMAGE) */}
        <PromiseSection />

        {/* 9. TRANSPARENT PRICING & PAYMENT PLANS */}
        <Pricing
          onBookDemo={() => setIsDemoModalOpen(true)}
        />

        {/* 10. DEMO BOOKING FORM SECTION */}
        <DemoBookingSection />
      </main>

      {/* 11. FOOTER */}
      <Footer
        onOpenLegal={(type) => setLegalModalState({ isOpen: true, type })}
      />

      {/* 12. POPUP MODALS */}
      <ShowroomDemoModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />

      <LegalModal
        isOpen={legalModalState.isOpen}
        type={legalModalState.type}
        onClose={() => setLegalModalState({ isOpen: false, type: 'privacy' })}
      />
    </div>
  )
}

export default App
