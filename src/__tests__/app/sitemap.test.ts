/**
 * @vitest-environment node
 */
import { vi } from 'vitest'
import sitemap from '@/app/sitemap'
import { blogPosts } from '@/lib/blog-posts'

describe('sitemap()', () => {
  afterEach(() => {
    delete process.env.NEXT_PUBLIC_BASE_URL
  })

  it('returns an array', () => {
    const result = sitemap()
    expect(Array.isArray(result)).toBe(true)
  })

  it('includes static pages', () => {
    const result = sitemap()
    const urls = result.map((entry) => entry.url)
    expect(urls).toContain('https://juliethperezseguros.com')
    expect(urls).toContain('https://juliethperezseguros.com/services')
    expect(urls).toContain('https://juliethperezseguros.com/about')
    expect(urls).toContain('https://juliethperezseguros.com/contact')
    expect(urls).toContain('https://juliethperezseguros.com/blog')
    expect(urls).toContain('https://juliethperezseguros.com/politica-de-privacidad')
  })

  it('uses the default base URL when NEXT_PUBLIC_BASE_URL is not set', () => {
    const result = sitemap()
    expect(result[0].url).toBe('https://juliethperezseguros.com')
  })

  it('uses NEXT_PUBLIC_BASE_URL when it is set', () => {
    process.env.NEXT_PUBLIC_BASE_URL = 'https://staging.example.com'
    const result = sitemap()
    expect(result[0].url).toBe('https://staging.example.com')
  })

  it('includes a blog post URL for every blog post', () => {
    const result = sitemap()
    const urls = result.map((entry) => entry.url)
    for (const post of blogPosts) {
      expect(urls).toContain(`https://juliethperezseguros.com/blog/${post.slug}`)
    }
  })

  it('has the correct total number of entries (6 static + number of blog posts)', () => {
    const result = sitemap()
    expect(result).toHaveLength(6 + blogPosts.length)
  })

  it('assigns monthly changeFrequency to blog post entries', () => {
    const result = sitemap()
    const blogPostEntries = result.filter((e) => e.url.includes('/blog/'))
    for (const entry of blogPostEntries) {
      expect(entry.changeFrequency).toBe('monthly')
    }
  })

  it('assigns priority 0.6 to blog post entries', () => {
    const result = sitemap()
    const blogPostEntries = result.filter((e) => e.url.includes('/blog/'))
    for (const entry of blogPostEntries) {
      expect(entry.priority).toBe(0.6)
    }
  })

  it('assigns priority 1 to the homepage entry', () => {
    const result = sitemap()
    const home = result.find((e) => e.url === 'https://juliethperezseguros.com')
    expect(home?.priority).toBe(1)
  })

  it('parses valid Spanish month abbreviations in blog post dates', () => {
    const result = sitemap()
    const blogPostEntries = result.filter((e) => e.url.includes('/blog/'))
    for (const entry of blogPostEntries) {
      expect(entry.lastModified).toBeInstanceOf(Date)
    }
  })

  it('throws when a blog post has an unrecognised month abbreviation', async () => {
    vi.resetModules()
    vi.doMock('@/lib/blog-posts', () => ({
      blogPosts: [
        {
          id: 99,
          slug: 'test-post',
          title: 'Test',
          excerpt: 'Test',
          category: 'Test',
          date: '15 Zzz 2026',
          readTime: '1 min',
          icon: '❓',
          content: 'Content',
        },
      ],
    }))
    const { default: sitemapFresh } = await import('@/app/sitemap')
    expect(() => sitemapFresh()).toThrow(/Unrecognised Spanish month abbreviation/)
    vi.doUnmock('@/lib/blog-posts')
    vi.resetModules()
  })
})
