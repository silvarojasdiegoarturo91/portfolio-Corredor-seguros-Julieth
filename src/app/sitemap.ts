import { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/blog-posts'

const MONTHS_ES: Record<string, number> = {
  Ene: 0, Feb: 1, Mar: 2, Abr: 3, May: 4, Jun: 5,
  Jul: 6, Ago: 7, Sep: 8, Oct: 9, Nov: 10, Dic: 11,
}

function parseSpanishDate(dateStr: string): Date {
  const [day, month, year] = dateStr.split(' ')
  const monthIndex = MONTHS_ES[month]
  if (monthIndex === undefined) {
    throw new Error(`Unrecognised Spanish month abbreviation: "${month}" in date "${dateStr}"`)
  }
  return new Date(parseInt(year), monthIndex, parseInt(day))
}

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://juliethperezseguros.com'

  const blogPostUrls: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: parseSpanishDate(post.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [
    { url: baseUrl, lastModified: new Date('2026-04-18'), changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/services`, lastModified: new Date('2026-04-01'), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: new Date('2026-04-01'), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: new Date('2026-04-01'), changeFrequency: 'monthly', priority: 0.9 },
    { url: `${baseUrl}/blog`, lastModified: new Date('2026-04-18'), changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/politica-de-privacidad`, lastModified: new Date('2026-04-01'), changeFrequency: 'yearly', priority: 0.3 },
    ...blogPostUrls,
  ]
}

