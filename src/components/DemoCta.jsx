import { Link, useLocation } from 'react-router-dom'
import './DemoCta.css'

const CONTENT = {
  '/': {
    badge: 'Live demo · No signup',
    title: ['See Greevo running ', 'in real time', '.'],
    desc: "Spin up a live workspace with your number, your team, and your AI receptionist — no sales call required.",
    points: ['14-day free trial', 'No hardware to install', 'Cancel anytime', 'Number porting included'],
    primary: { label: 'Get started', to: '/contact' },
    secondary: { label: 'View pricing', to: '/pricing' },
  },
  '/features': {
    badge: 'Live walkthrough',
    title: ['Want to ', 'try it hands-on?', ''],
    desc: 'Book a 20-minute walkthrough of call routing, the AI receptionist, and live analytics — on your own numbers.',
    points: ['No pressure, no pitch deck', 'Setup takes under 4 minutes', 'Every feature unlocked from day one'],
    primary: { label: 'Book a walkthrough', to: '/contact' },
    secondary: { label: 'View pricing', to: '/pricing' },
  },
  '/industries': {
    badge: 'Tell us more',
    title: ["Don't see ", 'your industry?', ''],
    desc: "We've deployed Greevo for finance, retail, SaaS, logistics, and more. Tell us how your team communicates today and we'll have a workspace ready in 24 hours.",
    points: ['14-day free trial', 'No hardware to install', 'Cancel anytime', 'Number porting included'],
    primary: { label: 'Get started', to: '/contact' },
    secondary: { label: 'View pricing', to: '/pricing' },
  },
  '/pricing': {
    badge: 'Still comparing plans?',
    title: ['Talk to ', 'a real human', '.'],
    desc: 'Get a tailored recommendation for your team size and call volume — no obligation, no pushy sales pitch.',
    points: ['Custom quote in one call', 'Volume discounts above 25 seats', 'Month-to-month, cancel anytime'],
    primary: { label: 'Talk to sales', to: '/contact' },
    secondary: { label: 'Read FAQ', to: '/faq' },
  },
  '/blog': {
    badge: 'Enjoying the read?',
    title: ['Put it into ', 'practice', '.'],
    desc: 'See the features from this blog running on your own number — most teams are live within the hour.',
    points: ['14-day free trial', 'No credit card required', 'Cancel anytime'],
    primary: { label: 'Start free trial', to: '/contact' },
    secondary: { label: 'View pricing', to: '/pricing' },
  },
  '/faq': {
    badge: 'Still unsure?',
    title: ['Ask us ', 'directly', '.'],
    desc: 'Skip the search — a real person on our team can answer in minutes, not tickets.',
    points: ['Live chat, 24/7', 'Reply within one business day', 'No bot loops'],
    primary: { label: 'Contact us', to: '/contact' },
    secondary: { label: 'View pricing', to: '/pricing' },
  },
  '/contact': {
    badge: 'Not ready to talk?',
    title: ['Explore ', 'on your own first', '.'],
    desc: 'Check out full feature breakdowns and transparent pricing before you reach out — no commitment needed.',
    points: ['Transparent per-seat pricing', 'Full feature list, no fine print', 'Cancel anytime, no lock-in'],
    primary: { label: 'See pricing', to: '/pricing' },
    secondary: { label: 'Explore features', to: '/features' },
  },
}

const DEFAULT_CONTENT = {
  badge: 'Live demo · No signup',
  title: ["Let's get you ", 'back on track', '.'],
  desc: "Head back home to explore Greevo's cloud phone and AI contact center platform.",
  points: ['14-day free trial', 'No hardware to install', 'Cancel anytime'],
  primary: { label: 'Back to home', to: '/' },
  secondary: { label: 'View pricing', to: '/pricing' },
}

export default function DemoCta() {
  const { pathname } = useLocation()
  const content = CONTENT[pathname] || DEFAULT_CONTENT
  const [before, accent, after] = content.title

  return (
    <section className="section-tight">
      <div className="container">
        <div className="demo-cta">
          <div className="demo-cta-text">
            <span className="demo-cta-badge">
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>auto_awesome</span>
              {content.badge}
            </span>
            <h2>{before}<span className="accent">{accent}</span>{after}</h2>
            <p>{content.desc}</p>
            <ul className="demo-cta-points">
              {content.points.map((pt) => (
                <li key={pt}><span className="dot" />{pt}</li>
              ))}
            </ul>
          </div>
          <div className="demo-cta-actions">
            <Link to={content.primary.to} className="btn btn-primary">
              {content.primary.label} <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
            </Link>
            <Link to={content.secondary.to} className="btn demo-cta-secondary">{content.secondary.label}</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
