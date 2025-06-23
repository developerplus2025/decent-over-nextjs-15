"use client";

import type { Variants } from "motion/react";
import * as motion from "motion/react-client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import NavigationIcon from "./comp-100";
type NavigationMobileProps = {
  className?: string;
  children: React.ReactNode;
};
const LinkItem = [
  {
    id: 1,
    name: "Home",
    src: "/",
  },
  {
    id: 2,
    name: "Library",
    src: "/library",
  },
  {
    id: 3,
    name: "Creative",
    src: "/creative",
  },
  {
    id: 4,
    name: "Blog",
    src: "/blog",
  },
  {
    id: 5,
    name: "Design",
    src: "/design",
  },
  {
    id: 5,
    name: "Docs",
    src: "/docs",
  },
  {
    id: 5,
    name: "Radio",
    src: "/radio",
  },
];
export default function NavigationMobile({
  className,
  children,
}: NavigationMobileProps): React.ReactElement {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={`${className} fixed top-0 z-50 flex h-[50px] w-full items-center justify-between border-b bg-black px-[1rem]`}
    >
      {isOpen && (
        <div className="absolute left-1/2 top-[50px] flex h-[calc(100vh-50px)] w-screen -translate-x-1/2 flex-col justify-start bg-black p-[2rem]">
          <nav className="flex flex-col gap-4">
            {LinkItem.map((item) => (
              <Link
                key={item.id + item.name}
                href={item.src}
                className="text-lg font-medium text-white"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
      <div className="flex items-center gap-4">
        <Link
          href="/"
          className="mask-logo-animation font-[BespokeStencil-Bold] text-[1.1rem] font-bold transition-colors duration-300 ease-out dark:text-white"
        >
          Decent
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#ffffff"
          viewBox="0 0 256 256"
        >
          <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
        </svg>
        <NavigationIcon open={isOpen} setOpen={setIsOpen} />
      </div>
    </div>
  );
}
