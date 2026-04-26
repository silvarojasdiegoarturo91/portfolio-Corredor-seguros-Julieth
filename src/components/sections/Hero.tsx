import { Button } from '@/components/ui/Button'

export function Hero() {
  return (
    <section className="relative overflow-hidden hero-mesh text-white">
      <div className="absolute inset-0 noise-overlay" />
      <div className="pointer-events-none absolute -top-28 -left-20 h-72 w-72 rounded-full bg-cyan-300/25 blur-[90px] floating-orb" />
      <div className="pointer-events-none absolute top-28 right-8 h-80 w-80 rounded-full bg-blue-400/25 blur-[110px] floating-orb-delayed" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_25%,rgba(255,255,255,0.18),transparent_45%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-20 md:pt-24 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs sm:text-sm font-semibold text-cyan-100 mb-6">
              <span>+10 años de experiencia</span>
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
              <span>+50 clientes asesorados</span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.08] tracking-tight mb-5">
              Tu tranquilidad financiera,
              <span className="block text-premium-gradient">diseñada a medida.</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-slate-200/95 max-w-xl leading-relaxed mb-8">
              Correduría premium en España para proteger vida, salud, hogar y mascotas con asesoría personalizada,
              cobertura clara y respuesta ágil.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8">
              <Button href="/contact" variant="primary" size="lg" className="w-full sm:w-auto">
                Solicitar estudio gratuito
              </Button>
              <Button href="/services" variant="ghost" size="lg" className="w-full sm:w-auto">
                Ver coberturas
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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

          <div className="glass-card rounded-3xl p-6 sm:p-8">
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm font-semibold text-cyan-100">Confianza validada</p>
              <div className="inline-flex items-center gap-1 text-amber-300" aria-label="Valoración de 5 estrellas">
                {Array.from({ length: 5 }).map((_, index) => (
                  <span key={index}>★</span>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {[
                { icon: '🛡️', label: 'Corredora certificada en España' },
                { icon: '📊', label: 'Diagnóstico de riesgo personalizado' },
                { icon: '🤝', label: 'Acompañamiento humano en cada paso' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3 rounded-2xl border border-white/18 bg-white/10 px-4 py-3">
                  <span className="text-lg" aria-hidden="true">{item.icon}</span>
                  <span className="text-sm text-slate-100">{item.label}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 rounded-2xl border border-cyan-300/20 bg-slate-950/25 p-4">
              <p className="text-xs uppercase tracking-[0.16em] text-cyan-200 mb-2">Testimonio destacado</p>
              <p className="text-sm text-slate-100 leading-relaxed">
                “En menos de un día tuvimos un plan claro y el seguro ideal para nuestra familia. Atención impecable.”
              </p>
              <p className="mt-3 text-xs text-cyan-100">María G. · Seguro de Vida</p>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-2 text-xs text-slate-200/90">
              <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1">Vida</span>
              <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1">Salud</span>
              <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1">Mascotas</span>
              <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1">Hogar</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#eaf1f8] to-transparent" />
    </section>
  )
}
