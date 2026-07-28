import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './LiveCallShowcase.css'

const PRICE_CYCLE = [
  {
    plan: 'Starter plan',
    name: 'Starter',
    avatar: 'SP',
    users: 'Up to 5 users',
    popular: false,
    monthly: 31,
    yearly: 25,
    savings: 72,
    desc: 'Pilot a single agent.',
    rate: '250 min · $0.13/min · 2 agents',
    perMinuteRate: 0.13,
    includedMinutes: '250',
    agentCount: '2',
    stat: 'Solo teams save 4.5 hrs/week on intake',
    featuresList: [
      '2 AI voice agents',
      '250 included minutes',
      '$0.13/min effective rate',
      'Inbound calling',
      'Per-second billing',
      'Standard voice stack',
      'Call recording',
      'Real-time transcription',
      'Email support',
    ],
  },
  {
    plan: 'Growth plan',
    name: 'Growth',
    avatar: 'GP',
    users: 'Up to 25 users',
    popular: true,
    monthly: 93,
    yearly: 74,
    savings: 228,
    desc: 'Most teams start here.',
    rate: '800 min · $0.12/min · 10 agents',
    perMinuteRate: 0.12,
    includedMinutes: '800',
    agentCount: '10',
    stat: 'Teams on Growth cut missed calls by 35%',
    featuresList: [
      '10 AI voice agents',
      '800 included minutes',
      '$0.12/min effective rate',
      'Inbound calling',
      'Per-second billing',
      'Standard + premium voices',
      'Call recording',
      'Real-time transcription',
      'Priority support',
    ],
  },
  {
    plan: 'Scale plan',
    name: 'Scale',
    avatar: 'SC',
    users: 'Unlimited users',
    popular: false,
    monthly: 316,
    yearly: 253,
    savings: 756,
    desc: 'High-volume call centers.',
    rate: '3,000 min · $0.11/min · Unlimited',
    perMinuteRate: 0.11,
    includedMinutes: '3,000',
    agentCount: '∞',
    stat: 'High-volume teams recover $1,800+/mo in missed calls',
    featuresList: [
      'Unlimited AI voice agents',
      '3,000 included minutes',
      '$0.11/min effective rate',
      'Inbound calling',
      'Per-second billing',
      'Realtime + premium voices',
      'Call recording',
      'Real-time transcription',
      'Dedicated success manager + SLA',
    ],
  },
]

function DigitReel({ digit }) {
  return (
    <span className="price-digit-reel">
      <span className="price-digit-track" style={{ transform: `translateY(-${digit}em)` }}>
        {Array.from({ length: 10 }, (_, i) => (
          <span key={i} className="price-digit-cell">{i}</span>
        ))}
      </span>
    </span>
  )
}

const FADE_MS = 400

