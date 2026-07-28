import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './StaggerStack.css'

/**
 * Horizontally-staggered card deck — cards fan out left and right of a
 * highlighted centre card, each slightly rotated with a folded top-right
 * corner. Click a side card (or use the arrows) to bring it to the front.
 * Modeled after https://21st.dev/@vaib215/components/stagger-testimonials
 * (that component's source is paywalled, so this is a visual recreation.)
 * No animation library — pure CSS transform + transition.
 */
export default function StaggerStack({ items }) {
  const [active, setActive] = useState(0)
  const [visible, setVisible] = useState(false)
  const deckRef = useRef(null)

  useEffect(() => {
    const el = deckRef.current
    // Fail open: if the element or the API is unavailable, show the deck
    // rather than leaving it stuck at opacity 0.
    if (!el || typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const count = items.length
  const next = () => setActive((i) => (i + 1) % count)
  const prev = () => setActive((i) => (i - 1 + count) % count)

  // Shortest signed distance from the active card, so the deck wraps
  // around instead of stretching further out with every advance.
  const offsetFrom = (index) => {
    let diff = index - active
    if (diff > count / 2) diff -= count
    if (diff < -count / 2) diff += count
    return diff
  }

  return (
    <div className={`stagger-deck ${visible ? 'is-visible' : ''}`} ref={deckRef}>
      <div className="stagger-deck-stage">
        {items.map((item, index) => {
          const offset = offsetFrom(index)
          const isActive = offset === 0
          return (
            <div
              key={item.title}
              className={`stagger-card ${isActive ? 'is-active' : ''}`}
              style={{
                '--offset': offset,
                '--card-i': index,
                zIndex: count - Math.abs(offset),
              }}
              onClick={isActive ? undefined : () => setActive(index)}
              role={isActive ? undefined : 'button'}
              tabIndex={isActive ? -1 : 0}
              onKeyDown={
                isActive
                  ? undefined
                  : (e) => (e.key === 'Enter' || e.key === ' ') && setActive(index)
              }
            >
              <span className="stagger-card-icon">
                <span className="material-symbols-outlined">{item.icon}</span>
              </span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <Link
                to={item.to}
                className="stagger-card-cta"
                onClick={(e) => e.stopPropagation()}
                tabIndex={isActive ? 0 : -1}
              >
                {item.cta} <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          )
        })}
      </div>

      <div className="stagger-deck-controls">
        <button type="button" className="stagger-arrow-btn" onClick={prev} aria-label="Previous card">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <div className="stagger-deck-dots">
          {items.map((item, index) => (
            <button
              type="button"
              key={item.title}
              className={`stagger-deck-dot ${index === active ? 'active' : ''}`}
              aria-label={`Show ${item.title}`}
              onClick={() => setActive(index)}
            />
          ))}
        </div>
        <button type="button" className="stagger-arrow-btn" onClick={next} aria-label="Next card">
          <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </div>
    </div>
  )
}
