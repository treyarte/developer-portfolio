import Image from 'next/image'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import ExperienceSection from './components/ExperienceSection'
import ProjectsSection from './components/ProjectsSection'

export default function Home() {
  return (
    <main className='text-white'>
      <Header/>
      <div className='md:bg-gradient-to-bl from-zinc-900 via-zinc-700 to-orange-900 bg-zinc-800'>
        <Hero />
      </div>
        <About/>
        <ExperienceSection/>
        <ProjectsSection/>
    </main>
  )
}
