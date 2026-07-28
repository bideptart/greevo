import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AccentTitle from './AccentTitle.jsx'
import './PageHero.css'

function parseStat(value) {
  const match = String(value).match(/^([^\d]*)([\d,.]+)(.*)$/)
  if (!match) return { prefix: '', number: null, suffix: '', decimals: 0, hasComma: false }
  const [, prefix, numStr, suffix] = match
  return {
    prefix,
    suffix,
    number: parseFloat(numStr.replace(/,/g, '')),
    decimals: (numStr.split('.')[1] || '').length,
    hasComma: numStr.includes(','),
  }
}

function formatStatNumber(num, parsed) {
  const rounded = parsed.decimals ? num.toFixed(parsed.decimals) : String(Math.round(num))
  if (!parsed.hasComma) return rounded
  const [intPart, decPart] = rounded.split('.')
  const withCommas = Number(intPart).toLocaleString('en-US')
  return decPart ? `${withCommas}.${decPart}` : withCommas
}

function StatCounter({ value }) {
  const parsed = parseStat(value)
  const [display, setDisplay] = useState(parsed.number === null ? value : formatStatNumber(0, parsed))

  useEffect(() => {
    if (parsed.number === null) return undefined
    const duration = 1300
    const delay = 550
    const start = performance.now()
    let raf

    const tick = (now) => {
      const elapsed = now - start - delay
      if (elapsed < 0) {
        raf = requestAnimationFrame(tick)
        return
      }
      const t = Math.min(1, elapsed / duration)
      const eased = 1 - Math.pow(1 - t, 3)
      setDisplay(formatStatNumber(parsed.number * eased, parsed))
      if (t < 1) raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

  return <strong>{parsed.prefix}{display}{parsed.suffix}</strong>
}

const HV_BUBBLES = [
  { icon: 'call', label: 'Voice' },
  { icon: 'forum', label: 'Chat' },
  { icon: 'sms', label: 'SMS' },
  { icon: 'videocam', label: 'Video' },
  { icon: 'mail', label: 'Email' },
  { icon: 'support_agent', label: 'Support' },
]

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
  const rotatingWords = badges.map((b) => b.label)
  const [wordIndex, setWordIndex] = useState(0)

  useEffect(() => {
    if (!split || rotatingWords.length < 2) return
    const id = setInterval(() => {
      setWordIndex((i) => (i + 1) % rotatingWords.length)
    }, 2200)
    return () => clearInterval(id)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [split, rotatingWords.length])

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
      {/* Ambient background stack — sits behind the whole hero (both
          columns), independent of the product visual on the right. */}
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-bg-aurora aurora-1" />
        <div className="hero-bg-aurora aurora-2" />
        <div className="hero-bg-aurora aurora-3" />
        <div className="hero-bg-beam beam-1" />
        <div className="hero-bg-beam beam-2" />
        <div className="hero-bg-grid" />
        <div className="hero-bg-sparks">
          {Array.from({ length: 14 }).map((_, i) => (
            <span className={`hero-bg-spark spark-${i}`} key={i} />
          ))}
        </div>
      </div>

      <div className={`container page-hero-inner-split${reverse ? ' reverse' : ''}`}>
        <div className="page-hero-content">
          {eyebrow && (
            <span className="hero-badge">
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>auto_awesome</span>
              {eyebrow}
            </span>
          )}

          {rotatingWords.length > 1 && (
            <div className="hv-rotator">
              <span>Trusted by teams in</span>
              <span className="hv-rotator-stage">
                {rotatingWords.map((word, i) => {
                  const len = rotatingWords.length
                  const state = i === wordIndex ? 'active' : i === (wordIndex - 1 + len) % len ? 'prev' : 'next'
                  return (
                    <span className={`hv-rotator-word ${state}`} key={word}>{word}</span>
                  )
                })}
              </span>
            </div>
          )}

          <div className="hv-title-mask">
            <h1><AccentTitle title={title} /></h1>
          </div>
          {subtitle && <p className="page-hero-subtitle">{subtitle}</p>}
          <div className="page-hero-ctas">
            <Link to={primaryTo} className="btn btn-primary">{primaryCta}</Link>
            <Link to={secondaryTo} className="btn btn-ghost">{secondaryCta}</Link>
          </div>
          {stats.length > 0 && (
            <div className="page-hero-stats">
              {stats.map((s, i) => (
                <div className="page-hero-stat" key={s.label} style={{ '--stat-i': i }}>
                  <StatCounter value={s.value} />
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

          <div className="hv3d-scene">
            <div className="hv3d-core">
              <span className="hv3d-core-ring" />
              <span className="hv3d-core-ring ring-2" />
              <span className="hv3d-core-ring ring-3" />
              <span className="material-symbols-outlined hv3d-core-icon">auto_awesome</span>
            </div>

            {HV_BUBBLES.map((b, i) => (
              <div className={`hv3d-bubble bubble-${i}`} key={b.label}>
                <span className="hv3d-bubble-pop" />
                <span className="hv3d-bubble-face">
                  <span className="material-symbols-outlined">{b.icon}</span>
                  <span className="hv3d-bubble-label">{b.label}</span>
                </span>
              </div>
            ))}

            <div className="hv3d-floor" />
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
