import { Metadata } from 'next'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Gracias por contactarnos',
  description: 'Hemos recibido tu solicitud. Te contactaremos pronto.',
  robots: { index: false, follow: false },
}

export default function ThankYouPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center py-16">
      <div className="max-w-lg mx-auto px-4 text-center">
        <div className="bg-white rounded-2xl shadow-xl p-10">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-4xl">✅</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            ¡Gracias por contactarnos!
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Hemos recibido tu solicitud. Julieth te contactará en{' '}
            <strong className="text-green-600">menos de 24 horas</strong> con tu presupuesto personalizado.
          </p>

          <div className="bg-green-50 rounded-xl p-4 mb-6">
            <p className="text-sm text-gray-600">
              ¿Necesitas respuesta inmediata? Escríbenos por WhatsApp:
            </p>
            <a
              href="https://wa.me/34600000000?text=Hola%20Julieth%2C%20acabo%20de%20enviar%20mi%20solicitud%20de%20presupuesto."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center mt-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors w-full"
            >
              📱 WhatsApp Ahora
            </a>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Button href="/" variant="outline" className="flex-1">
              Volver al Inicio
            </Button>
            <Button href="/services" variant="primary" className="flex-1">
              Ver Servicios
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
