interface JuliethLogoProps {
  size?: number
  className?: string
}

/**
 * SVG logo for "Julieth Seguros".
 * A shield shape with a gradient fill (teal → blue) and the "JS" monogram,
 * representing an insurance brokerage.
 */
export function JuliethLogo({ size = 40, className = '' }: JuliethLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Julieth Seguros logo"
      role="img"
    >
      <defs>
        <linearGradient id="js-shield-grad" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#14b8a6" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
      </defs>

      {/* Shield shape */}
      <path
        d="M20 3L5 9v10c0 9 6.5 17 15 19 8.5-2 15-10 15-19V9L20 3z"
        fill="url(#js-shield-grad)"
      />

      {/* Inner shield highlight */}
      <path
        d="M20 7L8 12v8c0 7 4.8 13.2 12 15 7.2-1.8 12-8 12-15v-8L20 7z"
        fill="white"
        fillOpacity="0.12"
      />

      {/* "JS" monogram */}
      <text
        x="20"
        y="25"
        textAnchor="middle"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="800"
        fontSize="13"
        fill="white"
        letterSpacing="-0.5"
      >
        JS
      </text>
    </svg>
  )
}
