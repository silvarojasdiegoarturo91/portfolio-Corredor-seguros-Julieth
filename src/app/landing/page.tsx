import type { Metadata } from 'next'
import { LeadForm } from '@/components/forms/LeadForm'
import { Card } from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'Solicita tu seguro gratuito | María Julieth Pérez – Corredora de Seguros',
  description:
    'Obtén en menos de 24 horas una propuesta personalizada de seguro de vida, salud, mascotas u hogar. Asesoría sin coste ni compromiso. Corredora certificada en España.',
  robots: { index: false, follow: false },
}

const testimonials = [
  {
    name: 'María González',
    initial: 'M',
    text: '"En menos de un día tuvimos un plan claro y el seguro ideal para nuestra familia. Atención impecable."',
    insurance: 'Seguro de Vida',
  },
  {
    name: 'Carlos Martínez',
    initial: 'C',
    text: '"Pude cubrir una hospitalización sin preocuparme por los costes. Gracias a Julieth por la cobertura exacta."',
    insurance: 'Seguro de Salud',
  },
  {
    name: 'Ana Rodríguez',
    initial: 'A',
    text: '"El seguro de mascotas fue la mejor inversión. Rocky recibió la mejor atención sin ningún problema."',
    insurance: 'Seguro de Mascotas',
  },
]

const benefits = [
  { icon: '🛡️', title: 'Corredora certificada DGS', desc: 'Mediadora oficial registrada en España. Asesoría transparente y legalmente respaldada.' },
  { icon: '⚡', title: 'Respuesta en menos de 24 h', desc: 'Recibirás una propuesta real y personalizada en menos de un día hábil.' },
  { icon: '💶', title: 'Presupuesto sin coste', desc: 'Estudiar tu caso no tiene ningún coste ni supone ningún compromiso de contratación.' },
  { icon: '🤝', title: 'Acompañamiento continuo', desc: 'No desaparecemos tras la firma. Estamos contigo ante cualquier siniestro o duda.' },
]

