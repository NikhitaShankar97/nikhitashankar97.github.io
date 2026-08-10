'use client'

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { portfolioData } from '@/data/portfolio'
import { Search, Download, ExternalLink, Mail } from 'lucide-react'

interface Command {
  id: string
  label: string
  description: string
  icon: React.ReactNode
  action: () => void
}

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)

  const commands: Command[] = [
    { id: 'about', label: 'Go to About', description: 'Jump to About section', icon: '📄', action: () => { window.location.hash = '#about'; setIsOpen(false) } },
    { id: 'skills', label: 'Go to Skills', description: 'View technical toolkit', icon: '📄', action: () => { window.location.hash = '#skills'; setIsOpen(false) } },
    { id: 'experience', label: 'Go to Experience', description: 'View work history', icon: '📄', action: () => { window.location.hash = '#experience'; setIsOpen(false) } },
    { id: 'projects', label: 'Go to Projects', description: 'View portfolio projects', icon: '📄', action: () => { window.location.hash = '#projects'; setIsOpen(false) } },
    { id: 'contact', label: 'Go to Contact', description: 'Get in touch', icon: '📄', action: () => { window.location.hash = '#contact'; setIsOpen(false) } },
    { id: 'resume', label: 'Download Resume', description: 'Get the latest resume', icon: '📥', action: () => { window.open(portfolioData.resumeUrl, '_blank'); setIsOpen(false) } },
    { id: 'email', label: 'Send Email', description: `Email ${portfolioData.email}`, icon: '✉️', action: () => { window.location.href = `mailto:${portfolioData.email}`; setIsOpen(false) } },
    { id: 'linkedin', label: 'Open LinkedIn', description: 'View LinkedIn profile', icon: '🔗', action: () => { window.open(portfolioData.socialLinks[0].url, '_blank'); setIsOpen(false) } },
    { id: 'github', label: 'Open GitHub', description: 'View GitHub profile', icon: '🔗', action: () => { window.open(portfolioData.socialLinks[1].url, '_blank'); setIsOpen(false) } },
  ]

  const filteredCommands = query
    ? commands.filter(cmd => cmd.label.toLowerCase().includes(query.toLowerCase()) || cmd.description.toLowerCase().includes(query.toLowerCase()))
    : commands

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault()
      setIsOpen(prev => !prev)
      setQuery('')
      setSelectedIndex(0)
      return
    }
    if (!isOpen) return
    if (e.key === 'Escape') setIsOpen(false)
    else if (e.key === 'ArrowDown') { e.preventDefault(); setSelectedIndex(prev => Math.min(prev + 1, filteredCommands.length - 1)) }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setSelectedIndex(prev => Math.max(prev - 1, 0)) }
    else if (e.key === 'Enter') { e.preventDefault(); filteredCommands[selectedIndex]?.action() }
  }, [isOpen, selectedIndex, filteredCommands])

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[3000]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsOpen(false)} />
          <motion.div
            className="fixed top-[20%] left-1/2 -translate-x-1/2 w-full max-w-[520px] bg-surface border border-border rounded-2xl shadow-2xl z-[3001] overflow-hidden"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center gap-3 px-5 py-4 border-b border-border">
              <Search size={18} className="text-text-muted flex-shrink-0" />
              <input
                type="text"
                value={query}
                onChange={(e) => { setQuery(e.target.value); setSelectedIndex(0) }}
                placeholder="Type a command or search..."
                className="flex-1 bg-transparent border-none outline-none text-text text-[0.9rem] placeholder:text-text-muted"
                autoFocus
              />
              <kbd className="font-mono text-[0.65rem] text-text-muted bg-surface-2 px-2 py-1 rounded border border-border">ESC</kbd>
            </div>
            <div className="max-h-[320px] overflow-y-auto p-2">
              {filteredCommands.length === 0 ? (
                <div className="text-center py-8 text-text-muted text-sm">No results found</div>
              ) : (
                filteredCommands.map((cmd, index) => (
                  <button
                    key={cmd.id}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-150 ${index === selectedIndex ? 'bg-accent-dim text-accent' : 'text-text-dim hover:bg-surface-2'}`}
                    onClick={() => cmd.action()}
                    onMouseEnter={() => setSelectedIndex(index)}
                  >
                    <span className="flex-shrink-0">{cmd.icon}</span>
                    <div>
                      <div className="text-sm font-medium">{cmd.label}</div>
                      <div className="text-xs text-text-muted">{cmd.description}</div>
                    </div>
                  </button>
                ))
              )}
            </div>
            <div className="flex items-center gap-4 px-5 py-3 border-t border-border text-[0.65rem] text-text-muted font-mono">
              <span>↑↓ Navigate</span>
              <span>↵ Select</span>
              <span>Esc Close</span>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}