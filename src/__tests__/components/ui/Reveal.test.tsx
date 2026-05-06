import React from 'react'
import { render, screen, act } from '@testing-library/react'
import { Reveal } from '@/components/ui/Reveal'

type IntersectionCallback = (entries: IntersectionObserverEntry[]) => void

let intersectionCallback: IntersectionCallback | null = null

const mockObserve = jest.fn()
const mockUnobserve = jest.fn()
const mockDisconnect = jest.fn()

beforeAll(() => {
  global.IntersectionObserver = jest.fn((callback: IntersectionCallback) => {
    intersectionCallback = callback
    return {
      observe: mockObserve,
      unobserve: mockUnobserve,
      disconnect: mockDisconnect,
    }
  }) as unknown as typeof IntersectionObserver
})

beforeEach(() => {
  jest.clearAllMocks()
  intersectionCallback = null
})

describe('Reveal', () => {
  it('renders children', () => {
    render(<Reveal>Hello World</Reveal>)
    expect(screen.getByText('Hello World')).toBeInTheDocument()
  })

  it('wraps children in a div with section-reveal class initially', () => {
    const { container } = render(<Reveal>Content</Reveal>)
    const div = container.firstChild as HTMLElement
    expect(div.className).toContain('section-reveal')
  })

  it('does not have visible class before intersection', () => {
    const { container } = render(<Reveal>Content</Reveal>)
    const div = container.firstChild as HTMLElement
    expect(div.className).not.toContain('visible')
  })

  it('adds visible class after intersection is triggered', async () => {
    const { container } = render(<Reveal>Content</Reveal>)
    const div = container.firstChild as HTMLElement

    act(() => {
      intersectionCallback?.([{ isIntersecting: true, target: div } as IntersectionObserverEntry])
    })

    expect(div.className).toContain('visible')
  })

  it('does not add visible class when isIntersecting is false', () => {
    const { container } = render(<Reveal>Content</Reveal>)
    const div = container.firstChild as HTMLElement

    act(() => {
      intersectionCallback?.([{ isIntersecting: false, target: div } as IntersectionObserverEntry])
    })

    expect(div.className).not.toContain('visible')
  })

  it('calls unobserve after becoming visible', async () => {
    const { container } = render(<Reveal>Content</Reveal>)
    const div = container.firstChild as HTMLElement

    act(() => {
      intersectionCallback?.([{ isIntersecting: true, target: div } as IntersectionObserverEntry])
    })

    expect(mockUnobserve).toHaveBeenCalled()
  })

  it('calls disconnect on unmount', () => {
    const { unmount } = render(<Reveal>Content</Reveal>)
    unmount()
    expect(mockDisconnect).toHaveBeenCalled()
  })

  it('appends custom className to the wrapper div', () => {
    const { container } = render(<Reveal className="my-animation">Content</Reveal>)
    const div = container.firstChild as HTMLElement
    expect(div.className).toContain('my-animation')
  })

  it('calls observe with the wrapper element on mount', () => {
    const { container } = render(<Reveal>Content</Reveal>)
    const div = container.firstChild as HTMLElement
    expect(mockObserve).toHaveBeenCalledWith(div)
  })
})
