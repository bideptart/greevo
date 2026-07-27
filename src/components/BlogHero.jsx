import { Link } from 'react-router-dom'
import './BlogHero.css'

export default function BlogHero() {
  return (
    <section className="blog-hero">
      <div className="blog-hero-blob blob-a" aria-hidden="true" />
      <div className="blog-hero-blob blob-b" aria-hidden="true" />

      <div className="container blog-hero-inner">
        <span className="hero-badge">
          <span className="material-symbols-outlined" style={{ fontSize: 16 }}>auto_awesome</span>
          Resources
        </span>
        <h1>Notes on building a better phone system</h1>
        <p className="blog-hero-subtitle">
          Product updates, guides, and the occasional behind-the-scenes look at how Greevo is built.
        </p>
        <div className="blog-hero-ctas">
          <Link to="/contact" className="btn btn-primary">Start Free Trial</Link>
          <Link to="/contact" className="btn btn-ghost">Contact Us</Link>
        </div>
      </div>
    </section>
  )
}
