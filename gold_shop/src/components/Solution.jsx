import React from 'react'
import normalVideo from '../assets/normal.mp4'
import appMonetizationSvg from '../assets/feature_pics/App monetization-bro.svg'
import onlineTransactionsSvg from '../assets/feature_pics/Online transactions-bro.svg'
import growthAnalyticsSvg from '../assets/feature_pics/Growth analytics-bro.svg'
import buildingPermitSvg from '../assets/feature_pics/Building permit-bro.svg'
import { LayersIcon } from './Icons'

export default function Solution() {
  const cards = [
    {
      id: 1,
      image: appMonetizationSvg,
      title: 'Live Customer Passbook App',
      desc: 'Instant digital WhatsApp & mobile passbooks. Customers monitor their growing gold grams anytime with transparent live board rates and 1-tap automated UPI payments.'
    },
    {
      id: 2,
      image: onlineTransactionsSvg,
      title: 'Counter Passbook QR Scanner',
      desc: 'Instant cryptographic verification stops counterfeit chits, duplicate redemptions, unauthorized staff discounts, and counter cash leakage.'
    },
    {
      id: 3,
      image: growthAnalyticsSvg,
      title: 'Gold Liability & Hedging Audit',
      desc: 'Automated weight calculations and real-time market rate tracking protect showroom owners from bullion price spikes with smart hedging.'
    },
    {
      id: 4,
      image: buildingPermitSvg,
      title: 'Multi-Branch Showroom Sync',
      desc: 'Centralize daily board rates, cashier permissions, and customer scheme ledgers across single showrooms and 50+ retail chain locations.'
    }
  ]

  return (
    <section id="solution" className="section-padding solution-section">
      <div className="section-container">
        <div className="solution-grid">
          {/* LEFT: Solution Product Showcase Video */}
          <div className="solution-video-wrapper">
            <video
              src={normalVideo}
              autoPlay
              loop
              muted
              playsInline
              disablePictureInPicture
              disableRemotePlayback
              className="solution-video-player"
            />
          </div>

          {/* RIGHT: 4 Cards in Solution Content Column */}
          <div className="solution-content-column">
            <div className="solution-header-wrap">
              <div className="section-badge">
                <LayersIcon size={14} />
                <span>THE THANGANIDHI ADVANTAGE</span>
              </div>
              
              <h2 className="section-title text-left">
                One Smart Platform.<br />
                <span className="gold-text-gradient">Zero Manual Hassle.</span>
              </h2>
            </div>

            <div className="solution-cards-grid">
              {cards.map((c) => (
                <div key={c.id} className="solution-card-item">
                  <div className="sol-card-top">
                    <img
                      src={c.image}
                      alt={c.title}
                      className="sol-card-img"
                      loading="lazy"
                    />
                  </div>

                  <h3 className="sol-card-title">{c.title}</h3>
                  
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
