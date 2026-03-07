import { getAllPosts } from '@/lib/blog'
import Link from 'next/link'

export const metadata = {
  title: 'Blog – JWR Advisory | KI & Embedded Finance Insights',
  description: 'Insights zu KI für Finanzdienstleister, Embedded Finance und Consulting im DACH-Raum.',
}

export default function BlogIndex() {
  const posts = getAllPosts()
  return (
    <section style={{ padding: '60px 0' }}>
      <div className="w">
        <p className="label">Blog</p>
        <h1>Insights.</h1>
        <p className="sub">KI, Embedded Finance und Consulting für Finanzdienstleister im DACH-Raum.</p>
        <div className="grid3" style={{ marginTop: 24 }}>
          {posts.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-card" style={{ textDecoration: 'none', color: 'inherit' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
                <span className="blog-tag">{post.tag}</span>
                <span className="blog-date">{post.date}</span>
              </div>
              <h3 style={{ fontSize: 15, lineHeight: 1.4 }}>{post.title}</h3>
              {post.excerpt && <p className="g" style={{ fontSize: 12, fontWeight: 300, marginTop: 8 }}>{post.excerpt}</p>}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
