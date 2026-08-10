'use client'

import { motion } from 'framer-motion'
import { portfolioData } from '@/data/portfolio'
import { SectionHeading } from './ui/SectionHeading'
import { Reveal } from './ui/Reveal'

const typeStyles: Record<string, string> = {
  'full-time': 'bg-accent-dim text-accent border-accent-mid',
  'intern': 'bg-[rgba(100,180,255,0.1)] text-[#64b4ff] border-[rgba(100,180,255,0.3)]',
  'volunteer': 'bg-[rgba(100,180,255,0.1)] text-[#64b4ff] border-[rgba(100,180,255,0.3)]',
  'capstone': 'bg-[rgba(200,130,255,0.1)] text-[#c882ff] border-[rgba(200,130,255,0.3)]',
}

const typeLabels: Record<string, string> = {
  'full-time': 'Full-time',
  'intern': 'Intern',
  'volunteer': 'Volunteer',
  'capstone': 'Capstone',
}

export function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="max-w-[1200px] mx-auto px-10 max-md:px-5">
        <SectionHeading number="05" title="Where I've <em>worked</em>" accent="worked" />
        <div className="flex flex-col">
          {portfolioData.experience.map((exp, index) => (
            <Reveal key={exp.id} delay={index}>
              <motion.div
                className={`flex gap-0 py-7 border-b border-border transition-all duration-200 hover:pl-2 hover:bg-[rgba(255,255,255,0.018)] ${index === 0 ? 'border-t border-border' : ''}`}
                whileHover={{ paddingLeft: 8 }}
              >
                <div className="flex items-start gap-4 min-w-[190px] pr-8 relative max-md:min-w-0 max-md:flex-col max-md:gap-1.5">
                  <div className="w-2 h-2 rounded-full bg-accent mt-1.5 flex-shrink-0 shadow-[0_0_10px_rgba(184,245,82,0.4)]" />
                  <div className="flex flex-col gap-1.5">
                    <span className="font-mono text-[0.72rem] text-text-muted tracking-[0.04em] whitespace-nowrap">{exp.period}</span>
                    <span className={`inline-block font-mono text-[0.62rem] uppercase tracking-[0.08em] px-2 py-1 rounded-full w-fit border ${typeStyles[exp.type]}`}>
                      {typeLabels[exp.type]}
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3.5 mb-2.5">
                    {exp.logo && (
                      <img src={exp.logo} alt={exp.company} className="w-10 h-10 object-contain rounded-lg bg-white p-1 flex-shrink-0" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }} />
                    )}
                    <div>
                      <h3 className="text-[0.97rem] font-semibold text-text mb-0.5">{exp.company}</h3>
                      <p className="text-[0.82rem] text-text-dim">{exp.role}</p>
                    </div>
                  </div>
                  <p className="text-[0.84rem] text-text-muted leading-[1.7]">{exp.description}</p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}