import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Julieth | Corredora de Seguros Profesional",
  description:
    "Portfolio profesional de Julieth, Corredora de Seguros. Asesoría personalizada en seguros de vida, salud, vehículos y empresas. ¡Solicita tu cotización hoy!",
  keywords: [
    "corredora de seguros",
    "seguros Colombia",
    "seguros de vida",
    "seguros de salud",
    "seguros vehículos",
    "asesoría en seguros",
    "Julieth seguros",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="min-h-full flex flex-col bg-white text-gray-900 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