export default function LiveCallShowcase() {
  const [step, setStep] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    let fadeTimeout
    const intervalId = setInterval(() => {
      setVisible(false)
      fadeTimeout = setTimeout(() => {
        setStep((s) => (s + 1) % (PRICE_CYCLE.length * 2))
        setVisible(true)
      }, FADE_MS)
    }, 3200)
    return () => {
      clearInterval(intervalId)
      clearTimeout(fadeTimeout)
    }
  }, [])

  const current = PRICE_CYCLE[Math.floor(step / 2) % PRICE_CYCLE.length]
  const isYearly = step % 2 === 1
  const value = isYearly ? current.yearly : current.monthly
  const digits = String(value).padStart(2, '0').split('').map(Number)
  const baseRate = PRICE_CYCLE[0].perMinuteRate
  const rateSavingsCents = Math.round((baseRate - current.perMinuteRate) * 100)

  return (
    <div className="live-call-showcase">
      <div className="agent-panel-card">
        <div className="agent-panel-titlebar">
          <span className="agent-panel-url">app.greevo.ai/billing</span>
          <span className="agent-panel-live">
            <span className="agent-panel-live-dot" /> Live
          </span>
        </div>

        <div className={`agent-panel-contact swap-fade ${visible ? 'is-visible' : ''}`}>
          <span className="agent-panel-avatar-wrap">
            <span className="agent-panel-avatar">{current.avatar}</span>
            <span className="agent-panel-phone-badge">
              <span className="material-symbols-outlined">call</span>
            </span>
          </span>
          <div className="agent-panel-contact-text">
            <span className="agent-panel-contact-name">{current.plan}</span>
            <span className="agent-panel-contact-phone">{current.users}</span>
          </div>
          {current.popular && (
            <span className="agent-panel-handling">
              <span className="material-symbols-outlined" style={{ fontSize: 13 }}>star</span>
              Popular
            </span>
          )}
        </div>

        <div className={`agent-panel-transcript agent-panel-spotlight swap-fade ${visible ? 'is-visible' : ''}`}>
          <span className="agent-panel-transcript-label">
            <span className="material-symbols-outlined" style={{ fontSize: 13 }}>trending_up</span>
            REAL RESULTS
          </span>
          <span className="material-symbols-outlined agent-panel-spotlight-icon">insights</span>
          <p className="agent-panel-spotlight-text">{current.stat}</p>
        </div>

        <div className="agent-panel-route">
          <span className={`agent-panel-route-label swap-fade ${visible ? 'is-visible' : ''}`}>
            {isYearly ? 'Billed yearly' : 'Billed monthly'}
          </span>
          <span className={`agent-panel-route-synced ${isYearly ? 'show' : ''}`}>
            <span className="material-symbols-outlined" style={{ fontSize: 14 }}>check_circle</span>
            Save ${current.savings}/yr
          </span>
        </div>
      </div>

      <div className="iphone-frame">
        <span className="iphone-dynamic-island" aria-hidden="true" />
        <div className="iphone-screen">
          <div className="iphone-statusbar">
            <span className="call-phone-time">9:41</span>
          </div>

          <div className={`phone-plan-card swap-fade ${visible ? 'is-visible' : ''}`}>
            <span className="phone-plan-name">{current.name}</span>
            <p className="phone-plan-desc">{current.desc}</p>

            <div className="price-display">
              <span className="price-dollar">$</span>
              <span className="price-digits-group">
                {digits.map((d, i) => (
                  <DigitReel key={i} digit={d} />
                ))}
              </span>
              <span className="price-period">/mo</span>
            </div>

            <span className="phone-plan-rate">{current.rate}</span>

            <ul className="phone-plan-features">
              {current.featuresList.map((f) => (
                <li key={f}>
                  <span className="material-symbols-outlined">check_circle</span>
                  {f}
                </li>
              ))}
            </ul>

            <Link to="/contact" className="phone-plan-cta">Get Started</Link>
          </div>

          <div className="phone-plan-dots">
            {PRICE_CYCLE.map((p, i) => (
              <span key={p.plan} className={`phone-plan-dot ${i === Math.floor(step / 2) % PRICE_CYCLE.length ? 'active' : ''}`} />
            ))}
          </div>
        </div>
      </div>

      <div className="rate-snapshot">
        <span className="rate-snapshot-label">EFFECTIVE RATE BY PLAN</span>
        <div className="rate-snapshot-row">
          {PRICE_CYCLE.map((p) => (
            <span
              key={p.plan}
              className={`rate-snapshot-chip ${p.plan === current.plan ? 'active' : ''}`}
            >
              {p.name}
              <strong>${p.perMinuteRate.toFixed(2)}</strong>
              <span className="rate-snapshot-chip-sub">{p.includedMinutes} min</span>
              <span className="rate-snapshot-chip-sub">{p.agentCount} agents</span>
            </span>
          ))}
        </div>
        <span className={`rate-snapshot-note swap-fade ${visible ? 'is-visible' : ''}`}>
          {rateSavingsCents > 0
            ? `${rateSavingsCents}¢/min cheaper than Starter`
            : 'Your starting rate'}
        </span>
      </div>
    </div>
  )
}
