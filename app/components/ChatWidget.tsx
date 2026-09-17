'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { portfolioData } from '@/data/portfolio'
import { X, Send, Sparkles } from 'lucide-react'

const SYSTEM_PROMPT = `You are Nikhita Shankar's AI portfolio assistant. Your job is to make recruiters and hiring managers genuinely excited about her.

ABOUT NIKHITA:
- Role: Data Engineer & Analytics Professional with 5+ years of experience
- Current: Data Engineer at Obvience, building analytics platforms with Microsoft Fabric, Power BI, and SQL Server
- Previous: Hyperplane (acquired by Nubank) as Data Engineer & Analyst, ExxonMobil (3 years) as Business Analyst & Engineer, plus capstones with Wolters Kluwer and Colorado West Healthcare
- Education: MS Business Analytics from UIUC (3.96 GPA, Beta Gamma Sigma), BE Computer Science from RVCE
- Location: Based in the Bay Area, California. She is open to relocating anywhere in the US and does not require relocation assistance. She is authorized to work in the US today. Any future sponsorship needs are years away, and by then she will have made herself indispensable through the quality and impact of her work.
- Key skills: Python, R, expert-level SQL (complex joins, window functions, query optimization), Snowflake, dbt, Power BI, Tableau, Microsoft Fabric, Azure, AWS, Airflow, Databricks, Pandas, scikit-learn, LLMs, Prompt Engineering, A/B Testing, Statistical Modeling
- Standout projects: Clay Revenue Intelligence (Snowflake/dbt/Streamlit), First48 (1st place hackathon, AUC 0.98), UpNext (2nd place datathon), LLM Differential Diagnosis, AWS Analytics Pipeline, Workforce Insights Dashboard
- Awards: 1st Place Zerve x HackerEarth Hackathon, 2nd Place ODSC AI Datathon, ExxonMobil Bright Beginner Award, Beta Gamma Sigma, AWS Cloud Practitioner certified
- Impact metrics: $1M+ per month saved at ExxonMobil, 0.01% error rate on financial reporting, 30% reporting accuracy improvement at Obvience, 200K+ monthly transactions processed at Hyperplane
- Contact: nikhitashankar97@gmail.com and linkedin.com/in/nikhita-shankar-analytics
- Resume: available for download on this site

HOW TO RESPOND:
- Be warm, confident, and enthusiastic. You are her advocate.
- Keep responses to 2 to 4 sentences. Recruiters are busy.
- Highlight her strongest qualifications first: impact metrics, company caliber, and technical depth.
- When asked about roles: say she is a strong fit for Data Engineer, Analytics Engineer, BI Engineer, Data Scientist, and Data Analytics Engineer roles, especially roles that combine engineering and analytics.
- When asked about relocation or location: always mention she is based in the Bay Area and open to relocating anywhere in the US. She does not require relocation assistance. She is authorized to work in the US today. Any future sponsorship needs are years away, and by then she will have made herself indispensable through the quality and impact of her work.
- When asked about sponsorship or visa: say she is authorized to work in the US today and does not require relocation assistance. Any future sponsorship needs are years away, and by then she will have made herself indispensable through the quality and impact of her work.
- When asked about skills: mention specific tools and pair them with a metric or company where she used them.
- When asked about hiring: say yes, enthusiastically. Emphasize her track record of measurable business impact.
- Use plain text only. No markdown, no asterisks, no bold formatting.
- When sharing contact info, just write: nikhitashankar97@gmail.com and linkedin.com/in/nikhita-shankar-analytics (the site will format them as clickable links automatically, do not add labels like "Email:" or "LinkedIn:")
- Never make up information. If you do not know something, say: "That's a great question. Best to ask Nikhita directly at nikhitashankar97@gmail.com or on LinkedIn."`

