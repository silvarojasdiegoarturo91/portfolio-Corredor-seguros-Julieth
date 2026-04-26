import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

/**
 * Next.js App Router favicon generator.
 * Renders a 32×32 insurance-shield icon for Julieth Seguros.
 */
export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'transparent',
        }}
      >
        {/* Shield via clipped gradient background */}
        <svg
          width="32"
          height="32"
          viewBox="0 0 40 40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="g" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#14b8a6" />
              <stop offset="100%" stopColor="#2563eb" />
            </linearGradient>
          </defs>
          <path
            d="M20 3L5 9v10c0 9 6.5 17 15 19 8.5-2 15-10 15-19V9L20 3z"
            fill="url(#g)"
          />
          <path
            d="M20 7L8 12v8c0 7 4.8 13.2 12 15 7.2-1.8 12-8 12-15v-8L20 7z"
            fill="white"
            fillOpacity="0.12"
          />
          <text
            x="20"
            y="25"
            textAnchor="middle"
            fontFamily="system-ui, sans-serif"
            fontWeight="800"
            fontSize="13"
            fill="white"
            letterSpacing="-0.5"
          >
            JS
          </text>
        </svg>
      </div>
    ),
    { ...size },
  )
}
