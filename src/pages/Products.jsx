import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'

const PRODUCTS = [
  { to: '/products/cloud-phone', icon: 'call', title: 'Cloud Phone', desc: 'HD calling to 190+ countries, virtual numbers in 100+, and free number porting.' },
  { to: '/products/ai-receptionist', icon: 'auto_awesome', title: 'AI Receptionist', desc: 'Answers, qualifies, books, and summarizes every call — in any language.' },
  { to: '/products/sms-mms', icon: 'sms', title: 'Business SMS & MMS', desc: 'Two-way texting with media, shared team inboxes, and automated replies.' },
  { to: '/products/video-meetings', icon: 'videocam', title: 'Video Meetings', desc: '200-seat HD rooms with AI notes and live translation, built in.' },
]

export default function Products() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="One platform. Every way your customers reach you."
        subtitle="Cloud Phone and AI Contact Center ship as one product with one login. Pick the pieces you need today, turn on the rest whenever you're ready."
      />
      <section className="section">
        <div className="container feature-grid">
          {PRODUCTS.map((p) => (
            <Link key={p.to} to={p.to} className="card feature-card">
              <div className="feature-icon"><span className="material-symbols-outlined">{p.icon}</span></div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
