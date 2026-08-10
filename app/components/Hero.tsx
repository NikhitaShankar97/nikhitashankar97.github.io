'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useEffect, useState, useCallback, useRef } from 'react'
import { portfolioData } from '@/data/portfolio'

export function Hero() {
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 })
  const heroRef = useRef<HTMLDivElement>(null)
  
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)
  const springX = useSpring(cursorX, { damping: 40, stiffness: 150 })
  const springY = useSpring(cursorY, { damping: 40, stiffness: 150 })
  
  const glowX = useTransform(springX, [-200, 200], [-100, 100])
  const glowY = useTransform(springY, [-200, 200], [-100, 100])
  
  // Magnetic effect for photo
  const photoX = useSpring(useTransform(springX, [-100, 100], [-8, 8]), { damping: 30, stiffness: 200 })
  const photoY = useSpring(useTransform(springY, [-100, 100], [-8, 8]), { damping: 30, stiffness: 200 })

  const messages = portfolioData.taglineMessages
  const currentText = messages[textIndex]

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentText.length) {
        setCharIndex(charIndex + 1)
      } else if (isDeleting && charIndex > 0) {
        setCharIndex(charIndex - 1)
      } else if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), 1600)
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false)
        setTextIndex((prev) => (prev + 1) % messages.length)
      }
    }, isDeleting ? 40 : 80)
    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, textIndex, currentText, messages])

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!heroRef.current) return
    const rect = heroRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    cursorX.set(x)
    cursorY.set(y)
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    })
  }, [cursorX, cursorY])

  const handleMouseLeave = useCallback(() => {
    cursorX.set(0)
    cursorY.set(0)
  }, [cursorX, cursorY])

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#080808]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Deep background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f08] via-[#080808] to-[#080808]" />
      
      {/* Animated grid */}
      <div className="absolute inset-0 grid-overlay opacity-40" />
      
      {/* Floating orbs */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(184,245,82,0.08) 0%, transparent 60%)',
          top: '10%',
          right: '10%',
          filter: 'blur(80px)',
        }}
        animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(82,245,168,0.05) 0%, transparent 60%)',
          bottom: '5%',
          left: '5%',
          filter: 'blur(100px)',
        }}
        animate={{ y: [0, 20, 0], scale: [1, 0.9, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      />

      {/* Cursor-following glow */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(184,245,82,0.12) 0%, transparent 50%)',
          x: glowX,
          y: glowY,
          filter: 'blur(60px)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-5 max-w-4xl mx-auto">
        {/* Status badge with glass effect */}
        <motion.div
          className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full mb-8"
          style={{
            background: 'rgba(20,20,20,0.7)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(184,245,82,0.2)',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
          </span>
          <span className="text-xs font-mono tracking-[0.15em] uppercase text-accent font-medium">
            {portfolioData.status}
          </span>
        </motion.div>

        {/* Profile photo with magnetic effect */}
        <motion.div
          className="relative mx-auto mb-8"
          style={{ x: photoX, y: photoY }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.4, 0, 0.2, 1] }}
        >
          <div className="w-28 h-28 rounded-2xl overflow-hidden ring-1 ring-accent/30 ring-offset-4 ring-offset-[#080808] mx-auto shadow-[0_0_40px_rgba(184,245,82,0.1)]">
            <img
              src="/profile.jpg"
              alt={portfolioData.name}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          className="font-display text-[clamp(3rem,7vw,6rem)] leading-[1.05] tracking-[-0.03em] mb-4 text-white font-normal"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
        >
          {portfolioData.firstName}{' '}
          <span className="italic text-accent">{portfolioData.lastName}</span>
        </motion.h1>

        {/* Headline */}
        <motion.p
          className="text-lg text-zinc-400 tracking-[0.02em] mb-3 font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          {portfolioData.headline}
        </motion.p>

        {/* Typing tagline */}
        <motion.div
          className="font-mono text-[0.9rem] text-zinc-500 mb-10 h-6 tracking-[0.03em]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <span>{currentText.substring(0, charIndex)}</span>
          <motion.span
            className="inline-block w-[2px] h-4 bg-accent ml-0.5 align-middle"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
          />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex gap-4 justify-center flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
        >
          <motion.a
            href="#projects"
            className="group relative inline-flex items-center gap-2 px-8 py-4 bg-accent text-[#0a0a0a] font-semibold rounded-xl text-sm tracking-[0.02em] overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(184,245,82,0.3)]"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="relative z-10">View My Work</span>
            <motion.span
              className="relative z-10"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              ↓
            </motion.span>
          </motion.a>
          
          <motion.a
            href="#contact"
            className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-xl text-sm font-medium tracking-[0.02em] text-zinc-300 transition-all duration-300"
            style={{
              background: 'rgba(255,255,255,0.03)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
            whileHover={{
              scale: 1.03,
              borderColor: 'rgba(184,245,82,0.4)',
              backgroundColor: 'rgba(184,245,82,0.05)',
            }}
            whileTap={{ scale: 0.97 }}
          >
            Get in Touch
            <motion.span
              className="opacity-0 group-hover:opacity-100 transition-opacity"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-[0.6rem] font-mono tracking-[0.2em] uppercase text-zinc-600">Scroll</span>
        <motion.div
          className="w-[1px] h-10 bg-gradient-to-b from-zinc-600 to-transparent origin-top"
          animate={{ scaleY: [1, 0.4, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}