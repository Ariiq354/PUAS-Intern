import Footer from '@/components/PageFooter'
import PageHeader from '@/components/PageHeader'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    <main>
        <PageHeader/>
        
        <section className='flex flex-col pt-24 min-h-screen'>
        <div className='px-20 bg-gradient-to-b from-blue-100 to-white min-h-screen flex items-center'>
            <div className=' h-flex py-32 flex items-center text-center'>
                <div className='w-full mx-auto space-y-10'>
                    
                    {/* Title */}
                    <h1 className='font-bold text-6xl md:text-8xl lg:text-8xl xl:text-8xl text-blue-900'>Read Our Blogs</h1>
                        
                    {/* Card Grid*/}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-x-4 gap-y-8">
                            
                        {/* Card */}
                        <a href='#'>
                        <Card className='h-auto max-w-full rounded-md overflow-hidden shadow-md hover:shadow-lg text-left  text-blue-900'>
                            <div className="w-full">
                            <Image 
                                alt=''
                                width={1000}
                                height={1000}
                                src='/assets/placeholder.jpeg'/>
                            </div>
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">Title</div>
                                <p className="text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                </p>
                            </div>
                        </Card>
                        </a>

                        {/* Card */}
                        <a href='#'>
                        <Card className='h-auto max-w-full rounded-md overflow-hidden shadow-md hover:shadow-lg text-left  text-blue-900'>
                            <div className="w-full">
                            <Image 
                                alt=''
                                width={1000}
                                height={1000}
                                src='/assets/placeholder.jpeg'/>
                            </div>
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">Title</div>
                                <p className="text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                </p>
                            </div>
                        </Card>
                        </a>

                        {/* Card */}
                        <a href='#'>
                        <Card className='h-auto max-w-full rounded-md overflow-hidden shadow-md hover:shadow-lg text-left  text-blue-900'>
                            <div className="w-full">
                            <Image 
                                alt=''
                                width={1000}
                                height={1000}
                                src='/assets/placeholder.jpeg'/>
                            </div>
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">Title</div>
                                <p className="text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                </p>
                            </div>
                        </Card>
                        </a>

                        {/* Card */}
                        <a href='#'>
                        <Card className='h-auto max-w-full rounded-md overflow-hidden shadow-md hover:shadow-lg text-left  text-blue-900'>
                            <div className="w-full">
                            <Image 
                                alt=''
                                width={1000}
                                height={1000}
                                src='/assets/placeholder.jpeg'/>
                            </div>
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">Title</div>
                                <p className="text-base">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.
                                </p>
                            </div>
                        </Card>
                        </a>

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