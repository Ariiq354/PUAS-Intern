"use client";

import Footer from '@/components/PageFooter'
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
        <section className='bg-blue-900 pt-24 min-h-screen'>
            <div className='px-20 flex items-center'>
                <div className='h-screen flex items-center text-center'>
                    <div className='text-white mx-auto space-y-10'>
                        <h1 className='font-bold text-8xl'>About Us</h1>
                        <p className='text-2xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab vero obcaecati at itaque voluptatum enim commodi. Provident eum nostrum nulla neque. Incidunt ducimus laboriosam voluptatibus expedita, temporibus earum laudantium quibusdam! </p>
                    </div>
                </div>
            </div>
        </section>
        
        {/* Vision Mission */}
        <section className='flex flex-col min-h-screen bg-white items-center'>
                <div className="h-fit md:h-fit text-white px-20">

                    {/* Title */}
                    <div className="col-span-5 py-12 ">
                        <h1 className='font-bold text-8xl text-center text-blue-900'>Our Vision & Mission</h1>
                    </div>

                    {/* Vision and Mission */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 grid-rows-2 gap-y-12 w-fit text-blue-900 pb-12">
                        <div className='text-center md:text-left lg:text-left xl:text-left'>
                            <h1 className='font-bold text-6xl pb-8'>Vision</h1>
                            <p className='text-2xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab vero obcaecati at itaque voluptatum enim commodi. Provident eum nostrum nulla neque. Incidunt ducimus laboriosam voluptatibus expedita, temporibus earum laudantium quibusdam! </p>
                        </div>
                        <div>
                            <div className='w-4/6 h-auto mx-auto'>
                                <Image 
                                alt=''
                                width={1000}
                                height={1000}
                                src='/assets/placeholder.jpeg'/>
                            </div>
                        </div>

                        <div className='text-center md:text-left lg:text-left xl:text-left'>
                            <h1 className='font-bold text-6xl pb-8'>Mission</h1>
                            <p className='text-2xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab vero obcaecati at itaque voluptatum enim commodi. Provident eum nostrum nulla neque. Incidunt ducimus laboriosam voluptatibus expedita, temporibus earum laudantium quibusdam! </p>
                        </div>
                        <div>
                            <div className='w-4/6 h-auto mx-auto'>
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
        <section className='min-h-screen h-fit bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-300 via-white to-white flex items-center'>
                <div className='flex items-center text-center'>
                    <div className='mx-auto space-y-10'>

                        {/* Title & Description */}
                        <div className='text-blue-900'>
                            <h1 className='font-bold text-8xl pb-10'>Meet Our Leaders</h1>
                            <p className='text-2xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab vero obcaecati at itaque voluptatum enim commodi. Provident eum nostrum nulla neque. Incidunt ducimus laboriosam voluptatibus expedita, temporibus earum laudantium quibusdam! </p>
                        </div>

                        {/* Founders Details */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 grid-rows-1 gap-10 text-blue-900">
                            <div >
                                <Avatar>
                                    <AvatarImage className='rounded-full w-96 h-96 mx-auto' src='/assets/placeholder.jpeg' alt="@shadcn" />
                                </Avatar>
                                <p className='text-2xl'>Lorem Ipsum</p>
                            </div>
                            <div >
                                <Avatar>
                                    <AvatarImage className='rounded-full w-96 h-96 mx-auto' src='/assets/placeholder.jpeg' alt="@shadcn" />
                                </Avatar>
                                <p className='text-2xl'>Lorem Ipsum</p>
                            </div>
                            <div >
                                <Avatar>
                                    <AvatarImage className='rounded-full w-96 h-96 mx-auto' src='/assets/placeholder.jpeg' alt="@shadcn" />
                                </Avatar>
                                <p className='text-2xl'>Lorem Ipsum</p>
                            </div>
                            <div >
                                <Avatar>
                                    <AvatarImage className='rounded-full w-96 h-96 mx-auto' src='/assets/placeholder.jpeg' alt="@shadcn" />
                                </Avatar>
                                <p className='text-2xl'>Lorem Ipsum</p>
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