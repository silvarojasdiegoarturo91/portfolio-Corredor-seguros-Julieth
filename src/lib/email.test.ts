import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

const createTransportMock = vi.fn()

vi.mock('nodemailer', () => ({
  default: {
    createTransport: createTransportMock,
  },
}))

type LeadData = {
  name: string
  email: string
  phone: string
  insuranceType: string
  message?: string
}

const lead: LeadData = {
  name: 'Maria Perez',
  email: 'maria@example.com',
  phone: '+34 600 000 000',
  insuranceType: 'vida',
  message: 'Necesito informacion',
}

function clearSmtpEnv(): void {
  delete process.env.SMTP_HOST
  delete process.env.SMTP_PORT
  delete process.env.SMTP_SECURE
  delete process.env.SMTP_USER
  delete process.env.SMTP_PASS
  delete process.env.NOTIFICATION_EMAIL
  delete process.env.SMTP_CONNECTION_TIMEOUT
  delete process.env.SMTP_GREETING_TIMEOUT
}

async function loadEmailModule() {
  vi.resetModules()
  return import('./email')
}

beforeEach(() => {
  createTransportMock.mockReset()
  clearSmtpEnv()
})

afterEach(() => {
  clearSmtpEnv()
})

describe('sendLeadNotification', () => {
  it('usa secure=true por defecto cuando el puerto es 465', async () => {
    const sendMail = vi.fn().mockResolvedValue({})

    process.env.SMTP_HOST = 'smtp.mail.ovh.net'
    process.env.SMTP_PORT = '465'
    process.env.SMTP_USER = 'contacto@juliethperezseguros.com'
    process.env.SMTP_PASS = 'secret'
    process.env.NOTIFICATION_EMAIL = 'contacto@juliethperezseguros.com'

    createTransportMock.mockReturnValue({ sendMail })

    const { sendLeadNotification } = await loadEmailModule()
    await sendLeadNotification(lead)

    expect(createTransportMock).toHaveBeenCalledWith(
      expect.objectContaining({
        host: 'smtp.mail.ovh.net',
        port: 465,
        secure: true,
      })
    )
    expect(sendMail).toHaveBeenCalledTimes(1)
  })

  it('permite forzar secure=false con SMTP_SECURE aunque el puerto sea 465', async () => {
    const sendMail = vi.fn().mockResolvedValue({})

    process.env.SMTP_HOST = 'smtp.mail.ovh.net'
    process.env.SMTP_PORT = '465'
    process.env.SMTP_SECURE = 'false'
    process.env.SMTP_USER = 'contacto@juliethperezseguros.com'
    process.env.SMTP_PASS = 'secret'

    createTransportMock.mockReturnValue({ sendMail })

    const { sendLeadNotification } = await loadEmailModule()
    await sendLeadNotification(lead)

    expect(createTransportMock).toHaveBeenCalledWith(
      expect.objectContaining({
        secure: false,
      })
    )
  })

  it('omite envio si faltan credenciales SMTP', async () => {
    const sendMail = vi.fn().mockResolvedValue({})
    createTransportMock.mockReturnValue({ sendMail })

    const { sendLeadNotification } = await loadEmailModule()
    await sendLeadNotification(lead)

    expect(createTransportMock).not.toHaveBeenCalled()
    expect(sendMail).not.toHaveBeenCalled()
  })

  it('resetea el transporter si sendMail falla y recrea conexion en el siguiente intento', async () => {
    process.env.SMTP_HOST = 'smtp.mail.ovh.net'
    process.env.SMTP_PORT = '465'
    process.env.SMTP_USER = 'contacto@juliethperezseguros.com'
    process.env.SMTP_PASS = 'secret'

    const firstSend = vi.fn().mockRejectedValue(new Error('SMTP down'))
    const secondSend = vi.fn().mockResolvedValue({})

    createTransportMock
      .mockReturnValueOnce({ sendMail: firstSend })
      .mockReturnValueOnce({ sendMail: secondSend })

    const { sendLeadNotification } = await loadEmailModule()

    await expect(sendLeadNotification(lead)).rejects.toThrow('SMTP down')
    await expect(sendLeadNotification(lead)).resolves.toBeUndefined()

    expect(createTransportMock).toHaveBeenCalledTimes(2)
  })
})
