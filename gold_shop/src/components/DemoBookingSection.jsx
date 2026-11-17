import React, { useState } from 'react'
import {
  SparklesIcon,
  CheckCircleIcon,
  Building2Icon,
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  ClockIcon,
  ShieldCheckIcon,
  UsersIcon
} from './Icons'

export default function DemoBookingSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    storeName: '',
    mobile: '',
    email: '',
    city: '',
    branches: '1 Showroom (Single Store)',
    preferredSlot: 'Morning (10:00 AM – 1:00 PM)',
    currentSoftware: 'Manual Ledger / Physical Chits',
    requirements: ''
  })

  const [submitted, setSubmitted] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errorMsg) setErrorMsg('')
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Frontend validation
    if (!formData.fullName.trim()) {
      setErrorMsg('Please enter your full name')
      return
    }
    if (!formData.storeName.trim()) {
      setErrorMsg('Please enter your jewellery store name')
      return
    }
    if (!formData.mobile.trim() || formData.mobile.replace(/\D/g, '').length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number')
      return
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMsg('Please enter a valid email address')
      return
    }
    if (!formData.city.trim()) {
      setErrorMsg('Please enter your showroom city or town')
      return
    }

    setSubmitted(true)
  }

  const handleReset = () => {
    setSubmitted(false)
    setFormData({
      fullName: '',
      storeName: '',
      mobile: '',
      email: '',
      city: '',
      branches: '1 Showroom (Single Store)',
      preferredSlot: 'Morning (10:00 AM – 1:00 PM)',
      currentSoftware: 'Manual Ledger / Physical Chits',
      requirements: ''
    })
  }

  return (
    <section id="demo-booking" className="section-padding demo-booking-section">
      <div className="section-container">
        <div className="booking-split-grid">
          {/* LEFT: Demo Booking Form Card */}
          <div className="booking-form-column">
            <div className="booking-form-card">
              {!submitted ? (
                <>
                  <div className="form-header-badge-row">
                    <div className="form-live-badge">
                      <span className="live-support-dot" />
                      <span>Live Support • 15m Response</span>
                    </div>
                    <span className="form-direct-msg">Send Us a Direct Message</span>
                  </div>

                  <div className="form-card-header">
                    <h3 className="form-heading">Request a Showroom Demo</h3>
                    <p className="form-subheading">Fill out the form below. Zero sales pressure, 100% confidential.</p>
                  </div>

                  {errorMsg && (
                    <div className="form-alert-error">
                      <span>⚠️ {errorMsg}</span>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="booking-native-form" noValidate>
                    <div className="booking-form-fields">
                      <div className="form-grid-2col">
                        <div className="input-group">
                          <label htmlFor="fullName">Full Name *</label>
                          <input
                            id="fullName"
                            name="fullName"
                            type="text"
                            placeholder="e.g. Anandha Varma"
                            value={formData.fullName}
                            onChange={handleInputChange}
                            required
                          />
                        </div>

                        <div className="input-group">
                          <label htmlFor="storeName">Jewellery Store Name *</label>
                          <input
                            id="storeName"
                            name="storeName"
                            type="text"
                            placeholder="e.g. Varma Gold Palace"
                            value={formData.storeName}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="form-grid-2col">
                        <div className="input-group">
                          <label htmlFor="mobile">Mobile Number (WhatsApp) *</label>
                          <input
                            id="mobile"
                            name="mobile"
                            type="tel"
                            placeholder="+91 98765 43210"
                            value={formData.mobile}
                            onChange={handleInputChange}
                            required
                          />
                        </div>

                        <div className="input-group">
                          <label htmlFor="email">Email Address *</label>
                          <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="owner@varmagold.com"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="form-grid-2col">
                        <div className="input-group">
                          <label htmlFor="city">City / Location *</label>
                          <input
                            id="city"
                            name="city"
                            type="text"
                            placeholder="e.g. Chennai, Madurai, Bengaluru"
                            value={formData.city}
                            onChange={handleInputChange}
                            required
                          />
                        </div>

                        <div className="input-group">
                          <label htmlFor="branches">Number of Branches</label>
                          <select
                            id="branches"
                            name="branches"
                            value={formData.branches}
                            onChange={handleInputChange}
                          >
                            <option>1 Showroom (Single Store)</option>
                            <option>2 - 5 Showroom Branches</option>
                            <option>6 - 20 Chain Locations</option>
                            <option>20+ Enterprise Showrooms</option>
                          </select>
                        </div>
                      </div>

                      <div className="form-grid-2col">
                        <div className="input-group">
                          <label htmlFor="preferredSlot">Preferred Demo Slot</label>
                          <select
                            id="preferredSlot"
                            name="preferredSlot"
                            value={formData.preferredSlot}
                            onChange={handleInputChange}
                          >
                            <option>Morning (10:00 AM – 1:00 PM)</option>
                            <option>Afternoon (1:00 PM – 5:00 PM)</option>
                            <option>Evening (5:00 PM – 8:30 PM)</option>
                          </select>
                        </div>

                        <div className="input-group">
                          <label htmlFor="currentSoftware">Current System / Setup</label>
                          <select
                            id="currentSoftware"
                            name="currentSoftware"
                            value={formData.currentSoftware}
                            onChange={handleInputChange}
                          >
                            <option>Manual Ledger / Physical Chits</option>
                            <option>Excel / Spreadsheets</option>
                            <option>Legacy Desktop Billing Software</option>
                            <option>Starting a New Jewellery Scheme</option>
                          </select>
                        </div>
                      </div>

                      <div className="input-group input-group-full">
                        <label htmlFor="requirements">Showroom Requirements & Scheme Details (Optional)</label>
                        <textarea
                          id="requirements"
                          name="requirements"
                          rows="3"
                          placeholder="e.g. 11-month gold chit schemes, ~2,000 active passbook customers, counter QR scanner verification, custom bonus rules..."
                          value={formData.requirements}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="booking-form-footer">
                      <div className="form-guarantee-note">
                        <span>🔒 Your business data is 256-bit encrypted and never shared.</span>
                      </div>

                      <button type="submit" className="btn-submit-booking">
                        <span>CONFIRM MY SHOWROOM DEMO</span>
                        <SparklesIcon size={16} />
                      </button>
                    </div>
                  </form>
                </>
              ) : (
                <div className="form-success-state">
                  <div className="success-icon-gold">
                    <CheckCircleIcon size={58} />
                  </div>
                  <h3 className="success-heading">Demo Request Received!</h3>
                  <p className="success-body">
                    Thank you, <strong>{formData.fullName}</strong>. We have scheduled a personalized demo for{' '}
                    <strong>{formData.storeName}</strong> ({formData.city}).
                  </p>
                  <p className="success-sub">
                    Our senior technical consultant will contact you via WhatsApp on{' '}
                    <strong>{formData.mobile}</strong> within 2 hours to confirm your preferred time slot.
                  </p>

                  <div className="success-summary-box">
                    <div className="sum-row">
                      <span>Store:</span>
                      <strong>{formData.storeName}</strong>
                    </div>
                    <div className="sum-row">
                      <span>Preferred Slot:</span>
                      <strong>{formData.preferredSlot}</strong>
                    </div>
                    <div className="sum-row">
                      <span>Branches:</span>
                      <strong>{formData.branches}</strong>
                    </div>
                    {formData.requirements && (
                      <div className="sum-row">
                        <span>Requirements:</span>
                        <strong className="text-truncate-sm">{formData.requirements}</strong>
                      </div>
                    )}
                    <div className="sum-row">
                      <span>Evaluation Pass:</span>
                      <strong className="text-gold">14-Day Pro Access Activated</strong>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="btn-primary-gold"
                    onClick={handleReset}
                  >
                    <span>SUBMIT ANOTHER ENQUIRY</span>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT: Direct Technical Support & Company Location Card (Exact match from image) */}
          <div className="booking-info-column">
            <div className="support-overview-card">
              {/* 1. Top Direct Technical Support Banner */}
              <div className="support-banner-box">
                <div className="support-banner-illustration" aria-hidden="true">
                  <svg viewBox="0 0 160 140" className="support-agent-svg" fill="none">
                    <ellipse cx="80" cy="125" rx="55" ry="12" fill="rgba(245, 190, 67, 0.18)" />
                    {/* Big Smartphone */}
                    <rect x="24" y="20" width="60" height="95" rx="10" fill="#1C150E" stroke="#D4AF37" strokeWidth="2.5" />
                    <rect x="28" y="26" width="52" height="83" rx="6" fill="#2E2015" />
                    <circle cx="54" cy="66" r="16" fill="rgba(245, 190, 67, 0.2)" />
                    <path d="M48 58 C48 58 50 64 54 68 C58 72 64 74 64 74 L66 71 C67 69.5 66 68 64.5 67.5 L62 66.5 C60.5 66 59.5 66.5 59 67.5 L58 68 C55.5 66.5 53.5 64.5 52 62 L52.5 61 C53.5 60.5 54 59.5 53.5 58 L52.5 55.5 C52 54 50.5 53 49 54 Z" fill="#F5BE43" />
                    {/* Support Agent */}
                    <path d="M96 95 L96 125 L102 125 L102 105 L108 105 L108 125 L114 125 L114 95 Z" fill="#1C150E" />
                    <path d="M92 65 L118 65 L122 95 L88 95 Z" fill="#FFF9EE" stroke="#D4AF37" strokeWidth="1" />
                    <path d="M103 66 L107 66 L106 82 L105 85 L104 82 Z" fill="#D4AF37" />
                    <circle cx="105" cy="52" r="10" fill="#FED7AA" />
                    <path d="M96 52 C96 44 114 44 114 52 C114 47 108 45 104 46 C100 47 97 49 96 52 Z" fill="#211810" />
                    <path d="M92 68 L86 56 L89 54 L96 66 Z" fill="#FFF9EE" />
                    <rect x="84" y="50" width="5" height="10" rx="2" fill="#D4AF37" />
                    <path d="M122 45 C125 48 125 54 122 57" stroke="#F5BE43" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M126 40 C131 46 131 56 126 62" stroke="#D4AF37" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
                  </svg>
                </div>

                <div className="support-banner-content">
                  <div className="support-badge">
                    <span className="live-support-dot" />
                    <span>Direct Technical Support</span>
                  </div>

                  <h3 className="support-title">Need an Instant Walkthrough?</h3>
                  <p className="support-desc">
                    Call or chat directly with our plot CRM engineers for immediate setup guidance.
                  </p>

                  <div className="support-btn-row">
                    <a
                      href="https://wa.me/919486035353"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-whatsapp-pill"
                    >
                      <span>WhatsApp</span>
                      <span className="btn-chevron">›</span>
                    </a>

                    <a href="tel:+919486035353" className="btn-phone-pill">
                      <PhoneIcon size={14} />
                      <span>+91 94860 35353</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* 2. Email Inquiries Card Row */}
              <div className="support-email-card">
                <div className="email-left">
                  <div className="email-icon-box">
                    <MailIcon size={18} />
                  </div>
                  <div className="email-text">
                    <span className="email-label">EMAIL INQUIRIES</span>
                    <a href="mailto:sales@adhocsoftwares.com" className="email-value">
                      sales@adhocsoftwares.com
                    </a>
                  </div>
                </div>

                <a href="mailto:sales@adhocsoftwares.com" className="send-mail-link">
                  <span>Send Mail</span>
                  <span className="link-arrow">→</span>
                </a>
              </div>

              {/* 3. Coimbatore Headquarters & Map Card */}
              <div className="support-location-card">
                <div className="location-header-row">
                  <div className="location-pin-circle">
                    <MapPinIcon size={18} />
                  </div>
                  <div className="location-info">
                    <h4 className="location-name">Coimbatore Headquarters • Adhoc Softwares</h4>
                    <p className="location-address">
                      SF NO 163/2, Periyagounder Nagar, Saravanampatti, Coimbatore – 641035, India.
                    </p>
                    <div className="location-hours">
                      <ClockIcon size={13} />
                      <span>9:00 AM – 6:30 PM (Mon – Sat IST)</span>
                    </div>
                  </div>
                </div>

                {/* Embedded Map */}
                <div className="location-map-wrap">
                  <iframe
                    title="Adhoc Softwares Location Map"
                    src="https://maps.google.com/maps?q=Adhoc+Softwares,+SF+NO+163/2,+Periyagounder+Nagar,+Saravanampatti,+Coimbatore,+Tamil+Nadu+641035&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="150"
                    style={{ border: 0, borderRadius: '12px' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Adhoc+Softwares,+Saravanampatti,+Coimbatore"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="map-open-link"
                  >
                    <span>Maps</span>
                    <span>↗</span>
                  </a>
                </div>
              </div>

              {/* 4. Bottom 4 Feature Trust Badges */}
              <div className="support-features-grid">
                <div className="support-feat-pill">
                  <span className="feat-check-icon"><CheckCircleIcon size={15} /></span>
                  <span>&lt; 15m Fast Response</span>
                </div>
                <div className="support-feat-pill">
                  <span className="feat-check-icon"><ShieldCheckIcon size={15} /></span>
                  <span>Enterprise Security</span>
                </div>
                <div className="support-feat-pill">
                  <span className="feat-check-icon"><UsersIcon size={15} /></span>
                  <span>Free Onboarding</span>
                </div>
                <div className="support-feat-pill">
                  <span className="feat-check-icon"><SparklesIcon size={15} /></span>
                  <span>Custom Integrations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

