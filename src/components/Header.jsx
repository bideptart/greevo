import { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

const MENUS = {
  products: {
    columns: [
      {
        heading: 'Cloud Phone',
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
        heading: 'Contact Center',
        links: [
          { label: 'Omnichannel', to: '/products/cloud-phone' },
          { label: 'Outbound Dialer', to: '/products/cloud-phone' },
          { label: 'Agent Assist', to: '/products/ai-receptionist' },
          { label: 'Supervisor Assist', to: '/products/cloud-phone' },
          { label: 'Interaction Analytics', to: '/products/cloud-phone' },
        ],
      },
      {
        heading: 'AI',
        links: [
          { label: 'Greevo AI Receptionist', to: '/products/ai-receptionist' },
          { label: 'AI Assistant', to: '/products/ai-receptionist' },
          { label: 'Conversational AI', to: '/products/ai-receptionist' },
          { label: 'AI Agent Assist', to: '/products/ai-receptionist' },
          { label: 'AI Sentiment', to: '/products/ai-receptionist' },
        ],
      },
    ],
    footer: { title: 'Greevo AI is included on every plan.', subtitle: '14-day free trial, no card required.', cta: 'Compare plans', ctaTo: '/pricing' },
  },
  features: {
    columns: [
      {
        heading: 'Voice',
        links: [
          { label: 'Call Recording', to: '/products/cloud-phone' },
          { label: 'Auto-attendant / IVR', to: '/products/cloud-phone' },
          { label: 'Number Porting', to: '/products/cloud-phone' },
          { label: 'Toll-free Numbers', to: '/products/cloud-phone' },
        ],
      },
      {
        heading: 'Team',
        links: [
          { label: 'Supervisor Tools', to: '/products/cloud-phone' },
          { label: 'Live Analytics', to: '/products/cloud-phone' },
          { label: 'CRM Integrations', to: '/products/cloud-phone' },
          { label: 'Mobile + Desktop Apps', to: '/products/cloud-phone' },
        ],
      },
    ],
  },
  solutions: {
    columns: [
      {
        heading: 'By Industry',
        links: [
          { label: 'Finance', to: '/solutions' },
          { label: 'Retail & eCom', to: '/solutions' },
          { label: 'SaaS & Tech', to: '/solutions' },
          { label: 'Logistics', to: '/solutions' },
        ],
      },
      {
        heading: 'By Team',
        links: [
          { label: 'Sales Teams', to: '/solutions' },
          { label: 'Support Teams', to: '/solutions' },
          { label: 'Remote Teams', to: '/solutions' },
          { label: 'Enterprise IT', to: '/solutions' },
        ],
      },
    ],
    footer: { title: 'Built for the regulations and rhythms of your industry.', subtitle: 'Compliance-ready for finance, omnichannel for retail, API-first for SaaS.', cta: 'See all solutions', ctaTo: '/solutions' },
  },
  tools: {
    columns: [
      {
        heading: 'Voice & Numbers',
        links: [
          { label: 'Virtual Numbers by Country', to: '/products/cloud-phone' },
          { label: 'US Virtual Number', to: '/products/cloud-phone' },
          { label: 'UK Virtual Number', to: '/products/cloud-phone' },
          { label: 'India Virtual Number', to: '/products/cloud-phone' },
        ],
      },
      {
        heading: 'Wholesale',
        links: [
          { label: 'Wholesale VoIP Rates', to: '/pricing' },
          { label: 'Wholesale Voice', to: '/pricing' },
          { label: 'Country Codes', to: '/products/cloud-phone' },
        ],
      },
    ],
  },
  resources: {
    columns: [
      {
        heading: 'Learn',
        links: [
          { label: 'Blog', to: '/blog' },
          { label: 'Case Studies', to: '/blog' },
          { label: 'Events', to: '/blog' },
          { label: 'Help Center', to: '/blog' },
        ],
      },
      {
        heading: 'Company',
        links: [
          { label: 'About Greevo', to: '/about' },
          { label: 'Pricing', to: '/pricing' },
          { label: 'Compare Plans', to: '/pricing' },
          { label: 'Contact Sales', to: '/contact' },
        ],
      },
    ],
  },
}

const NAV_ORDER = [
  { key: 'products', label: 'Products' },
  { key: 'features', label: 'Features' },
  { key: 'solutions', label: 'Solutions' },
  { key: 'tools', label: 'Tools' },
  { key: 'resources', label: 'Resources' },
]

export default function Header() {
  const [openMenu, setOpenMenu] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(null)
  const [langOpen, setLangOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container site-header-inner">
        <Link to="/" className="brand" onClick={() => setMobileOpen(false)}>
          <span className="brand-mark" aria-hidden="true">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="14" width="4" height="8" rx="1" fill="currentColor" />
              <rect x="10" y="9" width="4" height="13" rx="1" fill="currentColor" />
              <rect x="18" y="3" width="4" height="19" rx="1" fill="currentColor" />
            </svg>
          </span>
          <span className="brand-text">
            <span className="brand-name">Greevo</span>
            <span className="brand-tagline">Cloud Phone &amp; AI</span>
          </span>
        </Link>

        <nav className="main-nav" aria-label="Primary">
          {NAV_ORDER.map((item) => (
            <div
              key={item.key}
              className="nav-item"
              onMouseEnter={() => setOpenMenu(item.key)}
              onMouseLeave={() => setOpenMenu((v) => (v === item.key ? null : v))}
            >
              <button
                type="button"
                className="nav-btn"
                aria-expanded={openMenu === item.key}
                onClick={() => setOpenMenu(item.key)}
              >
                {item.label}
                <span className="material-symbols-outlined caret">expand_more</span>
              </button>

              {openMenu === item.key && (
                <div className="mega-panel">
                  <div className="mega-panel-columns">
                    {MENUS[item.key].columns.map((col) => (
                      <div className="mega-col" key={col.heading}>
                        <span className="mega-col-heading">{col.heading}</span>
                        {col.links.map((link) => (
                          <Link key={link.label} to={link.to} className="mega-link" onClick={() => setOpenMenu(null)}>
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                  {MENUS[item.key].footer && (
                    <div className="mega-footer">
                      <div>
                        <strong>{MENUS[item.key].footer.title}</strong>
                        <span>{MENUS[item.key].footer.subtitle}</span>
                      </div>
                      <Link to={MENUS[item.key].footer.ctaTo} className="btn btn-outline" onClick={() => setOpenMenu(null)}>
                        {MENUS[item.key].footer.cta}
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}

          <Link to="/pricing" className="nav-btn nav-link">Pricing</Link>
        </nav>

        <div className="header-actions">
          <div
            className="lang-item"
            onMouseEnter={() => setLangOpen(true)}
            onMouseLeave={() => setLangOpen(false)}
          >
            <button type="button" className="lang-btn" onClick={() => setLangOpen((v) => !v)}>
              <span className="flag" aria-hidden="true">🇺🇸</span>
              English
              <span className="material-symbols-outlined caret">expand_more</span>
            </button>
            {langOpen && (
              <div className="lang-panel">
                <button type="button" className="lang-option active">🇺🇸 English</button>
                <button type="button" className="lang-option">🇪🇸 Español</button>
                <button type="button" className="lang-option">🇫🇷 Français</button>
                <button type="button" className="lang-option">🇮🇳 हिन्दी</button>
              </div>
            )}
          </div>
          <Link to="/contact" className="header-login">Login</Link>
          <Link to="/contact" className="btn btn-primary header-cta">Get Started Free Trial</Link>
        </div>

        <button
          type="button"
          className="mobile-toggle"
          aria-label="Toggle menu"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className="material-symbols-outlined">{mobileOpen ? 'close' : 'menu'}</span>
        </button>
      </div>

      {mobileOpen && (
        <div className="mobile-panel">
          <Link to="/products" onClick={() => setMobileOpen(false)}>Products</Link>
          <Link to="/products/cloud-phone" onClick={() => setMobileOpen(false)}>Features</Link>
          <Link to="/solutions" onClick={() => setMobileOpen(false)}>Solutions</Link>
          <Link to="/products/cloud-phone" onClick={() => setMobileOpen(false)}>Tools</Link>
          <Link to="/blog" onClick={() => setMobileOpen(false)}>Resources</Link>
          <Link to="/pricing" onClick={() => setMobileOpen(false)}>Pricing</Link>
          <Link to="/contact" onClick={() => setMobileOpen(false)}>Login</Link>
          <Link to="/contact" className="btn btn-primary" onClick={() => setMobileOpen(false)}>Get Started Free Trial</Link>
        </div>
      )}
    </header>
  )
}
