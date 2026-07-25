import { Link } from 'react-router-dom'
import './Home.css'

const FEATURES = [
  { icon: 'call', title: 'Smart Call Routing', desc: 'First-ring rules and skill-based queues built for high-velocity teams — no IT ticket required.' },
  { icon: 'forum', title: 'Unified Inbox', desc: 'Voice, SMS, WhatsApp, email, and web chat land on one thread per customer.' },
  { icon: 'graphic_eq', title: 'Call Intelligence', desc: 'Live transcription, sentiment scoring, and call summaries — searchable in seconds.' },
  { icon: 'monitoring', title: 'Live Analytics', desc: 'CSAT, FCR, AHT, and SLA that update by the second, not by the day.' },
  { icon: 'hub', title: 'CRM Integrations', desc: 'HubSpot, Salesforce, Zoho, and Pipedrive sync automatically, both ways.' },
]

const CAPABILITIES = [
  { icon: 'call', title: 'Cloud phone system', desc: 'Unlimited inbound and outbound calling with intent-based routing.' },
  { icon: 'device_hub', title: 'Cloud PBX', desc: 'Directory, dial plans, and hunt groups on a visual canvas.' },
  { icon: 'dialpad', title: 'Extension calling', desc: '3-digit extensions, intercom, paging, and call park.' },
  { icon: 'voicemail', title: 'Voicemail + AI transcription', desc: 'Searchable transcripts delivered to email and app.' },
  { icon: 'mic', title: 'Call + screen recording', desc: 'Keyword search, PII redaction, custom retention windows.' },
  { icon: 'account_tree', title: 'IVR + auto-attendant', desc: 'Drag-and-drop menus, holiday routing, multilingual prompts.' },
  { icon: 'sms', title: 'Business SMS & MMS', desc: 'Two-way texting with media, from your existing business number.' },
  { icon: 'videocam', title: 'HD video meetings', desc: '200-seat rooms with AI notes and live translation.' },
  { icon: 'auto_awesome', title: 'AI receptionist', desc: 'Answers, qualifies, books, and summarizes every call.' },
  { icon: 'support_agent', title: 'Contact center + WFM', desc: 'ACD, skills-based queues, predictive dialer, scheduling.' },
  { icon: 'chat', title: 'Omnichannel chatbot', desc: 'Web, WhatsApp, Instagram, Facebook, X, SMS — one thread.' },
  { icon: 'devices', title: 'Mobile + desktop apps', desc: 'iOS, Android, macOS, and Windows, fully in sync.' },
]

export default function Home() {
  return (
    <>
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

      <section className="section-tight">
        <div className="container">
          <p className="logo-strip-label">TRUSTED BY GROWING TEAMS AND CARRIERS WORLDWIDE</p>
          <div className="logo-strip">
            <span>Northwind Logistics</span>
            <span>Blue Harbor Finance</span>
            <span>Cedarline Retail</span>
            <span>Vantage SaaS</span>
            <span>Orbit Health</span>
            <span>Marlowe & Co.</span>
          </div>
        </div>
      </section>

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
              <Link to="/products/cloud-phone" className="btn btn-dark">Explore Cloud Phone</Link>
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
              <Link to="/products/ai-receptionist" className="btn btn-dark">Explore AI Receptionist</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--surface-alt)' }}>
        <div className="container">
          <div className="stack-center">
            <span className="eyebrow">Core Five</span>
            <h2 className="section-title">Five tools your agents open every morning.</h2>
            <p className="section-subtitle">The day-to-day, built to feel effortless.</p>
          </div>
          <div className="feature-grid">
            {FEATURES.map((f) => (
              <div key={f.title} className="card feature-card">
                <div className="feature-icon"><span className="material-symbols-outlined">{f.icon}</span></div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="stack-center">
            <span className="eyebrow">Capability Library</span>
            <h2 className="section-title">Every capability. One platform.</h2>
            <p className="section-subtitle">No add-on invoices. Availability by plan on the pricing page.</p>
          </div>
          <div className="capability-grid">
            {CAPABILITIES.map((c) => (
              <div key={c.title} className="card capability-card">
                <span className="material-symbols-outlined">{c.icon}</span>
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="stats-row">
            <div>
              <div className="stat-number">190+</div>
              <div className="stat-label">Countries reached</div>
            </div>
            <div>
              <div className="stat-number">99.99%</div>
              <div className="stat-label">Platform uptime</div>
            </div>
            <div>
              <div className="stat-number">8,200+</div>
              <div className="stat-label">Teams onboard</div>
            </div>
            <div>
              <div className="stat-number">24/7</div>
              <div className="stat-label">Human support</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-band">
            <h2>Ready to put your phone system, contact center, and AI on one bill?</h2>
            <p>Spin up Greevo in minutes — no hardware, no long-term contract, cancel anytime.</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">Start Free Trial</Link>
              <Link to="/contact" className="btn btn-ghost" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', borderColor: 'rgba(255,255,255,0.2)' }}>Talk to Sales</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
