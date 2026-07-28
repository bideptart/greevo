import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import IndustryFaqAccordion from '../components/IndustryFaqAccordion.jsx'
import AnimatedIndustries from '../components/AnimatedIndustries.jsx'
import InfiniteSlider from '../components/InfiniteSlider.jsx'
import StaggerStack from '../components/StaggerStack.jsx'
import './Industries.css'

const INDUSTRIES = [
  {
    icon: 'account_balance',
    image: '/industries/finance.jpeg',
    title: 'Finance',
    pain: 'One unrecorded call or a missed disclosure is all it takes to trigger an audit — and advisors don’t have time to babysit compliance manually.',
    desc: 'Secure, compliant calling and messaging for advisors and support teams handling sensitive accounts.',
    points: [
      'Call recording with configurable retention, up to 7 years',
      'PII redaction on transcripts and stored recordings',
      'Audit-ready logs across voice, SMS, and chat',
    ],
    badges: ['PII auto-redaction', 'Configurable retention', 'Full audit trail'],
    proof: { value: '0', label: 'missed disclosures with recording on every line' },
  },
  {
    icon: 'storefront',
    image: '/industries/retail.jpeg',
    title: 'Retail',
    pain: 'Customers don’t wait for business hours — they DM at midnight, text on a Saturday, and expect the same order history no matter how they reach you.',
    desc: 'Route customers to the right store or support queue, and keep every order conversation on one thread.',
    points: [
      'Order-aware routing by location or SKU',
      'SMS updates for shipping, returns, and cart recovery',
      'Voice, SMS, WhatsApp, and Instagram in one queue',
    ],
    badges: ['Unified order queue', 'Cart-recovery SMS', '6+ channels, one inbox'],
    proof: { value: '6+', label: 'channels collapsed into a single queue' },
  },
  {
    icon: 'cloud',
    image: '/industries/saas.jpeg',
    title: 'SaaS',
    pain: 'Onboarding calls, renewal outreach, and support tickets each tell a different story about the same account — until someone finally stitches them together by hand.',
    desc: 'Onboarding calls, renewal outreach, and support tickets, unified for product and success teams.',
    points: [
      'Native two-way sync with HubSpot, Salesforce, Zoho, Pipedrive',
      'AI call summaries pushed straight into the CS tool',
      'Usage-based routing to the right success owner',
    ],
    badges: ['Native CRM sync', 'AI call summaries', 'Usage-based routing'],
    proof: { value: '100%', label: 'of calls logged to the CRM automatically' },
  },
  {
    icon: 'local_shipping',
    image: '/industries/logistics.jpeg',
    title: 'Logistics',
    pain: 'Dispatch doesn’t stop at 5pm, drivers don’t all speak the same language, and one missed check-in can cascade into a missed delivery window.',
    desc: 'Dispatch, driver check-ins, and delivery updates that keep moving even during peak season.',
    points: [
      'Bulk SMS for delivery and delay notifications',
      'Multilingual IVR for dispatch and driver lines',
      'Real-time call analytics broken down by region',
    ],
    badges: ['Multilingual IVR', 'Bulk delivery SMS', 'Regional analytics'],
    proof: { value: '24/7', label: 'dispatch coverage with AI overflow' },
  },
]

const COMPARE_ROWS = [
  { icon: 'forum', feature: 'Channels agents work from', legacy: 'A separate app per channel — agents juggle tabs', greevo: 'Voice, SMS, chat, WhatsApp, and Instagram in one thread' },
  { icon: 'encrypted', feature: 'Compliance & PII redaction', legacy: 'Bolt-on module, priced and configured separately', greevo: 'Built in on every plan, no add-on invoice' },
  { icon: 'hub', feature: 'CRM sync', legacy: 'Middleware or Zapier — breaks silently on updates', greevo: 'Native two-way sync, maintained for you' },
  { icon: 'support_agent', feature: 'Overflow coverage', legacy: 'A separate AI vendor, a separate contract', greevo: 'AI receptionist included, 30+ languages' },
  { icon: 'dialpad', feature: 'Number porting', legacy: 'Paid, multi-week timelines, hardware in the middle', greevo: 'Free, local & toll-free, zero downtime' },
  { icon: 'bolt', feature: 'Time to first call', legacy: 'Weeks of vendor onboarding and IT tickets', greevo: 'Under 4 minutes, fully self-serve' },
]

const STATS = [
  { value: '4', label: 'Industries, one platform' },
  { value: '<4 min', label: 'Median time to first call' },
  { value: '99.99%', label: 'Platform uptime' },
  { value: '30+', label: 'Languages the AI receptionist covers' },
]

const RESOURCES = [
  { icon: 'auto_awesome', title: 'See every capability', desc: 'Cloud phone, AI receptionist, and contact center — the full capability library.', to: '/features', cta: 'Explore features' },
  { icon: 'payments', title: 'Compare plans', desc: 'Find the tier that fits your team size, channel mix, and compliance needs.', to: '/pricing', cta: 'View pricing' },
  { icon: 'support_agent', title: 'Talk to a specialist', desc: 'Get a walkthrough tailored to your industry’s workflows and compliance bar.', to: '/contact', cta: 'Talk to sales' },
]

