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

// Three concentric rings of capability icons orbiting a central core —
// a distinct motion language from the rise-and-pop bubbles (used on
// Industries), built for the Features hero.
const ORBIT_RINGS = [
  { radius: 62, duration: 16, reverse: false, icons: ['call', 'forum', 'videocam'] },
  { radius: 104, duration: 24, reverse: true, icons: ['sms', 'mail', 'monitoring'] },
  { radius: 146, duration: 32, reverse: false, icons: ['hub', 'devices'] },
]

// A fanned deck of glass cards in real 3D space (perspective + rotateY
// + translateZ), each carrying one capability — the whole deck sways
// gently and each card floats on its own stagger. Classical "product
// showcase" motion, distinct from both the bubble and orbit variants.
const CARD_DECK = [
  {
    icon: 'call',
    badge: 'GLOBAL CALLING',
    title: 'Cloud Phone',
    desc: 'HD voice to 190+ countries with automatic carrier failover.',
    stat: '190+',
    statLabel: 'countries covered',
  },
  {
    icon: 'auto_awesome',
    badge: 'AI RECEPTIONIST',
    title: 'Never Miss a Call',
    desc: 'Answers every line in parallel, qualifies, and books the meeting.',
    stat: '24/7',
    statLabel: 'always answering',
  },
  {
    icon: 'chat',
    badge: 'UNIFIED INBOX',
    title: 'One Thread, Every Channel',
    desc: 'Voice, SMS, WhatsApp, and chat in a single customer view.',
    stat: '6+',
    statLabel: 'channels, one queue',
  },
  {
    icon: 'monitoring',
    badge: 'LIVE ANALYTICS',
    title: 'Know Before They Complain',
    desc: 'CSAT, FCR, and SLA update the moment a call ends.',
    stat: '+24%',
    statLabel: 'first contact resolution',
  },
  {
    icon: 'hub',
    badge: 'INTEGRATIONS',
    title: 'Fits Your Stack',
    desc: 'Two-way sync to HubSpot, Salesforce, Zoho, and Pipedrive.',
    stat: '4',
    statLabel: 'native CRM integrations',
  },
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
  visualVariant = 'bubbles',
}) {
  const rotatingWords = badges.map((b) => b.label)
  const [wordIndex, setWordIndex] = useState(0)
  const [activeCard, setActiveCard] = useState(0)

  useEffect(() => {
    if (visualVariant !== 'cards3d') return
    const id = setInterval(() => {
      setActiveCard((i) => (i + 1) % CARD_DECK.length)
    }, 2000)
    return () => clearInterval(id)
  }, [visualVariant])

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
          <div className="hv-blob hv-blob-a" />
          <div className="hv-blob hv-blob-b" />
          <div className="hv-blob hv-blob-c" />

          <div className="hv-particles">
            {Array.from({ length: 8 }).map((_, i) => (
              <span className={`hv-particle particle-${i}`} key={i} />
            ))}
          </div>

          {visualVariant === 'cards3d' ? (
            <div className="card3d-scene">
              <span className="card3d-shape shape-circle-a" />
              <span className="card3d-shape shape-square-b" />
              <span className="card3d-shape shape-circle-c" />

              <div className="card3d-deck">
                {CARD_DECK.map((card, i) => {
                  const n = CARD_DECK.length
                  const stackPos = (i - activeCard + n) % n
                  const isFeatured = stackPos === 0
                  const x = stackPos * 46
                  const y = -stackPos * 34
                  const z = -stackPos * 30
                  const rotate = -12
                  const depthScale = 1 - stackPos * 0.05
                  const depthOpacity = 1 - stackPos * 0.06
                  return (
                    <div
                      className={`card3d-item ${isFeatured ? 'is-featured' : ''}`}
                      key={card.title}
                      style={{
                        '--card-i': i,
                        zIndex: n - stackPos,
                        transform: `translate3d(${x}px, ${y}px, ${z}px) rotate(${rotate}deg) scale(${depthScale})`,
                        opacity: depthOpacity,
                      }}
                    >
                      <div className="card3d-item-inner">
                        <div className="card3d-top">
                          <span className="card3d-badge">{card.badge}</span>
                          <span className="card3d-status" />
                        </div>
                        <span className="card3d-icon">
                          <span className="material-symbols-outlined">{card.icon}</span>
                        </span>
                        <h4 className="card3d-title">{card.title}</h4>
                        <p className="card3d-desc">{card.desc}</p>
                        <div className="card3d-chart">
                          {Array.from({ length: 8 }).map((_, j) => (
                            <span key={j} className="card3d-chart-bar" style={{ '--bar-i': j }} />
                          ))}
                        </div>
                        <div className="card3d-stat">
                          <strong>{card.stat}</strong>
                          <span>{card.statLabel}</span>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
              <div className="card3d-floor" />
            </div>
          ) : visualVariant === 'orbit' ? (
            <div className="orbit-scene">
              <div className="orbit-core">
                <span className="orbit-core-ring" />
                <span className="orbit-core-ring ring-2" />
                <span className="material-symbols-outlined orbit-core-icon">auto_awesome</span>
              </div>

              {ORBIT_RINGS.map((ring, ringIndex) => (
                <div
                  key={ringIndex}
                  className={`orbit-ring ${ring.reverse ? 'reverse' : ''}`}
                  style={{ width: ring.radius * 2, height: ring.radius * 2, '--ring-duration': `${ring.duration}s` }}
                >
                  {ring.icons.map((icon, i) => {
                    const angle = (360 / ring.icons.length) * i
                    return (
                      <div
                        key={icon}
                        className="orbit-icon-anchor"
                        style={{ transform: `rotate(${angle}deg) translate(${ring.radius}px) rotate(-${angle}deg)` }}
                      >
                        <span className={`orbit-icon-counter ${ring.reverse ? 'counter-reverse' : ''}`} style={{ '--ring-duration': `${ring.duration}s` }}>
                          <span className="orbit-icon-face">
                            <span className="material-symbols-outlined">{icon}</span>
                          </span>
                        </span>
                      </div>
                    )
                  })}
                </div>
              ))}

              <div className="orbit-floor" />
            </div>
          ) : (
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
          )}

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
