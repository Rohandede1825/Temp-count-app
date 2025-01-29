import React from 'react'


const Navbar = () => {
  return (
    <>
        <div>
           <nav className='bg-emerald-500  justify-between items-center '>
            <div className='flex justify-between items-center bg-emerald-500 p-4'>
                <div  className='font-bold text-white text-2xl'>
                    Logo
                </div>
                <div className='hidden sm:block'>
                <ul className='flex gap-4 mx-auto justify-center items-center w-full'>
                    <li className='font-semi-bold hover:opacity-90 cursor-pointer'>Home</li>
                    <li className='font-semi-bold hover:opacity-90 cursor-pointer'>About</li>
                    <li className='font-semi-bold hover:opacity-90 cursor-pointer'>Services</li>
                    <li className='font-semi-bold hover:opacity-90 cursor-pointer'>Contact</li>
                </ul>
                </div>
               
                <div className='flex gap-4 items-center justify-between'>
                    <div>
                        icon
                    </div>
                    <div className=''>
                        <img className='h-10 w-10 md:h-10 rounded-full ' src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZW1wbG95ZWV8ZW58MHx8MHx8fDA%3D" alt="img" />
                    </div>
                </div>
            </div>
           </nav>
        </div>
    </>
  )
}

export default Navbar