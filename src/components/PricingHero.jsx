import { Link } from 'react-router-dom'
import AccentTitle from './AccentTitle.jsx'
import LiveCallShowcase from './LiveCallShowcase.jsx'
import './PageHero.css'
import './PricingHero.css'

const TRUST_CHIPS = ['No credit card required', 'Setup in minutes', 'Cancel anytime']

export default function PricingHero() {
  return (
    <section className="pricing-hero">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-bg-aurora aurora-1" />
        <div className="hero-bg-aurora aurora-2" />
        <div className="hero-bg-aurora aurora-3" />
        <div className="hero-bg-beam beam-1" />
        <div className="hero-bg-beam beam-2" />
        <div className="hero-bg-grid" />
        <div className="hero-bg-sparks">
          {Array.from({ length: 14 }).map((_, i) => (
            <span className={`hero-bg-spark spark-${i}`} key={i} />
          ))}
        </div>
      </div>

      <div className="container pricing-hero-inner">
        <div className="pricing-hero-text">
          <span className="hero-badge">
            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>auto_awesome</span>
            Pricing
          </span>
          <h1><AccentTitle title="Simple pricing that scales with your team" /></h1>
          <p className="pricing-hero-subtitle">
            No hardware fees, no setup costs. Cancel anytime.
            No sales call required to see the real price — it's all right here.
            Upgrade or downgrade in a click as your team grows or shrinks.
            Every plan includes the same core features, just more room to scale.
          </p>

          <div className="pricing-hero-ctas">
            <Link to="/contact" className="btn btn-primary">Start Free Trial</Link>
            <Link to="/contact" className="btn btn-ghost">Talk to Sales</Link>
          </div>

          <div className="pricing-hero-chips">
            {TRUST_CHIPS.map((chip) => (
              <span key={chip} className="trust-chip">
                <span className="material-symbols-outlined" style={{ fontSize: 14 }}>check_circle</span>
                {chip}
              </span>
            ))}
          </div>
        </div>

        <div className="pricing-hero-visual">
          <div className="phone-glow" aria-hidden="true" />
          <div className="pricing-hero-visual-stack">
            <LiveCallShowcase />
          </div>
        </div>
      </div>
    </section>
  )
}
