'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { portfolioData } from '@/data/portfolio'

export function Skills() {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <section id="skills" className="section-padding bg-[#08080c]">
      <div className="max-w-[1280px] mx-auto px-8 max-md:px-5">
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-accent mb-4">02 / Skills</p>
        <h2 className="font-display text-[clamp(2rem,4vw,2.8rem)] leading-[1.15] tracking-[-0.02em] text-white font-normal mb-14">
          Technical <em className="italic text-accent">toolkit</em>
        </h2>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {portfolioData.skills.map((cat, i) => (
            <motion.button
              key={cat.label}
              onClick={() => setActiveCategory(i)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                i === activeCategory
                  ? 'bg-accent text-[#0a0a0a] shadow-[0_0_24px_rgba(184,245,82,0.25)]'
                  : 'bg-white/[0.02] text-zinc-400 border border-white/[0.05] hover:border-accent/30 hover:text-white'
              }`}
              whileHover={{ scale: i === activeCategory ? 1 : 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {cat.label}
            </motion.button>
          ))}
        </div>

        {/* Active category skills */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={{ opacity: 0, y: -16, filter: 'blur(4px)' }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="flex flex-wrap gap-3"
          >
            {portfolioData.skills[activeCategory].skills.map((skill, si) => (
              <motion.div
                key={skill.name}
                className="group relative inline-flex items-center gap-3 px-5 py-4 bg-white/[0.02] border border-white/[0.04] rounded-2xl cursor-default overflow-hidden"
                initial={{ opacity: 0, scale: 0.85, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: si * 0.05, duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                whileHover={{
                  scale: 1.04,
                  borderColor: 'rgba(184,245,82,0.5)',
                  backgroundColor: 'rgba(184,245,82,0.06)',
                  boxShadow: '0 12px 40px rgba(184,245,82,0.1), 0 0 0 1px rgba(184,245,82,0.15)',
                  y: -4,
                }}
              >
                {/* Hover glow sweep */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/8 to-transparent opacity-0 group-hover:opacity-100"
                  style={{ backgroundSize: '200% 100%' }}
                  animate={{ backgroundPosition: ['200% 0', '-200% 0'] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
                />
                
                {/* Icon with gradient ring */}
                <div className="relative z-10 w-10 h-10 rounded-xl bg-gradient-to-br from-accent/15 to-accent/5 flex items-center justify-center border border-accent/20 group-hover:border-accent/40 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(184,245,82,0.15)]">
                  <i className={`${skill.icon} text-lg text-accent group-hover:scale-110 transition-transform duration-300`} />
                </div>
                
                {/* Name */}
                <span className="relative z-10 text-sm font-medium text-zinc-300 group-hover:text-white transition-colors duration-300">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Skill count */}
        <motion.p
          className="mt-8 text-xs font-mono text-zinc-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {portfolioData.skills[activeCategory].skills.length} tools in {portfolioData.skills[activeCategory].label.toLowerCase()}
        </motion.p>
      </div>
    </section>
  )
}