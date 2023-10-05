'use client'

import Footer from "@/components/PageFooter";
import PageHeader from "@/components/PageHeader";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import Image from 'next/image'


export default function Page({ params }: { params: { blog: string } }) {
    return (
        <main>
            <PageHeader/>
        
            <section className='flex flex-col pt-24 min-h-screen'>
                <article className="px-96 py-16">
                <header className="mb-4 lg:mb-6 not-format">
                    <address className="flex items-center mb-6 not-italic">
                        <div className="inline-flex items-center mr-3 text-sm text-white">
                            <Avatar className="pr-4">
                                <AvatarImage className='rounded-full w-16 h-16 mx-auto' src='/assets/placeholder.jpeg' alt="@shadcn" />
                            </Avatar>
                            <div>
                                <a href="#" rel="author" className="text-xl font-bold text-white">Anna Rose</a>
                                <p className="text-base text-white">Graphic Designer, educator & CEO Adobe</p>
                                <p className="text-base text-white">Feb. 8, 2022</p>
                            </div>
                        </div>
                    </address>
                    <h1 className="mb-4 text-4xl font-extrabold leading-tight text-white">Lorem ipsum dolor sit amet</h1>
                </header>

                <div className="text-white text-justify space-y-4 ">
                    <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur risus urna, molestie non feugiat at, pulvinar blandit nibh. Quisque tempus massa a est faucibus, non consectetur dui pellentesque. Proin convallis blandit enim, at pellentesque leo sagittis vitae. Nunc aliquam blandit justo tristique pulvinar. Fusce interdum dapibus elit, ut molestie nisl tempor sit amet. Maecenas faucibus aliquam dolor, non pharetra turpis vulputate eu. In semper turpis in augue consectetur malesuada. Donec posuere, dolor eget semper lobortis, leo tellus semper tellus, a laoreet mi mi vitae tortor.</p>

                    <figure>
                        <Image
                            alt=''
                            className="w-max"
                            src="/assets/placeholder.jpeg"
                            width={1000}
                            height={2000}
                        />
                        <figcaption>Image by Anonymous</figcaption>
                    </figure>

                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur risus urna, molestie non feugiat at, pulvinar blandit nibh. Quisque tempus massa a est faucibus, non consectetur dui pellentesque. Proin convallis blandit enim, at pellentesque leo sagittis vitae. Nunc aliquam blandit justo tristique pulvinar. Fusce interdum dapibus elit, ut molestie nisl tempor sit amet. Maecenas faucibus aliquam dolor, non pharetra turpis vulputate eu. In semper turpis in augue consectetur malesuada. Donec posuere, dolor eget semper lobortis, leo tellus semper tellus, a laoreet mi mi vitae tortor.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur risus urna, molestie non feugiat at, pulvinar blandit nibh. Quisque tempus massa a est faucibus, non consectetur dui pellentesque. Proin convallis blandit enim, at pellentesque leo sagittis vitae. Nunc aliquam blandit justo tristique pulvinar. Fusce interdum dapibus elit, ut molestie nisl tempor sit amet. Maecenas faucibus aliquam dolor, non pharetra turpis vulputate eu. In semper turpis in augue consectetur malesuada. Donec posuere, dolor eget semper lobortis, leo tellus semper tellus, a laoreet mi mi vitae tortor.</p>
                
                    
                
                </div>

                </article>
            </section>

            <Footer/>
        </main>
    )
  }