import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './App.css'

// Context
import { LanguageProvider } from './contexts/LanguageContext'

// Components
import Navigation from './components/Navigation'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    })
  }, [])

  return (
    <LanguageProvider>
      <div className="App">
        <Navigation />
        <Header />
        <main className="main">
          <About />
          <Projects />
          <Skills />
        </main>
        <Contact />
      </div>
    </LanguageProvider>
  )
}

export default App