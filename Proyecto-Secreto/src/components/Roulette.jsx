import { useState } from 'react'

export function Carrusel() {
  // ==========================================
  // CONFIGURACIÓN DE TUS RECUERDOS AQUÍ 📸💖
  // ==========================================
  // 1. Importa tus fotos reales arriba (ej: import foto1 from '../assets/foto1.jpg')
  // 2. Reemplaza las URLs de ejemplo ('https://via.placeholder.com/...') por tus variables de foto.
  // 3. Escribe una dedicatoria linda para cada foto.
  
  const misRecuerdos = [
    {
      id: 1,
      // Reemplaza esto por tu foto real importada: imagen: foto1,
      imagen: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=800&auto=format&fit=crop', 
      titulo: 'Donde todo empezó',
      descripcion: 'Nuestra primera foto juntos. Ese día estaba súper nervioso, pero tu sonrisa lo hizo todo más fácil. ¡El inicio de la mejor aventura!'
    },
    {
      id: 2,
      imagen: 'https://images.unsplash.com/photo-1518199266791-c309404f5f81?q=80&w=800&auto=format&fit=crop',
      titulo: 'Esa cita inolvidable',
      descripcion: 'Me encanta cómo nos vemos aquí. Estábamos tan felices distraídos. Cada momento a tu lado es mi favorito.'
    },
    {
      id: 3,
      imagen: 'https://images.unsplash.com/photo-1531844256296-982eeb874c4b?q=80&w=800&auto=format&fit=crop',
      titulo: 'Un logro más',
      descripcion: 'Celebrando juntos. Estoy tan orgulloso de la mujer increíble que eres y de todo lo que logras. ¡Siempre estaré aquí para echarte porras!'
    },
    // Puedes añadir más objetos {id, imagen, titulo, descripcion} aquí...
  ]

  // ==========================================
  // LÓGICA DEL CARRUSEL (No tocar si no es necesario)
  // ==========================================
  const [currentIndex, setCurrentIndex] = useState(0)

  const irAlAnterior = () => {
    const esPrimeraDiapositiva = currentIndex === 0
    const nuevoIndice = esPrimeraDiapositiva ? misRecuerdos.length - 1 : currentIndex - 1
    setCurrentIndex(nuevoIndice)
  }

  const irAlSiguiente = () => {
    const esUltimaDiapositiva = currentIndex === misRecuerdos.length - 1
    const nuevoIndice = esUltimaDiapositiva ? 0 : currentIndex + 1
    setCurrentIndex(nuevoIndice)
  }

  const irALaDiapositiva = (indice) => {
    setCurrentIndex(indice)
  }

  if (misRecuerdos.length === 0) {
    return <section className="Carrusel-container"><h2>Aún no hay recuerdos añadidos 😢</h2></section>
  }

  return (
    <section className="Carrusel-container">
      <div className="Carrusel-main">
        
        {/* Flecha Izquierda */}
        <button className="Carrusel-arrow left" onClick={irAlAnterior}>
          &#10094;
        </button>

        {/* Flecha Derecha */}
        <button className="Carrusel-arrow right" onClick={irAlSiguiente}>
          &#10095;
        </button>

        {/* Diapositivas (Contenedor con desplazamiento) */}
        <div className="Carrusel-slider-wrapper">
          <div 
            className="Carrusel-slider-track"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {misRecuerdos.map((recuerdo, index) => (
              <div key={recuerdo.id} className="Carrusel-slide">
                <div className="Carrusel-image-container">
                  <img src={recuerdo.imagen} alt={recuerdo.titulo} />
                </div>
                <div className="Carrusel-text-card">
                  <h3>{recuerdo.titulo}</h3>
                  <p>{recuerdo.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Indicadores (Puntitos) */}
        <div className="Carrusel-dots">
          {misRecuerdos.map((_, index) => (
            <span 
              key={index} 
              className={`Carrusel-dot ${index === currentIndex ? 'active' : ''}`}
              onClick={() => irALaDiapositiva(index)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  )
}