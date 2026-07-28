import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'

const CAPABILITIES = [
  { icon: 'call', title: 'Carrier-grade voice', desc: 'Redundant, multi-carrier routing that fails over mid-call — no dropped conversations during an outage.' },
  { icon: 'swap_horiz', title: 'Live call-flip', desc: 'Move an active call from desktop to mobile to the car with zero drop — your customer never notices the switch.' },
  { icon: 'dialpad', title: 'Extensions & intercom', desc: '3-digit dialing, intercom paging, and call park that behaves like a real office, wherever your team sits.' },
  { icon: 'voicemail', title: 'Voicemail-to-everything', desc: 'Every voicemail becomes a searchable transcript, routed to email, Slack, or your helpdesk automatically.' },
  { icon: 'mic', title: 'Recording with redaction', desc: 'Call and screen recording with automatic PII masking and retention rules set per team, not per request.' },
  { icon: 'account_tree', title: 'IVR without a ticket', desc: 'Rebuild menus and holiday schedules yourself — no vendor ticket, no waiting on a callback to change a greeting.' },
  { icon: 'speed', title: 'Power & predictive dialers', desc: 'Pace one-to-one for warm outbound, or dial ahead of agent capacity with automatic answering-machine detection.' },
  { icon: 'visibility_off', title: 'Compliant outbound by default', desc: 'DNC scrub before every dial, STIR/SHAKEN attestation, and 10DLC registration handled — not left to your legal team.' },
  { icon: 'auto_awesome', title: 'AI receptionist', desc: 'Picks up every line at once, qualifies the caller, books the meeting, and files the CRM note — unattended.' },
  { icon: 'record_voice_over', title: 'Live whisper coaching', desc: 'The AI listens alongside your agent and suggests the next line in their ear — before the customer notices a pause.' },
  { icon: 'chat', title: 'One inbox, every channel', desc: 'Voice, SMS, WhatsApp, Instagram, Facebook, and X land in a single customer thread — nothing forwarded, nothing lost.' },
  { icon: 'shield_person', title: 'Supervisor floor view', desc: 'Barge, whisper, or silent-listen on any call — with an AI ranking that surfaces the 5 conversations that need you first.' },
  { icon: 'hub', title: 'Two-way CRM sync', desc: 'HubSpot, Salesforce, Zoho, and Pipedrive update the moment a call ends — no export, no manual logging.' },
  { icon: 'monitoring', title: 'Analytics that move', desc: 'CSAT, FCR, AHT, and SLA recalculate as calls land, not overnight in a batch report.' },
  { icon: 'phone_in_talk', title: 'Porting with no downtime', desc: 'We port local, toll-free, and international numbers in the background — your line never goes quiet mid-port.' },
  { icon: 'public', title: 'Local numbers, 100+ countries', desc: 'Stand up a local presence anywhere your customers are, provisioned in minutes, not a country-specific contract.' },
]

