import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Hello again</h1>
      <p>Just keeping my memory, so far just add & subtracting</p>
      <h1>Joseph, find time to watch REACT tutorial</h1>
      <h2>learning is practice with time</h2>
      <p>familiarization committing to github</p>
      <h3>More practice</h3>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          has been press this many times {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        very slowly
      </p>
    </>
  )
}

export default App
