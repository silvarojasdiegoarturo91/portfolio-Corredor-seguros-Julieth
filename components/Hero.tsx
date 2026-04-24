import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 text-white pt-16"
    >
      {/* Decorative background circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-block bg-blue-500/30 text-blue-100 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 tracking-wide uppercase">
          Corredora de Seguros Certificada
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
          Protege lo que más<br />
          <span className="text-yellow-300">importa en tu vida</span>
        </h1>
        <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto mb-10">
          Hola, soy <strong className="text-white">Julieth</strong>, corredora de seguros profesional.
          Te asesoro para encontrar la cobertura perfecta para ti, tu familia y tu empresa —
          con honestidad, transparencia y el respaldo de las mejores aseguradoras.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="#cotizar"
            className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold px-8 py-3.5 rounded-xl text-lg transition-colors shadow-lg"
          >
            Solicitar cotización gratis
          </Link>
          <Link
            href="#servicios"
            className="border-2 border-white/60 hover:border-white text-white font-semibold px-8 py-3.5 rounded-xl text-lg transition-colors"
          >
            Ver servicios
          </Link>
        </div>

        {/* Trust badges */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[
            { value: "10+", label: "Años de experiencia" },
            { value: "500+", label: "Clientes satisfechos" },
            { value: "15+", label: "Aseguradoras aliadas" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-extrabold text-yellow-300">{stat.value}</p>
              <p className="text-blue-200 text-xs mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
