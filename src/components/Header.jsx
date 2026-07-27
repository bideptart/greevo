import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Header.css'

const NAV_LINKS = [
  { to: '/features', label: 'Features' },
  { to: '/industries', label: 'Industries' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/blog', label: 'Blog' },
  { to: '/faq', label: 'FAQ' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="site-header">
      <div className="container site-header-inner">
        <Link to="/" className="brand" onClick={() => setMobileOpen(false)}>
          <img src="/logo.png" alt="Greevo" className="brand-logo" />
        </Link>

        <nav className="main-nav" aria-label="Primary">
          {NAV_LINKS.map((item) => (
            <NavLink key={item.to} to={item.to} className="nav-link">
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <Link to="/contact" className="header-login">Sign in</Link>
          <Link to="/contact" className="btn btn-primary header-cta">
            Get Started
            <span className="cta-arrow" aria-hidden="true">
              <span className="material-symbols-outlined" style={{ fontSize: 15 }}>arrow_forward</span>
            </span>
          </Link>
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
          {NAV_LINKS.map((item) => (
            <Link key={item.to} to={item.to} onClick={() => setMobileOpen(false)}>{item.label}</Link>
          ))}
          <Link to="/contact" className="mobile-signin" onClick={() => setMobileOpen(false)}>Sign in</Link>
          <Link to="/contact" className="btn btn-primary" onClick={() => setMobileOpen(false)}>Get Started</Link>
        </div>
      )}
    </header>
  )
}
