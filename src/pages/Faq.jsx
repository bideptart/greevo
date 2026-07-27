import { useMemo, useState } from 'react'
import PageHero from '../components/PageHero.jsx'
import FaqAccordion from '../components/FaqAccordion.jsx'
import './Faq.css'

const FAQ_GROUPS = [
  {
    title: 'Getting started',
    items: [
      { q: "What is Greevo's cloud contact center platform?", a: 'Greevo combines a cloud phone system and an AI contact center in one product. Calls, chat, SMS, video, analytics, and an AI receptionist all live in one place, on a single login.' },
      { q: 'Do you offer a free trial?', a: 'Yes, every plan starts with a 14-day free trial and every feature is unlocked from day one — no credit card required to get started.' },
      { q: 'How fast can we go live?', a: "Median setup time is under 4 minutes: sign up, invite your team, pick a number, and you're ready to take your first call." },
    ],
  },
  {
    title: 'Numbers & calling',
    items: [
      { q: 'Can I keep my existing business number?', a: 'Yes — porting your number is free and usually completes within a few business days, with no downtime for inbound calls in the meantime.' },
      { q: 'How many countries can I call?', a: 'HD voice calling reaches 190+ countries worldwide, with local virtual numbers available in more than 100 of them.' },
      { q: 'Do I need any hardware?', a: 'No. Greevo runs entirely from the browser, desktop app, or mobile app — desk phones are optional, not required to get started.' },
    ],
  },
  {
    title: 'AI receptionist',
    items: [
      { q: 'Does the AI cost extra?', a: 'No — the AI receptionist is included on every plan, with a monthly minute allotment that scales up as you move to a higher tier.' },
      { q: 'What languages does it support?', a: "The receptionist automatically detects the caller's language and responds natively, with real-time translation available for your team." },
      { q: 'Can it hand off to a human?', a: 'Yes, at any point either the caller or the AI can escalate to a live agent, with the full context of the call carried over automatically.' },
    ],
  },
  {
    title: 'Billing & security',
    items: [
      { q: 'Can I change plans later?', a: "Yes, you can upgrade or downgrade anytime from your account settings, and billing prorates automatically so you're never overcharged." },
      { q: 'Is it secure enough for regulated industries?', a: 'Yes — encryption in transit and at rest, PII redaction, and audit logs are included on every plan by default, not sold as a separate add-on.' },
      { q: 'Is there a contract?', a: 'No long-term contract is required on any plan. Cancel anytime directly from your account settings with no cancellation fee.' },
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
