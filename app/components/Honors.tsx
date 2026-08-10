'use client'

import { motion } from 'framer-motion'
import { portfolioData } from '@/data/portfolio'
import { SectionHeading } from './ui/SectionHeading'
import { Reveal } from './ui/Reveal'

const cardVariants: Record<string, string> = {
  default: 'bg-surface border-border',
  winner: 'border-[rgba(255,215,0,0.2)] bg-gradient-to-br from-[#151200] to-[#141414] hover:border-[rgba(255,215,0,0.45)] hover:shadow-[0_0_28px_rgba(255,215,0,0.08)]',
  silver: 'border-[rgba(192,192,192,0.2)] bg-gradient-to-br from-[#131313] to-[#141414]',
}

const tagVariants: Record<string, string> = {
  default: 'bg-accent-dim border-accent-mid text-accent',
  winner: 'bg-gradient-to-br from-[rgba(255,215,0,0.18)] to-[rgba(255,180,0,0.1)] text-[#ffd700] border-[rgba(255,215,0,0.4)]',
  silver: 'bg-gradient-to-br from-[rgba(192,192,192,0.18)] to-[rgba(160,160,160,0.1)] text-[#c0c0c0] border-[rgba(192,192,192,0.4)]',
}

export function Honors() {
  return (
    <section id="honors" className="section-padding bg-bg-alt">
      <div className="max-w-[1200px] mx-auto px-10 max-md:px-5">
        <SectionHeading number="04" title="Recognition & <em>achievements</em>" accent="achievements" />
        <div className="grid grid-cols-[repeat(auto-fill,minmax(290px,1fr))] gap-4">
          {portfolioData.honors.map((honor, index) => (
            <Reveal key={honor.id} delay={index}>
              <motion.div
                className={`border rounded-card p-7 flex flex-col transition-all duration-300 hover:-translate-y-1 ${cardVariants[honor.cardVariant || 'default']}`}
                whileHover={{ y: -4 }}
              >
                <div className="flex items-center justify-between mb-3.5">
                  <div className="text-2xl">{honor.icon}</div>
                  <span className={`font-mono text-[0.65rem] uppercase tracking-[0.1em] px-2.5 py-1 rounded-full border ${tagVariants[honor.tagVariant || 'default']}`}>
                    {honor.tag}
                  </span>
                </div>
                <h3 className="text-[0.95rem] font-semibold mb-2.5 text-text">{honor.title}</h3>
                <p className="text-[0.83rem] text-text-dim leading-[1.7] mb-4 flex-1">{honor.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {honor.links.map((link, i) => (
                    <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="inline-block bg-surface-2 border border-border text-text-dim font-mono text-[0.75rem] px-3 py-1.5 rounded-full hover:border-accent-mid hover:text-accent hover:bg-accent-dim transition-all">
                      {link.label}
                    </a>
                  ))}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}