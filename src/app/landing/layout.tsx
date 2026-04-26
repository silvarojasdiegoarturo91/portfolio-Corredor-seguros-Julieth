import type { ReactNode } from 'react'
import { WhatsAppButton } from '@/components/sections/WhatsAppButton'

/**
 * Landing page layout — no Navbar or Footer to minimize distractions and
 * maximize lead conversion. Only the floating WhatsApp button is kept.
 */
export default function LandingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <main>{children}</main>
      <WhatsAppButton />
    </>
  )
}
