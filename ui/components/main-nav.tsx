"use client";

import Link from "next/link"
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils"
import { Category } from "@/types";
import { useEffect, useState } from "react";

interface MainNavProps {
  data: Category[];
}

const MainNav: React.FC<MainNavProps> = ({
  data
}) => {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  const [isMobile, setIsMobile] = useState(window.innerWidth < 767);
  const [showSidebar, setShowSidebar] = useState(false);


  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 767);
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (

    <div>
      {isMobile ? (
        <>
          {showSidebar ? (
            <button
              className="flex text-3xl text-black items-center cursor-pointer fixed left-8 top-3 z-50"
              onClick={() => setShowSidebar(!showSidebar)}
            >
              x
            </button>
          ) : (
            <svg
              onClick={() => setShowSidebar(!showSidebar)}
              className=" z-30 flex items-center cursor-pointer left-10 top-6 ml-[-115px] "
              fill="#000"
              viewBox="0 0 100 80"
              width="30"
              height="20"
            >
              <rect width="100" height="5"></rect>
              <rect y="30" width="100" height="5"></rect>
              <rect y="60" width="100" height="5"></rect>
            </svg>
          )}

          <div
            className={`top-0 left-0 w-screen bg-white p-10  text-black fixed h-full z-40 ease-in-out duration-300 transform ${showSidebar ? "translate-x-0" : "-translate-x-full"
              }`}
          >

            <span>
            <div className="grid mt-10 gap-y-4" onClick={() => setShowSidebar(false)}>
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  className={cn(
                    'text-2xl  font-semibold transition-colors text-black ',
                  )}
                >
                  {route.label.toUpperCase()}
                </Link>
              ))}
            </div>

            </span>
            <hr className="h-[2px] bg-black mt-8" />

            <span>

            <div className="mt-10">
              <p className="mb-2">Über uns</p>
              <p>Hilfe</p>
            </div>

            </span>
            <hr className="h-[2px] bg-black mt-8" />
            <span>


              <div className="bg-[#E6E3DD] p-3 mt-10">
                <p className="text-[13px]">Shipping To: Switzerland</p>
              </div>


            </span>
          </div>
        </>
      ) : (
        <nav
          className="mx-6 flex items-center space-x-4 lg:space-x-6"
        >
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-black underline-animation',
                route.active ? 'text-black' : 'text-neutral-500'
              )}
            >
              {route.label.toUpperCase()}
            </Link>
          ))}
        </nav>
      )}
    </div>

  )
};

export default MainNav;