import Image from 'next/image'

interface PartnerLogoProps {
  name: string
  logoFile: string
}

export function PartnerLogo({ name, logoFile }: PartnerLogoProps) {
  return (
    <div className="h-14 w-36 relative flex items-center justify-center">
      <Image
        src={`/images/insurers/${logoFile}`}
        alt={`Logo de ${name}`}
        width={144}
        height={56}
        className="object-contain max-h-14 w-full"
      />
    </div>
  )
}
