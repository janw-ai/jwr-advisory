import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const blogDir = path.join(process.cwd(), 'content/blog')

export function getAllPosts() {
  if (!fs.existsSync(blogDir)) return []
  const files = fs.readdirSync(blogDir).filter(f => f.endsWith('.md'))
  const posts = files.map(filename => {
    const slug = filename.replace(/\.md$/, '')
    const raw = fs.readFileSync(path.join(blogDir, filename), 'utf-8')
    const { data } = matter(raw)
    return { slug, ...data }
  })
  return posts.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getAllSlugs() {
  if (!fs.existsSync(blogDir)) return []
  return fs.readdirSync(blogDir)
    .filter(f => f.endsWith('.md'))
    .map(f => f.replace(/\.md$/, ''))
}

export async function getPostBySlug(slug) {
  const raw = fs.readFileSync(path.join(blogDir, `${slug}.md`), 'utf-8')
  const { data, content } = matter(raw)
  const result = await remark().use(html).process(content)
  return { slug, content: result.toString(), ...data }
}
