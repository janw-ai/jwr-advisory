import { getPostBySlug, getAllSlugs } from '@/lib/blog'

export async function generateStaticParams() {
  return getAllSlugs().map(slug => ({ slug }))
}

export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.slug)
  return {
    title: `${post.title} – JWR Advisory Blog`,
    description: post.excerpt || post.title,
    openGraph: { title: post.title, description: post.excerpt || post.title },
  }
}

export default async function BlogPost({ params }) {
  const post = await getPostBySlug(params.slug)
  return (
    <article style={{ padding: '50px 0 60px' }}>
      <div className="w-narrow">
        <p className="label">Blog · {post.date}</p>
        <h1 style={{ fontSize: 'clamp(26px, 4vw, 38px)' }}>{post.title}</h1>
        <p className="g" style={{ fontSize: 12, marginBottom: 32 }}>Von {post.author || 'Jan Wichmann'} · {post.readtime || '5 min Lesezeit'}</p>
        <div className="blog-body" dangerouslySetInnerHTML={{ __html: post.content }} />
        {post.tags && (
          <div style={{ marginTop: 32, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {post.tags.map(t => <span key={t} className="tag">{t}</span>)}
          </div>
        )}
        <div style={{ marginTop: 40, padding: '24px 28px', borderRadius: 6, border: '1px solid rgba(39,71,110,.22)', background: 'rgba(39,71,110,.04)' }}>
          <p style={{ fontSize: 13, fontWeight: 400, marginBottom: 8 }}>{post.cta_title || 'Sie möchten mehr erfahren?'}</p>
          <p className="g" style={{ fontSize: 13, fontWeight: 300, marginBottom: 14 }}>{post.cta_text || '30 Minuten. Unverbindlich.'}</p>
          <a href="/#kontakt" className="btn">Gespräch vereinbaren</a>
        </div>
      </div>
    </article>
  )
}
