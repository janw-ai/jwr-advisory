import { getAllSlugs } from '@/lib/blog'

export default function sitemap() {
  const blogSlugs = getAllSlugs()
  const base = 'https://jwr-advisory.com'

  const staticPages = [
    { url: base, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/embedded-finance`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/ki-beratung`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/consulting`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${base}/kontakt`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
  ]

  const blogPages = blogSlugs.map(slug => ({
    url: `${base}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticPages, ...blogPages]
}
