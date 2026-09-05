import Silk from './components/Backgrounds/Silk.jsx'
import ScrollReveal from './components/Effects/ScrollReveal.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import Skills from './components/Skills.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  return (
    <>
      {/* 整站 Silk 背景层 */}
      <div className="site-bg" aria-hidden="true">
        <Silk
          speed={4}
          scale={1.05}
          color="#f7f7f7"
          noiseIntensity={1.4}
          rotation={0}
          lightMode
        />
      </div>

      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <ScrollReveal />
    </>
  )
}
