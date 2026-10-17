import { useState } from "react"

export function LogMenu({ onLoginSuccess }) {
  const initial_data = {
    name: '',
    password: ''
  }

  const [data, setData] = useState(initial_data)
  const [error, setError] = useState(false)

  const USER_VALIDO = "isabella"
  const PASS_VALIDA = "12345678"

  const handleChange = (e) => {
    const { name, value } = e.target
    setData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (data.name.trim() === USER_VALIDO && data.password === PASS_VALIDA) {
      setError(false)
      onLoginSuccess()
    } else {
      setError(true)
    }
  }

  return (
    <div className="Log-container">
    <section className="LogMenu">
      <form className="LogForm" onSubmit={handleSubmit}>
        <label htmlFor="user">Usuario</label>
        <input 
          type="text" 
          name="name"
          placeholder="Nombre de Usuario" 
          id="user" 
          onChange={handleChange}
          value={data.name}
        />

        <label htmlFor="password">Contraseña</label>
        <input 
          type="password" 
          name="password" 
          placeholder="********" 
          id="password" 
          onChange={handleChange}
          value={data.password}
        />

        {error && <p className="error-msg">¡Ups! El usuario o la contraseña no son correctos</p>}

        <button type="submit">Iniciar Sesión</button>
      </form>
    </section>
    </div>
  )
}