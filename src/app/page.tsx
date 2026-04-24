import { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { ServicesSection } from '@/components/sections/Services'
import { Card } from '@/components/ui/Card'
import { LeadForm } from '@/components/forms/LeadForm'
import { Reveal } from '@/components/ui/Reveal'

export const metadata: Metadata = {
  title: 'Inicio',
  description:
    'María Julieth Pérez Fernández, corredora de seguros certificada en España. Seguros de vida, salud, mascotas y hogar. Solicita tu presupuesto gratuito hoy.',
  alternates: { canonical: '/' },
}

const testimonials = [
  {
    name: 'María González',
    text: 'Julieth me ayudó a encontrar el seguro de vida perfecto para mi familia. Excelente servicio y muy profesional.',
    insurance: 'Seguro de Vida',
  },
  {
    name: 'Carlos Martínez',
    text: 'Gracias al seguro de salud que Julieth me recomendó, pude cubrir una hospitalización sin preocuparme por los costes.',
    insurance: 'Seguro de Salud',
  },
  {
    name: 'Ana Rodríguez',
    text: 'Mi perro Rocky recibió la mejor atención. El seguro de mascotas fue la mejor inversión que pude hacer.',
    insurance: 'Seguro de Mascotas',
  },
]

export default function HomePage() {
  return (
    <>
      <Hero />
      <Reveal>
        <ServicesSection />
      </Reveal>

      <Reveal>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-[0.18em] text-cyan-700 font-semibold mb-3">Autoridad y confianza</p>
              <h2 className="font-display text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
                Un servicio de correduría con enfoque humano y resultados
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
                Combinamos experiencia certificada, estrategia de cobertura y acompañamiento personalizado para ayudarte a tomar decisiones con seguridad.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { icon: '🏅', title: 'Certificación profesional', desc: 'Mediadora y corredora de seguros certificada en España, con asesoría transparente y responsable.' },
                { icon: '📆', title: '+10 años de experiencia', desc: 'Más de una década diseñando coberturas para familias, autónomos y profesionales.' },
                { icon: '👥', title: '+50 clientes satisfechos', desc: 'Clientes que confían en nuestro criterio para proteger su patrimonio y tranquilidad.' },
              ].map((item) => (
                <Card key={item.title} className="text-center">
                  <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-100 to-blue-100 text-2xl">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600">{item.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(52,211,153,0.16),transparent_35%),radial-gradient(circle_at_82%_22%,rgba(59,130,246,0.2),transparent_35%)]" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <p className="text-xs uppercase tracking-[0.18em] text-cyan-300 font-semibold mb-3">Prueba social</p>
              <h2 className="font-display text-3xl md:text-5xl font-extrabold mb-4 tracking-tight">
                Lo que dicen nuestros clientes
              </h2>
              <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                Testimonios reales de personas que ya protegen lo más importante con una estrategia adecuada.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <Card key={t.name} className="relative bg-white/10 border border-white/15 backdrop-blur-md text-left">
                  <div className="text-cyan-200 text-3xl mb-3">“</div>
                  <p className="text-slate-100 mb-5 italic">{t.text}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                        {t.name[0]}
                      </div>
                      <div>
                        <p className="font-semibold text-white">{t.name}</p>
                        <p className="text-sm text-cyan-200">{t.insurance}</p>
                      </div>
                    </div>
                    <span className="text-amber-300 text-sm">★★★★★</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-cyan-700 font-semibold mb-3">Conviértete en cliente hoy</p>
                <h2 className="font-display text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
                  Obtén un presupuesto claro, rápido y sin compromiso
                </h2>
                <p className="text-lg text-slate-600 mb-6 max-w-xl">
                  Completa el formulario y recibe una propuesta ajustada a tus necesidades. Te orientamos paso a paso para elegir cobertura real, sin sobrecostes.
                </p>

                <div className="space-y-3 mb-8">
                  {[
                    'Asesoría personalizada en menos de 24 horas',
                    'Opciones de cobertura para vida, salud, hogar y mascotas',
                    'Atención cercana y acompañamiento continuo',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-slate-700">
                      <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 text-sm">✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="https://wa.me/34695135678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-2xl border border-cyan-300 bg-cyan-50/80 px-5 py-3 font-semibold text-cyan-800 hover:bg-cyan-100 transition-colors"
                >
                  Hablar por WhatsApp
                </a>
              </div>

              <div className="soft-card rounded-3xl p-6 sm:p-8">
                <h3 className="font-display text-2xl font-bold text-slate-900 mb-2">Solicita tu estudio gratuito</h3>
                <p className="text-slate-600 text-sm mb-6">Te respondemos con una propuesta clara y personalizada.</p>
                <LeadForm />
              </div>
            </div>
          </div>
        </section>
      </Reveal>
    </>
  )
}
