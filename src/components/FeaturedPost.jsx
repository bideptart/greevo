import { Link } from 'react-router-dom'
import { TAG_STYLES } from '../data/blogPosts.js'
import './FeaturedPost.css'

const SATELLITES = [
  { icon: 'record_voice_over', label: 'Voice Channels', pos: 'top' },
  { icon: 'dialpad', label: 'Dialer Solutions', pos: 'left' },
  { icon: 'public', label: 'Carrier Selection', pos: 'right' },
]

const FEATURE_CHIPS = [
  { icon: 'hub', label: 'Omnichannel Connectivity' },
  { icon: 'speed', label: 'Advanced Dialers' },
  { icon: 'verified_user', label: 'Reliable Carriers' },
  { icon: 'trending_up', label: 'Smarter Performance' },
]

export default function FeaturedPost({ post }) {
  if (!post) return null

  return (
    <Link to={`/blog/${post.slug}`} className="card featured-post">
      <div className="featured-post-text">
        <div className="featured-post-meta">
          <span className={`tag-pill ${TAG_STYLES[post.tag]?.pill}`}>{post.tag}</span>
          <span className="featured-post-meta-item">
            <span className="material-symbols-outlined">calendar_month</span>
            {post.date}
          </span>
          <span className="featured-post-meta-item">
            <span className="material-symbols-outlined">schedule</span>
            {post.readTime}
          </span>
        </div>
        <h2 className="featured-post-title">{post.title}</h2>
        <p className="featured-post-excerpt">{post.excerpt}</p>
        <span className="featured-post-link">
          Read article <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
        </span>
      </div>

      <div className="featured-post-panel">
        <p className="featured-post-panel-title">{post.title}</p>
        <div className="featured-post-diagram">
          <div className="diagram-core">
            <span className="diagram-ping-ring" aria-hidden="true" />
            <span className="diagram-ping-ring delay" aria-hidden="true" />
            <span className="material-symbols-outlined">support_agent</span>
          </div>
          {SATELLITES.map((s) => (
            <div key={s.label} className={`diagram-satellite pos-${s.pos}`}>
              <span className="diagram-satellite-icon">
                <span className="material-symbols-outlined">{s.icon}</span>
              </span>
              <span className="diagram-satellite-label">{s.label}</span>
            </div>
          ))}
        </div>
        <div className="featured-post-chips">
          {FEATURE_CHIPS.map((c) => (
            <div key={c.label} className="featured-post-chip">
              <span className="material-symbols-outlined">{c.icon}</span>
              <span>{c.label}</span>
            </div>
          ))}
        </div>
      </div>
    </Link>
  )
}
