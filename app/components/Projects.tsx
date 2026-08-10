'use client'

import { motion } from 'framer-motion'
import { portfolioData } from '@/data/portfolio'

const badgeStyles: Record<string, string> = {
  default: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  hackathon: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
  winner: 'bg-gradient-to-r from-yellow-500/15 to-amber-500/10 text-yellow-400 border-yellow-500/30 shadow-[0_0_20px_rgba(255,215,0,0.1)]',
  silver: 'bg-zinc-400/10 text-zinc-300 border-zinc-400/20',
  flagship: 'bg-accent/10 text-accent border-accent/20 shadow-[0_0_20px_rgba(184,245,82,0.08)]',
}

export function Projects() {
  const { featuredProjects, otherProjects } = portfolioData

  return (
    <section id="projects" className="section-padding bg-[#0c0c10]">
      <div className="max-w-[1200px] mx-auto px-8 max-md:px