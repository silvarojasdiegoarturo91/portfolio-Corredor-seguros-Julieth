import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description:
    'Política de Privacidad de Julieth Seguros. Información sobre el tratamiento de tus datos personales conforme al Reglamento General de Protección de Datos (RGPD).',
  alternates: { canonical: '/politica-de-privacidad' },
  robots: { index: true, follow: true },
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            Política de Privacidad
          </h1>
          <p className="text-slate-300 text-lg">
            Última actualización: abril de 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-sm border border-slate-100 p-8 sm:p-12 space-y-10 text-slate-700 leading-relaxed">

            {/* 1. Responsable */}
            <div>
              <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">
                1. Responsable del Tratamiento
              </h2>
              <p>
                En cumplimiento del Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo
                (RGPD) y de la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos
                Personales y garantía de los derechos digitales (LOPDGDD), te informamos de que el
                responsable del tratamiento de los datos personales recabados a través de este sitio
                web es:
              </p>
              <ul className="mt-4 space-y-1 list-none pl-0">
                <li><strong>Nombre:</strong> María Julieth Pérez Fernández</li>
                <li><strong>Actividad:</strong> Corredora y Mediadora de Seguros</li>
                <li><strong>Correo electrónico:</strong>{' '}
                  <a href="mailto:contacto@juliethperezseguros.com" className="text-cyan-700 hover:underline">
                    contacto@juliethperezseguros.com
                  </a>
                </li>
                <li><strong>Teléfono:</strong> +34 695 135 678</li>
                <li><strong>Ámbito territorial:</strong> España</li>
              </ul>
            </div>

            {/* 2. Datos recabados */}
            <div>
              <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">
                2. Datos Personales que Recabamos
              </h2>
              <p>A través del formulario de solicitud de presupuesto recabamos los siguientes datos:</p>
              <ul className="mt-3 list-disc pl-6 space-y-1">
                <li>Nombre completo</li>
                <li>Dirección de correo electrónico</li>
                <li>Número de teléfono</li>
                <li>Tipo de seguro de interés</li>
                <li>Mensaje o consulta (opcional)</li>
              </ul>
              <p className="mt-4">
                Adicionalmente, como cualquier sitio web, podemos recabar de forma automática datos
                de navegación (dirección IP, tipo de navegador, páginas visitadas y duración de la
                visita) a través de herramientas de analítica web y el píxel de Meta, con la
                finalidad de medir el rendimiento de nuestras comunicaciones comerciales.
              </p>
            </div>

            {/* 3. Finalidades */}
            <div>
              <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">
                3. Finalidades del Tratamiento
              </h2>
              <p>Tratamos tus datos personales para las siguientes finalidades:</p>
              <ul className="mt-3 list-disc pl-6 space-y-2">
                <li>
                  <strong>Gestión de consultas y presupuestos:</strong> responder a las solicitudes
                  enviadas a través del formulario de contacto y elaborar propuestas de seguros
                  personalizadas.
                </li>
                <li>
                  <strong>Comunicación comercial:</strong> enviarte información sobre productos y
                  servicios de seguros que puedan ser de tu interés, siempre que hayas prestado tu
                  consentimiento expreso.
                </li>
                <li>
                  <strong>Analítica y mejora del sitio web:</strong> medir el tráfico, el rendimiento
                  y la efectividad de nuestras campañas publicitarias en Meta (Facebook / Instagram).
                </li>
                <li>
                  <strong>Cumplimiento de obligaciones legales:</strong> conservar los registros
                  exigidos por la normativa de mediación de seguros y la legislación tributaria
                  aplicable.
                </li>
              </ul>
            </div>

            {/* 4. Base jurídica */}
            <div>
              <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">
                4. Base Jurídica del Tratamiento
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Ejecución de medidas precontractuales (art. 6.1.b RGPD):</strong> el
                  tratamiento de los datos del formulario es necesario para atender tu solicitud de
                  presupuesto.
                </li>
                <li>
                  <strong>Consentimiento expreso (art. 6.1.a RGPD):</strong> para el envío de
                  comunicaciones comerciales y el uso del píxel de Meta con fines publicitarios.
                  Puedes retirar tu consentimiento en cualquier momento sin que ello afecte a la
                  licitud del tratamiento previo.
                </li>
                <li>
                  <strong>Cumplimiento de una obligación legal (art. 6.1.c RGPD):</strong> para
                  conservar documentación exigida por la normativa aplicable.
                </li>
                <li>
                  <strong>Interés legítimo (art. 6.1.f RGPD):</strong> para el análisis estadístico
                  del comportamiento de los usuarios en el sitio web, siempre ponderando los
                  derechos y libertades de los interesados.
                </li>
              </ul>
            </div>

            {/* 5. Destinatarios */}
            <div>
              <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">
                5. Destinatarios y Transferencias Internacionales
              </h2>
              <p>
                Con carácter general, no cedemos tus datos personales a terceros, salvo obligación
                legal. No obstante, para el funcionamiento del sitio web nos apoyamos en los
                siguientes proveedores de servicios (encargados del tratamiento), que pueden estar
                ubicados fuera del Espacio Económico Europeo:
              </p>
              <ul className="mt-3 list-disc pl-6 space-y-2">
                <li>
                  <strong>Meta Platforms, Inc.</strong> (Estados Unidos): píxel de seguimiento para
                  campañas publicitarias en Facebook e Instagram. Meta se adhiere al Marco UE-EE.UU.
                  de Privacidad de Datos. Puedes consultar su política de privacidad en{' '}
                  <a
                    href="https://www.facebook.com/privacy/policy/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-700 hover:underline"
                  >
                    facebook.com/privacy/policy
                  </a>.
                </li>
                <li>
                  <strong>Vercel, Inc.</strong> (Estados Unidos): alojamiento de la aplicación web.
                </li>
              </ul>
              <p className="mt-4">
                Cuando se producen transferencias internacionales de datos, se adoptan las garantías
                adecuadas previstas en el Capítulo V del RGPD (cláusulas contractuales tipo u otras
                garantías equivalentes).
              </p>
            </div>

            {/* 6. Conservación */}
            <div>
              <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">
                6. Plazos de Conservación
              </h2>
              <p>
                Conservaremos tus datos personales únicamente durante el tiempo necesario para
                cumplir las finalidades para las que fueron recabados:
              </p>
              <ul className="mt-3 list-disc pl-6 space-y-2">
                <li>
                  Los datos del formulario de contacto se conservarán durante <strong>1 año</strong>{' '}
                  desde la última comunicación, salvo que se formalice una relación contractual.
                </li>
                <li>
                  En caso de relación contractual, los datos se conservarán durante el tiempo que
                  dure el contrato y, una vez finalizado, durante los plazos de prescripción legales
                  aplicables (generalmente <strong>5 años</strong> en materia civil y mercantil).
                </li>
                <li>
                  Los datos relacionados con obligaciones tributarias se conservarán durante{' '}
                  <strong>4 años</strong>, de conformidad con la Ley General Tributaria.
                </li>
              </ul>
            </div>

            {/* 7. Derechos */}
            <div>
              <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">
                7. Tus Derechos
              </h2>
              <p>
                Conforme al RGPD y la LOPDGDD, puedes ejercer en cualquier momento los siguientes
                derechos:
              </p>
              <ul className="mt-3 list-disc pl-6 space-y-2">
                <li><strong>Acceso:</strong> conocer qué datos tuyos tratamos.</li>
                <li><strong>Rectificación:</strong> corregir datos inexactos o incompletos.</li>
                <li><strong>Supresión («derecho al olvido»):</strong> solicitar la eliminación de tus datos cuando, entre otros motivos, ya no sean necesarios para los fines que motivaron su recogida.</li>
                <li><strong>Oposición:</strong> oponerte al tratamiento de tus datos por motivos relacionados con tu situación particular.</li>
                <li><strong>Limitación del tratamiento:</strong> solicitar la suspensión del tratamiento en determinadas circunstancias.</li>
                <li><strong>Portabilidad:</strong> recibir tus datos en un formato estructurado y de uso común.</li>
                <li><strong>Retirada del consentimiento:</strong> en cualquier momento, sin que ello afecte a la licitud del tratamiento basado en el consentimiento previo a su retirada.</li>
              </ul>
              <p className="mt-4">
                Para ejercer cualquiera de estos derechos, dirígete a:{' '}
                <a href="mailto:contacto@juliethperezseguros.com" className="text-cyan-700 hover:underline">
                  contacto@juliethperezseguros.com
                </a>{' '}
                indicando el derecho que deseas ejercer y adjuntando copia de tu documento de
                identidad.
              </p>
              <p className="mt-4">
                Si consideras que el tratamiento de tus datos vulnera la normativa vigente, puedes
                presentar una reclamación ante la{' '}
                <a
                  href="https://www.aepd.es"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-700 hover:underline"
                >
                  Agencia Española de Protección de Datos (AEPD)
                </a>.
              </p>
            </div>

            {/* 8. Cookies */}
            <div>
              <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">
                8. Cookies y Tecnologías de Seguimiento
              </h2>
              <p>
                Este sitio web utiliza cookies propias y de terceros para fines analíticos y
                publicitarios. En particular, empleamos el píxel de Meta (Facebook) para medir la
                efectividad de nuestras campañas en redes sociales. Al navegar por el sitio web,
                prestas tu consentimiento al uso de estas tecnologías.
              </p>
              <p className="mt-4">
                Puedes configurar tu navegador para bloquear o eliminar cookies. Ten en cuenta que
                algunas funcionalidades del sitio pueden dejar de estar disponibles si desactivas
                las cookies.
              </p>
            </div>

            {/* 9. Seguridad */}
            <div>
              <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">
                9. Seguridad de los Datos
              </h2>
              <p>
                Hemos adoptado las medidas técnicas y organizativas necesarias para garantizar la
                seguridad de tus datos personales y evitar su alteración, pérdida, tratamiento o
                acceso no autorizado, habida cuenta del estado de la tecnología, la naturaleza de
                los datos almacenados y los riesgos a que están expuestos.
              </p>
            </div>

            {/* 10. Modificaciones */}
            <div>
              <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">
                10. Modificaciones de esta Política
              </h2>
              <p>
                Podemos actualizar esta Política de Privacidad en cualquier momento. La versión
                vigente siempre estará disponible en esta página con la fecha de última
                actualización. Te recomendamos revisarla periódicamente.
              </p>
            </div>

            {/* 11. Contacto */}
            <div>
              <h2 className="font-display text-2xl font-bold text-slate-900 mb-4">
                11. Contacto
              </h2>
              <p>
                Si tienes cualquier duda sobre esta Política de Privacidad o sobre el tratamiento
                de tus datos, puedes contactar con nosotros a través de:
              </p>
              <ul className="mt-3 space-y-1 list-none pl-0">
                <li>
                  <strong>Email:</strong>{' '}
                  <a href="mailto:contacto@juliethperezseguros.com" className="text-cyan-700 hover:underline">
                    contacto@juliethperezseguros.com
                  </a>
                </li>
                <li><strong>Teléfono:</strong> +34 695 135 678</li>
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-100 text-center">
              <Link
                href="/"
                className="inline-flex items-center text-cyan-700 font-semibold hover:text-cyan-800 transition-colors"
              >
                ← Volver al inicio
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
