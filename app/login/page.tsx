"use client";

import Footer from "@/components/Footer";
import PageHeader from "@/components/PageHeader";
import { Button } from "@/components/ui/button"
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
import React from 'react'
import Image from "next/image";

const page = () => {
  return (
    <main>
        <PageHeader />
        <section className='min-h-screen'>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-col-2 xl:grid-cols-2 grid-rows-1 min-h-screen h-fit">

            {/* Logo */}
            <div className="
                min-h-screen h-fit py-48 max-w-full
                bg-cover bg-no-repeat bg-[url(/assets/placeholder.jpeg)]
                ">
                    
                <div className="flex items-center justify-center h-full">
                    <Image 
                        src='/assets/logo.png'
                        alt=""
                        width={750}
                        height={500}
                        className="w-4/5 h-auto"/>
                </div>
                        
                </div>

            {/* Form */}
            <div className="
            p-8
            h-auto max-w-full
            bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-300 via-blue-100 to-white grid place-items-center">

                <Card className="w-[450px]">
                    <CardHeader>
                        <CardTitle>Welcome Back</CardTitle>
                        <CardDescription>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab vero obcaecati at itaque voluptatum enim commodi. 
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                        <Label htmlFor="username">Username / Name</Label>
                        <Input id="username" defaultValue="Anna Rose" required/>
                        </div>
                        <div className="space-y-1">
                        <Label htmlFor="password">Password</Label>
                        <Input type="password" id="password" required/>
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button>Login</Button>
                        <a href="/signup" className="hover:underline text-blue-900">Sign Up</a>
                    </CardFooter>
                </Card>
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