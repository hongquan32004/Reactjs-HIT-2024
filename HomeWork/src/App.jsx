import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Table from './components/Table/Table'
import Button from './components/Button/Button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Table></Table>
      <Button></Button>

    </>
  )
}

export default App
