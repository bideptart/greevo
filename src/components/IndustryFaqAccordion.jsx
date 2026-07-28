import { useEffect, useRef, useState } from 'react'
import './IndustryFaqAccordion.css'

/**
 * A more formal, numbered accordion with a scroll-reveal entrance and an
 * accurate height-based expand animation (rather than a fixed max-height
 * that clips long answers). Shared by the Industries and FAQ pages.
 */
export default function IndustryFaqAccordion({ items, defaultOpen = 0 }) {
  const [openIndex, setOpenIndex] = useState(defaultOpen)
  const [visible, setVisible] = useState(false)
  const listRef = useRef(null)

  useEffect(() => {
    const el = listRef.current
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

  return (
    <div className={`ifaq-list ${visible ? 'is-visible' : ''}`} ref={listRef}>
      {items.map((item, i) => (
        <IndustryFaqItem
          key={item.q}
          item={item}
          index={i}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
        />
      ))}
    </div>
  )
}

function IndustryFaqItem({ item, index, isOpen, onToggle }) {
  const panelRef = useRef(null)
  const [maxHeight, setMaxHeight] = useState(0)

  useEffect(() => {
    const el = panelRef.current
    if (!el) return
    setMaxHeight(isOpen ? el.scrollHeight : 0)
  }, [isOpen, item.a])

  // Keep the expanded height correct if the viewport is resized (e.g.
  // the answer wraps onto a different number of lines).
  useEffect(() => {
    if (!isOpen) return
    const el = panelRef.current
    if (!el || typeof ResizeObserver === 'undefined') return
    const ro = new ResizeObserver(() => setMaxHeight(el.scrollHeight))
    ro.observe(el)
    return () => ro.disconnect()
  }, [isOpen])

  return (
    <div
      className={`ifaq-item ${isOpen ? 'is-open' : ''}`}
      style={{ '--item-i': index }}
    >
      <button type="button" className="ifaq-question" onClick={onToggle} aria-expanded={isOpen}>
        <span className="ifaq-index">{String(index + 1).padStart(2, '0')}</span>
        <span className="ifaq-question-text">{item.q}</span>
        <span className="ifaq-chevron" aria-hidden="true">
          <span className="material-symbols-outlined">expand_more</span>
        </span>
      </button>
      <div className="ifaq-answer-wrap" style={{ maxHeight: `${maxHeight}px` }}>
        <p className="ifaq-answer" ref={panelRef}>{item.a}</p>
      </div>
    </div>
  )
}
