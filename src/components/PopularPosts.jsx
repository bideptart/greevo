import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { BLOG_POSTS, TAG_STYLES, AUTHOR } from '../data/blogPosts.js'
import './PopularPosts.css'

const POSTS = BLOG_POSTS.slice(0, 4)

export default function PopularPosts() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % POSTS.length), 3200)
    return () => clearInterval(id)
  }, [])

  const post = POSTS[index]

  return (
    <div className="popular-posts-wrap">
      <span className="popular-posts-eyebrow">
        <span className="material-symbols-outlined" style={{ fontSize: 15 }}>trending_up</span>
        Popular articles
      </span>

      <Link key={post.slug} to={`/blog/${post.slug}`} className="card blog-card popular-post-card post-swap">
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
    </div>
  )
}
