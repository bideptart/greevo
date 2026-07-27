import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import PricingHero from '../components/PricingHero.jsx'
import FaqAccordion from '../components/FaqAccordion.jsx'
import './Pricing.css'

function AnimatedPrice({ value }) {
  const [display, setDisplay] = useState(value)
  const fromRef = useRef(value)
  const intervalRef = useRef()

  useEffect(() => {
    const from = fromRef.current
    const to = value
    if (from === to) return undefined

    const duration = 300
    const stepMs = 16
    const steps = Math.max(Math.round(duration / stepMs), 1)
    let step = 0

    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      step += 1
      const t = Math.min(step / steps, 1)
      const eased = 1 - Math.pow(1 - t, 3)
      setDisplay(Math.round(from + (to - from) * eased))
      if (t >= 1) {
        clearInterval(intervalRef.current)
        fromRef.current = to
      }
    }, stepMs)

    return () => clearInterval(intervalRef.current)
  }, [value])

  return <span className="price-amount">${display}</span>
}

const PRICING_FAQ = [
  { q: 'Is there a free trial?', a: 'Yes, every plan starts with a 14-day free trial — no credit card required.' },
  { q: 'Can I change plans later?', a: 'Yes, upgrade or downgrade anytime; billing prorates automatically.' },
  { q: 'What happens if I go over my AI receptionist minutes?', a: 'Extra minutes bill at a transparent per-minute rate, no surprise fees.' },
  { q: 'Is pricing per user or per team?', a: 'Per user, per month — add or remove seats anytime from settings.' },
  { q: 'Do you offer discounts for annual billing?', a: 'Yes, yearly billing saves 20% compared to paying monthly.' },
  { q: 'What happens after my free trial ends?', a: 'You choose a plan to continue — nothing is charged automatically.' },
]

const PLANS = [
  {
    name: 'Starter',
    monthly: 15,
    yearly: 12,
    desc: 'Pilot a single number and a small team.',
    summary: 'Up to 5 users · 1 number · Email support',
    features: [
      'Up to 5 users',
      '1 local number included',
      'Inbound & outbound calling',
      'Per-second call billing',
      'Business SMS & MMS',
      'Standard voicemail + transcription',
      'Call recording',
      'Real-time transcription',
      'Email support',
    ],
  },
  {
    name: 'Growth',
    monthly: 35,
    yearly: 28,
    desc: 'Most teams start here.',
    summary: 'Up to 25 users · AI receptionist · Priority support',
    features: [
      'Up to 25 users',
      'Everything in Starter',
      'AI receptionist, 500 min/mo',
      'Standard + premium AI voices',
      'CRM integrations',
      'Live analytics & call scoring',
      'Call recording',
      'Real-time transcription',
      'Priority support',
    ],
    featured: true,
  },
  {
    name: 'Scale',
    monthly: 59,
    yearly: 47,
    desc: 'High-volume contact centers.',
    summary: 'Unlimited users · Unlimited AI minutes · Dedicated support',
    features: [
      'Unlimited users',
      'Everything in Growth',
      'Unlimited AI receptionist minutes',
      'Realtime + premium AI voices',
      'Predictive dialer + WFM',
      'Call recording',
      'Real-time transcription',
      'Custom retention & compliance',
      'Dedicated success manager + SLA',
    ],
  },
]

export default function Pricing() {
  const [yearly, setYearly] = useState(true)

  return (
    <>
      <PricingHero />

      <section className="section-tight">
        <div className="container">
          <div className="billing-toggle">
            <button type="button" className={!yearly ? 'active' : ''} onClick={() => setYearly(false)}>Monthly</button>
            <button type="button" className={yearly ? 'active' : ''} onClick={() => setYearly(true)}>Yearly <span className="save-badge">Save 20%</span></button>
          </div>

          <div className="pricing-grid">
            {PLANS.map((plan) => (
              <div key={plan.name} className={`card pricing-card ${plan.featured ? 'featured' : ''}`}>
                {plan.featured && <span className="popular-tag">Most popular</span>}
                <h3>{plan.name}</h3>
                <p className="pricing-desc">{plan.desc}</p>
                <div className="price">
                  <AnimatedPrice value={yearly ? plan.yearly : plan.monthly} />
                  <span className="price-period">/ user / mo</span>
                </div>
                <p className="pricing-summary">{plan.summary}</p>
                <ul className="check-list pricing-features">
                  {plan.features.map((f) => (
                    <li key={f}><span className="material-symbols-outlined">check_circle</span> {f}</li>
                  ))}
                </ul>
                <Link to="/contact" className="btn btn-card-cta" style={{ width: '100%' }}>
                  Get Started
                </Link>
              </div>
            ))}
          </div>

          <div className="card enterprise-band">
            <div>
              <h3>Enterprise</h3>
              <p>Custom SLAs, dedicated infrastructure, and a named success manager for teams above 100 seats.</p>
            </div>
            <Link to="/contact" className="btn btn-outline">Contact Sales</Link>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--surface-alt)' }}>
        <div className="container">
          <div className="stack-center">
            <span className="eyebrow">FAQ</span>
            <h2 className="section-title">Pricing questions</h2>
          </div>
          <FaqAccordion items={PRICING_FAQ} />
        </div>
      </section>
    </>
  )
}
