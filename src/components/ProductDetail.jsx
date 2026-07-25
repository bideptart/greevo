import { Link } from 'react-router-dom'
import PageHero from './PageHero.jsx'

export default function ProductDetail({ eyebrow, title, subtitle, heroIcon, blocks, faqs }) {
  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} subtitle={subtitle} />

      {blocks.map((block, i) => (
        <section className="section" key={block.heading}>
          <div className="container">
            <div className={`two-col ${i % 2 === 1 ? 'reverse' : ''}`}>
              <div>
                <h2>{block.heading}</h2>
                <p>{block.body}</p>
                <ul className="check-list">
                  {block.points.map((pt) => (
                    <li key={pt}><span className="material-symbols-outlined">check_circle</span> {pt}</li>
                  ))}
                </ul>
              </div>
              <div className="two-col-media" aria-hidden="true">
                <span className="material-symbols-outlined" style={{ fontSize: 72, color: 'var(--accent-violet-dark)' }}>
                  {block.icon || heroIcon}
                </span>
              </div>
            </div>
          </div>
        </section>
      ))}

      {faqs && (
        <section className="section" style={{ background: 'var(--surface-alt)' }}>
          <div className="container">
            <div className="stack-center">
              <span className="eyebrow">FAQ</span>
              <h2 className="section-title">Common questions</h2>
            </div>
            <div style={{ maxWidth: 720, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 16 }}>
              {faqs.map((f) => (
                <div key={f.q} className="card" style={{ padding: 24 }}>
                  <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 8 }}>{f.q}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: 14.5, lineHeight: 1.6 }}>{f.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="section">
        <div className="container">
          <div className="cta-band">
            <h2>See {title.split('—')[0].trim()} in action</h2>
            <p>Book a 20-minute walkthrough with our team, no pressure, no pitch deck.</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">Start Free Trial</Link>
              <Link to="/contact" className="btn btn-ghost" style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', borderColor: 'rgba(255,255,255,0.2)' }}>Book a Demo</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
