import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NaiveBayesClassifier from './cod'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NaiveBayesClassifier />
    </>
  )
}

export default App
