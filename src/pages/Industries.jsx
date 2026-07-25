import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'

const INDUSTRIES = [
  {
    icon: 'account_balance',
    title: 'Finance',
    desc: 'Secure, compliant calling and messaging for advisors and support teams handling sensitive accounts.',
    points: ['Call recording with configurable retention', 'PII redaction on transcripts', 'Audit-ready logs across every channel'],
  },
  {
    icon: 'storefront',
    title: 'Retail',
    desc: 'Route customers to the right store or support queue, and keep every order conversation on one thread.',
    points: ['Order-aware routing by location', 'SMS updates for shipping and returns', 'Seasonal traffic scales without new hardware'],
  },
  {
    icon: 'cloud',
    title: 'SaaS',
    desc: 'Onboarding calls, renewal outreach, and support tickets, unified for product and success teams.',
    points: ['CRM sync with HubSpot, Salesforce, Zoho', 'AI call summaries into your CS tool', 'Usage-based routing to the right team'],
  },
  {
    icon: 'local_shipping',
    title: 'Logistics',
    desc: 'Dispatch, driver check-ins, and delivery updates that keep moving even during peak season.',
    points: ['Bulk SMS for delivery notifications', 'Multilingual IVR for dispatch lines', 'Real-time call analytics by region'],
  },
]

export default function Industries() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Built for how your industry actually works"
        subtitle="Greevo adapts to the workflows your team already runs — not the other way around."
      />
      <section className="section">
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 64 }}>
          {INDUSTRIES.map((s, i) => (
            <div className={`two-col ${i % 2 === 1 ? 'reverse' : ''}`} key={s.title}>
              <div>
                <span className="eyebrow">{s.title}</span>
                <h2>{s.title} teams choose Greevo for one reason</h2>
                <p>{s.desc}</p>
                <ul className="check-list">
                  {s.points.map((pt) => (
                    <li key={pt}><span className="material-symbols-outlined">check_circle</span> {pt}</li>
                  ))}
                </ul>
                <Link to="/contact" className="btn btn-dark">Talk to sales</Link>
              </div>
              <div className="two-col-media" aria-hidden="true">
                <span className="material-symbols-outlined" style={{ fontSize: 72, color: 'var(--accent-violet-dark)' }}>{s.icon}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-band">
            <h2>Not seeing your industry? We probably still fit.</h2>
            <p>Tell us how your team communicates today — we'll show you what changes.</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">Get Started</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
