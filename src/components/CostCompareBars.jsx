import { useEffect, useState } from 'react'
import './CostCompareBars.css'

const LEGACY_COST = 180
const GREEVO_COST = 28
const MAX = LEGACY_COST

export default function CostCompareBars() {
  const [grown, setGrown] = useState(false)

  useEffect(() => {
    const id = setTimeout(() => setGrown(true), 200)
    return () => clearTimeout(id)
  }, [])

  return (
    <div className="cost-compare-card">
      <span className="cost-compare-title">Cost per agent / month</span>

      <div className="cost-compare-bars">
        <div className="cost-bar-group">
          <div className="cost-bar-track">
            <div
              className="cost-bar legacy"
              style={{ height: grown ? `${(LEGACY_COST / MAX) * 100}%` : 0 }}
            />
          </div>
          <span className="cost-bar-value">${LEGACY_COST}</span>
          <span className="cost-bar-label">Legacy phone system</span>
        </div>

        <div className="cost-bar-group">
          <div className="cost-bar-track">
            <div
              className="cost-bar greevo"
              style={{ height: grown ? `${(GREEVO_COST / MAX) * 100}%` : 0 }}
            />
          </div>
          <span className="cost-bar-value accent">${GREEVO_COST}</span>
          <span className="cost-bar-label">Greevo</span>
        </div>
      </div>
    </div>
  )
}
