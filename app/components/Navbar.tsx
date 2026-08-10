'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { portfolioData } from '@/data/portfolio'
import { Menu, X, Download } from 'lucide-react'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', h, { passive: true })
    return () => window.removeEventListener('scroll', h)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${scrolled ? 'glass py-3 shadow-lg shadow-black/20' : 'py-5'}`}
        initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="max-w-[1280px] mx-auto px-8 max-md:px-5 flex items-center justify-between">
          <a href="#hero" className="font-mono text-lg font-bold tracking-tight text-white hover:text-accent transition-colors">
            {portfolioData.initials}<span className="text-accent">.</span>
          </a>
          <div className="flex items-center gap-8 max-md:hidden">
            {navLinks.map(l => (
              <a key={l.href} href={l.href} className="text-xs font-medium text-zinc-400 tracking-[0.08em] uppercase hover:text-white transition-colors">{l.label}</a>
            ))}
            <a href={portfolioData.resumeUrl} download className="flex items-center gap-1.5 text-xs font-mono text-accent border border-accent/30 px-3 py-2 rounded-full hover:bg-accent/10 transition-all">
              <Download size={12} /> Resume
            </a>
          </div>
          <button className="hidden max-md:flex flex-col gap-1.5 p-1" onClick={() => setMobileOpen(true)} aria-label="Menu">
            <span className="block w-5 h-[1.5px] bg-white rounded-sm" /><span className="block w-5 h-[1.5px] bg-white rounded-sm" /><span className="block w-4 h-[1.5px] bg-white rounded-sm" />
          </button>
        </div>
      </motion.nav>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div className="fixed inset-0 bg-[#08080c] z-[2000] flex flex-col items-center justify-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <button onClick={() => setMobileOpen(false)} className="absolute top-6 right-8 text-zinc-400 hover:text-white"><X size={28} /></button>
            <ul className="text-center space-y-6">
              {navLinks.map((l, i) => (
                <motion.li key={l.href} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}>
                  <a href={l.href} onClick={() => setMobileOpen(false)} className="font-display italic text-3xl text-white hover:text-accent transition-colors">{l.label}</a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}