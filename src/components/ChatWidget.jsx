import { useState } from 'react'
import { Link } from 'react-router-dom'
import './ChatWidget.css'

const INITIAL_MESSAGES = [
  { from: 'bot', text: "Hi! I'm the Greevo assistant. Ask me anything about pricing, features, or getting set up." },
]

const CANNED_REPLY = "Thanks for the message! A real teammate typically replies within a few minutes during business hours — you can also reach us directly on the contact page."

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState(INITIAL_MESSAGES)
  const [draft, setDraft] = useState('')

  const sendMessage = (e) => {
    e.preventDefault()
    const text = draft.trim()
    if (!text) return
    setMessages((m) => [...m, { from: 'user', text }, { from: 'bot', text: CANNED_REPLY }])
    setDraft('')
  }

  return (
    <>
      {!open && (
        <button
          type="button"
          className="chat-fab"
          aria-label="Open chat"
          onClick={() => setOpen(true)}
        >
          <span className="material-symbols-outlined">chat_bubble</span>
        </button>
      )}

      {open && <div className="chat-backdrop" onClick={() => setOpen(false)} aria-hidden="true" />}

      <aside className={`chat-panel ${open ? 'open' : ''}`} aria-hidden={!open}>
        <div className="chat-panel-header">
          <span className="chat-panel-avatar">G</span>
          <div className="chat-panel-heading">
            <div className="chat-panel-title">Greevo Support</div>
            <div className="chat-panel-status"><span className="status-dot" /> Online</div>
          </div>
          <button type="button" className="chat-panel-close" aria-label="Close chat" onClick={() => setOpen(false)}>
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="chat-panel-messages">
          {messages.map((m, i) => (
            <div key={i} className={`chat-bubble ${m.from}`}>{m.text}</div>
          ))}
        </div>

        <form className="chat-panel-input" onSubmit={sendMessage}>
          <input
            type="text"
            placeholder="Type a message..."
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
          />
          <button type="submit" aria-label="Send message">
            <span className="material-symbols-outlined">send</span>
          </button>
        </form>

        <Link to="/contact" className="chat-panel-footer-link" onClick={() => setOpen(false)}>
          Prefer email? Contact us <span className="material-symbols-outlined" style={{ fontSize: 14 }}>arrow_forward</span>
        </Link>
      </aside>
    </>
  )
}
