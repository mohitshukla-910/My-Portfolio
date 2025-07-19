import dynamic from 'next/dynamic'

// Dynamically import client components
const Hero = dynamic(() => import('@/components/Hero'), { ssr: false })
const About = dynamic(() => import('@/components/About'))
const Projects = dynamic(() => import('@/components/Projects'))
const Skills = dynamic(() => import('@/components/Skills'))
const Contact = dynamic(() => import('@/components/Contact'))
const Navbar = dynamic(() => import('@/components/Navbar'))

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <section id="mohit.jpghero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  )
} 