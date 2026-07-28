import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'

const STATS = [
  { value: '17,500+', label: 'Teams onboard' },
  { value: '99.99%', label: 'Platform uptime' },
  { value: '190+', label: 'Countries reached' },
  { value: '4.8/5', label: 'Rated on G2' },
]

const BELIEFS = [
  {
    icon: 'forum',
    title: 'Conversations, not menus',
    desc: 'Callers talk, the AI listens and responds — no "press 2 for support" trees.',
  },
  {
    icon: 'bolt',
    title: 'Latency is a feature',
    desc: 'A slow AI voice is worse than no AI voice. We build for sub-second response, always.',
  },
  {
    icon: 'lock',
    title: 'Your data stays yours',
    desc: 'Calls, transcripts, and customer records belong to you — exportable any time, no lock-in.',
  },
  {
    icon: 'verified_user',
    title: 'Compliance by default',
    desc: 'Encryption, PII redaction, and audit logs ship on every plan — not sold as an add-on.',
  },
]

const COMPLIANCE = [
  { label: 'SOC 2 Type II', desc: 'Independently audited controls for security, availability, and confidentiality.' },
  { label: 'ISO 27001', desc: 'Certified information security management across the whole platform.' },
  { label: 'PCI-DSS', desc: 'Billing and payment data handled to card-industry security standards.' },
  { label: 'STIR/SHAKEN', desc: 'Caller ID verified on every call to keep your numbers off spam-block lists.' },
]

const EXPLORE = [
  { icon: 'auto_awesome', title: 'Features', desc: 'See everything the platform can do, from AI receptionist to shared inboxes.', to: '/features' },
  { icon: 'payments', title: 'Pricing', desc: 'Simple, per-user pricing that scales with your team. No hidden fees.', to: '/pricing' },
  { icon: 'support_agent', title: 'Talk to us', desc: "Questions about your setup? We're a message away.", to: '/contact' },
]

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Greevo"
        title="Built to make phone systems make sense again"
        subtitle="Greevo replaces the phone system, the contact center, and the AI vendor you were about to stitch together — with one login your whole team actually wants to use."
        primaryCta="Start Free Trial"
        secondaryCta="Contact Us"
      />

      <section className="section">
        <div className="container two-col">
          <div>
            <span className="eyebrow">Why we built it</span>
            <h2 style={{ marginTop: 16 }}>Missed calls were the bug nobody was fixing</h2>
            <p>
              Every team we talked to had the same story: a great product, a real customer on the line,
              and a phone system that dropped the call, buried it in an IVR maze, or simply never rang
              after hours. The tools that existed either bolted an AI voice onto a script, or handled
              calls and chat as two separate products that never talked to each other.
            </p>
            <p>
              Greevo started as a bet that a phone system could be both simple enough for a five-person
              team to set up in an afternoon, and capable enough for a 500-seat contact center to run
              its whole operation on — without switching vendors as it grows.
            </p>
          </div>
          <div className="two-col-media">
            <span className="material-symbols-outlined" style={{ fontSize: 64, color: 'var(--accent-cyan-solid)' }}>graphic_eq</span>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--surface-alt)' }}>
        <div className="container">
          <div className="stats-row">
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="stat-number">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="stack-center">
            <span className="eyebrow">What we believe</span>
            <h2 className="section-title">The principles behind every feature</h2>
          </div>
          <div className="capability-grid">
            {BELIEFS.map((b) => (
              <div key={b.title} className="card capability-card">
                <span className="material-symbols-outlined">{b.icon}</span>
                <h4>{b.title}</h4>
                <p>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--surface-alt)' }}>
        <div className="container">
          <div className="stack-center">
            <span className="eyebrow">The company</span>
            <h2 className="section-title">Carrier-grade, globally</h2>
            <p className="section-subtitle">
              Greevo serves teams across the US, EU, UK, and LATAM, with local number coverage in
              100+ countries, HD voice reaching 190+, and an AI receptionist that speaks 34
              languages. Every region runs on the same certification baseline — no separate
              "enterprise tier" for security.
            </p>
          </div>
          <div className="capability-grid">
            {COMPLIANCE.map((c) => (
              <div key={c.label} className="card capability-card">
                <span className="material-symbols-outlined">verified</span>
                <h4>{c.label}</h4>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-band">
            <h2>See it on a real call, not a slide deck</h2>
            <p>No signup, no credit card — just a live look at how Greevo handles a call end to end.</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-dark">Book a Demo</Link>
              <Link to="/pricing" className="btn btn-outline">View Pricing</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="stack-center">
            <span className="eyebrow">Explore</span>
            <h2 className="section-title">Where to go next</h2>
          </div>
          <div className="feature-grid">
            {EXPLORE.map((e) => (
              <Link key={e.title} to={e.to} className="card feature-card">
                <span className="feature-icon material-symbols-outlined">{e.icon}</span>
                <h3>{e.title}</h3>
                <p>{e.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
