import { Link } from 'react-router-dom'
import './DemoCta.css'

const POINTS = ['14-day free trial', 'No hardware to install', 'Cancel anytime', 'Number porting included']

export default function DemoCta() {
  return (
    <section className="section-tight">
      <div className="container">
        <div className="demo-cta">
          <div className="demo-cta-text">
            <span className="demo-cta-badge">
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>auto_awesome</span>
              LIVE DEMO · NO SIGNUP
            </span>
            <h2>Don't see <span className="accent">your industry?</span></h2>
            <p>
              We've deployed Greevo for finance, retail, SaaS, logistics, and more. Tell us how your
              team communicates today and we'll have a workspace ready in 24 hours.
            </p>
            <ul className="demo-cta-points">
              {POINTS.map((pt) => (
                <li key={pt}><span className="dot" />{pt}</li>
              ))}
            </ul>
          </div>
          <div className="demo-cta-actions">
            <Link to="/contact" className="btn btn-dark">
              Get started <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
            </Link>
            <Link to="/pricing" className="btn btn-outline">View pricing</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
