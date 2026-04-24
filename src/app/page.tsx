import { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { ServicesSection } from '@/components/sections/Services'
import { Card } from '@/components/ui/Card'
import { LeadForm } from '@/components/forms/LeadForm'

export const metadata: Metadata = {
  title: 'Inicio',
  description:
    'María Julieth Pérez Fernández, corredora de seguros certificada en España. Seguros de vida, salud, mascotas y hogar. Solicita tu presupuesto gratuito hoy.',
  alternates: { canonical: '/' },
}

const testimonials = [
  {
    name: 'María González',
    text: 'Julieth me ayudó a encontrar el seguro de vida perfecto para mi familia. Excelente servicio y muy profesional.',
    insurance: 'Seguro de Vida',
  },
  {
    name: 'Carlos Martínez',
    text: 'Gracias al seguro de salud que Julieth me recomendó, pude cubrir una hospitalización sin preocuparme por los costes.',
    insurance: 'Seguro de Salud',
  },
  {
    name: 'Ana Rodríguez',
    text: 'Mi perro Rocky recibió la mejor atención. El seguro de mascotas fue la mejor inversión que pude hacer.',
    insurance: 'Seguro de Mascotas',
  },
]

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Por qué elegirnos?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Tu tranquilidad es nuestra prioridad
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '🏆', title: 'Experiencia Certificada', desc: 'Más de 10 años como mediadora certificada de seguros en España.' },
              { icon: '💬', title: 'Asesoría Personalizada', desc: 'Analizamos tu situación y te recomendamos el seguro ideal para ti.' },
              { icon: '⚡', title: 'Respuesta Rápida', desc: 'Te respondemos en menos de 24 horas con el mejor presupuesto.' },
            ].map((item) => (
              <Card key={item.title} className="text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Lo que dicen nuestros clientes
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <Card key={t.name} className="relative">
                <div className="text-green-500 text-4xl mb-2">&ldquo;</div>
                <p className="text-gray-700 mb-4 italic">{t.text}</p>
                <div className="flex items-center mt-4">
                  <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{t.name}</p>
                    <p className="text-sm text-green-600">{t.insurance}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Form */}
      <section className="py-20 bg-gradient-to-r from-green-700 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                ¿Listo para proteger lo que más amas?
              </h2>
              <p className="text-xl text-green-100 mb-6">
                Solicita un presupuesto gratuito en minutos. Sin compromisos, sin letra pequeña.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/34695135678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-green-400 hover:bg-green-500 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  📱 WhatsApp Ahora
                </a>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Presupuesto gratuito</h3>
              <LeadForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
