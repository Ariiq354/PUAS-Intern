import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import { Card } from '@/components/ui/card'
import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    
    <main>
        <PageHeader/>
        
        <section className='flex flex-col min-h-screen'>
        <div className='px-20 bg-gradient-to-t from-blue-100 to-white  min-h-screen flex items-center'>
            <div className=' h-flex py-32 flex items-center text-center'>
                <div className='w-full mx-auto space-y-10'>
                    
                    {/* Title */}
                    <h1 className='font-bold text-8xl text-blue-900'>Our Events</h1>
                        
                    {/* Card Grid*/}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                        
                        {/* Card */}
                        <div className="flex flex-col xl:flex-row shadow hover:shadow-lg w-full bg-white rounded-lg overflow-hidden cursor-pointer">
                            <div className="object-cover w-full h-full"> 
                            <Image
                                alt=''
                                src="/assets/placeholder.jpeg"
                                width={1000}
                                height={2000}
                            />
                            </div>

                            <div className="relative p-4">
                            <h3 className="text-base md:text-xl font-medium text-gray-800">
                            This is card title
                            </h3>

                            <p className="mt-4 text-base md:text-smsm text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit ad assumenda.
                            </p>
                            </div>
                        </div>

                        {/* Card */}
                        <div className="flex flex-col xl:flex-row shadow hover:shadow-lg w-full bg-white rounded-lg overflow-hidden cursor-pointer">
                            <div className="object-cover w-full h-full"> 
                            <Image
                                alt=''
                                src="/assets/placeholder.jpeg"
                                width={1000}
                                height={2000}
                            />
                            </div>

                            <div className="relative p-4">
                            <h3 className="text-base md:text-xl font-medium text-gray-800">
                            This is card title
                            </h3>

                            <p className="mt-4 text-base md:text-smsm text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit ad assumenda.
                            </p>
                            </div>
                        </div>

                        {/* Card */}
                        <div className="flex flex-col xl:flex-row shadow hover:shadow-lg w-full bg-white rounded-lg overflow-hidden cursor-pointer">
                            <div className="object-cover w-full h-full"> 
                            <Image
                                alt=''
                                src="/assets/placeholder.jpeg"
                                width={1000}
                                height={2000}
                            />
                            </div>

                            <div className="relative p-4">
                            <h3 className="text-base md:text-xl font-medium text-gray-800">
                            This is card title
                            </h3>

                            <p className="mt-4 text-base md:text-smsm text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit ad assumenda.
                            </p>
                            </div>
                        </div>

                        {/* Card */}
                        <div className="flex flex-col xl:flex-row shadow hover:shadow-lg w-full bg-white rounded-lg overflow-hidden cursor-pointer">
                            <div className="object-cover w-full h-full"> 
                            <Image
                                alt=''
                                src="/assets/placeholder.jpeg"
                                width={1000}
                                height={2000}
                            />
                            </div>

                            <div className="relative p-4">
                            <h3 className="text-base md:text-xl font-medium text-gray-800">
                            This is card title
                            </h3>

                            <p className="mt-4 text-base md:text-smsm text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit ad assumenda.
                            </p>
                            </div>
                        </div>

                        {/* Card */}
                        <div className="flex flex-col xl:flex-row shadow hover:shadow-lg w-full bg-white rounded-lg overflow-hidden cursor-pointer">
                            <div className="object-cover w-full h-full"> 
                            <Image
                                alt=''
                                src="/assets/placeholder.jpeg"
                                width={1000}
                                height={2000}
                            />
                            </div>

                            <div className="relative p-4">
                            <h3 className="text-base md:text-xl font-medium text-gray-800">
                            This is card title
                            </h3>

                            <p className="mt-4 text-base md:text-smsm text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit ad assumenda.
                            </p>
                            </div>
                        </div>

                        {/* Card */}
                        <div className="flex flex-col xl:flex-row shadow hover:shadow-lg w-full bg-white rounded-lg overflow-hidden cursor-pointer">
                            <div className="object-cover w-full h-full"> 
                            <Image
                                alt=''
                                src="/assets/placeholder.jpeg"
                                width={1000}
                                height={2000}
                            />
                            </div>

                            <div className="relative p-4">
                            <h3 className="text-base md:text-xl font-medium text-gray-800">
                            This is card title
                            </h3>

                            <p className="mt-4 text-base md:text-smsm text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit ad assumenda.
                            </p>
                            </div>
                        </div>

                        {/* Card */}
                        <div className="flex flex-col xl:flex-row shadow hover:shadow-lg w-full bg-white rounded-lg overflow-hidden cursor-pointer">
                            <div className="object-cover w-full h-full"> 
                            <Image
                                alt=''
                                src="/assets/placeholder.jpeg"
                                width={1000}
                                height={2000}
                            />
                            </div>

                            <div className="relative p-4">
                            <h3 className="text-base md:text-xl font-medium text-gray-800">
                            This is card title
                            </h3>

                            <p className="mt-4 text-base md:text-smsm text-gray-600">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit ad assumenda.
                            </p>
                            </div>
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