import { useLanguage } from '../contexts/LanguageContext'

const LanguageToggle = () => {
  const { language, changeLanguage } = useLanguage()

  const handleLanguageChange = (newLanguage) => {
    changeLanguage(newLanguage)
  }

  return (
    <div className="idiomas">
      <div 
        className={`esp idioma ${language === 'es' ? 'active' : ''}`}
        onClick={() => handleLanguageChange('es')}
      >
        <img 
          src="/img/español.png" 
          className={`bandera ${language === 'es' ? 'active' : ''}`} 
          alt="Español" 
          title="Español"
        />
      </div>
      <div 
        className={`eng idioma ${language === 'en' ? 'active' : ''}`}
        onClick={() => handleLanguageChange('en')}
      >
        <img 
          src="/img/english.png" 
          className={`bandera ${language === 'en' ? 'active' : ''}`} 
          alt="English" 
          title="English"
        />
      </div>
    </div>
  )
}

export default LanguageToggle
