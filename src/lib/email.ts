import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

interface LeadEmailData {
  name: string
  email: string
  phone: string
  insuranceType: string
  message?: string
}

export async function sendLeadNotification(lead: LeadEmailData) {
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.log('Email not configured, skipping notification:', lead)
    return
  }

  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: process.env.NOTIFICATION_EMAIL || process.env.SMTP_USER,
    subject: `Nuevo Lead - ${lead.name} - ${lead.insuranceType}`,
    html: `
      <h2>Nuevo Lead Recibido</h2>
      <p><strong>Nombre:</strong> ${lead.name}</p>
      <p><strong>Email:</strong> ${lead.email}</p>
      <p><strong>Teléfono:</strong> ${lead.phone}</p>
      <p><strong>Tipo de Seguro:</strong> ${lead.insuranceType}</p>
      ${lead.message ? `<p><strong>Mensaje:</strong> ${lead.message}</p>` : ''}
    `,
  })
}
