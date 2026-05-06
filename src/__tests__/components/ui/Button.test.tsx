import React from 'react'
import { render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import { Button } from '@/components/ui/Button'

vi.mock('next/link', () => {
  const MockLink = ({ href, className, children }: { href: string; className?: string; children: React.ReactNode }) => (
    <a href={href} className={className}>
      {children}
    </a>
  )
  MockLink.displayName = 'MockLink'
  return { default: MockLink }
})

describe('Button', () => {
  describe('rendering as a button element', () => {
    it('renders children text', () => {
      render(<Button>Click me</Button>)
      expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument()
    })

    it('renders as a <button> element when no href is provided', () => {
      render(<Button>Submit</Button>)
      expect(screen.getByRole('button')).toBeInTheDocument()
    })

    it('passes additional button attributes (type, disabled)', () => {
      render(
        <Button type="submit" disabled>
          Save
        </Button>
      )
      const btn = screen.getByRole('button')
      expect(btn).toHaveAttribute('type', 'submit')
      expect(btn).toBeDisabled()
    })
  })

  describe('rendering as a link element', () => {
    it('renders as an <a> element when href is provided', () => {
      render(<Button href="/contact">Contact</Button>)
      const link = screen.getByRole('link', { name: 'Contact' })
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute('href', '/contact')
    })

    it('does not render a <button> element when href is provided', () => {
      render(<Button href="/about">About</Button>)
      expect(screen.queryByRole('button')).not.toBeInTheDocument()
    })
  })

  describe('variants', () => {
    it('applies primary variant classes by default', () => {
      render(<Button>Primary</Button>)
      const btn = screen.getByRole('button')
      expect(btn.className).toContain('from-cyan-500')
    })

    it('applies secondary variant classes', () => {
      render(<Button variant="secondary">Secondary</Button>)
      const btn = screen.getByRole('button')
      expect(btn.className).toContain('bg-slate-900')
    })

    it('applies outline variant classes', () => {
      render(<Button variant="outline">Outline</Button>)
      const btn = screen.getByRole('button')
      expect(btn.className).toContain('border-slate-300')
    })

    it('applies white variant classes', () => {
      render(<Button variant="white">White</Button>)
      const btn = screen.getByRole('button')
      expect(btn.className).toContain('bg-white')
    })

    it('applies ghost variant classes', () => {
      render(<Button variant="ghost">Ghost</Button>)
      const btn = screen.getByRole('button')
      expect(btn.className).toContain('border-white/40')
    })

    it('applies glass variant classes', () => {
      render(<Button variant="glass">Glass</Button>)
      const btn = screen.getByRole('button')
      expect(btn.className).toContain('glass-card')
    })
  })

  describe('sizes', () => {
    it('applies md size classes by default', () => {
      render(<Button>Medium</Button>)
      const btn = screen.getByRole('button')
      expect(btn.className).toContain('px-6')
    })

    it('applies sm size classes', () => {
      render(<Button size="sm">Small</Button>)
      const btn = screen.getByRole('button')
      expect(btn.className).toContain('px-4')
    })

    it('applies lg size classes', () => {
      render(<Button size="lg">Large</Button>)
      const btn = screen.getByRole('button')
      expect(btn.className).toContain('px-8')
    })
  })

  describe('className prop', () => {
    it('appends custom className to the element', () => {
      render(<Button className="my-custom-class">Custom</Button>)
      const btn = screen.getByRole('button')
      expect(btn.className).toContain('my-custom-class')
    })
  })
})
