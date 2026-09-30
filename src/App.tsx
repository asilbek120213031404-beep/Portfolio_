import Background from './components/Background'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import clsx from 'clsx'
// import Footer from './components/Footer'

export default function App() {
  return (
    <div className={clsx('relative', 'min-h-screen', 'bg-[#050816]', 'text-white', 'overflow-x-hidden')}>
      {/* Animated background */}
      <Background />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main id="main-content">
        <Hero />

        {/* Stats strip between hero and about */}
        <div className={clsx('relative', 'z-10', 'pb-4')}>
          <Stats />
        </div>

        <About />

        <Skills />

        <Projects />

        <Experience />

        <Contact />
      </main>

      {/* <Footer /> */}
    </div>
  )
}
