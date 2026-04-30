import { Metadata } from 'next'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Seguro de Vida – Protege el futuro de tu familia | Julieth Seguros',
  description:
    'Descubre el seguro de vida ideal para proteger el futuro financiero de tu familia. Coberturas por fallecimiento, invalidez y enfermedades graves. Asesoría gratuita con María Julieth Pérez Fernández.',
  keywords: [
    'seguro de vida España',
    'seguro de vida familia',
    'cobertura fallecimiento',
    'invalidez permanente seguro',
    'corredora de seguros España',
  ],
  alternates: { canonical: '/services/vida' },
}

const features = [
  {
    icon: '⚰️',
    title: 'Fallecimiento natural o accidental',
    description: 'En caso de fallecimiento, tus beneficiarios reciben el capital asegurado para mantener su calidad de vida.',
  },
  {
    icon: '♿',
    title: 'Invalidez total y permanente',
    description: 'Si sufres una invalidez que te impida trabajar, recibes el capital asegurado de forma anticipada.',
  },
  {
    icon: '🏥',
    title: 'Enfermedades graves',
    description: 'Cobertura ante diagnóstico de enfermedades graves como cáncer, infarto o ictus, con pago inmediato.',
  },
  {
    icon: '⚱️',
    title: 'Asistencia funeraria',
    description: 'Gestión completa de los servicios funerarios sin coste adicional para la familia.',
  },
  {
    icon: '📋',
    title: 'Doble capital por accidente',
    description: 'En caso de fallecimiento accidental, la cobertura puede duplicarse según la póliza elegida.',
  },
  {
    icon: '💼',
    title: 'Planes flexibles',
    description: 'Desde 30€/mes, adaptamos el capital asegurado y las coberturas a tu situación personal y familiar.',
  },
]

const faqs = [
  {
    question: '¿Quién puede contratar un seguro de vida?',
    answer: 'Cualquier persona entre 18 y 70 años puede contratar un seguro de vida. El precio varía según la edad, el capital asegurado y las coberturas seleccionadas.',
  },
  {
    question: '¿Cuándo cobra el beneficiario?',
    answer: 'En caso de fallecimiento, los beneficiarios designados cobran el capital asegurado en un plazo habitual de 15 a 30 días tras aportar la documentación necesaria.',
  },
  {
    question: '¿Puedo cambiar los beneficiarios?',
    answer: 'Sí, puedes modificar los beneficiarios en cualquier momento durante la vigencia de la póliza sin coste alguno.',
  },
  {
    question: '¿El seguro de vida tiene valor de rescate?',
    answer: 'Los seguros de vida de riesgo puro (los más habituales) no tienen valor de rescate. Existen seguros de vida-ahorro que sí acumulan valor.',
  },
]

export default function SeguroVidaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-rose-600 to-red-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-rose-200 text-sm mb-4">
            <a href="/services" className="hover:text-white transition-colors">Servicios</a>
            <span>/</span>
            <span>Seguro de Vida</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex p-4 rounded-full bg-white/15 mb-6">
                <span className="text-5xl">❤️</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Seguro de Vida</h1>
              <p className="text-xl text-rose-100 max-w-xl leading-relaxed mb-8">
                La mejor forma de proteger el futuro financiero de tu familia. En caso de fallecimiento o
                invalidez, tus seres queridos estarán protegidos económicamente.
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
              <p className="text-sm font-semibold text-rose-100 mb-4">Desde</p>
              <p className="text-4xl font-bold text-white mb-1">30 €<span className="text-xl font-normal text-rose-100">/mes</span></p>
              <p className="text-rose-200 text-sm mb-6">Capital asegurado desde 50.000 €</p>
              <ul className="space-y-2 text-sm text-slate-100">
                {['Fallecimiento natural y accidental', 'Invalidez total y permanente', 'Enfermedades graves', 'Asistencia funeraria incluida'].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-rose-300">✓</span>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">¿Qué cubre el seguro de vida?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Coberturas completas adaptadas a tu situación personal y familiar
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
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">¿Por qué necesitas un seguro de vida?</h2>
              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Un seguro de vida garantiza que, si algo te ocurre, tu familia no tendrá que afrontar
                  dificultades económicas. Podrán mantener su nivel de vida, pagar la hipoteca, los estudios
                  de los hijos y cubrir los gastos del día a día.
                </p>
                <p>
                  Es especialmente importante si tienes personas dependientes de tus ingresos: pareja, hijos,
                  padres mayores o cualquier familiar a tu cargo.
                </p>
                <p>
                  Con una asesoría personalizada, te ayudo a elegir el capital asegurado correcto y las
                  coberturas que realmente necesitas, sin pagar de más.
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
                { stat: '1 de cada 3', desc: 'familias no podría mantener su nivel de vida si falleciera el sustentador principal' },
                { stat: '30 €/mes', desc: 'es suficiente para proteger a tu familia con un capital de 100.000 €' },
                { stat: '< 30 días', desc: 'tiempo habitual para que los beneficiarios cobren tras un siniestro' },
              ].map((item) => (
                <Card key={item.stat} className="border-l-4 border-rose-500">
                  <p className="text-2xl font-bold text-rose-600 mb-1">{item.stat}</p>
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
      <section className="py-16 bg-rose-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">¿Listo para proteger a tu familia?</h2>
          <p className="text-xl text-rose-100 mb-8">
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
