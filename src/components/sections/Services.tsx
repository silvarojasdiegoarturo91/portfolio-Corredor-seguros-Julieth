import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

const services = [
  {
    id: 'vida',
    icon: '❤️',
    title: 'Seguro de Vida',
    description: 'Protege el futuro financiero de tu familia con coberturas desde fallecimiento hasta invalidez permanente.',
    features: ['Cobertura fallecimiento', 'Invalidez permanente', 'Enfermedades graves', 'Asistencia funeraria'],
    color: 'text-red-500',
  },
  {
    id: 'salud',
    icon: '🏥',
    title: 'Seguro de Salud',
    description: 'Accede a la mejor atención médica sin preocuparte por los costos. Planes para toda la familia.',
    features: ['Hospitalización', 'Cirugías', 'Medicamentos', 'Consultas especializadas'],
    color: 'text-blue-500',
  },
  {
    id: 'mascotas',
    icon: '🐾',
    title: 'Seguro de Mascotas',
    description: 'Tu mascota merece la mejor atención. Cobertura veterinaria completa para perros y gatos.',
    features: ['Consultas veterinarias', 'Cirugías', 'Vacunas', 'Emergencias 24/7'],
    color: 'text-yellow-500',
  },
  {
    id: 'hogar',
    icon: '🏠',
    title: 'Seguro de Hogar',
    description: 'Protege tu hogar y bienes contra incendio, robo, desastres naturales y más.',
    features: ['Incendio y explosión', 'Robo y hurto', 'Responsabilidad civil', 'Asistencia domiciliaria'],
    color: 'text-green-500',
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Soluciones de seguro completas para cada etapa de tu vida
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card key={service.id} hover className="flex flex-col">
              <div className={`text-4xl mb-4 ${service.color}`}>{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm mb-4 flex-1">{service.description}</p>
              <ul className="space-y-1 mb-4">
                {service.features.map((feature) => (
                  <li key={feature} className="text-sm text-gray-600 flex items-center">
                    <span className="text-green-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button href="/contact" variant="outline" size="sm" className="w-full">
                Cotizar
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
