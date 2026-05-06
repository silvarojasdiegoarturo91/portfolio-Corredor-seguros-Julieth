import React from 'react'
import { render } from '@testing-library/react'
import { vi } from 'vitest'

vi.mock('next/script', () => {
  const MockScript = ({ id }: { id: string }) => <div data-testid="meta-pixel-script" data-id={id} />
  MockScript.displayName = 'MockScript'
  return { default: MockScript }
})

describe('MetaPixel', () => {
  afterEach(() => {
    delete process.env.NEXT_PUBLIC_META_PIXEL_ID
    vi.resetModules()
  })

  it('renders nothing in the test environment (non-production)', async () => {
    const { MetaPixel } = await import('@/components/MetaPixel')
    const { container } = render(<MetaPixel />)
    expect(container).toBeEmptyDOMElement()
  })

  it('renders nothing when NEXT_PUBLIC_META_PIXEL_ID is not set, even in production', async () => {
    vi.resetModules()
    delete process.env.NEXT_PUBLIC_META_PIXEL_ID
    const savedNodeEnv = process.env.NODE_ENV
    process.env.NODE_ENV = 'production'
    const { MetaPixel } = await import('@/components/MetaPixel')
    const { container } = render(<MetaPixel />)
    expect(container).toBeEmptyDOMElement()
    process.env.NODE_ENV = savedNodeEnv
  })

  it('renders the Script element in production when PIXEL_ID is set', async () => {
    vi.resetModules()
    process.env.NEXT_PUBLIC_META_PIXEL_ID = 'test-pixel-123'
    const savedNodeEnv = process.env.NODE_ENV
    process.env.NODE_ENV = 'production'
    const { MetaPixel } = await import('@/components/MetaPixel')
    const { container } = render(<MetaPixel />)
    expect(container.querySelector('[data-testid="meta-pixel-script"]')).toBeInTheDocument()
    process.env.NODE_ENV = savedNodeEnv
  })
})
