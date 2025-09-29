import { useEffect, useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'

const About = () => {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const { t, language } = useLanguage()

  const fullText = t('about.text')

  useEffect(() => {
    // Reset typing animation when language changes
    setDisplayedText('')
    setCurrentIndex(0)
  }, [language])

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayedText(fullText.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, 50)
      
      return () => clearTimeout(timer)
    }
  }, [currentIndex, fullText])

  return (
    <section className="sobre-mi">
      <div className="contenedor contenedor-sobre-mi">
        <h2 className="titulo" id="sobre-mi">{t('about.title')}</h2>
        <div className="texto">
          <p className="direccion">
            <span className="dir">C: portafolio/ariel-yance</span>
          </p>
          <p className="descripcion">
            $ <span id="tagline">{displayedText}</span>
            <del id="pow-trigger"></del>
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
