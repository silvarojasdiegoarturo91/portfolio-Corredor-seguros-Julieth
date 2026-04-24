import { Card } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'

const services = [
  {
    id: 'vida',
    icon: '🫀',
    title: 'Seguro de Vida',
    description: 'Protege el futuro financiero de tu familia con coberturas desde fallecimiento hasta invalidez permanente.',
    features: ['Cobertura fallecimiento', 'Invalidez permanente', 'Enfermedades graves', 'Asistencia funeraria'],
    color: 'from-rose-500/25 to-pink-500/10 text-rose-600',
  },
  {
    id: 'salud',
    icon: '🩺',
    title: 'Seguro de Salud',
    description: 'Accede a la mejor atención médica sin preocuparte por los costes. Planes para toda la familia.',
    features: ['Hospitalización', 'Cirugías', 'Medicamentos', 'Consultas especializadas'],
    color: 'from-blue-500/25 to-cyan-500/10 text-blue-600',
  },
  {
    id: 'mascotas',
    icon: '🐕',
    title: 'Seguro de Mascotas',
    description: 'Tu mascota merece la mejor atención. Cobertura veterinaria completa para perros y gatos.',
    features: ['Consultas veterinarias', 'Cirugías', 'Vacunas', 'Emergencias 24/7'],
    color: 'from-amber-500/25 to-orange-500/10 text-amber-600',
  },
  {
    id: 'hogar',
    icon: '🏡',
    title: 'Seguro de Hogar',
    description: 'Protege tu hogar y bienes contra incendio, robo, desastres naturales y más.',
    features: ['Incendio y explosión', 'Robo y hurto', 'Responsabilidad civil', 'Asistencia domiciliaria'],
    color: 'from-emerald-500/25 to-teal-500/10 text-emerald-600',
  },
]

export function ServicesSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.18em] text-cyan-700 font-semibold mb-3">Coberturas principales</p>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Nuestros Servicios
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            Soluciones de seguro completas para cada etapa de tu vida
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card key={service.id} hover className="flex flex-col">
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${service.color} text-2xl mb-4`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">{service.title}</h3>
              <p className="text-slate-600 text-sm mb-4 flex-1">{service.description}</p>
              <ul className="space-y-1.5 mb-4">
                {service.features.map((feature) => (
                  <li key={feature} className="text-sm text-slate-600 flex items-center">
                    <span className="text-emerald-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button href="/contact" variant="outline" size="sm" className="w-full rounded-xl">
                Ver presupuesto
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
