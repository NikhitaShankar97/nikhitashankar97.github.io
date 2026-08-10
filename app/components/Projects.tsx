'use client'

import { motion } from 'framer-motion'
import { portfolioData } from '@/data/portfolio'
import { SectionHeading } from './ui/SectionHeading'
import { Reveal } from './ui/Reveal'

const badgeVariants: Record<string, string> = {
  default: 'bg-[rgba(200,130,255,0.1)] text-[#c882ff] border border-[rgba(200,130,255,0.25)]',
  hackathon: 'bg-[rgba(255,196,60,0.12)] text-[#ffc43c] border border-[rgba(255,196,60,0.3)]',
  winner: 'bg-gradient-to-br from-[rgba(255,215,0,0.2)] to-[rgba(255,180,0,0.1)] text-[#ffd700] border border-[rgba(255,215,0,0.45)] shadow-[0_0_12px_rgba(255,215,0,0.15)] animate-winner-pulse',
  silver: 'bg-[rgba(192,192,192,0.15)] text-[#c0c0c0] border border-[rgba(192,192,192,0.35)]',
  flagship: 'bg-gradient-to-br from-[rgba(184,245,82,0.2)] to-[rgba(184,245,82,0.08)] text-accent border border-[rgba(184,245,82,0.45)] shadow-[0_0_12px_rgba(184,245,82,0.12)]',
}

export function Projects() {
  const { featuredProjects, otherProjects } = portfolioData

  return (
    <section id="projects" className="section-padding bg-bg-alt">
      <div className="max-w-[1200px] mx-auto px-10 max-md:px-5">
        <SectionHeading number="06" title="Selected <em>work</em>" accent="work" />

        <div className="grid grid-cols-2 gap-4 mb-10 max-lg:grid-cols-1">
          {featuredProjects.map((project, index) => {
            const isHackathon = project.featuredStyle === 'hackathon'
            const isSilver = project.featuredStyle === 'silver'
            const isFlagship = project.featuredStyle === 'flagship'

            return (
              <Reveal key={project.id} delay={index}>
                <motion.div
                  className={`relative bg-surface border rounded-card p-7 flex flex-col gap-3 overflow-hidden transition-all duration-300 group hover:border-border-hover ${
                    isHackathon ? 'col-span-full border-accent-mid bg-gradient-to-br from-[#0d1a0a] via-[#111611] to-[#0f1410]' : ''
                  } ${isSilver ? 'border-[rgba(192,192,192,0.2)] bg-gradient-to-br from-[#131313] to-[#141414]' : ''} ${
                    isFlagship ? 'col-span-full' : ''
                  }`}
                  whileHover={{ y: -4 }}
                >
                  <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    isHackathon ? 'from-accent via-[#52f5a8] to-accent bg-[length:200%_100%] group-hover:animate-shimmer' : ''
                  }`} />

                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[0.65rem] text-text-muted tracking-[0.1em]">{String(index + 1).padStart(2, '0')}</span>
                    {project.badges && (
                      <div className="flex gap-2 items-center flex-wrap">
                        {project.badges.map((badge, i) => (
                          <span key={i} className={`font-mono text-[0.68rem] uppercase tracking-[0.08em] px-3 py-1 rounded-full ${badgeVariants[badge.variant]}`}>{badge.text}</span>
                        ))}
                      </div>
                    )}
                  </div>

                  {project.wordmark && (
                    <div className={`font-mono text-[2.4rem] font-bold tracking-[-0.04em] leading-none mb-0.5 max-md:text-[1.8rem] ${isHackathon ? 'text-accent' : isSilver ? 'text-silver' : 'text-accent'}`}>
                      {project.wordmark}
                      {project.wordmarkAccent && <span className="text-white opacity-55">{project.wordmarkAccent}</span>}
                    </div>
                  )}

                  <h3 className="text-[1.08rem] font-semibold leading-tight text-text">{project.title}</h3>
                  <p className="text-[0.86rem] text-text-dim leading-relaxed flex-1">{project.description}</p>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="font-mono text-[0.67rem] bg-surface-2 border border-border px-2 py-0.5 rounded-full text-text-muted">{tag}</span>
                    ))}
                  </div>

                  {project.links.length > 0 && (
                    <div className="flex gap-2.5 items-center flex-wrap mt-1">
                      {project.links.map((link, i) => (
                        <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className={`font-mono text-[0.75rem] tracking-[0.06em] px-4 py-1.5 rounded-full border transition-all duration-200 ${
                          link.primary ? 'border-accent-mid text-accent bg-accent-dim hover:bg-accent-dim' : 'border-border text-text-dim hover:border-border-hover hover:text-accent hover:bg-accent-dim'
                        }`}>{link.label}</a>
                      ))}
                    </div>
                  )}

                  {project.isExternalLink && (
                    <span className="text-base text-text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all self-end">↗</span>
                  )}
                </motion.div>
              </Reveal>
            )
          })}
        </div>

        <div className="font-mono text-[0.68rem] tracking-[0.15em] uppercase text-text-muted mb-4">More Projects</div>
        <div className="grid grid-cols-3 gap-3 max-lg:grid-cols-2 max-md:grid-cols-1">
          {otherProjects.map((project, index) => (
            <Reveal key={project.id} delay={index}>
              <motion.div
                className="relative bg-surface border border-border rounded-[10px] p-5 flex flex-col gap-2 overflow-hidden transition-all duration-300 hover:border-border-hover group"
                whileHover={{ y: -3 }}
              >
                <span className="font-mono text-[0.62rem] text-text-muted tracking-[0.1em]">{String(index + 8).padStart(2, '0')}</span>
                <h3 className="text-[0.9rem] font-semibold leading-tight text-text">{project.title}</h3>
                <p className="text-[0.81rem] text-text-dim leading-relaxed flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-1">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="font-mono text-[0.64rem] bg-surface-2 border border-border px-1.5 py-0.5 rounded-full text-text-muted">{tag}</span>
                  ))}
                </div>
                <span className="absolute top-4 right-4 text-sm text-text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">↗</span>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}