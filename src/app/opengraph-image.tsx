import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e3a5f 50%, #0e7490 100%)',
          fontFamily: 'sans-serif',
          padding: '60px',
        }}
      >
        {/* Shield icon */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '32px',
          }}
        >
          <svg width="80" height="80" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="g" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#14b8a6" />
                <stop offset="100%" stopColor="#2563eb" />
              </linearGradient>
            </defs>
            <path d="M20 3L5 9v10c0 9 6.5 17 15 19 8.5-2 15-10 15-19V9L20 3z" fill="url(#g)" />
          </svg>
        </div>

        {/* Brand name */}
        <div
          style={{
            fontSize: 56,
            fontWeight: 800,
            color: '#ffffff',
            textAlign: 'center',
            lineHeight: 1.1,
            marginBottom: '16px',
          }}
        >
          Julieth Pérez Seguros
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 28,
            fontWeight: 400,
            color: '#67e8f9',
            textAlign: 'center',
            marginBottom: '40px',
          }}
        >
          Corredora de Seguros Certificada en España
        </div>

        {/* Services */}
        <div
          style={{
            display: 'flex',
            gap: '24px',
          }}
        >
          {['❤️ Vida', '🏥 Salud', '🐾 Mascotas', '🏠 Hogar'].map((svc) => (
            <div
              key={svc}
              style={{
                background: 'rgba(255,255,255,0.12)',
                borderRadius: '12px',
                padding: '10px 22px',
                fontSize: 20,
                color: '#e2e8f0',
                fontWeight: 600,
              }}
            >
              {svc}
            </div>
          ))}
        </div>

        {/* Domain */}
        <div
          style={{
            marginTop: '40px',
            fontSize: 22,
            color: '#94a3b8',
          }}
        >
          juliethperezseguros.com
        </div>
      </div>
    ),
    { ...size },
  )
}
