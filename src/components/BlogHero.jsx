import { Link } from 'react-router-dom'
import { TAG_STYLES, AUTHOR } from '../data/blogPosts.js'
import AccentTitle from './AccentTitle.jsx'
import './BlogHero.css'

export default function BlogHero({ featuredPost }) {
  return (
    <section className="blog-hero">
      <div className="blog-hero-blob blob-a" aria-hidden="true" />
      <div className="blog-hero-blob blob-b" aria-hidden="true" />

      <div className="container blog-hero-inner">
        <div className="blog-hero-text">
          <span className="eyebrow">Resources</span>
          <h1><AccentTitle title="Notes on building a better phone system" /></h1>
          <p className="blog-hero-subtitle">
            Product updates, guides, and the occasional behind-the-scenes look at how Greevo is built.
          </p>
          <div className="blog-hero-ctas">
            <Link to="/contact" className="btn btn-primary">Start Free Trial</Link>
            <Link to="/contact" className="btn btn-ghost">Contact Us</Link>
          </div>
        </div>

        {featuredPost && (
          <Link to={`/blog/${featuredPost.slug}`} className="blog-hero-card">
            <div className="blog-hero-card-image" style={{ background: TAG_STYLES[featuredPost.tag]?.image }}>
              <span className="blog-hero-ping" aria-hidden="true">
                <span className="ping-ring" />
                <span className="ping-ring delay" />
                <span className="ping-dot">
                  <span className="material-symbols-outlined">call</span>
                </span>
              </span>
            </div>
            <div className="blog-hero-card-body">
              <div className="blog-hero-card-tags">
                <span className="tag-pill tag-featured">Featured</span>
                <span className={`tag-pill ${TAG_STYLES[featuredPost.tag]?.pill}`}>{featuredPost.tag}</span>
              </div>
              <h3>{featuredPost.title}</h3>
              <p>{featuredPost.excerpt}</p>
              <div className="blog-author-row">
                <span className="blog-author-avatar">{AUTHOR[0]}</span>
                <div>
                  <div className="blog-author-name">{AUTHOR}</div>
                  <div className="blog-author-meta">{featuredPost.date} · {featuredPost.readTime}</div>
                </div>
              </div>
              <span className="blog-hero-card-link">
                Read the full piece <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span>
              </span>
            </div>
          </Link>
        )}
      </div>
    </section>
  )
}
