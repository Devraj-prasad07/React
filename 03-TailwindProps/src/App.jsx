import { useState } from 'react'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Card userName = "Devraj"/>
     <Card userName = "Mew"/>
    </>
  )
}

export default App
