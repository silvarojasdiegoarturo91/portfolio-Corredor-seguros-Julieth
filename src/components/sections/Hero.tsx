import { LeadForm } from '@/components/forms/LeadForm'

export function Hero() {
  return (
    <section className="relative overflow-hidden hero-mesh text-white">
      <div className="absolute inset-0 noise-overlay" />
      <div className="pointer-events-none absolute -top-28 -left-20 h-72 w-72 rounded-full bg-cyan-300/25 blur-[90px] floating-orb" />
      <div className="pointer-events-none absolute top-28 right-8 h-80 w-80 rounded-full bg-blue-400/25 blur-[110px] floating-orb-delayed" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_25%,rgba(255,255,255,0.18),transparent_45%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20 md:pt-24 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* Left: Value proposition */}
          <div className="lg:pt-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs sm:text-sm font-semibold text-cyan-100 mb-6">
              <span>+10 años de experiencia</span>
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
              <span>Corredora certificada DGS</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight mb-5">
              Tu tranquilidad financiera,
              <span className="block text-premium-gradient">diseñada a medida.</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-slate-200/95 max-w-xl leading-relaxed mb-8">
              Correduría premium en España para proteger vida, salud, hogar y mascotas con asesoría personalizada,
              cobertura clara y respuesta garantizada.
            </p>

            <div className="space-y-3 mb-8">
              {[
                { icon: '🛡️', label: 'Corredora certificada en España (DGS)' },
                { icon: '📊', label: 'Diagnóstico de riesgo 100% personalizado' },
                { icon: '🤝', label: 'Acompañamiento humano en cada paso' },
                { icon: '⚡', label: 'Respuesta garantizada en menos de 24 h' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 rounded-2xl border border-white/18 bg-white/10 px-4 py-3">
                  <span className="text-lg" aria-hidden="true">{item.icon}</span>
                  <span className="text-sm text-slate-100">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4">
              {[
                { value: '4.9/5', label: 'Valoración media' },
                { value: '<24h', label: 'Tiempo de respuesta' },
                { value: '100%', label: 'Asesoría personalizada' },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/20 bg-white/10 px-4 py-3 backdrop-blur-sm">
                  <p className="font-display text-2xl font-bold text-cyan-200">{stat.value}</p>
                  <p className="text-xs text-slate-200/90">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Lead form card – visible on page load */}
          <div className="hero-form-card rounded-3xl p-6 sm:p-8">
            {/* Trust header */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className="text-amber-400 text-sm" aria-label="Valoración de 5 estrellas">★★★★★</span>
                <span className="text-xs font-semibold text-slate-600">Confianza verificada</span>
              </div>
              <span className="inline-flex items-center gap-1 text-xs text-emerald-700 font-semibold bg-emerald-50 border border-emerald-200 rounded-full px-2.5 py-1">
                🔒 Datos protegidos
              </span>
            </div>

            <h2 className="font-display text-2xl font-bold text-slate-900 mb-1">
              Solicita tu estudio gratuito
            </h2>
            <p className="text-sm text-slate-500 mb-5">
              Sin coste. Sin compromiso. Te respondemos en <strong className="text-slate-700">menos de 24 h</strong>.
            </p>

            <LeadForm />

            {/* Mini social proof */}
            <div className="mt-4 flex items-center gap-3 rounded-xl bg-slate-50 border border-slate-100 px-4 py-3">
              <div className="flex -space-x-2">
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
                <strong>+50 clientes</strong> ya protegen su familia con nosotros
              </p>
            </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#eaf1f8] to-transparent" />
    </section>
  )
}
