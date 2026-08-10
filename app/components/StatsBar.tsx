'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { portfolioData } from '@/data/portfolio'

function AnimatedStat({ value, label, index }: { value: string; label: string; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  const [displayValue, setDisplayValue] = useState('0')
  const numericPart = parseInt(value.replace(/[^0-9]/g, ''))
  const suffix = value.replace(/[0-9]/g, '').replace('+', '') + (value.includes('+') ? '+' : '')

  useEffect(() => {
    if (!isInView) return
    let count = 0
    const increment = Math.ceil(numericPart / 30)
    const timer = setInterval(() => {
      count = Math.min(count + increment, numericPart)
      setDisplayValue(String(count))
      if (count >= numericPart) clearInterval(timer)
    }, 40)
    return () => clearInterval(timer)
  }, [isInView, numericPart])

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center gap-1 px-12 max-md:px-5 max-md:py-3"
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.5 }}
    >
      <span className="font-display text-[2.2rem] leading-none text-accent font-normal">{displayValue}{suffix}</span>
      <span className="font-mono text-[0.72rem] text-text-dim tracking-[0.07em] uppercase">{label}</span>
    </motion.div>
  )
}

export function StatsBar() {
  return (
    <div className="bg-surface border-t border-b border-border flex items-center justify-center py-7 px-10 flex-wrap max-md:py-5">
      {portfolioData.stats.map((stat, index) => (
        <div key={stat.label} className="flex items-center">
          <AnimatedStat value={stat.value} label={stat.label} index={index} />
          {index < portfolioData.stats.length - 1 && (
            <div className="w-px h-9 bg-border max-md:hidden" />
          )}
        </div>
      ))}
    </div>
  )
}