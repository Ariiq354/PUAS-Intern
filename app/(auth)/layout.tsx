import Sidebar from "@/components/Sidebar";
import React from "react";
import { Open_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import Topbar from "@/components/Topbar";

const sans = Open_Sans({ subsets: ["latin"] });

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <section className={cn("flex", sans)}>
      <Sidebar />
      <div className="md:ml-72 bg-slate-50 w-full min-h-screen">
        <Topbar />
        {children}
      </div>
    </section>
  );
}
