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
        <div className="absolute border-t left-1/2 top-[40px] flex h-[calc(100vh-50px)] w-screen -translate-x-1/2 flex-col justify-start bg-black p-[2rem]">
          <Link
            href="/"
            className="mask-logo-animation mb-6 font-[BespokeStencil-Bold] text-[1.1rem] font-bold transition-colors duration-300 ease-out dark:text-white"
          >
            Decent
          </Link>
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
      <div>
        <NavigationIcon open={isOpen} setOpen={setIsOpen} />
      </div>
    </div>
  );
}
