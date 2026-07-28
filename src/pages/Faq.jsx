import { useMemo, useState } from 'react'
import PageHero from '../components/PageHero.jsx'
import IndustryFaqAccordion from '../components/IndustryFaqAccordion.jsx'
import './Faq.css'

const FAQ_GROUPS = [
  {
    title: 'Getting started',
    items: [
      { q: "What is Greevo's cloud contact center platform?", a: 'Greevo combines a cloud phone system and an AI contact center in one product. Calls, chat, SMS, video, analytics, and an AI receptionist all live in one place, on a single login.' },
      { q: 'Do you offer a free trial?', a: 'Yes, every plan starts with a 14-day free trial and every feature is unlocked from day one — no credit card required to get started.' },
      { q: 'How fast can we go live?', a: "Median setup time is under 4 minutes: sign up, invite your team, pick a number, and you're ready to take your first call." },
      { q: 'Do I need to know how to code to set up call routing?', a: 'No — the IVR and routing rules are built on a drag-and-drop visual canvas. Most teams have their first dial plan working without opening a single ticket.' },
      { q: 'Can I invite my whole team at once?', a: "Yes, bulk-invite by email or CSV upload, and each teammate picks their own extension and voicemail greeting the first time they sign in." },
      { q: 'What happens after my free trial ends?', a: "You choose a plan to continue on — nothing is ever charged automatically. If you don't pick one, your account simply pauses until you're ready." },
    ],
  },
  {
    title: 'Numbers & calling',
    items: [
      { q: 'Can I keep my existing business number?', a: 'Yes — porting your number is free and usually completes within a few business days, with no downtime for inbound calls in the meantime.' },
      { q: 'How many countries can I call?', a: 'HD voice calling reaches 190+ countries worldwide, with local virtual numbers available in more than 100 of them.' },
      { q: 'Do I need any hardware?', a: 'No. Greevo runs entirely from the browser, desktop app, or mobile app — desk phones are optional, not required to get started.' },
      { q: 'Do you support toll-free numbers?', a: 'Yes, toll-free numbers are available alongside local and international numbers, and can be provisioned from the same dashboard in a few clicks.' },
      { q: 'What happens if my team goes over the included minutes?', a: 'Extra minutes bill at a transparent per-minute rate shown directly in your dashboard — there are no surprise fees or automatic plan upgrades.' },
      { q: 'Can I message customers over WhatsApp or Instagram?', a: 'Yes — WhatsApp, Instagram, and SMS all land in the same shared inbox as your calls, so a conversation never has to restart on a different channel.' },
    ],
  },
  {
    title: 'AI receptionist',
    items: [
      { q: 'Does the AI cost extra?', a: 'No — the AI receptionist is included on every plan, with a monthly minute allotment that scales up as you move to a higher tier.' },
      { q: 'What languages does it support?', a: "The receptionist automatically detects the caller's language and responds natively, with real-time translation available for your team." },
      { q: 'Can it hand off to a human?', a: 'Yes, at any point either the caller or the AI can escalate to a live agent, with the full context of the call carried over automatically.' },
      { q: 'Can I customize what the AI says?', a: "Yes — greetings, routing questions, and escalation triggers are all editable from a plain-language script editor, no prompt engineering required." },
      { q: 'Does it sync with my CRM?', a: 'Yes, calls and lead details sync automatically to HubSpot, Salesforce, and other supported CRMs the moment a call ends.' },
      { q: 'What happens if the AI goes down?', a: "Calls automatically fail over to voicemail or a designated backup number, so you never silently drop an inbound call." },
    ],
  },
  {
    title: 'Billing & security',
    items: [
      { q: 'Can I change plans later?', a: "Yes, you can upgrade or downgrade anytime from your account settings, and billing prorates automatically so you're never overcharged." },
      { q: 'Is it secure enough for regulated industries?', a: 'Yes — encryption in transit and at rest, PII redaction, and audit logs are included on every plan by default, not sold as a separate add-on.' },
      { q: 'Is there a contract?', a: 'No long-term contract is required on any plan. Cancel anytime directly from your account settings with no cancellation fee.' },
      { q: 'What certifications does Greevo hold?', a: 'Greevo is SOC 2 Type II, ISO 27001, and PCI-DSS certified, with STIR/SHAKEN caller verification on every call.' },
      { q: 'Do you offer a discount for annual billing?', a: 'Yes, switching to yearly billing saves 20% compared to paying month-to-month, and the discount applies the moment you toggle to yearly on the pricing page.' },
      { q: 'What payment methods do you accept?', a: 'All major credit and debit cards are accepted by default, with invoicing available for annual enterprise plans.' },
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

      <section className="section" style={{ background: '#f5f8ff' }}>
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
                <IndustryFaqAccordion items={group.items} defaultOpen={-1} />
              </div>
            ))
          )}
        </div>
      </section>
    </>
  )
}
