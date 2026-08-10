'use client'

import { portfolioData } from '@/data/portfolio'
import { SectionHeading } from './ui/SectionHeading'
import { Reveal } from './ui/Reveal'
import { Button } from './ui/Button'
import { Download, Linkedin } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-[1200px] mx-auto px-10 max-md:px-5">
        <SectionHeading number="01" title="Turning complexity <em>into clarity</em>" accent="clarity" />

        <div className="grid grid-cols-[1fr_260px] gap-[72px] items-start max-lg:grid-cols-1 max-lg:gap-9">
          <div>
            <Reveal>
              <p className="text-[1.15rem] leading-[1.75] text-text mb-6 font-normal" dangerouslySetInnerHTML={{ __html: portfolioData.bio.lead }} />
            </Reveal>
            {portfolioData.bio.paragraphs.map((paragraph, index) => (
              <Reveal key={index} delay={index + 1}>
                <p className="text-text-dim text-base leading-[1.85] mb-5" dangerouslySetInnerHTML={{ __html: paragraph }} />
              </Reveal>
            ))}
            <Reveal delay={3}>
              <div className="flex flex-wrap gap-2 mt-2">
                {portfolioData.hobbies.map((hobby) => (
                  <span key={hobby} className="inline-block bg-surface border border-border px-3 py-1 rounded-full text-[0.8rem] text-text-dim hover:border-accent-mid transition-colors">{hobby}</span>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="flex flex-col gap-3 sticky top-24 max-lg:static max-lg:flex-row max-lg:flex-wrap">
            <Reveal delay={1} direction="right">
              <Button href={portfolioData.resumeUrl} variant="primary" className="w-full text-center max-lg:w-auto max-lg:flex-1 max-lg:min-w-[160px]" download>
                <Download size={16} /> Download Resume
              </Button>
            </Reveal>
            <Reveal delay={2} direction="right">
              <Button href={portfolioData.socialLinks[0].url} variant="ghost" className="w-full text-center max-lg:w-auto max-lg:flex-1 max-lg:min-w-[160px]" external>
                <Linkedin size={16} /> Connect on LinkedIn
              </Button>
            </Reveal>
            <Reveal delay={3} direction="right">
              <div className="bg-surface border border-border rounded-[10px] p-5 mt-1 w-full">
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="font-mono text-[0.75rem] text-text-muted uppercase tracking-[0.06em]">Based in</span>
                  <span className="text-[0.8rem] text-text-dim font-medium">{portfolioData.sidebar.location}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="font-mono text-[0.75rem] text-text-muted uppercase tracking-[0.06em]">Degree</span>
                  <div className="flex flex-col items-end gap-0.5">
                    <span className="text-[0.8rem] text-text-dim font-medium">{portfolioData.sidebar.degree}</span>
                    <span className="text-[0.75rem] text-text-muted">{portfolioData.sidebar.degreeSub}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="font-mono text-[0.75rem] text-text-muted uppercase tracking-[0.06em]">Focus</span>
                  <div className="flex flex-col items-end gap-0.5">
                    <span className="text-[0.8rem] text-text-dim font-medium">{portfolioData.sidebar.focus}</span>
                    <span className="text-[0.75rem] text-text-muted">{portfolioData.sidebar.focusSub}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-mono text-[0.75rem] text-text-muted uppercase tracking-[0.06em]">Status</span>
                  <span className="text-[0.8rem] text-accent font-medium">{portfolioData.sidebar.status}</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}