const FAQS = [
  { q: 'Can Greevo support more than one of these industries on the same account?', a: 'Yes — routing rules, compliance settings, and integrations are configured per number or queue, so a single account can run a finance-grade compliance setup alongside a retail omnichannel queue.' },
  { q: 'Do compliance features like PII redaction and audit logs cost extra?', a: 'No. Call recording, configurable retention, PII redaction, and audit-ready logs are included on every plan — not gated behind an enterprise tier.' },
  { q: 'Which CRMs and helpdesks does Greevo integrate with?', a: 'Native two-way sync with HubSpot, Salesforce, Zoho, and Pipedrive, plus 300+ integrations across helpdesk, ticketing, and messaging tools.' },
  { q: 'Can the AI receptionist follow an industry-specific script?', a: 'Yes — you can set custom qualifying questions, disclosures, and hand-off rules per number, so the AI sounds right whether it’s answering for a dispatch line or a support queue.' },
  { q: 'Is there a minimum contract for industry or enterprise plans?', a: 'No long-term contract on any plan. Every plan starts with a 14-day free trial, and you can upgrade, downgrade, or cancel anytime.' },
]

export default function Industries() {
  const compareRef = useRef(null)
  const [compareVisible, setCompareVisible] = useState(false)

  useEffect(() => {
    const el = compareRef.current
    if (!el || typeof IntersectionObserver === 'undefined') {
      setCompareVisible(true)
      return
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCompareVisible(true)
          observer.disconnect()
        }
      },
      { root: null, rootMargin: '0px 0px -10% 0px', threshold: 0 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <PageHero
        split
        eyebrow="Industries"
        title="Built for how your industry actually works"
        subtitle="Greevo adapts to the workflows your team already runs — not the other way around."
        visualIcon="public"
        badges={[
          { icon: 'account_balance', label: 'Finance' },
          { icon: 'storefront', label: 'Retail' },
          { icon: 'cloud', label: 'SaaS' },
          { icon: 'local_shipping', label: 'Logistics' },
        ]}
        stats={[
          { value: '4', label: 'Industries served' },
          { value: '8,200+', label: 'Teams onboard' },
          { value: '99.99%', label: 'Uptime SLA' },
        ]}
      />

      {/* Trust strip */}
      <section className="section-tight">
        <div className="container">
          <p className="logo-strip-label">BUILT-IN, NOT BOLTED ON</p>
          <div className="trust-strip">
            {['PII auto-redaction', 'Configurable retention', 'Encrypted in transit & at rest', 'Audit-ready logs', 'Free number porting'].map((t) => (
              <span className="trust-pill" key={t}>
                <span className="material-symbols-outlined">verified</span>
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Per-industry deep dive */}
      <section className="section">
        <div className="container">
          <AnimatedIndustries items={INDUSTRIES} />
        </div>
      </section>

      {/* Comparison table */}
      <section className="section" style={{ background: 'var(--surface-alt)' }}>
        <div className="container">
          <div className="stack-center">
            <span className="eyebrow">Why teams switch</span>
            <h2 className="section-title">Greevo vs. a bolted-together stack</h2>
            <p className="section-subtitle">The same coverage most teams stitch together from three or four separate vendors — running natively on one login.</p>
          </div>
          <div className={`compare-table-wrap ${compareVisible ? 'is-visible' : ''}`} ref={compareRef}>
            <table className="compare-table">
              <thead>
                <tr>
                  <th>Capability</th>
                  <th>Fragmented stack</th>
                  <th className="compare-th-greevo">Greevo</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE_ROWS.map((r, i) => (
                  <tr key={r.feature} style={{ '--row-i': i }}>
                    <td className="compare-feature">{r.feature}</td>
                    <td className="compare-legacy">{r.legacy}</td>
                    <td className="compare-greevo">
                      <span className="material-symbols-outlined">check_circle</span>
                      {r.greevo}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <section className="section">
        <InfiniteSlider gap={0} speed={34}>
          {STATS.map((s) => (
            <div className="infinite-slider-item" key={s.label}>
              <div className="stat-number">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </InfiniteSlider>
      </section>

      {/* Explore more resources */}
      <section className="section" style={{ background: 'var(--surface-alt)' }}>
        <div className="container">
          <div className="stack-center">
            <span className="eyebrow">Explore more</span>
            <h2 className="section-title">Go deeper on the platform</h2>
          </div>
          <StaggerStack items={RESOURCES} />
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <div className="stack-center">
            <span className="eyebrow">FAQ</span>
            <h2 className="section-title">Industry questions, answered</h2>
          </div>
          <IndustryFaqAccordion items={FAQS} defaultOpen={-1} />
        </div>
      </section>
    </>
  )
}
