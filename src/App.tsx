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
      <p>Trying new things</p>
      <h2>Joseph make sure to practice</h2>
      <h2>pactice makes perfect</h2>
      <p>familiarization committing to github</p>
      <h3>More practice</h3>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          has been press this many times, click click {count}
        </button>
      </div>
      {/* Button that adds count with it's self */}
      <div className="ButtonSelf">
        <button onClick={() => setCount((count) => count + count)}>
          adds clicks with it's self {count}
        </button>
      </div>
      <p className="read-the-docs">
        Don't be afraid to try something new
      </p>
    </>
  )
}

export default App
