'use client'

import { motion } from 'framer-motion'
import { portfolioData } from '@/data/portfolio'

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-[#08080c]">
      <div className="max-w-[1280px] mx-auto px-8 max-md:px-5">
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-accent mb-4">02 / Skills</p>
        <h2 className="font-display text-[clamp(2rem,4vw,2.8rem)] leading-[1.15] tracking-[-0.02em] text-white font-normal mb-10">
          Technical <em className="italic text-accent">toolkit</em>
        </h2>

        <div className="grid grid-cols-2 gap-x-12 gap-y-8 max-md:grid-cols-1">
          {portfolioData.skills.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ delay: ci * 0.06, duration: 0.4 }}
            >
              <h3 className="font-mono text-[0.65rem] tracking-[0.12em] uppercase text-zinc-500 mb-3">{cat.label}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s, si) => (
                  <motion.span
                    key={s.name}
                    className="inline-flex items-center gap-2 px-3.5 py-2 bg-white/[0.02] border border-white/[0.04] rounded-lg text-sm text-zinc-400 cursor-default transition-all duration-200 hover:border-accent/30 hover:text-white hover:bg-accent/5 hover:-translate-y-0.5"
                    whileHover={{ y: -2, borderColor: 'rgba(184,245,82,.35)', color: '#fff' }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: ci * 0.06 + si * 0.02 }}
                  >
                    {s.icon && <i className={`${s.icon} text-sm text-accent/70`} />}
                    {s.name}
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