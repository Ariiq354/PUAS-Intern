'use client'

import React, { useState } from 'react'
import { Button } from './ui/button'
import { BsFillPersonFill } from 'react-icons/Bs';
import { GiHamburgerMenu } from 'react-icons/Gi';
import Link from 'next/link';
import Image from 'next/image';

const PageHeader = () => {
  // const [navbar, setNavbar] = useState(false);
  
  return (
  <nav className='w-screen bg-white fixed shadow-md top-0 left-0 right-0 z-10'>
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center">
            <div className='w-24'>
                <Image 
                    src='/assets/logo.png'
                    alt=""
                    width={750}
                    height={500}/>
            </div>
        </Link>
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
            <Link href="/" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" aria-current="page">Home</Link>
            </li>
            <li>
            <Link href="/about" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">About</Link>
            </li>
            <li>
            <Link href="/blog" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Blogs</Link>
            </li>
            <li>
            <Link href="/event" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Events</Link>
            </li>
            <li>
            <Link href="/gallery" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Gallery</Link>
            </li>
            <li>
            <Link href="/contact" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</Link>
            </li>
            <li>
            <Link href="/login" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Login</Link>
            </li>
            <li>
                <Link href="/signup">
                <Button> <BsFillPersonFill className="mr-2 h-4 w-4" /> Sign Up </Button>
                </Link>
            </li>
        </ul>
        </div>
    </div>
  </nav>


    // <div>
    //   <nav className='w-screen bg-white fixed shadow-md top-0 left-0 right-0 z-10'>
    //     <div className='justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8'>

    //       <div>
    //         <div className='flex-items-center justify-between py-3 md:py-5 md:block'>
    //           <div className='w-24'>
    //             <Link href='/'>
    //               <Image 
    //                 src='/assets/logo.png'
    //                 alt=""
    //                 width={750}
    //                 height={500}/>
    //             </Link>
    //           </div>

    //           <div className='md:hidden'>
    //             <button
    //             className='p-2 text-gray-700 rounded-md outline-none focus:border-gray-400'
    //             onClick={() => setNavbar(!navbar)}
    //             >
    //               {navbar ? (
    //                 <div className='w-24'> <GiHamburgerMenu /> </div>
    //               ) : (
    //                 <div className='w-24'> <GiHamburgerMenu /> </div>
    //               )}
                  
    //             </button>
    //           </div>
    //         </div>
    //       </div>
          
    //       <div>
    //         <div
    //             className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
    //               navbar ? 'p-12 md:p-0 block' : 'hidden'
    //             }`}
    //           >
    //           <ul className="h-screen md:h-auto items-center justify-center md:flex ">
    //             <li className="pb-6 text-lg text-blue-800 py-2 md:px-6 text-center md:border-b-0 md:hover:text-blue-900 md:hover:bg-transparent">
    //               <Link href="/" onClick={() => setNavbar(!navbar)}>
    //                 Home
    //               </Link>
    //             </li>

    //             <li className="pb-6 text-lg text-blue-800 py-2 md:px-6 text-center md:border-b-0 md:hover:text-blue-900 md:hover:bg-transparent">
    //               <Link href="/about" onClick={() => setNavbar(!navbar)}>
    //                 About Us
    //               </Link>
    //             </li>

    //             <li className="pb-6 text-lg text-blue-800 py-2 md:px-6 text-center md:border-b-0 md:hover:text-blue-900 md:hover:bg-transparent">
    //               <Link href="/blog" onClick={() => setNavbar(!navbar)}>
    //                 Blogs
    //               </Link>
    //             </li>

    //             <li className="pb-6 text-lg text-blue-800 py-2 md:px-6 text-center md:border-b-0 md:hover:text-blue-900 md:hover:bg-transparent">
    //               <Link href="/event" onClick={() => setNavbar(!navbar)}>
    //                 Events
    //               </Link>
    //             </li>

    //             <li className="pb-6 text-lg text-blue-800 py-2 md:px-6 text-center md:border-b-0 md:hover:text-blue-900 md:hover:bg-transparent">
    //               <Link href="/gallery" onClick={() => setNavbar(!navbar)}>
    //                 Gallery
    //               </Link>
    //             </li>

    //             <li className="pb-6 text-lg text-blue-800 py-2 md:px-6 text-center md:border-b-0 md:hover:text-blue-900 md:hover:bg-transparent">
    //               <Link href="/contact" onClick={() => setNavbar(!navbar)}>
    //                 Contact Us
    //               </Link>
    //             </li>

    //             <li className="pb-6 text-lg text-blue-800 py-2 md:px-6 text-center md:border-b-0 md:hover:text-blue-900 md:hover:bg-transparent">
    //               <Link href="/login" onClick={() => setNavbar(!navbar)}>
    //                 Login
    //               </Link>
    //             </li>

    //             <li className="pb-6 text-lg text-blue-800 py-2 md:px-6 text-center md:border-b-0 md:hover:text-blue-900 md:hover:bg-transparent">
    //               <Link href="/signup" onClick={() => setNavbar(!navbar)}>
    //               <Button> <BsFillPersonFill className="mr-2 h-4 w-4" /> Sign Up </Button>
    //               </Link>
    //             </li>

    //           </ul>

    //         </div>
    //       </div>

    //     </div>
    //   </nav>
    // </div>

    
  )
}

export default PageHeader