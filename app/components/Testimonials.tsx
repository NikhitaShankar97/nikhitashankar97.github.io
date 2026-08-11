'use client'

import { motion } from 'framer-motion'
import { portfolioData } from '@/data/portfolio'
import { Quote } from 'lucide-react'

export function Testimonials() {
  if (!portfolioData.testimonials || portfolioData.testimonials.length === 0) return null

  return (
    <section className="section-padding bg-[#08080c]">
      <div className="max-w-[1200px] mx-auto px-8 max-md:px-5">
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-accent mb-4">Testimonials</p>
        <h2 className="font-display text-[clamp(2rem,4vw,2.8rem)] leading-[1.15] tracking-[-0.02em] text-white font-normal mb-14">
          What people <em className="italic text-accent">say</em>
        </h2>

        <div className="grid grid-cols-2 gap-4 max-lg:grid-cols-1">
          {portfolioData.testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="glass-card p-7 flex flex-col gap-4 relative"
              initial={{ opacity: 0, y: 20, rotate: i % 2 === 0 ? -0.5 : 0.5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              <Quote size={24} className="text-accent/30" />
              <p className="text-sm text-zinc-300 leading-relaxed italic flex-1">{t.quote}</p>
              <div className="flex items-center gap-3 pt-3 border-t border-white/[0.05]">
                {t.image && (
                  <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full object-cover border border-white/[0.08]" />
                )}
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-zinc-500">{t.role}, {t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
