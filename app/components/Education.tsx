'use client'

import { motion } from 'framer-motion'
import { portfolioData } from '@/data/portfolio'
import { SectionHeading } from './ui/SectionHeading'
import { Reveal } from './ui/Reveal'

export function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="max-w-[1200px] mx-auto px-10 max-md:px-5">
        <SectionHeading number="03" title="Academic <em>background</em>" accent="background" />
        <div className="grid grid-cols-2 gap-5 max-md:grid-cols-1">
          {portfolioData.education.map((edu, index) => (
            <Reveal key={edu.id} delay={index}>
              <motion.div
                className="bg-surface border border-border rounded-card p-7 flex items-start gap-5 transition-all duration-300 hover:border-border-hover"
                whileHover={{ y: -3 }}
              >
                <div className="w-14 h-14 flex-shrink-0 bg-white rounded-[10px] flex items-center justify-center overflow-hidden p-1.5">
                  <img src={edu.logo} alt={edu.school} className="w-full h-full object-contain" />
                </div>
                <div>
                  <p className="font-mono text-[0.7rem] text-accent tracking-[0.05em] mb-1.5">{edu.years}</p>
                  <h3 className="text-[0.95rem] font-semibold mb-1">{edu.school}</h3>
                  <p className="text-[0.85rem] text-text-dim mb-1">{edu.degree}</p>
                  {edu.note && <p className="font-mono text-[0.75rem] text-text-muted">{edu.note}</p>}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}