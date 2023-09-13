"use client";

import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import React from 'react'
import Image from 'next/image';

const page = () => {
  return (
    <main>
        <PageHeader/>

        {/* Details */}
        <section className='flex flex-col min-h-screen'>
        
            <div className='px-20 bg-blue-900 min-h-screen flex items-center'>
                <div className='px-10 h-screen flex items-center text-center'>
                    <div className='text-white mx-auto space-y-10'>
                        <h1 className='font-bold text-8xl'>About Us</h1>
                        <p className='text-2xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab vero obcaecati at itaque voluptatum enim commodi. Provident eum nostrum nulla neque. Incidunt ducimus laboriosam voluptatibus expedita, temporibus earum laudantium quibusdam! </p>
                    </div>
                </div>
            </div>
        </section>
        
        {/* Vision Mission */}
        <section className='flex flex-col min-h-screen'>
            <div className='px-20 bg-white min-h-screen flex items-center'>
                <div className="py-10 w-full h-screen text-white grid grid-cols-5 grid-rows-5 gap-4">

                    {/* Title */}
                    <div className="col-span-5">
                        <h1 className='font-bold text-8xl text-center text-blue-900'>Our Vision & Mission</h1>
                    </div>

                    {/* Vission & Mission */}
                    <div className="col-span-2 row-span-4 row-start-2 space-y-5 text-blue-900">
                        <h1 className='font-bold text-8xl'>Vision</h1>
                        <p className='text-2xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab vero obcaecati at itaque voluptatum enim commodi. Provident eum nostrum nulla neque. Incidunt ducimus laboriosam voluptatibus expedita, temporibus earum laudantium quibusdam! </p>
                        <h1 className='font-bold text-8xl'>Mission</h1>
                        <p className='text-2xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab vero obcaecati at itaque voluptatum enim commodi. Provident eum nostrum nulla neque. Incidunt ducimus laboriosam voluptatibus expedita, temporibus earum laudantium quibusdam! </p>
                    </div>

                    {/* Image */}
                    <div className="col-span-2 row-span-4 col-start-4 row-start-2 text-blue-900 space-y-4">
                        <div className='w-auto h-[50%]'>
                            <Image 
                            alt=''
                            width={1000}
                            height={1000}
                            src='/assets/placeholder.jpeg'/>
                        </div>
                        <div className='w-auto h-[50%]'>
                            <Image 
                            alt=''
                            width={1000}
                            height={1000}
                            src='/assets/placeholder.jpeg'/>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        {/* Founders */}
        <section className='flex flex-col min-h-screen'>
            <div className='px-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-300 via-white to-white flex items-center'>
                <div className='px-10 h-screen flex items-center text-center'>
                    <div className='text-white mx-auto space-y-10'>

                        {/* Title & Description */}
                        <div className='text-blue-900'>
                            <h1 className='font-bold text-8xl'>Meet Our Leaders</h1>
                            <p className='text-2xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab vero obcaecati at itaque voluptatum enim commodi. Provident eum nostrum nulla neque. Incidunt ducimus laboriosam voluptatibus expedita, temporibus earum laudantium quibusdam! </p>
                        </div>

                        {/* Founders Details */}
                        <div className="grid grid-cols-4 grid-rows-2 gap-10  text-blue-900 ">
                            <div className="row-span-2">
                                <Avatar>
                                    <AvatarImage className='rounded-full w-96 h-96' src='/assets/placeholder.jpeg' alt="@shadcn" />
                                </Avatar>
                                <p className='text-2xl'>Lorem Ipsum</p>
                            </div>
                            <div className="row-span-2">
                                <Avatar>
                                    <AvatarImage className='rounded-full w-96 h-96' src='/assets/placeholder.jpeg' alt="@shadcn" />
                                </Avatar>
                                <p className='text-2xl'>Lorem Ipsum</p>
                            </div>
                            <div className="row-span-2">
                                <Avatar>
                                    <AvatarImage className='rounded-full w-96 h-96' src='/assets/placeholder.jpeg' alt="@shadcn" />
                                </Avatar>
                                <p className='text-2xl'>Lorem Ipsum</p>
                            </div>
                            <div className="row-span-2">
                                <Avatar>
                                    <AvatarImage className='rounded-full w-96 h-96' src='/assets/placeholder.jpeg' alt="@shadcn" />
                                </Avatar>
                                <p className='text-2xl'>Lorem Ipsum</p>
                            </div>
                        </div>
    
                    </div>
                </div>
            </div>
        </section>
        
        {/* Footer */}
        <section className='bg-white min-h-fit'>
        <Footer/>
        </section>

    </main>
  )
}

export default page