"use client";

import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

interface Props {
  href: string;
  icon: React.JSX.Element;
  name: string;
}

export default function SidebarMenu({ href, icon, name }: Props) {
  const path = usePathname();

  return (
    <Link href={href}>
      <div
        className={`${
          href === path
            ? "bg-cyan-400 text-white"
            : "hover:bg-slate-100 text-black"
        } flex gap-2 items-center p-3 m-2 rounded-lg`}
      >
        {icon}
        {name}
      </div>
    </Link>
  );
}
