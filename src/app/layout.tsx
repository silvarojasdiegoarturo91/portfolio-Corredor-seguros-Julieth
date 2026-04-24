import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { WhatsAppButton } from '@/components/sections/WhatsAppButton'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://juliethperezseguros.com'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'María Julieth Pérez Fernández | Corredora de Seguros en España',
    template: '%s | María Julieth Pérez Fernández – Seguros',
  },
  description:
    'María Julieth Pérez Fernández, corredora y mediadora de seguros certificada en España. Seguros de vida, salud, mascotas y hogar con más de 10 años de experiencia. Presupuesto gratuito.',
  keywords: [
    'Maria Julieth Perez Fernandez',
    'María Julieth Pérez Fernández',
    'Julieth seguros',
    'corredora de seguros',
    'corredor de seguros',
    'mediadora de seguros',
    'seguros España',
    'seguro de vida España',
    'seguro de salud España',
    'seguro de mascotas España',
    'seguro de hogar España',
    'seguro barato España',
    'presupuesto seguro gratis',
  ],
  authors: [{ name: 'María Julieth Pérez Fernández' }],
  creator: 'María Julieth Pérez Fernández',
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    url: BASE_URL,
    siteName: 'Julieth Seguros',
    title: 'María Julieth Pérez Fernández | Corredora de Seguros en España',
    description:
      'Corredora de seguros certificada en España. Vida, salud, mascotas y hogar. Asesoría personalizada y presupuesto gratuito.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'María Julieth Pérez Fernández | Corredora de Seguros',
    description: 'Seguros de vida, salud, mascotas y hogar en España. Presupuesto gratuito.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
    },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${BASE_URL}/#person`,
      name: 'María Julieth Pérez Fernández',
      alternateName: ['Julieth Pérez', 'Julieth seguros', 'Maria Julieth Perez Fernandez'],
      jobTitle: 'Corredora y Mediadora de Seguros Certificada',
      description:
        'Mediadora de seguros certificada con más de 10 años de experiencia ayudando a familias en España.',
      url: BASE_URL,
      sameAs: [],
      worksFor: { '@id': `${BASE_URL}/#business` },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+34-695-135-678',
        contactType: 'customer support',
        availableLanguage: 'Spanish',
      },
    },
    {
      '@type': 'InsuranceAgency',
      '@id': `${BASE_URL}/#business`,
      name: 'Julieth Seguros',
      legalName: 'María Julieth Pérez Fernández – Corredora de Seguros',
      url: BASE_URL,
      description:
        'Correduría de seguros especializada en vida, salud, mascotas y hogar para familias en España.',
      areaServed: 'ES',
      availableLanguage: 'Spanish',
      priceRange: '€',
      telephone: '+34-695-135-678',
      email: 'julieth@juliethperezseguros.com',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'ES',
      },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className="font-sans antialiased">
        <Script
          id="jsonld-person-business"
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
