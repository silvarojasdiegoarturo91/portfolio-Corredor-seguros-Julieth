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
          {/* Monogram built with paths because satori/next-og does not support <text> nodes */}
          <path
            d="M14 13.5h4v9.5c0 3.1-2.3 5-5.3 5H11v-3h1.5c1.6 0 2.5-.8 2.5-2.3v-9.2z"
            fill="white"
          />
          <path
            d="M27.8 16.2c-.6-1.7-2.3-2.7-4.5-2.7-2.8 0-4.8 1.5-4.8 3.8 0 2 1.3 3.1 3.9 3.7l1.5.3c1.4.3 2 .7 2 1.5 0 .9-.9 1.5-2.3 1.5-1.6 0-2.7-.7-3.1-2l-3.1.9c.8 2.6 3 4 6.2 4 3.4 0 5.7-1.7 5.7-4.2 0-2-1.1-3.2-3.8-3.8l-1.8-.4c-1.3-.3-1.8-.7-1.8-1.5 0-.8.8-1.4 2-1.4 1.2 0 2 .6 2.4 1.6l2.8-1.3z"
            fill="white"
          />
        </svg>
      </div>
    ),
    { ...size },
  )
}
