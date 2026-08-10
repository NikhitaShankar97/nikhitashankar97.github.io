import { Hero } from './components/Hero'
import { StatsBar } from './components/StatsBar'
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Education } from './components/Education'
import { Honors } from './components/Honors'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <StatsBar />
      <About />
      <Skills />
      <Education />
      <Honors />
      <Experience />
      <Projects />
      <Contact />
    </>
  )
}