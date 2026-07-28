import { Link } from 'react-router-dom'
import AccentTitle from '../components/AccentTitle.jsx'
import HeroMockup from '../components/HeroMockup.jsx'
import WorkspaceMockup from '../components/WorkspaceMockup.jsx'
import CoreFiveDashboard from '../components/CoreFiveDashboard.jsx'
import IndustriesPinSection from '../components/IndustriesPinSection.jsx'
import FaqAccordion from '../components/FaqAccordion.jsx'
import './Home.css'

const CARRIERS = [
  'Nordholm Telecom', 'PacRim Mobile', 'Andes Connect', 'Meridian Wireless', 'Solara Communications',
  'Baltic Voice', 'Kestrel Networks', 'Continental SIP', 'Harborlink Telecom', 'Zenith Carrier Group',
]

const STEPS = [
  {
    number: '1',
    icon: 'person_add',
    image: '/steps/signup.png',
    title: 'Sign up',
    tagline: 'Five-minute signup. Every plan unlocked.',
    desc: 'Create your account and get immediate access to every feature — no tier-gating during the trial.',
    points: ['Account ready in 5 minutes', 'All features unlocked'],
    cta: 'Create account',
  },
  {
    number: '2',
    icon: 'dialpad',
    image: '/steps/invite.png',
    title: 'Invite your team & pick a number',
    tagline: 'Bulk invite. Numbers live instantly.',
    desc: 'Add teammates in bulk, provision local or toll-free numbers in 100+ countries, and build your IVR with drag-and-drop.',
    points: ['Numbers in 100+ countries', 'Drag-and-drop IVR builder'],
    cta: 'Invite & pick',
  },
  {
    number: '3',
    icon: 'call',
    image: '/steps/call.png',
    title: 'Take your first call',
    tagline: 'Desktop, mobile, web. AI covers overflow.',
    desc: 'Log in on any device, start taking calls, and let the AI receptionist answer anything your team can\'t.',
    points: ['iOS · Android · macOS · Windows', 'Live analytics from the first ring'],
    cta: 'Go live',
  },
]

const INTEGRATIONS = [
  { name: 'HubSpot', logo: '/integrations/hubspot.svg' },
  { name: 'Salesforce', logo: '/integrations/salesforce.png' },
  { name: 'Zoho', logo: '/integrations/zoho.svg' },
  { name: 'Pipedrive', logo: '/integrations/pipedrive.png' },
  { name: 'Zendesk', logo: '/integrations/zendesk.svg' },
  { name: 'Freshdesk', logo: '/integrations/freshdesk.png' },
  { name: 'WhatsApp', logo: '/integrations/whatsapp.svg' },
  { name: 'Instagram', logo: '/integrations/instagram.svg' },
  { name: 'Messenger', logo: '/integrations/messenger.svg' },
  { name: 'X', logo: '/integrations/x.svg' },
]

const TESTIMONIALS = [
  { quote: "We tried two other cloud phone tools before this one. The reason we stayed is boring — it just kept working across four time zones. Our sales team stopped thinking about the phone.", name: 'Meera Kapoor', role: 'Head of Growth · Pune', color: '#8b5cf6', color2: '#ec4899' },
  { quote: 'The mid-shift dashboard is where I actually spend my day. Queue depth, agent load, and sentiment on one screen — I can coach someone before it turns into a bad review.', name: 'Jonas Weber', role: 'CX Manager · Berlin', color: '#6366f1', color2: '#ec4899' },
  { quote: "The AI receptionist covers overflow calls in two languages, so we stopped losing weekend leads. It hands off to us on anything ambiguous, but for hours and bookings it beats voicemail every time.", name: 'Fatima Al-Sayed', role: 'Support Lead · Dubai', color: '#10b981', color2: '#3b82f6' },
  { quote: 'CRM sync is quiet infrastructure. Every call, note, and recording just shows up on the contact — nobody has to remember to log it. Our forecast is finally accurate.', name: 'Marcus Chen', role: 'Head of Sales · Toronto', color: '#2563eb', color2: '#8b5cf6' },
  { quote: 'I set the whole thing up on my phone during a layover. Five people, two countries, one number that rings all of us. My old provider needed a two-week onboarding for the same thing.', name: 'Isabela Rocha', role: 'Founder · São Paulo', color: '#f59e0b', color2: '#ec4899' },
  { quote: 'Porting 30 numbers across two countries was the part I dreaded most. It was done in under a week, free, and I only had to sign one form. That set the tone for the rest of the rollout.', name: 'Oliver Bennett', role: 'COO · London', color: '#14b8a6', color2: '#6366f1' },
]


