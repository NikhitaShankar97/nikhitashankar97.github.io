'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useEffect, useState, useCallback, useRef } from 'react'
import { portfolioData } from '@/data/portfolio'

export function Hero() {
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)
  const springX = useSpring(cursorX, { damping: 50, stiffness: 100 })
  const springY = useSpring(cursorY, { damping: 50, stiffness: 100 })
  const glowX = useTransform(springX, [-300, 300], [-150, 150])
  const glowY = useTransform(springY, [-300, 300], [-150, 150])
  const photoX = useSpring(useTransform(springX, [-150, 150], [-10, 10]), { damping: 30, stiffness: 150 })
  const photoY = useSpring(useTransform(springY, [-150, 150], [-10, 10]), { damping: 30, stiffness: 150 })

  const messages = portfolioData.taglineMessages
  const currentText = messages[textIndex]

  useEffect(() => {
    const t = setTimeout(() => {
      if (!isDeleting && charIndex < currentText.length) setCharIndex(charIndex + 1)
      else if (isDeleting && charIndex > 0) setCharIndex(charIndex - 1)
      else if (!isDeleting && charIndex === currentText.length) setTimeout(() => setIsDeleting(true), 1800)
      else if (isDeleting && charIndex === 0) { setIsDeleting(false); setTextIndex((p) => (p + 1) % messages.length) }
    }, isDeleting ? 35 : 75)
    return () => clearTimeout(t)
  }, [charIndex, isDeleting, textIndex, currentText, messages])

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!heroRef.current) return
    const r = heroRef.current.getBoundingClientRect()
    cursorX.set(e.clientX - r.left - r.width / 2)
    cursorY.set(e.clientY - r.top - r.height / 2)
  }, [cursorX, cursorY])

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#08080c]" onMouseMove={handleMouseMove} onMouseLeave={() => { cursorX.set(0); cursorY.set(0) }}>
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Floating orbs */}
      <motion.div className="absolute w-[700px] h-[700px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(184,245,82,0.06) 0%, transparent 60%)', top: '-10%', right: '-5%', filter: 'blur(100px)' }} animate={{ y: [0,-40,0], scale: [1,1.08,1] }} transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }} />
      <motion.div className="absolute w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.04) 0%, transparent 60%)', bottom: '-5%', left: '-5%', filter: 'blur(100px)' }} animate={{ y: [0,30,0], scale: [1,0.92,1] }} transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 4 }} />

      {/* Cursor glow */}
      <motion.div className="absolute w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(184,245,82,0.08) 0%, transparent 50%)', x: glowX, y: glowY, filter: 'blur(80px)' }} />

      {/* Content */}
      <div className="relative z-10 text-center px-5 max-w-4xl mx-auto">
        <motion.div className="inline-flex items-center gap-2.5 px-5 py-2.5 glass rounded-full mb-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent animate-pulse-glow" />
          </span>
          <span className="text-xs font-mono tracking-[0.15em] uppercase text-accent font-medium">{portfolioData.status}</span>
        </motion.div>

        <motion.div className="relative mx-auto mb-10" style={{ x: photoX, y: photoY }} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.2 }}>
          <div className="w-32 h-32 rounded-2xl overflow-hidden ring-1 ring-accent/20 ring-offset-4 ring-offset-[#08080c] mx-auto shadow-[0_0_60px_rgba(184,245,82,0.08)]">
            <img src="/profile.jpg" alt={portfolioData.name} className="w-full h-full object-cover" />
          </div>
        </motion.div>

        <motion.h1 className="font-display text-[clamp(3.2rem,7vw,5.5rem)] leading-[1.05] tracking-[-0.03em] mb-4 text-white font-normal" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
          {portfolioData.firstName} <span className="italic text-accent">{portfolioData.lastName}</span>
        </motion.h1>

        <motion.p className="text-xl text-zinc-400 tracking-[0.02em] mb-3 font-light" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.5 }}>
          {portfolioData.headline}
        </motion.p>

        <motion.div className="font-mono text-[0.95rem] text-zinc-500 mb-12 h-7 tracking-[0.03em]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
          <span>{currentText.substring(0, charIndex)}</span>
          <motion.span className="inline-block w-[2px] h-5 bg-accent ml-0.5 align-middle" animate={{ opacity: [1,0] }} transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }} />
        </motion.div>

        <motion.div className="flex gap-4 justify-center flex-wrap" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.9 }}>
          <motion.a href="#projects" className="group inline-flex items-center gap-2 px-8 py-4 bg-accent text-[#0a0a0a] font-semibold rounded-xl text-sm tracking-[0.02em] transition-all duration-300 hover:shadow-[0_0_50px_rgba(184,245,82,0.3)]" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            View My Work <span className="group-hover:translate-x-0.5 transition-transform">↓</span>
          </motion.a>
          <motion.a href={portfolioData.resumeUrl} download className="group inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-medium tracking-[0.02em] text-zinc-300 glass transition-all duration-300" whileHover={{ scale: 1.03, borderColor: 'rgba(184,245,82,0.4)' }} whileTap={{ scale: 0.97 }}>
            Download Resume <Download size={16} className="group-hover:translate-y-0.5 transition-transform" />
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
        <span className="text-[0.6rem] font-mono tracking-[0.2em] uppercase text-zinc-600">Scroll</span>
        <motion.div className="w-[1px] h-12 bg-gradient-to-b from-zinc-600 to-transparent origin-top" animate={{ scaleY: [1,0.3,1] }} transition={{ duration: 2, repeat: Infinity }} />
      </motion.div>
    </section>
  )
}