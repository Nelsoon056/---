import { useState } from 'react'

export function Test() {
  // Lista de preguntas (puedes cambiar los textos, opciones y el índice de la opción correcta)
  const questions = [
    {
      question: "¿Qué comimos la primera vez que salimos?",
      options: ["Hamburguesa", "Perro Caliente", "Pizza", "Sardina"],
      correct: 2
    },
    {
      question: "¿Qué día celebrabamos antes de ser novios?",
      options: ["12", "3", "28", "10294930"],
      correct: 0
    },
    {
      question: "¿donde nos hicimos novios?",
      options: ["En el liceo", "Opción incorrecta", "No elijas la de arriba", "El Chalet"],
      correct: 3
    },
    {
      question: "¿Cuál es mi apodo favorito para decirte?",
      options: ["Amor", "Mi Princesa", "Burra", "Todas las anteriores"],
      correct: 3
    },
    {
      question: "¿Cual es nuestro juego favorito para jugar?",
      options: ["Minecraft", "Gow", "No jugar", "GTA V"],
      correct: 2
    },
    {
      question: "¿Cual fue nuestro primer hijo?",
      options: ["Grisito", "El Sush", "Hello Kitty Cabezona", "Un perro random de minecraft"],
      correct: 0
    },
    {
      question: "¿Como te referías a mi antes de conocerme?",
      options: ["Desconocido", "Cabeza de Mamila", "Piñita", "Nelson"],
      correct: 2
    },
    {
      question: "¿Que hizo arya la vez que me la presentaste?",
      options: ["Me abrazo de felicidad", "Salio corriendo", "No hizo nada", "Me gruñó :("],
      correct: 3
    },
    {
      question: "¿Cuando es nuestro aniversario?",
      options: ["El día ((2x14)x10+56-((28x2))x0,1", "e(50-100+200-10)", "((7x6)+92)x0,5", "Ayuda"],
      correct: 0
    },
    {
      question: "¿Que estabamos haciedo el día 8 de julio de 2023 a las 2:32pm?",
      options: ["Viendo Dragon ball Z", "Durmiendo", "Jugando ping pong", "La vd no se solo elige esta opción"],
      correct: 3
    }
  ]

  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedOption, setSelectedOption] = useState(null)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)

  const handleOptionClick = (index) => {
    if (selectedOption !== null) return
    setSelectedOption(index)

    if (index === questions[currentQuestion].correct) {
      setScore((prev) => prev + 1)
    }
  }

  const handleNext = () => {
    setSelectedOption(null)
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prev) => prev + 1)
    } else {
      setShowResult(true)
    }
  }

  const handleRestart = () => {
    setCurrentQuestion(0)
    setSelectedOption(null)
    setScore(0)
    setShowResult(false)
  }

  return (
    <section className="Test-container">
      {!showResult ? (
        <div className="Test-card">
          {/* Contador de progreso */}
          <div className="Test-progress">
            <span>Pregunta {currentQuestion + 1} de {questions.length}</span>
            <div className="Test-progress-bar">
              <div 
                className="Test-progress-fill" 
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Pregunta */}
          <h2 className="Test-question">{questions[currentQuestion].question}</h2>

          {/* Opciones */}
          <div className="Test-options">
            {questions[currentQuestion].options.map((option, index) => {
              let btnClass = "Test-option-btn"
              if (selectedOption !== null) {
                if (index === questions[currentQuestion].correct) {
                  btnClass += " correct"
                } else if (index === selectedOption) {
                  btnClass += " incorrect"
                }
              }

              return (
                <button
                  key={index}
                  className={btnClass}
                  onClick={() => handleOptionClick(index)}
                  disabled={selectedOption !== null}
                >
                  {option}
                </button>
              )
            })}
          </div>

          {/* Botón Siguiente */}
          {selectedOption !== null && (
            <button className="Test-next-btn" onClick={handleNext}>
              {currentQuestion + 1 === questions.length ? "Ver Resultados" : "Siguiente Pregunta →"}
            </button>
          )}
        </div>
      ) : (
        /* Pantalla Final de Resultados */
        <div className="Test-card Test-result-card">
          <h2>¡Test Completado!</h2>
          <p className="Test-score-text">
            Obtuviste <strong>{score}</strong> de <strong>{questions.length}</strong> respuestas correctas.
          </p>

          <p className="Test-feedback">
            {score === questions.length
              ? "Okey si me sorprendiste la vd, te amo"
              : score >= questions.length / 2
              ? "Esoo amor tienes mas o menos buena memoria"
              : "Na, repite el test me haces el favor"}
          </p>

          <button className="Test-restart-btn" onClick={handleRestart}>
            Intentar de nuevo
          </button>
        </div>
      )}
    </section>
  )
}