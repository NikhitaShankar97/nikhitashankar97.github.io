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
  const glowX = useTransform(springX, [-300, 300], [-120, 120])
  const glowY = useTransform(springY, [-300, 300], [-120, 120])
  const photoX = useSpring(useTransform(springX, [-150, 150], [-8, 8]), { damping: 30, stiffness: 150 })
  const photoY = useSpring(useTransform(springY, [-150, 150], [-8, 8]), { damping: 30, stiffness: 150 })
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
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#060608]" onMouseMove={handleMouseMove} onMouseLeave={() => { cursorX.set(0); cursorY.set(0) }}>
      <div className="absolute inset-0 grid-pattern opacity-25" />
      <motion.div className="absolute w-[600px] h-[600px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(184,245,82,0.05) 0%, transparent 60%)', top: '-5%', right: '-5%', filter: 'blur(100px)' }} animate={{ y: [0,-30,0], scale: [1,1.05,1] }} transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }} />
      <motion.div className="absolute w-[400px] h-[400px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.03) 0%, transparent 60%)', bottom: '-5%', left: '-5%', filter: 'blur(100px)' }} animate={{ y: [0,20,0] }} transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut', delay: 4 }} />
      <motion.div className="absolute w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: 'radial-gradient(circle, rgba(184,245,82,0.06) 0%, transparent 50%)', x: glowX, y: glowY, filter: 'blur(80px)' }} />

      <div className="relative z-10 text-center px-5 max-w-3xl mx-auto">
        <motion.div className="inline-flex items-center gap-2.5 px-5 py-2.5 glass-card rounded-full mb-8" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
          <span className="relative flex h-2.5 w-2.5"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" /><span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent animate-pulse-glow" /></span>
          <span className="text-xs font-mono tracking-[0.15em] uppercase text-accent font-medium">{portfolioData.status}</span>
        </motion.div>

        <motion.div className="relative mx-auto mb-8" style={{ x: photoX, y: photoY }} initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
          <div className="w-28 h-28 rounded-2xl overflow-hidden ring-1 ring-accent/20 ring-offset-4 ring-offset-[#060608] mx-auto shadow-[0_0_50px_rgba(184,245,82,0.06)]">
            <img src="/profile.jpg" alt={portfolioData.name} className="w-full h-full object-cover" />
          </div>
        </motion.div>

        <motion.h1 className="font-display text-[clamp(2.4rem,5vw,3.8rem)] leading-[1.08] tracking-[-0.03em] mb-3 text-white font-normal" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}>
          {portfolioData.firstName} <span className="italic text-accent">{portfolioData.lastName}</span>
        </motion.h1>

        <motion.p className="text-lg text-zinc-400 tracking-[0.02em] mb-2 font-light" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}>
          {portfolioData.headline}
        </motion.p>

        <motion.div className="font-mono text-[0.9rem] text-zinc-500 mb-10 h-6 tracking-[0.03em]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
          <span>{currentText.substring(0, charIndex)}</span>
          <motion.span className="inline-block w-[2px] h-4 bg-accent ml-0.5 align-middle" animate={{ opacity: [1,0] }} transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }} />
        </motion.div>

        <motion.div className="flex gap-3 justify-center flex-wrap" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.9 }}>
          <motion.a href="#projects" className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-[#0a0a0a] font-semibold rounded-xl text-sm tracking-[0.02em] transition-all duration-300 hover:shadow-[0_0_40px_rgba(184,245,82,0.25)]" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>View My Work <span>↓</span></motion.a>
          <motion.a href={portfolioData.resumeUrl} download className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-medium tracking-[0.02em] text-zinc-300 glass-card transition-all duration-300" whileHover={{ scale: 1.03, borderColor: 'rgba(184,245,82,0.4)' }} whileTap={{ scale: 0.97 }}>Download Resume</motion.a>
        </motion.div>
      </div>

      <motion.div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>
        <span className="text-[0.6rem] font-mono tracking-[0.2em] uppercase text-zinc-600">Scroll</span>
        <motion.div className="w-[1px] h-10 bg-gradient-to-b from-zinc-600 to-transparent origin-top" animate={{ scaleY: [1,0.3,1] }} transition={{ duration: 2, repeat: Infinity }} />
      </motion.div>
    </section>
  )
}
