"use client";

import type { Variants } from "motion/react";
import * as motion from "motion/react-client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import NavigationIcon from "./comp-100";
import { MobileNav } from "./mobile-nav";
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
  {
    id: 6,
    name: "Nhận thẻ cào",
    src: "/free-card",
  },
];
export default function NavigationMobile({
  className,
  children,
}: NavigationMobileProps): React.ReactElement {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden"; // Tắt scroll
    } else {
      document.body.style.overflowY = "auto"; // Bật lại scroll
    }

    return () => {
      document.body.style.overflowY = "auto"; // Đảm bảo luôn khôi phục scroll khi unmount
    };
  }, [isOpen]);
  return (
    <div
      className={`${className} fixed top-0 z-50 flex h-[50px] w-full items-center justify-between border-b bg-black px-4`}
    >
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
          data-testid="geist-icon"
          height={16}
          strokeLinejoin="round"
          viewBox="0 0 16 16"
          width={16}
          style={{
            color: "currentcolor",
          }}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1.5 6.5C1.5 3.73858 3.73858 1.5 6.5 1.5C9.26142 1.5 11.5 3.73858 11.5 6.5C11.5 9.26142 9.26142 11.5 6.5 11.5C3.73858 11.5 1.5 9.26142 1.5 6.5ZM6.5 0C2.91015 0 0 2.91015 0 6.5C0 10.0899 2.91015 13 6.5 13C8.02469 13 9.42677 12.475 10.5353 11.596L13.9697 15.0303L14.5 15.5607L15.5607 14.5L15.0303 13.9697L11.596 10.5353C12.475 9.42677 13 8.02469 13 6.5C13 2.91015 10.0899 0 6.5 0Z"
            fill="currentColor"
          />
        </svg>
        <MobileNav />
      </div>
    </div>
  );
}
