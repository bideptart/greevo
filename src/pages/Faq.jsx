import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'

const FAQ_GROUPS = [
  {
    title: 'Getting started',
    items: [
      { q: "What is Greevo's cloud contact center platform?", a: 'Cloud phone and AI contact center in one product. Calls, chat, SMS, video, analytics, and an AI receptionist — in one place, on one login.' },
      { q: 'Do you offer a free trial?', a: 'Yes, every plan starts with a 14-day free trial — no credit card required, and every feature is unlocked from day one.' },
      { q: 'How fast can we go live?', a: 'Median setup time is under 4 minutes: sign up, invite your team, pick a number, and start taking calls.' },
    ],
  },
  {
    title: 'Numbers & calling',
    items: [
      { q: 'Can I keep my existing business number?', a: 'Yes — porting is free and typically completes within a few business days, with no downtime for inbound calls.' },
      { q: 'How many countries can I call?', a: 'HD voice reaches 190+ countries, with local virtual numbers available in over 100 of them.' },
      { q: 'Do I need any hardware?', a: 'No. Greevo runs from the browser, desktop app, or mobile app. Desk phones are optional.' },
    ],
  },
  {
    title: 'AI receptionist',
    items: [
      { q: 'Does the AI cost extra?', a: 'No — the AI receptionist is included on every plan, with a monthly minute allotment that scales by tier.' },
      { q: 'What languages does it support?', a: 'The receptionist auto-detects the caller\'s language and responds natively, with real-time translation for your team.' },
      { q: 'Can it hand off to a human?', a: 'Yes, at any point the caller or the AI can escalate to a live agent, with full context carried over.' },
    ],
  },
  {
    title: 'Billing & security',
    items: [
      { q: 'Can I change plans later?', a: 'Yes, upgrade or downgrade anytime from your account settings; billing prorates automatically.' },
      { q: 'Is it secure enough for regulated industries?', a: 'Yes — encryption in transit and at rest, PII redaction, and audit logs are included on every plan, not an add-on.' },
      { q: 'Is there a contract?', a: 'No long-term contract is required on any plan. Cancel anytime from your account settings.' },
    ],
  },
]

export default function Faq() {
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
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: 48, maxWidth: 760, margin: '0 auto' }}>
          {FAQ_GROUPS.map((group) => (
            <div key={group.title}>
              <h2 style={{ fontSize: 22, fontWeight: 600, marginBottom: 20 }}>{group.title}</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {group.items.map((item) => (
                  <div key={item.q} className="card" style={{ padding: 22 }}>
                    <h3 style={{ fontSize: 15.5, fontWeight: 600, marginBottom: 8 }}>{item.q}</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: 14.5, lineHeight: 1.6 }}>{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-band">
            <h2>Still have questions?</h2>
            <p>Talk to a real person — no ticket queue, no bot loop.</p>
            <div className="cta-actions">
              <Link to="/contact" className="btn btn-primary">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
