import React from 'react'
import { render, screen } from '@testing-library/react'
import { JuliethLogo } from '@/components/ui/JuliethLogo'

describe('JuliethLogo', () => {
  it('renders an SVG element', () => {
    render(<JuliethLogo />)
    expect(screen.getByRole('img')).toBeInTheDocument()
  })

  it('has the correct aria-label', () => {
    render(<JuliethLogo />)
    expect(screen.getByRole('img')).toHaveAttribute('aria-label', 'Julieth Seguros logo')
  })

  it('renders with default size of 40', () => {
    render(<JuliethLogo />)
    const svg = screen.getByRole('img')
    expect(svg).toHaveAttribute('width', '40')
    expect(svg).toHaveAttribute('height', '40')
  })

  it('renders with a custom size', () => {
    render(<JuliethLogo size={64} />)
    const svg = screen.getByRole('img')
    expect(svg).toHaveAttribute('width', '64')
    expect(svg).toHaveAttribute('height', '64')
  })

  it('applies a custom className', () => {
    render(<JuliethLogo className="my-custom-class" />)
    const svg = screen.getByRole('img')
    expect(svg).toHaveClass('my-custom-class')
  })

  it('renders the JS monogram text', () => {
    const { container } = render(<JuliethLogo />)
    expect(container.querySelector('text')).toHaveTextContent('JS')
  })

  it('has the correct viewBox', () => {
    render(<JuliethLogo />)
    expect(screen.getByRole('img')).toHaveAttribute('viewBox', '0 0 40 40')
  })
})
