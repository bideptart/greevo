import { Link } from 'react-router-dom'
import './Home.css'

const CARRIERS = [
  'Nordholm Telecom', 'PacRim Mobile', 'Andes Connect', 'Meridian Wireless', 'Solara Communications',
  'Baltic Voice', 'Kestrel Networks', 'Continental SIP', 'Harborlink Telecom', 'Zenith Carrier Group',
]

const CORE_FIVE = [
  { icon: 'call', title: 'Smart Call Routing', desc: 'First-ring rules and skill-based queues built for high-velocity teams — no IT ticket required.' },
  { icon: 'forum', title: 'Unified Inbox', desc: 'Voice, SMS, WhatsApp, email, and web chat land on one thread per customer.' },
  { icon: 'graphic_eq', title: 'Call Intelligence', desc: 'Live transcription, sentiment scoring, and call summaries — searchable in seconds.' },
  { icon: 'monitoring', title: 'Live Analytics', desc: 'CSAT, FCR, AHT, and SLA that update by the second, not by the day.' },
  { icon: 'hub', title: 'CRM Integrations', desc: 'HubSpot, Salesforce, Zoho, and Pipedrive sync automatically, both ways.' },
]

const STEPS = [
  {
    number: '1',
    title: 'Sign up',
    tagline: 'Five-minute signup. Every plan unlocked.',
    desc: 'Create your account and get immediate access to every feature — no tier-gating during the trial.',
    points: ['Account ready in 5 minutes', 'All features unlocked'],
  },
  {
    number: '2',
    title: 'Invite your team & pick a number',
    tagline: 'Bulk invite. Numbers live instantly.',
    desc: 'Add teammates in bulk, provision local or toll-free numbers in 100+ countries, and build your IVR with drag-and-drop.',
    points: ['Numbers in 100+ countries', 'Drag-and-drop IVR builder'],
  },
  {
    number: '3',
    title: 'Take your first call',
    tagline: 'Desktop, mobile, web. AI covers overflow.',
    desc: 'Log in on any device, start taking calls, and let the AI receptionist answer anything your team can\'t.',
    points: ['iOS · Android · macOS · Windows', 'Live analytics from the first ring'],
  },
]

const INTEGRATIONS = ['HubSpot', 'Salesforce', 'Zoho', 'Pipedrive', 'Slack', 'Zendesk', 'Shopify', 'Zapier', 'Microsoft Teams', 'Google Workspace']

const TESTIMONIALS = [
  { quote: "We tried two other cloud phone tools before this one. The reason we stayed is boring — it just kept working across four time zones. Our sales team stopped thinking about the phone.", name: 'Meera Kapoor', role: 'Head of Growth · Pune' },
  { quote: 'The mid-shift dashboard is where I actually spend my day. Queue depth, agent load, and sentiment on one screen — I can coach someone before it turns into a bad review.', name: 'Jonas Weber', role: 'CX Manager · Berlin' },
  { quote: "The AI receptionist covers overflow calls in two languages, so we stopped losing weekend leads. It hands off to us on anything ambiguous, but for hours and bookings it beats voicemail every time.", name: 'Fatima Al-Sayed', role: 'Support Lead · Dubai' },
  { quote: 'CRM sync is quiet infrastructure. Every call, note, and recording just shows up on the contact — nobody has to remember to log it. Our forecast is finally accurate.', name: 'Marcus Chen', role: 'Head of Sales · Toronto' },
  { quote: 'I set the whole thing up on my phone during a layover. Five people, two countries, one number that rings all of us. My old provider needed a two-week onboarding for the same thing.', name: 'Isabela Rocha', role: 'Founder · São Paulo' },
  { quote: 'Porting 30 numbers across two countries was the part I dreaded most. It was done in under a week, free, and I only had to sign one form. That set the tone for the rest of the rollout.', name: 'Oliver Bennett', role: 'COO · London' },
]

const STATS = [
  { value: '+21%', label: 'First Contact Resolution' },
  { value: '9 hrs', label: 'Per week returned to sales' },
  { value: '−34%', label: 'Average Handle Time' },
]

