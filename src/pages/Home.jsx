import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { configDotenv } from 'dotenv';

const Home = () => {
  const [temperature, setTemperature] = useState('');
  const [tempLimit, setTempLimit] = useState(30);
  const [currentTemp, setCurrentTemp] = useState(null);
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setTemperature(e.target.value);
  };

  // Handle limit change
  const handleLimitChange = (e) => {
    setTempLimit(e.target.value);
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!temperature) {
      alert('Please enter a temperature.');
      return;
    }

    try {
      const url = "https://temp-app-backend.onrender.com/api/temp/add"
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ temperature, tempLimit })
      });


      console.log(url);
      console.log(response);
      
      

      if (response.ok) {
        const data = await response.json();
        setCurrentTemp(data.temperature);
        setTempLimit(data.tempLimit);
        setHistory(data.history.reverse()); // Use history from response
        setTemperature('');
      }
    } catch (error) {
      console.error('Error saving temperature:', error);
    }
  };

  return (
    <div className='flex flex-col items-center justify-center bg-gray-200 p-5'>
      <motion.div className='bg-white p-6 rounded-lg shadow-lg w-full max-w-md text-center'>
        <h1 className='text-2xl font-bold mb-4 text-gray-800'>Live Temperature Input</h1>
        <form onSubmit={handleSubmit} className='text-black font-semibold'>
          <input
            type='number'
            value={temperature}
            onChange={handleChange}
            placeholder='Enter Temperature'
            className='border border-gray-300 p-2 rounded w-full mb-4'
          />
          <input
            type='number'
            value={tempLimit}
            onChange={handleLimitChange}
            placeholder='Set Temperature Limit'
            className='border border-gray-300 p-2 rounded w-full mb-4'
          />
          <button type='submit' className='bg-gray-800 text-white px-4 py-2 rounded-lg'>
            Add Temperature
          </button>
        </form>
      </motion.div>

      {currentTemp !== null && (
        <motion.div className={`mt-6 p-6 shadow-lg rounded-lg text-center w-full max-w-md ${currentTemp > tempLimit ? 'bg-red-500' : 'bg-green-400'} text-white`}>
          <h2 className='text-lg font-semibold'>Current Temperature:</h2>
          <p className='text-3xl font-bold'>{currentTemp}°C</p>
        </motion.div>
      )}

      <motion.div className='mt-6 p-6 bg-white shadow-lg rounded-lg w-full max-w-md h-80 overflow-auto scroll-smooth'>
        <h2 className='text-2xl font-bold text-gray-800 text-center'>Temperature History</h2>
        <ul className='mt-4 space-y-2'>
          {history.length === 0 ? (
            <p className='text-gray-500 text-center'>No previous values.</p>
          ) : (
            history.map((entry, index) => (
              <motion.li key={index} className={`text-bold p-2 rounded shadow-sm text-center ${entry.temperature > tempLimit ? 'bg-red-400' : 'bg-green-400'}`}>
                {entry.temperature}°C
              </motion.li>
            ))
          )}
        </ul>
      </motion.div>
    </div>
  );
};

export default Home;
