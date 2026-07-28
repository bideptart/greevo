import './OutcomeTestimonials.css'

const OUTCOMES = [
  {
    stat: '35% fewer missed calls',
    quote: 'We stopped losing after-hours leads within the first week. The AI books the callback before we\'re even awake.',
    name: 'Priya Nathan',
    role: 'Ops Lead, Frameworks Legal',
    color: '#8b5cf6',
    color2: '#ec4899',
  },
  {
    stat: '4.5 hrs saved weekly',
    quote: 'Our front desk used to spend half the morning on intake questions. Now that\'s automated and they\'re back on billable work.',
    name: 'Diego Salas',
    role: 'Practice Manager, Salas & Wren',
    color: '#2563eb',
    color2: '#8b5cf6',
  },
  {
    stat: '$1,800/mo recovered',
    quote: 'Missed calls were costing us real bookings. Since switching, our answer rate is basically 100%.',
    name: 'Anika Fell',
    role: 'Owner, Fell Dental Group',
    color: '#10b981',
    color2: '#3b82f6',
  },
]

const REPEAT_COUNT = 6

export default function OutcomeTestimonials() {
  return (
    <div className="outcome-marquee">
      <div className="outcome-track">
        {Array.from({ length: REPEAT_COUNT }, () => OUTCOMES).flat().map((o, i) => (
          <div key={`${o.name}-${i}`} className="card outcome-card">
            <p className="outcome-stat" style={{ color: o.color }}>{o.stat}</p>
            <span className="outcome-quote-mark" style={{ color: o.color }} aria-hidden="true">&ldquo;</span>
            <p className="outcome-quote">{o.quote}</p>
            <div className="outcome-divider" />
            <div className="outcome-author">
              <span className="outcome-avatar" style={{ background: `linear-gradient(135deg, ${o.color}, ${o.color2})` }}>{o.name[0]}</span>
              <div>
                <div className="outcome-name">{o.name}</div>
                <div className="outcome-role">{o.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
