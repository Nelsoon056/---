function NavButton ({ page, setPage, dir, name }) {
  const isActive = page === dir;

  return (
    <button 
      className={`NavButton ${isActive ? 'active' : ''}`} 
      onClick={() => setPage(dir)}
    >
      {name}
    </button>
  )
}

export function NavBar ({page, setPage}) {
  return (
    <nav>
      <span className="NavSpan"/>
      <NavButton page={page} setPage={setPage} dir={"home"} name={"Inicio"}/>
      <span className="NavSpan"/>
      <NavButton page={page} setPage={setPage} dir={"test"} name={"Prueba"}/>
      <span className="NavSpan"/>
      <NavButton page={page} setPage={setPage} dir={"roulette"} name={"Carrusel"}/>
      <span className="NavSpan"/>
      <NavButton page={page} setPage={setPage} dir={"letter"} name={"Carta"}/>
    </nav>
  )
}