import React from 'react'
import { CloseIcon, ShieldCheckIcon } from './Icons'

export default function LegalModal({ isOpen, type, onClose }) {
  if (!isOpen) return null

  const contentMap = {
    privacy: {
      title: 'Privacy Policy',
      tag: 'Data Confidentiality',
      body: (
        <>
          <p>
            At THANGANIDHI, we prioritize the confidentiality and security of jewellery showroom owners
            and their scheme members. We strictly comply with Indian digital data protection standards (DPDP Act).
          </p>
          <h5>1. Customer Data Ownership</h5>
          <p>
            All customer passbook records, mobile numbers, Aadhaar/PAN KYC verifications, and instalment amounts
            remain the 100% exclusive property of your jewellery store. We never monetize, share, or market to your customers.
          </p>
          <h5>2. Encryption Standards</h5>
          <p>
            Every transaction is transmitted using TLS 1.3 encryption and stored in ISO 27001 certified data vaults
            with automated offsite encrypted backups every 60 minutes.
          </p>
          <h5>3. Role-Based Counter Privacy</h5>
          <p>
            Cashiers only view essential verification details. Sensitive showroom-level financial analytics and total gold
            liability are restricted strictly to authorized store owners.
          </p>
        </>
      )
    },
    terms: {
      title: 'Terms & Conditions',
      tag: 'Service Agreement',
      body: (
        <>
          <p>
            These terms govern your use of the THANGANIDHI showroom management platform, mobile passbook applications,
            and related digital services.
          </p>
          <h5>1. Showroom Software License</h5>
          <p>
            THANGANIDHI provides an enterprise cloud subscription for managing jewellery saving schemes, daily board rate
            synchronization, and customer passbook apps.
          </p>
          <h5>2. Metal Rate Disclaimers</h5>
          <p>
            Board rates displayed on digital tickers and customer apps are broadcasted directly by the showroom administrator.
            Showrooms retain full authority over their respective making charges, wastage deductions, and bonus structures.
          </p>
          <h5>3. 99.99% Service Level Guarantee</h5>
          <p>
            Our infrastructure guarantees continuous counter availability, uninterrupted UPI reconciliation, and instant passbook QR verification.
          </p>
        </>
      )
    },
    security: {
      title: 'Data Security & Compliance',
      tag: 'Enterprise Grade',
      body: (
        <>
          <p>
            Jewellery operations require bank-grade resilience. THANGANIDHI implements multiple defense-in-depth layers.
          </p>
          <h5>1. Cryptographic QR Passbook Stamping</h5>
          <p>
            Customer QR passbooks utilize time-variant cryptographic tokens, preventing tampering, counterfeit passbooks, or duplicated deliveries.
          </p>
          <h5>2. Immutable Cashier Audit Logs</h5>
          <p>
            Every counter action, payment entry, rate change, and passbook redemption generates an unalterable audit log with cashier ID and timestamp.
          </p>
          <h5>3. Disaster Recovery &amp; Redundancy</h5>
          <p>
            Multi-region failover ensures that even in the event of local broadband disruption, offline counter queuing allows uninterrupted store transactions.
          </p>
        </>
      )
    }
  }

  const current = contentMap[type] || contentMap.privacy

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-container legal-modal-box" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <CloseIcon size={20} />
        </button>

        <div className="modal-badge">
          <ShieldCheckIcon size={14} />
          <span>{current.tag}</span>
        </div>

        <h3 className="modal-title">{current.title}</h3>
        <div className="legal-modal-body">
          {current.body}
        </div>

        <div className="legal-modal-footer">
          <button type="button" className="btn-primary-gold" onClick={onClose}>
            <span>I UNDERSTAND</span>
          </button>
        </div>
      </div>
    </div>
  )
}

