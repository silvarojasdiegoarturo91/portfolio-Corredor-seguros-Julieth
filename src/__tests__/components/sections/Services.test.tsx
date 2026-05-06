import { vi } from 'vitest'
import React from 'react'
import { render, screen } from '@testing-library/react'
import { ServicesSection } from '@/components/sections/Services'

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

describe('ServicesSection', () => {
  it('renders the section heading', () => {
    render(<ServicesSection />)
    expect(screen.getByRole('heading', { name: /Nuestros Servicios/i })).toBeInTheDocument()
  })

  it('renders the section subtitle', () => {
    render(<ServicesSection />)
    expect(screen.getByText(/Soluciones de seguro completas/i)).toBeInTheDocument()
  })

  it('renders all 5 service card headings', () => {
    render(<ServicesSection />)
    expect(screen.getByRole('heading', { name: /Seguro de Vida/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Seguro de Salud/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Seguro de Mascotas/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Seguro de Hogar/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Seguro de Decesos/i })).toBeInTheDocument()
  })

  it('renders the correct href for each service card CTA', () => {
    render(<ServicesSection />)
    const links = screen.getAllByRole('link', { name: /Ver más detalles/i })
    const hrefs = links.map((l) => l.getAttribute('href'))
    expect(hrefs).toContain('/services/vida')
    expect(hrefs).toContain('/services/salud')
    expect(hrefs).toContain('/services/mascotas')
    expect(hrefs).toContain('/services/hogar')
    expect(hrefs).toContain('/services/decesos')
  })

  it('renders features for the life insurance card', () => {
    render(<ServicesSection />)
    expect(screen.getByText('Cobertura fallecimiento')).toBeInTheDocument()
    expect(screen.getByText('Invalidez permanente')).toBeInTheDocument()
  })

  it('renders features for the health insurance card', () => {
    render(<ServicesSection />)
    expect(screen.getByText('Hospitalización')).toBeInTheDocument()
    expect(screen.getByText('Medicamentos')).toBeInTheDocument()
  })

  it('renders features for the pet insurance card', () => {
    render(<ServicesSection />)
    expect(screen.getByText('Consultas veterinarias')).toBeInTheDocument()
    expect(screen.getByText('Emergencias 24/7')).toBeInTheDocument()
  })

  it('renders features for the home insurance card', () => {
    render(<ServicesSection />)
    expect(screen.getByText('Incendio y explosión')).toBeInTheDocument()
    expect(screen.getByText('Responsabilidad civil')).toBeInTheDocument()
  })

  it('renders features for the decesos insurance card', () => {
    render(<ServicesSection />)
    expect(screen.getByText('Gastos de sepelio')).toBeInTheDocument()
    expect(screen.getByText('Repatriación internacional')).toBeInTheDocument()
  })

  it('renders exactly 5 "Ver más detalles" links', () => {
    render(<ServicesSection />)
    expect(screen.getAllByRole('link', { name: /Ver más detalles/i })).toHaveLength(5)
  })
})
