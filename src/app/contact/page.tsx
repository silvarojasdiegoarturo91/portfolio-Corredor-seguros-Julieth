import { Metadata } from 'next'
import { LeadForm } from '@/components/forms/LeadForm'
import { Card } from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Contáctanos para obtener tu cotización gratuita de seguros. Respuesta en menos de 24 horas.',
}

const contactInfo = [
  { icon: '📱', title: 'WhatsApp', value: '+34 600 000 000', href: 'https://wa.me/34600000000' },
  { icon: '✉️', title: 'Email', value: 'julieth@correodoreseguros.com', href: 'mailto:julieth@correodoreseguros.com' },
  { icon: '📍', title: 'Ubicación', value: 'España', href: null },
  { icon: '🕐', title: 'Horario', value: 'Lun-Vie: 9am - 7pm', href: null },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-green-700 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contáctanos</h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Cuéntanos qué necesitas y te respondemos en menos de 24 horas.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-gray-900">Información de Contacto</h2>
              {contactInfo.map((info) => (
                <Card key={info.title} className="flex items-start space-x-4">
                  <span className="text-3xl">{info.icon}</span>
                  <div>
                    <p className="font-semibold text-gray-900">{info.title}</p>
                    {info.href ? (
                      <a href={info.href} target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-green-600 hover:text-green-700">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-600">{info.value}</p>
                    )}
                  </div>
                </Card>
              ))}

              {/* WhatsApp CTA */}
              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6 text-center">
                <p className="text-2xl mb-2">💬</p>
                <h3 className="font-bold text-gray-900 mb-2">¿Prefieres WhatsApp?</h3>
                <p className="text-gray-600 text-sm mb-4">Chatea directamente con Julieth</p>
                <a
                  href="https://wa.me/34600000000?text=Hola%20Julieth%2C%20me%20gustar%C3%ADa%20obtener%20informaci%C3%B3n%20sobre%20seguros."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold w-full transition-colors"
                >
                  Abrir WhatsApp
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <Card>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Solicitar Cotización</h2>
                <LeadForm />
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