const FAQS = [
  { q: "What is Greevo's cloud contact center platform?", a: 'Cloud phone and AI contact center in one product. Calls, chat, SMS, video, analytics, and an AI receptionist — in one place, on one login.' },
  { q: 'Do you offer a free trial?', a: 'Yes, every plan starts with a 14-day free trial — no credit card required, and every feature is unlocked from day one.' },
  { q: 'How fast can we go live?', a: 'Median setup time is under 4 minutes: sign up, invite your team, pick a number, and start taking calls.' },
  { q: 'Does the AI receptionist cost extra?', a: 'No — it\'s included on every plan, with a monthly minute allotment that scales by tier.' },
  { q: 'Is it secure enough for regulated industries?', a: 'Yes — encryption in transit and at rest, PII redaction, and audit logs are included on every plan, not an add-on.' },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container hero-inner">
          <span className="hero-badge">
            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>auto_awesome</span>
            AI receptionist is now multilingual
          </span>
          <h1>The cloud phone and AI contact center platform you can activate in minutes.</h1>
          <p className="hero-subtitle">
            Calls, chat, SMS, video, and an AI receptionist — on one login. Greevo replaces the phone system,
            the contact center, and the AI vendor you were about to stitch together.
          </p>
          <div className="hero-ctas">
            <Link to="/contact" className="btn btn-primary">Start Free Trial</Link>
            <Link to="/contact" className="btn btn-ghost">Book a Demo</Link>
            <Link to="/pricing" className="btn btn-outline">
              View Pricing <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
            </Link>
          </div>
          <div className="hero-trust">
            <span>8,200+ teams</span>
            <span className="dot" />
            <span>99.99% uptime</span>
            <span className="dot" />
            <span><span className="material-symbols-outlined" style={{ fontSize: 16, verticalAlign: 'middle' }}>star</span> 4.7/5 average rating</span>
          </div>
        </div>
      </section>

      {/* Trusted by Global Carriers & Partners */}
      <section className="section-tight">
        <div className="container">
          <p className="logo-strip-label">TRUSTED BY GLOBAL CARRIERS &amp; PARTNERS</p>
          <div className="marquee">
            <div className="marquee-track">
              {[...CARRIERS, ...CARRIERS].map((name, i) => (
                <span key={`${name}-${i}`} className="marquee-item">{name}</span>
              ))}
            </div>
          </div>
          <p className="logo-strip-sub">From 5-person startups to 500-seat contact centers.</p>
        </div>
      </section>

      {/* The Platform */}
      <section className="section">
        <div className="container">
          <div className="stack-center">
            <span className="eyebrow">The Platform</span>
            <h2 className="section-title">Cloud phone and AI contact center. One login.</h2>
            <p className="section-subtitle">Two products, one bill, one roadmap. Use one, or use both.</p>
          </div>
          <div className="two-col">
            <div>
              <span className="eyebrow">Cloud Phone</span>
              <h2>HD calling to 190+ countries</h2>
              <p>Virtual numbers in 100+ countries, shared SMS inboxes, video meetings, and native apps for mobile and desktop.</p>
              <ul className="check-list">
                <li><span className="material-symbols-outlined">check_circle</span> HD voice with automatic failover</li>
                <li><span className="material-symbols-outlined">check_circle</span> Free number porting, local and toll-free</li>
                <li><span className="material-symbols-outlined">check_circle</span> Business SMS and MMS from day one</li>
              </ul>
              <Link to="/features" className="btn btn-dark">Explore Cloud Phone</Link>
            </div>
            <div className="two-col-media" aria-hidden="true">
              <span className="material-symbols-outlined" style={{ fontSize: 72, color: 'var(--accent-violet-dark)' }}>call</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="two-col reverse">
            <div className="two-col-media" aria-hidden="true">
              <span className="material-symbols-outlined" style={{ fontSize: 72, color: 'var(--accent-violet-dark)' }}>support_agent</span>
            </div>
            <div>
              <span className="eyebrow">AI Contact Center</span>
              <h2>Skill-based routing, on autopilot</h2>
              <p>Predictive dialer, live coaching, and an omnichannel inbox on one thread per customer — built for teams that live on the phone.</p>
              <ul className="check-list">
                <li><span className="material-symbols-outlined">check_circle</span> Real-time sentiment and call scoring</li>
                <li><span className="material-symbols-outlined">check_circle</span> Whisper coaching for new agents</li>
                <li><span className="material-symbols-outlined">check_circle</span> ACD and workforce scheduling built in</li>
              </ul>
              <Link to="/features" className="btn btn-dark">Explore AI Receptionist</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Five */}
      <section className="section" style={{ background: 'var(--surface-alt)' }}>
        <div className="container">
          <div className="stack-center">
            <span className="eyebrow">Core Five</span>
            <h2 className="section-title">Five tools your agents open every morning.</h2>
            <p className="section-subtitle">The day-to-day, built to feel effortless.</p>
          </div>
          <div className="feature-grid">
            {CORE_FIVE.map((f) => (
              <div key={f.title} className="card feature-card">
                <div className="feature-icon"><span className="material-symbols-outlined">{f.icon}</span></div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section">
        <div className="container">
          <div className="stack-center">
            <span className="eyebrow">How It Works</span>
            <h2 className="section-title">From signup to first call in three steps.</h2>
            <p className="section-subtitle">Median setup time: under 4 minutes.</p>
          </div>
          <div className="steps-grid">
            {STEPS.map((step) => (
              <div key={step.number} className="card step-card">
                <span className="step-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p className="step-tagline">{step.tagline}</p>
                <p className="step-desc">{step.desc}</p>
                <ul className="step-points">
                  {step.points.map((pt) => (
                    <li key={pt}><span className="material-symbols-outlined">check_circle</span>{pt}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="section" style={{ background: 'var(--surface-alt)' }}>
        <div className="container">
          <div className="integrations-band">
            <div>
              <span className="eyebrow">⚡ Integrations</span>
              <h2 className="section-title">Integrate with the tools you already use</h2>
              <p className="section-subtitle">300+ native integrations — CRM, helpdesk, messaging, ticketing. No middleman required.</p>
            </div>
            <div className="integrations-grid">
              {INTEGRATIONS.map((name) => (
                <span key={name} className="integration-chip">{name}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <div className="stack-center">
            <span className="eyebrow">Testimonials</span>
            <h2 className="section-title">What clients say after 90 days.</h2>
            <p className="section-subtitle">Real teams, real numbers — from sales floors, CX desks, and support queues.</p>
          </div>
          <div className="testimonial-grid">
            {TESTIMONIALS.map((t) => (
              <div key={t.name} className="card testimonial-card">
                <p className="testimonial-quote">&ldquo;{t.quote}&rdquo;</p>
                <div className="testimonial-author">
                  <span className="testimonial-avatar">{t.name.split(' ').map((n) => n[0]).join('')}</span>
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="stats-row" style={{ marginTop: 56 }}>
            {STATS.map((s) => (
              <div key={s.label}>
                <div className="stat-number">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: 'var(--surface-alt)' }}>
        <div className="container">
          <div className="stack-center">
            <span className="eyebrow">FAQ</span>
            <h2 className="section-title">The questions teams ask on the first call.</h2>
          </div>
          <div style={{ maxWidth: 720, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 14 }}>
            {FAQS.map((f) => (
              <div key={f.q} className="card" style={{ padding: 22 }}>
                <h3 style={{ fontSize: 15.5, fontWeight: 600, marginBottom: 8 }}>{f.q}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: 14.5, lineHeight: 1.6 }}>{f.a}</p>
              </div>
            ))}
          </div>
          <div className="stack-center" style={{ marginTop: 32 }}>
            <Link to="/faq" className="btn btn-outline">See all FAQs</Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-band">
            <h2>Try the platform. Be on a call by lunch.</h2>
            <p>Same product, same support, same security — no matter which plan you pick.</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">Start Free Trial</Link>
              <Link to="/contact" className="btn btn-ghost" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', borderColor: 'rgba(255,255,255,0.2)' }}>Book a Demo</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
