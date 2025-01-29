import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { IoNotifications } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClose=()=>{
    setIsMenuOpen(false);
  }


  const handleClickOutside = (e) => {
    if (!e.target.closest('.MenuOption') && !e.target.closest('.menu-icon')) {
      setIsMenuOpen(false); // Hide the menu if clicking outside
    }
  };
  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);


  return (
    <div>
      <nav className='bg-gray-900 text-white shadow-lg'>
        <div className='flex justify-between items-center p-4'>
          <div>
            <Link to={'/'}>
              <img className='h-9 sm:h-12' src="https://www.nvsubpower.com/images/logo-nv.png" alt="Logo" />
            </Link>
          </div>

          <div onClick={toggleMenu} className='menu-icon  sm:hidden'>
            <GiHamburgerMenu  className='text-3xl cursor-pointer' />
          </div>

          <div className='MenuOption hidden sm:block'>
            <ul className='flex gap-6 items-center'>
              <li>
                <Link to="/" className="text-white hover:text-gray-400 transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white hover:text-gray-400 transition duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-white hover:text-gray-400 transition duration-300">
                  Login
                </Link>
              </li>
            </ul>
          </div>

          <div className='flex gap-4 items-center'>
            <div className='text-white'>
              <IoNotifications className='text-2xl hover:text-gray-400 transition duration-300'/>
            </div>
            <div className=''>
              <img className='h-10 w-10 rounded-full' src="https://www.corporatephotographylondon.com/wp-content/uploads/2019/11/HKstrategies-755-1-1024x683.jpg" alt="Profile" />
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`sm:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-gray-800 p-4 `}>
          <span onClick={handleClose} className='font-bold text-2xl cursor-pointer block  ml-72'><IoClose /></span>

          <ul className='font-bold'>
            <li>
              <Link to="/" className="block text-white py-2 hover:text-gray-400 transition duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="block text-white py-2 hover:text-gray-400 transition duration-300">
                About
              </Link>
            </li>
            <li>
              <Link to="/login" className="block text-white py-2 hover:text-gray-400 transition duration-300">
                Login
              </Link>
            </li>
          </ul>

        </div>
      </nav>
    </div>
  );
};

export default Navbar;
