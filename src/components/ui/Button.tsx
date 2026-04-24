import { ButtonHTMLAttributes, ReactNode } from 'react'
import Link from 'next/link'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'white' | 'ghost' | 'glass'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  children: ReactNode
}

export function Button({
  variant = 'primary',
  size = 'md',
  href,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center font-semibold rounded-2xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent'

  const variants = {
    primary:
      'bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-600 text-white btn-glow hover:-translate-y-0.5 focus:ring-blue-400',
    secondary: 'bg-slate-900 hover:bg-slate-800 text-white shadow-lg hover:-translate-y-0.5 focus:ring-slate-500',
    outline:
      'border border-slate-300 text-slate-800 hover:border-cyan-500 hover:text-cyan-700 hover:bg-cyan-50/70 focus:ring-cyan-300',
    white: 'bg-white text-cyan-800 hover:bg-slate-50 shadow-sm hover:shadow-md focus:ring-cyan-300',
    ghost:
      'border border-white/40 text-white bg-white/5 hover:bg-white/16 hover:border-white/70 focus:ring-white/50',
    glass:
      'glass-card text-white border border-white/35 hover:bg-white/20 focus:ring-white/55',
  }

  const sizes = {
    sm: 'px-4 py-2.5 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-base md:text-lg',
  }

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
