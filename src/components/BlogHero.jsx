import { Link } from 'react-router-dom'
import AccentTitle from './AccentTitle.jsx'
import PopularPosts from './PopularPosts.jsx'
import './PageHero.css'
import './BlogHero.css'

export default function BlogHero() {
  return (
    <section className="blog-hero">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-bg-aurora aurora-1" />
        <div className="hero-bg-aurora aurora-2" />
        <div className="hero-bg-aurora aurora-3" />
        <div className="hero-bg-beam beam-1" />
        <div className="hero-bg-beam beam-2" />
        <div className="hero-bg-grid" />
        <div className="hero-bg-sparks">
          {Array.from({ length: 14 }).map((_, i) => (
            <span className={`hero-bg-spark spark-${i}`} key={i} />
          ))}
        </div>
      </div>

      <div className="container blog-hero-inner">
        <div className="blog-hero-text">
          <span className="hero-badge">
            <span className="material-symbols-outlined" style={{ fontSize: 16 }}>auto_awesome</span>
            Resources
          </span>
          <h1><AccentTitle title="Notes on building a better phone system" /></h1>
          <p className="blog-hero-subtitle">
            Product updates, guides, and the occasional behind-the-scenes look at how Greevo is built.
          </p>
          <div className="blog-hero-ctas">
            <Link to="/contact" className="btn btn-primary">Start Free Trial</Link>
            <Link to="/contact" className="btn btn-ghost">Contact Us</Link>
          </div>
        </div>

        <div className="blog-hero-visual">
          <PopularPosts />
        </div>
      </div>
    </section>
  )
}
