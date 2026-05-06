import { vi } from 'vitest'
import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Navbar } from '@/components/layout/Navbar'

vi.mock('next/link', () => {
  const MockLink = ({
    href,
    className,
    children,
    onClick,
  }: {
    href: string
    className?: string
    children: React.ReactNode
    onClick?: () => void
  }) => (
    <a href={href} className={className} onClick={onClick}>
      {children}
    </a>
  )
  MockLink.displayName = 'MockLink'
  return { default: MockLink }
})

vi.mock('next/navigation', () => ({
  usePathname: vi.fn(),
}))

vi.mock('@/components/ui/JuliethLogo', () => ({
  JuliethLogo: ({ size }: { size?: number }) => (
    <svg data-testid="julieth-logo" data-size={size} />
  ),
}))

import { usePathname } from 'next/navigation'

const mockUsePathname = usePathname as jest.Mock

beforeEach(() => {
  mockUsePathname.mockReturnValue('/')
})

describe('Navbar', () => {
  describe('desktop navigation', () => {
    it('renders the brand name', () => {
      render(<Navbar />)
      expect(screen.getByText('Julieth Seguros')).toBeInTheDocument()
    })

    it('renders the brand tagline', () => {
      render(<Navbar />)
      expect(screen.getByText('Corredora certificada en España')).toBeInTheDocument()
    })

    it('renders the logo', () => {
      render(<Navbar />)
      expect(screen.getByTestId('julieth-logo')).toBeInTheDocument()
    })

    it('renders all navigation links', () => {
      render(<Navbar />)
      expect(screen.getByRole('link', { name: 'Inicio' })).toBeInTheDocument()
      expect(screen.getByRole('link', { name: 'Servicios' })).toBeInTheDocument()
      expect(screen.getByRole('link', { name: 'Nosotros' })).toBeInTheDocument()
      expect(screen.getByRole('link', { name: 'Blog' })).toBeInTheDocument()
      expect(screen.getByRole('link', { name: 'Contacto' })).toBeInTheDocument()
    })

    it('renders the CTA button', () => {
      render(<Navbar />)
      const ctas = screen.getAllByRole('link', { name: 'Solicitar presupuesto' })
      expect(ctas.length).toBeGreaterThanOrEqual(1)
    })

    it('applies active styles to the current path link', () => {
      mockUsePathname.mockReturnValue('/services')
      render(<Navbar />)
      const servicesLink = screen.getAllByRole('link', { name: 'Servicios' })[0]
      expect(servicesLink.className).toContain('text-cyan-700')
      expect(servicesLink.className).toContain('border-b-2')
    })

    it('does not apply active styles to non-current path links', () => {
      mockUsePathname.mockReturnValue('/services')
      render(<Navbar />)
      const inicioLinks = screen.getAllByRole('link', { name: 'Inicio' })
      expect(inicioLinks[0].className).toContain('text-slate-600')
    })
  })

  describe('mobile menu', () => {
    it('does not show mobile menu by default', () => {
      render(<Navbar />)
      expect(screen.queryByRole('link', { name: 'Inicio' })?.closest('.md\\:hidden')).not.toBeInTheDocument()
    })

    it('toggles mobile menu open when hamburger button is clicked', async () => {
      const user = userEvent.setup()
      render(<Navbar />)
      const toggleBtn = screen.getByRole('button', { name: /toggle menu/i })
      await user.click(toggleBtn)
      // After opening, there should be mobile menu links (they appear in the pb-4 div)
      const allLinks = screen.getAllByRole('link', { name: 'Inicio' })
      expect(allLinks.length).toBeGreaterThanOrEqual(2)
    })

    it('closes mobile menu when a nav link is clicked', async () => {
      const user = userEvent.setup()
      render(<Navbar />)
      await user.click(screen.getByRole('button', { name: /toggle menu/i }))
      // Menu is open, now click the first mobile-menu Inicio link
      const allInicioLinks = screen.getAllByRole('link', { name: 'Inicio' })
      await user.click(allInicioLinks[allInicioLinks.length - 1])
      // After close the mobile links should collapse back to just one desktop link
      const afterLinks = screen.getAllByRole('link', { name: 'Inicio' })
      expect(afterLinks.length).toBe(1)
    })

    it('renders the mobile toggle button', () => {
      render(<Navbar />)
      expect(screen.getByRole('button', { name: /toggle menu/i })).toBeInTheDocument()
    })
  })
})