export default function Features() {
  return (
    <>
      <PageHero
        eyebrow="Features"
        title="Everything your team needs to answer, route, and follow up"
        subtitle="Cloud phone, AI receptionist, business SMS, and video meetings — on one login, with no add-on invoices."
      />

      <section className="section" style={{ background: '#f5f8ff' }}>
        <div className="container">
          <div className="two-col">
            <div>
              <span className="eyebrow">Global Cloud Phone</span>
              <h2>One number, and it follows the call — not the desk</h2>
              <p>Extensions, hunt groups, and multi-level dial plans live on a visual canvas — no PBX box in a closet, no ticket to change a greeting. Start a call at your desk, and flip it to your phone walking to the car, with zero drop: the customer never hears the switch, and the transcript keeps rolling on both ends.</p>
              <ul className="check-list">
                <li><span className="material-symbols-outlined">check_circle</span> Live call-flip between desktop, mobile, and desk phone mid-call</li>
                <li><span className="material-symbols-outlined">check_circle</span> Free porting for local, toll-free, and international numbers</li>
                <li><span className="material-symbols-outlined">check_circle</span> Multi-carrier failover keeps active calls connected during an outage</li>
              </ul>
              <Link to="/pricing" className="btn btn-dark">See plans</Link>
            </div>
            <div className="two-col-media" aria-hidden="true">
              <span className="material-symbols-outlined" style={{ fontSize: 72, color: 'var(--accent-violet-dark)' }}>call</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#eff6ff' }}>
        <div className="container">
          <div className="two-col reverse">
            <div className="two-col-media" aria-hidden="true">
              <span className="material-symbols-outlined" style={{ fontSize: 72, color: 'var(--accent-violet-dark)' }}>auto_awesome</span>
            </div>
            <div>
              <span className="eyebrow">AI Receptionist</span>
              <h2>The line is never busy, even when every agent is</h2>
              <p>Greevo's AI receptionist answers every inbound call in parallel — not queued, not voicemail — qualifies the caller in their own language, checks live calendar availability, and books the meeting. Your team gets a written summary and a CRM task waiting before they've even seen the missed-call notification.</p>
              <ul className="check-list">
                <li><span className="material-symbols-outlined">check_circle</span> Unlimited simultaneous call handling, no queue</li>
                <li><span className="material-symbols-outlined">check_circle</span> Auto-detects the caller's language, 30+ supported</li>
                <li><span className="material-symbols-outlined">check_circle</span> Warm handoff to a live agent, full context carried over</li>
              </ul>
              <Link to="/pricing" className="btn btn-dark">See plans</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#fdf4ff' }}>
        <div className="container">
          <div className="two-col">
            <div>
              <span className="eyebrow">Unified Inbox</span>
              <h2>Every channel, one thread per customer</h2>
              <p>Voice, SMS, WhatsApp, Instagram, and web chat stop living in five different tabs. A customer who calls Monday and texts Thursday shows up as one conversation, one history, assigned to one owner — so nobody re-asks a question that was already answered.</p>
              <ul className="check-list">
                <li><span className="material-symbols-outlined">check_circle</span> Assignment, status, and SLA timers on every thread</li>
                <li><span className="material-symbols-outlined">check_circle</span> Two-way SMS and MMS from your existing business number</li>
                <li><span className="material-symbols-outlined">check_circle</span> Templates, scheduled sends, and rule-based auto-replies</li>
              </ul>
              <Link to="/pricing" className="btn btn-dark">See plans</Link>
            </div>
            <div className="two-col-media" aria-hidden="true">
              <span className="material-symbols-outlined" style={{ fontSize: 72, color: 'var(--accent-violet-dark)' }}>chat</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#f0fdfa' }}>
        <div className="container">
          <div className="two-col reverse">
            <div className="two-col-media" aria-hidden="true">
              <span className="material-symbols-outlined" style={{ fontSize: 72, color: 'var(--accent-violet-dark)' }}>speed</span>
            </div>
            <div>
              <span className="eyebrow">Outbound &amp; Dialers</span>
              <h2>Dial at the pace your list deserves, not one fixed speed</h2>
              <p>Warm, high-value leads get a power dialer that paces one-to-one, so a rep never talks over a ring. Large lists get a predictive dialer that stays just ahead of agent capacity, drops answering machines automatically, and scrubs every number against Do-Not-Call before it rings. Nobody hand-manages a spreadsheet to stay compliant.</p>
              <ul className="check-list">
                <li><span className="material-symbols-outlined">check_circle</span> Power dialer for account-based, one-to-one outbound</li>
                <li><span className="material-symbols-outlined">check_circle</span> Predictive dialer with answering-machine detection</li>
                <li><span className="material-symbols-outlined">check_circle</span> DNC scrub and STIR/SHAKEN attestation run before every dial</li>
              </ul>
              <Link to="/pricing" className="btn btn-dark">See plans</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#f5f3ff' }}>
        <div className="container">
          <div className="two-col">
            <div>
              <span className="eyebrow">Call Intelligence &amp; Coaching</span>
              <h2>Know what happened on a call — and what to say on the next one</h2>
              <p>Every call is transcribed, scored for sentiment, and summarized the moment it ends — searchable by keyword, topic, or outcome across your entire history. While the call is still live, the same AI can whisper the next line into a rep's ear, and a supervisor can see which of 200 active calls actually need a human dropping in, ranked, instead of scanning a wall of tiles.</p>
              <ul className="check-list">
                <li><span className="material-symbols-outlined">check_circle</span> Real-time transcription with keyword, topic, and PII search</li>
                <li><span className="material-symbols-outlined">check_circle</span> Live whisper coaching and next-best-action prompts for agents</li>
                <li><span className="material-symbols-outlined">check_circle</span> Barge, whisper, or silent-listen from an AI-ranked supervisor queue</li>
              </ul>
              <Link to="/pricing" className="btn btn-dark">See plans</Link>
            </div>
            <div className="two-col-media" aria-hidden="true">
              <span className="material-symbols-outlined" style={{ fontSize: 72, color: 'var(--accent-violet-dark)' }}>monitoring</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#fff7ed' }}>
        <div className="container">
          <div className="two-col">
            <div>
              <span className="eyebrow">Integrations &amp; Compliance</span>
              <h2>Fits into what you already run, not the other way around</h2>
              <p>Calls, notes, and recordings sync to HubSpot, Salesforce, Zoho, and Pipedrive the second a call ends — no export, no Zapier relay in the middle to break silently. Underneath, every number carries STIR/SHAKEN attestation and 10DLC registration so your texts and calls actually land instead of getting flagged as spam, and every recording sits behind SOC 2, PCI-DSS, and ISO 27001 controls you didn't have to configure yourself.</p>
              <ul className="check-list">
                <li><span className="material-symbols-outlined">check_circle</span> Native two-way sync with your CRM, not a one-way export</li>
                <li><span className="material-symbols-outlined">check_circle</span> STIR/SHAKEN and 10DLC handled on every number, by default</li>
                <li><span className="material-symbols-outlined">check_circle</span> SOC 2, PCI-DSS, and ISO 27001-aligned controls with AES-256 encryption</li>
              </ul>
              <Link to="/pricing" className="btn btn-dark">See plans</Link>
            </div>
            <div className="two-col-media" aria-hidden="true">
              <span className="material-symbols-outlined" style={{ fontSize: 72, color: 'var(--accent-violet-dark)' }}>hub</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#ecfeff' }}>
        <div className="container">
          <div className="stack-center">
            <span className="eyebrow">The Full Capability Library</span>
            <h2 className="section-title">Sixteen tools. One login. Zero surprise invoices.</h2>
            <p className="section-subtitle">Everything below ships in the platform — what's gated by plan is listed on pricing, not buried in a sales call.</p>
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
