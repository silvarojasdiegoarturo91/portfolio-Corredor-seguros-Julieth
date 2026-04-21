import { Button } from '@/components/ui/Button'

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-green-700 via-green-600 to-blue-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/10" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="max-w-3xl">
          <p className="text-green-200 font-semibold mb-4 tracking-wide uppercase text-sm">
            ✓ Certificada · ✓ +10 años de experiencia · ✓ +50 clientes en España
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            Protege lo que<br />
            <span className="text-green-300">más amas</span>
          </h1>
          <p className="text-xl md:text-2xl text-green-100 mb-8 leading-relaxed">
            Soluciones de seguro personalizadas para ti y tu familia. 
            Vida, salud, mascotas y hogar — todo en un solo lugar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button href="/contact" variant="white" size="lg">
              Solicitar presupuesto gratuito
            </Button>
            <Button href="/services" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-green-700">
              Ver Servicios
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-6 text-center">
            {[
              { value: '+50', label: 'Clientes Protegidos' },
              { value: '+10', label: 'Años de Experiencia' },
              { value: '100%', label: 'Compromiso' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-green-300">{stat.value}</p>
                <p className="text-sm text-green-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white" style={{ clipPath: 'ellipse(60% 100% at 50% 100%)' }} />
    </section>
  )
}
