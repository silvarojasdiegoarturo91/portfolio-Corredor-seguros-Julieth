const contactInfo = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "WhatsApp",
    value: "+57 300 000 0000",
    href: "https://wa.me/573000000000",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Email",
    value: "julieth@seguros.com",
    href: "mailto:julieth@seguros.com",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Ubicación",
    value: "Colombia",
    href: undefined,
  },
];

export default function Contact() {
  return (
    <section id="contacto" className="py-24 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-blue-400 font-semibold text-sm uppercase tracking-widest">
            Contáctame
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold">
            ¿Tienes preguntas?{" "}
            <span className="text-blue-400">Estoy aquí para ayudarte</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Escríbeme o llámame directamente. Respondo con rapidez y te asesoro sin compromiso.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {contactInfo.map((item) => (
            <div
              key={item.label}
              className="bg-gray-800 rounded-2xl p-7 flex flex-col items-center text-center gap-3"
            >
              <div className="bg-blue-700/30 text-blue-400 p-3 rounded-xl">{item.icon}</div>
              <p className="text-sm text-gray-400 font-medium">{item.label}</p>
              {item.href ? (
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-semibold hover:text-blue-400 transition-colors text-sm"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-white font-semibold text-sm">{item.value}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
