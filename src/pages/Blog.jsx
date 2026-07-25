import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero.jsx'
import { BLOG_POSTS } from '../data/blogPosts.js'
import './Blog.css'

const CATEGORIES = ['All', 'AI Voice', 'Product', 'Guides']

const TAG_STYLES = {
  'AI Voice': { pill: 'tag-blue', image: 'linear-gradient(135deg, #60a5fa, #2563eb)' },
  Product: { pill: 'tag-violet', image: 'linear-gradient(135deg, #a78bfa, #7c3aed)' },
  Guides: { pill: 'tag-cyan', image: 'linear-gradient(135deg, #67e8f9, #0891b2)' },
  Company: { pill: 'tag-navy', image: 'linear-gradient(135deg, #64748b, #1e293b)' },
  Compliance: { pill: 'tag-teal', image: 'linear-gradient(135deg, #5eead4, #0d9488)' },
  Pricing: { pill: 'tag-amber', image: 'linear-gradient(135deg, #fcd34d, #d97706)' },
}

const AUTHOR = 'Greevo Team'

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [query, setQuery] = useState('')

  const isDefaultView = activeCategory === 'All' && !query.trim()

  const filteredPosts = useMemo(() => {
    const q = query.trim().toLowerCase()
    return BLOG_POSTS.filter((post) => {
      const matchesCategory = activeCategory === 'All' || post.tag === activeCategory
      const matchesQuery = !q || post.title.toLowerCase().includes(q) || post.tag.toLowerCase().includes(q)
      return matchesCategory && matchesQuery
    })
  }, [activeCategory, query])

  const featuredPost = isDefaultView ? BLOG_POSTS.find((p) => p.featured) : null
  const gridPosts = featuredPost ? filteredPosts.filter((p) => p.slug !== featuredPost.slug) : filteredPosts

  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Notes on building a better phone system"
        subtitle="Product updates, guides, and the occasional behind-the-scenes look at how Greevo is built."
        primaryCta="Start Free Trial"
        secondaryCta="Contact Us"
      />

      <section className="section-tight blog-categories-section">
        <div className="container">
          <div className="blog-categories-header">
            <div>
              <span className="eyebrow">Categories</span>
              <h2 className="blog-categories-title">Browse by categories</h2>
              <p className="blog-categories-subtitle">Guides, playbooks, and cloud phone deep-dives across {CATEGORIES.length - 1} topics.</p>
            </div>
            <form className="blog-search" onSubmit={(e) => e.preventDefault()}>
              <span className="material-symbols-outlined">search</span>
              <input
                type="text"
                placeholder="Search articles, topics..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <button type="submit" className="btn btn-primary">
                Search <span className="material-symbols-outlined" style={{ fontSize: 18 }}>arrow_forward</span>
              </button>
            </form>
          </div>

          <div className="category-pills">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`category-pill ${activeCategory === cat ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight blog-posts-section">
        <div className="container">
          {featuredPost && (
            <Link to={`/blog/${featuredPost.slug}`} className="card blog-featured">
              <div className="blog-featured-image" style={{ background: TAG_STYLES[featuredPost.tag]?.image }} />
              <div className="blog-featured-body">
                <div className="blog-featured-tags">
                  <span className={`tag-pill ${TAG_STYLES[featuredPost.tag]?.pill}`}>Featured</span>
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
                <span className="blog-featured-link">Read the full piece <span className="material-symbols-outlined" style={{ fontSize: 16 }}>arrow_forward</span></span>
              </div>
            </Link>
          )}

          {gridPosts.length === 0 ? (
            <p style={{ color: 'var(--text-muted)', textAlign: 'center' }}>No articles match your search.</p>
          ) : (
            <div className="feature-grid blog-grid">
              {gridPosts.map((post) => (
                <Link key={post.slug} to={`/blog/${post.slug}`} className="card blog-card">
                  <div className="blog-card-image" style={{ background: TAG_STYLES[post.tag]?.image }}>
                    <span className={`tag-pill ${TAG_STYLES[post.tag]?.pill}`}>{post.tag}</span>
                  </div>
                  <div className="blog-card-body">
                    <h3>{post.title}</h3>
                    <p className="blog-card-excerpt">{post.excerpt}</p>
                    <div className="blog-author-row">
                      <span className="blog-author-avatar small">{AUTHOR[0]}</span>
                      <div>
                        <div className="blog-author-name">{AUTHOR}</div>
                        <div className="blog-author-meta">{post.readTime}</div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
