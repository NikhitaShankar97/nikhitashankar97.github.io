'use client'

import { motion } from 'framer-motion'
import { portfolioData } from '@/data/portfolio'

const badgeStyles: Record<string, string> = {
  default: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  hackathon: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  winner: 'bg-gradient-to-r from-yellow-500/15 to-amber-500/10 text-yellow-400 border-yellow-500/30 shadow-[0_0_20px_rgba(255,215,0,0.08)]',
  silver: 'bg-zinc-400/10 text-zinc-300 border-zinc-400/20',
  flagship: 'bg-accent/10 text-accent border-accent/20 shadow-[0_0_20px_rgba(184,245,82,0.06)]',
}

export function Projects() {
  const { featuredProjects, otherProjects } = portfolioData

  return (
    <section id="projects" className="section-padding bg-[#08080c]">
      <div className="max-w-[1200px] mx-auto px-8 max-md:px-5">
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-accent mb-4">04 / Projects</p>
        <h2 className="font-display text-[clamp(2rem,4vw,2.8rem)] leading-[1.15] tracking-[-0.02em] text-white font-normal mb-14">
          Selected <em className="italic text-accent">work</em>
        </h2>

        <div className="grid grid-cols-2 gap-3 mb-12 max-lg:grid-cols-1">
          {featuredProjects.map((p, i) => {
            const isFull = p.featuredStyle === 'hackathon' || p.featuredStyle === 'flagship'
            const isWinner = p.featuredStyle === 'hackathon'
            const isSilver = p.featuredStyle === 'silver'
            return (
              <motion.div
                key={p.id}
                className={ento-card p-6 flex flex-col gap-3 group relative   }
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.06 }}
              >
                <div className={bsolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 } />
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[0.55rem] text-zinc-600 tracking-[0.15em]">{String(i + 1).padStart(2, '0')}</span>
                  {p.badges && <div className="flex gap-1.5 flex-wrap">{p.badges.map((b, j) => (<span key={j} className={ont-mono text-[0.58rem] uppercase tracking-[0.1em] px-2 py-0.5 rounded-full border }>{b.text}</span>))}</div>}
                </div>
                {p.wordmark && <div className={ont-mono text-2xl font-bold tracking-tight }>{p.wordmark}<span className="text-white/15">{p.wordmarkAccent}</span></div>}
                <h3 className="text-base font-semibold text-white leading-snug">{p.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed flex-1">{p.description}</p>
                <div className="flex flex-wrap gap-1.5">{p.tags.map(t => (<span key={t} className="font-mono text-[0.62rem] bg-white/[0.03] border border-white/[0.04] px-2 py-0.5 rounded-full text-zinc-500">{t}</span>))}</div>
                {p.links.length > 0 && <div className="flex gap-2 flex-wrap">{p.links.map((l, j) => (<a key={j} href={l.url} target="_blank" rel="noopener noreferrer" className={ont-mono text-xs px-3 py-1.5 rounded-full border transition-all }>{l.label}</a>))}</div>}
              </motion.div>
            )
          })}
        </div>

        <p className="font-mono text-[0.58rem] tracking-[0.2em] uppercase text-zinc-600 mb-4">More Projects</p>
        <div className="grid grid-cols-3 gap-2 max-lg:grid-cols-2 max-md:grid-cols-1">
          {otherProjects.map((p, i) => (
            <motion.div key={p.id} className="bento-card p-4 flex flex-col gap-1.5 group" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}>
              <span className="font-mono text-[0.5rem] text-zinc-600">{String(i + 8).padStart(2, '0')}</span>
              <h4 className="text-sm font-semibold text-white">{p.title}</h4>
              <p className="text-xs text-zinc-500 flex-1">{p.description}</p>
              <div className="flex flex-wrap gap-1">{p.tags.map(t => (<span key={t} className="font-mono text-[0.58rem] bg-white/[0.02] px-1.5 py-0.5 rounded-full text-zinc-600">{t}</span>))}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
