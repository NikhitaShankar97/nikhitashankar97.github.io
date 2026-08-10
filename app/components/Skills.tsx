'use client'

import { motion } from 'framer-motion'
import { portfolioData } from '@/data/portfolio'

const categoryColors: Record<string, string> = {
  'Data Engineering': 'from-emerald-500/20 to-emerald-500/5 border-emerald-500/20',
  'BI & Analytics': 'from-blue-500/20 to-blue-500/5 border-blue-500/20',
  'Languages & Core': 'from-amber-500/20 to-amber-500/5 border-amber-500/20',
  'Cloud & Infra': 'from-cyan-500/20 to-cyan-500/5 border-cyan-500/20',
  'AI, ML & Stats': 'from-purple-500/20 to-purple-500/5 border-purple-500/20',
}

const categoryDotColors: Record<string, string> = {
  'Data Engineering': 'bg-emerald-400',
  'BI & Analytics': 'bg-blue-400',
  'Languages & Core': 'bg-amber-400',
  'Cloud & Infra': 'bg-cyan-400',
  'AI, ML & Stats': 'bg-purple-400',
}

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-[#08080c]">
      <div className="max-w-[1280px] mx-auto px-8 max-md:px-5">
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-accent mb-4">02 / Skills</p>
        <h2 className="font-display text-[clamp(2rem,4vw,2.8rem)] leading-[1.15] tracking-[-0.02em] text-white font-normal mb-14">
          Technical <em className="italic text-accent">toolkit</em>
        </h2>

        <div className="space-y-14">
          {portfolioData.skills.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: ci * 0.1, duration: 0.6 }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-2.5 h-2.5 rounded-full ${categoryDotColors[cat.label] || 'bg-accent'} animate-pulse-glow`} />
                <h3 className="text-sm font-semibold text-white tracking-[0.03em]">{cat.label}</h3>
                <span className="text-xs font-mono text-zinc-600 ml-1">{cat.skills.length} tools</span>
              </div>

              {/* Skills in this category */}
              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((s, si) => {
                  const hasIcon = s.icon && !s.icon.startsWith('fas fa-') ? true : s.icon && s.icon.startsWith('fas fa-') ? 'fontawesome' : false
                  const isDevicon = s.icon && !s.icon.startsWith('fas fa-')
                  
                  return (
                    <motion.span
                      key={s.name}
                      className={`group inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm font-medium cursor-default transition-all duration-300 bg-white/[0.02] border border-white/[0.05] text-zinc-400 hover:text-white hover:border-white/[0.15] hover:bg-white/[0.04] hover:-translate-y-0.5`}
                      whileHover={{
                        y: -3,
                        boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
                      }}
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: ci * 0.1 + si * 0.04 }}
                    >
                      {/* Only show icon if it exists */}
                      {s.icon && (
                        isDevicon ? (
                          <i className={`${s.icon} text-base text-zinc-500 group-hover:text-accent transition-colors`} />
                        ) : (
                          <i className={`${s.icon} text-sm text-zinc-500 group-hover:text-accent transition-colors w-4 text-center`} />
                        )
                      )}
                      <span>{s.name}</span>
                    </motion.span>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}