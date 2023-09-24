import React from "react";
import { SidebarLinks } from "@/constant";
import Link from "next/link";
import { BiChevronLeft } from "react-icons/bi";
import Image from "next/image";
import SidebarMenu from "./SidebarMenu";

export default function Sidebar() {
  return (
    <aside className="h-screen w-72 z-10 shadow-lg fixed">
      <div className="p-3 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto pb-10">
        <div className="font-bold text-xl flex justify-between items-center p-2">
          ADMIN
        </div>
        <div className="mt-6">
          {SidebarLinks.map((item) => (
            <div key={item.name} className="text-gray-400 flex flex-col mt-4">
              <div className="uppercase p-2">{item.name}</div>
              {item.menu.map((menu) => (
                <SidebarMenu key={menu.name} {...menu} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
