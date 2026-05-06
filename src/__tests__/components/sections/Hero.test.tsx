import { vi } from 'vitest'
import React from 'react'
import { render, screen } from '@testing-library/react'
import { Hero } from '@/components/sections/Hero'

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

describe('Hero', () => {
  it('renders the main heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  })

  it('renders the headline text', () => {
    render(<Hero />)
    expect(screen.getByText(/Tu tranquilidad financiera/i)).toBeInTheDocument()
  })

  it('renders the gradient headline span', () => {
    render(<Hero />)
    expect(screen.getByText(/diseñada a medida/i)).toBeInTheDocument()
  })

  it('renders the introductory paragraph', () => {
    render(<Hero />)
    expect(screen.getByText(/Correduría premium en España/i)).toBeInTheDocument()
  })

  it('renders the primary CTA link to /contact', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /Solicitar estudio gratuito/i })).toHaveAttribute('href', '/contact')
  })

  it('renders the secondary CTA link to /services', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /Ver coberturas/i })).toHaveAttribute('href', '/services')
  })

  it('renders the three stats', () => {
    render(<Hero />)
    expect(screen.getByText('4.9/5')).toBeInTheDocument()
    expect(screen.getByText('Valoración media')).toBeInTheDocument()
    expect(screen.getByText('<24h')).toBeInTheDocument()
    expect(screen.getByText('Tiempo de respuesta')).toBeInTheDocument()
    expect(screen.getByText('100%')).toBeInTheDocument()
    expect(screen.getByText('Asesoría personalizada')).toBeInTheDocument()
  })

  it('renders the five-star rating section', () => {
    render(<Hero />)
    expect(screen.getByLabelText(/Valoración de 5 estrellas/i)).toBeInTheDocument()
  })

  it('renders the trust badge items', () => {
    render(<Hero />)
    expect(screen.getByText(/Corredora certificada en España/i)).toBeInTheDocument()
    expect(screen.getByText(/Diagnóstico de riesgo personalizado/i)).toBeInTheDocument()
    expect(screen.getByText(/Acompañamiento humano en cada paso/i)).toBeInTheDocument()
  })

  it('renders the testimonial quote', () => {
    render(<Hero />)
    expect(screen.getByText(/En menos de un día tuvimos un plan claro/i)).toBeInTheDocument()
  })

  it('renders the testimonial attribution', () => {
    render(<Hero />)
    expect(screen.getByText(/María G\. · Seguro de Vida/i)).toBeInTheDocument()
  })

  it('renders the insurance type badges', () => {
    render(<Hero />)
    expect(screen.getByText('Vida')).toBeInTheDocument()
    expect(screen.getByText('Salud')).toBeInTheDocument()
    expect(screen.getByText('Mascotas')).toBeInTheDocument()
    expect(screen.getByText('Hogar')).toBeInTheDocument()
    expect(screen.getByText('Decesos')).toBeInTheDocument()
  })

  it('renders the social proof badge', () => {
    render(<Hero />)
    expect(screen.getByText(/\+50 clientes asesorados/i)).toBeInTheDocument()
    expect(screen.getByText(/2 años en España/i)).toBeInTheDocument()
  })
})
