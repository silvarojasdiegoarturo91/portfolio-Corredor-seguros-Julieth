import { Metadata } from 'next'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Seguro de Salud – Atención médica privada para tu familia | Julieth Seguros',
  description:
    'Accede a la mejor atención médica privada sin preocuparte por los costes. Hospitalización, especialistas, medicamentos y más. Asesoría gratuita con María Julieth Pérez Fernández.',
  keywords: [
    'seguro de salud España',
    'seguro médico privado',
    'seguro salud familiar',
    'hospitalización seguro',
    'corredora de seguros España',
  ],
  alternates: { canonical: '/services/salud' },
}

const features = [
  {
    icon: '🏥',
    title: 'Hospitalización y cirugías',
    description: 'Cobertura completa de ingresos hospitalarios, intervenciones quirúrgicas y gastos asociados sin límite de días.',
  },
  {
    icon: '👨‍⚕️',
    title: 'Consultas con especialistas',
    description: 'Acceso ilimitado a más de 40 especialidades médicas sin necesidad de derivación del médico de cabecera.',
  },
  {
    icon: '💊',
    title: 'Medicamentos',
    description: 'Cobertura parcial o total de medicamentos prescritos según el plan elegido.',
  },
  {
    icon: '🤱',
    title: 'Maternidad y pediatría',
    description: 'Seguimiento del embarazo, parto y control pediátrico del recién nacido incluidos en muchos planes.',
  },
  {
    icon: '🦷',
    title: 'Odontología',
    description: 'Revisiones, limpiezas y tratamientos dentales incluidos en planes integrales de salud.',
  },
  {
    icon: '🚑',
    title: 'Urgencias 24/7',
    description: 'Atención urgente en cualquier momento del día, con ambulancia y traslado incluidos.',
  },
]

const faqs = [
  {
    question: '¿Hay periodo de carencia en el seguro de salud?',
    answer: 'Generalmente existe un periodo de carencia de 6 meses para partos y algunas especialidades, aunque las urgencias y accidentes están cubiertos desde el primer día.',
  },
  {
    question: '¿Puedo incluir a toda mi familia en el mismo seguro?',
    answer: 'Sí, existen planes familiares con importantes descuentos. Podemos incluir a tu pareja, hijos y en algunos casos también a los padres.',
  },
  {
    question: '¿Puedo elegir a mi médico?',
    answer: 'Dentro de la red de médicos concertados, tienes plena libertad para elegir a tu médico y cambiar de profesional cuando lo desees.',
  },
  {
    question: '¿Qué ocurre si me enfermo antes de contratar el seguro?',
    answer: 'Las enfermedades preexistentes pueden estar excluidas o tener condiciones especiales. Es importante declararlas en el cuestionario de salud para que la póliza sea válida.',
  },
]

export default function SeguroSaludPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-blue-200 text-sm mb-4">
            <a href="/services" className="hover:text-white transition-colors">Servicios</a>
            <span>/</span>
            <span>Seguro de Salud</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex p-4 rounded-full bg-white/15 mb-6">
                <span className="text-5xl">🏥</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Seguro de Salud</h1>
              <p className="text-xl text-blue-100 max-w-xl leading-relaxed mb-8">
                Accede a la mejor atención médica privada para ti y tu familia sin preocuparte por
                los costes. Especialistas, hospitalizaciones, urgencias y mucho más.
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
              <p className="text-sm font-semibold text-blue-100 mb-4">Desde</p>
              <p className="text-4xl font-bold text-white mb-1">40 €<span className="text-xl font-normal text-blue-100">/mes</span></p>
              <p className="text-blue-200 text-sm mb-6">Cobertura individual completa</p>
              <ul className="space-y-2 text-sm text-slate-100">
                {['Hospitalización sin límite de días', 'Más de 40 especialidades médicas', 'Urgencias 24/7', 'Sin copagos en muchos planes'].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-blue-300">✓</span>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">¿Qué cubre el seguro de salud?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Coberturas médicas amplias para que nunca tengas que preocuparte por tu salud ni por la de tu familia
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Salud privada, calidad garantizada</h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Con un seguro de salud privado, eliminas las listas de espera de la sanidad pública y
                  accedes a especialistas en días, no en meses. Tú eliges cuándo y con quién te atiendes.
                </p>
                <p>
                  Ideal si tienes familia, si trabajas por cuenta propia, si viajas frecuentemente o
                  simplemente valoras tu tiempo y quieres la mejor atención médica posible.
                </p>
                <p>
                  Te ayudo a comparar los mejores planes del mercado y a encontrar la cobertura perfecta
                  al precio más competitivo.
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
                { stat: '< 48h', desc: 'tiempo medio para obtener cita con especialista con seguro privado' },
                { stat: '+40', desc: 'especialidades médicas cubiertas en los principales planes de salud' },
                { stat: '+10.000', desc: 'centros médicos y clínicas en toda España en la red concertada' },
              ].map((item) => (
                <Card key={item.stat} className="border-l-4 border-blue-500">
                  <p className="text-2xl font-bold text-blue-600 mb-1">{item.stat}</p>
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
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Quieres la mejor atención médica?</h2>
          <p className="text-xl text-blue-100 mb-8">
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
