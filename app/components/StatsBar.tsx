'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { portfolioData } from '@/data/portfolio'

function AnimatedStat({ value, label, index }: { value: string; label: string; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [displayValue, setDisplayValue] = useState('0')
  const num = parseInt(value.replace(/[^0-9]/g, ''))
  const suffix = value.replace(/[0-9]/g, '').replace('+', '') + (value.includes('+') ? '+' : '')

  useEffect(() => {
    if (!isInView) return
    let c = 0; const inc = Math.ceil(num / 25)
    const t = setInterval(() => { c = Math.min(c + inc, num); setDisplayValue(String(c)); if (c >= num) clearInterval(t) }, 35)
    return () => clearInterval(t)
  }, [isInView, num])

  return (
    <motion.div ref={ref} className="flex flex-col items-center gap-1.5 px-8 max-md:px-4 max-md:py-2" initial={{ opacity: 0, y: 8 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: index * 0.1 }}>
      <span className="font-mono text-[2.2rem] font-bold leading-none text-accent tabular-nums">{displayValue}{suffix}</span>
      <span className="text-[0.6rem] font-mono tracking-[0.12em] uppercase text-zinc-500">{label}</span>
    </motion.div>
  )
}

export function StatsBar() {
  return (
    <div className="relative z-20 -mt-8 mx-6 max-w-[800px] xl:mx-auto glass-card rounded-2xl flex items-center justify-center py-6 px-2 flex-wrap shadow-xl shadow-black/40">
      {portfolioData.stats.map((s, i) => (
        <div key={s.label} className="flex items-center">
          <AnimatedStat value={s.value} label={s.label} index={i} />
          {i < portfolioData.stats.length - 1 && <div className="w-px h-8 bg-white/[0.04] max-md:hidden" />}
        </div>
      ))}
    </div>
  )
}
