import Footer from '@/components/PageFooter'
import PageHeader from '@/components/PageHeader'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <PageHeader/>

      {/* Hero Section */}
      <section className='flex flex-col pt-24 min-h-screen bg-no-repeat bg-cover bg-[url(/assets/heroImage.svg)]'>
        <div className='px-20 h-screen flex items-center bg-transparent bg-gradient-to-t from-black w-full '>
          <div className='text-white mx-auto space-y-4'>

            {/* Button & Title */}
            <div>
              <h1 className='font-bold text-8xl w-1/2'>Unleash Your Potential With PUAS</h1>
            </div>
            <div>
              <h3 className='font-semibold text-xl font-style: italic'>Social, Entrepreneurship, Lifestyle, Culture and Education</h3>
            </div>

            {/* Button */}
            <div>
              <a href='/signup'>
                <Button className='h-12 font-bold' variant="outline">Join Us</Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className='flex bg-white min-h-screen'>
        <div className='p-10 h-fit flex items-center text-center'>
          <div className='text-blue-900 mx-auto space-y-10'>

            {/* Title & Description */}
            <h1 className='font-bold text-8xl'>About Us</h1>
            <p className='text-2xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab vero obcaecati at itaque voluptatum enim commodi. Provident eum nostrum nulla neque. Incidunt ducimus laboriosam voluptatibus expedita, temporibus earum laudantium quibusdam! </p>
            <h1 className='font-bold text-5xl'>Vision & Mission</h1>

            {/* Vision Mission Title */}
            <div className='flex space-x-8'>
              <div className='w-1/2 font-semibold text-2xl'>Vision</div>
              <div className='w-1/2 font-semibold text-2xl'>Mission</div>
            </div>

            {/* Vision Mission Details */}
            <div className='flex space-x-8'>
              <div className='w-1/2 text-2xl'>
                <p className='text-2xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab vero obcaecati at itaque voluptatum enim commodi. Provident eum nostrum nulla neque. Incidunt ducimus laboriosam voluptatibus expedita, temporibus earum laudantium quibusdam! </p>
              </div>
              <div className='w-1/2 text-2xl'>
                <p className='text-2xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab vero obcaecati at itaque voluptatum enim commodi. Provident eum nostrum nulla neque. Incidunt ducimus laboriosam voluptatibus expedita, temporibus earum laudantium quibusdam! </p>
              </div>
            </div>

            {/* Button */}
            <div>
              <a href='/about'>
                <Button className='w-auto h-auto font-semibold text-2xl justify-center'> More About Us </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Blogs */}
      <section className='flex bg-blue-900 min-h-screen'>
        <div className='p-10 h-fit flex items-center text-center'>
          <div className='w-full mx-auto space-y-10'>

            {/* Title */}
            <h1 className='font-bold text-8xl text-white '>Read Our Blogs</h1>

            {/* Card Grid*/}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8">
                            
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

            {/* Button */}
            <div>
              <a href='/about'>
                <Button className='w-auto h-auto font-semibold text-2xl text-white justify-center'variant="outline"> Read More </Button>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* Events */}
      <section className='flex bg-white min-h-screen'>
        <div className='p-10 h-fit flex items-center text-center justify-center text-blue-900'>
          <div className='w-full mx-auto space-y-10'>

            {/* Title */}
            <h1 className='font-bold text-8xl'>Events</h1>

            {/* Event Grid*/}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">

              {/* Card */}
              <Link href="#" className="flex flex-col xl:flex-row shadow hover:shadow-lg w-full bg-white rounded-lg overflow-hidden cursor-pointer">
                <div className="w-fit object-cover"> 
                  <Image
                    alt=''
                    className=''
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
              </Link>

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
      </section>

      {/* Gallery */}
      <section className='flex bg-blue-900 min-h-screen'>
      <div className='p-10 h-fit flex items-center text-center justify-center text-white'>
          <div className='w-full mx-auto space-y-10'>

            {/* Title */}
            <h1 className='font-bold text-8xl'>Gallery</h1>
            
            {/* Images Grid*/}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

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
      </section>

      {/* Footer */}
      <section className='bg-white min-h-fit'>
        <Footer/>
      </section>

    </main>
  )
}