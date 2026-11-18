import React, { useState, useEffect, useRef, useCallback } from 'react'
import { SparklesIcon } from './Icons'

// Custom tailored vector illustrations with DISTINCT LIVING ANIMATIONS for each mobile card
function renderHeroIllustration(type) {
  switch (type) {
    case 'solutions':
      return (
        <svg viewBox="0 0 120 120" fill="none" className="phone-hero-svg" aria-hidden="true">
          {/* Sound waves pulsing */}
          <g className="phone-anim-wave">
            <path d="M26 48C23 54 23 62 26 68" stroke="#F59E0B" strokeDasharray="1 1" strokeLinecap="round" strokeWidth="3" />
            <path d="M19 44C15 53 15 67 19 74" stroke="#F97316" strokeLinecap="round" strokeWidth="2.5" />
            <path d="M94 48C97 54 97 62 94 68" stroke="#F59E0B" strokeDasharray="1 1" strokeLinecap="round" strokeWidth="3" />
            <path d="M101 44C105 53 105 67 101 74" stroke="#F97316" strokeLinecap="round" strokeWidth="2.5" />
          </g>
          {/* Floating Gold Coin with bobbing animation */}
          <g className="phone-anim-coin">
            <circle cx="88" cy="28" r="7.5" fill="#F5BE43" stroke="#D97706" strokeWidth="1.5" />
            <text x="88" y="32" textAnchor="middle" fill="#78350F" fontSize="8.5" fontWeight="bold">₹</text>
          </g>
          {/* Bell Body with gentle acoustic swinging motion */}
          <g className="phone-anim-bell">
            <circle cx="60" cy="18" r="4.5" fill="#EA580C" />
            <path
              d="M60 22C46.7 22 41 33.5 41 51C41 62 36 67.5 32 71.5C38 74 50 75 60 75C70 75 82 74 88 71.5C84 67.5 79 62 79 51C79 33.5 73.3 22 60 22Z"
              fill="#F97316"
            />
            <path d="M50 30C46 36 45 47 45 56" stroke="#FDBA74" strokeLinecap="round" strokeWidth="3" />
            <ellipse cx="60" cy="76" rx="8" ry="4.5" fill="#C2410C" />
            <circle cx="60" cy="79" r="4.5" fill="#7C2D12" />
          </g>
        </svg>
      )

    case 'rewards':
      return (
        <svg viewBox="0 0 120 120" fill="none" className="phone-hero-svg" aria-hidden="true">
          <ellipse cx="60" cy="98" rx="26" ry="5" fill="#FBCFE8" opacity="0.6" />
          {/* Animated Twinkling Sparkles */}
          <g className="phone-anim-sparkle">
            <path d="M26 44 L28 38 L34 36 L28 34 L26 28 L24 34 L18 36 L24 38 Z" fill="#F5BE43" />
            <path d="M96 34 L97 29 L102 28 L97 27 L96 22 L95 27 L90 28 L95 29 Z" fill="#E11D48" />
          </g>
          {/* Floating Gift Box with gentle bounce animation */}
          <g className="phone-anim-gift">
            <rect x="36" y="52" width="48" height="40" rx="7" fill="#E11D48" />
            <rect x="32" y="45" width="56" height="11" rx="3.5" fill="#FDA4AF" />
            {/* Gold Ribbon */}
            <rect x="56" y="45" width="8" height="47" fill="#F5BE43" />
            <rect x="36" y="68" width="48" height="7.5" fill="#F5BE43" opacity="0.9" />
            {/* Bow */}
            <path d="M51 45 C44 37 39 40 46 44 C51 47 55 45 59 45 Z" fill="#F5BE43" />
            <path d="M69 45 C76 37 81 40 74 44 C69 47 65 45 61 45 Z" fill="#F5BE43" />
            <circle cx="60" cy="45" r="4" fill="#FFE072" />
          </g>
          {/* Floating Star Medal */}
          <g className="phone-anim-coin">
            <circle cx="94" cy="68" r="10" fill="#F5BE43" stroke="#B38012" strokeWidth="1" />
            <text x="94" y="72" textAnchor="middle" fill="#78350F" fontSize="9" fontWeight="bold">★</text>
          </g>
        </svg>
      )

    case 'app':
      return (
        <svg viewBox="0 0 120 120" fill="none" className="phone-hero-svg" aria-hidden="true">
          <ellipse cx="60" cy="100" rx="22" ry="5" fill="#BAE6FD" opacity="0.6" />
          {/* Smartphone with subtle live device tilting */}
          <g className="phone-anim-device">
            <rect x="38" y="22" width="44" height="78" rx="10" fill="#0369A1" stroke="#BAE6FD" strokeWidth="1.5" />
            <rect x="42" y="28" width="36" height="64" rx="6" fill="#F0F9FF" />
            <rect x="53" y="25" width="14" height="2" rx="1" fill="#0284C7" />
            {/* Live Chart Line */}
            <path d="M46 52 Q53 44 60 48 T74 40" stroke="#0284C7" strokeWidth="2.2" strokeLinecap="round" fill="none" />
            <rect x="46" y="60" width="28" height="12" rx="3" fill="#E0F2FE" />
          </g>
          {/* Wireless Sync Waves Radiating */}
          <g className="phone-anim-sync">
            <path d="M88 64 C92 68 92 74 88 78" stroke="#0284C7" strokeWidth="2" strokeLinecap="round" />
            <path d="M94 60 C100 66 100 78 94 84" stroke="#0284C7" strokeWidth="1.8" strokeLinecap="round" opacity="0.6" />
          </g>
          {/* Verified Check Badge */}
          <g className="phone-anim-badge">
            <circle cx="86" cy="38" r="11" fill="#0284C7" />
            <path d="M82 38 L85 41 L91 35" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      )

    case 'reminders':
      return (
        <svg viewBox="0 0 120 120" fill="none" className="phone-hero-svg" aria-hidden="true">
          <ellipse cx="60" cy="98" rx="24" ry="5" fill="#BBF7D0" opacity="0.6" />
          {/* Gentle Vibrating Alert Bell */}
          <g className="phone-anim-vibrate">
            <circle cx="60" cy="26" r="4" fill="#16A34A" />
            <path
              d="M60 30C48 30 43 40 43 56C43 66 38 71 34 75C40 77 50 78 60 78C70 78 80 77 86 75C82 71 77 66 77 56C77 40 72 30 60 30Z"
              fill="#16A34A"
            />
            <path d="M49 48C46 57 46 66 44 74" stroke="#86EFAC" strokeLinecap="round" strokeWidth="2.5" />
            <circle cx="60" cy="92" r="7" fill="#14532D" />
          </g>
          {/* Floating WhatsApp Chat Notification Bubble */}
          <g className="phone-anim-bubble">
            <rect x="74" y="22" width="30" height="22" rx="6" fill="#25D366" />
            <polygon points="80,44 86,44 77,48" fill="#25D366" />
            <path d="M82 33 L85 36 L91 29" stroke="#FFF" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      )

    case 'audit':
      return (
        <svg viewBox="0 0 120 120" fill="none" className="phone-hero-svg" aria-hidden="true">
          <ellipse cx="60" cy="98" rx="24" ry="5" fill="#FDE68A" opacity="0.6" />
          {/* Cryptographic Shield with Radiant Gleam */}
          <g className="phone-anim-shield">
            <path
              d="M60 20 L86 30 C86 56 76 80 60 92 C44 80 34 56 34 30 Z"
              fill="#D97706"
              stroke="#F5BE43"
              strokeWidth="3"
              strokeLinejoin="round"
            />
            <path d="M60 26 L81 35 C81 56 72 75 60 85 C48 75 39 56 39 35 Z" fill="#78350F" opacity="0.25" />
            <path d="M49 54 L57 62 L71 46" stroke="#FFF9EE" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
          </g>
          {/* Animated Security Padlock */}
          <g className="phone-anim-lock">
            <circle cx="92" cy="38" r="11" fill="#F5BE43" stroke="#B38012" strokeWidth="1" />
            <rect x="87" y="37" width="10" height="7.5" rx="1.5" fill="#78350F" />
            <path d="M89.5 37 V34 C89.5 32.5 94.5 32.5 94.5 34 V37" stroke="#78350F" strokeWidth="1.5" fill="none" />
          </g>
        </svg>
      )

    default:
      return null
  }
}

