import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './IndustriesPinSection.css'

const CARDS = [
  { n: '01', icon: 'account_balance', title: 'Finance', desc: 'Call recording, PII redaction, audit-ready compliance.' },
  { n: '02', icon: 'storefront', title: 'Retail & eCom', desc: 'Order-aware routing, cart-recovery SMS, unified inbox.' },
  { n: '03', icon: 'cloud', title: 'SaaS & Tech', desc: 'CRM-synced onboarding, renewals, and support in one thread.' },
  { n: '04', icon: 'local_shipping', title: 'Logistics', desc: 'Multilingual dispatch, bulk SMS, live delivery updates.' },
  { n: '05', icon: 'groups', title: 'Remote Teams', desc: 'One login for distributed agents across every time zone.' },
  { n: '06', icon: 'dns', title: 'Enterprise IT', desc: 'SSO, audit logs, and uptime SLAs built for scale.' },
]

export default function IndustriesPinSection({ eyebrow, title, description, ctaTo, ctaLabel }) {
  const pinRef = useRef(null)
  const wrapRef = useRef(null)
  const trackRef = useRef(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const pin = pinRef.current
    const wrap = wrapRef.current
    const track = trackRef.current
    if (!pin || !wrap || !track) return

    const mq = window.matchMedia('(min-width: 901px)')
    let ticking = false

    const update = () => {
      ticking = false
      if (!mq.matches) {
        track.style.transform = 'translate3d(0, 0, 0)'
        setProgress(0)
        return
      }
      const rect = pin.getBoundingClientRect()
      const scrollable = pin.offsetHeight - window.innerHeight
      const p = scrollable > 0 ? Math.min(1, Math.max(0, -rect.top / scrollable)) : 0
      const maxScroll = Math.max(0, track.scrollWidth - wrap.clientWidth)
      track.style.transform = `translate3d(${-p * maxScroll}px, 0, 0)`
      setProgress(p)
    }

    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(update)
      }
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    mq.addEventListener('change', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      mq.removeEventListener('change', onScroll)
    }
  }, [])

  const activeIndex = Math.min(CARDS.length - 1, Math.round(progress * (CARDS.length - 1)))

  return (
    <section className="industries-pin" ref={pinRef}>
      <div className="industries-pin-sticky">
        <div className="container">
          <div className="industries-home-grid">
            <div className="industries-home-text">
              <span className="eyebrow">{eyebrow}</span>
              <h2 className="section-title">{title}</h2>
              <p className="section-subtitle">{description}</p>

              <div className="industries-progress">
                <div className="industries-progress-track">
                  <div className="industries-progress-fill" style={{ width: `${progress * 100}%` }} />
                </div>
                <span className="industries-progress-count">
                  {String(activeIndex + 1).padStart(2, '0')} / {String(CARDS.length).padStart(2, '0')}
                </span>
              </div>

              <Link to={ctaTo} className="industries-home-cta">
                <span>{ctaLabel}</span>
                <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
              </Link>
            </div>

            <div className="industries-home-visual">
              <div className="industries-cards-outer">
                <div className="industries-cards-wrap" ref={wrapRef}>
                  <div className="industries-cards-track" ref={trackRef}>
                    {CARDS.map((c) => (
                      <div className="industries-card" key={c.n}>
                        <div className="industries-card-top">
                          <span className="industries-card-num">{c.n}</span>
                          <span className="material-symbols-outlined industries-card-icon">{c.icon}</span>
                        </div>
                        <div className="industries-card-visual">
                          <span className="material-symbols-outlined">{c.icon}</span>
                        </div>
                        <h3>{c.title}</h3>
                        <p>{c.desc}</p>
                        <span className="industries-card-link">
                          Learn more <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
