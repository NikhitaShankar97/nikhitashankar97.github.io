'use client'

import { motion } from 'framer-motion'
import { portfolioData } from '@/data/portfolio'
import { Download, Linkedin } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-[1200px] mx-auto px-8 max-md:px-5">
        <div className="grid grid-cols-[1fr_280px] gap-20 items-start max-lg:grid-cols-1 max-lg:gap-10">
          <div>
            <p className="font-mono text-xs tracking-[0.18em] uppercase text-accent mb-5">01 / About</p>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] leading-[1.1] tracking-[-0.02em] text-white font-normal mb-8">
              Turning complexity <em className="italic text-accent">into clarity</em>
            </h2>
            <div className="space-y-5">
              <motion.p className="text-xl text-white/90 leading-relaxed font-medium" initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} dangerouslySetInnerHTML={{ __html: portfolioData.bio.lead }} />
              {portfolioData.bio.paragraphs.map((p, i) => (
                <motion.p key={i} className="text-base text-zinc-400 leading-relaxed" initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i + 1) * 0.12 }} dangerouslySetInnerHTML={{ __html: p }} />
              ))}
            </div>
            <motion.div className="flex flex-wrap gap-2 mt-6" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
              {portfolioData.hobbies.map(h => (
                <span key={h} className="px-3 py-1.5 rounded-full text-xs text-zinc-500 bg-white/[0.03] border border-white/[0.05] hover:border-accent/20 hover:text-zinc-300 transition-all">{h}</span>
              ))}
            </motion.div>
          </div>

          <div className="flex flex-col gap-4 sticky top-28 max-lg:static max-lg:flex-row max-lg:flex-wrap">
            <motion.a href={portfolioData.resumeUrl} download className="flex items-center justify-center gap-2 w-full py-4 bg-accent text-[#0a0a0a] font-semibold rounded-xl text-sm hover:shadow-[0_0_40px_rgba(184,245,82,0.25)] transition-all max-lg:flex-1 max-lg:min-w-[160px]" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Download size={16} /> Download Resume
            </motion.a>
            <motion.a href={portfolioData.socialLinks[0].url} target="_blank" className="flex items-center justify-center gap-2 w-full py-4 glass rounded-xl text-sm font-medium text-zinc-300 hover:border-accent/30 hover:text-white transition-all max-lg:flex-1 max-lg:min-w-[160px]" whileHover={{ scale: 1.02 }}>
              <Linkedin size={16} /> LinkedIn
            </motion.a>
            <div className="glass rounded-xl p-5 mt-2 space-y-3 text-sm">
              {[
                ['Location', portfolioData.sidebar.location],
                ['Degree', portfolioData.sidebar.degree],
                ['Focus', portfolioData.sidebar.focus],
              ].map(([label, val]) => (
                <div key={label} className="flex justify-between">
                  <span className="text-zinc-500 text-xs font-mono uppercase tracking-wider">{label}</span>
                  <span className="text-zinc-300">{val}</span>
                </div>
              ))}
              <div className="flex justify-between pt-2 border-t border-white/[0.05]">
                <span className="text-zinc-500 text-xs font-mono uppercase tracking-wider">Status</span>
                <span className="text-accent flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse-glow" />
                  Open to work
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}