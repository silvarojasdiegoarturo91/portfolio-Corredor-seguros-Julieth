import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">JS</span>
              </div>
              <span className="font-bold text-white text-lg">Corredor de Seguros Julieth</span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Protegemos lo que más amas con soluciones de seguro personalizadas. 
              Más de 10 años de experiencia brindando tranquilidad a familias españolas.
            </p>
            <div className="flex space-x-4">
              <a href="https://wa.me/34695135678" target="_blank" rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300 transition-colors">
                WhatsApp
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Servicios</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services#vida" className="hover:text-green-400 transition-colors">Seguro de Vida</Link></li>
              <li><Link href="/services#salud" className="hover:text-green-400 transition-colors">Seguro de Salud</Link></li>
              <li><Link href="/services#mascotas" className="hover:text-green-400 transition-colors">Seguro de Mascotas</Link></li>
              <li><Link href="/services#hogar" className="hover:text-green-400 transition-colors">Seguro de Hogar</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Contacto</h3>
            <ul className="space-y-2 text-sm">
              <li>📱 +34 600 000 000</li>
              <li>✉️ julieth@juliethperezseguros.com</li>
              <li>📍 España</li>
            </ul>
            <Link
              href="/contact"
              className="inline-block mt-4 bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors"
            >
              Solicitar presupuesto
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center text-gray-500">
          <p>© {new Date().getFullYear()} Corredor de Seguros Julieth. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
