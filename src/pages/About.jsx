import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'

const VALUES = [
  { icon: 'bolt', title: 'Ship fast, ship clean', desc: 'We push improvements weekly, not quarterly — and we test them on our own phones first.' },
  { icon: 'diversity_3', title: 'Support that answers', desc: 'Every plan includes real humans who pick up, not a ticket queue that echoes.' },
  { icon: 'shield', title: 'Security by default', desc: 'Encryption in transit and at rest, PII redaction, and audit logs on every plan — not an add-on.' },
]

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Greevo"
        title="We built the phone system we always wanted"
        subtitle="Greevo started as a small team frustrated with juggling a phone vendor, a contact center vendor, and an AI vendor that didn't talk to each other. So we built one platform that does all three."
        primaryCta="Start Free Trial"
        secondaryCta="Contact Us"
      />

      <section className="section">
        <div className="container">
          <div className="stats-row">
            <div><div className="stat-number">2021</div><div className="stat-label">Founded</div></div>
            <div><div className="stat-number">8,200+</div><div className="stat-label">Teams onboard</div></div>
            <div><div className="stat-number">190+</div><div className="stat-label">Countries reached</div></div>
            <div><div className="stat-number">99.99%</div><div className="stat-label">Uptime</div></div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--surface-alt)' }}>
        <div className="container">
          <div className="stack-center">
            <span className="eyebrow">What we believe</span>
            <h2 className="section-title">Three things we won't compromise on</h2>
          </div>
          <div className="feature-grid">
            {VALUES.map((v) => (
              <div key={v.title} className="card feature-card">
                <div className="feature-icon"><span className="material-symbols-outlined">{v.icon}</span></div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-band">
            <h2>Want to see how we work?</h2>
            <p>Book a demo and we'll walk you through the platform, no scripted pitch.</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">Book a Demo</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
