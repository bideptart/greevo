import { useEffect, useState } from 'react'
import './LiveCallShowcase.css'

const FLOAT_ICONS = [
  { icon: 'savings', className: 'float-icon float-a' },
  { icon: 'credit_card', className: 'float-icon float-b' },
  { icon: 'auto_awesome', className: 'float-icon float-c' },
  { icon: 'trending_up', className: 'float-icon float-d' },
]

const PRICE_CYCLE = [
  {
    plan: 'Starter plan',
    avatar: 'SP',
    users: 'Up to 5 users',
    popular: false,
    monthly: 31,
    yearly: 25,
    savings: 72,
    features: '1 local number, inbound & outbound calling, business SMS, standard voicemail.',
  },
  {
    plan: 'Growth plan',
    avatar: 'GP',
    users: 'Up to 25 users',
    popular: true,
    monthly: 93,
    yearly: 74,
    savings: 228,
    features: 'AI receptionist, CRM integrations, live analytics & call scoring, priority support.',
  },
  {
    plan: 'Scale plan',
    avatar: 'SC',
    users: 'Unlimited users',
    popular: false,
    monthly: 316,
    yearly: 253,
    savings: 756,
    features: 'Unlimited AI minutes, predictive dialer + WFM, dedicated success manager & SLA.',
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

export default function LiveCallShowcase() {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setStep((s) => (s + 1) % (PRICE_CYCLE.length * 2)), 2200)
    return () => clearInterval(id)
  }, [])

  const current = PRICE_CYCLE[Math.floor(step / 2) % PRICE_CYCLE.length]
  const isYearly = step % 2 === 1
  const value = isYearly ? current.yearly : current.monthly
  const digits = String(value).padStart(2, '0').split('').map(Number)

  return (
    <div className="live-call-showcase">
      {FLOAT_ICONS.map(({ icon, className }) => (
        <span key={icon} className={className} aria-hidden="true">
          <span className="material-symbols-outlined">{icon}</span>
        </span>
      ))}

      <div className="call-phone-card">
        <div className="call-phone-notch">
          <span className="call-phone-time">LIVE</span>
        </div>

        <span key={current.plan} className="call-caller-name plan-swap">{current.plan}</span>

        <div className="price-display">
          <span className="price-dollar">$</span>
          {digits.map((d, i) => (
            <DigitReel key={i} digit={d} />
          ))}
          <span className="price-period">/mo</span>
        </div>

        <div className={`price-toggle ${isYearly ? 'yearly' : ''}`}>
          <span className="price-toggle-thumb" />
          <span className="price-toggle-option">Monthly</span>
          <span className="price-toggle-option">Yearly</span>
        </div>

        <span className={`price-savings ${isYearly ? 'show' : ''}`}>
          <span className="material-symbols-outlined" style={{ fontSize: 13 }}>trending_down</span>
          Save ${current.savings}/yr
        </span>
      </div>

      <div className="agent-panel-card">
        <div className="agent-panel-titlebar">
          <span className="agent-panel-url">app.greevo.ai/billing</span>
          <span className="agent-panel-live">
            <span className="agent-panel-live-dot" /> Live
          </span>
        </div>

        <div key={current.plan} className="agent-panel-contact plan-swap">
          <span className="agent-panel-avatar">{current.avatar}</span>
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

        <div key={`${current.plan}-features`} className="agent-panel-transcript plan-swap">
          <span className="agent-panel-transcript-label">
            <span className="material-symbols-outlined" style={{ fontSize: 13 }}>checklist</span>
            WHAT&rsquo;S INCLUDED
          </span>
          <p className="agent-panel-transcript-text">{current.features}</p>
        </div>

        <div className="agent-panel-route">
          <span key={`${current.plan}-billing`} className="agent-panel-route-label plan-swap">
            {isYearly ? 'Billed yearly' : 'Billed monthly'}
          </span>
          <span className={`agent-panel-route-synced ${isYearly ? 'show' : ''}`}>
            <span className="material-symbols-outlined" style={{ fontSize: 14 }}>check_circle</span>
            Save ${current.savings}/yr
          </span>
        </div>
      </div>
    </div>
  )
}
