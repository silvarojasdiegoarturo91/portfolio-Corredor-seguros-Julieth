import { Metadata } from 'next'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Sobre Nosotros',
  description: 'Conoce la historia de Julieth, mediadora de seguros certificada con más de 10 años de experiencia en España.',
}

const trustBadges = [
  // { icon: '🏅', title: 'Certificada', desc: 'Mediadora certificada e inscrita en el Registro de la DGSFP (Ministerio de Economía de España)' },
  { icon: '📅', title: '+10 Años', desc: 'Más de una década de experiencia en el sector asegurador' },
  { icon: '👥', title: '+50 Clientes', desc: 'Cientos de familias protegidas en toda España' },
  { icon: '⭐', title: '5 Estrellas', desc: 'Calificación perfecta de satisfacción en nuestros clientes' },
]

const partners = [
  { name: 'AXA', logo: 'https://logo.clearbit.com/axa.com' },
  { name: 'Mapfre', logo: 'https://logo.clearbit.com/mapfre.com' },
  { name: 'Allianz', logo: 'https://logo.clearbit.com/allianz.com' },
  { name: 'Zurich', logo: 'https://logo.clearbit.com/zurich.com' },
  { name: 'Generali', logo: 'https://logo.clearbit.com/generali.com' },
  { name: 'Mutua Madrileña', logo: 'https://logo.clearbit.com/mutua.es' },
  { name: 'Sanitas', logo: 'https://logo.clearbit.com/sanitas.es' },
  { name: 'Caser Seguros', logo: 'https://logo.clearbit.com/caser.es' },
  { name: 'Helvetia', logo: 'https://logo.clearbit.com/helvetia.com' },
  { name: 'Reale Seguros', logo: 'https://logo.clearbit.com/reale.es' },
  { name: 'Línea Directa', logo: 'https://logo.clearbit.com/lineadirecta.com' },
  { name: 'BBVA Seguros', logo: 'https://logo.clearbit.com/bbvaseguros.com' },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-green-700 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sobre Nosotros</h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Conoce a Julieth y descubre por qué somos la elección de confianza de cientos de familias españolas
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Mi historia
              </h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Soy Julieth, mediadora de seguros certificada con más de 10 años de experiencia 
                  ayudando a familias españolas a proteger lo que más aman.
                </p>
                <p>
                  Mi vocación nació cuando vi de cerca cómo una familia quedó sin apoyo financiero 
                  después de un imprevisto. Desde ese día, me dediqué a asegurarme de que ninguna 
                  familia tuviera que pasar por eso.
                </p>
                <p>
                  Trabajo con las mejores aseguradoras del mercado para ofrecerte las coberturas más 
                  completas al mejor precio. Mi misión es simple: <strong>darte tranquilidad</strong>.
                </p>
              </div>
              <div className="mt-8">
                <Button href="/contact" variant="primary" size="lg">
                  Habla Conmigo
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-8 text-center">
                <div className="w-32 h-32 bg-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">J</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Julieth</h3>
                <p className="text-green-600 font-semibold">Mediadora de Seguros Certificada</p>
                <p className="text-gray-600 mt-2">España</p>
                <div className="mt-4 flex justify-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Por qué confiar en nosotros</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustBadges.map((badge) => (
              <Card key={badge.title} className="text-center">
                <div className="text-5xl mb-4">{badge.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{badge.title}</h3>
                <p className="text-gray-600 text-sm">{badge.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trabajamos con las mejores aseguradoras de España</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {partners.map((partner) => (
              <div key={partner.name} className="bg-white rounded-lg p-5 text-center shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-center gap-3">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={partner.logo}
                  alt={`Logo ${partner.name}`}
                  className="h-12 w-auto object-contain"
                />
                <p className="font-semibold text-gray-700 text-sm">{partner.name}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-500 mt-8 text-lg font-medium">y muchas más...</p>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Mis Valores</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '🤝', title: 'Honestidad', desc: 'Te digo exactamente lo que necesitas, sin sobrevender ni ocultar información.' },
              { icon: '💡', title: 'Conocimiento', desc: 'Me mantengo actualizada para ofrecerte siempre las mejores opciones del mercado.' },
              { icon: '❤️', title: 'Compromiso', desc: 'Tu bienestar es mi prioridad. Estoy aquí cuando más me necesitas.' },
            ].map((value) => (
              <div key={value.title} className="text-center">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-green-100">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
