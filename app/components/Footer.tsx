'use client'

import { portfolioData } from '@/data/portfolio'
import { Linkedin, Github, Mail } from 'lucide-react'

export function Footer() {
  const iconMap: Record<string, React.ReactNode> = {
    LinkedIn: <Linkedin size={18} />,
    GitHub: <Github size={18} />,
    Email: <Mail size={18} />,
  }

  return (
    <footer className="bg-bg border-t border-border py-7">
      <div className="max-w-[1200px] mx-auto px-10 max-md:px-5 flex items-center justify-between max-md:flex-col max-md:gap-2.5 max-md:text-center">
        <span className="font-mono text-base font-bold">
          {portfolioData.initials}<span className="text-accent">.</span>
        </span>
        <span className="text-[0.78rem] text-text-muted">
          © {new Date().getFullYear()} {portfolioData.name}
        </span>
        <div className="flex items-center gap-4">
          {portfolioData.socialLinks.map((link) => (
            <a
              key={link.platform}
              href={link.url}
              target={link.platform !== 'Email' ? '_blank' : undefined}
              rel={link.platform !== 'Email' ? 'noopener noreferrer' : undefined}
              className="text-lg text-text-dim hover:text-accent transition-colors"
              aria-label={link.platform}
            >
              {iconMap[link.platform] || <i className={link.icon} />}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}