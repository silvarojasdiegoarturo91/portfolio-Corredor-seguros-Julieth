/**
 * @vitest-environment node
 */
import { vi } from 'vitest'
import { NextRequest } from 'next/server'

vi.mock('@/lib/prisma', () => ({
  prisma: {
    lead: {
      create: vi.fn(),
      findMany: vi.fn(),
    },
  },
}))

vi.mock('@/lib/email', () => ({
  sendLeadNotification: vi.fn().mockResolvedValue(undefined),
}))

import { POST, GET } from '@/app/api/leads/route'
import { prisma } from '@/lib/prisma'

const mockCreate = prisma.lead.create as ReturnType<typeof vi.fn>
const mockFindMany = prisma.lead.findMany as ReturnType<typeof vi.fn>

function makePostRequest(body: unknown): NextRequest {
  return new NextRequest('http://localhost/api/leads', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  })
}

function makeGetRequest(authHeader?: string): NextRequest {
  return new NextRequest('http://localhost/api/leads', {
    method: 'GET',
    headers: authHeader ? { Authorization: authHeader } : {},
  })
}

beforeEach(() => {
  vi.clearAllMocks()
})

describe('POST /api/leads', () => {
  const validBody = {
    name: 'Ana García',
    email: 'ana@example.com',
    phone: '600123456',
    insuranceType: 'vida',
    message: 'Necesito información',
  }

  it('creates a lead and returns 201 on valid input', async () => {
    mockCreate.mockResolvedValue({ id: 'cuid-123', ...validBody })
    const req = makePostRequest(validBody)
    const res = await POST(req)
    expect(res.status).toBe(201)
    const json = await res.json()
    expect(json.success).toBe(true)
    expect(json.id).toBe('cuid-123')
  })

  it('calls prisma.lead.create with the validated data', async () => {
    mockCreate.mockResolvedValue({ id: 'cuid-456', ...validBody })
    const req = makePostRequest(validBody)
    await POST(req)
    expect(mockCreate).toHaveBeenCalledWith({ data: validBody })
  })

  it('works without the optional message field', async () => {
    const body = { name: 'Luis', email: 'luis@ex.com', phone: '6001234', insuranceType: 'salud' }
    mockCreate.mockResolvedValue({ id: 'cuid-789', ...body })
    const req = makePostRequest(body)
    const res = await POST(req)
    expect(res.status).toBe(201)
  })

  it('returns 400 when name is too short', async () => {
    const req = makePostRequest({ ...validBody, name: 'A' })
    const res = await POST(req)
    expect(res.status).toBe(400)
    const json = await res.json()
    expect(json.success).toBe(false)
    expect(json.errors).toBeDefined()
  })

  it('returns 400 when email is invalid', async () => {
    const req = makePostRequest({ ...validBody, email: 'not-an-email' })
    const res = await POST(req)
    expect(res.status).toBe(400)
  })

  it('returns 400 when phone is too short', async () => {
    const req = makePostRequest({ ...validBody, phone: '123' })
    const res = await POST(req)
    expect(res.status).toBe(400)
  })

  it('returns 400 when insuranceType is missing', async () => {
    const { insuranceType: _, ...bodyWithoutType } = validBody
    const req = makePostRequest(bodyWithoutType)
    const res = await POST(req)
    expect(res.status).toBe(400)
  })

  it('returns 400 when required fields are missing entirely', async () => {
    const req = makePostRequest({})
    const res = await POST(req)
    expect(res.status).toBe(400)
  })

  it('returns 500 when prisma throws an unexpected error', async () => {
    mockCreate.mockRejectedValue(new Error('DB connection failed'))
    const req = makePostRequest(validBody)
    const res = await POST(req)
    expect(res.status).toBe(500)
    const json = await res.json()
    expect(json.success).toBe(false)
    expect(json.error).toBe('Error interno del servidor')
  })

  it('still returns 201 even if email notification fails', async () => {
    const { sendLeadNotification } = await import('@/lib/email')
    ;(sendLeadNotification as ReturnType<typeof vi.fn>).mockRejectedValueOnce(new Error('SMTP error'))
    mockCreate.mockResolvedValue({ id: 'cuid-999', ...validBody })
    const req = makePostRequest(validBody)
    const res = await POST(req)
    expect(res.status).toBe(201)
  })
})

describe('GET /api/leads', () => {
  const createdAt = new Date().toISOString()
  const mockLeads = [
    { id: '1', name: 'Ana', email: 'ana@ex.com', phone: '600', insuranceType: 'vida', createdAt },
  ]

  beforeEach(() => {
    process.env.ADMIN_PASSWORD = 'supersecret'
  })

  afterEach(() => {
    delete process.env.ADMIN_PASSWORD
  })

  it('returns 401 when no authorization header is provided', async () => {
    const req = makeGetRequest()
    const res = await GET(req)
    expect(res.status).toBe(401)
    const json = await res.json()
    expect(json.error).toBe('No autorizado')
  })

  it('returns 401 when the bearer token is wrong', async () => {
    const req = makeGetRequest('Bearer wrongpassword')
    const res = await GET(req)
    expect(res.status).toBe(401)
  })

  it('returns 401 when ADMIN_PASSWORD env variable is not set', async () => {
    delete process.env.ADMIN_PASSWORD
    const req = makeGetRequest('Bearer supersecret')
    const res = await GET(req)
    expect(res.status).toBe(401)
  })

  it('returns 200 with leads when authorization is correct', async () => {
    mockFindMany.mockResolvedValue(mockLeads)
    const req = makeGetRequest('Bearer supersecret')
    const res = await GET(req)
    expect(res.status).toBe(200)
    const json = await res.json()
    expect(json.leads).toEqual(mockLeads)
  })

  it('queries leads ordered by createdAt descending', async () => {
    mockFindMany.mockResolvedValue([])
    const req = makeGetRequest('Bearer supersecret')
    await GET(req)
    expect(mockFindMany).toHaveBeenCalledWith({ orderBy: { createdAt: 'desc' } })
  })

  it('returns 401 when authorization header uses wrong scheme (not Bearer)', async () => {
    const req = makeGetRequest('Basic supersecret')
    const res = await GET(req)
    expect(res.status).toBe(401)
  })
})
