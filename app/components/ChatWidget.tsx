'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { portfolioData } from '@/data/portfolio'
import { X, Send, Sparkles } from 'lucide-react'

const SYSTEM_PROMPT = `You are Nikhita Shankar's AI portfolio assistant. You help recruiters learn about her quickly.

ABOUT NIKHITA:
- Role: Data Engineer & Analytics Professional (5+ years)
- Current: Obvience (Microsoft Fabric, Power BI, SQL Server, agentic AI pipelines)
- Previous: Hyperplane (acquired by Nubank), ExxonMobil (3 years), WorkGaze, Wolters Kluwer, Colorado West Healthcare
- Education: MS Business Analytics, UIUC (3.96 GPA) | BE Computer Science, RVCE
- Key skills: Python, R, SQL, Power BI, Tableau, Microsoft Fabric, Snowflake, dbt, Databricks, AWS, Azure, LLMs, Prompt Engineering, A/B Testing, Statistical Modeling
- Projects: Clay Revenue Intelligence (Snowflake/dbt/Streamlit), First48 (1st place hackathon), UpNext (2nd place datathon), LLM Differential Diagnosis, AWS Analytics Pipeline, Workforce Insights Dashboard
- Awards: 1st Place Zerve x HackerEarth Hackathon, 2nd Place ODSC AI Datathon, ExxonMobil Bright Beginner, Beta Gamma Sigma, AWS Cloud Practitioner
- Contact: nikhitashankar97@gmail.com | LinkedIn: linkedin.com/in/nikhita-shankar-analytics
- Status: Open to opportunities | Bay Area, CA | Open to relocation

RULES:
- Keep responses to 2-3 sentences maximum
- Do NOT use markdown formatting like **bold** or *italic*
- Be warm, professional, and concise
- When asked about hiring: mention she fits Data Engineer, Analytics Engineer, BI Engineer, and Data Scientist roles
- When sharing contact info, write: Email: nikhitashankar97@gmail.com | LinkedIn: linkedin.com/in/nikhita-shankar-analytics
- Focus on what recruiters care about: tools, impact, company caliber, end-to-end capability`

function getLocalReply(query: string): string {
  const q = query.toLowerCase().trim()
  if (q.includes('role') || q.includes('fit')) return 'Nikhita is a strong fit for Data Engineer, Analytics Engineer, BI Engineer, and Data Scientist roles. She has 5+ years building pipelines and dashboards at ExxonMobil, Hyperplane (acquired by Nubank), and now Obvience.'
  if (q.includes('project')) return 'Her standout projects: Clay Revenue Intelligence (Snowflake/dbt/Streamlit), First48 (1st place hackathon, AUC 0.98), UpNext (2nd place ODSC datathon), LLM Differential Diagnosis, and more. Check the Projects section!'
  if (q.includes('skill') || q.includes('tech') || q.includes('stack') || q.includes('tool')) return 'Core stack: Python, R, SQL, Power BI, Tableau, Microsoft Fabric, Snowflake, dbt, Databricks, AWS, Azure, Airflow, LLMs, A/B Testing, Statistical Modeling.'
  if (q.includes('experience') || q.includes('work') || q.includes('background')) return '5+ years: Data Engineer at Obvience, previously Hyperplane (acquired by Nubank), ExxonMobil (3 years, $1M+/month savings), plus capstone projects with Wolters Kluwer and Colorado West Healthcare.'
  if (q.includes('stand out') || q.includes('strength') || q.includes('hire') || q.includes('why')) return 'Nikhita combines deep data engineering with real business impact. $1M+/month savings at ExxonMobil, fintech infrastructure that survived acquisition, and two global hackathon wins. She turns data into decisions.'
  if (q.includes('contact') || q.includes('email') || q.includes('reach') || q.includes('linkedin')) return 'Email: nikhitashankar97@gmail.com | LinkedIn: linkedin.com/in/nikhita-shankar-analytics | Or use the contact form at the bottom of the page.'
  if (q.includes('education') || q.includes('degree')) return 'MS in Business Analytics from UIUC (3.96 GPA, Beta Gamma Sigma) and BE in Computer Science from RV College of Engineering.'
  if (q.includes('award') || q.includes('hackathon') || q.includes('certification')) return '1st Place Zerve x HackerEarth Hackathon, 2nd Place ODSC AI Datathon, ExxonMobil Bright Beginner Award, Beta Gamma Sigma, AWS Cloud Practitioner certified.'
  if (q.includes('resume') || q.includes('cv')) return 'Download her resume from the About section or the Resume button in the navigation bar. It is also available at the top of the page.'
  if (q.includes('location') || q.includes('based') || q.includes('where') || q.includes('relocate')) return 'Nikhita is based in the Bay Area, CA and is open to relocation across the US.'
  return 'I can tell you about Nikhita\'s skills, projects, experience, awards, or how to contact her. What would you like to know?'
}

