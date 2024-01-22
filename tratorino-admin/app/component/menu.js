"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import {
  HomeIcon,
  PlusIcon,
  CubeIcon,
  Cog8ToothIcon,
} from "@heroicons/react/24/solid";

const navLinks = [
  {
    path: "/dashboard",
    name: "Home",
    icon: <HomeIcon className="w-7 h-7" />,
  },
  {
    path: "/dashboard/criar-produto",
    name: "Novo Produto",
    icon: <PlusIcon className="w-7 h-7"  />,
  },
  {
    path: "/dashboard/meus-produtos",
    name: "Meus produtos",
    icon: <CubeIcon className="w-7 h-7" />,
  },
  {
    path: "/dashboard/config",
    name: "Configurações",
    icon: <Cog8ToothIcon className="w-7 h-7" />,
  },
];

const Menu = ({}) => {
  const pathname = usePathname() || "/";

  const [hoverLink, setHoverLink] = useState(pathname);

  return (
    <div className="h-[70px] mx-auto w-full bg-white fixed bottom-0 border-t mt-1">
      <nav
        className={`w-full h-full flex items-center justify-around`}
      >
        {navLinks.map((item, index) => {
          const isActive = item.path === pathname;

          return (
            <Link key={item.path} href={item.path} className={`duration-300 no-underline ease-in `}>
              <div className={`w-[50px] h-[50px] flex items-center justify-center rounded-[10px] duration-300 no-underline ease-in  ${isActive ? "bg-primary text-white" : ""} `}><span>{item.icon}</span></div>
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Menu;
