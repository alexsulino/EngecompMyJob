import { useState } from 'react';
import './App.css';
import reactLogo from './assets/react.svg';
import Footer from './Components/footer/Footer';
import Header from './Components/Header/Header';
import viteLogo from '/vite.svg';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      -<Header />-
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Alex = Wa + Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> Alex sd fhfghfh
        </p>
      </div>
      <p className="read-the-docs">
        Novo teste
      </p>
      <Footer />
    </>
  )
}

export default App
