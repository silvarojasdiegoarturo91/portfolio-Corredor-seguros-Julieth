import { Metadata } from 'next'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Seguro de Mascotas – Cobertura veterinaria completa | Julieth Seguros',
  description:
    'Tu mascota merece la mejor atención veterinaria. Cubre consultas, cirugías, vacunas y urgencias para perros y gatos. Asesoría gratuita con María Julieth Pérez Fernández.',
  keywords: [
    'seguro mascotas España',
    'seguro veterinario perro',
    'seguro veterinario gato',
    'cobertura veterinaria España',
    'corredora de seguros España',
  ],
  alternates: { canonical: '/services/mascotas' },
}

const features = [
  {
    icon: '🩺',
    title: 'Consultas veterinarias',
    description: 'Visitas al veterinario ilimitadas o con copago reducido para revisiones, diagnósticos y tratamientos.',
  },
  {
    icon: '🔬',
    title: 'Pruebas diagnósticas',
    description: 'Radiografías, ecografías, análisis de sangre y otras pruebas diagnósticas cubiertas.',
  },
  {
    icon: '🏥',
    title: 'Cirugías y hospitalizaciones',
    description: 'Intervenciones quirúrgicas y estancias en clínica veterinaria cubiertas hasta el límite pactado.',
  },
  {
    icon: '💉',
    title: 'Vacunas obligatorias',
    description: 'Vacunación antirrábica y otras vacunas requeridas por ley incluidas en el plan.',
  },
  {
    icon: '🚨',
    title: 'Urgencias 24/7',
    description: 'Atención de urgencias en cualquier momento del día con clínicas veterinarias de guardia.',
  },
  {
    icon: '⚖️',
    title: 'Responsabilidad civil',
    description: 'Cobertura si tu mascota causa daños a terceras personas o a sus propiedades.',
  },
]

const faqs = [
  {
    question: '¿Qué animales tienen cobertura?',
    answer: 'La mayoría de seguros cubren perros y gatos. Algunos planes especializados también cubren otros animales de compañía. Consulta las condiciones según tu mascota.',
  },
  {
    question: '¿Hay límite de edad para asegurar a mi mascota?',
    answer: 'Generalmente se puede asegurar a mascotas desde los 2 meses hasta los 8-10 años. Las mascotas mayores pueden tener condiciones especiales o exclusiones.',
  },
  {
    question: '¿Cómo funciona si mi mascota necesita urgencias?',
    answer: 'Llamas al número de urgencias de la aseguradora o acudes directamente a una clínica veterinaria concertada. Algunos planes también cubren clínicas no concertadas en casos urgentes.',
  },
  {
    question: '¿Están cubiertas las enfermedades preexistentes?',
    answer: 'Las enfermedades o lesiones existentes antes de contratar el seguro generalmente están excluidas. Es importante contratar el seguro cuando la mascota es joven y sana.',
  },
]

export default function SeguroMascotasPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-amber-500 to-orange-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-amber-200 text-sm mb-4">
            <a href="/services" className="hover:text-white transition-colors">Servicios</a>
            <span>/</span>
            <span>Seguro de Mascotas</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex p-4 rounded-full bg-white/15 mb-6">
                <span className="text-5xl">🐾</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Seguro de Mascotas</h1>
              <p className="text-xl text-amber-100 max-w-xl leading-relaxed mb-8">
                Tu mascota es parte de la familia y merece la mejor atención. Nunca tendrás que
                elegir entre tu economía y la salud de tu compañero fiel.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button href="/contact" variant="white" size="lg">
                  Solicitar presupuesto gratuito
                </Button>
                <Button href="/services" variant="ghost" size="lg">
                  Ver todos los seguros
                </Button>
              </div>
            </div>
            <div className="glass-card rounded-3xl p-6 sm:p-8">
              <p className="text-sm font-semibold text-amber-100 mb-4">Desde</p>
              <p className="text-4xl font-bold text-white mb-1">15 €<span className="text-xl font-normal text-amber-100">/mes</span></p>
              <p className="text-amber-200 text-sm mb-6">Para perros y gatos de cualquier raza</p>
              <ul className="space-y-2 text-sm text-slate-100">
                {['Consultas y revisiones veterinarias', 'Cirugías y procedimientos', 'Vacunas obligatorias', 'Urgencias 24/7'].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-amber-300">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">¿Qué cubre el seguro de mascotas?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cobertura veterinaria completa para que tu mascota siempre reciba la atención que merece
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <Card key={feature.title} hover>
                <div className="text-3xl mb-3">{feature.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">¿Por qué asegurar a tu mascota?</h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Una sola cirugía veterinaria puede costar entre 1.000 y 5.000 euros. Con un seguro de
                  mascotas, puedes darle a tu animal el mejor tratamiento sin que el dinero sea un obstáculo.
                </p>
                <p>
                  Además, en España la Ley de Bienestar Animal establece que los dueños somos responsables
                  de los daños que cause nuestra mascota a terceros. La cobertura de responsabilidad civil
                  te protege en esos casos.
                </p>
                <p>
                  Te ayudo a encontrar el plan más adecuado para la raza, edad y necesidades de tu mascota
                  al mejor precio del mercado.
                </p>
              </div>
              <div className="mt-8">
                <Button href="/contact" variant="primary" size="lg">
                  Habla conmigo hoy
                </Button>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { stat: '+30%', desc: 'de los perros y gatos necesitan atención veterinaria urgente cada año' },
                { stat: '1.000–5.000 €', desc: 'coste medio de una cirugía veterinaria en España' },
                { stat: '15 €/mes', desc: 'es suficiente para proteger a tu mascota con cobertura esencial' },
              ].map((item) => (
                <Card key={item.stat} className="border-l-4 border-amber-500">
                  <p className="text-2xl font-bold text-amber-600 mb-1">{item.stat}</p>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">Preguntas frecuentes</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <Card key={faq.question}>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-amber-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Quieres proteger a tu mascota?</h2>
          <p className="text-xl text-amber-100 mb-8">
            Solicita tu estudio gratuito y sin compromiso. Te contacto en menos de 24 horas.
          </p>
          <Button href="/contact" variant="white" size="lg">
            Solicitar estudio gratuito
          </Button>
        </div>
      </section>
    </div>
  )
}
