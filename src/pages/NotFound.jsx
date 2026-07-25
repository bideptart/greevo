import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="section" style={{ textAlign: 'center', padding: '140px 24px' }}>
      <div className="eyebrow">404</div>
      <h1 style={{ fontSize: 40, fontWeight: 500, margin: '16px 0' }}>This page took a wrong turn</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: 24 }}>The page you're looking for doesn't exist or has moved.</p>
      <Link to="/" className="btn btn-primary">Back to home</Link>
    </section>
  )
}
