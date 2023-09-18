'use client'

import React, { useState } from 'react'
import { Button } from './ui/button'
import { BsFillPersonFill } from 'react-icons/Bs';
import { GiHamburgerMenu } from 'react-icons/Gi';
import Link from 'next/link';
import Image from 'next/image';

const PageHeader = () => {
  const [navbar, setNavbar] = useState(false);
  
  return (
    <div>
      <nav className='w-screen bg-white fixed shadow-md top-0 left-0 right-0 z-10'>
        <div className='justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8'>

          <div>
            <div className='flex-items-center justify-between py-3 md:py-5 md:block'>
              <div className='w-24'>
                <Link href='/'>
                  <Image 
                    src='/assets/logo.png'
                    alt=""
                    width={750}
                    height={500}/>
                </Link>
              </div>

              <div className='md:hidden'>
                <button
                className='p-2 text-gray-700 rounded-md outline-none focus:border-gray-400'
                onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <div className='w-24'> <GiHamburgerMenu /> </div>
                  ) : (
                    <div className='w-24'> <GiHamburgerMenu /> </div>
                  )}
                  
                </button>
              </div>
            </div>
          </div>
          
          <div>
            <div
                className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                  navbar ? 'p-12 md:p-0 block' : 'hidden'
                }`}
              >
              <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                <li className="pb-6 text-lg text-blue-800 py-2 md:px-6 text-center md:border-b-0 md:hover:text-blue-900 md:hover:bg-transparent">
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    Home
                  </Link>
                </li>

                <li className="pb-6 text-lg text-blue-800 py-2 md:px-6 text-center md:border-b-0 md:hover:text-blue-900 md:hover:bg-transparent">
                  <Link href="/about" onClick={() => setNavbar(!navbar)}>
                    About Us
                  </Link>
                </li>

                <li className="pb-6 text-lg text-blue-800 py-2 md:px-6 text-center md:border-b-0 md:hover:text-blue-900 md:hover:bg-transparent">
                  <Link href="/blog" onClick={() => setNavbar(!navbar)}>
                    Blogs
                  </Link>
                </li>

                <li className="pb-6 text-lg text-blue-800 py-2 md:px-6 text-center md:border-b-0 md:hover:text-blue-900 md:hover:bg-transparent">
                  <Link href="/event" onClick={() => setNavbar(!navbar)}>
                    Events
                  </Link>
                </li>

                <li className="pb-6 text-lg text-blue-800 py-2 md:px-6 text-center md:border-b-0 md:hover:text-blue-900 md:hover:bg-transparent">
                  <Link href="/gallery" onClick={() => setNavbar(!navbar)}>
                    Gallery
                  </Link>
                </li>

                <li className="pb-6 text-lg text-blue-800 py-2 md:px-6 text-center md:border-b-0 md:hover:text-blue-900 md:hover:bg-transparent">
                  <Link href="/contact" onClick={() => setNavbar(!navbar)}>
                    Contact Us
                  </Link>
                </li>

                <li className="pb-6 text-lg text-blue-800 py-2 md:px-6 text-center md:border-b-0 md:hover:text-blue-900 md:hover:bg-transparent">
                  <Link href="/login" onClick={() => setNavbar(!navbar)}>
                    Login
                  </Link>
                </li>

                <li className="pb-6 text-lg text-blue-800 py-2 md:px-6 text-center md:border-b-0 md:hover:text-blue-900 md:hover:bg-transparent">
                  <Link href="/signup" onClick={() => setNavbar(!navbar)}>
                  <Button> <BsFillPersonFill className="mr-2 h-4 w-4" /> Sign Up </Button>
                  </Link>
                </li>

              </ul>

            </div>
          </div>

        </div>
      </nav>
    </div>

    // <header className='bg-white fixed top-0 w-full shadow-md z-10'>
    //   <nav className='flex px-20 py-3 justify-between items-center w-[92%] mx-auto '>

    //     <div>
    //       <a href='/'>
    //         <div className='w-24' >
    //           <Image 
    //             src='/assets/logo.png'
    //             alt=""
    //             width={750}
    //             height={500}/>
    //         </div>
    //       </a>
    //     </div>

    //     <div>
    //       <ul className='flex items-center gap-[4vw] font-semibold'>
    //         <li>
    //           <Link className='hover:text-gray-500 hover:underline' href='/'>Home</Link>
    //         </li>
    //         <li>
    //           <Link className='hover:text-gray-500 hover:underline' href='/about'>About Us</Link>
    //         </li>
    //         <li>
    //           <Link className='hover:text-gray-500 hover:underline' href='/blog'>Blog</Link>
    //         </li>
    //         <li>
    //           <Link className='hover:text-gray-500 hover:underline' href='/event'>Events</Link>
    //         </li>
    //         <li>
    //           <Link className='hover:text-gray-500 hover:underline' href='/gallery'>Gallery</Link>
    //         </li>
    //         <li>
    //           <Link className='hover:text-gray-500 hover:underline' href='/contact'>Contact Us</Link>
    //         </li>
    //       </ul>
    //     </div>

    //     <div className='flex items-center gap-[1vw] font-semibold'>
    //       <a className='hover:text-blue-500' href='/login'>Login</a>
    //       <a href='/signup'> <Button> <BsFillPersonFill className="mr-2 h-4 w-4" /> Sign Up </Button></a>
    //     </div>

    //   </nav>
    // </header>
  )
}

export default PageHeader