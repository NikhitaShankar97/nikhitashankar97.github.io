'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { portfolioData } from '@/data/portfolio'
import { Quote, Play, Pause, Video } from 'lucide-react'

export function Testimonials() {
  if (!portfolioData.testimonials || portfolioData.testimonials.length === 0) return null

  return (
    <section className="section-padding bg-[#08080c]">
      <div className="max-w-[1200px] mx-auto px-8 max-md:px-5">
        <p className="font-mono text-xs tracking-[0.2em] uppercase text-accent mb-4">Testimonials</p>
        <h2 className="font-display text-[clamp(2rem,4vw,2.8rem)] leading-[1.15] tracking-[-0.02em] text-white font-normal mb-10">
          What people <em className="italic text-accent">say</em>
        </h2>

        <div className="grid grid-cols-2 gap-4 max-lg:grid-cols-1">
          {portfolioData.testimonials.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial: t, index }: { testimonial: typeof portfolioData.testimonials[0], index: number }) {
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const toggleVideo = () => {
    if (!videoRef.current) return
    if (playing) {
      videoRef.current.pause()
      setPlaying(false)
    } else {
      videoRef.current.play()
      setPlaying(true)
    }
  }

  const isVideoOnly = t.video && !t.quote

  return (
    <motion.div
      className="glass-card p-6 flex flex-col gap-4 relative"
      initial={{ opacity: 0, y: 20, rotate: index % 2 === 0 ? -0.3 : 0.3 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      whileHover={{ scale: 1.01 }}
    >
      {!isVideoOnly && <Quote size={20} className="text-accent/30 flex-shrink-0" />}

      {/* Video card */}
      {t.video && (
        <div className="relative rounded-xl overflow-hidden bg-black/40 group cursor-pointer" onClick={toggleVideo}>
          <video
            ref={videoRef}
            src={t.video}
            className="w-full aspect-video object-cover"
            playsInline
            preload="metadata"
            onEnded={() => setPlaying(false)}
            onError={() => console.log('Video failed to load:', t.video)}
          />
          {!playing && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-all">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center shadow-lg shadow-accent/30 group-hover:scale-110 transition-transform">
                <Play size={28} className="text-[#0a0a0a] ml-1.5" />
              </div>
              {isVideoOnly && (
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <p className="text-white text-sm font-medium drop-shadow-lg">Video Testimonial</p>
                </div>
              )}
            </div>
          )}
          {playing && (
            <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-10 h-10 rounded-full bg-black/60 flex items-center justify-center">
                <Pause size={16} className="text-white" />
              </div>
            </div>
          )}
        </div>
      )}

      {/* Quote text */}
      {t.quote && <p className="text-sm text-zinc-300 leading-relaxed flex-1">{t.quote}</p>}

      {/* Author */}
      <div className="flex items-center gap-3 pt-3 border-t border-white/[0.05]">
        {t.image && (
          <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full object-cover border border-white/[0.08] flex-shrink-0" />
        )}
        {!t.image && (
          <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-sm flex-shrink-0">
            {t.name.charAt(0)}
          </div>
        )}
        <div>
          <p className="text-sm font-semibold text-white">{t.name}</p>
          <p className="text-xs text-zinc-500">{t.role}, {t.company}</p>
        </div>
      </div>
    </motion.div>
  )
}