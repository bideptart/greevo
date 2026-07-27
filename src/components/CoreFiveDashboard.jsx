import './CoreFiveDashboard.css'

const THREADS = [
  { name: 'David Park', channel: 'call', icon: 'call', meta: 'Voice · 04:32', color: '#2563eb' },
  { name: 'Sarah Mitchell', channel: 'chat', icon: 'chat_bubble', meta: 'WhatsApp · typing…', color: '#22c55e' },
  { name: 'Alex Rodriguez', channel: 'email', icon: 'mail', meta: 'Email · 2m ago', color: '#8b5cf6' },
  { name: 'John Davis', channel: 'sms', icon: 'sms', meta: 'SMS · reply needed', color: '#f59e0b' },
]

const CRM_ROWS = [
  { name: 'HubSpot', pct: 92, color: '#f97316' },
  { name: 'Salesforce', pct: 78, color: '#38bdf8' },
  { name: 'Zoho', pct: 64, color: '#a855f7' },
  { name: 'Pipedrive', pct: 51, color: '#22c55e' },
]

export default function CoreFiveDashboard() {
  return (
    <div className="core-five-dashboard">
      <div className="card cfd-card cfd-routing">
        <div className="cfd-card-head">
          <h3>Smart Call Routing</h3>
          <p>First-ring rules and skill-based queues — for high-velocity teams.</p>
        </div>
        <div className="cfd-routing-visual">
          <div className="cfd-inbound-chip">
            <span className="cfd-dot-pink" />Inbound call
          </div>
          <div className="cfd-rule-card">
            <span className="cfd-rule-tag">RULE · BILLING</span>
            <div className="cfd-rule-row">
              <span className="cfd-rule-title">Intent detection</span>
              <span className="material-symbols-outlined cfd-bolt">bolt</span>
            </div>
            <span className="cfd-rule-sub">Active · routes to Billing</span>
          </div>
          <div className="cfd-builder-banner">
            <div>
              <span className="cfd-builder-title">Drag &amp; drop builder</span>
              <span className="cfd-builder-sub">No IT ticket required</span>
            </div>
            <span className="cfd-builder-frac">3/4</span>
          </div>
        </div>
      </div>

      <div className="card cfd-card cfd-inbox">
        <div className="cfd-inbox-top">
          <span className="cfd-live-badge"><span className="cfd-live-dot" />LIVE</span>
          <span className="cfd-thread-count">19 threads</span>
        </div>
        <div className="cfd-thread-list">
          {THREADS.map((t) => (
            <div className="cfd-thread-row" key={t.name}>
              <span className="cfd-thread-icon" style={{ background: t.color }}>
                <span className="material-symbols-outlined">{t.icon}</span>
              </span>
              <div>
                <span className="cfd-thread-name">{t.name}</span>
                <span className="cfd-thread-meta">{t.meta}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="cfd-card-head cfd-inbox-foot">
          <h3>Unified Inbox</h3>
          <p>Voice, SMS, WhatsApp, email, and web chat on one thread.</p>
        </div>
      </div>

      <div className="card cfd-card cfd-intelligence">
        <div className="cfd-card-head">
          <h3><span className="material-symbols-outlined cfd-back">arrow_back</span> Call Intelligence</h3>
          <p>Live transcription, sentiment scoring, and call summaries — searchable in seconds.</p>
        </div>
        <div className="cfd-transcript-grid">
          <div className="cfd-transcript-col">
            <span className="cfd-transcript-label">Transcript</span>
            <div className="cfd-transcript-line"><strong>Customer</strong> what are the products you offer</div>
            <div className="cfd-transcript-line"><strong>Agent</strong> happy to walk you through the plan options</div>
          </div>
          <div className="cfd-transcript-col">
            <span className="cfd-transcript-label">Insights</span>
            <div className="cfd-sentiment-row">
              <span>Sentiment</span>
              <div className="cfd-sentiment-bar"><span style={{ width: '82%' }} /></div>
              <span className="cfd-sentiment-pct">82%</span>
            </div>
            <div className="cfd-topic-tags">
              <span>billing</span><span>refund</span><span>plan</span>
            </div>
          </div>
        </div>
        <div className="cfd-recording">
          <span className="material-symbols-outlined cfd-play">play_arrow</span>
          <div className="cfd-recording-bar"><span /></div>
          <span className="cfd-recording-time">4:24</span>
        </div>
      </div>

      <div className="cfd-side-stack">
        <div className="card cfd-card cfd-analytics">
          <div className="cfd-card-head">
            <h3>Live Analytics</h3>
            <p>CSAT, FCR, AHT, SLA — updates by the second.</p>
          </div>
          <div className="cfd-sla-row">
            <div>
              <span className="cfd-sla-label">SLA Index</span>
              <span className="cfd-sla-value">98.4%</span>
            </div>
            <div className="cfd-mini-bars">
              {[40, 65, 50, 80, 60, 90, 70].map((h, i) => (
                <span key={i} style={{ height: `${h}%` }} />
              ))}
            </div>
          </div>
        </div>

        <div className="card cfd-card cfd-crm">
          <div className="cfd-card-head">
            <h3>CRM Integrations</h3>
            <p>4 connectors syncing, both ways.</p>
          </div>
          <div className="cfd-crm-list">
            {CRM_ROWS.map((r) => (
              <div className="cfd-crm-row" key={r.name}>
                <span className="cfd-crm-name">{r.name}</span>
                <div className="cfd-crm-bar"><span style={{ width: `${r.pct}%`, background: r.color }} /></div>
                <span className="cfd-crm-pct">{r.pct}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
