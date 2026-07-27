import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import BlogHero from '../components/BlogHero.jsx'
import FeaturedPost from '../components/FeaturedPost.jsx'
import { BLOG_POSTS, TAG_STYLES, AUTHOR } from '../data/blogPosts.js'
import './Blog.css'

const CATEGORIES = ['All', 'AI Voice', 'Product', 'Guides']

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [query, setQuery] = useState('')

  const featuredPost = BLOG_POSTS.find((p) => p.featured)

  const filteredPosts = useMemo(() => {
    const q = query.trim().toLowerCase()
    return BLOG_POSTS.filter((post) => {
      const matchesCategory = activeCategory === 'All' || post.tag === activeCategory
      const matchesQuery = !q || post.title.toLowerCase().includes(q) || post.tag.toLowerCase().includes(q)
      return matchesCategory && matchesQuery
    })
  }, [activeCategory, query])

  const gridPosts = filteredPosts.filter((p) => p.slug !== featuredPost?.slug)

  return (
    <>
      <BlogHero />

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
              <button type="submit" className="btn btn-primary blog-search-btn">
                Search
                <span className="blog-search-btn-icon">
                  <span className="material-symbols-outlined">arrow_forward</span>
                </span>
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

          <FeaturedPost post={featuredPost} />
        </div>
      </section>

      <section className="section-tight blog-posts-section">
        <div className="container">
          {gridPosts.length === 0 ? (
            <p style={{ color: 'var(--text-muted)', textAlign: 'center' }}>No articles match your search.</p>
          ) : (
            <div className="feature-grid blog-grid">
              {gridPosts.map((post) => (
                <Link key={post.slug} to={`/blog/${post.slug}`} className="card blog-card">
                  <div className="blog-card-image">
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
