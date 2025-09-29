import { useLanguage } from '../contexts/LanguageContext'

const Skills = () => {
  const { t } = useLanguage()

  const skills = [
    {
      id: 1,
      name: "HTML 5",
      image: "/img/habilidades/html.jpg",
      description: "Lenguaje base de las páginas web, estructurando contenido con etiquetas semánticas.",
      category: "Frontend",
      level: "Avanzado"
    },
    {
      id: 2,
      name: "CSS",
      image: "/img/habilidades/css.jpg",
      description: "Estilos y diseño responsive para interfaces modernas y adaptables.",
      category: "Frontend",
      level: "Avanzado"
    },
    {
      id: 3,
      name: "JavaScript",
      image: "/img/habilidades/js.jpg",
      description: "Interactividad web, manipulación del DOM y desarrollo dinámico.",
      category: "Frontend",
      level: "Avanzado"
    },
    {
      id: 4,
      name: "React",
      image: "/img/habilidades/react.png",
      description: "Biblioteca para interfaces de usuario con componentes reutilizables.",
      category: "Frontend",
      level: "Avanzado"
    },
    {
      id: 5,
      name: "Spring Boot 3",
      image: "/img/habilidades/SpringBoot3.png",
      description: "Framework Java para desarrollo backend con configuración automática.",
      category: "Backend",
      level: "Avanzado"
    },
    {
      id: 6,
      name: "Java",
      image: "/img/habilidades/java.png",
      description: "Lenguaje orientado a objetos para aplicaciones empresariales.",
      category: "Backend",
      level: "Avanzado"
    },
    {
      id: 7,
      name: "Python",
      image: "/img/habilidades/python.png",
      description: "IA, machine learning, automatización y desarrollo web.",
      category: "Data Science",
      level: "Intermedio"
    },
    {
      id: 8,
      name: "MySQL",
      image: "/img/habilidades/mysql.png",
      description: "Base de datos relacional para aplicaciones web escalables.",
      category: "Database",
      level: "Avanzado"
    },
    {
      id: 9,
      name: "MongoDB",
      image: "/img/habilidades/mongoDb.png",
      description: "Base de datos NoSQL para datos no estructurados.",
      category: "Database",
      level: "Avanzado"
    },
    {
      id: 10,
      name: "Kotlin",
      image: "/img/habilidades/kotlin.png",
      description: "Desarrollo Android y backend con sintaxis moderna.",
      category: "Mobile",
      level: "Intermedio"
    },
    {
      id: 11,
      name: "Arduino",
      image: "/img/habilidades/arduino.png",
      description: "Proyectos IoT y sistemas embebidos interactivos.",
      category: "IoT",
      level: "Avanzado"
    },
    {
      id: 12,
      name: "ROS",
      image: "/img/habilidades/ros.png",
      description: "Sistema operativo para desarrollo de aplicaciones robóticas.",
      category: "Robotics",
      level: "Básico"
    }
  ]

  const categories = [...new Set(skills.map(skill => skill.category))]

  return (
    <div className="conocimientos">
      <h2 className="titulo" id="conocimientos">{t('skills.title')}</h2>
      <div className="contenedor">
        <div className="skills-container">
          {categories.map((category) => (
            <div key={category} className="skill-category">
              <h3 className="category-title">{category}</h3>
              <div className="skills-grid">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill) => (
                    <div 
                      key={skill.id} 
                      className="skill-badge"
                      data-aos="fade-up"
                    >
                      <div className="skill-image">
                        <img src={skill.image} alt={skill.name} />
                      </div>
                      <div className="skill-info">
                        <h4>{skill.name}</h4>
                        <span className={`skill-level ${skill.level.toLowerCase()}`}>
                          {skill.level}
                        </span>
                      </div>
                      <div className="skill-description">
                        <p>{skill.description}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