export default function LandingPage() {
  return (
    <div className="min-h-screen premium-page">

      {/* ─── HERO + FORM (above the fold) ─── */}
      <section className="relative overflow-hidden hero-mesh text-white">
        <div className="absolute inset-0 noise-overlay" />
        <div className="pointer-events-none absolute -top-28 -left-20 h-72 w-72 rounded-full bg-cyan-300/25 blur-[90px] floating-orb" />
        <div className="pointer-events-none absolute top-28 right-8 h-80 w-80 rounded-full bg-blue-400/25 blur-[110px] floating-orb-delayed" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_25%,rgba(255,255,255,0.18),transparent_45%)]" />

        {/* Minimal top bar */}
        <div className="relative border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-xl font-extrabold font-display tracking-tight">Julieth</span>
              <span className="text-premium-gradient font-extrabold font-display">Seguros</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <span className="text-emerald-400">●</span>
              <span>Corredora certificada DGS · España</span>
            </div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Left – Headline & trust bullets */}
            <div className="lg:pt-2">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs sm:text-sm font-semibold text-cyan-100 mb-6">
                <span className="text-amber-300">★★★★★</span>
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                <span>+50 familias protegidas</span>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight mb-5">
                Protege lo que más importa,
                <span className="block text-premium-gradient">sin pagar de más.</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-200/90 max-w-lg leading-relaxed mb-8">
                Obtén un estudio de seguro personalizado y gratuito. Vida, salud, mascotas u hogar —
                en menos de 24 horas tendrás una propuesta clara sin compromisos.
              </p>

              <div className="space-y-3 mb-10">
                {benefits.map((b) => (
                  <div key={b.title} className="flex items-start gap-3 rounded-2xl border border-white/15 bg-white/10 px-4 py-3">
                    <span className="text-xl mt-0.5" aria-hidden="true">{b.icon}</span>
                    <div>
                      <p className="text-sm font-semibold text-white">{b.title}</p>
                      <p className="text-xs text-slate-300 leading-relaxed">{b.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3">
                {[
                  { value: '4.9/5', label: 'Valoración' },
                  { value: '<24h', label: 'Respuesta' },
                  { value: '100%', label: 'Personalizado' },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/20 bg-white/10 px-3 py-3 backdrop-blur-sm text-center">
                    <p className="font-display text-xl font-bold text-cyan-200">{stat.value}</p>
                    <p className="text-xs text-slate-200/80">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right – Lead form (immediately visible on load) */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-[0_28px_64px_rgba(8,15,42,0.35)]">
              {/* Form header */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2">
                  <span className="text-amber-400 text-base" aria-label="Valoración de 5 estrellas">★★★★★</span>
                  <span className="text-xs font-semibold text-slate-600">Confianza verificada</span>
                </div>
                <span className="inline-flex items-center gap-1 text-xs text-emerald-700 font-semibold bg-emerald-50 border border-emerald-200 rounded-full px-2.5 py-1">
                  🔒 Datos protegidos
                </span>
              </div>

              <h2 className="font-display text-2xl font-bold text-slate-900 mb-1">
                Solicita tu estudio gratuito
              </h2>
              <p className="text-sm text-slate-500 mb-6">
                Sin coste · Sin compromiso · Respuesta en{' '}
                <strong className="text-slate-700">menos de 24 h</strong>
              </p>

              <LeadForm />

              {/* Mini social proof below form */}
              <div className="mt-5 flex items-center gap-3 rounded-xl bg-slate-50 border border-slate-100 px-4 py-3">
                <div className="flex -space-x-2 shrink-0">
                  {['M', 'C', 'A'].map((initial) => (
                    <div
                      key={initial}
                      className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-white"
                      aria-hidden="true"
                    >
                      {initial}
                    </div>
                  ))}
                </div>
                <p className="text-xs text-slate-600">
                  <strong>+50 clientes</strong> ya protegen a su familia con nosotros
                </p>
              </div>
            </div>

          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#f4f8fb] to-transparent" />
      </section>

      {/* ─── SOCIAL PROOF – Testimonials ─── */}
      <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(52,211,153,0.16),transparent_35%),radial-gradient(circle_at_82%_22%,rgba(59,130,246,0.2),transparent_35%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.18em] text-cyan-300 font-semibold mb-3">Prueba social</p>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">
              Lo que dicen quienes ya nos eligieron
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Personas reales que protegen lo más importante con una estrategia adecuada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <Card key={t.name} glass>
                <span className="text-amber-400 text-sm mb-3 block">★★★★★</span>
                <p className="text-slate-100 mb-5 italic text-sm leading-relaxed">{t.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold shrink-0">
                    {t.initial}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800 text-sm">{t.name}</p>
                    <p className="text-xs text-cyan-700">{t.insurance}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY US – Authority cards ─── */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-[0.18em] text-cyan-700 font-semibold mb-3">Por qué elegirme</p>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Experiencia, cercanía y resultados reales
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              No soy una aseguradora: soy tu aliada independiente para encontrar la mejor cobertura al mejor precio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '🏅', title: 'Certificación DGS', desc: 'Mediadora y corredora oficial en España. Asesoría transparente, sin conflicto de interés.' },
              { icon: '📆', title: '+10 años de experiencia', desc: 'Más de una década diseñando coberturas para familias, autónomos y profesionales.' },
              { icon: '👥', title: '+50 clientes satisfechos', desc: 'Familias que confían en nuestro criterio para proteger su patrimonio y tranquilidad.' },
            ].map((item) => (
              <Card key={item.title} className="text-center">
                <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-100 to-blue-100 text-2xl">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA ─── */}
      <section className="py-16 bg-gradient-to-r from-cyan-600 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.1),transparent_40%)]" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl md:text-4xl font-extrabold mb-4">
            ¿Prefieres hablar antes de rellenar el formulario?
          </h2>
          <p className="text-lg text-cyan-100 mb-8 max-w-xl mx-auto">
            Escríbeme por WhatsApp y te atiendo de forma inmediata y personalizada. Sin esperas ni burocracia.
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

      {/* Minimal footer */}
      <footer className="py-6 text-center text-xs text-slate-500 border-t border-slate-200">
        <p>
          © {new Date().getFullYear()} María Julieth Pérez Fernández · Corredora de Seguros Certificada en España ·{' '}
          <a href="/politica-de-privacidad" className="underline hover:text-cyan-700" target="_blank" rel="noopener noreferrer">
            Política de privacidad
          </a>
        </p>
      </footer>

    </div>
  )
}
