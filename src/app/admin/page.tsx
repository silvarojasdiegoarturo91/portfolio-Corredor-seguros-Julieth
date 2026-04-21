import { Metadata } from 'next'
import { timingSafeEqual } from 'crypto'
import { prisma } from '@/lib/prisma'

export const metadata: Metadata = {
  title: 'Admin - Leads',
  robots: { index: false, follow: false },
}

export const dynamic = 'force-dynamic'

async function getLeads() {
  try {
    return await prisma.lead.findMany({
      orderBy: { createdAt: 'desc' },
    })
  } catch {
    return []
  }
}

function checkAuth(password: string | null): boolean {
  const adminPassword = process.env.ADMIN_PASSWORD
  if (!adminPassword || !password) return false
  try {
    const a = Buffer.from(password)
    const b = Buffer.from(adminPassword)
    return a.length === b.length && timingSafeEqual(a, b)
  } catch {
    return false
  }
}

export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<{ password?: string }>
}) {
  const { password: passwordParam } = await searchParams
  const password = passwordParam || null

  if (!checkAuth(password)) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-md p-8 max-w-sm w-full mx-4">
          <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">Admin Access</h1>
          <form method="GET">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Contraseña
            </label>
            <input
              id="password"
              name="password"
              type="password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 mb-4"
              placeholder="Ingresa la contraseña"
            />
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Acceder
            </button>
          </form>
        </div>
      </div>
    )
  }

  const leads = await getLeads()

  const insuranceLabels: Record<string, string> = {
    vida: 'Seguro de Vida',
    salud: 'Seguro de Salud',
    mascotas: 'Mascotas',
    hogar: 'Hogar',
    otro: 'Otro',
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Panel de Administración</h1>
            <p className="text-gray-600 mt-1">Gestión de leads y solicitudes</p>
          </div>
          <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold">
            {leads.length} leads totales
          </div>
        </div>

        {leads.length === 0 ? (
          <div className="bg-white rounded-xl shadow-md p-12 text-center">
            <p className="text-5xl mb-4">📭</p>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">No hay leads todavía</h2>
            <p className="text-gray-500">Los leads aparecerán aquí cuando alguien complete el formulario de contacto.</p>
          </div>
        ) : (
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    {['Nombre', 'Email', 'Teléfono', 'Seguro', 'Mensaje', 'Fecha'].map((h) => (
                      <th key={h} className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {leads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-gray-900">{lead.name}</td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        <a href={`mailto:${lead.email}`} className="text-blue-600 hover:underline">
                          {lead.email}
                        </a>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        <a href={`https://wa.me/${lead.phone.replace(/\D/g, '')}`} target="_blank" rel="noopener noreferrer" className="text-green-600 hover:underline">
                          {lead.phone}
                        </a>
                      </td>
                      <td className="px-6 py-4 text-sm">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">
                          {insuranceLabels[lead.insuranceType] || lead.insuranceType}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-600 max-w-xs truncate">
                        {lead.message || <span className="text-gray-400 italic">Sin mensaje</span>}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                        {new Date(lead.createdAt).toLocaleDateString('es-CO', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit',
                        })}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
