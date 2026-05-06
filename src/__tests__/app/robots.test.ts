/**
 * @vitest-environment node
 */
import robots from '@/app/robots'

describe('robots()', () => {
  afterEach(() => {
    delete process.env.NEXT_PUBLIC_BASE_URL
  })

  it('returns an object with a rules array and sitemap string', () => {
    const result = robots()
    expect(result).toHaveProperty('rules')
    expect(Array.isArray(result.rules)).toBe(true)
    expect(result).toHaveProperty('sitemap')
  })

  it('uses the default base URL when NEXT_PUBLIC_BASE_URL is not set', () => {
    const result = robots()
    expect(result.sitemap).toBe('https://juliethperezseguros.com/sitemap.xml')
  })

  it('uses NEXT_PUBLIC_BASE_URL when it is set', () => {
    process.env.NEXT_PUBLIC_BASE_URL = 'https://staging.example.com'
    const result = robots()
    expect(result.sitemap).toBe('https://staging.example.com/sitemap.xml')
  })

  it('allows all user agents', () => {
    const result = robots()
    const rules = Array.isArray(result.rules) ? result.rules : [result.rules]
    expect(rules[0].userAgent).toBe('*')
  })

  it('allows the root path', () => {
    const result = robots()
    const rules = Array.isArray(result.rules) ? result.rules : [result.rules]
    expect(rules[0].allow).toBe('/')
  })

  it('disallows /admin, /api/, and /thank-you', () => {
    const result = robots()
    const rules = Array.isArray(result.rules) ? result.rules : [result.rules]
    const disallow = rules[0].disallow as string[]
    expect(disallow).toContain('/admin')
    expect(disallow).toContain('/api/')
    expect(disallow).toContain('/thank-you')
  })
})
