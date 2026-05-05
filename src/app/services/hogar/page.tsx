import { Metadata } from 'next'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Seguro de Hogar – Protege tu vivienda y tus bienes | Julieth Seguros',
  description:
    'Protege tu hogar contra incendios, robos, daños por agua y mucho más. Asistencia domiciliaria 24/7 y responsabilidad civil. Asesoría gratuita con María Julieth Pérez Fernández.',
  keywords: [
    'seguro de hogar España',
    'seguro vivienda',
    'seguro incendio robo',
    'responsabilidad civil hogar',
    'corredora de seguros España',
  ],
  alternates: { canonical: '/services/hogar' },
}

const features = [
  {
    icon: '🔥',
    title: 'Incendio, explosión y humo',
    description: 'Cobertura total de daños por incendio, explosión, humo o rayo tanto en el continente como en el contenido.',
  },
  {
    icon: '🔒',
    title: 'Robo y hurto',
    description: 'Indemnización por robo de objetos del hogar, con o sin forzamiento, dentro y en algunos casos también fuera del domicilio.',
  },
  {
    icon: '💧',
    title: 'Daños por agua',
    description: 'Averías de tuberías, filtraciones, inundaciones y daños a vecinos causados por agua en tu vivienda.',
  },
  {
    icon: '⚡',
    title: 'Daños eléctricos',
    description: 'Averías en instalaciones eléctricas y daños por sobretensión en electrodomésticos y equipos.',
  },
  {
    icon: '🤝',
    title: 'Responsabilidad civil familiar',
    description: 'Cobertura si tú o un familiar causáis daños involuntarios a terceros dentro o fuera del hogar.',
  },
  {
    icon: '🔧',
    title: 'Asistencia domiciliaria 24/7',
    description: 'Fontaneros, electricistas, cerrajeros y otros profesionales disponibles en cualquier momento del día.',
  },
]

const faqs = [
  {
    question: '¿El seguro de hogar cubre tanto el piso en propiedad como de alquiler?',
    answer: 'Sí. Para pisos en propiedad se asegura el continente (estructura) y el contenido (muebles y objetos). Para pisos de alquiler, generalmente solo se asegura el contenido, ya que el propietario asegura el continente.',
  },
  {
    question: '¿Cómo se calcula el valor asegurado?',
    answer: 'El continente se valora según los metros cuadrados y la calidad de construcción. El contenido se declara estimando el valor de reposición de todos los muebles, electrodomésticos, ropa y objetos del hogar.',
  },
  {
    question: '¿Qué pasa si tengo una avería un domingo a medianoche?',
    answer: 'El servicio de asistencia domiciliaria está disponible 24 horas al día, 365 días al año. Llamas al número de asistencia y un profesional acude a tu domicilio.',
  },
  {
    question: '¿El seguro cubre las joyas y objetos de valor?',
    answer: 'Muchos seguros tienen sublímites para joyas, dinero en efectivo y objetos de valor especial. Te recomendamos declararlos expresamente para garantizar una cobertura adecuada.',
  },
]

export default function SeguroHogarPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-emerald-200 text-sm mb-4">
            <a href="/services" className="hover:text-white transition-colors">Servicios</a>
            <span>/</span>
            <span>Seguro de Hogar</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex p-4 rounded-full bg-white/15 mb-6">
                <span className="text-5xl">🏠</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Seguro de Hogar</h1>
              <p className="text-xl text-emerald-100 max-w-xl leading-relaxed mb-8">
                Protege tu hogar y todos tus bienes contra las contingencias de la vida. Desde
                incendios hasta robos, estamos aquí para que nunca pierdas lo que tanto has construido.
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
              <p className="text-sm font-semibold text-emerald-100 mb-4">Desde</p>
              <p className="text-4xl font-bold text-white mb-1">20 €<span className="text-xl font-normal text-emerald-100">/mes</span></p>
              <p className="text-emerald-200 text-sm mb-6">Cobertura continente y contenido</p>
              <ul className="space-y-2 text-sm text-slate-100">
                {['Incendio, explosión y humo', 'Robo y hurto de contenidos', 'Responsabilidad civil familiar', 'Asistencia domiciliaria 24/7'].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-emerald-300">✓</span>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">¿Qué cubre el seguro de hogar?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Protección completa para tu vivienda y todo lo que contiene
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Tu hogar, tu mayor patrimonio</h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Tu vivienda es probablemente el bien más valioso que tienes. Un seguro de hogar te
                  protege ante imprevistos que pueden suponer pérdidas de miles de euros: una inundación,
                  un robo o un incendio pueden ocurrir en cualquier momento.
                </p>
                <p>
                  Además, si tienes hipoteca, el banco generalmente exige tener asegurado el continente
                  de la vivienda. Pero hay mucho más que proteger: muebles, electrodomésticos, ropa,
                  joyas y la tranquilidad de saber que estás cubierto.
                </p>
                <p>
                  Te ayudo a calcular el valor correcto de tu hogar y a elegir la cobertura exacta que
                  necesitas, sin pagar de más ni quedarte sin protección.
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
                { stat: '1 de cada 10', desc: 'hogares en España sufre algún siniestro al año que requiere intervención de la aseguradora' },
                { stat: '+15.000 €', desc: 'coste medio de un siniestro por daños de agua graves en el hogar' },
                { stat: '24/7', desc: 'disponibilidad del servicio de asistencia domiciliaria incluido en la póliza' },
              ].map((item) => (
                <Card key={item.stat} className="border-l-4 border-emerald-500">
                  <p className="text-2xl font-bold text-emerald-600 mb-1">{item.stat}</p>
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
      <section className="py-16 bg-emerald-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Quieres proteger tu hogar?</h2>
          <p className="text-xl text-emerald-100 mb-8">
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
