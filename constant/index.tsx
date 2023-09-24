import { BiNews } from "react-icons/bi";
import { MdOutlineDashboard } from "react-icons/md";
import { BsCalendarEvent } from "react-icons/Bs";
import { AiFillPicture } from "react-icons/ai";

export const SidebarLinks = [
  {
    name: "Dashboard",
    menu: [
      { href: "/dashboard", name: "Dashboard", icon: <MdOutlineDashboard /> },
    ],
  },
  {
    name: "Pages",
    menu: [
      { href: "/dashboard/blog", name: "Blog", icon: <BiNews /> },
      {
        href: "/dashboard/event",
        name: "Events",
        icon: <BsCalendarEvent />,
      },
      { href: "/dashboard/galery", name: "Gallery", icon: <AiFillPicture /> },
    ],
  },
];
