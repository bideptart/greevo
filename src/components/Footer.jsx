import { Link } from 'react-router-dom'
import './Footer.css'

const COLUMNS = [
  {
    title: 'Platform',
    links: [
      { label: 'Features', to: '/features' },
      { label: 'Pricing', to: '/pricing' },
      { label: 'FAQ', to: '/faq' },
      { label: 'Blog', to: '/blog' },
    ],
  },
  {
    title: 'Industries',
    links: [
      { label: 'Finance', to: '/industries' },
      { label: 'Retail & eCom', to: '/industries' },
      { label: 'SaaS & Tech', to: '/industries' },
      { label: 'Logistics', to: '/industries' },
      { label: 'Remote Teams', to: '/industries' },
      { label: 'Enterprise IT', to: '/industries' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', to: '/' },
      { label: 'Blog', to: '/blog' },
      { label: 'Contact', to: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Terms of Service', to: '/contact' },
      { label: 'Privacy Policy', to: '/contact' },
      { label: 'Cookie Policy', to: '/contact' },
      { label: 'Data Processing Agreement', to: '/contact' },
      { label: 'All Policies →', to: '/contact' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="site-footer">
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
          <p>Cloud phone and AI contact center on one login. Calls, chat, SMS, video, and an AI receptionist — without the enterprise vendor markup.</p>
          <Link to="/contact" className="dashboard-btn">
            Get Started
            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>edit</span>
          </Link>
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
        <span>© {new Date().getFullYear()} Greevo.io · All rights reserved.</span>
      </div>
    </footer>
  )
}
