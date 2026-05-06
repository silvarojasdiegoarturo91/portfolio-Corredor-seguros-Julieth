import { vi } from 'vitest'
import React from 'react'
import { render, screen } from '@testing-library/react'
import ThankYouPage from '@/app/thank-you/page'

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

describe('ThankYouPage', () => {
  it('renders the thank-you heading', () => {
    render(<ThankYouPage />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Gracias por contactarnos/i)
  })

  it('renders the confirmation message', () => {
    render(<ThankYouPage />)
    expect(screen.getByText(/Hemos recibido tu solicitud/i)).toBeInTheDocument()
  })

  it('mentions the 24-hour response promise', () => {
    render(<ThankYouPage />)
    expect(screen.getByText(/menos de 24 horas/i)).toBeInTheDocument()
  })

  it('renders the WhatsApp link', () => {
    render(<ThankYouPage />)
    const waLink = screen.getByRole('link', { name: /WhatsApp Ahora/i })
    expect(waLink).toBeInTheDocument()
    expect(waLink).toHaveAttribute('href', expect.stringContaining('wa.me'))
    expect(waLink).toHaveAttribute('target', '_blank')
    expect(waLink).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('renders the "Volver al Inicio" link', () => {
    render(<ThankYouPage />)
    expect(screen.getByRole('link', { name: /Volver al Inicio/i })).toHaveAttribute('href', '/')
  })

  it('renders the "Ver Servicios" link', () => {
    render(<ThankYouPage />)
    expect(screen.getByRole('link', { name: /Ver Servicios/i })).toHaveAttribute('href', '/services')
  })

  it('renders the success icon', () => {
    render(<ThankYouPage />)
    expect(screen.getByText('✅')).toBeInTheDocument()
  })
})
