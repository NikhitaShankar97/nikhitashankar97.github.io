'use client'

import { motion } from 'framer-motion'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  variant?: 'primary' | 'ghost'
  className?: string
  external?: boolean
  download?: boolean
  onClick?: () => void
}

export function Button({
  children,
  href,
  variant = 'primary',
  className = '',
  external = false,
  download = false,
  onClick,
}: ButtonProps) {
  const baseClasses =
    variant === 'primary'
      ? 'inline-flex items-center gap-2 bg-accent text-bg font-semibold text-[0.88rem] px-6 py-3.5 rounded-[10px] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(184,245,82,0.32)] hover:bg-[#caff64]'
      : 'inline-flex items-center gap-2 bg-transparent text-text font-medium text-[0.88rem] px-6 py-3.5 rounded-[10px] border border-border transition-all hover:border-accent hover:text-accent hover:-translate-y-0.5'

  const combinedClasses = `${baseClasses} ${className}`

  if (href) {
    return (
      <motion.a
        href={href}
        className={combinedClasses}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        download={download}
        whileHover={{ y: -2 }}
        whileTap={{ y: 0 }}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      className={combinedClasses}
      onClick={onClick}
      whileHover={{ y: -2 }}
      whileTap={{ y: 0 }}
    >
      {children}
    </motion.button>
  )
}