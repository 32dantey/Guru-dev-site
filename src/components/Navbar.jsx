import React, { useState } from 'react';

import {Link, animateScroll as Scroll} from 'react-scroll';

import  {Bars3Icon, XMarkIcon}  from '@heroicons/react/24/outline';



const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)






  return (
    <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
        <div className='px-2 flex justify-between items-center w-full h-full'>
            <div className='flex items-center'>
              <h1 className='text-blue-800 text-3xl font-bold mr-4 sm:text-4xl'>Guru</h1>
              <h1 className='text-blue-800 text-sm mr-10 my-4 font-mono '>Dev Group</h1>
              <ul className='hidden md:flex'> 
              <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
              <li><Link to="services" smooth={true} offset={-200} duration={500}>Services</Link></li>
              <li><Link to="pricing" smooth={true} offset={-50} duration={500}>Pricing</Link></li>
              <li><a href="/Work">Work</a></li>
              </ul>
              
            </div>
            <div className='hidden md:flex pr-4'>
                <button className='border-none bg-transparent text-black mr-4'>Sign In</button>
                <button className='px-8 py-3'>Sign Up</button>
            </div>
            <div className='md:hidden mr-4' onClick={handleClick}>
              {!nav ? <Bars3Icon className='w-5'/> : <XMarkIcon className='w-5' />}
            
            </div>
        </div>

      <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
              <li className='border-b-2 border-zinc-300 w-full'>Home</li>
              <li className='border-b-2 border-zinc-300 w-full'>About</li>
              <li className='border-b-2 border-zinc-300 w-full'>Support</li>
              <li className='border-b-2 border-zinc-300 w-full'>Platforms</li>
              <li className='border-b-2 border-zinc-300 w-full'>Pricing</li>
              <div className='flex flex-col my-4'>
                <button className='bg-transparent text-blue-900 px-8 py-3 mb-4'>
                  Sign In
                </button>
                <button className='px-8 py-3'>
                  Sign Up
                </button>
              </div>
      </ul>



    </div>
  )
}


export default Navbar


