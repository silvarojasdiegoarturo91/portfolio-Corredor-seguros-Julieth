import { Metadata } from 'next'
import { Hero } from '@/components/sections/Hero'
import { ServicesSection } from '@/components/sections/Services'
import { Card } from '@/components/ui/Card'
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
                <Card key={t.name} glass className="relative text-left">
                  <div className="text-cyan-200 text-3xl mb-3">&ldquo;</div>
                  <p className="text-slate-100 mb-5 italic">{t.text}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                        {t.name[0]}
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800">{t.name}</p>
                        <p className="text-sm text-cyan-700">{t.insurance}</p>
                      </div>
                    </div>
                    <span className="text-amber-500 text-sm">★★★★★</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="py-16 bg-gradient-to-r from-cyan-600 to-blue-700 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.1),transparent_40%)]" />
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xs uppercase tracking-[0.18em] text-cyan-200 font-semibold mb-3">¿Prefieres hablar primero?</p>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-4">
              Estamos a un mensaje de distancia
            </h2>
            <p className="text-lg text-cyan-100 mb-8 max-w-xl mx-auto">
              Escríbenos por WhatsApp y te atendemos de forma inmediata y personalizada. Sin esperas ni formularios.
            </p>
            <a
              href="https://wa.me/34695135678"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-2xl bg-white text-cyan-800 px-8 py-4 font-bold text-lg hover:bg-cyan-50 transition-colors shadow-xl hover:-translate-y-0.5 duration-200"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-emerald-500" aria-hidden="true">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.979-1.406A9.953 9.953 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.95 7.95 0 01-4.07-1.117l-.292-.174-3.027.854.816-2.98-.19-.307A7.962 7.962 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8zm4.406-5.843c-.242-.121-1.432-.707-1.654-.787-.222-.08-.384-.121-.546.121-.162.242-.626.787-.768.949-.142.162-.283.182-.525.061-.242-.121-1.022-.376-1.946-1.2-.719-.641-1.204-1.432-1.346-1.674-.142-.242-.015-.373.106-.494.109-.109.242-.283.363-.425.121-.142.162-.242.242-.404.08-.162.04-.304-.02-.425-.061-.121-.546-1.315-.748-1.801-.197-.473-.398-.409-.546-.417l-.465-.008c-.162 0-.425.061-.647.304-.222.242-.849.83-.849 2.024 0 1.194.869 2.348.99 2.51.121.162 1.712 2.614 4.147 3.665.58.25 1.032.399 1.384.511.582.185 1.112.159 1.531.097.467-.069 1.432-.586 1.634-1.151.202-.566.202-1.051.141-1.151-.061-.101-.222-.162-.465-.283z"/>
              </svg>
              Hablar por WhatsApp
            </a>
          </div>
        </section>
      </Reveal>
    </>
  )
}
