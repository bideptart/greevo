import { useEffect, useRef, useState } from 'react'

const MESSAGES = [
  { text: 'Can you send the Q3 recap when you get a sec?', mine: false },
  { text: 'Just pushed it to the shared folder 👍', mine: true },
  { text: 'Perfect, pulling it up now.', mine: false },
  { text: 'Numbers look good — churn is down 8%.', mine: false },
  { text: 'Nice, I\'ll add that to the deck.', mine: true },
  { text: 'Sounds good, thank you!', mine: false },
]

export default function WorkspaceMockup() {
  const [visibleCount, setVisibleCount] = useState(0)
  const [typing, setTyping] = useState(false)
  const bodyRef = useRef(null)

  useEffect(() => {
    const el = bodyRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [visibleCount, typing])

  useEffect(() => {
    let step = 0
    let cancelled = false

    const runCycle = () => {
      if (cancelled) return
      if (step >= MESSAGES.length) {
        setTimeout(() => {
          if (cancelled) return
          setVisibleCount(0)
          setTyping(false)
          step = 0
          setTimeout(runCycle, 700)
        }, 2400)
        return
      }
      setTyping(true)
      setTimeout(() => {
        if (cancelled) return
        setTyping(false)
        step += 1
        setVisibleCount(step)
        setTimeout(runCycle, 1300)
      }, 700)
    }

    const kickoff = setTimeout(runCycle, 600)
    return () => {
      cancelled = true
      clearTimeout(kickoff)
    }
  }, [])

  return (
    <div className="workspace-mockup">
      <div className="workspace-call-panel">
        <span className="workspace-panel-label">Active call</span>
        <span className="workspace-call-avatar">DP</span>
        <span className="workspace-call-name">David Park</span>
        <span className="workspace-call-timer">04:32</span>
        <div className="workspace-waveform">
          {Array.from({ length: 14 }).map((_, i) => <span key={i} style={{ animationDelay: `${i * 0.08}s` }} />)}
        </div>
        <div className="workspace-call-actions">
          <span className="workspace-call-btn"><span className="material-symbols-outlined">mic</span></span>
          <span className="workspace-call-btn end"><span className="material-symbols-outlined">call_end</span></span>
        </div>
      </div>

      <div className="workspace-chat-panel">
        <div className="workspace-chat-header">
          <span className="workspace-chat-avatar">SM</span>
          <div>
            <span className="workspace-chat-name">Sarah Mitchell</span>
            <span className="workspace-chat-status"><span className="dot online" />Active now</span>
          </div>
        </div>
        <div className="workspace-chat-body" ref={bodyRef}>
          {MESSAGES.slice(0, visibleCount).map((m, i) => (
            <div key={i} className={`workspace-msg-row ${m.mine ? 'mine' : ''}`}>
              <span className="workspace-msg-bubble">{m.text}</span>
            </div>
          ))}
          {typing && (
            <div className={`workspace-msg-row ${visibleCount % 2 === 1 ? 'mine' : ''}`}>
              <span className="workspace-msg-bubble workspace-msg-typing">
                <span /><span /><span />
              </span>
            </div>
          )}
        </div>
        <div className="workspace-chat-input">
          Type a message…
          <span className="material-symbols-outlined" style={{ fontSize: 16 }}>send</span>
        </div>
      </div>
    </div>
  )
}
