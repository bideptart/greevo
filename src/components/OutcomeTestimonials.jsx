import './OutcomeTestimonials.css'

const OUTCOMES = [
  {
    stat: '35% fewer missed calls',
    quote: 'We stopped losing after-hours leads within the first week. The AI books the callback before we\'re even awake.',
    name: 'Priya Nathan',
    role: 'Ops Lead, Frameworks Legal',
  },
  {
    stat: '4.5 hrs saved weekly',
    quote: 'Our front desk used to spend half the morning on intake questions. Now that\'s automated and they\'re back on billable work.',
    name: 'Diego Salas',
    role: 'Practice Manager, Salas & Wren',
  },
  {
    stat: '$1,800/mo recovered',
    quote: 'Missed calls were costing us real bookings. Since switching, our answer rate is basically 100%.',
    name: 'Anika Fell',
    role: 'Owner, Fell Dental Group',
  },
]

export default function OutcomeTestimonials() {
  return (
    <div className="outcome-grid">
      {OUTCOMES.map((o) => (
        <div key={o.name} className="card outcome-card">
          <p className="outcome-stat">{o.stat}</p>
          <p className="outcome-quote">"{o.quote}"</p>
          <div className="outcome-author">
            <span className="outcome-avatar">{o.name[0]}</span>
            <div>
              <div className="outcome-name">{o.name}</div>
              <div className="outcome-role">{o.role}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
