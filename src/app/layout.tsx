import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppButton } from '@/components/sections/WhatsAppButton'

export const metadata: Metadata = {
  title: {
    default: 'Corredor de Seguros Julieth | Protege lo que más amas',
    template: '%s | Corredor de Seguros Julieth',
  },
  description: 'Especialistas en seguros de vida, salud, mascotas y hogar en Colombia. Más de 10 años protegiendo familias con soluciones personalizadas.',
  keywords: ['seguros colombia', 'seguro de vida', 'seguro de salud', 'corredor de seguros', 'Julieth seguros'],
  openGraph: {
    type: 'website',
    locale: 'es_CO',
    url: 'https://correodoreseguros.com',
    siteName: 'Corredor de Seguros Julieth',
    title: 'Corredor de Seguros Julieth | Protege lo que más amas',
    description: 'Especialistas en seguros de vida, salud, mascotas y hogar en Colombia.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Corredor de Seguros Julieth',
    description: 'Especialistas en seguros en Colombia.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
