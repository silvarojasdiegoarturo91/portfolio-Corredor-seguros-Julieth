import { blogPosts, getBlogPostBySlug } from '@/lib/blog-posts'

describe('blogPosts data', () => {
  it('exports an array of 6 blog posts', () => {
    expect(blogPosts).toHaveLength(6)
  })

  it('each post has all required fields', () => {
    const requiredFields = ['id', 'slug', 'title', 'excerpt', 'category', 'date', 'readTime', 'icon', 'content']
    for (const post of blogPosts) {
      for (const field of requiredFields) {
        expect(post).toHaveProperty(field)
        expect(post[field as keyof typeof post]).toBeTruthy()
      }
    }
  })

  it('each post has a unique id', () => {
    const ids = blogPosts.map((p) => p.id)
    expect(new Set(ids).size).toBe(blogPosts.length)
  })

  it('each post has a unique slug', () => {
    const slugs = blogPosts.map((p) => p.slug)
    expect(new Set(slugs).size).toBe(blogPosts.length)
  })

  it('slugs contain only lowercase letters, numbers, and hyphens', () => {
    for (const post of blogPosts) {
      expect(post.slug).toMatch(/^[a-z0-9-]+$/)
    }
  })
})

describe('getBlogPostBySlug', () => {
  it('returns the correct post for a valid slug', () => {
    const post = getBlogPostBySlug('razones-para-seguro-de-vida')
    expect(post).toBeDefined()
    expect(post?.id).toBe(1)
    expect(post?.slug).toBe('razones-para-seguro-de-vida')
  })

  it('returns undefined for an unknown slug', () => {
    const post = getBlogPostBySlug('non-existent-slug')
    expect(post).toBeUndefined()
  })

  it('returns undefined for an empty string', () => {
    const post = getBlogPostBySlug('')
    expect(post).toBeUndefined()
  })

  it('is case-sensitive and does not match uppercase slugs', () => {
    const post = getBlogPostBySlug('RAZONES-PARA-SEGURO-DE-VIDA')
    expect(post).toBeUndefined()
  })

  it('returns all 6 posts when called with each slug', () => {
    for (const post of blogPosts) {
      const found = getBlogPostBySlug(post.slug)
      expect(found).toBeDefined()
      expect(found?.id).toBe(post.id)
    }
  })

  it('returns the pet insurance post for its slug', () => {
    const post = getBlogPostBySlug('seguro-de-mascotas-vale-la-pena')
    expect(post?.category).toBe('Mascotas')
  })

  it('returns the home insurance post for its slug', () => {
    const post = getBlogPostBySlug('todo-sobre-seguro-de-hogar')
    expect(post?.category).toBe('Seguro de Hogar')
  })
})
