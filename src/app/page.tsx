import Image from 'next/image'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import ExperienceSection from './components/ExperienceSection'
import ProjectsSection from './components/ProjectsSection'
import Contact from './components/Contact'

export default function Home() {
  return (
    <main className='text-white'>
      <Header/>      
        <Hero />      
        <About/>
        <ExperienceSection/>
        <ProjectsSection/>
        <Contact/>
    </main>
  )
}
