'use client'

import { motion } from 'framer-motion'
import { portfolioData } from '@/data/portfolio'
import { SectionHeading } from './ui/SectionHeading'
import { Reveal } from './ui/Reveal'

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-bg-alt">
      <div className="max-w-[1200px] mx-auto px-10 max-md:px-5">
        <SectionHeading number="02" title="Technical <em>toolkit</em>" accent="toolkit" />
        <div className="grid grid-cols-2 gap-9 max-md:grid-cols-1">
          {portfolioData.skills.map((category, catIndex) => (
            <Reveal key={category.label} delay={catIndex}>
              <div>
                <div className="font-mono text-[0.68rem] tracking-[0.12em] uppercase text-text-muted mb-3.5">{category.label}</div>
                <div className="flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      className="flex items-center gap-2.5 bg-surface border border-border px-4 py-2.5 rounded-full text-[0.87rem] font-medium text-text-dim cursor-default"
                      whileHover={{ borderColor: 'rgba(184,245,82,0.28)', color: '#efefef', backgroundColor: 'rgba(184,245,82,0.1)', y: -2 }}
                      transition={{ duration: 0.25 }}
                    >
                      {skill.icon && <i className={`${skill.icon} text-[1.05rem] text-accent`} />}
                      {skill.name}
                    </motion.div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}