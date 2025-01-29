import React from 'react'

import { Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Login from './components/Login'
import Signup from './components/Signup';



const MyContext = React.createContext({ basename: '/default-path' });

const App = () => {
  return (
    <>
      <div>
        
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    
      </div>
    </>
  )
}

export default App