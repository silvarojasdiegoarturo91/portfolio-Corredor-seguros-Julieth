import { vi } from 'vitest'
import React from 'react'
import { render, screen } from '@testing-library/react'
import { Footer } from '@/components/layout/Footer'

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

vi.mock('@/components/ui/JuliethLogo', () => ({
  JuliethLogo: ({ size }: { size?: number }) => (
    <svg data-testid="julieth-logo" data-size={size} />
  ),
}))

describe('Footer', () => {
  it('renders the brand name', () => {
    render(<Footer />)
    expect(screen.getByText('Julieth Seguros')).toBeInTheDocument()
  })

  it('renders the logo', () => {
    render(<Footer />)
    expect(screen.getByTestId('julieth-logo')).toBeInTheDocument()
  })

  it('renders a description paragraph', () => {
    render(<Footer />)
    expect(screen.getByText(/Protegemos lo que más amas/i)).toBeInTheDocument()
  })

  it('renders service links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Seguro de Vida' })).toHaveAttribute('href', '/services#vida')
    expect(screen.getByRole('link', { name: 'Seguro de Salud' })).toHaveAttribute('href', '/services#salud')
    expect(screen.getByRole('link', { name: 'Seguro de Mascotas' })).toHaveAttribute('href', '/services#mascotas')
    expect(screen.getByRole('link', { name: 'Seguro de Hogar' })).toHaveAttribute('href', '/services#hogar')
  })

  it('renders the privacy policy link', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Política de Privacidad' })).toHaveAttribute('href', '/politica-de-privacidad')
  })

  it('renders the CTA budget link', () => {
    render(<Footer />)
    const ctaLinks = screen.getAllByRole('link', { name: 'Solicitar presupuesto' })
    expect(ctaLinks.length).toBeGreaterThanOrEqual(1)
    expect(ctaLinks[0]).toHaveAttribute('href', '/contact')
  })

  it('renders the WhatsApp link', () => {
    render(<Footer />)
    const waLink = screen.getByRole('link', { name: 'WhatsApp' })
    expect(waLink).toBeInTheDocument()
    expect(waLink).toHaveAttribute('target', '_blank')
    expect(waLink).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('uses the NEXT_PUBLIC_WHATSAPP_NUMBER env var in the WhatsApp href', () => {
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER = '34600000000'
    render(<Footer />)
    const waLink = screen.getByRole('link', { name: 'WhatsApp' })
    expect(waLink.getAttribute('href')).toContain('34600000000')
    delete process.env.NEXT_PUBLIC_WHATSAPP_NUMBER
  })

  it('falls back to default WhatsApp number when env var is absent', () => {
    delete process.env.NEXT_PUBLIC_WHATSAPP_NUMBER
    render(<Footer />)
    const waLink = screen.getByRole('link', { name: 'WhatsApp' })
    expect(waLink.getAttribute('href')).toContain('34695135678')
  })

  it('renders contact info items', () => {
    render(<Footer />)
    expect(screen.getByText(/34 695 135 678/)).toBeInTheDocument()
    expect(screen.getByText(/contacto@juliethperezseguros\.com/)).toBeInTheDocument()
    expect(screen.getByText(/España/)).toBeInTheDocument()
  })

  it('renders the current year in the copyright notice', () => {
    render(<Footer />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
  })

  it('renders inside a <footer> element', () => {
    const { container } = render(<Footer />)
    expect(container.querySelector('footer')).toBeInTheDocument()
  })
})
