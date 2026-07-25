import { useMemo, useState } from 'react'
import PageHero from '../components/PageHero.jsx'
import FaqAccordion from '../components/FaqAccordion.jsx'
import './Faq.css'

const FAQ_GROUPS = [
  {
    title: 'Getting started',
    items: [
      { q: "What is Greevo's cloud contact center platform?", a: 'Cloud phone and AI contact center in one product, on one login.' },
      { q: 'Do you offer a free trial?', a: '14-day free trial on every plan — no credit card required.' },
      { q: 'How fast can we go live?', a: 'Median setup time is under 4 minutes, start to first call.' },
    ],
  },
  {
    title: 'Numbers & calling',
    items: [
      { q: 'Can I keep my existing business number?', a: 'Yes — free porting, usually done within a few business days.' },
      { q: 'How many countries can I call?', a: 'HD voice reaches 190+ countries, with local numbers in 100+.' },
      { q: 'Do I need any hardware?', a: 'No. Greevo runs from the browser, desktop, or mobile app.' },
    ],
  },
  {
    title: 'AI receptionist',
    items: [
      { q: 'Does the AI cost extra?', a: 'No — included on every plan, with a minute allotment by tier.' },
      { q: 'What languages does it support?', a: 'Auto-detects the caller\'s language across 30+ supported.' },
      { q: 'Can it hand off to a human?', a: 'Yes, anytime, with full conversation context carried over.' },
    ],
  },
  {
    title: 'Billing & security',
    items: [
      { q: 'Can I change plans later?', a: 'Yes, upgrade or downgrade anytime; billing prorates automatically.' },
      { q: 'Is it secure enough for regulated industries?', a: 'Yes — encryption, PII redaction, and audit logs on every plan.' },
      { q: 'Is there a contract?', a: 'No long-term contract on any plan. Cancel anytime.' },
    ],
  },
]

export default function Faq() {
  const [query, setQuery] = useState('')

  const filteredGroups = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return FAQ_GROUPS
    return FAQ_GROUPS
      .map((group) => ({
        ...group,
        items: group.items.filter((item) => item.q.toLowerCase().includes(q) || item.a.toLowerCase().includes(q)),
      }))
      .filter((group) => group.items.length > 0)
  }, [query])

  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="The questions teams ask on the first call"
        subtitle="Can't find what you're looking for? Our team answers real questions, not tickets."
        primaryCta="Get Started"
        secondaryCta="Contact Us"
      />

      <section className="section">
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
          <form className="faq-search" onSubmit={(e) => e.preventDefault()}>
            <span className="material-symbols-outlined">search</span>
            <input
              type="text"
              placeholder="Search questions..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">
              Search <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
            </button>
          </form>

          {filteredGroups.length === 0 ? (
            <p style={{ color: 'var(--text-muted)', textAlign: 'center' }}>No questions match "{query}".</p>
          ) : (
            filteredGroups.map((group) => (
              <div key={group.title}>
                <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 20 }}>{group.title}</h2>
                <FaqAccordion items={group.items} />
              </div>
            ))
          )}
        </div>
      </section>
    </>
  )
}
