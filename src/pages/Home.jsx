import React from 'react'

const Home = () => {

  function change (){
    alert('hello')
    
  }
  return (
    <>

        <div className='flex justify-center items-center h-screen bg-gray-200'>
            <div className='bg-white p-8 rounded-lg shadow-lg'>
                <h1 className='text-4xl font-bold mb-4 text-black'>Welcome to the Home Page</h1>
                <p className='text-gray-600'>This is the home page of the website. You can find all the information you need here.</p>
            </div>

            <button onClick={change} className='text-black bg-emerald-600 p-3 border rounded-lg ml-3 '>click</button>
        </div>
    </>
  )
}

export default Home