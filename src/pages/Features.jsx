import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'

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
  { icon: 'hub', title: 'CRM integrations', desc: 'HubSpot, Salesforce, Zoho, and Pipedrive sync automatically.' },
  { icon: 'monitoring', title: 'Live analytics', desc: 'CSAT, FCR, AHT, and SLA that update by the second.' },
  { icon: 'phone_in_talk', title: 'Free number porting', desc: 'Local, toll-free, and international — no downtime.' },
  { icon: 'public', title: 'Virtual numbers in 100+ countries', desc: 'Local presence anywhere your customers are.' },
]

export default function Features() {
  return (
    <>
      <PageHero
        eyebrow="Features"
        title="Everything your team needs to answer, route, and follow up"
        subtitle="Cloud phone, AI receptionist, business SMS, and video meetings — on one login, with no add-on invoices."
      />

      <section className="section">
        <div className="container">
          <div className="two-col">
            <div>
              <span className="eyebrow">Cloud Phone</span>
              <h2>HD calling to 190+ countries</h2>
              <p>Set up extensions, hunt groups, and dial plans on a visual canvas — no PBX hardware, no on-site technician. Port existing numbers over for free.</p>
              <ul className="check-list">
                <li><span className="material-symbols-outlined">check_circle</span> Free number porting, local and toll-free</li>
                <li><span className="material-symbols-outlined">check_circle</span> Virtual numbers in 100+ countries</li>
                <li><span className="material-symbols-outlined">check_circle</span> Automatic failover keeps calls connected</li>
              </ul>
              <Link to="/pricing" className="btn btn-dark">See plans</Link>
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
              <span className="material-symbols-outlined" style={{ fontSize: 72, color: 'var(--accent-violet-dark)' }}>auto_awesome</span>
            </div>
            <div>
              <span className="eyebrow">AI Receptionist</span>
              <h2>Answers every call, in any language</h2>
              <p>Greevo AI answers instantly, qualifies the caller, checks your calendar, and books the meeting — then hands your team a clean summary and a CRM task.</p>
              <ul className="check-list">
                <li><span className="material-symbols-outlined">check_circle</span> Unlimited parallel call handling</li>
                <li><span className="material-symbols-outlined">check_circle</span> Auto-detects caller language, 30+ supported</li>
                <li><span className="material-symbols-outlined">check_circle</span> Seamless handoff to a live agent on request</li>
              </ul>
              <Link to="/pricing" className="btn btn-dark">See plans</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="two-col">
            <div>
              <span className="eyebrow">Business SMS &amp; Video</span>
              <h2>Text and meet, from the same platform</h2>
              <p>Two-way SMS and MMS from your existing number, and HD video rooms for up to 200 participants with AI notes and live translation.</p>
              <ul className="check-list">
                <li><span className="material-symbols-outlined">check_circle</span> Shared inbox with assignment and status</li>
                <li><span className="material-symbols-outlined">check_circle</span> Automatic meeting summaries and action items</li>
                <li><span className="material-symbols-outlined">check_circle</span> Templates, scheduled sends, auto-replies</li>
              </ul>
              <Link to="/pricing" className="btn btn-dark">See plans</Link>
            </div>
            <div className="two-col-media" aria-hidden="true">
              <span className="material-symbols-outlined" style={{ fontSize: 72, color: 'var(--accent-violet-dark)' }}>sms</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--surface-alt)' }}>
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
    </>
  )
}
