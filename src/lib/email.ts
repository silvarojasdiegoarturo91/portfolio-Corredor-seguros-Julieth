import nodemailer from 'nodemailer'
import type { Transporter } from 'nodemailer'

interface LeadEmailData {
  name: string
  email: string
  phone: string
  insuranceType: string
  message?: string
}

let transporter: Transporter | null = null

function getTransporter(): Transporter | null {
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    return null
  }
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      connectionTimeout: parseInt(process.env.SMTP_CONNECTION_TIMEOUT || '5000'),
      greetingTimeout: parseInt(process.env.SMTP_GREETING_TIMEOUT || '5000'),
    })
  }
  return transporter
}

function resetTransporter(): void {
  transporter = null
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
}

export async function sendLeadNotification(lead: LeadEmailData) {
  const mailer = getTransporter()
  if (!mailer) {
    console.log('Email not configured, skipping notification')
    return
  }

  const safeName = escapeHtml(lead.name)
  const safeEmail = escapeHtml(lead.email)
  const safePhone = escapeHtml(lead.phone)
  const safeInsuranceType = escapeHtml(lead.insuranceType)
  const safeMessage = lead.message ? escapeHtml(lead.message) : null

  try {
    await mailer.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.NOTIFICATION_EMAIL || process.env.SMTP_USER,
      subject: `Nuevo Lead - ${safeName} - ${safeInsuranceType}`,
      html: `
        <h2>Nuevo Lead Recibido</h2>
        <p><strong>Nombre:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Teléfono:</strong> ${safePhone}</p>
        <p><strong>Tipo de Seguro:</strong> ${safeInsuranceType}</p>
        ${safeMessage ? `<p><strong>Mensaje:</strong> ${safeMessage}</p>` : ''}
      `,
    })
  } catch (error) {
    console.error('SMTP connection error, resetting transporter:', error)
    resetTransporter()
    throw error
  }
}
