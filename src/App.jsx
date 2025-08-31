import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PothMVP from './PothMVP'

function App() {
  const [count, setCount] = useState(0)

  return (
    <PothMVP />
  )
}

export default App
