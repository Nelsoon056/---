import { useState } from 'react'
import { NavBar } from './components/NavBar';
import { LogMenu } from './components/LogMenu';
import { Home } from './components/Home';
import { Test } from './components/Test';
import { Carrusel } from './components/Roulette';

import './App.css'

function App() {
  const [log, setLog] = useState(false);
  const [page, setPage] = useState("home")

  if (!log) {
    return (
      <LogMenu onLoginSuccess={() => setLog(true)} />
    )
  }

  switch (page) {
    case "home": 
      return (
        <>
        <NavBar setPage={setPage} page={page}/>
        <Home setPage={setPage}/>
        </>
      )
    case "test":
      return (
        <>
        <NavBar setPage={setPage} page={page}/>
        <Test/>
        </>
      )
    case "roulette":
      return (
        <>
        <NavBar setPage={setPage} page={page}/>
        <Carrusel/>
        </>
      )
    case "letter":
      return (
        <>
        <NavBar setPage={setPage} page={page}/>
        <h1>ce</h1>
        </>
      )
  }
}

export default App