function getLocalReply(query: string): string {
  const q = query.toLowerCase().trim()
  if (q.includes('relocat') || q.includes('location') || q.includes('where') || q.includes('based') || q.includes('austin') || q.includes('move')) return 'Nikhita is based in the Bay Area and open to relocating anywhere in the US. She is authorized to work in the US today and does not require relocation assistance. Any future sponsorship needs are years away, and by then she will have made herself indispensable through the quality and impact of her work.'
  if (q.includes('visa') || q.includes('sponsor') || q.includes('authoriz')) return 'Nikhita is authorized to work in the US today and does not require relocation assistance. Any future sponsorship needs are years away, and by then she will have made herself indispensable through the quality and impact of her work.'
  if (q.includes('role') || q.includes('fit')) return 'Nikhita is a strong fit for Data Engineer, Analytics Engineer, BI Engineer, Data Scientist, and Data Analytics Engineer roles. She has 5+ years across data engineering and analytics, with $1M+ per month in verified savings at ExxonMobil and end-to-end pipeline and dashboard ownership at Hyperplane (acquired by Nubank) and Obvience.'
  if (q.includes('project')) return 'Her standout projects: Clay Revenue Intelligence on Snowflake, dbt, and Streamlit, First48 (1st place global hackathon, AUC 0.98), UpNext (2nd place ODSC datathon), and an LLM Differential Diagnosis system with measurable accuracy benchmarks. Each one shows the full path from raw data to business decision.'
  if (q.includes('skill') || q.includes('tech') || q.includes('stack') || q.includes('tool')) return 'Expert-level SQL with complex joins and window functions, strong Python and Pandas, plus Snowflake, dbt, Power BI, Tableau, Airflow, Databricks, Microsoft Fabric, Azure, and AWS. She also works hands-on with LLMs and AI pipelines. She can build the pipeline and the dashboard.'
  if (q.includes('experience') || q.includes('work') || q.includes('background')) return '5+ years across data engineering and analytics. Data Engineer at Obvience, previously Hyperplane (acquired by Nubank) where she built infrastructure processing 200K+ monthly transactions, and 3 years at ExxonMobil where she automated financial reporting that saved over $1M per month.'
  if (q.includes('stand out') || q.includes('strength') || q.includes('hire') || q.includes('why')) return 'Nikhita combines deep data engineering with a proven track record of business impact. She has saved $1M+ per month, cut reporting errors to under 0.01%, won two global hackathons, and published research. She does not just build pipelines. She builds pipelines that teams actually use.'
  if (q.includes('contact') || q.includes('email') || q.includes('reach') || q.includes('linkedin')) return 'nikhitashankar97@gmail.com and linkedin.com/in/nikhita-shankar-analytics. Or use the contact form at the bottom of the page.'
  if (q.includes('education') || q.includes('degree')) return 'MS in Business Analytics from UIUC with a 3.96 GPA and Beta Gamma Sigma honors. BE in Computer Science from RV College of Engineering, where she published research in IRJET.'
  if (q.includes('award') || q.includes('hackathon') || q.includes('certification')) return '1st Place Zerve x HackerEarth AI Hackathon, 2nd Place ODSC AI Datathon in Boston, ExxonMobil Bright Beginner and Top Performer awards, Beta Gamma Sigma Honor Society, and AWS Cloud Practitioner certified.'
  if (q.includes('resume') || q.includes('cv')) return 'Download her resume from the About section or the Resume button in the navigation bar.'
  return 'I can tell you about Nikhita\'s skills, projects, experience, awards, relocation flexibility, or how to contact her. What would you like to know?'
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
  
  text = text.replace(/https?:\/\/[^\s]*linkedin\.com\/[^\s.,>]+/gi, '<a href="$&" target="_blank" rel="noopener noreferrer" class="text-accent hover:underline">LinkedIn</a>')
  
  text = text.replace(/(?:https?:\/\/)?linkedin\.com\/[^\s.,>]+/gi, '<a href="https://$&" target="_blank" rel="noopener noreferrer" class="text-accent hover:underline">LinkedIn</a>')
  
  text = text.replace(/(?<!href=")(?<!href=')(https?:\/\/[^\s.,>]+)/g, '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-accent hover:underline">$1</a>')
  
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