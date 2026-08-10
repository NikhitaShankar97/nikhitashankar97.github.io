'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { portfolioData } from '@/data/portfolio'
import { X, Send } from 'lucide-react'

const SYSTEM_PROMPT = `You are Nikhita's AI portfolio assistant. You help recruiters and visitors learn about Nikhita Shankar.

ABOUT NIKHITA:
- Name: Nikhita Shankar
- Role: Data Engineer & Analytics Professional
- Education: MS Business Analytics from UIUC, BE Computer Science from RVCE
- Current: Data Engineer at Obvience (Microsoft Fabric, Power BI, SQL Server)
- Previous: ExxonMobil (3 years), Hyperplane (acquired by Nubank), WorkGaze
- Skills: Python, R, SQL, Power BI, Tableau, AWS, Azure, Microsoft Fabric, Snowflake, Databricks, dbt, KNIME
- Projects: Clay Revenue Intelligence, First48 (1st place hackathon), UpNext (2nd place datathon), LLM Differential Diagnosis, Spotify Pipeline, Workforce Dashboard
- Awards: Beta Gamma Sigma, AWS Cloud Practitioner, ExxonMobil Bright Beginner, 1st Place Zerve Hackathon, 2nd Place ODSC Datathon
- Contact: nikhitashankar97@gmail.com | LinkedIn: linkedin.com/in/nikhita-shankar-analytics
- Status: Open to opportunities

Keep responses concise and professional. Highlight her technical skills and business impact. For hiring questions, emphasize she's a strong fit for Data Engineer, Analytics Engineer, BI Engineer, Data Scientist, and Product Analyst roles.`

