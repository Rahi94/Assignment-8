import { useState } from 'react'
import Home from './pages/Home'
import './App.css'
import ListedBooks from './pages/ListedBooks'
import PagesToRead from './pages/PagesToRead'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>


      <Home />
      <ListedBooks />
      <PagesToRead />


    </>
  )
}

export default App
