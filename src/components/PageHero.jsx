import { Link } from 'react-router-dom'
import AccentTitle from './AccentTitle.jsx'
import './PageHero.css'

export default function PageHero({ eyebrow, title, subtitle, primaryCta = 'Start Free Trial', primaryTo = '/contact', secondaryCta = 'Book a Demo', secondaryTo = '/contact' }) {
  return (
    <section className="page-hero">
      <div className="page-hero-blob page-blob-a" aria-hidden="true" />
      <div className="page-hero-blob page-blob-b" aria-hidden="true" />
      <div className="page-hero-blob page-blob-c" aria-hidden="true" />

      <div className="container page-hero-inner">
        {eyebrow && (
          <span className="hero-badge">
            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>auto_awesome</span>
            {eyebrow}
          </span>
        )}
        <h1><AccentTitle title={title} /></h1>
        {subtitle && <p className="page-hero-subtitle">{subtitle}</p>}
        <div className="page-hero-ctas">
          <Link to={primaryTo} className="btn btn-primary">{primaryCta}</Link>
          <Link to={secondaryTo} className="btn btn-ghost">{secondaryCta}</Link>
        </div>
      </div>
    </section>
  )
}
