'use client'

import { motion } from 'framer-motion'
import { useEffect, useState, useCallback } from 'react'
import { portfolioData } from '@/data/portfolio'
import { Button } from './ui/Button'

export function Hero() {
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 })

  const messages = portfolioData.taglineMessages
  const currentText = messages[textIndex]

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (!isDeleting && charIndex < currentText.length) {
          setCharIndex(charIndex + 1)
        } else if (isDeleting && charIndex > 0) {
          setCharIndex(charIndex - 1)
        } else if (!isDeleting && charIndex === currentText.length) {
          setTimeout(() => setIsDeleting(true), 1400)
        } else if (isDeleting && charIndex === 0) {
          setIsDeleting(false)
          setTextIndex((prev) => (prev + 1) % messages.length)
        }
      },
      isDeleting ? 45 : 90
    )
    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, textIndex, currentText, messages])

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    })
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 grid-overlay opacity-60" />
        <div
          className="absolute w-[560px] h-[560px] rounded-full blur-[90px] pointer-events-none animate-orb-float"
          style={{
            background: 'radial-gradient(circle, rgba(184,245,82,0.12) 0%, transparent 70%)',
            top: '-120px',
            right: '-80px',
          }}
        />
        <div
          className="absolute w-[420px] h-[420px] rounded-full blur-[90px] pointer-events-none animate-orb-float-reverse"
          style={{
            background: 'radial-gradient(circle, rgba(184,245,82,0.07) 0%, transparent 70%)',
            bottom: '-60px',
            left: '-60px',
          }}
        />
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full blur-[120px] pointer-events-none opacity-30"
          animate={{
            x: mousePos.x * 200 - 300,
            y: mousePos.y * 200 - 300,
          }}
          transition={{ type: 'spring', damping: 30, stiffness: 200 }}
          style={{
            background: 'radial-gradient(circle, rgba(184,245,82,0.08) 0%, transparent 60%)',
          }}
        />
      </div>

      <motion.div
        className="relative z-10 text-center px-5 py-10"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1] }}
      >
        <div className="inline-flex items-center gap-2 bg-accent-dim border border-accent-mid text-accent font-mono text-[0.7rem] tracking-[0.1em] uppercase px-4 py-1.5 rounded-full mb-7">
          <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse-dot" />
          {portfolioData.status}
        </div>

        <div className="w-[100px] h-[100px] rounded-full overflow-hidden border-2 border-accent-mid mx-auto mb-6">
          <img
            src="/profile.jpg"
            alt={portfolioData.name}
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="font-display text-[clamp(2.4rem,5.5vw,3.8rem)] text-text font-normal mb-3 leading-[1.1] tracking-[-0.02em]">
          {portfolioData.firstName}{' '}
          <em className="italic text-accent">{portfolioData.lastName}</em>
        </h1>

        <p className="text-[0.9rem] text-text-dim tracking-[0.04em] mb-4">
          {portfolioData.headline}
        </p>

        <div className="font-mono text-[0.88rem] text-text-muted mb-9 min-h-[1.5em] tracking-[0.02em]">
          <span>{currentText.substring(0, charIndex)}</span>
          <span className="text-accent animate-pulse">|</span>
        </div>

        <div className="flex gap-4 justify-center flex-wrap">
          <Button href="#projects" variant="primary">View My Work</Button>
          <Button href="#contact" variant="ghost">Get in Touch</Button>
        </div>
      </motion.div>

      <div className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted font-mono text-[0.65rem] tracking-[0.12em] uppercase z-10">
        <span>Scroll</span>
        <div className="w-px h-11 bg-gradient-to-b from-text-muted to-transparent animate-scroll-pulse" />
      </div>
    </section>
  )
}