import { vi } from 'vitest'
import React from 'react'
import { render, screen } from '@testing-library/react'
import { PartnerLogo } from '@/components/ui/PartnerLogo'

vi.mock('next/image', () => {
  const MockImage = ({
    src,
    alt,
    width,
    height,
    className,
  }: {
    src: string
    alt: string
    width: number
    height: number
    className?: string
  }) => <img src={src} alt={alt} width={width} height={height} className={className} />
  MockImage.displayName = 'MockImage'
  return { default: MockImage }
})

describe('PartnerLogo', () => {
  it('renders an img element', () => {
    render(<PartnerLogo name="Mapfre" logoFile="mapfre.png" />)
    expect(screen.getByRole('img')).toBeInTheDocument()
  })

  it('builds the correct src path from logoFile', () => {
    render(<PartnerLogo name="Mapfre" logoFile="mapfre.png" />)
    expect(screen.getByRole('img')).toHaveAttribute('src', '/images/insurers/mapfre.png')
  })

  it('builds the alt text from the name prop', () => {
    render(<PartnerLogo name="Allianz" logoFile="allianz.svg" />)
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'Logo de Allianz')
  })

  it('renders a containing div with sizing classes', () => {
    const { container } = render(<PartnerLogo name="AXA" logoFile="axa.png" />)
    const wrapper = container.firstChild as HTMLElement
    expect(wrapper.className).toContain('h-14')
    expect(wrapper.className).toContain('w-36')
  })

  it('passes correct width and height to image', () => {
    render(<PartnerLogo name="Generali" logoFile="generali.png" />)
    const img = screen.getByRole('img')
    expect(img).toHaveAttribute('width', '144')
    expect(img).toHaveAttribute('height', '56')
  })

  it('handles different file extensions', () => {
    render(<PartnerLogo name="Zurich" logoFile="zurich.webp" />)
    expect(screen.getByRole('img')).toHaveAttribute('src', '/images/insurers/zurich.webp')
  })
})
