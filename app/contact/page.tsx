import Footer from '@/components/Footer'
import PageHeader from '@/components/PageHeader'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import React from 'react'
import { Textarea } from '@/components/ui/textarea'

const page = () => {
  return (
    <main>
      <section className='flex flex-col min-h-screen bg-blue-900'>
      <PageHeader/>
      <div className="p-48 flex">

        <div className="grid grid-cols-5 grid-rows-1 gap-4">
            <div className="col-span-3 text-white space-y-8">
              <h3 className='font-bold text-8xl'>Contact Us</h3>
              <p className='text-2xl'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab vero obcaecati at itaque voluptatum enim commodi. Provident eum nostrum nulla neque. Incidunt ducimus laboriosam voluptatibus expedita, temporibus earum laudantium quibusdam! </p>
            </div>
            <div className="col-span-2 col-start-4 ">
              <Card className="w-full text-blue-900">
                <CardHeader>
                  <CardTitle>Contact Us</CardTitle>
                  <CardDescription>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab vero obcaecati at itaque voluptatum enim commodi. 
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-2">
                  <div className="space-y-1">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" defaultValue="Anna Rose" required/>
                  </div>
                  <div className="space-y-1">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" defaultValue="Anna Rose" required/>
                  </div>
                  <div className="space-y-1">
                  <Label htmlFor="email">Email</Label>
                  <Input type="email" id="email" required/>
                  </div>
                  <div className='space-y-1'>
                  <Label htmlFor="topic">What can we help you with?</Label>
                  <Textarea/>
                  </div>
                </CardContent>

                <CardFooter>
                    <Button>Submit</Button>
                </CardFooter>
              </Card>
            </div>
        </div>
      </div>
      </section>

      <section className='bg-white min-h-fit'>
      <Footer/>
      </section>
    </main>
  )
}

export default page