import { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('es')

  const translations = {
    es: {
      nav: {
        about: 'Sobre mí',
        projects: 'Proyectos',
        skills: 'Habilidades',
        contact: 'Contacto'
      },
      header: {
        name: 'Ariel Yance',
        profession: 'Desarrollador Web Backend, Mecatronico y desarrollador IOT'
      },
      about: {
        title: 'Sobre mí',
        text: `Bienvenido/a 

Soy desarrollador Backend apasionado por la automatización de tareas a través de la programación. 

Disfruto enfrentar retos desafiantes y cumplir con las metas propuestas. Trabajo con diversas tecnologías, entre ellas:  
- Java (Spring Boot 3) 
- Python (visión artificial, machine learning)  
- C++ (microcontroladores)  
- Node.js (Express) 
- React
- Kotlin
- ...y muchas más. 

Gracias a mi experiencia y conocimiento, desarrollo aplicaciones web, móviles y de escritorio, así como sistemas embebidos y soluciones IoT. 

Me encanta conocer personas y aprender de ellas. Además, disfruto mucho la música y la lectura.`
      },
      projects: {
        title: 'Algunos proyectos realizados',
        projects: [
          {
            id: 1,
            title: "Tienda React",
            technologies: ["React", "JavaScript"]
          },
          {
            id: 2,
            title: "Buscador de peliculas",
            technologies: ["React", "JavaScript"]
          },
          {
            id: 3,
            title: "API rest clinica",
            technologies: ["JAVA", "SPRINGBOOT3", "MYSQL"]
          },
          {
            id: 4,
            title: "Encriptador de palabras",
            technologies: ["HTML5", "CSS3", "JavaScript"]
          },
          {
            id: 5,
            title: "Detector de sueño",
            technologies: ["PYTHON"]
          },
          {
            id: 6,
            title: "Reconocimiento Manometro",
            technologies: ["PYTHON"]
          },
          {
            id: 7,
            title: "Simulador de señales BIO",
            technologies: ["PYTHON", "ARDUINO"]
          },
          {
            id: 8,
            title: "Dobot con Python",
            technologies: ["PYTHON"]
          },
          {
            id: 9,
            title: "Conversor de mondeas",
            technologies: ["JAVA"]
          },
          {
            id: 10,
            title: "Asistente Virtual con IA",
            technologies: ["PYTHON"]
          },
          {
            id: 11,
            title: "Sistema de Inventariado",
            technologies: ["JAVA", "SPRINGBOOT3", "MYSQL"]
          }
        ,
          {
            id: 12,
            title: "Detecfish - Detección de peces",
            technologies: ["PYTHON"]
          }
        ]
      },
      skills: {
        title: 'Habilidades tecnológicas'
      },
      contact: {
        title: '¡Conectemos!',
        subtitle: 'Estoy disponible para nuevos proyectos y oportunidades',
        email: 'Email',
        phone: 'Teléfono',
        location: 'Ubicación',
        socialTitle: 'Sígueme en mis redes',
        author: 'Ariel Yance - 2025'
      }
    },
    en: {
      nav: {
        about: 'About Me',
        projects: 'Projects',
        skills: 'Skills',
        contact: 'Contact'
      },
      header: {
        name: 'Ariel Yance',
        profession: 'Backend Web Developer, Mechatronics Engineer and IoT Developer'
      },
      about: {
        title: 'About Me',
        text: `Welcome 

I am a Backend developer passionate about task automation through programming. 

I enjoy facing challenging tasks and meeting proposed goals. I work with various technologies, including:  
- Java (Spring Boot 3) 
- Python (computer vision, machine learning)  
- C++ (microcontrollers)  
- Node.js (Express) 
- React
- Kotlin
- ...and many more. 

Thanks to my experience and knowledge, I develop web, mobile and desktop applications, as well as embedded systems and IoT solutions. 

I love meeting people and learning from them. I also enjoy music and reading very much.`
      },
      projects: {
        title: 'Some completed projects',
        projects: [
          {
            id: 1,
            title: "React Store",
            technologies: ["React", "JavaScript"]
          },
          {
            id: 2,
            title: "Movie Search",
            technologies: ["React", "JavaScript"]
          },
          {
            id: 3,
            title: "Clinic REST API",
            technologies: ["JAVA", "SPRINGBOOT3", "MYSQL"]
          },
          {
            id: 4,
            title: "Word Encryptor",
            technologies: ["HTML5", "CSS3", "JavaScript"]
          },
          {
            id: 5,
            title: "Sleep Detector",
            technologies: ["PYTHON"]
          },
          {
            id: 6,
            title: "Pressure Gauge Recognition",
            technologies: ["PYTHON"]
          },
          {
            id: 7,
            title: "BIO Signal Simulator",
            technologies: ["PYTHON", "ARDUINO"]
          },
          {
            id: 8,
            title: "Dobot with Python",
            technologies: ["PYTHON"]
          },
          {
            id: 9,
            title: "Currency Converter",
            technologies: ["JAVA"]
          },
          {
            id: 10,
            title: "AI Virtual Assistant",
            technologies: ["PYTHON"]
          },
          {
            id: 11,
            title: "Inventory System",
            technologies: ["JAVA", "SPRINGBOOT3", "MYSQL"]
          }
        ,
          {
            id: 12,
            title: "Detecfish - Fish detection",
            technologies: ["PYTHON"]
          }
        ]
      },
      skills: {
        title: 'Technical skills'
      },
      contact: {
        title: 'Let\'s Connect!',
        subtitle: 'I\'m available for new projects and opportunities',
        email: 'Email',
        phone: 'Phone',
        location: 'Location',
        socialTitle: 'Follow me on my networks',
        author: 'Ariel Yance - 2025'
      }
    }
  }

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage)
    localStorage.setItem('portfolio-language', newLanguage)
  }

  useEffect(() => {
    // Load language from localStorage or default to Spanish
    const savedLanguage = localStorage.getItem('portfolio-language') || 'es'
    setLanguage(savedLanguage)
  }, [])

  const t = (key) => {
    const keys = key.split('.')
    let value = translations[language]
    
    for (const k of keys) {
      value = value?.[k]
    }
    
    return value || key
  }

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}
