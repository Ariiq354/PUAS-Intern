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
        <section className='h-screen'>

            <div className="grid grid-cols-5 grid-rows-1 h-screen">

                {/* Logo */}
                <div className="col-span-3 bg-cover bg-no-repeat bg-[url(/assets/placeholder.jpeg)] grid place-items-center">
                {/* <div className="col-span-3 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-300 via-blue-100 to-white grid place-items-center"> */}
                    <Image 
                        src='/assets/logo.png'
                        alt=""
                        width={750}
                        height={500}
                        className="static"/>
                </div>

                {/* Form */}
                <div className="col-span-2 col-start-4 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-300 via-blue-100 to-white grid place-items-center">
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