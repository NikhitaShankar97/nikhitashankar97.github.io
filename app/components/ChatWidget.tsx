'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { portfolioData } from '@/data/portfolio'
import { X, Send } from 'lucide-react'

function getLocalReply(query: string): string {
  const q = query.toLowerCase().trim()
  const contactLine = `You can reach Nikhita at <a href="mailto:${portfolioData.email}" class="text-accent hover:underline">${portfolioData.email}</a> or on <a href="${portfolioData.socialLinks[0].url}" target="_blank" class="text-accent hover:underline">LinkedIn</a>.`

  if (q.includes('role') || q.includes('fit') || q.includes('position')) {
    return 'Nikhita is a strong fit for Data Engineer, Data Scientist, Analytics Engineer, BI Engineer, Data Analyst, and Product Analyst roles. ' + contactLine
  }
  if (q.includes('hire') || q.includes('candidate') || q.includes('why')) {
    return 'Nikhita combines hands-on data engineering, BI, data science, and applied AI experience with the ability to turn messy data into clear business decisions. ' + contactLine
  }
  if (q.includes('skill') || q.includes('tech') || q.includes('stack') || q.includes('tool')) {
    return 'Her core stack includes SQL, Python, R, Power BI, Tableau, Microsoft Fabric, AWS, Azure, Snowflake, Databricks, dbt, GPT-4o, Gemini, and more.'
  }
  if (q.includes('project') || q.includes('portfolio') || q.includes('work')) {
    return 'Her featured projects include Clay Revenue Intelligence (Snowflake/dbt/Streamlit), First48 (1st place hackathon), UpNext (2nd place datathon), and more. Check the Projects section!'
  }
  if (q.includes('experience') || q.includes('worked') || q.includes('background')) {
    return 'Nikhita has 5+ years of experience across Obvience, Hyperplane (acquired by Nubank), ExxonMobil, and industry capstones.'
  }
  if (q.includes('contact') || q.includes('email') || q.includes('reach')) {
    return contactLine
  }
  return `I can tell you about Nikhita's skills, projects, experience, or how to contact her. What would you like to know?`
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{ role: 'bot' | 'user'; content: string }[]>([
    { role: 'bot', content: "Hey! I'm Nikhita's AI assistant. Ask me anything about her background, skills, or projects." },
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const suggestions = [
    'What roles is she a fit for?',
    'What does she specialize in?',
    'Tell me about her projects',
    'How do I contact her?',
  ]

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 300)
  }, [isOpen])

  const sendMessage = (text: string) => {
    if (!text.trim()) return
    setMessages((prev) => [...prev, { role: 'user', content: text.trim() }])
    setInput('')
    setIsTyping(true)
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: 'bot', content: getLocalReply(text.trim()) }])
      setIsTyping(false)
    }, 500)
  }

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            className="fixed bottom-6 right-6 z-[1100] cursor-pointer"
            onClick={() => setIsOpen(true)}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ y: -2 }}
            aria-label="Chat with AI assistant"
          >
            <div className="flex items-center gap-2.5 bg-surface border border-accent-mid rounded-full pl-2 pr-4 py-1.5 shadow-lg transition-all hover:border-accent">
              <div className="w-[30px] h-[30px] rounded-full bg-gradient-to-br from-accent to-[#52f5a8] flex items-center justify-center font-mono text-[10px] font-bold text-bg flex-shrink-0">
                {portfolioData.initials}
              </div>
              <div className="flex flex-col gap-px">
                <span className="text-[0.78rem] font-semibold text-text leading-none">Ask Nikhita</span>
                <span className="text-[0.65rem] text-text-muted font-mono">AI assistant</span>
              </div>
              <div className="w-[7px] h-[7px] bg-accent rounded-full flex-shrink-0 animate-pulse-dot" />
            </div>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-6 right-6 w-[380px] max-h-[calc(100vh-124px)] bg-[#0f0f0f] border border-accent-mid rounded-2xl z-[1099] flex flex-col overflow-hidden shadow-2xl max-md:right-3 max-md:left-3 max-md:w-auto"
            initial={{ opacity: 0, y: 12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center justify-between px-4 py-3.5 border-b border-border bg-[#111] flex-shrink-0">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-accent to-[#52f5a8] flex items-center justify-center font-mono text-[11px] font-bold text-bg">
                  {portfolioData.initials}
                </div>
                <div>
                  <div className="text-[0.83rem] font-semibold text-text">Ask Nikhita</div>
                  <div className="text-[0.68rem] text-text-muted font-mono flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse-dot" />
                    AI assistant
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="bg-none border border-border text-text-muted w-7 h-7 rounded-full flex items-center justify-center hover:bg-surface-2 hover:text-text transition-all">
                <X size={14} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3.5 min-h-0">
              {messages.map((msg, i) => (
                <div key={i} className={`flex gap-2 items-end ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  {msg.role === 'bot' && (
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-accent to-[#52f5a8] flex items-center justify-center font-mono text-[8px] font-bold text-bg flex-shrink-0">
                      {portfolioData.initials}
                    </div>
                  )}
                  <div
                    className={`max-w-[82%] px-3 py-2.5 rounded-2xl text-[0.84rem] leading-[1.6] ${
                      msg.role === 'bot'
                        ? 'bg-[#161616] border border-border text-[#ccc] rounded-bl'
                        : 'bg-accent-dim border border-accent-mid text-text rounded-br'
                    }`}
                    dangerouslySetInnerHTML={{ __html: msg.content }}
                  />
                </div>
              ))}
              {isTyping && (
                <div className="flex gap-2 items-end">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-accent to-[#52f5a8] flex items-center justify-center font-mono text-[8px] font-bold text-bg">NS</div>
                  <div className="bg-[#161616] border border-border px-3 py-2.5 rounded-2xl rounded-bl">
                    <div className="flex gap-1">
                      <span className="w-1.5 h-1.5 bg-[#555] rounded-full animate-bounce" />
                      <span className="w-1.5 h-1.5 bg-[#555] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                      <span className="w-1.5 h-1.5 bg-[#555] rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                    </div>
                  </div>
                </div>
              )}
              {messages.length === 1 && (
                <div className="mt-1">
                  <div className="font-mono text-[0.6rem] tracking-[0.12em] uppercase text-text-muted mb-2">Try asking</div>
                  <div className="flex flex-wrap gap-1.5">
                    {suggestions.map((sug, i) => (
                      <button key={i} onClick={() => sendMessage(sug)} className="bg-[#111] border border-accent-mid text-accent text-[0.72rem] px-3 py-1.5 rounded-full font-medium hover:bg-accent-dim transition-all">
                        {sug}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="flex gap-2 items-center px-3.5 py-3 border-t border-border bg-[#111] flex-shrink-0">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && sendMessage(input)}
                placeholder="Ask anything about Nikhita..."
                className="flex-1 bg-[#1a1a1a] border border-border rounded-[10px] px-3.5 py-2.5 text-text text-[0.83rem] outline-none focus:border-accent-mid placeholder:text-[#3a3a3a] min-w-0"
              />
              <button onClick={() => sendMessage(input)} className="w-[34px] h-[34px] bg-accent border-none rounded-[9px] flex items-center justify-center flex-shrink-0 hover:bg-[#caff64] transition-all">
                <Send size={15} className="text-bg" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}