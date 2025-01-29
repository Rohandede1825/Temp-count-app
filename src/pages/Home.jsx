import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  const [temperature, setTemperature] = useState('');
  const [history, setHistory] = useState([]);
  const [tempLimit, setTempLimit] = useState(30); // Default to 30°C

  // Fetch latest temperature and limit
  const fetchTemperature = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/temp/getTemperature');
      const data = await response.json();
      if (response.ok) {
        setTemperature(data.temperature);
        setTempLimit(data.tempLimit);
        setHistory(data.history.map(entry => entry.temperature)); // Update history
      }
    } catch (error) {
      console.error('Error fetching temperature:', error);
    }
  };

  // Handle input change
  const handleChange = (e) => {
    setTemperature(e.target.value);
  };

  // Handle form submit (send new temperature to backend)
  const handleSubmit = async () => {
    if (!temperature) {
      alert('Please enter a temperature.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3000/api/temp/addTemperature', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ temperature, tempLimit })
      });

      if (response.ok) {
        fetchTemperature();
        setTemperature('');
      }
    } catch (error) {
      console.error('Error saving temperature:', error);
    }
  };

  useEffect(() => {
    fetchTemperature();
    const interval = setInterval(fetchTemperature, 5000); // Auto-refresh every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gradient-to-r bg-gray-200 p-5'>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='bg-white p-6 rounded-lg shadow-lg w-full max-w-md text-center'
      >
        <h1 className='text-2xl font-bold mb-4 text-emerald-800'>Live Temperature Input</h1>
        <input
          type='number'
          value={temperature}
          onChange={handleChange}
          placeholder='Enter Temperature'
          className='border border-gray-300 p-2 rounded w-full mb-4 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-black'
        />
        <button
          onClick={handleSubmit}
          className='bg-emerald-600 text-white px-4 py-2 rounded-lg hover:bg-emerald-700 transition duration-300'
        >
          Save Temperature
        </button>
      </motion.div>

      {/* Live Temperature Display */}
      {temperature && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`mt-6 p-6 shadow-lg rounded-lg text-center w-full max-w-md ${
            temperature > tempLimit ? 'bg-red-500 text-white' : 'bg-green-500 text-white'
          }`}
        >
          <h2 className='text-lg font-semibold'>Current Temperature:</h2>
          <p className='text-3xl font-bold'>{temperature}°C</p>
        </motion.div>
      )}

      {/* Temperature History */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='mt-6 p-6 bg-white shadow-lg rounded-lg w-full max-w-md'
      >
        <h2 className='text-lg font-semibold text-emerald-700 text-center'>Temperature History</h2>
        <ul className='mt-4 space-y-2'>
          {history.length === 0 ? (
            <p className='text-gray-500 text-center'>No previous values.</p>
          ) : (
            history.map((temp, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`p-2 rounded shadow-sm text-center ${
                  temp > tempLimit ? 'bg-red-200 text-red-800' : 'bg-green-200 text-green-800'
                }`}
              >
                {temp}°C
              </motion.li>
            ))
          )}
        </ul>
      </motion.div>
    </div>
  );
};

export default Home;
