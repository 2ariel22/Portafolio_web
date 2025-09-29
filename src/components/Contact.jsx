import { FaLinkedinIn, FaInstagram, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import { useLanguage } from '../contexts/LanguageContext'

const Contact = () => {
  const { t } = useLanguage()
  return (
    <footer className="footer">
      <div className="contenedor">
        <div className="contact-section" id="contacto">
          <div className="contact-info">
            <h2 className="contact-title">{t('contact.title')}</h2>
            <p className="contact-subtitle">{t('contact.subtitle')}</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <div className="contact-text">
                  <h4>{t('contact.email')}</h4>
                  <p>arielyanceprueba@gmail.com</p>
                </div>
              </div>
              
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <div className="contact-text">
                  <h4>{t('contact.phone')}</h4>
                  <p>+57 3143729818</p>
                </div>
              </div>
              
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <div className="contact-text">
                  <h4>{t('contact.location')}</h4>
                  <p>Barranquilla, Atlántico</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="social-section">
            <h3 className="social-title">{t('contact.socialTitle')}</h3>
            <div className="redes-sociales">
              <a 
                href="https://www.linkedin.com/in/ariel-yance-orozco/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social linkedin" 
                title="Linkedin"
              >
                <FaLinkedinIn />
                <span>LinkedIn</span>
              </a>
              <a 
                href="https://www.instagram.com/ariel.yance2/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social instagram" 
                title="Instagram"
              >
                <FaInstagram />
                <span>Instagram</span>
              </a>
              <a 
                href="https://github.com/2ariel22" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social github" 
                title="GitHub"
              >
                <FaGithub />
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className="autor">{t('contact.author')}</p>
    </footer>
  )
}

export default Contact
