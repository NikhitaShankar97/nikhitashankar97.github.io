import { Hero } from './components/Hero'
import { StatsBar } from './components/StatsBar'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Testimonials } from './components/Testimonials'
import { Honors } from './components/Honors'
import { Education } from './components/Education'
import { Contact } from './components/Contact'
import { FloatingResume } from './components/FloatingResume'

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <FloatingResume />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Testimonials />
      <Honors />
      <Education />
      <Contact />
    </>
  )
}