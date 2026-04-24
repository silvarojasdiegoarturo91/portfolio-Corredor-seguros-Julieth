import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          © {new Date().getFullYear()}{" "}
          <span className="text-white font-semibold">Julieth | Corredora de Seguros</span>. Todos los
          derechos reservados.
        </p>
        <div className="flex gap-4 text-sm">
          <Link href="#inicio" className="hover:text-white transition-colors">
            Inicio
          </Link>
          <Link href="#servicios" className="hover:text-white transition-colors">
            Servicios
          </Link>
          <Link href="#cotizar" className="hover:text-white transition-colors">
            Cotizar
          </Link>
          <Link href="#contacto" className="hover:text-white transition-colors">
            Contacto
          </Link>
        </div>
      </div>
    </footer>
  );
}
