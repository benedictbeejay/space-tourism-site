import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../starter-code/assets/shared/logo.svg"
import {CgMenuLeft} from "react-icons/cg" 
import {motion} from 'framer-motion'


const Header = () => {

  const handleClick = () =>  {
    const navbar = document.querySelector('.navbar')
    const listItem = document.querySelectorAll('.list-item')
    navbar.classList.toggle("open")
    listItem.forEach((item) => item.addEventListener 
    ("click", () => navbar.classList.remove('open')))
  }
  return (
    <div className=''>
      <header className='header z-10  sm:flex-row flex absolute top-0 left-0 p-4 items-center justify-between w-full'>
        <div className='z-20 flex absolute ml-4 mt-10 md:mt-0'>
            <Link to="/">
                <img src={Logo} alt='#' title='Space title'/>
            </Link>
        </div>
        <nav className='navbar md:backdrop-blur-sm  md:bg-transparent md:h-20  md:top-0  md:relative md:w-full absolute bg-gray-800 w-11/12 px-5 md:left-0 md:-translate-x-0 left-1/2  -translate-x-1/2 '>
          <ul className='md:flex md:max-w-56 md:absolute right-96 md:mr-20  md:h-full'>
            <motion.li
              className='list-item md:border-b-4 md:border-white/0 md:hover:border-white/100 duration-300'>
              <Link to="/" className='text-white md:flex md:items-center md:relative md:top-1/2 md:-translate-y-1/2 flex justify-center'>
                <span className="md:text-2xl md:font-bold mr-2">00</span> Home
              </Link>
            </motion.li>
            <motion.li className='list-item md:border-b-4 md:border-white/0 md:hover:border-white/100 duration-300'>
              <Link to="/destination" className='text-white md:flex md:items-center md:relative md:top-1/2 md:-translate-y-1/2 flex justify-center'>
                <span className="md:text-2xl md:font-bold mr-2">01</span> Destination
              </Link>
            </motion.li>
            <motion.li className='list-item md:border-b-4 md:border-white/0 md:hover:border-white/100 duration-300'>
              <Link to="/crew"  className='text-white md:flex md:items-center md:relative md:top-1/2 md:-translate-y-1/2 flex justify-center'>
                <span className="md:text-2xl md:font-bold mr-2 ">02</span> Crew
              </Link>
            </motion.li>
            <motion.li className='list-item md:border-b-4 md:border-white/0 md:hover:border-white/100 duration-300'>
              <Link to="/technology" className='text-white md:flex md:items-center md:relative md:top-1/2 md:-translate-y-1/2 flex justify-center'>
                <span className="md:text-2xl md:font-bold mr-2 ">03</span> Technology
              </Link>
            </motion.li>
          </ul>
        </nav>
        <div className=' md:hidden flex absolute right-0 mr-6 mt-10'>
          <button className='md:hidden  l' onClick={handleClick}>
            <CgMenuLeft className="text-white text-4xl "/>
          </button>
        </div>
      </header>
    </div>
  )
}

export default Header
