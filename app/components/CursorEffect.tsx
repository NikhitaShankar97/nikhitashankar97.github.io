'use client'

import { useEffect, useState, useCallback } from 'react'
import { motion, useSpring, useMotionValue } from 'framer-motion'

export function CursorEffect() {
  const [isEnabled, setIsEnabled] = useState(false)
  const [isPointer, setIsPointer] = useState(false)

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  const followerX = useSpring(cursorX, { damping: 25, stiffness: 250 })
  const followerY = useSpring(cursorY, { damping: 25, stiffness: 250 })

  const checkCapability = useCallback(() => {
    const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    setIsEnabled(hasFinePointer && !isTouchDevice)
  }, [])

  useEffect(() => {
    checkCapability()
    if (!isEnabled) return
    document.body.classList.add('custom-cursor-active')

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
      const target = e.target as HTMLElement
      setIsPointer(
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.closest('a') !== null ||
        target.closest('button') !== null
      )
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.body.classList.remove('custom-cursor-active')
    }
  }, [isEnabled, checkCapability, cursorX, cursorY])

  if (!isEnabled) return null

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-[7px] h-[7px] bg-accent rounded-full pointer-events-none z-[9999]"
        style={{ x: cursorX, y: cursorY, translateX: '-50%', translateY: '-50%' }}
        animate={{ scale: isPointer ? 1.5 : 1 }}
        transition={{ duration: 0.15 }}
      />
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{ x: followerX, y: followerY, translateX: '-50%', translateY: '-50%' }}
        animate={{ width: isPointer ? 40 : 28, height: isPointer ? 40 : 28 }}
        transition={{ duration: 0.2 }}
      >
        <div className="w-full h-full rounded-full border-[1.5px] border-accent-mid" />
      </motion.div>
    </>
  )
}