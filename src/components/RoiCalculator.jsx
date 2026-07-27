import { useMemo, useState } from 'react'
import './RoiCalculator.css'

const HUMAN_AGENT_COST = 3200
const GREEVO_SEAT_COST = 28

export default function RoiCalculator() {
  const [agents, setAgents] = useState(10)

  const { monthlySavings, annualSavings } = useMemo(() => {
    const humanCost = agents * HUMAN_AGENT_COST
    const greevoCost = agents * GREEVO_SEAT_COST
    const monthly = Math.max(humanCost - greevoCost, 0)
    return { monthlySavings: monthly, annualSavings: monthly * 12 }
  }, [agents])

  const format = (n) => `$${n.toLocaleString('en-US')}`

  return (
    <div className="card roi-calculator">
      <div className="roi-calculator-inputs">
        <span className="eyebrow">ROI Calculator</span>
        <h2 className="section-title" style={{ textAlign: 'left', marginTop: 8 }}>See what switching actually saves</h2>
        <p className="roi-calculator-desc">
          Estimate the monthly cost difference between a traditional answering team and Greevo's AI receptionist.
        </p>

        <label className="roi-slider-label" htmlFor="roi-agents">
          Team size (agents) <span className="roi-slider-value">{agents}</span>
        </label>
        <input
          id="roi-agents"
          type="range"
          min="1"
          max="50"
          value={agents}
          onChange={(e) => setAgents(Number(e.target.value))}
          className="roi-slider"
        />

        <p className="roi-calculator-note">
          Based on an average fully-loaded human agent cost of {format(HUMAN_AGENT_COST)}/mo vs. Greevo Growth at {format(GREEVO_SEAT_COST)}/user/mo. Estimate only — actual savings vary by call volume and staffing.
        </p>
      </div>

      <div className="roi-calculator-results">
        <div className="roi-result">
          <span className="roi-result-label">Estimated monthly savings</span>
          <span className="roi-result-value">{format(monthlySavings)}</span>
        </div>
        <div className="roi-result">
          <span className="roi-result-label">Estimated annual savings</span>
          <span className="roi-result-value roi-result-value-accent">{format(annualSavings)}</span>
        </div>
      </div>
    </div>
  )
}
