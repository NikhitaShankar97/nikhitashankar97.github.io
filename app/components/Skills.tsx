'use client'

import { motion } from 'framer-motion'
import { portfolioData } from '@/data/portfolio'

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-[#08080c]">
      <div className="max-w-[1280px] mx-auto px-8 max-md:px-5">
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-accent mb-4">02 / Skills</p>
        <h2 className="font-display text-[clamp(2rem,4vw,2.8rem)] leading-[1.15] tracking-[-0.02em] text-white font-normal mb-14">
          Technical <em className="italic text-accent">toolkit</em>
        </h2>

        <div className="space-y-12">
          {portfolioData.skills.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: ci * 0.08, duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                {cat.label === 'Primary Stack' && (
                  <span className="text-[0.55rem] font-mono uppercase tracking-[0.15em] bg-accent/15 text-accent border border-accent/30 px-2 py-0.5 rounded-full">Primary</span>
                )}
                <h3 className="text-sm font-semibold text-white tracking-[0.03em]">{cat.label}</h3>
                <span className="text-xs font-mono text-zinc-600">{cat.skills.length} tools</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s, si) => (
                  <motion.span
                    key={s.name}
                    className={`group inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm font-medium cursor-default transition-all duration-300 bg-white/[0.02] border text-zinc-400 hover:text-white hover:-translate-y-0.5 ${cat.label === 'Primary Stack' ? 'border-accent/20 hover:border-accent/50 hover:bg-accent/8' : 'border-white/[0.05] hover:border-white/[0.15] hover:bg-white/[0.04]'}`}
                    whileHover={{ y: -3, boxShadow: cat.label === 'Primary Stack' ? '0 8px 30px rgba(184,245,82,0.1)' : '0 8px 30px rgba(0,0,0,0.3)' }}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: ci * 0.08 + si * 0.03 }}
                  >
                    {s.icon && <i className={`${s.icon} text-base ${cat.label === 'Primary Stack' ? 'text-accent' : 'text-zinc-500 group-hover:text-accent'} transition-colors`} />}
                    <span>{s.name}</span>
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}