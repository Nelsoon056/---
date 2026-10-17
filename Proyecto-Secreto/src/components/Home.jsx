import { useState } from 'react'

export function Home({ setPage }) {
  const [revealedSecret, setRevealedSecret] = useState(false)

  return (
    <div className='Home'>
    <section className="Home-container">
      <div className="Home-hero">
        <h1 className="Home-title">Feliz Cumpleaños, mi amor</h1>
        <p className="Home-subtitle">
          Te hice una pequeña página para celebrar tu día tan especial,
          espero que lo disfrutes y te diviertaaaas un ratito!
        </p>
      </div>

      <div className="Home-secret-card" onClick={() => setRevealedSecret(!revealedSecret)}>
        <p className="Home-secret-prompt">
          {revealedSecret ? "Cerrar" : "Presiona aqui"}
        </p>
        {revealedSecret && (
          <p className="Home-secret-text">
            "Feliz cumpleaños mi princesa espero que hoy tengas un día grandioso y disfrutes tus regalitos"
          </p>
        )}
      </div>

      <div className="Home-cards-grid">
        <div className="Home-card" onClick={() => setPage("test")}>
          <div className="Home-card-icon">🧠</div>
          <h3>Test</h3>
          <p>Veamos que tanto nos conocemos con un test rapidito.</p>
          <span className="Home-card-action">Ir a la prueba →</span>
        </div>

        <div className="Home-card" onClick={() => setPage("roulette")}>
          <div className="Home-card-icon">📸</div>
          <h3>Recuerdos</h3>
          <p>Una colección de nuestras fotos juntos a lo largo de nuestra historia.</p>
          <span className="Home-card-action">Ver carrusel →</span>
        </div>

        <div className="Home-card" onClick={() => setPage("letter")}>
          <div className="Home-card-icon">💌</div>
          <h3>Carta</h3>
          <p>Unas palabras para ti en este día especial.</p>
          <span className="Home-card-action">Leer carta →</span>
        </div>
      </div>
    </section>
    </div>
  )
}