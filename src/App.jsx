import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './components/Login'

const App = () => {
  return (
    <>
      <div>
        <Login/>
        <Navbar />
        <Home/>
      </div>
    </>
  )
}

export default App