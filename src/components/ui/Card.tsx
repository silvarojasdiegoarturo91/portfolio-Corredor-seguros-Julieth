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
      className={`bg-white rounded-xl shadow-md p-6 ${hover ? 'hover:shadow-xl hover:-translate-y-1 transition-all duration-300' : ''} ${className}`}
    >
      {children}
    </div>
  )
}
