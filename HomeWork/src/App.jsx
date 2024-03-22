import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import './scss/index.scss'
import Menu from './components/Menu/Menu'
import Banner from './components/Banner/Banner'
import Content from './components/Content/Content'
import Finish from './components/Finish/Finish'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Menu></Menu>
      <Banner></Banner>
      <Content></Content>
      <Finish></Finish>
    </>
  )
}

export default App
