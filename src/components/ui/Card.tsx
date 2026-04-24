import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  id?: string
}

export function Card({ children, className = '', hover = false, id }: CardProps) {
  return (
    <div
      id={id}
      className={`soft-card rounded-2xl p-6 ${hover ? 'hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300' : ''} ${className}`}
    >
      {children}
    </div>
  )
}
