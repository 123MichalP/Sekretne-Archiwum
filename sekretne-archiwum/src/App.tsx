import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <header className="header">
          <h1>Sekretne archiwum</h1>
          <p>Rozwiąż zagadki i odkryj tajemnicę...</p>
        </header>
        <main></main>
        <footer>
          <p>Więcej zagadek wkrótce! Kontakt: <a href="mailto:michal.popieko@tm1.edu.pl">mail</a><br />
          Copyright © 2025 SekretneArchwium</p>
        </footer>
      </div>
    </>
  )
}

export default App
