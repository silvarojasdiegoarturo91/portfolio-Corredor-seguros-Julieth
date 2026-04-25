'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/Button'

const insuranceTypes = [
  { value: 'vida', label: 'Seguro de Vida' },
  { value: 'salud', label: 'Seguro de Salud' },
  { value: 'mascotas', label: 'Seguro de Mascotas' },
  { value: 'hogar', label: 'Seguro de Hogar' },
  { value: 'otro', label: 'Otro' },
]

interface FormData {
  name: string
  email: string
  phone: string
  insuranceType: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  insuranceType?: string
  message?: string
  general?: string
}

export function LeadForm() {
  const router = useRouter()
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    insuranceType: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isLoading, setIsLoading] = useState(false)

  const validate = (): boolean => {
    const newErrors: FormErrors = {}
    if (!formData.name || formData.name.length < 2) {
      newErrors.name = 'El nombre debe tener al menos 2 caracteres'
    }
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Introduce un email válido'
    }
    if (!formData.phone || formData.phone.length < 7) {
      newErrors.phone = 'Introduce un número de teléfono válido'
    }
    if (!formData.insuranceType) {
      newErrors.insuranceType = 'Selecciona un tipo de seguro'
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setIsLoading(true)
    try {
      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (res.ok) {
        router.push('/thank-you')
      } else {
        setErrors({ general: data.error || 'Error al enviar el formulario. Inténtalo de nuevo.' })
      }
    } catch {
      setErrors({ general: 'Error de conexión. Inténtalo de nuevo.' })
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {errors.general && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
          {errors.general}
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Nombre completo *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Tu nombre"
          className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors bg-white/90 ${
            errors.name ? 'border-red-400 bg-red-50' : 'border-slate-300'
          }`}
        />
        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Correo electrónico *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="tu@email.com"
          className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors bg-white/90 ${
            errors.email ? 'border-red-400 bg-red-50' : 'border-slate-300'
          }`}
        />
        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Teléfono *
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          placeholder="+34 600 000 000"
          className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors bg-white/90 ${
            errors.phone ? 'border-red-400 bg-red-50' : 'border-slate-300'
          }`}
        />
        {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
      </div>

      <div>
        <label htmlFor="insuranceType" className="block text-sm font-medium text-gray-700 mb-1">
          Tipo de seguro *
        </label>
        <select
          id="insuranceType"
          name="insuranceType"
          value={formData.insuranceType}
          onChange={handleChange}
          className={`w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors bg-white/90 ${
            errors.insuranceType ? 'border-red-400 bg-red-50' : 'border-slate-300'
          }`}
        >
          <option value="">Selecciona una opción</option>
          {insuranceTypes.map((type) => (
            <option key={type.value} value={type.value}>
              {type.label}
            </option>
          ))}
        </select>
        {errors.insuranceType && <p className="mt-1 text-sm text-red-600">{errors.insuranceType}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Mensaje (opcional)
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Cuéntanos más sobre lo que necesitas..."
          rows={3}
          className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300 transition-colors resize-none bg-white/90"
        />
      </div>

      <Button type="submit" variant="primary" size="lg" className="w-full" disabled={isLoading}>
        {isLoading ? 'Enviando...' : 'Solicitar presupuesto gratuito'}
      </Button>

      <p className="text-xs text-gray-500 text-center">
        Al enviar este formulario, aceptas nuestra{' '}
        <a href="/politica-de-privacidad" className="underline hover:text-cyan-700" target="_blank" rel="noopener noreferrer">
          política de privacidad
        </a>.{' '}
        Nos comprometemos a responder en menos de 24 horas.
      </p>
    </form>
  )
}
