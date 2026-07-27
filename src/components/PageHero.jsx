import { Link } from 'react-router-dom'
import AccentTitle from './AccentTitle.jsx'
import './PageHero.css'

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  primaryCta = 'Start Free Trial',
  primaryTo = '/contact',
  secondaryCta = 'Book a Demo',
  secondaryTo = '/contact',
  visualIcon = 'auto_awesome',
  badges = [],
  reverse = false,
  stats = [],
  split = false,
}) {
  if (!split) {
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

  return (
    <section className="page-hero page-hero-split">
      <div className={`container page-hero-inner-split${reverse ? ' reverse' : ''}`}>
        <div className="page-hero-content">
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
          {stats.length > 0 && (
            <div className="page-hero-stats">
              {stats.map((s) => (
                <div className="page-hero-stat" key={s.label}>
                  <strong>{s.value}</strong>
                  <span>{s.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="page-hero-visual" aria-hidden="true">
          <div className="hv-blob blob-a" />
          <div className="hv-blob blob-b" />
          <div className="hv-blob blob-c" />

          <div className="hv-particles">
            {Array.from({ length: 8 }).map((_, i) => (
              <span className={`hv-particle particle-${i}`} key={i} />
            ))}
          </div>

          <div className="hv-orbit">
            <div className="hv-orbit-ring" />
            <div className="hv-orbit-dot" />
          </div>

          <div className="hv-stage">
            <div className="hv-card">
              <div className="hv-card-top">
                <span className="hv-traffic red" />
                <span className="hv-traffic yellow" />
                <span className="hv-traffic green" />
                <span className="hv-live"><span className="hv-live-dot" />Live</span>
              </div>
              <div className="hv-card-body">
                <div className="hv-avatar">
                  <span className="material-symbols-outlined">{visualIcon}</span>
                  <span className="hv-avatar-pulse" />
                </div>
                <div className="hv-card-text">
                  <strong>Call in progress</strong>
                  <span>Routed in 1.2s · 02:14</span>
                </div>
              </div>
              <div className="hv-waveform">
                {Array.from({ length: 18 }).map((_, i) => (
                  <span className="hv-bar" key={i} style={{ animationDelay: `${i * 0.07}s` }} />
                ))}
              </div>
            </div>
            <div className="hv-card-shadow" />
          </div>

          {badges.map((b, i) => (
            <div className={`hv-chip chip-${i}`} key={b.label}>
              <span className={`hv-chip-icon icon-${i % 4}`}>
                <span className="material-symbols-outlined">{b.icon}</span>
              </span>
              <span>{b.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
