'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { portfolioData } from '@/data/portfolio'
import { Send, Linkedin, Github, Mail, ArrowUpRight } from 'lucide-react'

export function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const icons: Record<string, React.ReactNode> = {
    LinkedIn: <Linkedin size={18} />,
    GitHub: <Github size={18} />,
    Email: <Mail size={18} />,
  }

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-[1200px] mx-auto px-8 max-md:px-5">
        <div className="grid grid-cols-[1fr_1.1fr] gap-20 items-start max-lg:grid-cols-1 max-lg:gap-12">
          <div>
            <p className="font-mono text-xs tracking-[0.18em] uppercase text-accent mb-5">05 / Contact</p>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] leading-[1.1] tracking-[-0.02em] text-white font-normal mb-6">
              Let&apos;s build <em className="italic text-accent">something great</em>
            </h2>
            <p className="text-zinc-400 text-base leading-relaxed mb-10 max-w-sm">
              Open to new opportunities, collaborations, or just a good conversation about data.
            </p>

            <div className="space-y-4">
              {portfolioData.socialLinks.map((l, i) => (
                <motion.a
                  key={l.platform}
                  href={l.url}
                  target={l.platform !== 'Email' ? '_blank' : undefined}
                  rel={l.platform !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 text-zinc-400 hover:text-white transition-colors group"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 4 }}
                >
                  <span className="text-accent w-5 flex-shrink-0">{icons[l.platform]}</span>
                  <span className="text-sm">{l.platform === 'Email' ? portfolioData.email : l.url.replace('https://', '')}</span>
                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            {submitted ? (
              <motion.div className="card p-10 text-center" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
                <div className="text-5xl mb-5">🚀</div>
                <h3 className="font-display text-2xl text-accent mb-2">Message sent!</h3>
                <p className="text-zinc-400">I&apos;ll get back to you soon.</p>
              </motion.div>
            ) : (
              <motion.form
                action={portfolioData.formspreeEndpoint}
                method="POST"
                className="space-y-4"
                onSubmit={(e) => {
                  if (!form.name || !form.email || !form.message) { e.preventDefault(); return }
                  setSubmitted(true)
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
                  <input type="text" name="name" placeholder="Your name" required value={form.name} onChange={e => setForm({...form, name: e.target.value})}
                    className="w-full px-5 py-4 bg-white/[0.02] border border-white/[0.06] rounded-xl text-sm text-white outline-none transition-all focus:border-accent/40 focus:bg-white/[0.04] placeholder:text-zinc-600" />
                  <input type="email" name="_replyto" placeholder="Your email" required value={form.email} onChange={e => setForm({...form, email: e.target.value})}
                    className="w-full px-5 py-4 bg-white/[0.02] border border-white/[0.06] rounded-xl text-sm text-white outline-none transition-all focus:border-accent/40 focus:bg-white/[0.04] placeholder:text-zinc-600" />
                </div>
                <textarea name="message" placeholder="What would you like to discuss?" rows={5} required value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                  className="w-full px-5 py-4 bg-white/[0.02] border border-white/[0.06] rounded-xl text-sm text-white outline-none resize-y transition-all focus:border-accent/40 focus:bg-white/[0.04] placeholder:text-zinc-600" />
                <motion.button type="submit" className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-[#0a0a0a] font-semibold rounded-xl text-sm hover:shadow-[0_0_40px_rgba(184,245,82,0.25)] transition-all" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  Send Message <Send size={16} />
                </motion.button>
              </motion.form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}