const FAQS = [
  { q: "What is Greevo's cloud contact center platform?", a: 'Cloud phone and AI contact center in one product. Calls, chat, SMS, video, analytics, and an AI receptionist — in one place, on one login.' },
  { q: 'Do you offer a free trial?', a: 'Yes, every plan starts with a 14-day free trial — no credit card required, and every feature is unlocked from day one.' },
  { q: 'How fast can we go live?', a: 'Median setup time is under 4 minutes: sign up, invite your team, pick a number, and start taking calls.' },
  { q: 'Does the AI receptionist cost extra?', a: 'No — it\'s included on every plan, with a monthly minute allotment that scales by tier.' },
  { q: 'Is it secure enough for regulated industries?', a: 'Yes — encryption in transit and at rest, PII redaction, and audit logs are included on every plan, not an add-on.' },
]

export default function Home() {
  return (
    <div className="home-page">
      {/* Hero */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-mockup-col">
            <HeroMockup />
          </div>
          <div className="hero-text-col">
            <span className="hero-badge">
              <span className="material-symbols-outlined" style={{ fontSize: 16 }}>auto_awesome</span>
              AI receptionist is now multilingual
            </span>
            <h1><AccentTitle title="The cloud phone and AI contact center platform you can activate in minutes." /></h1>
            <p className="hero-subtitle">
              Calls, chat, SMS, video, and an AI receptionist — on one login. Greevo replaces the phone system,
              the contact center, and the AI vendor you were about to stitch together.
            </p>
            <div className="hero-ctas">
              <Link to="/contact" className="btn btn-primary">Start Free Trial</Link>
              <Link to="/contact" className="btn btn-ghost">Book a Demo</Link>
              <Link to="/pricing" className="btn btn-outline">
                View Pricing <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
              </Link>
            </div>
            <div className="hero-trust">
              <span>8,200+ teams</span>
              <span className="dot" />
              <span>99.99% uptime</span>
              <span className="dot" />
              <span><span className="material-symbols-outlined" style={{ fontSize: 16, verticalAlign: 'middle' }}>star</span> 4.7/5 average rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted by Global Carriers & Partners */}
      <section className="section-tight trusted-by-section">
        <div className="container">
          <p className="logo-strip-label">TRUSTED BY GLOBAL CARRIERS &amp; PARTNERS</p>
          <div className="marquee">
            <div className="marquee-track">
              {[...CARRIERS, ...CARRIERS].map((name, i) => (
                <span key={`${name}-${i}`} className="marquee-item">{name}</span>
              ))}
            </div>
          </div>
          <p className="logo-strip-sub">From 5-person startups to 500-seat contact centers.</p>
        </div>
      </section>

      {/* The Platform */}
      <section className="section platform-section">
        <div className="container">
          <div className="stack-center platform-intro wide-intro">
            <span className="eyebrow">The Platform</span>
            <h2 className="section-title nowrap-title">Cloud phone and AI contact center. One login.</h2>
            <p className="section-subtitle">Two products, one bill, one roadmap. Use one, or use both.</p>
          </div>

          <div className="platform-grid">
            <div className="card platform-workspace-card">
              <span className="eyebrow">One Workspace</span>
              <h3>Your calls and conversations, side by side.</h3>
              <p>Jump into a live call while your team keeps the thread moving — everything lives in one view.</p>

              <WorkspaceMockup />
            </div>

            <div className="platform-feature-cards">
              <div className="card platform-feature-card feature-blue">
                <div className="platform-feature-icon"><span className="material-symbols-outlined">call</span></div>
                <h4>Cloud Phone</h4>
                <p>HD calling to 190+ countries. Virtual numbers in 100+. Shared SMS inboxes, video meetings, and mobile + desktop apps.</p>
                <div className="platform-tags">
                  <span>HD voice</span><span>SMS</span><span>Video</span><span>190+ countries</span>
                </div>
              </div>
              <div className="card platform-feature-card feature-violet">
                <div className="platform-feature-icon"><span className="material-symbols-outlined">auto_awesome</span></div>
                <h4>AI Contact Center</h4>
                <p>Skill-based routing, predictive dialer, live coaching, and an omnichannel inbox on one thread per customer.</p>
                <div className="platform-tags">
                  <span>Routing</span><span>Dialer</span><span>Coaching</span><span>Omnichannel</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Five */}
      <section className="section core-five-section">
        <div className="container">
          <div className="stack-center core-five-intro">
            <span className="eyebrow">Core Five</span>
            <h2 className="section-title core-five-title">Five tools your agents open every morning.</h2>
            <p className="section-subtitle">The day-to-day, built to feel effortless.</p>
          </div>
          <CoreFiveDashboard />
        </div>
      </section>

      {/* How It Works */}
      <section className="section how-it-works-section">
        <div className="container">
          <div className="stack-center wide-intro">
            <span className="eyebrow">How It Works</span>
            <h2 className="section-title nowrap-title">From signup to first call in three steps.</h2>
            <p className="section-subtitle">Median setup time: under 4 minutes.</p>
          </div>
          <div className="steps-grid">
            {STEPS.map((step) => (
              <div key={step.number} className="step-flip">
                <span className="step-number">{step.number}</span>
                <div className="step-flip-inner">
                  <div className="card step-face step-face-front" style={{ backgroundImage: `url(${step.image})` }}>
                    <div className="step-front-scrim" />
                    <div className="step-front-text">
                      <h3>{step.title}</h3>
                      <p className="step-tagline">{step.tagline}</p>
                    </div>
                    <span className="material-symbols-outlined step-front-corner">bolt</span>
                  </div>

                  <div className="card step-face step-face-back">
                    <div className="step-back-head">
                      <span className="step-back-icon"><span className="material-symbols-outlined">{step.icon}</span></span>
                      <h3>{step.title}</h3>
                    </div>
                    <p className="step-desc">{step.desc}</p>
                    <ul className="step-points">
                      {step.points.map((pt) => (
                        <li key={pt}>
                          <span className="step-point-icon"><span className="material-symbols-outlined">check_circle</span></span>
                          {pt}
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact" className="step-back-footer">
                      <span>{step.cta}</span>
                      <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <IndustriesPinSection
        eyebrow="Industries"
        title="Built for the way your industry actually runs."
        description="Finance teams need every call recorded and every disclosure traceable. Retail teams need one thread that survives a switch from DM to phone call. SaaS teams need onboarding, renewals, and support to tell the same story about an account. Logistics teams need dispatch that doesn't stop when the sun goes down. Greevo ships with the routing, compliance, and integrations each of these workflows already expects — so you're not left bending a generic phone system into the shape of your business."
        ctaTo="/industries"
        ctaLabel="Explore industries"
      />

      {/* Integrations */}
      <section className="section integrations-section">
        <div className="container">
          <div className="stack-center">
            <span className="eyebrow">⚡ Integrations</span>
            <h2 className="section-title">
              Integrate with the <span className="gradient-text">tools you already use</span>
            </h2>
            <p className="section-subtitle">300+ native integrations — CRM, helpdesk, messaging, ticketing. No middleman required.</p>
          </div>
          <div className="integrations-marquee">
            <div className="integrations-track integrations-track-left">
              {[...INTEGRATIONS, ...INTEGRATIONS, ...INTEGRATIONS].map((app, i) => (
                <div key={`row1-${app.name}-${i}`} className="integration-tile" title={app.name}>
                  <img src={app.logo} alt={app.name} />
                </div>
              ))}
            </div>
            <div className="integrations-track integrations-track-right">
              {[...INTEGRATIONS, ...INTEGRATIONS, ...INTEGRATIONS].reverse().map((app, i) => (
                <div key={`row2-${app.name}-${i}`} className="integration-tile" title={app.name}>
                  <img src={app.logo} alt={app.name} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section testimonials-section">
        <div className="container">
          <div className="stack-center">
            <span className="eyebrow">Testimonials</span>
            <h2 className="section-title">What clients say after 90 days.</h2>
            <p className="section-subtitle">Real teams, real numbers — from sales floors, CX desks, and support queues.</p>
          </div>
          <div className="testimonial-marquee">
            <div className="testimonial-track">
              {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
                <div key={`${t.name}-${i}`} className="card testimonial-card">
                  <span className="testimonial-quote-mark" style={{ color: t.color }} aria-hidden="true">&ldquo;</span>
                  <p className="testimonial-quote">{t.quote}</p>
                  <div className="testimonial-divider" />
                  <div className="testimonial-author">
                    <span className="testimonial-avatar" style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color2})` }}>{t.name.split(' ').map((n) => n[0]).join('')}</span>
                    <div>
                      <strong>{t.name}</strong>
                      <span className="testimonial-role">{t.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section faq-section">
        <div className="container">
          <div className="stack-center wide-intro">
            <span className="eyebrow">FAQ</span>
            <h2 className="section-title nowrap-title">The questions teams ask on the first call.</h2>
          </div>
          <FaqAccordion items={FAQS} />
          <div className="stack-center" style={{ marginTop: 32 }}>
            <Link to="/faq" className="btn btn-outline">See all FAQs</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
