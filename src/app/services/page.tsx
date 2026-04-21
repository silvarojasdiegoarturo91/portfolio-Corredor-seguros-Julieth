import { Metadata } from 'next'
import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

export const metadata: Metadata = {
  title: 'Servicios',
  description: 'Conoce todos nuestros servicios de seguros: vida, salud, mascotas y hogar.',
}

const services = [
  {
    id: 'vida',
    icon: '❤️',
    title: 'Seguro de Vida',
    description: 'El seguro de vida es la mejor forma de proteger el futuro financiero de tu familia. En caso de fallecimiento o invalidez, tu familia recibirá el capital asegurado para mantener su calidad de vida.',
    features: [
      'Cobertura por fallecimiento natural o accidental',
      'Invalidez total y permanente',
      'Enfermedades graves diagnosticadas',
      'Asistencia funeraria incluida',
      'Planes desde 50€/mes',
    ],
    color: 'bg-red-50 border-red-200',
    iconBg: 'bg-red-100',
  },
  {
    id: 'salud',
    icon: '🏥',
    title: 'Seguro de Salud',
    description: 'Accede a la mejor atención médica privada sin preocuparte por los costos. Nuestros planes de salud cubren desde consultas de rutina hasta procedimientos complejos.',
    features: [
      'Hospitalización y cirugías',
      'Consultas con especialistas',
      'Medicamentos cubiertos',
      'Maternidad y pediatría',
      'Red de clínicas y hospitales',
    ],
    color: 'bg-blue-50 border-blue-200',
    iconBg: 'bg-blue-100',
  },
  {
    id: 'mascotas',
    icon: '🐾',
    title: 'Seguro de Mascotas',
    description: 'Tu mascota es parte de la familia y merece la mejor atención. Nuestro seguro cubre gastos veterinarios para que nunca tengas que elegir entre tu bolsillo y la salud de tu mascota.',
    features: [
      'Consultas y revisiones veterinarias',
      'Cirugías y procedimientos',
      'Vacunas obligatorias',
      'Urgencias 24/7',
      'Para perros y gatos',
    ],
    color: 'bg-yellow-50 border-yellow-200',
    iconBg: 'bg-yellow-100',
  },
  {
    id: 'hogar',
    icon: '🏠',
    title: 'Seguro de Hogar',
    description: 'Protege tu hogar y todos tus bienes contra los imprevistos de la vida. Desde incendios hasta robos, estamos aquí para que nunca pierdas lo que con tanto esfuerzo has construido.',
    features: [
      'Incendio, explosión y humo',
      'Robo y hurto de contenidos',
      'Responsabilidad civil familiar',
      'Daños por agua e inundación',
      'Asistencia domiciliaria 24/7',
    ],
    color: 'bg-green-50 border-green-200',
    iconBg: 'bg-green-100',
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-green-700 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nuestros Servicios</h1>
          <p className="text-xl text-green-100 max-w-2xl mx-auto">
            Soluciones de seguro completas y personalizadas para cada momento de tu vida
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {services.map((service, index) => (
              <Card key={service.id} className={`border-2 ${service.color}`} id={service.id}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center`}>
                  <div className={index % 2 !== 0 ? 'lg:order-2' : ''}>
                    <div className={`inline-flex p-4 rounded-full ${service.iconBg} mb-4`}>
                      <span className="text-5xl">{service.icon}</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">{service.title}</h2>
                    <p className="text-gray-600 text-lg mb-4">{service.description}</p>
                    <Button href="/contact" variant="primary">
                      Obtener Cotización
                    </Button>
                  </div>
                  <div className={index % 2 !== 0 ? 'lg:order-1' : ''}>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">¿Qué incluye?</h3>
                    <ul className="space-y-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <span className="text-green-500 font-bold mr-3 mt-0.5">✓</span>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">¿No sabes qué seguro necesitas?</h2>
          <p className="text-xl text-green-100 mb-8">
            Agenda una consulta gratuita y te asesoramos según tu situación personal.
          </p>
          <Button href="/contact" variant="white" size="lg">
            Asesoría Gratuita
          </Button>
        </div>
      </section>
    </div>
  )
}
