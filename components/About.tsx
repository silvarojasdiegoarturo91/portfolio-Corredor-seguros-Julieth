export default function About() {
  return (
    <section id="sobre-mi" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Avatar placeholder */}
          <div className="flex justify-center">
            <div className="relative w-72 h-72 rounded-2xl bg-gradient-to-br from-blue-700 to-blue-400 flex items-center justify-center shadow-2xl">
              <svg
                className="w-40 h-40 text-white/60"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z" />
              </svg>
              <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-blue-900 text-xs font-bold px-3 py-1.5 rounded-full shadow">
                Certificada ✓
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">
              Sobre mí
            </span>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight">
              Tu aliada en <span className="text-blue-700">protección y tranquilidad</span>
            </h2>
            <p className="mt-5 text-gray-600 leading-relaxed">
              Soy Julieth, corredora de seguros con más de 10 años de experiencia ayudando a personas
              y empresas a tomar las mejores decisiones en materia de protección. Mi misión es
              simplificar el mundo de los seguros y encontrar la solución que mejor se adapte a
              tus necesidades y presupuesto.
            </p>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Trabajo de manera independiente, lo que me permite ofrecerte opciones de múltiples
              aseguradoras sin sesgos, siempre priorizando tu bienestar sobre todo lo demás.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                "Asesoría 100% personalizada",
                "Comparación de múltiples aseguradoras",
                "Acompañamiento en reclamaciones",
                "Disponibilidad y respuesta rápida",
              ].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <span className="mt-1 text-blue-600 shrink-0">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414L8.414 15 3.293 9.879a1 1 0 011.414-1.414L8.414 12.172l6.879-6.879a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-sm text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
