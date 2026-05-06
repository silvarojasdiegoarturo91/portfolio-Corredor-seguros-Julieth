import React from 'react'
import { render, screen } from '@testing-library/react'
import { Card } from '@/components/ui/Card'

describe('Card', () => {
  it('renders children', () => {
    render(<Card>Card content</Card>)
    expect(screen.getByText('Card content')).toBeInTheDocument()
  })

  it('uses soft-card class by default (glass=false)', () => {
    const { container } = render(<Card>Content</Card>)
    const div = container.firstChild as HTMLElement
    expect(div.className).toContain('soft-card')
    expect(div.className).not.toContain('glass-card')
  })

  it('uses glass-card class when glass=true', () => {
    const { container } = render(<Card glass>Content</Card>)
    const div = container.firstChild as HTMLElement
    expect(div.className).toContain('glass-card')
    expect(div.className).not.toContain('soft-card')
  })

  it('includes rounded-2xl and p-6 base classes', () => {
    const { container } = render(<Card>Content</Card>)
    const div = container.firstChild as HTMLElement
    expect(div.className).toContain('rounded-2xl')
    expect(div.className).toContain('p-6')
  })

  it('adds hover classes when hover=true', () => {
    const { container } = render(<Card hover>Content</Card>)
    const div = container.firstChild as HTMLElement
    expect(div.className).toContain('hover:shadow-2xl')
    expect(div.className).toContain('transition-all')
  })

  it('does not add hover classes when hover=false (default)', () => {
    const { container } = render(<Card>Content</Card>)
    const div = container.firstChild as HTMLElement
    expect(div.className).not.toContain('hover:shadow-2xl')
  })

  it('sets the id attribute when id prop is provided', () => {
    const { container } = render(<Card id="section-1">Content</Card>)
    const div = container.firstChild as HTMLElement
    expect(div).toHaveAttribute('id', 'section-1')
  })

  it('does not set an id attribute when id prop is absent', () => {
    const { container } = render(<Card>Content</Card>)
    const div = container.firstChild as HTMLElement
    expect(div).not.toHaveAttribute('id')
  })

  it('appends additional className to the element', () => {
    const { container } = render(<Card className="extra-class">Content</Card>)
    const div = container.firstChild as HTMLElement
    expect(div.className).toContain('extra-class')
  })

  it('renders complex children correctly', () => {
    render(
      <Card>
        <h2>Title</h2>
        <p>Paragraph</p>
      </Card>
    )
    expect(screen.getByRole('heading', { name: 'Title' })).toBeInTheDocument()
    expect(screen.getByText('Paragraph')).toBeInTheDocument()
  })
})
