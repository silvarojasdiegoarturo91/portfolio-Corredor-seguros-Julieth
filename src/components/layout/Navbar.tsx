'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { JuliethLogo } from '@/components/ui/JuliethLogo'

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/services', label: 'Servicios' },
  { href: '/about', label: 'Nosotros' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contacto' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <nav className="sticky top-0 z-50 border-b border-white/45 bg-white/78 backdrop-blur-xl shadow-[0_10px_30px_rgba(16,24,40,0.06)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-[72px]">
          <Link href="/" className="flex items-center space-x-2">
            <JuliethLogo size={40} />
            <div className="leading-tight">
              <span className="font-display block text-slate-900 text-sm sm:text-base font-extrabold tracking-tight">
                Julieth Seguros
              </span>
              <span className="text-[11px] sm:text-xs text-slate-500 font-semibold">
                Corredora certificada en España
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold transition-colors ${
                  pathname === link.href
                    ? 'text-cyan-700 border-b-2 border-cyan-600 pb-1'
                    : 'text-slate-600 hover:text-cyan-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="inline-flex items-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(37,99,235,0.36)] hover:-translate-y-0.5 transition-all"
            >
              Solicitar presupuesto
            </Link>
          </div>

          <button
            className="md:hidden p-2 rounded-lg text-slate-600 hover:text-cyan-700 hover:bg-cyan-50"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 border-t border-slate-200/70 mt-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block py-2.5 px-4 text-sm font-medium ${
                  pathname === link.href ? 'text-cyan-700' : 'text-slate-700 hover:text-cyan-700'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block mt-3 mx-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2.5 rounded-xl text-sm font-semibold text-center"
              onClick={() => setIsOpen(false)}
            >
              Solicitar presupuesto
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
