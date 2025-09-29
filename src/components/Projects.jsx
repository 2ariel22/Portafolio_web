import { useLanguage } from '../contexts/LanguageContext'

const Projects = () => {
  const { t } = useLanguage()
  
  const projectData = [
    {
      id: 1,
      image: "/img/proyectos/Shopping.png",
      link: "https://dainty-genie-9d1b3d.netlify.app/",
      techClasses: {
        React: "react",
        JavaScript: "javascript"
      }
    },
    {
      id: 2,
      image: "/img/proyectos/searchMovies.png",
      link: "https://heartfelt-daffodil-407834.netlify.app/",
      techClasses: {
        React: "react",
        JavaScript: "javascript"
      }
    },
    {
      id: 3,
      image: "/img/proyectos/ApiRest.png",
      link: "https://github.com/2ariel22/ApiRestClinica",
      techClasses: {
        JAVA: "java",
        SPRINGBOOT3: "springboot",
        MYSQL: "mysql"
      }
    },
    {
      id: 4,
      image: "/img/proyectos/Encriptador.png",
      link: "https://github.com/2ariel22/challenge-encriptador",
      techClasses: {
        HTML5: "html",
        CSS3: "css",
        JavaScript: "javascript"
      }
    },
    {
      id: 5,
      image: "/img/proyectos/DetectorSuenio.png",
      link: "https://github.com/2ariel22/DetectorSuenio",
      techClasses: {
        PYTHON: "python"
      }
    },
    {
      id: 6,
      image: "/img/proyectos/ReconocimientoManometro.png",
      link: "https://github.com/2ariel22/ReconocimientoManometro.git",
      techClasses: {
        PYTHON: "python"
      }
    },
    {
      id: 7,
      image: "/img/proyectos/simuladorBio.jpeg",
      link: "https://github.com/2ariel22/Simulador-De-Se-alesBio",
      techClasses: {
        PYTHON: "python",
        ARDUINO: "arduino"
      }
    },
    {
      id: 8,
      image: "/img/proyectos/dobot.jpeg",
      link: "https://github.com/2ariel22/ControlDobotWithPython",
      techClasses: {
        PYTHON: "python"
      }
    },
    {
      id: 9,
      image: "/img/proyectos/conversor de monedas.png",
      link: "https://github.com/2ariel22/Conversor_Monedas?tab=readme-ov-file",
      techClasses: {
        JAVA: "java"
      }
    },
    {
      id: 10,
      image: "/img/proyectos/AsistenteVirtual.png",
      link: "https://github.com/2ariel22/AsistenVirtual",
      techClasses: {
        PYTHON: "python"
      }
    },
    {
      id: 11,
      image: "/img/proyectos/inventariado.jpg",
      link: "https://github.com/2ariel22/Inventariado",
      techClasses: {
        JAVA: "java",
        SPRINGBOOT3: "springboot",
        MYSQL: "mysql"
      }
    },
    {
      id: 12,
      image: "/img/proyectos/Peces.jpg",
      link: "https://github.com/2ariel22/Detecfish",
      techClasses: {
        PYTHON: "python"
      }
    }
  ]

  const projects = t('projects.projects').map((project, index) => ({
    ...project,
    ...projectData[index]
  }))

  return (
    <section className="proyectos">
      <h2 className="titulo" id="proyectos">{t('projects.title')}</h2>
      <div className="contenedor contenedor-proyectos">
        {projects.map((project) => (
          <div key={project.id} className="proyecto" data-aos="fade-up">
            <div className="foto">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <img src={project.image} alt={project.title} />
              </a>
            </div>
            <div className="info">
              <h4>{project.title}</h4>
              <h5>{t('projects.technologiesUsed')}:</h5>
              <p>
                {project.technologies.map((tech, index) => (
                  <span key={index}>
                    <span className={project.techClasses[tech] || tech.toLowerCase()}>{tech}</span>
                    {index < project.technologies.length - 1 && " - "}
                  </span>
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
