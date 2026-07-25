import { Link, useParams } from 'react-router-dom'
import { BLOG_POSTS } from '../data/blogPosts.js'
import './BlogPost.css'

export default function BlogPost() {
  const { slug } = useParams()
  const post = BLOG_POSTS.find((p) => p.slug === slug)

  if (!post) {
    return (
      <section className="section" style={{ textAlign: 'center', padding: '140px 24px' }}>
        <div className="eyebrow">404</div>
        <h1 style={{ fontSize: 40, fontWeight: 500, margin: '16px 0' }}>We couldn't find that article</h1>
        <p style={{ color: 'var(--text-muted)', marginBottom: 24 }}>It may have moved or the link is outdated.</p>
        <Link to="/blog" className="btn btn-primary">Back to all articles</Link>
      </section>
    )
  }

  return (
    <>
      <section className="blog-post-hero">
        <div className="container blog-post-hero-inner">
          <Link to="/blog" className="blog-post-back">
            <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_back</span>
            Back to all articles
          </Link>
          <span className="eyebrow">{post.tag}</span>
          <h1>{post.title}</h1>
          <div className="blog-post-meta">
            <span>{post.date}</span>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container blog-post-body">
          {post.sections.map((section) => (
            <div key={section.heading} className="blog-post-section">
              <h2>{section.heading}</h2>
              {section.paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          ))}

          <div className="card blog-post-cta">
            <div>
              <h3>See Greevo's AI voice in action</h3>
              <p>Start a free trial or talk to an agent live — no setup required.</p>
            </div>
            <div className="blog-post-cta-actions">
              <Link to="/contact" className="btn btn-primary">Start Free Trial</Link>
              <Link to="/blog" className="btn btn-outline">More articles</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
