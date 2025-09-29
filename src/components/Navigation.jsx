import { useState, useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import LanguageToggle from './LanguageToggle'

const Navigation = () => {
  const [showBackToTop, setShowBackToTop] = useState(false)
  const { t, changeLanguage } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <nav className="menu">
        <div className="foto">
          <p>
            <img 
              src="https://avatars.githubusercontent.com/u/133101799?v=4" 
              alt="Ariel Yance" 
              className="foto"
            />
          </p>
        </div>
        <div className="contenedor-menu">
          <a href="#sobre-mi" onClick={(e) => { e.preventDefault(); scrollToSection('sobre-mi'); }}>
            {t('nav.about')}
          </a>
          <a href="#proyectos" onClick={(e) => { e.preventDefault(); scrollToSection('proyectos'); }}>
            {t('nav.projects')}
          </a>
          <a href="#conocimientos" onClick={(e) => { e.preventDefault(); scrollToSection('conocimientos'); }}>
            {t('nav.skills')}
          </a>
          <a href="#contacto" onClick={(e) => { e.preventDefault(); scrollToSection('contacto'); }}>
            {t('nav.contact')}
          </a>
        </div>
        <LanguageToggle />
      </nav>
      
      {showBackToTop && (
        <span>
          <i 
            className="boton-arriba fa fa-chevron-up" 
            onClick={scrollToTop}
            style={{ cursor: 'pointer' }}
            aria-hidden="true"
          />
        </span>
      )}
    </>
  )
}

export default Navigation
