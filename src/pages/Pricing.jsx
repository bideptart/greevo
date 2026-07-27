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
  { q: 'Is there a free trial?', a: 'Yes, every plan starts with a 14-day free trial that unlocks every feature from day one — no credit card required, and no feature gating during the trial.' },
  { q: 'Can I change plans later?', a: "Yes, you can upgrade or downgrade anytime from your account settings. Billing prorates automatically, so you're only ever charged for what you actually used." },
  { q: 'What happens if I go over my AI receptionist minutes?', a: 'Extra minutes bill at a transparent per-minute rate shown directly in your dashboard — there are no surprise fees or automatic plan upgrades.' },
  { q: 'Is pricing per user or per team?', a: 'Pricing is per user, per month, so you only pay for the seats your team actually needs. Add or remove users anytime and billing adjusts automatically.' },
  { q: 'Do you offer discounts for annual billing?', a: 'Yes, switching to yearly billing saves 20% compared to paying month-to-month, and the discount applies the moment you toggle to yearly above.' },
  { q: 'What happens after my free trial ends?', a: "You choose a plan to continue on — nothing is ever charged automatically. If you don't pick one, your account simply pauses until you're ready." },
]

const COMPARISON_ROWS = [
  { label: 'Users', values: ['Up to 5', 'Up to 25', 'Unlimited'] },
  { label: 'AI receptionist minutes', values: ['—', '500 min/mo', 'Unlimited'] },
  { label: 'Voice stack', values: ['Standard voice stack', 'Standard + premium voices', 'Realtime + premium voices'] },
  { label: 'CRM integrations', values: [false, true, true] },
  { label: 'Support', values: ['Email support', 'Priority support', 'Dedicated success manager'] },
  { label: 'SLA', values: [false, false, true] },
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
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="stack-center">
            <span className="eyebrow">Comparison</span>
            <h2 className="section-title">Compare plans side by side.</h2>
            <p className="section-subtitle">See exactly what you get at every tier — users, minutes, and support level, all in one view.</p>
          </div>

          <div className="comparison-table-wrap">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th></th>
                  {PLANS.map((plan) => (
                    <th key={plan.name} className={plan.featured ? 'featured-col' : ''}>
                      {plan.featured && <span className="popular-tag">Most popular</span>}
                      {plan.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARISON_ROWS.map((row) => (
                  <tr key={row.label}>
                    <td className="comparison-row-label">{row.label}</td>
                    {row.values.map((value, i) => (
                      <td key={PLANS[i].name} className={PLANS[i].featured ? 'featured-col' : ''}>
                        {typeof value === 'boolean' ? (
                          value ? (
                            <span className="material-symbols-outlined comparison-check">check_circle</span>
                          ) : (
                            <span className="comparison-dash">—</span>
                          )
                        ) : (
                          value
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
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
