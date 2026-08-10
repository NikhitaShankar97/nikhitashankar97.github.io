'use client'

import { motion } from 'framer-motion'
import { portfolioData } from '@/data/portfolio'

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-[#0c0c10]">
      <div className="max-w-[1200px] mx-auto px-8 max-md:px-5">
        <p className="font-mono text-xs tracking-[0.18em] uppercase text-accent mb-5">02 / Skills</p>
        <h2 className="font-display text-[clamp(2rem,4vw,3rem)] leading-[1.1] tracking-[-0.02em] text-white font-normal mb-14">
          Technical <em className="italic text-accent">toolkit</em>
        </h2>
        <div className="grid grid-cols-2 gap-12 max-md:grid-cols-1">
          {portfolioData.skills.map((cat, ci) => (
            <motion.div key={cat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: ci * 0.1 }}>
              <h3 className="font-mono text-[0.65rem] tracking-[0.15em] uppercase text-zinc-500 mb-4">{cat.label}</h3>
              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map(s => (
                  <motion.span key={s.name} className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/[0.02] border border-white/[0.05] rounded-full text-sm text-zinc-400 cursor-default transition-all duration-300" whileHover={{ borderColor: 'rgba(184,245,82,0.35)', color: '#fff', backgroundColor: 'rgba(184,245,82,0.06)', y: -2 }}>
                    {s.icon && <i className={`${s.icon} text-base text-accent`} />}
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