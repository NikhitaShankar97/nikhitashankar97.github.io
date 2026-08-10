'use client'

import { motion } from 'framer-motion'
import { portfolioData } from '@/data/portfolio'

const badgeStyles: Record<string, string> = {
  default: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  hackathon: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  winner: 'bg-gradient-to-r from-yellow-500/15 to-amber-500/10 text-yellow-400 border-yellow-500/30 shadow-[0_0_20px_rgba(255,215,0,0.1)]',
  silver: 'bg-zinc-400/10 text-zinc-300 border-zinc-400/20',
  flagship: 'bg-accent/10 text-accent border-accent/20 shadow-[0_0_20px_rgba(184,245,82,0.08)]',
}

export function Projects() {
  const { featuredProjects, otherProjects } = portfolioData

  return (
    <section id="projects" className="section-padding bg-[#0c0c10]">
      <div className="max-w-[1200px] mx-auto px-8 max-md:px-5">
        <p className="font-mono text-xs tracking-[0.18em] uppercase text-accent mb-5">04 / Projects</p>
        <h2 className="font-display text-[clamp(2rem,4vw,3rem)] leading-[1.1] tracking-[-0.02em] text-white font-normal mb-14">
          Selected <em className="italic text-accent">work</em>
        </h2>

        <div className="grid grid-cols-2 gap-4 mb-14 max-lg:grid-cols-1">
          {featuredProjects.map((p, i) => {
            const isFull = p.featuredStyle === 'hackathon' || p.featuredStyle === 'flagship'
            return (
              <motion.div
                key={p.id}
                className={`card p-7 flex flex-col gap-4 group relative overflow-hidden ${isFull ? 'col-span-full' : ''} ${
                  p.featuredStyle === 'hackathon' ? 'bg-gradient-to-br from-[#0d0f0a] via-[#0f0f0f] to-[#0c0f0c] border-accent/10' : ''
                } ${p.featuredStyle === 'silver' ? 'bg-gradient-to-br from-[#111] via-[#0f0f0f] to-[#101010] border-zinc-400/10' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${p.featuredStyle === 'hackathon' ? 'from-transparent via-amber-400 to-transparent' : ''}`} />
                
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[0.6rem] text-zinc-600 tracking-[0.15em]">{String(i + 1).padStart(2, '0')}</span>
                  {p.badges && (
                    <div className="flex gap-2 flex-wrap">
                      {p.badges.map((b, j) => (
                        <span key={j} className={`font-mono text-[0.6rem] uppercase tracking-[0.1em] px-2.5 py-1 rounded-full border ${badgeStyles[b.variant]}`}>{b.text}</span>
                      ))}
                    </div>
                  )}
                </div>

                {p.wordmark && (
                  <div className={`font-mono text-3xl font-bold tracking-tight ${p.featuredStyle === 'silver' ? 'text-zinc-300' : 'text-accent'}`}>
                    {p.wordmark}<span className="text-white/20">{p.wordmarkAccent}</span>
                  </div>
                )}

                <h3 className="text-lg font-semibold text-white leading-snug">{p.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed flex-1">{p.description}</p>

                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map(t => (
                    <span key={t} className="font-mono text-[0.65rem] bg-white/[0.03] border border-white/[0.05] px-2.5 py-1 rounded-full text-zinc-500">{t}</span>
                  ))}
                </div>

                {p.links.length > 0 && (
                  <div className="flex gap-2 flex-wrap">
                    {p.links.map((l, j) => (
                      <a key={j} href={l.url} target="_blank" rel="noopener noreferrer" className={`font-mono text-xs px-4 py-2 rounded-full border transition-all ${
                        l.primary ? 'border-accent/30 text-accent bg-accent/5 hover:bg-accent/10' : 'border-white/[0.06] text-zinc-500 hover:border-accent/20 hover:text-white'
                      }`}>{l.label}</a>
                    ))}
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>

        <p className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-zinc-600 mb-5">More Projects</p>
        <div className="grid grid-cols-3 gap-3 max-lg:grid-cols-2 max-md:grid-cols-1">
          {otherProjects.map((p, i) => (
            <motion.div
              key={p.id}
              className="card p-5 flex flex-col gap-2 group"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <span className="font-mono text-[0.55rem] text-zinc-600">{String(i + 8).padStart(2, '0')}</span>
              <h4 className="text-sm font-semibold text-white">{p.title}</h4>
              <p className="text-xs text-zinc-500 flex-1">{p.description}</p>
              <div className="flex flex-wrap gap-1">
                {p.tags.map(t => <span key={t} className="font-mono text-[0.6rem] bg-white/[0.02] px-2 py-0.5 rounded-full text-zinc-600">{t}</span>)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}