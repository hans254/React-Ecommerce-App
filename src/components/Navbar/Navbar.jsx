import React from 'react';
import Logo from "../../assets/Logo.png";
import { FaSearch } from "react-icons/fa";
import { IoCart } from "react-icons/io5";
import { FaCaretDown } from 'react-icons/fa';
import DarkMode from './DarkMode';

const Menu = [
    {
        id: 1,
        name: "Home",
        link: "/",
    },
    {
        id: 2,
        name: "Top Rated",
        link: "/#services",
    },
    {
        id: 3,
        name: "Kids Wear",
        link: "/#",
    },
    {
        id: 4,
        name: "Mens Wear",
        link: "/#",
    },
    {
        id: 5,
        name: "Electronics",
        link: "/#",
    }
]

const DropdownLinks = [
    {
        id: 1,
        name: "Trendind Products",
        link: "/#",
    },
    {
        id: 2,
        name: "Best Selling",
        link: "/#",
    },
    {
        id: 3,
        name: "Top Rated",
        link: "/#",
    }
];
const Navbar = ({handleOrderPopup}) => {
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
                         px-2 py-1
                        focus:outline-none focus:border-1
                        focus:border-primary
                        dark: border-gray-500
                        dark: bg-gray-800" 
                    />
                    <FaSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
                </div>
            </div>
            {/* Order Button */}
            <button
            onClick={() => handleOrderPopup()}
            className="bg-primary transition-all duration-200 text-white
            py-1 px-4 rounded-full flex items-center gap-3 group"
            >
                <span
                className='group-hover: block transition-all duration-200'
                >Order</span>
                <IoCart className='text-xl text-white drop-shadow-sm cursor-pointer'/>
            </button>
            {/* DarkMode Switch */}
            <div className="ml-4 w-8 h-8">
                <DarkMode />
            </div>
        </div>
      </div>
      {/* Lower Navbar */}
      <div data-aos="zoom-in" className='flex justify-center'>
        <ul className='sm:flex hidden items-center gap-4'>
            {
                Menu.map((data) => (
                    <li key={data.id}>
                        <a href={data.link}
                        className='inline-block px-4 hover:text-primary duration-200 dark:text-black font-bold'
                        >{data.name}</a>
                    </li>
                ))
            }
            {/* Simple Dropdown and Links */}
            <li className='relative group cursor-pointer'>
                <a href="#" className='flex items-center gap-[2px] py-2 font-bold text-black'>
                    Trending
                    <span>
                        <FaCaretDown className='transition-all duration-200 group-hover: rotate--180' />
                    </span>
                </a>
                <div className='absolute z-[9999] hidden group-hover:block w-[200px] bg-white rounded-md p-2 text-black shadow-md'>
                    <ul>
                        {DropdownLinks.map((data) => (
                            <li key={data.id}>
                                <a href={data.id}
                                className='inline-block 
                                w-full rounded-md 
                                p-2 hover:bg-primary/20'
                                >{data.name}</a>
                            </li>
                        )
                    )}
                    </ul>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
