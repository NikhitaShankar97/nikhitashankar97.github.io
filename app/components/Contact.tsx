'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { portfolioData } from '@/data/portfolio'
import { Send, Linkedin, Github, Mail, ArrowUpRight } from 'lucide-react'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const icons: Record<string, React.ReactNode> = { LinkedIn: <Linkedin size={16} />, GitHub: <Github size={16} />, Email: <Mail size={16} /> }

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-[1200px] mx-auto px-8 max-md:px-5">
        <div className="grid grid-cols-[1fr_1fr] gap-16 items-start max-lg:grid-cols-1 max-lg:gap-10">
          <div>
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-accent mb-4">05 / Contact</p>
            <h2 className="font-display text-[clamp(2rem,4vw,2.8rem)] leading-[1.15] tracking-[-0.02em] text-white font-normal mb-5">
              Let&apos;s build <em className="italic text-accent">something great</em>
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed mb-8">Open to new opportunities, collaborations, or just a good conversation about data.</p>
            <div className="space-y-3">
              {portfolioData.socialLinks.map((l, i) => (
                <motion.a key={l.platform} href={l.url} target={l.platform !== 'Email' ? '_blank' : undefined} rel={l.platform !== 'Email' ? 'noopener noreferrer' : undefined} className="flex items-center gap-3 text-zinc-400 hover:text-white transition-colors group" initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} whileHover={{ x: 3 }}>
                  <span className="text-accent w-4 flex-shrink-0">{icons[l.platform]}</span>
                  <span className="text-sm">{l.platform === 'Email' ? 'nikhita.shankar97@gmail.com' : l.url.replace('https://', '')}</span>
                  <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              ))}
            </div>
          </div>
          <div>
            {submitted ? (
              <motion.div className="glass-card p-10 text-center" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="font-display text-xl text-accent mb-1">Message sent!</h3>
                <p className="text-zinc-400 text-sm">I&apos;ll get back to you soon.</p>
              </motion.div>
            ) : (
              <motion.form action="https://formspree.io/f/xovvozlz" method="POST" className="space-y-3" onSubmit={() => setSubmitted(true)} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <div className="grid grid-cols-2 gap-3 max-md:grid-cols-1">
                  <input type="text" name="name" placeholder="Your name" required className="w-full px-4 py-3 bg-white/[0.02] border border-white/[0.05] rounded-xl text-sm text-white outline-none transition-all focus:border-accent/40 focus:bg-white/[0.03] placeholder:text-zinc-600" />
                  <input type="email" name="email" placeholder="Your email" required className="w-full px-4 py-3 bg-white/[0.02] border border-white/[0.05] rounded-xl text-sm text-white outline-none transition-all focus:border-accent/40 focus:bg-white/[0.03] placeholder:text-zinc-600" />
                </div>
                <textarea name="message" placeholder="What would you like to discuss?" rows={4} required className="w-full px-4 py-3 bg-white/[0.02] border border-white/[0.05] rounded-xl text-sm text-white outline-none resize-y transition-all focus:border-accent/40 focus:bg-white/[0.03] placeholder:text-zinc-600" />
                <motion.button type="submit" className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-[#0a0a0a] font-semibold rounded-xl text-sm hover:shadow-[0_0_30px_rgba(184,245,82,0.2)] transition-all" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>Send Message <Send size={14} /></motion.button>
              </motion.form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}