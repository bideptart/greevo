import { useState } from 'react'
import './FaqAccordion.css'

export default function FaqAccordion({ items, defaultOpen = -1 }) {
  const [openIndex, setOpenIndex] = useState(defaultOpen)

  return (
    <div className="faq-accordion">
      {items.map((item, i) => {
        const isOpen = openIndex === i
        return (
          <div key={item.q} className={`faq-item ${isOpen ? 'open' : ''}`}>
            <button type="button" className="faq-question" onClick={() => setOpenIndex(isOpen ? -1 : i)}>
              <span className="material-symbols-outlined faq-caret">play_arrow</span>
              <span>{item.q}</span>
            </button>
            <div className="faq-answer-wrap">
              <div className="faq-answer-inner">
                <p className="faq-answer">{item.a}</p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
