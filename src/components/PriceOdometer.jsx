import { useEffect, useState } from 'react'
import './PriceOdometer.css'

const CYCLE = [
  { plan: 'Starter', label: 'Billed monthly', value: 15, savings: 36 },
  { plan: 'Starter', label: 'Billed yearly', value: 12, savings: 36 },
  { plan: 'Growth', label: 'Billed monthly', value: 35, savings: 84 },
  { plan: 'Growth', label: 'Billed yearly', value: 28, savings: 84 },
  { plan: 'Scale', label: 'Billed monthly', value: 59, savings: 144 },
  { plan: 'Scale', label: 'Billed yearly', value: 47, savings: 144 },
]

function DigitReel({ digit }) {
  return (
    <span className="digit-reel">
      <span className="digit-track" style={{ transform: `translateY(-${digit}em)` }}>
        {Array.from({ length: 10 }, (_, i) => (
          <span key={i} className="digit-cell">{i}</span>
        ))}
      </span>
    </span>
  )
}

export default function PriceOdometer() {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setStep((s) => (s + 1) % CYCLE.length), 2600)
    return () => clearInterval(id)
  }, [])

  const current = CYCLE[step]
  const digits = String(current.value).padStart(2, '0').split('').map(Number)
  const isYearly = current.label === 'Billed yearly'

  return (
    <div className="price-odometer-card">
      <div className="price-odometer-header">
        <span className="price-odometer-badge">Live pricing</span>
        <span key={current.plan} className="price-odometer-plan plan-swap">{current.plan} plan</span>
      </div>

      <div className="price-odometer-display">
        <span className="price-odometer-dollar">$</span>
        {digits.map((d, i) => (
          <DigitReel key={i} digit={d} />
        ))}
        <span className="price-odometer-period">/user/mo</span>
      </div>

      <div className="price-odometer-footer">
        <div className={`price-odometer-switch ${isYearly ? 'yearly' : ''}`}>
          <span className="price-odometer-switch-thumb" />
          <span className="switch-option">Monthly</span>
          <span className="switch-option">Yearly</span>
        </div>
        <span className={`price-odometer-savings ${isYearly ? 'show' : ''}`}>
          <span className="material-symbols-outlined" style={{ fontSize: 14 }}>trending_down</span>
          You save ${current.savings}/yr
        </span>
      </div>
    </div>
  )
}
