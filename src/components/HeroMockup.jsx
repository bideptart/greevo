import { useEffect, useRef, useState } from 'react'
import './HeroMockup.css'

const MESSAGES = [
  { from: 'a', text: 'Hey! Are we still on for the walkthrough today?', time: '10:42 AM' },
  { from: 'b', text: 'Yes, just wrapping up another call — 5 min out.', time: '10:43 AM' },
  { from: 'a', text: 'No rush, I\'ll have the deck ready.', time: '10:43 AM' },
  { from: 'b', text: 'Perfect, joining now 👋', time: '10:44 AM' },
]

const PARTICIPANTS = [
  { name: 'Sarah', key: 'a', video: '/videos/sarah.mp4', avatar: '/avatars/sarah.png' },
  { name: 'Alex', key: 'b', video: '/videos/alex.mp4', avatar: '/avatars/alex.png' },
]

const AVATARS = { a: '/avatars/sarah.png', b: '/avatars/alex.png' }

export default function HeroMockup() {
  const [visibleCount, setVisibleCount] = useState(0)
  const [typing, setTyping] = useState(false)
  const videoRefs = useRef([])

  useEffect(() => {
    videoRefs.current.forEach((video) => {
      if (!video) return
      const tryPlay = () => video.play().catch(() => {})
      tryPlay()
      video.addEventListener('canplay', tryPlay)
      video.addEventListener('ended', tryPlay)
      // eslint-disable-next-line no-param-reassign
      video._cleanup = () => {
        video.removeEventListener('canplay', tryPlay)
        video.removeEventListener('ended', tryPlay)
      }
    })
    return () => {
      videoRefs.current.forEach((video) => video && video._cleanup && video._cleanup())
    }
  }, [])

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
          setTimeout(runCycle, 600)
        }, 2600)
        return
      }
      setTyping(true)
      setTimeout(() => {
        if (cancelled) return
        setTyping(false)
        step += 1
        setVisibleCount(step)
        setTimeout(runCycle, 1400)
      }, 800)
    }

    const kickoff = setTimeout(runCycle, 500)
    return () => {
      cancelled = true
      clearTimeout(kickoff)
    }
  }, [])

  return (
    <div className="hero-mockup">
      <div className="mockup-topbar">
        <span className="material-symbols-outlined" style={{ fontSize: 16 }}>info</span>
        <span className="mockup-title">Q4 Marketing touchpoint</span>
        <span className="mockup-leave">Leave</span>
      </div>

      <div className="mockup-body">
        <div className="mockup-videos">
          {PARTICIPANTS.map((p, i) => (
            <div className="mockup-video-box" key={p.key}>
              <video
                ref={(el) => { videoRefs.current[i] = el }}
                src={p.video}
                autoPlay
                loop
                muted
                playsInline
              />
              <span className="mockup-video-name">{p.name}</span>
            </div>
          ))}
        </div>

        <div className="mockup-chat">
          <div className="mockup-chat-messages">
            {MESSAGES.slice(0, visibleCount).map((m, i) => (
              <div key={i} className={`mockup-bubble-row ${m.from === 'b' ? 'right' : ''}`}>
                <img className="mockup-avatar" src={AVATARS[m.from]} alt="" />
                <div>
                  <div className="mockup-bubble">{m.text}</div>
                  <span className="mockup-bubble-time">{m.time}</span>
                </div>
              </div>
            ))}
            {typing && (
              <div className={`mockup-bubble-row ${visibleCount % 2 === 1 ? 'right' : ''}`}>
                <img className="mockup-avatar" src={visibleCount % 2 === 1 ? AVATARS.b : AVATARS.a} alt="" />
                <div className="mockup-bubble mockup-typing">
                  <span /><span /><span />
                </div>
              </div>
            )}
          </div>
          <div className="mockup-chat-input">
            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>auto_awesome</span>
            Reply...
          </div>
        </div>
      </div>

      <div className="mockup-toolbar">
        <div className="mockup-tool"><span className="material-symbols-outlined">mic_off</span>Unmute</div>
        <div className="mockup-tool"><span className="material-symbols-outlined">videocam_off</span>Start video</div>
        <div className="mockup-tool"><span className="material-symbols-outlined">group</span>Participants</div>
        <div className="mockup-tool active"><span className="material-symbols-outlined">chat_bubble</span>Chat</div>
        <div className="mockup-tool"><span className="material-symbols-outlined">favorite</span>React</div>
        <div className="mockup-tool"><span className="material-symbols-outlined">screen_share</span>Share</div>
        <div className="mockup-tool"><span className="material-symbols-outlined">record_voice_over</span>Record</div>
      </div>
    </div>
  )
}
