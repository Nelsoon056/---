import { useState } from 'react'

import foto1 from '../assets/foto-1.jpeg';
import foto2 from '../assets/foto-2.jpeg';
import foto3 from '../assets/foto-3.jpeg';
import foto4 from '../assets/foto-4.jpeg';
import foto5 from '../assets/foto-5.jpeg';
import foto6 from '../assets/foto-6.jpeg';

export function Carrusel() {
  
  const misRecuerdos = [
    {
      id: 1,
      imagen: foto1, 
      titulo: 'Nuestra primera etapa',
      descripcion: 'no encontre como cuadrar bien la imagen losiento'
    },
    {
      id: 2,
      imagen: foto2,
      titulo: 'Que dindo recuerdo',
      descripcion: 'ese día fue muy lindo y más a tu lado'
    },
    {
      id: 3,
      imagen: foto3,
      titulo: 'Jugar juntos me encanta',
      descripcion: 'amo que siempre quieres jugar conmigo y que has desarrollado gustos por juegos que a mi también me encantan'
    },
    {
      id: 4,
      imagen: foto4,
      titulo: 'Que lindo salir juntos',
      descripcion: 'Siempre disfruto cada momento a tu lado, esos recuerdos se quedaran conmigo para siempre'
    },
    {
      id: 5,
      imagen: foto5,
      titulo: 'Amo pasar tiempo a tu lado',
      descripcion: 'Tu compañía siempre me alegra la existencia'
    },
    {
      id: 6,
      imagen: foto6,
      titulo: 'Sigamos juntos para toda la vida',
      descripcion: 'Te amo'
    },
  ]

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