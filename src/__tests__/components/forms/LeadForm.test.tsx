import React from 'react'
import { render, screen, waitFor, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { LeadForm } from '@/components/forms/LeadForm'

const mockPush = jest.fn()

jest.mock('next/navigation', () => ({
  useRouter: () => ({ push: mockPush }),
}))

jest.mock('@/components/ui/Button', () => ({
  Button: ({
    children,
    disabled,
    type,
    className,
  }: {
    children: React.ReactNode
    disabled?: boolean
    type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type']
    className?: string
  }) => (
    <button type={type} disabled={disabled} className={className}>
      {children}
    </button>
  ),
}))

const validFormData = {
  name: 'Ana García',
  email: 'ana@example.com',
  phone: '600123456',
  insuranceType: 'vida',
  message: 'Necesito información',
}

function fillForm(data: Partial<typeof validFormData> = validFormData) {
  return async (user: ReturnType<typeof userEvent.setup>) => {
    if (data.name !== undefined) {
      await user.type(screen.getByLabelText(/nombre completo/i), data.name)
    }
    if (data.email !== undefined) {
      await user.type(screen.getByLabelText(/correo electrónico/i), data.email)
    }
    if (data.phone !== undefined) {
      await user.type(screen.getByLabelText(/teléfono/i), data.phone)
    }
    if (data.insuranceType !== undefined) {
      await user.selectOptions(screen.getByLabelText(/tipo de seguro/i), data.insuranceType)
    }
    if (data.message !== undefined) {
      await user.type(screen.getByLabelText(/mensaje/i), data.message)
    }
  }
}

beforeEach(() => {
  jest.clearAllMocks()
  global.fetch = jest.fn()
})

afterEach(() => {
  jest.restoreAllMocks()
})

describe('LeadForm', () => {
  describe('initial render', () => {
    it('renders all form fields', () => {
      render(<LeadForm />)
      expect(screen.getByLabelText(/nombre completo/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/correo electrónico/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/teléfono/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/tipo de seguro/i)).toBeInTheDocument()
      expect(screen.getByLabelText(/mensaje/i)).toBeInTheDocument()
    })

    it('renders the submit button', () => {
      render(<LeadForm />)
      expect(screen.getByRole('button', { name: /solicitar presupuesto/i })).toBeInTheDocument()
    })

    it('renders the privacy policy link', () => {
      render(<LeadForm />)
      const link = screen.getByRole('link', { name: /política de privacidad/i })
      expect(link).toHaveAttribute('href', '/politica-de-privacidad')
    })

    it('renders all insurance type options', () => {
      render(<LeadForm />)
      expect(screen.getByRole('option', { name: /seguro de vida/i })).toBeInTheDocument()
      expect(screen.getByRole('option', { name: /seguro de salud/i })).toBeInTheDocument()
      expect(screen.getByRole('option', { name: /seguro de mascotas/i })).toBeInTheDocument()
      expect(screen.getByRole('option', { name: /seguro de hogar/i })).toBeInTheDocument()
      expect(screen.getByRole('option', { name: /otro/i })).toBeInTheDocument()
    })
  })

  describe('client-side validation', () => {
    it('shows error when name is empty on submit', async () => {
      const user = userEvent.setup()
      render(<LeadForm />)
      await user.click(screen.getByRole('button', { name: /solicitar/i }))
      expect(await screen.findByText(/nombre debe tener al menos 2 caracteres/i)).toBeInTheDocument()
    })

    it('shows error when name is only 1 character', async () => {
      const user = userEvent.setup()
      render(<LeadForm />)
      await user.type(screen.getByLabelText(/nombre completo/i), 'A')
      await user.click(screen.getByRole('button', { name: /solicitar/i }))
      expect(await screen.findByText(/nombre debe tener al menos 2 caracteres/i)).toBeInTheDocument()
    })

    it('shows error when email is invalid', async () => {
      const user = userEvent.setup()
      const { container } = render(<LeadForm />)
      await user.type(screen.getByLabelText(/nombre completo/i), 'Ana García')
      await user.type(screen.getByLabelText(/correo electrónico/i), 'not-an-email')
      // Use fireEvent.submit to bypass HTML5 type="email" constraint validation
      // so the React-level validation logic is exercised
      fireEvent.submit(container.querySelector('form')!)
      expect(await screen.findByText(/introduce un email válido/i)).toBeInTheDocument()
    })

    it('shows error when phone is too short', async () => {
      const user = userEvent.setup()
      render(<LeadForm />)
      await user.type(screen.getByLabelText(/nombre completo/i), 'Ana García')
      await user.type(screen.getByLabelText(/correo electrónico/i), 'ana@example.com')
      await user.type(screen.getByLabelText(/teléfono/i), '123')
      await user.click(screen.getByRole('button', { name: /solicitar/i }))
      expect(await screen.findByText(/introduce un número de teléfono válido/i)).toBeInTheDocument()
    })

    it('shows error when insurance type is not selected', async () => {
      const user = userEvent.setup()
      render(<LeadForm />)
      await user.type(screen.getByLabelText(/nombre completo/i), 'Ana García')
      await user.type(screen.getByLabelText(/correo electrónico/i), 'ana@example.com')
      await user.type(screen.getByLabelText(/teléfono/i), '600123456')
      await user.click(screen.getByRole('button', { name: /solicitar/i }))
      expect(await screen.findByText(/selecciona un tipo de seguro/i)).toBeInTheDocument()
    })

    it('clears field error when the user starts typing in that field', async () => {
      const user = userEvent.setup()
      render(<LeadForm />)
      await user.click(screen.getByRole('button', { name: /solicitar/i }))
      await screen.findByText(/nombre debe tener al menos 2 caracteres/i)
      await user.type(screen.getByLabelText(/nombre completo/i), 'An')
      expect(screen.queryByText(/nombre debe tener al menos 2 caracteres/i)).not.toBeInTheDocument()
    })

    it('does not call fetch when validation fails', async () => {
      const user = userEvent.setup()
      render(<LeadForm />)
      await user.click(screen.getByRole('button', { name: /solicitar/i }))
      expect(global.fetch).not.toHaveBeenCalled()
    })
  })

  describe('successful form submission', () => {
    it('calls fetch with correct data on valid submit', async () => {
      ;(global.fetch as jest.Mock).mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ success: true, id: 'cuid-1' }),
      })
      const user = userEvent.setup()
      render(<LeadForm />)
      await fillForm()(user)
      await user.click(screen.getByRole('button', { name: /solicitar/i }))
      await waitFor(() => expect(global.fetch).toHaveBeenCalled())
      const [url, options] = (global.fetch as jest.Mock).mock.calls[0]
      expect(url).toBe('/api/leads')
      expect(options.method).toBe('POST')
      const body = JSON.parse(options.body)
      expect(body.name).toBe('Ana García')
      expect(body.email).toBe('ana@example.com')
    })

    it('redirects to /thank-you on successful submission', async () => {
      ;(global.fetch as jest.Mock).mockResolvedValue({
        ok: true,
        json: () => Promise.resolve({ success: true, id: 'cuid-1' }),
      })
      const user = userEvent.setup()
      render(<LeadForm />)
      await fillForm()(user)
      await user.click(screen.getByRole('button', { name: /solicitar/i }))
      await waitFor(() => expect(mockPush).toHaveBeenCalledWith('/thank-you'))
    })

    it('shows loading text during submission', async () => {
      let resolveFetch: (value: unknown) => void
      ;(global.fetch as jest.Mock).mockReturnValue(
        new Promise((resolve) => {
          resolveFetch = resolve
        })
      )
      const user = userEvent.setup()
      render(<LeadForm />)
      await fillForm()(user)
      await user.click(screen.getByRole('button', { name: /solicitar/i }))
      expect(await screen.findByRole('button', { name: /enviando\.\.\./i })).toBeInTheDocument()
      resolveFetch!({
        ok: true,
        json: () => Promise.resolve({ success: true, id: 'cuid-1' }),
      })
    })
  })

  describe('failed form submission', () => {
    it('shows server error message when API returns an error', async () => {
      ;(global.fetch as jest.Mock).mockResolvedValue({
        ok: false,
        json: () => Promise.resolve({ error: 'Error del servidor' }),
      })
      const user = userEvent.setup()
      render(<LeadForm />)
      await fillForm()(user)
      await user.click(screen.getByRole('button', { name: /solicitar/i }))
      expect(await screen.findByText(/error del servidor/i)).toBeInTheDocument()
    })

    it('shows fallback error when API response has no error message', async () => {
      ;(global.fetch as jest.Mock).mockResolvedValue({
        ok: false,
        json: () => Promise.resolve({}),
      })
      const user = userEvent.setup()
      render(<LeadForm />)
      await fillForm()(user)
      await user.click(screen.getByRole('button', { name: /solicitar/i }))
      expect(await screen.findByText(/error al enviar el formulario/i)).toBeInTheDocument()
    })

    it('shows connection error message when fetch throws', async () => {
      ;(global.fetch as jest.Mock).mockRejectedValue(new Error('Network error'))
      const user = userEvent.setup()
      render(<LeadForm />)
      await fillForm()(user)
      await user.click(screen.getByRole('button', { name: /solicitar/i }))
      expect(await screen.findByText(/error de conexión/i)).toBeInTheDocument()
    })
  })
})