function getLocalReply(query: string): string {
  const q = query.toLowerCase().trim()

  if (q.includes('role') || q.includes('fit') || q.includes('position'))
    return 'Nikhita is a strong fit for Data Engineer, Analytics Engineer, BI Engineer, Data Scientist, and Product Analyst roles. She has 5+ years building pipelines, dashboards, and AI systems at companies like ExxonMobil and Hyperplane.'
  if (q.includes('project') || q.includes('portfolio') || q.includes('work'))
    return 'Her standout projects: Clay Revenue Intelligence (Snowflake/dbt/Streamlit), First48 (1st place hackathon), UpNext (2nd place ODSC datathon), LLM Differential Diagnosis (GPT-4o/Gemini), Spotify Pipeline (AWS), and more. Check the Projects section on the site.'
  if (q.includes('skill') || q.includes('tech') || q.includes('tool') || q.includes('stack'))
    return 'Core stack: Python, R, SQL, Power BI, Tableau, Microsoft Fabric, AWS, Azure, Snowflake, Databricks, dbt, KNIME, GPT-4o, Gemini, and LLM evaluation.'
  if (q.includes('experience') || q.includes('work') || q.includes('background') || q.includes('career'))
    return '5+ years: Data Engineer at Obvience, previously Hyperplane (acquired by Nubank), ExxonMobil (3 years, won Bright Beginner award), plus capstone projects with Wolters Kluwer and Colorado West Healthcare.'
  if (q.includes('stand out') || q.includes('strength') || q.includes('why') || q.includes('hire') || q.includes('candidate'))
    return 'Nikhita combines deep data engineering with business impact. She built revenue intelligence platforms, won two hackathons (1st and 2nd place), published research, and worked at top companies. She turns complex data into clear decisions.'
  if (q.includes('contact') || q.includes('email') || q.includes('reach') || q.includes('linkedin'))
    return 'Email: nikhitashankar97@gmail.com | LinkedIn: linkedin.com/in/nikhita-shankar-analytics | Or use the contact form at the bottom of the page.'
  if (q.includes('education') || q.includes('degree') || q.includes('university') || q.includes('school'))
    return 'MS in Business Analytics from UIUC (Beta Gamma Sigma honor society) and BE in Computer Science from RV College of Engineering.'
  if (q.includes('award') || q.includes('hackathon') || q.includes('certification') || q.includes('honor'))
    return 'Awards: 1st Place Zerve x HackerEarth Hackathon, 2nd Place ODSC AI Datathon, ExxonMobil Bright Beginner Award, Beta Gamma Sigma, AWS Cloud Practitioner certified.'
  if (q.includes('resume') || q.includes('cv') || q.includes('download'))
    return 'Download her resume from the About section (top of the page) or the Resume button in the navigation bar.'

  return 'I can tell you about Nikhita\'s skills, projects, experience, awards, or how to contact her. What would you like to know?'
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
    'Tell me about her projects',
    'What makes her stand out?',
    'How do I contact her?',
  ]

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 300)
  }, [isOpen])

  const callAI = async (userMsg: string): Promise<string> => {
    const apiKey = process.env.NEXT_PUBLIC_DEEPSEEK_API_KEY
    
    console.log('API Key exists:', !!apiKey, 'Length:', apiKey?.length || 0)
    
    if (!apiKey || apiKey.length < 10) {
      console.log('No valid API key, using local fallback')
      return getLocalReply(userMsg)
    }
    
    try {
      const res = await fetch('https://api.deepseek.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'deepseek-chat',
          messages: [
            { role: 'system', content: SYSTEM_PROMPT },
            { role: 'user', content: userMsg },
          ],
          max_tokens: 250,
          temperature: 0.7,
        }),
      })

      console.log('DeepSeek status:', res.status)
      
      if (!res.ok) {
        const errText = await res.text()
        console.error('DeepSeek error:', errText)
        return getLocalReply(userMsg)
      }

      const data = await res.json()
      console.log('DeepSeek success')
      return data.choices?.[0]?.message?.content || getLocalReply(userMsg)
    } catch (err) {
      console.error('Fetch error:', err)
      return getLocalReply(userMsg)
    }
  }

  const sendMessage = async (text: string) => {
    if (!text.trim()) return
    setMessages(p => [...p, { role: 'user', content: text.trim() }])
    setInput('')
    setIsTyping(true)
    const reply = await callAI(text.trim())
    setMessages(p => [...p, { role: 'bot', content: reply }])
    setIsTyping(false)
  }

  return (
    <>
      <AnimatePresence>
        {!isOpen && (
          <motion.button className="fixed bottom-6 right-6 z-[1100] cursor-pointer" onClick={() => setIsOpen(true)} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.8 }} whileHover={{ y: -2 }}>
            <div className="flex items-center gap-2.5 bg-[#141418] border border-accent/25 rounded-full pl-2 pr-4 py-1.5 shadow-xl shadow-black/40 transition-all hover:border-accent hover:shadow-[0_0_24px_rgba(184,245,82,0.15)]">
              <div className="w-[30px] h-[30px] rounded-full bg-gradient-to-br from-accent to-[#52f5a8] flex items-center justify-center font-mono text-[10px] font-bold text-[#0a0a0a]">AI</div>
              <div className="flex flex-col gap-px text-left"><span className="text-[0.78rem] font-semibold text-white leading-none">Ask Nikhita</span><span className="text-[0.65rem] text-zinc-500 font-mono">AI Assistant</span></div>
              <div className="w-[7px] h-[7px] bg-accent rounded-full animate-pulse" />
            </div>
          </motion.button>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isOpen && (
          <motion.div className="fixed bottom-6 right-6 w-[400px] max-h-[550px] bg-[#0f0f0f] border border-white/[0.06] rounded-2xl z-[1099] flex flex-col overflow-hidden shadow-2xl max-md:right-3 max-md:left-3 max-md:w-auto" initial={{ opacity: 0, y: 16, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 16, scale: 0.96 }}>
            <div className="flex items-center justify-between px-4 py-3.5 border-b border-white/[0.06] bg-[#111]">
              <div className="flex items-center gap-3"><div className="w-9 h-9 rounded-full bg-gradient-to-br from-accent to-[#52f5a8] flex items-center justify-center font-mono text-[11px] font-bold text-[#0a0a0a]">AI</div><div><div className="text-sm font-semibold text-white">Nikhita's AI Assistant</div><div className="text-[0.65rem] text-zinc-500 font-mono flex items-center gap-1.5 mt-0.5"><span className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />Always ready</div></div></div>
              <button onClick={() => setIsOpen(false)} className="text-zinc-500 hover:text-white"><X size={16} /></button>
            </div>
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 min-h-0">
              {messages.map((msg, i) => (
                <div key={i} className={`flex gap-2 ${msg.role === 'user' ? 'justify-end' : ''}`}>
                  {msg.role === 'bot' && <div className="w-6 h-6 rounded-full bg-gradient-to-br from-accent to-[#52f5a8] flex items-center justify-center font-mono text-[7px] font-bold text-[#0a0a0a] flex-shrink-0 mt-1">AI</div>}
                  <div className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl text-sm leading-relaxed ${msg.role === 'bot' ? 'bg-[#161616] border border-white/[0.06] text-zinc-300 rounded-tl-sm' : 'bg-accent/10 border border-accent/20 text-white rounded-tr-sm'}`}>{msg.content}</div>
                </div>
              ))}
              {isTyping && (
                <div className="flex gap-2"><div className="w-6 h-6 rounded-full bg-gradient-to-br from-accent to-[#52f5a8] flex items-center justify-center font-mono text-[7px] font-bold text-[#0a0a0a] mt-1">AI</div><div className="bg-[#161616] border border-white/[0.06] px-4 py-3 rounded-2xl rounded-tl-sm"><div className="flex gap-1.5"><span className="w-1.5 h-1.5 bg-zinc-600 rounded-full animate-bounce" /><span className="w-1.5 h-1.5 bg-zinc-600 rounded-full animate-bounce" style={{animationDelay:'0.15s'}} /><span className="w-1.5 h-1.5 bg-zinc-600 rounded-full animate-bounce" style={{animationDelay:'0.3s'}} /></div></div></div>
              )}
              {messages.length === 1 && (
                <div className="mt-2"><div className="text-[0.6rem] font-mono tracking-[0.12em] uppercase text-zinc-600 mb-2">Try asking</div><div className="flex flex-wrap gap-1.5">{suggestions.map((s, i) => (<button key={i} onClick={() => sendMessage(s)} className="bg-[#111] border border-accent/20 text-accent/80 text-xs px-3 py-1.5 rounded-full font-medium hover:bg-accent/10 transition-all">{s}</button>))}</div></div>
              )}
              <div ref={messagesEndRef} />
            </div>
            <div className="flex gap-2 items-center px-3.5 py-3 border-t border-white/[0.06] bg-[#111]">
              <input ref={inputRef} type="text" value={input} onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && sendMessage(input)} placeholder="Ask anything about Nikhita..." className="flex-1 bg-[#1a1a1a] border border-white/[0.08] rounded-xl px-3.5 py-2.5 text-sm text-white outline-none focus:border-accent/30 placeholder:text-zinc-600 min-w-0" />
              <button onClick={() => sendMessage(input)} className="w-9 h-9 bg-accent rounded-xl flex items-center justify-center hover:bg-[#caff64] transition-all active:scale-95"><Send size={14} className="text-[#0a0a0a]" /></button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}