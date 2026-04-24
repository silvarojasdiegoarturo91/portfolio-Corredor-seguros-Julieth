import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  id?: string
  glass?: boolean
}

export function Card({ children, className = '', hover = false, id, glass = false }: CardProps) {
  return (
    <div
      id={id}
      className={`${glass ? 'glass-card' : 'soft-card'} rounded-2xl p-6 ${hover ? 'hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300' : ''} ${className}`}
    >
      {children}
    </div>
  )
}
