import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const COLUMNS = [
  {
    title: 'Cloud Phone',
    links: [
      { label: 'Business Phone + AI', to: '/products/cloud-phone' },
      { label: 'Customer Engagement', to: '/products/cloud-phone' },
      { label: 'SMS & MMS', to: '/products/sms-mms' },
      { label: 'Team Chat', to: '/products/cloud-phone' },
      { label: 'Video Meetings', to: '/products/video-meetings' },
      { label: 'Website Chatbot', to: '/products/cloud-phone' },
    ],
  },
  {
    title: 'Contact Center',
    links: [
      { label: 'Omnichannel', to: '/products/cloud-phone' },
      { label: 'Outbound Dialer', to: '/products/cloud-phone' },
      { label: 'Agent Assist', to: '/products/ai-receptionist' },
      { label: 'Supervisor Assist', to: '/products/cloud-phone' },
      { label: 'Interaction Analytics', to: '/products/cloud-phone' },
    ],
  },
  {
    title: 'AI',
    links: [
      { label: 'Greevo AI', to: '/products/ai-receptionist' },
      { label: 'AI Receptionist', to: '/products/ai-receptionist' },
      { label: 'AI Assistant', to: '/products/ai-receptionist' },
      { label: 'Conversational AI', to: '/products/ai-receptionist' },
      { label: 'AI Agent Assist', to: '/products/ai-receptionist' },
      { label: 'AI Sentiment', to: '/products/ai-receptionist' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'All Solutions', to: '/solutions' },
      { label: 'Finance', to: '/solutions' },
      { label: 'Retail & eCom', to: '/solutions' },
      { label: 'SaaS & Tech', to: '/solutions' },
      { label: 'Logistics', to: '/solutions' },
      { label: 'Enterprise IT', to: '/solutions' },
    ],
  },
  {
    title: 'Voice & Numbers',
    links: [
      { label: 'Virtual Numbers by Country', to: '/products/cloud-phone' },
      { label: 'US Virtual Number', to: '/products/cloud-phone' },
      { label: 'UK Virtual Number', to: '/products/cloud-phone' },
      { label: 'India Virtual Number', to: '/products/cloud-phone' },
      { label: 'Wholesale VoIP Rates', to: '/pricing' },
      { label: 'Country Codes', to: '/products/cloud-phone' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Greevo', to: '/about' },
      { label: 'Blog', to: '/blog' },
      { label: 'Case Studies', to: '/blog' },
      { label: 'Pricing', to: '/pricing' },
      { label: 'Compare', to: '/pricing' },
      { label: 'Contact', to: '/contact' },
    ],
  },
]

const TRUST_BADGES = ['SOC 2 Type II', 'PCI-DSS', 'ISO 27001', 'STIR/SHAKEN']

const LEGAL_LINKS = ['Security', 'Privacy Policy', 'Terms', 'DPA', 'GDPR', 'Cookie Policy']

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    setSubscribed(true)
  }

  return (
    <footer className="site-footer">
      <div className="container newsletter-row">
        <div>
          <span className="eyebrow footer-eyebrow">Newsletter</span>
          <h3>The UCaaS playbook, every Tuesday.</h3>
          <p>One short email — product teardowns, AI receptionist case studies, migration playbooks. No spam.</p>
        </div>
        {subscribed ? (
          <span className="subscribe-success">
            <span className="material-symbols-outlined">check_circle</span> You're subscribed
          </span>
        ) : (
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <input
              type="email"
              required
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
        )}
      </div>

      <div className="container trust-row">
        <span className="trust-label">Trusted &amp; Compliant</span>
        <div className="trust-badges">
          {TRUST_BADGES.map((badge) => (
            <span key={badge} className="trust-badge">{badge}</span>
          ))}
        </div>
      </div>

      <div className="container footer-top">
        <div className="footer-brand">
          <Link to="/" className="brand">
            <span className="brand-mark" aria-hidden="true">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="14" width="4" height="8" rx="1" fill="currentColor" />
                <rect x="10" y="9" width="4" height="13" rx="1" fill="currentColor" />
                <rect x="18" y="3" width="4" height="19" rx="1" fill="currentColor" />
              </svg>
            </span>
            <span className="brand-name">Greevo</span>
          </Link>
          <p>Cloud phone and AI contact center. Our AI receptionist answers every call so your team can focus on the conversations that matter.</p>
          <div className="footer-brand-ctas">
            <Link to="/contact" className="btn btn-outline">Book a demo</Link>
            <Link to="/contact" className="btn btn-primary">Start free trial</Link>
          </div>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.title} className="footer-col">
            <h4>{col.title}</h4>
            <ul>
              {col.links.map((link) => (
                <li key={link.label}><Link to={link.to}>{link.label}</Link></li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="container footer-bottom">
        <div className="footer-bottom-left">
          <span className="status-dot" aria-hidden="true" />
          <span>All systems operational</span>
        </div>
        <div className="footer-legal">
          {LEGAL_LINKS.map((label) => (
            <Link key={label} to="/about">{label}</Link>
          ))}
        </div>
      </div>

      <div className="container footer-copyright">
        <span>© {new Date().getFullYear()} Greevo. All rights reserved.</span>
        <span className="footer-signoff">Made with care for builders who answer every call.</span>
      </div>
    </footer>
  )
}
