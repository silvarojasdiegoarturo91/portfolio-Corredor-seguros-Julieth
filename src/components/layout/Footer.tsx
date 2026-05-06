import Link from 'next/link'
import { JuliethLogo } from '@/components/ui/JuliethLogo'

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_8%,rgba(20,184,166,0.18),transparent_35%),radial-gradient(circle_at_82%_18%,rgba(59,130,246,0.16),transparent_32%)]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <JuliethLogo size={36} />
              <span className="font-display font-bold text-white text-lg">Julieth Seguros</span>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Protegemos lo que más amas con soluciones de seguro personalizadas. 
              Más de 10 años de experiencia brindando tranquilidad a familias españolas.
            </p>
            <div className="flex space-x-4">
              <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '34695135678'}`} target="_blank" rel="noopener noreferrer"
                className="text-cyan-300 hover:text-cyan-200 transition-colors">
                WhatsApp
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Servicios</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services#vida" className="hover:text-cyan-300 transition-colors">Seguro de Vida</Link></li>
              <li><Link href="/services#salud" className="hover:text-cyan-300 transition-colors">Seguro de Salud</Link></li>
              <li><Link href="/services#mascotas" className="hover:text-cyan-300 transition-colors">Seguro de Mascotas</Link></li>
              <li><Link href="/services#hogar" className="hover:text-cyan-300 transition-colors">Seguro de Hogar</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">Contacto</h3>
            <ul className="space-y-2 text-sm">
              <li>📱 +34 695 135 678</li>
              <li>✉️ contacto@juliethperezseguros.com</li>
              <li>📍 España</li>
            </ul>
            <Link
              href="/contact"
              className="inline-block mt-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2.5 rounded-xl text-sm font-semibold hover:brightness-110 transition-all"
            >
              Solicitar presupuesto
            </Link>
          </div>
        </div>

        <div className="relative border-t border-slate-800 mt-8 pt-8 text-sm text-center text-slate-500 space-y-2">
          <div className="flex justify-center gap-6">
            <Link href="/politica-de-privacidad" className="hover:text-cyan-300 transition-colors">
              Política de Privacidad
            </Link>
          </div>
          <p>© {new Date().getFullYear()} Corredor de Seguros Julieth. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
