'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Download } from 'lucide-react'
import { portfolioData } from '@/data/portfolio'

export function FloatingResume() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight
      const contactSection = document.getElementById('contact')
      const contactTop = contactSection?.getBoundingClientRect().top ?? Infinity
      setVisible(window.scrollY > heroHeight * 0.5 && contactTop > window.innerHeight)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={portfolioData.resumeUrl}
          download
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[1000] glass-card px-5 py-3 flex items-center gap-2.5 rounded-full shadow-xl shadow-black/40 hover:border-accent/40 transition-all cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          whileHover={{ scale: 1.04 }}
        >
          <Download size={16} className="text-accent" />
          <span className="text-sm font-medium text-white">Download Resume</span>
        </motion.a>
      )}
    </AnimatePresence>
  )
}
