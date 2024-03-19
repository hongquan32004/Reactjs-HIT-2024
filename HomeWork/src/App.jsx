import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Header from './components/Header/Header'
import Herosection from './components/Herosection/Herosection'
import Endhero from './components/Endhero/Endhero'
import Footer from './components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Herosection></Herosection>
      <Endhero></Endhero>
      <Footer></Footer>

    </>
  )
}

export default App
