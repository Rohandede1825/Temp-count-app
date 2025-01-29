import React from 'react';

const About = () => {
  return (
    <div className="about-page bg-white p-12 rounded-lg shadow-xl space-y-12">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 font-serif">About the Project</h2>
      
      <p className="text-lg text-gray-800 font-serif leading-relaxed">
        This Temperature Tracker app is a robust solution designed to help users monitor and manage temperature data 
        efficiently. Built with <span className="font-semibold text-gray-700">React.js</span> for the frontend, 
        the app provides real-time updates on temperature values, while also storing a comprehensive history of all recorded changes in <span className="font-semibold text-gray-700">MongoDB</span>. 
        The app leverages <span className="font-semibold text-gray-700">Node.js</span> and <span className="font-semibold text-gray-700">Express.js</span> 
        to handle backend operations, ensuring smooth data management and functionality. The user-friendly interface, 
        styled with <span className="font-semibold text-gray-700">TailwindCSS</span>, allows users to easily input, track, and visualize their temperature data over time.
      </p>

      <div className="project-details mt-10">
        <h3 className="text-3xl font-semibold text-gray-800">Key Features:</h3>
        <ul className="mt-6 space-y-4 text-lg text-gray-700">
          <li>Track <span className="font-semibold">current temperature</span> in real-time with user input functionality.</li>
          <li>Maintain a <span className="font-semibold">detailed history</span> of all temperature changes in MongoDB.</li>
          <li>Backend powered by <span className="font-semibold">Node.js</span> and <span className="font-semibold">Express.js</span> for efficient data handling.</li>
          <li>Frontend built with <span className="font-semibold">React.js</span> for a dynamic and interactive experience.</li>
          <li>Styled with <span className="font-semibold">TailwindCSS</span> for a responsive, modern design.</li>
          <li>Visual representation of temperature data through <span className="font-semibold">images/screenshots</span> to showcase the app’s functionality.</li>
        </ul>
      </div>

      <div className="screenshots mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="screenshot-card">
          <h4 className="text-xl font-semibold text-gray-800">Current Temperature Screenshot</h4>
          <div className="mt-4 w-full h-64  rounded-lg flex items-center justify-center text-gray-600">
           <img className='h-68 w-96' src="./images/current.png" alt="" />
          </div>
        </div>
        
        <div className="screenshot-card">
          <h4 className="text-xl font-semibold text-gray-800">Temperature History Screenshot</h4>
          <div className="mt-4 w-full h-64  rounded-lg flex items-center justify-center text-gray-600">
           <img className='h-68 w-96' src="./images/history.png" alt="" />
          </div>
        </div>
      </div>

      <div className="technologies mt-12">
        <h3 className="text-3xl font-semibold text-gray-800">Technologies Used:</h3>
        <ul className="mt-6 space-y-4 text-lg text-gray-700">
          <li><span className="font-semibold text-gray-700">React.js</span> for building the user interface and managing state.</li>
          <li><span className="font-semibold text-gray-700">TailwindCSS</span> for responsive and modern design.</li>
          <li><span className="font-semibold text-gray-700">Node.js</span> and <span className="font-semibold text-gray-700">Express.js</span> for the backend server and API handling.</li>
          <li><span className="font-semibold text-gray-700">MongoDB</span> for the database to store and manage temperature data.</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
