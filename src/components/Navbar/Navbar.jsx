import React from 'react';
import Logo from "../../assets/Logo.png";
import { FaSearch } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import DarkMode from './DarkMode';

const Navbar = () => {
  return (
    <div className="shadow-md bg-white dark: bg-gray-500 dark:text-white 
    duration-200 relative z-40">
      {/* Upper Navbar */}
      <div className='bg-primary/40 py-2'>
        <div className="container flex
        justify-between items-center">
            <div>
                <a href="#"
                className='font-bold
                text-2xl sm: text-3xl flex gap-2'
                >
                    <img src={Logo} alt="Logo" 
                    className='w-10 uppercase'
                    />
                    ShopFy
                </a>
            </div>
            {/* Search Bar and Order Button */}
            <div className="flex gap-4 items-center justify-between">
                <div className="relative group sm:block">
                    <input 
                        type="text" 
                        placeholder="Search" 
                        className="w-[200px] sm:w-[200px] 
                        group-hover:w-[300px] transition-all 
                        duration-300 rounded-full border
                        border-gray-300 px-2 py-1
                        focus:outline-none focus:border 
                        focus:border-primary" 
                    />
                    <FaSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
                </div>
            </div>
            {/* Order Button */}
            <button
            onClick={() => alert("Ordering not available yet")}
            className="bg-gradient-to-r from-primary
            to-secondary transition-all duration-200 text-white
            py-1 px-4 rounded-full flex items-center gap-3 group"
            >
                <span
                className='group-hover: block transition-all duration-200'
                >Order</span>
                <IoCart className='text-xl text-white drop-shadow-sm cursor-pointer'/>
            </button>
            {/* DarkMode Switch */}
            <div>
                <DarkMode />
            </div>
        </div>
      </div>
      {/* Lower Navbar */}
    </div>
  )
}

export default Navbar
