import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ShadowCard from './components/ShadowCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ShadowCard shadowGap={20} maxWidth={300}>Hello Again</ShadowCard>
    </>
  )
}

export default App
