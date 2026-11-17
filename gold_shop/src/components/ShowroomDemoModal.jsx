import React, { useState } from 'react'
import { CloseIcon, CheckCircleIcon, SparklesIcon } from './Icons'

export default function ShowroomDemoModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    jewellerName: '',
    storeName: '',
    phone: '',
    city: 'Chennai',
    storesCount: '1-3 Stores',
    schemeType: '11-Month Gold Scheme'
  })

  if (!isOpen) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleReset = () => {
    setSubmitted(false)
    onClose()
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <CloseIcon size={20} />
        </button>

        {!submitted ? (
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-badge">
                <SparklesIcon size={14} />
                <span>EXPERIENCE THANGANIDHI</span>
              </div>
              <h3 className="modal-title">Book a 1-on-1 Showroom Demo</h3>
              <p className="modal-subtitle">
                See how top jewellers automate ₹10Cr+ chit schemes with zero register discrepancies.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="demo-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Varma"
                    value={formData.jewellerName}
                    onChange={(e) => setFormData({ ...formData, jewellerName: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Jewellery Store Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sri Varma Jewellers"
                    value={formData.storeName}
                    onChange={(e) => setFormData({ ...formData, storeName: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Mobile Number (for WhatsApp Demo Link) *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>City / Location *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Coimbatore, Thrissur, Mumbai"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Number of Showrooms</label>
                  <select
                    value={formData.storesCount}
                    onChange={(e) => setFormData({ ...formData, storesCount: e.target.value })}
                  >
                    <option>1 Store (Single showroom)</option>
                    <option>2 - 5 Showrooms</option>
                    <option>6 - 20 Chain Branches</option>
                    <option>20+ Enterprise Stores</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Primary Scheme Type</label>
                  <select
                    value={formData.schemeType}
                    onChange={(e) => setFormData({ ...formData, schemeType: e.target.value })}
                  >
                    <option>11-Month Gold Weight Scheme</option>
                    <option>Digital Gold SIP & Accumulation</option>
                    <option>Fixed Amount Cash Chit</option>
                    <option>Complete Multi-Branch ERP & POS</option>
                  </select>
                </div>
              </div>

              <div className="demo-perks">
                <span>✓ Live Passbook App Demo</span>
                <span>✓ QR Counter Scanner Test</span>
                <span>✓ Multi-Branch Hedging Calc</span>
              </div>

              <button type="submit" className="btn-modal-submit">
                <span>CONFIRM MY DEMO SESSION</span>
                <SparklesIcon size={16} />
              </button>
            </form>
          </div>
        ) : (
          <div className="modal-success">
            <div className="success-icon-wrap">
              <CheckCircleIcon size={52} />
            </div>
            <h3 className="success-title">Showroom Demo Scheduled!</h3>
            <p className="success-desc">
              Thank you, <strong>{formData.jewellerName || 'Jeweller'}</strong>. Our senior jewellery systems engineer will contact you on <strong>{formData.phone || 'your phone'}</strong> with a personalized live demo of <strong>{formData.storeName || 'your showroom'}</strong>.
            </p>
            <div className="success-meta">
              <div><strong>Passbook QR Demo:</strong> Enabled</div>
              <div><strong>Store Type:</strong> {formData.storesCount}</div>
            </div>
            <button type="button" className="btn-primary-gold" onClick={handleReset}>
              <span>DONE</span>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

