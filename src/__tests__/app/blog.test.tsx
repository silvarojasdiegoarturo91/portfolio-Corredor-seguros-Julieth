import { vi } from 'vitest'
import React from 'react'
import { render, screen } from '@testing-library/react'
import BlogPage from '@/app/blog/page'
import { blogPosts } from '@/lib/blog-posts'

vi.mock('next/link', () => {
  const MockLink = ({
    href,
    className,
    children,
  }: {
    href: string
    className?: string
    children: React.ReactNode
  }) => (
    <a href={href} className={className}>
      {children}
    </a>
  )
  MockLink.displayName = 'MockLink'
  return { default: MockLink }
})

describe('BlogPage', () => {
  it('renders the page heading', () => {
    render(<BlogPage />)
    expect(screen.getByRole('heading', { name: /Blog/i, level: 1 })).toBeInTheDocument()
  })

  it('renders the hero subtitle', () => {
    render(<BlogPage />)
    expect(screen.getByText(/Consejos, guías y todo lo que necesitas saber/i)).toBeInTheDocument()
  })

  it('renders a card for every blog post', () => {
    render(<BlogPage />)
    for (const post of blogPosts) {
      expect(screen.getByText(post.title)).toBeInTheDocument()
    }
  })

  it('renders the correct link for each blog post', () => {
    render(<BlogPage />)
    for (const post of blogPosts) {
      const links = screen.getAllByRole('link').filter(
        (link) => link.getAttribute('href') === `/blog/${post.slug}`
      )
      expect(links.length).toBeGreaterThanOrEqual(1)
    }
  })

  it('renders category filter buttons', () => {
    render(<BlogPage />)
    expect(screen.getByRole('button', { name: 'Todos' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Seguro de Vida' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Seguro de Salud' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Mascotas' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Seguro de Hogar' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Educación Financiera' })).toBeInTheDocument()
  })

  it('renders the newsletter section heading', () => {
    render(<BlogPage />)
    expect(screen.getByRole('heading', { name: /Recibe consejos en tu email/i })).toBeInTheDocument()
  })

  it('renders the contact CTA link', () => {
    render(<BlogPage />)
    expect(screen.getByRole('link', { name: /¿Tienes alguna pregunta\? Contáctanos/i })).toHaveAttribute('href', '/contact')
  })

  it('renders post read time for each post', () => {
    render(<BlogPage />)
    const uniqueReadTimes = [...new Set(blogPosts.map((p) => p.readTime))]
    for (const readTime of uniqueReadTimes) {
      const matches = screen.getAllByText(new RegExp(readTime))
      expect(matches.length).toBeGreaterThanOrEqual(1)
    }
  })

  it('renders post categories on the cards', () => {
    render(<BlogPage />)
    for (const post of blogPosts) {
      const categoryEls = screen.getAllByText(post.category)
      expect(categoryEls.length).toBeGreaterThanOrEqual(1)
    }
  })
})
