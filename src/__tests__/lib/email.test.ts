// We test the exported escapeHtml via its observable effect in sendLeadNotification,
// and also expose the function indirectly by testing the module internals.
// Since escapeHtml is not exported, we test its effects through sendLeadNotification.

jest.mock('nodemailer', () => ({
  createTransport: jest.fn(() => ({
    sendMail: jest.fn().mockResolvedValue({ messageId: 'test-id' }),
  })),
}))

import nodemailer from 'nodemailer'
import { sendLeadNotification } from '@/lib/email'

const mockSendMail = jest.fn().mockResolvedValue({ messageId: 'test-id' })
const mockCreateTransport = nodemailer.createTransport as jest.Mock

beforeEach(() => {
  jest.clearAllMocks()
  mockCreateTransport.mockReturnValue({ sendMail: mockSendMail })
})

describe('sendLeadNotification', () => {
  describe('when SMTP credentials are not configured', () => {
    beforeEach(() => {
      delete process.env.SMTP_USER
      delete process.env.SMTP_PASS
    })

    it('does not send an email and returns early', async () => {
      await sendLeadNotification({
        name: 'Ana',
        email: 'ana@example.com',
        phone: '600000000',
        insuranceType: 'vida',
      })
      expect(mockSendMail).not.toHaveBeenCalled()
    })
  })

  describe('when SMTP credentials are configured', () => {
    beforeEach(() => {
      process.env.SMTP_USER = 'user@example.com'
      process.env.SMTP_PASS = 'secret'
      process.env.NOTIFICATION_EMAIL = 'notify@example.com'
    })

    afterEach(() => {
      delete process.env.SMTP_USER
      delete process.env.SMTP_PASS
      delete process.env.NOTIFICATION_EMAIL
    })

    it('calls sendMail with the correct recipient', async () => {
      await sendLeadNotification({
        name: 'Ana',
        email: 'ana@example.com',
        phone: '600000000',
        insuranceType: 'vida',
      })
      expect(mockSendMail).toHaveBeenCalledTimes(1)
      const callArg = mockSendMail.mock.calls[0][0]
      expect(callArg.to).toBe('notify@example.com')
    })

    it('uses SMTP_USER as fallback recipient when NOTIFICATION_EMAIL is absent', async () => {
      delete process.env.NOTIFICATION_EMAIL
      await sendLeadNotification({
        name: 'Ana',
        email: 'ana@example.com',
        phone: '600000000',
        insuranceType: 'vida',
      })
      const callArg = mockSendMail.mock.calls[0][0]
      expect(callArg.to).toBe('user@example.com')
    })

    it('includes lead name and insurance type in the subject', async () => {
      await sendLeadNotification({
        name: 'Carlos',
        email: 'carlos@example.com',
        phone: '612345678',
        insuranceType: 'salud',
      })
      const callArg = mockSendMail.mock.calls[0][0]
      expect(callArg.subject).toContain('Carlos')
      expect(callArg.subject).toContain('salud')
    })

    it('includes all lead fields in the HTML body', async () => {
      await sendLeadNotification({
        name: 'María',
        email: 'maria@example.com',
        phone: '699999999',
        insuranceType: 'hogar',
        message: 'Necesito cobertura completa',
      })
      const callArg = mockSendMail.mock.calls[0][0]
      expect(callArg.html).toContain('María')
      expect(callArg.html).toContain('maria@example.com')
      expect(callArg.html).toContain('699999999')
      expect(callArg.html).toContain('hogar')
      expect(callArg.html).toContain('Necesito cobertura completa')
    })

    it('omits the message section when no message is provided', async () => {
      await sendLeadNotification({
        name: 'Luis',
        email: 'luis@example.com',
        phone: '611111111',
        insuranceType: 'mascotas',
      })
      const callArg = mockSendMail.mock.calls[0][0]
      expect(callArg.html).not.toContain('<strong>Mensaje:</strong>')
    })

    it('escapes HTML special characters in lead name to prevent XSS', async () => {
      await sendLeadNotification({
        name: '<script>alert("xss")</script>',
        email: 'xss@example.com',
        phone: '600000000',
        insuranceType: 'vida',
      })
      const callArg = mockSendMail.mock.calls[0][0]
      expect(callArg.html).not.toContain('<script>')
      expect(callArg.html).toContain('&lt;script&gt;')
    })

    it('escapes ampersand in lead fields', async () => {
      await sendLeadNotification({
        name: 'Pérez & García',
        email: 'test@example.com',
        phone: '600000000',
        insuranceType: 'vida',
      })
      const callArg = mockSendMail.mock.calls[0][0]
      expect(callArg.html).not.toContain('Pérez & García')
      expect(callArg.html).toContain('Pérez &amp; García')
    })

    it('escapes double quotes in lead fields', async () => {
      await sendLeadNotification({
        name: 'Ana "La Corredora"',
        email: 'test@example.com',
        phone: '600000000',
        insuranceType: 'vida',
      })
      const callArg = mockSendMail.mock.calls[0][0]
      expect(callArg.html).toContain('&quot;')
    })

    it('escapes single quotes in lead fields', async () => {
      await sendLeadNotification({
        name: "O'Brien",
        email: 'test@example.com',
        phone: '600000000',
        insuranceType: 'vida',
      })
      const callArg = mockSendMail.mock.calls[0][0]
      expect(callArg.html).toContain('&#039;')
    })

    it('escapes HTML in message field', async () => {
      await sendLeadNotification({
        name: 'Test',
        email: 'test@example.com',
        phone: '600000000',
        insuranceType: 'vida',
        message: '<img src=x onerror=alert(1)>',
      })
      const callArg = mockSendMail.mock.calls[0][0]
      expect(callArg.html).not.toContain('<img')
      expect(callArg.html).toContain('&lt;img')
    })
  })
})
