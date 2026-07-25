import { useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import './Pricing.css'

const PLANS = [
  {
    name: 'Starter',
    monthly: 15,
    yearly: 12,
    desc: 'For small teams getting off consumer apps.',
    features: ['Up to 5 users', 'Cloud phone + business SMS', '1 local number included', 'Email support'],
  },
  {
    name: 'Growth',
    monthly: 35,
    yearly: 28,
    desc: 'For teams that live on calls and chat.',
    features: ['Up to 25 users', 'Everything in Starter', 'AI receptionist (500 min/mo)', 'CRM integrations', 'Live analytics'],
    featured: true,
  },
  {
    name: 'Scale',
    monthly: 59,
    yearly: 47,
    desc: 'For contact centers with volume.',
    features: ['Unlimited users', 'Everything in Growth', 'Predictive dialer + WFM', 'Unlimited AI receptionist minutes', 'Dedicated onboarding'],
  },
]

export default function Pricing() {
  const [yearly, setYearly] = useState(true)

  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Simple pricing that scales with your team"
        subtitle="No hardware fees, no setup costs. Cancel anytime."
        primaryCta="Start Free Trial"
        secondaryCta="Talk to Sales"
      />

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
                  <span className="price-amount">${yearly ? plan.yearly : plan.monthly}</span>
                  <span className="price-period">/ user / mo</span>
                </div>
                <Link to="/contact" className={`btn ${plan.featured ? 'btn-primary' : 'btn-dark'}`} style={{ width: '100%' }}>
                  Start Free Trial
                </Link>
                <ul className="check-list" style={{ marginTop: 24 }}>
                  {plan.features.map((f) => (
                    <li key={f}><span className="material-symbols-outlined">check_circle</span> {f}</li>
                  ))}
                </ul>
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
          <div style={{ maxWidth: 720, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { q: 'Is there a free trial?', a: 'Yes, every plan starts with a 14-day free trial — no credit card required.' },
              { q: 'Can I change plans later?', a: 'Yes, upgrade or downgrade anytime from your account settings; billing prorates automatically.' },
              { q: 'What happens if I go over my AI receptionist minutes?', a: 'Additional minutes are billed at a transparent per-minute rate shown in your dashboard, with no surprise overage penalties.' },
            ].map((f) => (
              <div key={f.q} className="card" style={{ padding: 24 }}>
                <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8 }}>{f.q}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: 14.5, lineHeight: 1.6 }}>{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
