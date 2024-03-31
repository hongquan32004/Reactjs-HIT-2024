import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import './scss/index.scss'
import Image from './components/Image/Image'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Image></Image>
    </>
  )
}

export default App
