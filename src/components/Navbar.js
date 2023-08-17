import React, { useEffect, useState } from 'react';
import logo from '../assets/logoshelves.png';
import { NavLink } from 'react-router-dom';
import { IoBookSharp } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import {motion } from 'framer-motion'
 



const Navbar = () => {
  const {cart} = useSelector((state)=> state);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const[query,setQuery] = useState("")
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);

   
  };

  function handleChange(event)
  {
    setQuery(event.target.value);
    console.log("this is inside handle ",event.target.value);
    console.log(query)
  }
  const navigate = useNavigate();

  const handleSearch = () => {
    console.log("helo wjh")
    console.log(query)
    navigate(`/Searchbar/${query}`);
  };
  
  useEffect(() => {
    return () => {
      // cleanup code
    };
  }, [query]);

 

  return (
    <div className='fixed top-0 w-full bg-white shadow-md z-50'>
      <nav className='w-full sm:max-w-6xl mx-auto sm:flex sm:gap-3 sm:justify-between py-4 sm:py-6 sm:items-center  '>
        {/* Logo */}
        <NavLink to='/' className='flex-shrink-0'>
          <div className='flex'>
          <img className='h-12 md:h-16' src={logo} alt='logo'></img>
          <h1 className=' lg:hidden md:hidden  ml-10 text-2xl font-bold mt-2 text-[#a358c3] '>Explore The Shelves </h1>
          </div>
        </NavLink>

        {/* Hamburger Menu */}
        <div className='lg:hidden md:hidden'>
          <button onClick={toggleMenu} className='px-3 py-2 focus:outline-none'>
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
            </svg>
          </button>
        </div>

        {/* Menu Items */}
        <ul
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:flex md:flex-row w-full md:w-auto space-y-2 md:space-y-0 md:space-x-8 items-center font-bold text-base md:text-xl`}
        >
          <NavLink to='/' onClick={toggleMenu}>
            <li>Home</li>
          </NavLink>
         <li>
         <NavLink to= '/Explore' onClick={toggleMenu}>
          Books
          </NavLink>
         </li>
         <li>
         <NavLink to= '/About' onClick={toggleMenu}>
          About
          </NavLink>
         </li>
         <li>
         <NavLink to= '/Contact' onClick={toggleMenu}>
          Contact
          </NavLink>
         </li>

          
        </ul>

        {/* Search bar and cart */}
        <div className=' flex items-center space-x-5 m-1'>
        <motion.div 
         initial ={{x:'100vw'}}
         animate ={{x:0}}
         transition={{delay:2, type:"spring"}}
        className="relative flex items-center">
      <input
        className="border-2 border-blue-400 rounded-full px-3 py-2"
        type="text"
        name="Searchbar"
        id="searchbar"
        value={query}
        onChange={handleChange}
        placeholder="Search..."
      />
      <motion.div
      whileHover={{rotate:360 , scale:1.1}}
      transition={{duration:1}}
       
      
      className="absolute right-3 cursor-pointer " onClick={handleSearch}>
        <FaSearch className="text-gray-500" />
      </motion.div>
    </motion.div>
          <div
            
          >
           
            <motion.div 
             animate={{ y: [0, -10, 0], opacity: [1, 0.8, 1] }}
             transition={{
               duration: 1,
               repeat: Infinity,
               repeatType: 'reverse', // This creates the up and down effect
             }} 
            className=' flex gap-1 items-center justify-center'>
            <IoBookSharp></IoBookSharp>
            <div className=' w-[20px] h-[20px] rounded-full bg-green-400  flex items-center justify-center  '>
            <p  className=' text-white'>{cart.length}</p>
            </div>
           
            </motion.div>
            <NavLink to='/Cart'>
            <p className='text-sm'>Your Shelf</p>
          
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
