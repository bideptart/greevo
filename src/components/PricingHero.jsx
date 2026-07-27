import { Link } from 'react-router-dom'
import AccentTitle from './AccentTitle.jsx'
import PriceOdometer from './PriceOdometer.jsx'
import CostCompareBars from './CostCompareBars.jsx'
import './PricingHero.css'

const TRUST_CHIPS = ['No credit card required', 'Setup in minutes', 'Cancel anytime']

export default function PricingHero() {
  return (
    <section className="pricing-hero">
      <div className="pricing-hero-blob blob-a" aria-hidden="true" />
      <div className="pricing-hero-blob blob-b" aria-hidden="true" />
      <div className="pricing-hero-blob blob-c" aria-hidden="true" />

      <div className="container pricing-hero-inner">
        <div className="pricing-hero-text">
          <span className="hero-badge">
            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>auto_awesome</span>
            Pricing
          </span>
          <h1><AccentTitle title="Simple pricing that scales with your team" /></h1>
          <p className="pricing-hero-subtitle">No hardware fees, no setup costs. Cancel anytime.</p>

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
            <PriceOdometer />
            <CostCompareBars />
          </div>
        </div>
      </div>
    </section>
  )
}