export default function WhyChooseUs({ onBookDemo }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  // 5 Strategic USPs as realistic interactive mobile phone web application screens with DISTINCT THEMES
  const phones = [
    {
      id: 1,
      title: 'One Platform.',
      subtitle: 'Four Solutions.',
      desc: 'Manage Gold Chit, Silver Chit, Digital Gold, & Silver in one secure ecosystem.',
      buttonText: 'Explore Solutions',
      heroType: 'solutions',
      heroThemeClass: 'hero-theme-solutions',
      nodeThemeClass: 'node-theme-orange',
      glowLeft: 'phone-glow-orange',
      glowRight: 'phone-glow-amber',
      marketTag: 'Markets Live',
      currency: 'INR',
      balanceLabel: 'Total Bullion Balance',
      balanceAmount: '₹2,84,650',
      balanceDecimal: '.40',
      changeBadge: '+2.4%',
      tickerItems: [
        { label: 'Gold 24K', price: '₹7,240/g', change: '(+0.8%)', color: 'text-amber-300', dot: 'bg-amber-400' },
        { label: 'Silver', price: '₹89.20/g', change: '(+1.2%)', color: 'text-slate-200', dot: 'bg-slate-300' },
        { label: 'Gold Chit Pool', price: '₹7,195/g', change: '(+0.5%)', color: 'text-amber-200', dot: 'bg-amber-300' }
      ],
      sectionTitle: 'Four Solutions',
      items: [
        {
          title: 'Gold Chit',
          desc: 'Guaranteed 24K gold returns',
          term: '12 mos',
          status: 'Active',
          statusClass: 'status-emerald',
          completed: true,
          iconBgClass: 'bg-amber-50 border-amber-200 text-amber-700',
          icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <rect x="3" y="6" width="18" height="12" rx="3" />
              <line x1="7" y1="10" x2="7" y2="14" />
              <line x1="12" y1="10" x2="12" y2="14" />
              <line x1="17" y1="10" x2="17" y2="14" />
            </svg>
          )
        },
        {
          title: 'Silver Chit',
          desc: 'Monthly systematic bullion pool',
          term: '6 mos',
          status: 'Flexible',
          statusClass: 'status-slate',
          completed: true,
          iconBgClass: 'bg-slate-100 border-slate-200 text-slate-700',
          icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <ellipse cx="12" cy="7" rx="8" ry="3" />
              <path d="M4 7v6c0 1.66 3.58 3 8 3s8-1.34 8-3V7" />
              <path d="M4 13v4c0 1.66 3.58 3 8 3s8-1.34 8-3v-4" />
            </svg>
          )
        },
        {
          title: 'Digital Gold',
          desc: 'Buy & vault 99.9% pure gold',
          term: 'Instant',
          status: 'From ₹1',
          statusClass: 'status-amber',
          completed: false,
          iconBgClass: 'bg-fuchsia-50 border-fuchsia-200 text-fuchsia-700',
          icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <polygon points="12 2 2 7 12 12 22 7 12 2" />
              <polyline points="2 17 12 22 22 17" />
              <polyline points="2 12 12 17 22 12" />
            </svg>
          )
        },
        {
          title: 'Digital Silver',
          desc: 'Live rates with zero locker fee',
          term: 'Instant',
          status: 'Insured',
          statusClass: 'status-blue',
          completed: false,
          iconBgClass: 'bg-orange-50 border-orange-200 text-orange-600',
          icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
          )
        }
      ]
    },
    {
      id: 2,
      title: 'Rewards That',
      subtitle: 'Drive Loyalty.',
      desc: 'Offer milestone gifts & bonuses to ensure 100% on-time instalment completion.',
      buttonText: 'Explore Rewards',
      heroType: 'rewards',
      heroThemeClass: 'hero-theme-rewards',
      nodeThemeClass: 'node-theme-rose',
      glowLeft: 'phone-glow-ruby',
      glowRight: 'phone-glow-amber',
      marketTag: 'Rewards Club',
      currency: 'GOLD TIER',
      balanceLabel: 'Accumulated Reward Points',
      balanceAmount: '14,850',
      balanceDecimal: ' pts',
      changeBadge: '+1,200',
      tickerItems: [
        { label: '100g Silver Coin', price: '5,000 pts', change: '(Available)', color: 'text-rose-300', dot: 'bg-rose-400' },
        { label: 'Making Charge Waiver', price: '2,500 pts', change: '(100% OFF)', color: 'text-amber-200', dot: 'bg-amber-300' },
        { label: 'Gold Sovereign Bonus', price: '25,000 pts', change: '(Milestone)', color: 'text-rose-200', dot: 'bg-rose-300' }
      ],
      sectionTitle: 'Milestone Rewards',
      items: [
        {
          title: '5th Month Gift',
          desc: 'Silver coin token dispatched',
          term: '5th Mo',
          status: 'Claimed',
          statusClass: 'status-emerald',
          completed: true,
          iconBgClass: 'bg-rose-50 border-rose-200 text-rose-700',
          icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="9" />
              <path d="M12 8v8m-4-4h8" />
            </svg>
          )
        },
        {
          title: '10th Month Bonus',
          desc: '0.5g 24K Gold bonus credited',
          term: '10th Mo',
          status: 'Unlocked',
          statusClass: 'status-emerald',
          completed: true,
          iconBgClass: 'bg-amber-50 border-amber-200 text-amber-700',
          icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          )
        },
        {
          title: 'Maturity Sovereign',
          desc: 'Free gold jewellery making bonus',
          term: '12th Mo',
          status: 'Queued',
          statusClass: 'status-amber',
          completed: false,
          iconBgClass: 'bg-orange-50 border-orange-200 text-orange-600',
          icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <rect x="3" y="8" width="18" height="12" rx="2" />
              <path d="M12 8v12M3 13h18" />
            </svg>
          )
        },
        {
          title: 'Bridal VIP Pass',
          desc: 'Exclusive private showroom preview',
          term: 'Lifetime',
          status: 'Eligible',
          statusClass: 'status-blue',
          completed: false,
          iconBgClass: 'bg-purple-50 border-purple-200 text-purple-700',
          icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          )
        }
      ]
    },
    {
      id: 3,
      title: 'Your Brand.',
      subtitle: 'Your Customer App.',
      desc: 'Give customers live passbooks, rate updates, and digital bullion under your brand name.',
      buttonText: 'Explore App',
      heroType: 'app',
      heroThemeClass: 'hero-theme-app',
      nodeThemeClass: 'node-theme-blue',
      glowLeft: 'phone-glow-sapphire',
      glowRight: 'phone-glow-cyan',
      marketTag: 'White-Label App',
      currency: 'LIVE SYNC',
      balanceLabel: 'Customer Portfolio Sync',
      balanceAmount: '₹5,12,400',
      balanceDecimal: '.00',
      changeBadge: '4 Active',
      tickerItems: [
        { label: 'Instant UPI Auto-Debit', price: 'Active', change: '(Zero Error)', color: 'text-sky-300', dot: 'bg-sky-400' },
        { label: 'Live Passbook Sync', price: 'Realtime', change: '(Counter-Ready)', color: 'text-slate-200', dot: 'bg-slate-300' },
        { label: 'Tamil & Hindi Support', price: 'Built-in', change: '(Native)', color: 'text-sky-200', dot: 'bg-sky-300' }
      ],
      sectionTitle: 'Branded Features',
      items: [
        {
          title: 'Digital Passbook',
          desc: 'Real-time payment & dues sync',
          term: '24/7',
          status: 'Live',
          statusClass: 'status-emerald',
          completed: true,
          iconBgClass: 'bg-blue-50 border-blue-200 text-blue-700',
          icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
          )
        },
        {
          title: '1-Click UPI Payment',
          desc: 'Direct showroom bank settlement',
          term: 'Instant',
          status: 'Zero Fee',
          statusClass: 'status-emerald',
          completed: true,
          iconBgClass: 'bg-emerald-50 border-emerald-200 text-emerald-700',
          icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <rect x="2" y="5" width="20" height="14" rx="2" />
              <line x1="2" y1="10" x2="22" y2="10" />
            </svg>
          )
        },
        {
          title: 'Regional Languages',
          desc: 'Tamil, Telugu, Hindi, Kannada, English',
          term: '5 Langs',
          status: 'Enabled',
          statusClass: 'status-amber',
          completed: false,
          iconBgClass: 'bg-sky-50 border-sky-200 text-sky-700',
          icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          )
        },
        {
          title: 'Custom App Logo',
          desc: 'Your jeweller logo on Play Store & iOS',
          term: 'Branded',
          status: 'Custom',
          statusClass: 'status-blue',
          completed: false,
          iconBgClass: 'bg-indigo-50 border-indigo-200 text-indigo-700',
          icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
          )
        }
      ]
    },
    {
      id: 4,
      title: 'Never Miss',
      subtitle: 'A Follow-Up.',
      desc: 'Automatically track upcoming and overdue instalments with timely WhatsApp & SMS alerts.',
      buttonText: 'Explore Automation',
      heroType: 'reminders',
      heroThemeClass: 'hero-theme-reminders',
      nodeThemeClass: 'node-theme-green',
      glowLeft: 'phone-glow-emerald',
      glowRight: 'phone-glow-mint',
      marketTag: 'Dispatch Engine',
      currency: 'WHATSAPP LIVE',
      balanceLabel: 'Collection Success Rate',
      balanceAmount: '99.4%',
      balanceDecimal: ' On-Time',
      changeBadge: '1,420 Sent',
      tickerItems: [
        { label: 'WhatsApp Delivery', price: '99.8%', change: '(Realtime)', color: 'text-emerald-300', dot: 'bg-emerald-400' },
        { label: 'Instant PDF Receipt', price: '0.2s', change: '(Auto-Generated)', color: 'text-slate-200', dot: 'bg-slate-300' },
        { label: 'SMS Failover', price: '100% Up', change: '(Zero Drops)', color: 'text-emerald-200', dot: 'bg-emerald-300' }
      ],
      sectionTitle: 'Automated Triggers',
      items: [
        {
          title: 'T-3 Days Reminder',
          desc: 'WhatsApp reminder with 1-click pay link',
          term: 'T-3 Days',
          status: 'Sent',
          statusClass: 'status-emerald',
          completed: true,
          iconBgClass: 'bg-emerald-50 border-emerald-200 text-emerald-700',
          icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          )
        },
        {
          title: 'Due Date Notification',
          desc: 'Interactive payment prompt & summary',
          term: 'Due Date',
          status: 'Delivered',
          statusClass: 'status-emerald',
          completed: true,
          iconBgClass: 'bg-green-50 border-green-200 text-green-700',
          icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          )
        },
        {
          title: 'Gentle Overdue Nudge',
          desc: 'Polite reminder with grace period note',
          term: 'T+3 Days',
          status: 'Scheduled',
          statusClass: 'status-amber',
          completed: false,
          iconBgClass: 'bg-amber-50 border-amber-200 text-amber-700',
          icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          )
        },
        {
          title: 'Instant PDF Receipt',
          desc: 'Cryptographic WhatsApp invoice',
          term: 'Post-Pay',
          status: 'Instant',
          statusClass: 'status-blue',
          completed: false,
          iconBgClass: 'bg-teal-50 border-teal-200 text-teal-700',
          icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
            </svg>
          )
        }
      ]
    },
    {
      id: 5,
      title: 'Every Transaction.',
      subtitle: 'Fully Traceable.',
      desc: 'Bank auto-reconciliation, cryptographic receipts, and branch-wise audit trails.',
      buttonText: 'Explore Security',
      heroType: 'audit',
      heroThemeClass: 'hero-theme-audit',
      nodeThemeClass: 'node-theme-amber',
      glowLeft: 'phone-glow-gold',
      glowRight: 'phone-glow-bronze',
      marketTag: 'Audit Vault',
      currency: 'TAMPER-PROOF',
      balanceLabel: 'Verified Counter Settlements',
      balanceAmount: '100%',
      balanceDecimal: ' Reconciled',
      changeBadge: '₹4.8 Cr Synced',
      tickerItems: [
        { label: 'Bank Auto-Reconciliation', price: 'Zero Discrepancy', change: '(Live)', color: 'text-amber-300', dot: 'bg-amber-400' },
        { label: 'Cryptographic Hash', price: 'SHA-256', change: '(Immutable)', color: 'text-slate-200', dot: 'bg-slate-300' },
        { label: 'Multi-Branch Controls', price: 'Role-Based', change: '(Locked)', color: 'text-amber-200', dot: 'bg-amber-300' }
      ],
      sectionTitle: 'Security Guarantees',
      items: [
        {
          title: 'Counter Ledger Sync',
          desc: 'Real-time bank auto-reconciliation',
          term: 'Realtime',
          status: 'Reconciled',
          statusClass: 'status-emerald',
          completed: true,
          iconBgClass: 'bg-amber-50 border-amber-200 text-amber-700',
          icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          )
        },
        {
          title: 'Tamper-Proof Receipt',
          desc: 'Cryptographic hash on every voucher',
          term: 'SHA-256',
          status: 'Verified',
          statusClass: 'status-emerald',
          completed: true,
          iconBgClass: 'bg-slate-100 border-slate-200 text-slate-700',
          icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          )
        },
        {
          title: 'Role-Based Access',
          desc: 'Counter cashier vs Manager approval walls',
          term: '5 Tiers',
          status: 'Strict',
          statusClass: 'status-amber',
          completed: false,
          iconBgClass: 'bg-yellow-50 border-yellow-200 text-yellow-700',
          icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
          )
        },
        {
          title: 'Auditor One-Click Export',
          desc: 'CA compliance, GST & Tally instant export',
          term: 'Excel/Tally',
          status: 'Instant',
          statusClass: 'status-blue',
          completed: false,
          iconBgClass: 'bg-orange-50 border-orange-200 text-orange-700',
          icon: (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          )
        }
      ]
    }
  ]

  const total = phones.length

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + total) % total)
  }, [total])

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total)
  }, [total])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      const section = document.getElementById('benefits')
      if (!section) return
      const rect = section.getBoundingClientRect()
      const inView = rect.top < window.innerHeight && rect.bottom > 0
      if (!inView) return

      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        handlePrev()
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        handleNext()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handlePrev, handleNext])

  // Touch swipe handling for mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current
    if (diff > 45) {
      handleNext()
    } else if (diff < -45) {
      handlePrev()
    }
  }

  // Calculate relative slot class based on circular offset
  const getCardSlotClass = (idx) => {
    let offset = (idx - activeIndex) % total
    if (offset > 2) offset -= total
    if (offset < -2) offset += total

    if (offset === 0) return 'coverflow-slot is-active'
    if (offset === -1) return 'coverflow-slot is-prev'
    if (offset === 1) return 'coverflow-slot is-next'
    if (offset < -1) return 'coverflow-slot is-hidden-left'
    return 'coverflow-slot is-hidden-right'
  }

  return (
    <section id="benefits" className="section-padding why-choose-section">
      <div className="section-container">
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="section-badge">
            <SparklesIcon size={14} />
            <span>TOP 5 STRATEGIC ADVANTAGES</span>
          </div>
          <h2 className="section-title">
            Why Leading Jewellers Choose Thanganidhi
          </h2>
          <p className="section-subtitle">
            Engineered specifically to solve the high-stakes operational realities of Indian gold,
            silver, and bridal jewellery showrooms.
          </p>
        </div>

        {/* 3D Coverflow Mobile Phone Carousel Container */}
        <div
          className="coverflow-carousel-section"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="coverflow-stage">
            {phones.map((phone, idx) => {
              let offset = (idx - activeIndex) % total
              if (offset > 2) offset -= total
              if (offset < -2) offset += total
              const isActive = offset === 0

              return (
                <div
                  key={phone.id}
                  className={getCardSlotClass(idx)}
                  onClick={() => {
                    if (!isActive) {
                      setActiveIndex(idx)
                    }
                  }}
                  role="button"
                  tabIndex={isActive ? 0 : -1}
                  aria-label={`${phone.title} ${phone.subtitle} - Mobile Phone Screen ${idx + 1} of ${total}`}
                  aria-hidden={!isActive && Math.abs(offset) > 1}
                >
                  {/* REALISTIC MOBILE PHONE WEB APPLICATION CONTAINER */}
                  <div className="phone-frame">
                    {/* Phone Top Notch / Speaker Bar */}
                    <div className="phone-notch" aria-hidden="true" />

                    {/* iOS / Mobile Status Bar (9:41, Cellular, Wifi, Battery) */}
                    <div className="phone-status-bar" data-purpose="status-bar">
                      <span>9:41</span>
                      <div className="phone-status-icons">
                        {/* Cellular */}
                        <svg className="phone-icon-cellular" viewBox="0 0 17 12" fill="currentColor">
                          <rect height="4" rx="0.5" width="2.5" x="0" y="8" />
                          <rect height="6.5" rx="0.5" width="2.5" x="4" y="5.5" />
                          <rect height="9" rx="0.5" width="2.5" x="8" y="3" />
                          <rect height="11.5" rx="0.5" width="2.5" x="12" y="0.5" />
                        </svg>
                        {/* Wifi */}
                        <svg className="phone-icon-wifi" viewBox="0 0 16 12" fill="currentColor">
                          <path d="M8 12a1.8 1.8 0 1 1 0-3.6A1.8 1.8 0 0 1 8 12zm4.95-6.05a7 7 0 0 0-9.9 0l1.1 1.1a5.45 5.45 0 0 1 7.7 0l1.1-1.1zm2.47-2.48a10.5 10.5 0 0 0-14.84 0l1.1 1.1a8.94 8.94 0 0 1 12.64 0l1.1-1.1z" />
                        </svg>
                        {/* Battery */}
                        <div className="phone-battery-pill">
                          <div className="phone-battery-fill" />
                        </div>
                      </div>
                    </div>

                    {/* Fixed Screen Body - NO SCROLL EFFECT */}
                    <div className="phone-screen-body no-scrollbar">
                      {/* 1. Sleek Animated Market & Portfolio Balance Header */}
                      <header className="phone-market-header">
                        <div className="phone-balance-card">
                          {/* Distinct Background Glow Accents per Card Theme */}
                          <div className={phone.glowLeft} aria-hidden="true" />
                          <div className={phone.glowRight} aria-hidden="true" />

                          {/* Top Row: Live Indicator & Currency Selector */}
                          <div className="phone-balance-top">
                            <div className="phone-live-indicator shimmer-badge">
                              <span className="pulse-indicator" />
                              <span>{phone.marketTag}</span>
                            </div>
                            <div className="phone-currency-pill">
                              <span>{phone.currency}</span>
                              <svg className="w-3 h-3 text-neutral-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </div>
                          </div>

                          {/* Balance & Value Details */}
                          <div className="phone-balance-content">
                            <div className="phone-balance-left">
                              <p className="phone-balance-label">{phone.balanceLabel}</p>
                              <h3 className="phone-balance-val">
                                {phone.balanceAmount}
                                <span className="phone-balance-decimal">{phone.balanceDecimal}</span>
                              </h3>
                            </div>
                            <div className="phone-change-badge">
                              <svg className="w-2.5 h-2.5 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
                                <path clipRule="evenodd" d="M12 7l4 4m0 0l-4 4m4-4H4" fillRule="evenodd" transform="rotate(-45 10 10)" />
                              </svg>
                              <span>{phone.changeBadge}</span>
                            </div>
                          </div>

                          {/* Animated Infinite Marquee Ticker */}
                          <div className="phone-marquee-wrap">
                            <div className="animate-marquee">
                              {phone.tickerItems.map((tick, tIdx) => (
                                <React.Fragment key={`t1-${tIdx}`}>
                                  <span className={`phone-ticker-item ${tick.color}`}>
                                    <span className={`phone-ticker-dot ${tick.dot}`} />
                                    <span>{tick.label}:</span>
                                    <strong className="text-white font-bold">{tick.price}</strong>
                                    <span className="text-emerald-400 font-medium text-[10px]">{tick.change}</span>
                                  </span>
                                  <span className="phone-ticker-bullet">•</span>
                                </React.Fragment>
                              ))}
                              {phone.tickerItems.map((tick, tIdx) => (
                                <React.Fragment key={`t2-${tIdx}`}>
                                  <span className={`phone-ticker-item ${tick.color}`}>
                                    <span className={`phone-ticker-dot ${tick.dot}`} />
                                    <span>{tick.label}:</span>
                                    <strong className="text-white font-bold">{tick.price}</strong>
                                    <span className="text-emerald-400 font-medium text-[10px]">{tick.change}</span>
                                  </span>
                                  <span className="phone-ticker-bullet">•</span>
                                </React.Fragment>
                              ))}
                            </div>
                          </div>
                        </div>
                      </header>

                      {/* 2. Hero Feature Banner Card with Distinct Color Themes & Animations */}
                      <section className="phone-hero-card-section">
                        <article className={`phone-hero-card ${phone.heroThemeClass}`}>
                          <div className="phone-hero-left">
                            <h3 className="phone-hero-title">
                              <span>{phone.title}</span>
                              <span className="phone-hero-title-line2">{phone.subtitle}</span>
                            </h3>
                            <p className="phone-hero-desc">{phone.desc}</p>
                            <button
                              type="button"
                              className="phone-hero-btn"
                              onClick={(e) => {
                                e.stopPropagation()
                                if (onBookDemo) onBookDemo()
                              }}
                            >
                              <span>{phone.buttonText}</span>
                              <svg className="w-3.5 h-3.5 opacity-80" fill="currentColor" viewBox="0 0 20 20">
                                <path clipRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" fillRule="evenodd" />
                              </svg>
                            </button>
                          </div>

                          <div className="phone-hero-right">
                            {renderHeroIllustration(phone.heroType)}
                          </div>
                        </article>
                      </section>

                      {/* 3. Connected Timeline & Four Solutions List */}
                      <section className="phone-solutions-section">
                        <div className="phone-solutions-header">
                          <h4>{phone.sectionTitle}</h4>
                          <span className="phone-see-all">See all</span>
                        </div>

                        <div className="phone-timeline-container">
                          {/* Continuous Vertical Dotted Line */}
                          <div className="phone-timeline-line" aria-hidden="true" />

                          <div className="phone-timeline-items">
                            {phone.items.map((item, sIdx) => (
                              <div key={sIdx} className="phone-timeline-row">
                                {/* Node Indicator (Theme colored checked node vs outline pending) */}
                                <div className={`phone-timeline-node ${item.completed ? `is-completed ${phone.nodeThemeClass}` : 'is-pending'}`}>
                                  {item.completed ? (
                                    <svg className="phone-node-check" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                  ) : (
                                    <span className="phone-node-empty" />
                                  )}
                                </div>

                                {/* Solution Card */}
                                <div className="phone-solution-card">
                                  <div className="phone-solution-left">
                                    <div className={`phone-solution-icon-box ${item.iconBgClass}`}>
                                      {item.icon}
                                    </div>
                                    <div className="phone-solution-info">
                                      <h5>{item.title}</h5>
                                      <p>{item.desc}</p>
                                    </div>
                                  </div>

                                  <div className="phone-solution-right">
                                    <div className="phone-term-badge">
                                      <svg className="phone-clock-icon" fill="currentColor" viewBox="0 0 24 24">
                                        <circle cx="12" cy="12" r="10" stroke="none" />
                                        <path d="M12 6v6l4 2" stroke="#FFF" strokeLinecap="round" strokeWidth="2" />
                                      </svg>
                                      <span>{item.term}</span>
                                    </div>
                                    <span className={`phone-status-tag ${item.statusClass}`}>{item.status}</span>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </section>
                    </div>

                    {/* iOS Home Indicator Bar */}
                    <div className="phone-home-indicator" aria-hidden="true" />
                  </div>
                </div>
              )
            })}
          </div>

          {/* Bottom Arrow Navigation: ←  01 / 05  → */}
          <div className="coverflow-nav-bar">
            <button
              type="button"
              className="coverflow-arrow-btn"
              onClick={handlePrev}
              aria-label="Previous card"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
            </button>

            <div className="coverflow-counter">
              <span className="counter-current">{`0${activeIndex + 1}`}</span>
              <span className="counter-sep">/</span>
              <span className="counter-total">{`0${total}`}</span>
            </div>

            <button
              type="button"
              className="coverflow-arrow-btn"
              onClick={handleNext}
              aria-label="Next card"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
