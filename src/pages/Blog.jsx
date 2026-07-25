import PageHero from '../components/PageHero.jsx'

const POSTS = [
  { tag: 'Product', title: 'Inside the new AI receptionist: what changed and why', date: 'Jul 14, 2026' },
  { tag: 'Guides', title: 'How to port your business number without downtime', date: 'Jul 02, 2026' },
  { tag: 'Product', title: '5 call routing rules every growing team should set up', date: 'Jun 21, 2026' },
  { tag: 'Company', title: 'Greevo raises Series A to expand AI contact center', date: 'Jun 09, 2026' },
  { tag: 'Guides', title: 'SMS compliance basics for US and EU businesses', date: 'May 28, 2026' },
  { tag: 'Product', title: 'Live translation is now available on every video call', date: 'May 15, 2026' },
]

export default function Blog() {
  return (
    <>
      <PageHero
        eyebrow="Resources"
        title="Notes on building a better phone system"
        subtitle="Product updates, guides, and the occasional behind-the-scenes look at how Greevo is built."
        primaryCta="Start Free Trial"
        secondaryCta="Contact Us"
      />
      <section className="section">
        <div className="container feature-grid">
          {POSTS.map((post) => (
            <div key={post.title} className="card feature-card">
              <span className="eyebrow">{post.tag}</span>
              <h3>{post.title}</h3>
              <p>{post.date}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
