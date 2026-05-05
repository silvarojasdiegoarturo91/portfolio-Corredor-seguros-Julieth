'use client'

import { useState } from 'react'
import Image from 'next/image'

interface PartnerLogoProps {
  name: string
  domain: string
  initials: string
  color: string
  textColor: string
}

export function PartnerLogo({ name, domain, initials, color, textColor }: PartnerLogoProps) {
  const [imgError, setImgError] = useState(false)
  const logoUrl = `https://logo.clearbit.com/${domain}`

  if (imgError) {
    return (
      <div
        className="h-14 w-28 rounded-lg flex items-center justify-center font-bold text-lg tracking-wide"
        style={{ backgroundColor: color, color: textColor }}
        aria-label={name}
      >
        {initials}
      </div>
    )
  }

  return (
    <div className="h-14 w-28 relative flex items-center justify-center">
      <Image
        src={logoUrl}
        alt={`Logo de ${name}`}
        width={112}
        height={56}
        className="object-contain max-h-14"
        onError={() => setImgError(true)}
        unoptimized
      />
    </div>
  )
}
