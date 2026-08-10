'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { portfolioData } from '@/data/portfolio'
import { SectionHeading } from './ui/SectionHeading'
import { Reveal } from './ui/Reveal'
import { Send, Linkedin, Github, Mail } from 'lucide-react'

export function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    if (!formState.name || !formState.email || !formState.message) {
      e.preventDefault()
      return
    }
    setSubmitted(true)
  }

  const iconMap: Record<string, React.ReactNode> = {
    LinkedIn: <Linkedin size={18} />,
    GitHub: <Github size={18} />,
    Email: <Mail size={18} />,
  }

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-[1200px] mx-auto px-10 max-md:px-5">
        <div className="grid grid-cols-[1fr_1.1fr] gap-20 items-start max-lg:grid-cols-1 max-lg:gap-10">
          <div>
            <SectionHeading number="07" title="Let's build <em>something great</em>" accent="something great" />
            <Reveal>
              <p className="text-[0.98rem] text-text-dim leading-[1.8] mb-7 max-w-[380px]">
                Open to new opportunities, collaborations, or just a good conversation about data. Drop a message and I will get back to you.
              </p>
            </Reveal>
            <div className="space-y-3">
              {portfolioData.socialLinks.map((link, i) => (
                <Reveal key={link.platform} delay={i}>
                  <motion.a
                    href={link.url}
                    target={link.platform !== 'Email' ? '_blank' : undefined}
                    rel={link.platform !== 'Email' ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-3 text-text-dim hover:text-accent transition-colors group"
                    whileHover={{ x: 4 }}
                  >
                    <span className="text-accent w-5 flex-shrink-0">{iconMap[link.platform] || <i className={link.icon} />}</span>
                    <span className="text-[0.87rem]">{link.platform === 'Email' ? portfolioData.email : link.url.replace('https://', '')}</span>
                  </motion.a>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal direction="right">
            {submitted ? (
              <motion.div className="bg-surface border border-accent-mid rounded-card p-10 text-center" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="font-display text-2xl text-accent mb-2">Message sent!</h3>
                <p className="text-text-dim">Thanks for reaching out. I'll get back to you soon.</p>
              </motion.div>
            ) : (
              <form action={portfolioData.formspreeEndpoint} method="POST" className="flex flex-col gap-3" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-3 max-md:grid-cols-1">
                  <motion.input
                    type="text" name="name" placeholder="Your name" required
                    value={formState.name} onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-4 py-3.5 bg-surface border border-border rounded-[10px] text-text text-[0.88rem] outline-none transition-all focus:border-accent-mid placeholder:text-text-muted"
                    whileFocus={{ borderColor: 'rgba(184,245,82,0.5)', boxShadow: '0 0 0 3px rgba(184,245,82,0.08)' }}
                  />
                  <motion.input
                    type="email" name="_replyto" placeholder="Your email" required
                    value={formState.email} onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-4 py-3.5 bg-surface border border-border rounded-[10px] text-text text-[0.88rem] outline-none transition-all focus:border-accent-mid placeholder:text-text-muted"
                    whileFocus={{ borderColor: 'rgba(184,245,82,0.5)', boxShadow: '0 0 0 3px rgba(184,245,82,0.08)' }}
                  />
                </div>
                <motion.textarea
                  name="message" placeholder="What would you like to discuss?" rows={5} required
                  value={formState.message} onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-4 py-3.5 bg-surface border border-border rounded-[10px] text-text text-[0.88rem] outline-none resize-y transition-all focus:border-accent-mid placeholder:text-text-muted"
                  whileFocus={{ borderColor: 'rgba(184,245,82,0.5)', boxShadow: '0 0 0 3px rgba(184,245,82,0.08)' }}
                />
                <motion.button
                  type="submit"
                  className="inline-flex items-center gap-2 bg-accent text-bg font-semibold text-[0.88rem] px-7 py-3.5 rounded-[10px] transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(184,245,82,0.32)] hover:bg-[#caff64] w-fit"
                  whileHover={{ y: -2 }} whileTap={{ y: 0 }}
                >
                  Send Message <Send size={16} />
                </motion.button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}