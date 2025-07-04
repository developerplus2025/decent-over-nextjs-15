"use client";

import { motion } from "framer-motion";
import {
  Lightbulb,
  Medal,
  NotebookText,
  Podcast,
  Share2,
  WifiOff,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import type React from "react";

import { SearchDialog } from "fumadocs-ui/components/dialog/search";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import UserButtonClient from "./UserButtonClient";

// const UserButton = dynamic(() => import("./UserButtonClient"), {
//   ssr: false,
//   loading: () => <p>Loading...</p>,
// });

type NavigationProps = {
  className?: string;
  children: React.ReactNode;
};
export default function Navigation({ className }: NavigationProps): React.ReactElement {
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

  const [isScrolled, setIsScrolled] = useState(false);

  const [open, setOpen] = useState<boolean>();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(
        window.scrollY > 60 ||
          window.scrollY + window.innerHeight >=
            document.documentElement.scrollHeight,
      );
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div
      // initial={{ opacity: 0, y: -20 }}
      // animate={{ opacity: 1, y: 0 }}
      // transition={{ duration: 0.5, ease: "easeOut" }}
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
          className={`${isScrolled ? "border-b bg-[#0c0c0c]" : "border-b"} ${isDocsPath || isCreative || isGeneration ? "border-b bg-[#0c0c0c]" : "border-b"} relative z-1 flex w-full items-center justify-between gap-8 bg-white px-8 dark:border-[#292929] dark:bg-[#000000]`}
        >
          <div className="flex h-[58px] w-fit items-center gap-4 text-sm">
            <div className="flex items-center gap-4">
              <Link
                href="/"
                className="mask-logo-animation font-[BespokeStencil-Bold] text-[1.1rem] font-bold transition-colors duration-300 ease-out dark:text-white"
              >
                Decent
              </Link>
              {/* <Link
                href="/"
                className="rounded-full border px-4 py-1 text-xs font-bold transition-colors duration-300 ease-out dark:text-white"
              >
                v10.9.5
              </Link> */}
            </div>
            <NavigationMenu>
              <NavigationMenuList className="font-medium">
                <NavigationMenuItem className="hidden">
                  <NavigationMenuTrigger className="pr-3 text-[#9b9b9b]">
                    Feature
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="data-[motion=from-end]:animate-enter-from-right data-[motion=from-start]:animate-enter-from-left data-[motion=to-end]:animate-exit-to-right data-[motion=to-start]:animate-exit-to-left flex w-120 gap-10 px-4 py-4">
                    <div className="flex flex-col gap-8">
                      <div className="group flex cursor-pointer items-center gap-2">
                        <div>
                          <Lightbulb className="h-8 w-8 rounded-sm border p-1 text-[#a1a1a1] transition-colors duration-300 ease-out group-hover:bg-white group-hover:text-black" />
                        </div>
                        <div className="flex flex-col items-start justify-start">
                          <NavigationMenuLink className="text-sm font-bold text-nowrap">
                            Smart Recommendations
                          </NavigationMenuLink>
                          <p className="text-xs text-nowrap text-[#a1a1a1] transition-colors duration-300 ease-out group-hover:text-white">
                            Discover music curated just for you.
                          </p>
                        </div>
                      </div>
                      <div className="group flex cursor-pointer items-center gap-2">
                        <div>
                          <WifiOff className="h-8 w-8 rounded-sm border p-1 text-[#a1a1a1] transition-colors duration-300 ease-out group-hover:bg-white group-hover:text-black" />
                        </div>
                        <div className="flex flex-col items-start justify-start">
                          <NavigationMenuLink className="text-sm font-bold text-nowrap">
                            Offline Mode
                          </NavigationMenuLink>
                          <p className="text-xs text-nowrap text-[#a1a1a1] transition-colors duration-300 ease-out group-hover:text-white">
                            Download songs and listen offline.
                          </p>
                        </div>
                      </div>
                      <div className="group flex cursor-pointer items-center gap-2">
                        <div>
                          <Podcast className="h-8 w-8 rounded-sm border p-1 text-[#a1a1a1] transition-colors duration-300 ease-out group-hover:bg-white group-hover:text-black" />
                        </div>
                        <div className="flex flex-col items-start justify-start">
                          <NavigationMenuLink className="text-sm font-bold text-nowrap">
                            Podcasts
                          </NavigationMenuLink>
                          <p className="text-xs text-nowrap text-[#a1a1a1] transition-colors duration-300 ease-out group-hover:text-white">
                            Access a wide range of podcasts.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-between">
                      <div className="group flex cursor-pointer items-center gap-2">
                        <div>
                          <NotebookText className="h-8 w-8 rounded-sm border p-1 text-[#a1a1a1] transition-colors duration-300 ease-out group-hover:bg-white group-hover:text-black" />
                        </div>
                        <div className="flex flex-col items-start justify-start">
                          <NavigationMenuLink className="text-sm font-bold text-nowrap">
                            Lyrics Display
                          </NavigationMenuLink>
                          <p className="text-xs text-nowrap text-[#a1a1a1] transition-colors duration-300 ease-out group-hover:text-white">
                            Sing along with on-screen lyrics.
                          </p>
                        </div>
                      </div>
                      <div className="group flex cursor-pointer items-center gap-2">
                        <div>
                          <Medal className="h-8 w-8 rounded-sm border p-1 text-[#a1a1a1] transition-colors duration-300 ease-out group-hover:bg-white group-hover:text-black" />
                        </div>
                        <div className="flex flex-col items-start justify-start">
                          <NavigationMenuLink className="text-sm font-bold text-nowrap">
                            High-Quality Audio
                          </NavigationMenuLink>
                          <p className="text-xs text-nowrap text-[#a1a1a1] transition-colors duration-300 ease-out group-hover:text-white">
                            Enjoy lossless audio streaming.
                          </p>
                        </div>
                      </div>
                      <div className="group flex cursor-pointer items-center gap-2">
                        <div>
                          <Share2 className="h-8 w-8 rounded-sm border p-1 text-[#a1a1a1] transition-colors duration-300 ease-out group-hover:bg-white group-hover:text-black" />
                        </div>
                        <div className="flex flex-col items-start justify-start">
                          <NavigationMenuLink className="text-sm font-bold text-nowrap">
                            Social Sharing
                          </NavigationMenuLink>
                          <p className="text-xs text-nowrap text-[#a1a1a1] transition-colors duration-300 ease-out group-hover:text-white">
                            Share your favorite tracks on social media.
                          </p>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem className="px-3">
                  <Link
                    href="/library"
                    className={`relative flex h-7 items-center rounded-full text-sm duration-300 ease-out ${
                      pathname === "/library"
                        ? "dark:text-white"
                        : "dark:text-[#9b9b9b]"
                    } cursor-pointer transition-colors select-none dark:hover:text-white`}
                  >
                    <div
                      className={`transition-colors duration-300 ease-out dark:hover:text-white ${
                        pathname === "/library"
                          ? "dark:text-white"
                          : "dark:text-[#9b9b9b]"
                      }`}
                    >
                      Library
                    </div>
                  </Link>
                </NavigationMenuItem>
                {/* <NavigationMenuItem >
                  <NavigationMenuTrigger className="text-[#9b9b9b]">
                    Library
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="flex w-148 justify-between gap-10 px-4 py-4">
                    <div className="grid w-148 grid-cols-2 place-content-between gap-8">
                      <div>
                        <h1 className="text-[1rem] text-[#a1a1a1]">Playlist</h1>
                      </div>
                      <div className="flex flex-col gap-[1.8rem]">
                        <div className="group flex cursor-pointer items-center gap-2">
                          <div>
                            <ListPlus className="h-8 w-8 rounded-sm border p-1 text-[#a1a1a1] transition-colors duration-300 ease-out group-hover:bg-white group-hover:text-black" />
                          </div>
                          <div className="flex flex-col items-start justify-start">
                            <Link className="text-nowrap text-sm font-bold">
                              Create New
                            </Link>
                            <p className="text-nowrap text-xs text-[#a1a1a1] transition-colors duration-300 ease-out group-hover:text-white">
                              Start personalized playlists here.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div>
                        <h1 className="text-md text-[#a1a1a1]">
                          Listening History
                        </h1>
                      </div>
                      <div className="flex flex-col gap-[1.8rem]">
                        <div className="group flex cursor-pointer items-center gap-2">
                          <div>
                            <Clock className="h-8 w-8 rounded-sm border p-1 text-[#a1a1a1] transition-colors duration-300 ease-out group-hover:bg-white group-hover:text-black" />
                          </div>
                          <div className="flex flex-col items-start justify-start">
                            <Link className="text-nowrap text-sm font-bold">
                              Recent
                            </Link>
                            <p className="text-nowrap text-xs text-[#a1a1a1] transition-colors duration-300 ease-out group-hover:text-white">
                              Review recently played songs and albums.
                            </p>
                          </div>
                        </div>
                        <div className="group flex cursor-pointer items-center gap-2">
                          <div>
                            <Save className="h-8 w-8 rounded-sm border p-1 text-[#a1a1a1] transition-colors duration-300 ease-out group-hover:bg-white group-hover:text-black" />
                          </div>
                          <div className="flex flex-col items-start justify-start">
                            <Link className="text-nowrap text-sm font-bold">
                              Saved
                            </Link>
                            <p className="text-nowrap text-xs text-[#a1a1a1] transition-colors duration-300 ease-out group-hover:text-white">
                              Access saved songs and albums.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem> */}
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
                    {pathname !== "/docs" && (
                      <sup>
                        <svg
                          data-testid="geist-icon"
                          height={12}
                          strokeLinejoin="round"
                          viewBox="0 0 15 15"
                          width={12}
                          style={{ color: "currentcolor" }}
                        >
                          <title>Arrow Up Right</title>
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
                        <title>Arrow Up Right</title>
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
            {open !== undefined ? (
              <SearchDialog
                open={open}
                onOpenChange={setOpen}
                search=""
                onSearchChange={() => {}}
              >
                {/* Placeholder content for SearchDialog */}
                <div />
              </SearchDialog>
            ) : null}
            <Button onClick={() => setOpen(true)} />
            <UserButtonClient />
          </div>
          <div className="absolute top-0 left-0 z-3 rounded-full bg-slate-100 transition-[width] dark:bg-[#000000]" />
        </nav>
      </nav>
    </motion.div>
  );
}
