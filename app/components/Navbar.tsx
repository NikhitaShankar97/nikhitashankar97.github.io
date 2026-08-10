'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { portfolioData } from '@/data/portfolio'
import { Menu, X, Download } from 'lucide-react'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#honors', label: 'Honors' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-400 ${
          scrolled
            ? 'bg-bg/90 backdrop-blur-2xl py-3.5 border-b border-border'
            : 'py-5'
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="max-w-[1200px] mx-auto px-10 max-md:px-5 flex items-center justify-between">
          <a
            href="#hero"
            className="font-mono text-[1.2rem] font-bold tracking-[-0.02em] text-text hover:text-accent transition-colors"
          >
            {portfolioData.initials}<span className="text-accent">.</span>
          </a>

          <div className="flex items-center gap-7 max-md:hidden">
            <ul className="flex items-center gap-7 list-none">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-medium text-[0.8rem] text-text-dim tracking-[0.05em] uppercase hover:text-accent transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={portfolioData.socialLinks[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-text-dim hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin" />
            </a>
            <a
              href={portfolioData.resumeUrl}
              download
              className="flex items-center gap-1.5 font-mono text-[0.7rem] text-accent border border-accent-mid px-3 py-1.5 rounded-full hover:bg-accent-dim transition-all"
            >
              <Download size={12} />
              Resume
            </a>
          </div>

          <button
            className="hidden max-md:flex flex-col gap-1.5 bg-none border-none cursor-pointer p-1"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <span className="block w-[22px] h-[1.5px] bg-text rounded-sm" />
            <span className="block w-[22px] h-[1.5px] bg-text rounded-sm" />
            <span className="block w-[18px] h-[1.5px] bg-text rounded-sm" />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 bg-bg z-[2000] flex flex-col items-center justify-center"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5, ease: [0.77, 0, 0.18, 1] }}
          >
            <button
              className="absolute top-6 right-8 bg-none border-none text-text-dim text-2xl cursor-pointer hover:text-text transition-colors"
              onClick={() => setMobileOpen(false)}
              aria-label="Close menu"
            >
              <X size={28} />
            </button>
            <ul className="list-none text-center">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  className="my-5"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <a
                    href={link.href}
                    className="font-display italic text-[2.2rem] text-text hover:text-accent transition-colors duration-200"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <motion.a
              href={portfolioData.resumeUrl}
              download
              className="mt-8 flex items-center gap-2 text-accent border border-accent-mid px-6 py-3 rounded-full hover:bg-accent-dim transition-all"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <Download size={16} />
              Download Resume
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}