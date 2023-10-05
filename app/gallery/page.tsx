import Footer from '@/components/PageFooter'
import PageHeader from '@/components/PageHeader'
import { Card } from '@/components/ui/card'
import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <main>
        <PageHeader/>
        
        <section className='pt-24 flex flex-col min-h-screen'>
        <div className='px-20 bg-gradient-to-t from-blue-100 to-white  min-h-screen flex items-center'>
            <div className=' h-flex py-32 flex items-center text-center'>
                <div className='w-full mx-auto space-y-10'>
                    
                    {/* Title */}
                    <h1 className='font-bold text-8xl text-blue-900'>Gallery</h1>
                        
                    
                    {/* Images Grid*/}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-col-3 xl:grid-cols-3 gap-4">

                       {/* Image */}
                        <div className="h-auto max-w-full  hover:shadow-md">
                            <Image 
                                className='rounded-lg'
                                src='/assets/placeholder.jpeg'
                                width={1000}
                                height={1000}
                                alt=""
                                />
                        </div>

                        {/* Image */}
                        <div className="h-auto max-w-full  hover:shadow-md">
                            <Image 
                                className='rounded-lg'
                                src='/assets/placeholder.jpeg'
                                width={1000}
                                height={1000}
                                alt=""
                                />
                        </div>

                        {/* Image */}
                        <div className="h-auto max-w-full  hover:shadow-md">
                            <Image 
                                className='rounded-lg'
                                src='/assets/placeholder.jpeg'
                                width={1000}
                                height={1000}
                                alt=""
                                />
                        </div>

                        {/* Image */}
                        <div className="h-auto max-w-full  hover:shadow-md">
                            <Image 
                                className='rounded-lg'
                                src='/assets/placeholder.jpeg'
                                width={1000}
                                height={1000}
                                alt=""
                                />
                        </div>

                        {/* Image */}
                        <div className="h-auto max-w-full  hover:shadow-md">
                            <Image 
                                className='rounded-lg'
                                src='/assets/placeholder.jpeg'
                                width={1000}
                                height={1000}
                                alt=""
                                />
                        </div>

                        {/* Image */}
                        <div className="h-auto max-w-full  hover:shadow-md">
                            <Image 
                                className='rounded-lg'
                                src='/assets/placeholder.jpeg'
                                width={1000}
                                height={1000}
                                alt=""
                                />
                        </div>

                        {/* Image */}
                        <div className="h-auto max-w-full  hover:shadow-md">
                            <Image 
                                className='rounded-lg'
                                src='/assets/placeholder.jpeg'
                                width={1000}
                                height={1000}
                                alt=""
                                />
                        </div>

                        {/* Image */}
                        <div className="h-auto max-w-full  hover:shadow-md">
                            <Image 
                                className='rounded-lg'
                                src='/assets/placeholder.jpeg'
                                width={1000}
                                height={1000}
                                alt=""
                                />
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