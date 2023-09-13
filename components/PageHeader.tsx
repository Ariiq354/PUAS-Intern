import React from 'react'
import { Button } from './ui/button'
import { BsFillPersonFill } from 'react-icons/Bs';
import Link from 'next/link';
import Image from 'next/image';

const PageHeader = () => {
  return (
    <header className='bg-white fixed top-0 w-full shadow-md z-10'>
      <nav className='flex px-20 py-3 justify-between items-center w-[92%] mx-auto '>
        <div>
          <a href='/'>
            <div className='w-24' >
              <Image 
                src='/assets/logo.png'
                alt=""
                width={750}
                height={500}/>
            </div>
          </a>
        </div>
        <div>
          <ul className='flex items-center gap-[4vw] font-semibold'>
            <li>
              <Link className='hover:text-gray-500 hover:underline' href='/'>Home</Link>
            </li>
            <li>
              <Link className='hover:text-gray-500 hover:underline' href='/about'>About Us</Link>
            </li>
            <li>
              <Link className='hover:text-gray-500 hover:underline' href='/blog'>Blog</Link>
            </li>
            <li>
              <Link className='hover:text-gray-500 hover:underline' href='/event'>Events</Link>
            </li>
            <li>
              <Link className='hover:text-gray-500 hover:underline' href='/gallery'>Gallery</Link>
            </li>
            <li>
              <Link className='hover:text-gray-500 hover:underline' href='/contact'>Contact Us</Link>
            </li>
          </ul>
        </div>
        <div className='flex items-center gap-[1vw] font-semibold'>
          <a className='hover:text-blue-500' href='/login'>Login</a>
          <a href='/signup'> <Button> <BsFillPersonFill className="mr-2 h-4 w-4" /> Sign Up </Button></a>
        </div>
      </nav>
    </header>
  )
}

export default PageHeader