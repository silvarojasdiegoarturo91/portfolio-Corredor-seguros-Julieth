"use client";

import { useState, FormEvent } from "react";

type FormState = {
  nombre: string;
  telefono: string;
  email: string;
  tipoSeguro: string;
  mensaje: string;
};

const tiposSeguros = [
  "Seguro de Vida",
  "Seguro de Salud",
  "Seguro de Vehículos",
  "Seguro de Hogar",
  "Seguros Empresariales",
  "Seguros de Viaje",
  "Otro",
];

export default function LeadForm() {
  const [form, setForm] = useState<FormState>({
    nombre: "",
    telefono: "",
    email: "",
    tipoSeguro: "",
    mensaje: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    // Simulate async submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1000);
  }

  return (
    <section id="cotizar" className="py-24 bg-blue-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-widest">
            Cotización sin costo
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900">
            Solicita tu <span className="text-blue-700">cotización gratis</span>
          </h2>
          <p className="mt-4 text-gray-500">
            Completa el formulario y me pondré en contacto contigo en menos de 24 horas.
          </p>
        </div>

        {submitted ? (
          <div className="bg-white rounded-2xl p-10 text-center shadow-md">
            <div className="text-green-500 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">¡Solicitud recibida!</h3>
            <p className="text-gray-500">
              Gracias, <strong>{form.nombre}</strong>. Me pondré en contacto contigo pronto al{" "}
              <strong>{form.email || form.telefono}</strong>.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-8 sm:p-10 shadow-md space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre completo <span className="text-red-500">*</span>
                </label>
                <input
                  id="nombre"
                  name="nombre"
                  type="text"
                  required
                  value={form.nombre}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>
              <div>
                <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">
                  Teléfono / WhatsApp
                </label>
                <input
                  id="telefono"
                  name="telefono"
                  type="tel"
                  value={form.telefono}
                  onChange={handleChange}
                  placeholder="+57 300 000 0000"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Correo electrónico <span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="tu@correo.com"
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              />
            </div>

            <div>
              <label htmlFor="tipoSeguro" className="block text-sm font-medium text-gray-700 mb-1">
                Tipo de seguro de interés <span className="text-red-500">*</span>
              </label>
              <select
                id="tipoSeguro"
                name="tipoSeguro"
                required
                value={form.tipoSeguro}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition bg-white"
              >
                <option value="">Selecciona una opción</option>
                {tiposSeguros.map((tipo) => (
                  <option key={tipo} value={tipo}>
                    {tipo}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">
                Mensaje adicional (opcional)
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={4}
                value={form.mensaje}
                onChange={handleChange}
                placeholder="Cuéntame más sobre lo que necesitas..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-3 rounded-xl text-base transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Enviando..." : "Solicitar cotización gratuita"}
            </button>

            <p className="text-center text-xs text-gray-400">
              Tu información es confidencial y nunca será compartida con terceros.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
