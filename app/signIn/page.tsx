"use client";

import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import prismadb from "@/lib/prismadb";

const formSchema = z.object({
  username: z.string().min(3, {
    message: "Username must be at least 3 character",
  }),
  password: z.string(),
});

async function onSubmit(values: z.infer<typeof formSchema>) {
  // try {
  //   await prismadb.user.create({
  //     data: {
  //       username: values.username,
  //       password: values.password,
  //     },
  //   });
  // } catch (e) {

  // }
  console.log(values);
}

export default function Page() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-100">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <Card className="w-96">
            <CardHeader>
              <CardTitle>Sign In</CardTitle>
              <CardDescription>Sign in to Dashboard</CardDescription>
            </CardHeader>
            <CardContent>
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-black">Username</FormLabel>
                    <FormControl>
                      <Input placeholder="Your Username" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardContent>
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-black">Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Your Password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button className="w-20" type="submit">
                Submit
              </Button>
              <Link href={"/signUp"}>Go back</Link>
            </CardFooter>
          </Card>
        </form>
      </Form>
    </div>
  );
}