function stripMarkdown(text: string): string {
  return text
    .replace(/\*\*(.*?)\*\*/g, '$1')
    .replace(/\*(.*?)\*/g, '$1')
    .replace(/`(.*?)`/g, '$1')
    .replace(/#{1,6}\s/g, '')
}

function linkify(text: string): string {
  if (text.includes('<a href=')) return text
  text = text.replace(/([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/g, '<a href="mailto:$1" class="text-accent hover:underline">$1</a>')
  text = text.replace(/https?:\/\/linkedin\.com\/[^\s.,]+/g, '<a href="$&" target="_blank" rel="noopener noreferrer" class="text-accent hover:underline">LinkedIn</a>')
  text = text.replace(/linkedin\.com\/[^\s.,]+/g, '<a href="https://$&" target="_blank" rel="noopener noreferrer" class="text-accent hover:underline">LinkedIn</a>')
  text = text.replace(/(https?:\/\/[^\s.,]+)/g, '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-accent hover:underline">$1</a>')
  return text
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<{ role: 'bot' | 'user'; content: string }[]>([
    { role: 'bot', content: "Hi! I'm Nikhita's AI assistant. Ask me about her skills, experience, or whether she'd be a fit for your team." },
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const suggestions = [
    'What roles is she a fit for?',
    'Tell me about her projects',
    'What\'s her tech stack?',
    'How do I contact her?',
  ]

  useEffect(() => { messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' }) }, [messages])
  useEffect(() => { if (isOpen) setTimeout(() => inputRef.current?.focus(), 300) }, [isOpen])

  const callAI = async (userMsg: string): Promise<string> => {
    const apiKey = process.env.NEXT_PUBLIC_DEEPSEEK_API_KEY
    if (!apiKey || apiKey.length < 10) return getLocalReply(userMsg)
    try {
      const res = await fetch('https://api.deepseek.com/v1/chat/completions', {
        method: 'POST', headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + apiKey },
        body: JSON.stringify({ model: 'deepseek-chat', messages: [{ role: 'system', content: SYSTEM_PROMPT }, { role: 'user', content: userMsg }], max_tokens: 150, temperature: 0.7 }),
      })
      if (!res.ok) return getLocalReply(userMsg)
      const data = await res.json()
      return data.choices?.[0]?.message?.content || getLocalReply(userMsg)
    } catch { return getLocalReply(userMsg) }
  }

  const sendMessage = async (text: string) => {
    if (!text.trim()) return
    setHasInteracted(true)
    setMessages(p => [...p, { role: 'user', content: text.trim() }])
    setInput('')
    setIsTyping(true)
    const reply = await callAI(text.trim())
    const cleanReply = stripMarkdown(reply)
    setMessages(p => [...p, { role: 'bot', content: linkify(cleanReply) }])
    setIsTyping(false)
  }

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            className="fixed bottom-6 right-6 z-[1100] cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.div className="animate-bounce-attention" onClick={() => setIsOpen(true)}>
              <div className="glass-card px-5 py-4 flex items-center gap-4 min-w-[320px] max-w-[360px] shadow-2xl shadow-black/50 hover:border-accent/30 transition-all cursor-pointer group">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent to-[#52f5a8] flex items-center justify-center flex-shrink-0 shadow-lg shadow-accent/20">
                  <Sparkles size={18} className="text-[#0a0a0a]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold text-white leading-tight">Ask About Nikhita</div>
                  <div className="text-xs text-zinc-400 font-mono mt-0.5">Instant answers about her work</div>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-6 right-6 w-[420px] max-h-[580px] bg-[#0e0e14] border border-white/[0.06] rounded-2xl z-[1099] flex flex-col overflow-hidden shadow-2xl shadow-black/60 max-md:right-3 max-md:left-3 max-md:w-auto"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex items-center justify-between px-5 py-4 border-b border-white/[0.05] bg-[#111116] flex-shrink-0">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-[#52f5a8] flex items-center justify-center shadow-lg shadow-accent/15">
                  <Sparkles size={16} className="text-[#0a0a0a]" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Ask About Nikhita</div>
                  <div className="text-[0.65rem] text-zinc-500 font-mono flex items-center gap-1.5 mt-0.5">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse-glow" />AI Assistant
                  </div>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-zinc-500 hover:text-white transition-colors p-1"><X size={16} /></button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 min-h-0">
              {messages.map((msg, i) => (
                <div key={i} className={`flex gap-2 ${msg.role === 'user' ? 'justify-end' : ''}`}>
                  {msg.role === 'bot' && (
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-accent to-[#52f5a8] flex items-center justify-center flex-shrink-0 mt-1 shadow-sm shadow-accent/10">
                      <Sparkles size={10} className="text-[#0a0a0a]" />
                    </div>
                  )}
                  <div
                    className={`max-w-[82%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${msg.role === 'bot' ? 'bg-[#16161a] border border-white/[0.04] text-zinc-300 rounded-tl-sm' : 'bg-accent/10 border border-accent/20 text-white rounded-tr-sm'}`}
                    dangerouslySetInnerHTML={{ __html: msg.content }}
                  />
                </div>
              ))}
              {isTyping && (
                <div className="flex gap-2">
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-accent to-[#52f5a8] flex items-center justify-center flex-shrink-0 mt-1"><Sparkles size={10} className="text-[#0a0a0a]" /></div>
                  <div className="bg-[#16161a] border border-white/[0.04] px-4 py-3 rounded-2xl rounded-tl-sm">
                    <div className="flex gap-1.5"><span className="w-1.5 h-1.5 bg-zinc-600 rounded-full animate-bounce" /><span className="w-1.5 h-1.5 bg-zinc-600 rounded-full animate-bounce" style={{animationDelay:'0.15s'}} /><span className="w-1.5 h-1.5 bg-zinc-600 rounded-full animate-bounce" style={{animationDelay:'0.3s'}} /></div>
                  </div>
                </div>
              )}
              {!hasInteracted && (
                <div className="mt-2">
                  <div className="text-[0.6rem] font-mono tracking-[0.12em] uppercase text-zinc-600 mb-2 px-1">Recruiters often ask</div>
                  <div className="flex flex-wrap gap-1.5">
                    {suggestions.map((s, i) => (
                      <button key={i} onClick={() => sendMessage(s)} className="bg-[#111] border border-accent/15 text-accent/80 text-xs px-3 py-1.5 rounded-full font-medium hover:bg-accent/8 hover:text-accent transition-all">{s}</button>
                    ))}
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <div className="flex gap-2 items-center px-4 py-3 border-t border-white/[0.05] bg-[#111116] flex-shrink-0">
              <input ref={inputRef} type="text" value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && sendMessage(input)} placeholder="Ask anything about Nikhita..." className="flex-1 bg-[#1a1a1f] border border-white/[0.06] rounded-xl px-4 py-2.5 text-sm text-white outline-none focus:border-accent/30 placeholder:text-zinc-600 min-w-0 transition-all" />
              <button onClick={() => sendMessage(input)} className="w-9 h-9 bg-accent rounded-xl flex items-center justify-center hover:bg-[#caff64] transition-all active:scale-95 flex-shrink-0"><Send size={14} className="text-[#0a0a0a]" /></button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}