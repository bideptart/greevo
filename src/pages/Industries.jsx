import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'

const INDUSTRIES = [
  {
    icon: 'account_balance',
    title: 'Finance',
    desc: 'Secure, compliant calling and messaging for advisors and support teams handling sensitive accounts.',
    points: ['Call recording with configurable retention', 'PII redaction on transcripts', 'Audit-ready logs across every channel'],
    bg: '#f5f8ff',
  },
  {
    icon: 'storefront',
    title: 'Retail',
    desc: 'Route customers to the right store or support queue, and keep every order conversation on one thread.',
    points: ['Order-aware routing by location', 'SMS updates for shipping and returns', 'Seasonal traffic scales without new hardware'],
    bg: '#eff6ff',
  },
  {
    icon: 'cloud',
    title: 'SaaS',
    desc: 'Onboarding calls, renewal outreach, and support tickets, unified for product and success teams.',
    points: ['CRM sync with HubSpot, Salesforce, Zoho', 'AI call summaries into your CS tool', 'Usage-based routing to the right team'],
    bg: '#fdf4ff',
  },
  {
    icon: 'local_shipping',
    title: 'Logistics',
    desc: 'Dispatch, driver check-ins, and delivery updates that keep moving even during peak season.',
    points: ['Bulk SMS for delivery notifications', 'Multilingual IVR for dispatch lines', 'Real-time call analytics by region'],
    bg: '#ecfeff',
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
      {INDUSTRIES.map((s, i) => (
        <section className="section" style={{ background: s.bg }} key={s.title}>
          <div className="container">
            <div className={`two-col ${i % 2 === 1 ? 'reverse' : ''}`}>
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
          </div>
        </section>
      ))}
    </>
  )
}
