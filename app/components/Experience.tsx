'use client'

import { motion } from 'framer-motion'
import { portfolioData } from '@/data/portfolio'

const typeStyles: Record<string, string> = {
  'full-time': 'bg-accent/10 text-accent border-accent/20',
  'intern': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  'volunteer': 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  'capstone': 'bg-purple-500/10 text-purple-400 border-purple-500/20',
}

export function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-[1200px] mx-auto px-8 max-md:px-5">
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-accent mb-4">03 / Experience</p>
        <h2 className="font-display text-[clamp(2rem,4vw,2.8rem)] leading-[1.15] tracking-[-0.02em] text-white font-normal mb-14">
          Where I&apos;ve <em className="italic text-accent">worked</em>
        </h2>
        <div className="relative">
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-white/[0.04]" />
          <div className="space-y-0">
            {portfolioData.experience.map((exp, i) => (
              <motion.div
                key={exp.id}
                className="relative pl-12 py-5 group cursor-default"
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.06 }}
              >
                <div className={bsolute left-[8px] top-6 w-[15px] h-[15px] rounded-full border-2 transition-all duration-300 } />
                <div className="flex items-start gap-5 max-md:flex-col max-md:gap-2">
                  <div className="flex items-center gap-3 min-w-[180px] max-md:min-w-0">
                    {exp.logo && <img src={exp.logo} alt={exp.company} className="w-8 h-8 rounded-lg bg-white p-1 object-contain flex-shrink-0" />}
                    <div>
                      <h3 className="text-sm font-semibold text-white leading-snug">{exp.company}</h3>
                      <p className="text-xs text-zinc-500 font-mono mt-0.5">{exp.period}</p>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1.5 flex-wrap">
                      <p className="text-sm text-zinc-300 font-medium">{exp.role}</p>
                      <span className={	ext-[0.6rem] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full border }>{exp.type}</span>
                    </div>
                    <p className="text-sm text-zinc-400 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
