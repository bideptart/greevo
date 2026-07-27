import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import './AnimatedIndustries.css'

function randomTilt() {
  return Math.floor(Math.random() * 21) - 10
}

export default function AnimatedIndustries({ items, autoplay = true }) {
  const [active, setActive] = useState(0)

  const handleNext = () => setActive((prev) => (prev + 1) % items.length)
  const handlePrev = () => setActive((prev) => (prev - 1 + items.length) % items.length)
  const isActive = (index) => index === active

  useEffect(() => {
    if (!autoplay) return
    const interval = setInterval(handleNext, 2000)
    return () => clearInterval(interval)
  }, [autoplay, items.length])

  const current = items[active]

  return (
    <div className="ai-wrap">
      <div className="ai-grid">
        <div className="ai-image-stack">
          <AnimatePresence>
            {items.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9, rotate: randomTilt() }}
                animate={{
                  opacity: isActive(index) ? 1 : 0.7,
                  scale: isActive(index) ? 1 : 0.95,
                  rotate: isActive(index) ? 0 : randomTilt(),
                  zIndex: isActive(index) ? 999 : items.length + 2 - index,
                  y: isActive(index) ? [0, -30, 0] : 0,
                }}
                exit={{ opacity: 0, scale: 0.9, rotate: randomTilt() }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                className="ai-image-item"
              >
                <img src={item.image} alt={item.title} draggable={false} />
              </motion.div>
            ))}
          </AnimatePresence>
          <div className="ai-proof-float">
            <strong>{current.proof.value}</strong>
            <span>{current.proof.label}</span>
          </div>
        </div>

        <div className="ai-content">
          <motion.div
            key={active}
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <span className="eyebrow">{current.title}</span>
            <h3 className="ai-name">{current.title} teams choose Greevo for one reason</h3>
            <p className="ai-desc">{current.desc}</p>

            <p className="ai-quote">
              {current.pain.split(' ').map((word, index) => (
                <motion.span
                  key={`${active}-${index}`}
                  initial={{ filter: 'blur(10px)', opacity: 0, y: 5 }}
                  animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
                  transition={{ duration: 0.2, ease: 'easeInOut', delay: 0.02 * index }}
                  className="ai-quote-word"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </p>

            <ul className="check-list ai-points">
              {current.points.map((pt) => (
                <li key={pt}><span className="material-symbols-outlined">check_circle</span> {pt}</li>
              ))}
            </ul>

            <div className="ai-badge-row">
              {current.badges.map((b) => (
                <span className="ai-badge" key={b}>{b}</span>
              ))}
            </div>

            <Link to="/contact" className="btn btn-dark">Talk to sales</Link>
          </motion.div>

          <div className="ai-controls">
            <button type="button" onClick={handlePrev} className="ai-arrow-btn" aria-label="Previous industry">
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <div className="ai-dots">
              {items.map((item, index) => (
                <button
                  type="button"
                  key={item.title}
                  className={`ai-dot ${isActive(index) ? 'active' : ''}`}
                  aria-label={`Show ${item.title}`}
                  onClick={() => setActive(index)}
                />
              ))}
            </div>
            <button type="button" onClick={handleNext} className="ai-arrow-btn" aria-label="Next industry">
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
