import { useState } from 'react'
import PageHero from '../components/PageHero.jsx'
import './Contact.css'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' })

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your setup"
        subtitle="Start a free trial in minutes, or book time with our team for a walkthrough tailored to your team."
        primaryCta="Start Free Trial"
        secondaryCta="Book a Demo"
      />

      <section className="section" style={{ background: '#f5f8ff' }}>
        <div className="container contact-grid">
          <div className="card contact-form-card">
            {submitted ? (
              <div className="contact-success">
                <span className="material-symbols-outlined" style={{ fontSize: 40, color: 'var(--accent-cyan-solid)' }}>check_circle</span>
                <h3>Thanks, {form.name.split(' ')[0] || 'there'}!</h3>
                <p>Our team will reach out to {form.email || 'you'} within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3>Book a demo</h3>
                <div className="form-row">
                  <label>
                    Full name
                    <input required type="text" value={form.name} onChange={update('name')} placeholder="Jordan Lee" />
                  </label>
                  <label>
                    Work email
                    <input required type="email" value={form.email} onChange={update('email')} placeholder="jordan@company.com" />
                  </label>
                </div>
                <label>
                  Company
                  <input type="text" value={form.company} onChange={update('company')} placeholder="Company name" />
                </label>
                <label>
                  What are you looking to solve?
                  <textarea rows={4} value={form.message} onChange={update('message')} placeholder="Tell us a bit about your team..." />
                </label>
                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send request</button>
              </form>
            )}
          </div>

          <div className="contact-info">
            <div className="card contact-info-card">
              <span className="material-symbols-outlined">mail</span>
              <h4>Email us</h4>
              <p>hello@greevo.com</p>
            </div>
            <div className="card contact-info-card">
              <span className="material-symbols-outlined">call</span>
              <h4>Call sales</h4>
              <p>+1 (800) 555-0142</p>
            </div>
            <div className="card contact-info-card">
              <span className="material-symbols-outlined">forum</span>
              <h4>Live chat</h4>
              <p>Available 24/7 in-app</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
