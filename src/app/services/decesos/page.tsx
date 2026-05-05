import { Metadata } from 'next'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Seguro de Decesos – Cubre los gastos funerarios sin coste para tu familia | Julieth Seguros',
  description:
    'El seguro de decesos cubre todos los gastos funerarios y de sepelio para que tu familia no tenga que preocuparse por nada en el momento más difícil. Asesoría gratuita con María Julieth Pérez Fernández.',
  keywords: [
    'seguro de decesos España',
    'seguro funerario España',
    'gastos sepelio seguro',
    'seguro de entierro',
    'corredora de seguros España',
  ],
  alternates: { canonical: '/services/decesos' },
}

const features = [
  {
    icon: '⚰️',
    title: 'Gastos de sepelio',
    description: 'Cobertura completa de todos los gastos funerarios: féretro, tanatorio, ceremonia, flores y esquelas.',
  },
  {
    icon: '🚐',
    title: 'Traslado del fallecido',
    description: 'Traslado del cuerpo al lugar de la ceremonia, ya sea en la misma ciudad o en otra provincia o país.',
  },
  {
    icon: '📋',
    title: 'Gestión administrativa',
    description: 'La aseguradora se encarga de todos los trámites burocráticos: certificados, registros y documentación.',
  },
  {
    icon: '🕊️',
    title: 'Incineración o inhumación',
    description: 'Cobertura tanto para entierro en cementerio como para incineración, según las preferencias del asegurado.',
  },
  {
    icon: '🌍',
    title: 'Repatriación internacional',
    description: 'Si el fallecimiento ocurre en el extranjero, el seguro cubre el traslado de los restos a España.',
  },
  {
    icon: '👨‍👩‍👧‍👦',
    title: 'Cobertura familiar',
    description: 'Muchos planes permiten incluir a toda la familia en la misma póliza con importantes descuentos.',
  },
]

const faqs = [
  {
    question: '¿Qué diferencia hay entre el seguro de decesos y el seguro de vida?',
    answer: 'El seguro de decesos cubre exclusivamente los gastos funerarios y de sepelio. El seguro de vida, en cambio, proporciona un capital económico a los beneficiarios. Son complementarios y muchas familias tienen ambos.',
  },
  {
    question: '¿Puedo contratar el seguro de decesos para mis padres?',
    answer: 'Sí. Es muy habitual contratar el seguro de decesos para los padres o abuelos para garantizar que no haya problemas económicos en el momento del fallecimiento. Existen planes específicos para personas mayores.',
  },
  {
    question: '¿Tiene periodo de carencia el seguro de decesos?',
    answer: 'Generalmente existe un periodo de carencia de entre 6 y 12 meses para fallecimiento por enfermedad. El fallecimiento por accidente suele estar cubierto desde el primer día.',
  },
  {
    question: '¿Cuánto cuesta el seguro de decesos?',
    answer: 'El precio depende de la edad del asegurado y las coberturas incluidas. Para una persona joven puede costar desde 10 €/mes. Para personas mayores, el precio es algo superior pero sigue siendo muy asequible comparado con el coste real de un funeral.',
  },
  {
    question: '¿Qué pasa si el familiar fallece en otro país?',
    answer: 'La mayoría de seguros de decesos incluyen cobertura de repatriación internacional, lo que significa que el seguro asume todos los costes de traslado de los restos desde el extranjero hasta España.',
  },
]

export default function SeguroDecesosPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-slate-700 to-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-slate-300 text-sm mb-4">
            <a href="/services" className="hover:text-white transition-colors">Servicios</a>
            <span>/</span>
            <span>Seguro de Decesos</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex p-4 rounded-full bg-white/15 mb-6">
                <span className="text-5xl">🕊️</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Seguro de Decesos</h1>
              <p className="text-xl text-slate-200 max-w-xl leading-relaxed mb-8">
                Evita que tu familia tenga que preocuparse por los gastos funerarios en el momento
                más difícil. El seguro de decesos cubre todos los trámites y costes del sepelio.
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
              <p className="text-sm font-semibold text-slate-200 mb-4">Desde</p>
              <p className="text-4xl font-bold text-white mb-1">10 €<span className="text-xl font-normal text-slate-200">/mes</span></p>
              <p className="text-slate-300 text-sm mb-6">Cobertura completa de gastos funerarios</p>
              <ul className="space-y-2 text-sm text-slate-100">
                {['Gastos completos de sepelio', 'Traslado del fallecido', 'Gestión de trámites administrativos', 'Repatriación internacional'].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-cyan-300">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why important */}
      <section className="py-12 bg-amber-50 border-b border-amber-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-2xl font-bold text-amber-800 mb-2">Un funeral en España cuesta entre 4.000 y 8.000 €</p>
          <p className="text-amber-700 text-lg">
            El seguro de decesos garantiza que tu familia no tenga que afrontar ese gasto de golpe en un momento de dolor.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">¿Qué cubre el seguro de decesos?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cobertura completa para que tu familia no tenga que preocuparse por ningún trámite ni gasto
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Un gesto de amor hacia tu familia</h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  El seguro de decesos es una de las decisiones más solidarias que puedes tomar. Al
                  contratarlo, te aseguras de que cuando llegue ese momento difícil, tu familia no
                  tendrá que preocuparse por el dinero ni por los trámites.
                </p>
                <p>
                  En España, los gastos funerarios pueden superar los 6.000 euros, incluyendo el féretro,
                  el tanatorio, el cementerio o la incineración, las flores, las esquelas y los trámites
                  administrativos. Un gasto que muchas familias no tienen previsto.
                </p>
                <p>
                  Te ayudo a encontrar el plan más adecuado para ti y para toda tu familia, con coberturas
                  claras y un precio muy asequible.
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
                { stat: '4.000–8.000 €', desc: 'coste medio de un funeral completo en España en 2024' },
                { stat: '10 €/mes', desc: 'es suficiente para garantizar la cobertura completa para una persona joven' },
                { stat: '24/7', desc: 'disponibilidad del servicio de asistencia funeraria incluida en la póliza' },
              ].map((item) => (
                <Card key={item.stat} className="border-l-4 border-slate-500">
                  <p className="text-2xl font-bold text-slate-700 mb-1">{item.stat}</p>
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
      <section className="py-16 bg-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Protege a tu familia hoy</h2>
          <p className="text-xl text-slate-300 mb-8">
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
