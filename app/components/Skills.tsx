'use client'

import { motion } from 'framer-motion'
import { portfolioData } from '@/data/portfolio'

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-[#08080c]">
      <div className="max-w-[1280px] mx-auto px-8 max-md:px-5">
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-accent mb-4">02 / Skills</p>
        <h2 className="font-display text-[clamp(2rem,4vw,3rem)] leading-[1.1] tracking-[-0.02em] text-white font-normal mb-16">
          Technical <em className="italic text-accent">toolkit</em>
        </h2>
        <div className="grid grid-cols-3 gap-10 max-lg:grid-cols-2 max-md:grid-cols-1">
          {portfolioData.skills.map((cat, ci) => (
            <motion.div 
              key={cat.label} 
              initial={{ opacity: 0, y: 24 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true, margin: '-60px' }} 
              transition={{ delay: ci * 0.08, duration: 0.6 }}
            >
              <h3 className="font-mono text-[0.65rem] tracking-[0.16em] uppercase text-zinc-500 mb-5">{cat.label}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(s => (
                  <motion.span 
                    key={s.name} 
                    className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/[0.02] border border-white/[0.04] rounded-xl text-sm text-zinc-400 cursor-default transition-all duration-300 hover:border-accent/30 hover:text-white hover:bg-accent/5 hover:-translate-y-0.5"
                    whileHover={{ y: -2, borderColor: 'rgba(184,245,82,.35)', color: '#fff', backgroundColor: 'rgba(184,245,82,.06)' }}
                  >
                    <i className={${s.icon} text-sm text-accent/80} />
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
