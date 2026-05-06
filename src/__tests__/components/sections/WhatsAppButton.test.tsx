import React from 'react'
import { render, screen } from '@testing-library/react'
import { WhatsAppButton } from '@/components/sections/WhatsAppButton'

describe('WhatsAppButton', () => {
  afterEach(() => {
    delete process.env.NEXT_PUBLIC_WHATSAPP_NUMBER
  })

  it('renders a link element', () => {
    render(<WhatsAppButton />)
    expect(screen.getByRole('link')).toBeInTheDocument()
  })

  it('has the correct aria-label', () => {
    render(<WhatsAppButton />)
    expect(screen.getByRole('link')).toHaveAttribute('aria-label', 'Contactar por WhatsApp')
  })

  it('opens in a new tab', () => {
    render(<WhatsAppButton />)
    const link = screen.getByRole('link')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('uses the default phone number when env var is not set', () => {
    render(<WhatsAppButton />)
    const href = screen.getByRole('link').getAttribute('href') ?? ''
    expect(href).toContain('wa.me/34695135678')
  })

  it('uses NEXT_PUBLIC_WHATSAPP_NUMBER env var when set', () => {
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER = '34600123456'
    render(<WhatsAppButton />)
    const href = screen.getByRole('link').getAttribute('href') ?? ''
    expect(href).toContain('wa.me/34600123456')
  })

  it('includes an encoded message in the URL', () => {
    render(<WhatsAppButton />)
    const href = screen.getByRole('link').getAttribute('href') ?? ''
    expect(href).toContain('text=')
    expect(href).toContain('Julieth')
  })

  it('renders the visible label text on larger screens', () => {
    render(<WhatsAppButton />)
    expect(screen.getByText('Chatea con Julieth')).toBeInTheDocument()
  })

  it('renders an SVG icon', () => {
    const { container } = render(<WhatsAppButton />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })
})
