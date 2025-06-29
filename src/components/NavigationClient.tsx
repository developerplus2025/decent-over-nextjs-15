"use client";
import classNames from "classnames";
import { motion, useInView } from "framer-motion";

import React, {
  PointerEvent,
  FocusEvent,
  useEffect,
  useRef,
  useState,
  CSSProperties,
} from "react";
import Image from "next/image";
import { LinkPreview } from "@/components/ui/link-preview";
import { Toaster, toast } from "sonner";
import { usePathname } from "next/navigation";
import NextLink from "next/link";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Input } from "@/components/ui/input";

import Link from "next/link";

import { useTheme } from "next-themes";

import GitHub from "./GitHub";

import X from "./x";

import { ThemeToggle } from "./ThemeToggle";

import FeedBack from "./feedback";
import UserButtonServer from "./UserButtonServer";

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
];
interface NavigationProps {
  className?: string;
  children?: React.ReactNode;
  user?: any;
}

export default function NavigationClient({
  className,
  children,
  user,
}: NavigationProps) {
  //   const buttonRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const pathname = usePathname();
  const isWebfilmPath = pathname === "/webfilm";
  const isWebAppPath = pathname === "/webapp";
  const isDocsPath = pathname === "/docs";
  const isAi = pathname === "/ai";
  const isChatV2 = pathname === "/chat-v2";
  const isHelp = pathname === "/help";
  const isDocs = pathname === "/docs";
  const isGuides = pathname === "/guides";
  const isSignIn = pathname === "/signin";
  const isCreative = pathname === "/creative";
  const isGeneration = pathname === "/generation";
  const isDesign = pathname === "/design";
  //   const theme = useTheme();
  //   const [isScrolled, setIsScrolled] = useState(false);
  //   const [isBottom, setIsBottom] = useState(false);

  //   useEffect(() => {
  //     const handleScroll = () => {
  //       setIsScrolled(
  //         window.scrollY > 60 ||
  //           window.scrollY + window.innerHeight >=
  //             document.documentElement.scrollHeight,
  //       );
  //     };

  //     window.addEventListener("scroll", handleScroll);
  //     return () => window.removeEventListener("scroll", handleScroll);
  //   }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`${
        isWebfilmPath ||
        isWebAppPath ||
        isAi ||
        isChatV2 ||
        isSignIn ||
        isGuides ||
        isDocs ||
        isHelp ||
        isDesign ||
        pathname.startsWith("/docs")
          ? "webfilm-class"
          : ""
      } ${className} sticky top-0 z-20`}
    >
      <nav className="relative z-4 shrink-0 items-center justify-center min-[300px]:hidden sm:hidden md:hidden lg:flex xl:flex">
        <nav
          className={`${"border-b bg-[#0c0c0c]"} ${isDocsPath || isCreative || isGeneration ? "border-b bg-[#0c0c0c]" : "border-b"} relative z-1 flex w-full items-center justify-between gap-8 bg-white px-8 dark:border-[#292929] dark:bg-[#000000]`}
        >
          <div className="flex h-[58px] w-fit items-center gap-4 text-sm">
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="mask-logo-animation font-[BespokeStencil-Bold] text-[1.1rem] font-bold transition-colors duration-300 ease-out dark:text-white"
              >
                Decent
              </Link>
            </div>
            <NavigationMenu>
              <NavigationMenuList className="font-medium">
                <NavigationMenuItem className="px-3">
                  <Link
                    href="/creative"
                    className={`relative flex h-7 items-center rounded-full text-sm duration-300 ease-out ${
                      pathname === "/creative"
                        ? "dark:text-white"
                        : "dark:text-[#9b9b9b]"
                    } cursor-pointer transition-colors select-none dark:hover:text-white`}
                  >
                    <div
                      className={`transition-colors duration-300 ease-out dark:hover:text-white${
                        pathname === "/creative"
                          ? "dark:text-white"
                          : "dark:text-[#9b9b9b]"
                      }`}
                    >
                      Creative
                    </div>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem className="px-3">
                  <Link
                    href="/pricing"
                    className={`relative flex h-7 items-center rounded-full text-sm duration-300 ease-out ${
                      pathname === "/pricing"
                        ? "dark:text-white"
                        : "dark:text-[#9b9b9b]"
                    } cursor-pointer transition-colors select-none dark:hover:text-white`}
                  >
                    <div
                      className={`transition-colors duration-300 ease-out dark:hover:text-white${
                        pathname === "/pricing"
                          ? "dark:text-white"
                          : "dark:text-[#9b9b9b]"
                      }`}
                    >
                      Pricing
                    </div>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="px-3">
                  <Link
                    href="/blog"
                    className={`relative flex h-7 items-center rounded-full text-sm duration-300 ease-out ${
                      pathname === "/blog"
                        ? "dark:text-white"
                        : "dark:text-[#9b9b9b]"
                    } cursor-pointer transition-colors select-none dark:hover:text-white`}
                  >
                    <div
                      className={`transition-colors duration-300 ease-out dark:hover:text-white${
                        pathname === "/blog"
                          ? "dark:text-white"
                          : "dark:text-[#9b9b9b]"
                      }`}
                    >
                      Blog
                    </div>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="px-3">
                  <Link
                    href="/design"
                    className={`relative flex h-7 items-center rounded-full text-sm duration-300 ease-out ${
                      pathname === "/design"
                        ? "dark:text-white"
                        : "dark:text-[#9b9b9b]"
                    } cursor-pointer transition-colors select-none dark:hover:text-white`}
                  >
                    <div
                      className={`transition-colors duration-300 ease-out dark:hover:text-white${
                        pathname === "/design"
                          ? "dark:text-white"
                          : "dark:text-[#9b9b9b]"
                      }`}
                    >
                      Design
                    </div>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link
                    href="/docs"
                    className={`relative flex h-7 items-center rounded-full px-3 text-sm duration-300 ease-out ${
                      pathname === "/docs"
                        ? "dark:text-white"
                        : "dark:text-[#9b9b9b]"
                    } cursor-pointer transition-colors select-none dark:hover:text-white`}
                  >
                    Docs
                    {pathname != "/docs" && (
                      <sup>
                        <svg
                          data-testid="geist-icon"
                          height={12}
                          strokeLinejoin="round"
                          viewBox="0 0 15 15"
                          width={12}
                          style={{ color: "currentcolor" }}
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6.75011 4H6.00011V5.5H6.75011H9.43945L5.46978 9.46967L4.93945 10L6.00011 11.0607L6.53044 10.5303L10.499 6.56182V9.25V10H11.999V9.25V5C11.999 4.44772 11.5512 4 10.999 4H6.75011Z"
                            fill="currentColor"
                          />
                        </svg>
                      </sup>
                    )}
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Link
                    href="/radio"
                    className={`relative flex h-7 items-center rounded-full px-3 text-sm duration-300 ease-out ${
                      pathname === "/radio"
                        ? "dark:text-white"
                        : "dark:text-[#9b9b9b]"
                    } cursor-pointer transition-colors select-none dark:hover:text-white`}
                  >
                    Radio
                    <sup>
                      <svg
                        data-testid="geist-icon"
                        height={12}
                        strokeLinejoin="round"
                        viewBox="0 0 15 15"
                        width={12}
                        style={{ color: "currentcolor" }}
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M6.75011 4H6.00011V5.5H6.75011H9.43945L5.46978 9.46967L4.93945 10L6.00011 11.0607L6.53044 10.5303L10.499 6.56182V9.25V10H11.999V9.25V5C11.999 4.44772 11.5512 4 10.999 4H6.75011Z"
                          fill="currentColor"
                        />
                      </svg>
                    </sup>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem className="hidden">
                  <Link
                    href="/generation"
                    className={`relative flex h-7 items-center rounded-full text-sm duration-300 ease-out ${
                      pathname === "/generation"
                        ? "dark:text-white"
                        : "dark:text-[#9b9b9b]"
                    } ${
                      pathname === "/docs" ||
                      pathname === "/help" ||
                      pathname === "/guides"
                        ? "hidden"
                        : ""
                    } cursor-pointer transition-colors select-none dark:hover:text-white`}
                  >
                    <div
                      className={`transition-colors duration-300 ease-out dark:hover:text-white${
                        pathname === "/generation"
                          ? "dark:text-white"
                          : "dark:text-[#9b9b9b]"
                      }`}
                    >
                      Generation
                    </div>
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuIndicator />
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="flex items-center gap-4">
            <div className="h-[1.2rem] border-r"></div>
            <motion.div
              initial={{ opacity: 0 }} // Trạng thái ban đầu: mờ và di chuyển xuống
              animate={{ opacity: 1 }} // Trạng thái sau khi hoàn thành: rõ và về vị trí ban đầu
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex items-center justify-center gap-2"
            >
              <div className="hover:bg-muted flex h-[30px] w-[37px] cursor-pointer items-center justify-center rounded-md border transition-all duration-200 ease-out dark:hover:bg-[#101010]">
                <GitHub />
              </div>
              <div className="hover:bg-muted flex h-[30px] w-[37px] cursor-pointer items-center justify-center rounded-md border transition-all duration-200 ease-out dark:hover:bg-[#101010]">
                <X />
              </div>

              <ThemeToggle />

              <FeedBack />
            </motion.div>
            <UserButtonServer />
          </div>
          <div className="absolute top-0 left-0 z-3 rounded-full bg-slate-100 transition-[width] dark:bg-[#000000]" />
        </nav>
      </nav>
    </motion.div>
  );
}
