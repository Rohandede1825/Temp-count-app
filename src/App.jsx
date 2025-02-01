import React from 'react'

import { Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Login from './components/Login'
import Signup from './components/Signup';
import FileUpload from './components/FileUpload';
import TemperatureChart from './components/TemperatureChart';

import { useState } from 'react';



const MyContext = React.createContext({ basename: '/default-path' });

const App = () => {
  const [temperatures, setTemperatures] = useState([]);
  return (
    <>
      <div>

        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
         
        <div className=''>
          <h1 className='bg-red-400 p-4 text-center text-2xl'>Temperature Data Visualization</h1>
          <FileUpload onDataFetched={setTemperatures} />
          {temperatures.length > 0 && <TemperatureChart temperatures={temperatures} />}

        </div>
      </div>
    </>
  )
}

export default App