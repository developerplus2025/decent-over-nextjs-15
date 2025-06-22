"use client";
import classNames from "classnames";
import { motion, useInView } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import {
  EllipsisVertical,
  Heart,
  House,
  ListPlus,
  Play,
  PlayCircle,
  Podcast,
  Save,
  SkipBack,
  SkipForward,
  UserRound,
} from "lucide-react";
import { Library } from "lucide-react";
import { CirclePlus } from "lucide-react";
import { Search } from "lucide-react";
import { CalendarPlus } from "lucide-react";
import { Mic } from "lucide-react";
import { CirclePlay } from "lucide-react";
import { LayoutGrid } from "lucide-react";
import { Radio } from "lucide-react";
import { ListMusic } from "lucide-react";
import { Clock } from "lucide-react";
import { Guitar } from "lucide-react";
import { PanelGroup, Panel } from "react-resizable-panels";
import { Music2 } from "lucide-react";
import { ThumbsUp } from "lucide-react";
import { Pizza } from "lucide-react";
import { Apple } from "lucide-react";
import { CupSoda } from "lucide-react";
import { Fish } from "lucide-react";
import { Ham } from "lucide-react";
import { Cake } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { Share2 } from "lucide-react";
import { User } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Mail } from "lucide-react";
import { Lightbulb } from "lucide-react";
import { Headphones } from "lucide-react";
import { WifiOff } from "lucide-react";
import { NotebookText } from "lucide-react";
import { Medal } from "lucide-react";
import { Eye } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
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
import {
  Menubar,
  MenubarCheckboxItem,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { ScrollAreaCorner } from "@radix-ui/react-scroll-area";
import { CMDK } from "./command-menu";
import LogoImage from "./LogoImage";
import { useTheme } from "next-themes";
import ShinyButton from "@/components/magicui/shiny-button";
import ShineBorder from "@/components/magicui/shine-border";
import Sparkles from "./Sparkles";
import GitHub from "./GitHub";
import Discord from "./Discord";
import X from "./x";
import Linkedin from "./Linkedin";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";
import PopoverNotifications from "./popover-notifications";
import FeedBack from "./feedback";
import { Text } from "./ui/text";
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
type NavigationProps = {
  className?: string;
  children: React.ReactNode;
};
export default function Navigation({
  className,
  children,
}: NavigationProps): React.ReactElement {
  const buttonRefs = useRef<Array<HTMLButtonElement | null>>([]);
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
  const theme = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBottom, setIsBottom] = useState(false);

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
      } sticky top-0 z-[20]`}
    >
      <nav className="relative z-[4] flex-shrink-0 items-center justify-center min-[375px]:hidden sm:hidden md:hidden lg:flex xl:flex">
        <nav
          className={`${isScrolled || isBottom ? "border-b bg-[#0c0c0c]" : "border-b"} ${isDocsPath || isCreative || isGeneration ? "border-b bg-[#0c0c0c]" : "border-b"} relative z-[1] flex w-full items-center justify-between gap-[2rem] bg-white px-[2rem] dark:border-[#292929] dark:bg-[#000000]`}
        >
          <div className="flex h-[58px] w-fit items-center gap-[1rem] text-sm">
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
                  <NavigationMenuContent className="flex w-[30rem] gap-[2.5rem] px-[1rem] py-[1rem] data-[motion=from-end]:animate-enterFromRight data-[motion=from-start]:animate-enterFromLeft data-[motion=to-end]:animate-exitToRight data-[motion=to-start]:animate-exitToLeft">
                    <div className="flex flex-col gap-[2rem]">
                      <div className="group flex cursor-pointer items-center gap-[0.5rem]">
                        <div>
                          <Lightbulb className="h-[2rem] w-[2rem] rounded-sm border p-1 text-[#a1a1a1] transition-colors duration-300 ease-out group-hover:bg-white group-hover:text-black" />
                        </div>
                        <div className="flex flex-col items-start justify-start">
                          <NavigationMenuLink className="text-nowrap text-sm font-bold">
                            Smart Recommendations
                          </NavigationMenuLink>
                          <p className="text-nowrap text-xs text-[#a1a1a1] transition-colors duration-300 ease-out group-hover:text-white">
                            Discover music curated just for you.
                          </p>
                        </div>
                      </div>
                      <div className="group flex cursor-pointer items-center gap-[0.5rem]">
                        <div>
                          <WifiOff className="h-[2rem] w-[2rem] rounded-sm border p-1 text-[#a1a1a1] transition-colors duration-300 ease-out group-hover:bg-white group-hover:text-black" />
                        </div>
                        <div className="flex flex-col items-start justify-start">
                          <NavigationMenuLink className="text-nowrap text-sm font-bold">
                            Offline Mode
                          </NavigationMenuLink>
                          <p className="text-nowrap text-xs text-[#a1a1a1] transition-colors duration-300 ease-out group-hover:text-white">
                            Download songs and listen offline.
                          </p>
                        </div>
                      </div>
                      <div className="group flex cursor-pointer items-center gap-[0.5rem]">
                        <div>
                          <Podcast className="h-[2rem] w-[2rem] rounded-sm border p-1 text-[#a1a1a1] transition-colors duration-300 ease-out group-hover:bg-white group-hover:text-black" />
                        </div>
                        <div className="flex flex-col items-start justify-start">
                          <NavigationMenuLink className="text-nowrap text-sm font-bold">
                            Podcasts
                          </NavigationMenuLink>
                          <p className="text-nowrap text-xs text-[#a1a1a1] transition-colors duration-300 ease-out group-hover:text-white">
                            Access a wide range of podcasts.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-between">
                      <div className="group flex cursor-pointer items-center gap-[0.5rem]">
                        <div>
                          <NotebookText className="h-[2rem] w-[2rem] rounded-sm border p-1 text-[#a1a1a1] transition-colors duration-300 ease-out group-hover:bg-white group-hover:text-black" />
                        </div>
                        <div className="flex flex-col items-start justify-start">
                          <NavigationMenuLink className="text-nowrap text-sm font-bold">
                            Lyrics Display
                          </NavigationMenuLink>
                          <p className="text-nowrap text-xs text-[#a1a1a1] transition-colors duration-300 ease-out group-hover:text-white">
                            Sing along with on-screen lyrics.
                          </p>
                        </div>
                      </div>
                      <div className="group flex cursor-pointer items-center gap-[0.5rem]">
                        <div>
                          <Medal className="h-[2rem] w-[2rem] rounded-sm border p-1 text-[#a1a1a1] transition-colors duration-300 ease-out group-hover:bg-white group-hover:text-black" />
                        </div>
                        <div className="flex flex-col items-start justify-start">
                          <NavigationMenuLink className="text-nowrap text-sm font-bold">
                            High-Quality Audio
                          </NavigationMenuLink>
                          <p className="text-nowrap text-xs text-[#a1a1a1] transition-colors duration-300 ease-out group-hover:text-white">
                            Enjoy lossless audio streaming.
                          </p>
                        </div>
                      </div>
                      <div className="group flex cursor-pointer items-center gap-[0.5rem]">
                        <div>
                          <Share2 className="h-[2rem] w-[2rem] rounded-sm border p-1 text-[#a1a1a1] transition-colors duration-300 ease-out group-hover:bg-white group-hover:text-black" />
                        </div>
                        <div className="flex flex-col items-start justify-start">
                          <NavigationMenuLink className="text-nowrap text-sm font-bold">
                            Social Sharing
                          </NavigationMenuLink>
                          <p className="text-nowrap text-xs text-[#a1a1a1] transition-colors duration-300 ease-out group-hover:text-white">
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
                    } cursor-pointer select-none transition-colors dark:hover:text-white`}
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
                  <NavigationMenuContent className="flex w-[37rem] justify-between gap-[2.5rem] px-[1rem] py-[1rem]">
                    <div className="grid w-[37rem] grid-cols-2 place-content-between gap-[2rem]">
                      <div>
                        <h1 className="text-[1rem] text-[#a1a1a1]">Playlist</h1>
                      </div>
                      <div className="flex flex-col gap-[1.8rem]">
                        <div className="group flex cursor-pointer items-center gap-[0.5rem]">
                          <div>
                            <ListPlus className="h-[2rem] w-[2rem] rounded-sm border p-1 text-[#a1a1a1] transition-colors duration-300 ease-out group-hover:bg-white group-hover:text-black" />
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
                        <div className="group flex cursor-pointer items-center gap-[0.5rem]">
                          <div>
                            <Clock className="h-[2rem] w-[2rem] rounded-sm border p-1 text-[#a1a1a1] transition-colors duration-300 ease-out group-hover:bg-white group-hover:text-black" />
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
                        <div className="group flex cursor-pointer items-center gap-[0.5rem]">
                          <div>
                            <Save className="h-[2rem] w-[2rem] rounded-sm border p-1 text-[#a1a1a1] transition-colors duration-300 ease-out group-hover:bg-white group-hover:text-black" />
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
                    } cursor-pointer select-none transition-colors dark:hover:text-white`}
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
                    } cursor-pointer select-none transition-colors dark:hover:text-white`}
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
                    } cursor-pointer select-none transition-colors dark:hover:text-white`}
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
                    } cursor-pointer select-none transition-colors dark:hover:text-white`}
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
                    } cursor-pointer select-none transition-colors dark:hover:text-white`}
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
                    } cursor-pointer select-none transition-colors dark:hover:text-white`}
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

                {/* <NavigationMenuItem>
                  <Link href="/aboutus" >
                    <Link
                      className={`relative flex h-7 items-center rounded-full px-3 text-sm duration-300 ease-out ${
                        pathname === "/aboutus"
                          ? "dark:text-white"
                          : "dark:text-[#9b9b9b]"
                      } cursor-pointer select-none transition-colors dark:hover:text-white`}
                    >
                      About Us
                    </Link>
                  </Link>
                </NavigationMenuItem> */}
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
                    } cursor-pointer select-none transition-colors dark:hover:text-white`}
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
                {/* <NavigationMenuItem>
                  <NavigationMenuTrigger>Support</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[1320px]">
                      {components.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem> */}
                <NavigationMenuIndicator />
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          <div className="flex items-center gap-[1rem]">
            {/* <div className="flex items-center justify-center gap-[1rem]">
              <LinkPreview
                className="flex cursor-pointer items-center gap-4 rounded-lg border px-3 py-1"
                url="https://github.com/devplus2024"
                isStatic
                imageSrc="/Opera Snapshot_2024-10-31_172630_github.com.png"
              >
                <GitHub />
                <span className="text-sm">Github</span>
              </LinkPreview>
              <LinkPreview
                imageSrc="/Opera Snapshot_2024-10-31_172414_x.com.png"
                isStatic
                className="flex cursor-pointer items-center gap-4 rounded-lg border px-3 py-1"
                url="https://x.com/DeveloperPlus24"
              >
                <X />
                <span className="text-sm">Twitter</span>
              </LinkPreview>
            </div> */}
            <div className="h-[1.2rem] border-r"></div>
            <motion.div
              initial={{ opacity: 0 }} // Trạng thái ban đầu: mờ và di chuyển xuống
              animate={{ opacity: 1 }} // Trạng thái sau khi hoàn thành: rõ và về vị trí ban đầu
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex items-center justify-center gap-2"
            >
              <div className="flex h-[30px] w-[37px] cursor-pointer items-center justify-center rounded-md border transition-all duration-200 ease-out hover:bg-muted dark:hover:bg-[#101010]">
                <GitHub />
              </div>
              <div className="flex h-[30px] w-[37px] cursor-pointer items-center justify-center rounded-md border transition-all duration-200 ease-out hover:bg-muted dark:hover:bg-[#101010]">
                <X />
              </div>

              <ThemeToggle />
              {/* <CommandMenu /> */}
              <FeedBack />
            </motion.div>
            <div className="flex items-center gap-[1rem]">
              <Link
                className="flex items-center justify-center gap-3"
                href="/signin"
              >
                <motion.div
                  className="relative"
                  initial={{ opacity: 0 }} // Trạng thái ban đầu: mờ và di chuyển xuống
                  animate={{ opacity: 1 }} // Trạng thái sau khi hoàn thành: rõ và về vị trí ban đầu
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <div className="absolute bottom-0 left-1/2 h-px w-full -translate-x-1/2 rounded-lg bg-gradient-to-r from-transparent via-zinc-700 to-transparent dark:via-zinc-300"></div>
                  <Button
                    variant={"outline"}
                    className="flex h-fit items-center px-3 py-1 hover:bg-accent dark:hover:bg-[#1a1a1a]"
                  >
                    {/* <Image
                      src={"/windows11.svg"}
                      className="mr-2 h-[16px] w-[16px] dark:invert-[1]"
                      width={"16"}
                      height={"16"}
                      alt="window-logo"
                    ></Image> */}
                    {/* Install */}
                    Sign In
                  </Button>
                </motion.div>
              </Link>
              <div>
                <motion.div
                  initial={{ opacity: 0 }} // Trạng thái ban đầu: mờ và di chuyển xuống
                  animate={{ opacity: 1 }} // Trạng thái sau khi hoàn thành: rõ và về vị trí ban đầu
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <div className="relative">
                        <div className="absolute bottom-0 left-1/2 h-px w-full -translate-x-1/2 rounded-lg bg-gradient-to-r from-transparent via-zinc-700 to-transparent dark:via-zinc-300"></div>
                        <Button
                          variant={"outline"}
                          className="h-fit gap-1 px-3 py-1 [&_svg]:size-[15px]"
                        >
                          Create Account
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="#ffffff"
                            viewBox="0 0 256 256"
                          >
                            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm29.66-93.66a8,8,0,0,1,0,11.32l-40,40a8,8,0,0,1-11.32-11.32L140.69,128,106.34,93.66a8,8,0,0,1,11.32-11.32Z"></path>
                          </svg>
                        </Button>
                      </div>
                    </AlertDialogTrigger>
                    <AlertDialogContent className="w-[400px]">
                      <AlertDialogHeader>
                        <AlertDialogTitle className="text-center">
                          Login
                        </AlertDialogTitle>
                        <AlertDialogDescription className="flex flex-col gap-[1rem]">
                          <Button variant={"outline"} className="rounded-full">
                            <svg
                              data-testid="geist-icon"
                              height={16}
                              strokeLinejoin="round"
                              style={{ color: "currentColor" }}
                              viewBox="0 0 16 16"
                              width={16}
                            >
                              <g clipPath="url(#clip0_872_3147)">
                                <path
                                  fillRule="evenodd"
                                  clipRule="evenodd"
                                  d="M8 0C3.58 0 0 3.57879 0 7.99729C0 11.5361 2.29 14.5251 5.47 15.5847C5.87 15.6547 6.02 15.4148 6.02 15.2049C6.02 15.0149 6.01 14.3851 6.01 13.7154C4 14.0852 3.48 13.2255 3.32 12.7757C3.23 12.5458 2.84 11.836 2.5 11.6461C2.22 11.4961 1.82 11.1262 2.49 11.1162C3.12 11.1062 3.57 11.696 3.72 11.936C4.44 13.1455 5.59 12.8057 6.05 12.5957C6.12 12.0759 6.33 11.726 6.56 11.5261C4.78 11.3262 2.92 10.6364 2.92 7.57743C2.92 6.70773 3.23 5.98797 3.74 5.42816C3.66 5.22823 3.38 4.40851 3.82 3.30888C3.82 3.30888 4.49 3.09895 6.02 4.1286C6.66 3.94866 7.34 3.85869 8.02 3.85869C8.7 3.85869 9.38 3.94866 10.02 4.1286C11.55 3.08895 12.22 3.30888 12.22 3.30888C12.66 4.40851 12.38 5.22823 12.3 5.42816C12.81 5.98797 13.12 6.69773 13.12 7.57743C13.12 10.6464 11.25 11.3262 9.47 11.5261C9.76 11.776 10.01 12.2558 10.01 13.0056C10.01 14.0752 10 14.9349 10 15.2049C10 15.4148 10.15 15.6647 10.55 15.5847C12.1381 15.0488 13.5182 14.0284 14.4958 12.6673C15.4735 11.3062 15.9996 9.67293 16 7.99729C16 3.57879 12.42 0 8 0Z"
                                  fill="currentColor"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_872_3147">
                                  <rect width={16} height={16} fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            Login with Github
                          </Button>
                          <Button variant={"outline"} className="rounded-full">
                            <svg
                              data-testid="geist-icon"
                              height={16}
                              strokeLinejoin="round"
                              viewBox="0 0 16 16"
                              width={16}
                              style={{ color: "currentcolor" }}
                            >
                              <path
                                d="M8.15991 6.54543V9.64362H12.4654C12.2763 10.64 11.709 11.4837 10.8581 12.0509L13.4544 14.0655C14.9671 12.6692 15.8399 10.6182 15.8399 8.18188C15.8399 7.61461 15.789 7.06911 15.6944 6.54552L8.15991 6.54543Z"
                                fill="#4285F4"
                              />
                              <path
                                d="M3.6764 9.52268L3.09083 9.97093L1.01807 11.5855C2.33443 14.1963 5.03241 16 8.15966 16C10.3196 16 12.1305 15.2873 13.4542 14.0655L10.8578 12.0509C10.1451 12.5309 9.23598 12.8219 8.15966 12.8219C6.07967 12.8219 4.31245 11.4182 3.67967 9.5273L3.6764 9.52268Z"
                                fill="#34A853"
                              />
                              <path
                                d="M1.01803 4.41455C0.472607 5.49087 0.159912 6.70543 0.159912 7.99995C0.159912 9.29447 0.472607 10.509 1.01803 11.5854C1.01803 11.5926 3.6799 9.51991 3.6799 9.51991C3.5199 9.03991 3.42532 8.53085 3.42532 7.99987C3.42532 7.46889 3.5199 6.95983 3.6799 6.47983L1.01803 4.41455Z"
                                fill="#FBBC05"
                              />
                              <path
                                d="M8.15982 3.18545C9.33802 3.18545 10.3853 3.59271 11.2216 4.37818L13.5125 2.0873C12.1234 0.792777 10.3199 0 8.15982 0C5.03257 0 2.33443 1.79636 1.01807 4.41455L3.67985 6.48001C4.31254 4.58908 6.07983 3.18545 8.15982 3.18545Z"
                                fill="#EA4335"
                              />
                            </svg>
                            Login with Google
                          </Button>
                          <Button variant={"outline"} className="rounded-full">
                            <svg
                              data-testid="geist-icon"
                              height={16}
                              strokeLinejoin="round"
                              viewBox="0 0 16 16"
                              width={16}
                              style={{ color: "currentcolor" }}
                            >
                              <g clipPath="url(#clip0_872_3176)">
                                <path
                                  d="M15.5274 6.68664L15.5055 6.63069L13.3858 1.0989C13.3427 0.990478 13.2663 0.898505 13.1677 0.836175C13.069 0.774904 12.9539 0.745394 12.8379 0.751629C12.7219 0.757865 12.6106 0.799545 12.519 0.871043C12.4285 0.944593 12.3628 1.04426 12.3309 1.15647L10.8997 5.53519H5.10437L3.67318 1.15647C3.64214 1.04365 3.57631 0.943483 3.48506 0.870232C3.39349 0.798734 3.28219 0.757054 3.16619 0.750818C3.05018 0.744583 2.93506 0.774093 2.83636 0.835364C2.73794 0.897946 2.66164 0.989838 2.61823 1.09809L0.494551 6.62744L0.473468 6.68339C0.168338 7.48065 0.130675 8.3555 0.366157 9.17603C0.601639 9.99656 1.0975 10.7183 1.77898 11.2324L1.78627 11.2381L1.80574 11.2519L5.03464 13.6699L6.63206 14.8789L7.60511 15.6136C7.71893 15.7 7.85791 15.7468 8.00082 15.7468C8.14373 15.7468 8.28271 15.7 8.39652 15.6136L9.36957 14.8789L10.967 13.6699L14.2154 11.2373L14.2235 11.2308C14.9034 10.7166 15.3981 9.99558 15.6332 9.17616C15.8684 8.35673 15.8312 7.48313 15.5274 6.68664Z"
                                  fill="#E24329"
                                />
                                <path
                                  d="M15.5273 6.68661L15.5055 6.63066C14.4726 6.84266 13.4994 7.28014 12.6552 7.91184L8 11.4319C9.58526 12.6311 10.9654 13.6731 10.9654 13.6731L14.2137 11.2405L14.2218 11.234C14.9028 10.7198 15.3982 9.99836 15.6337 9.17823C15.8691 8.35811 15.8318 7.48369 15.5273 6.68661Z"
                                  fill="#FC6D26"
                                />
                                <path
                                  d="M5.03461 13.6731L6.63203 14.8821L7.60508 15.6168C7.7189 15.7032 7.85788 15.75 8.00079 15.75C8.14369 15.75 8.28267 15.7032 8.39649 15.6168L9.36954 14.8821L10.967 13.6731C10.967 13.6731 9.58524 12.6279 7.99998 11.4318C6.41472 12.6279 5.03461 13.6731 5.03461 13.6731Z"
                                  fill="#FCA326"
                                />
                                <path
                                  d="M3.3439 7.91184C2.50043 7.27884 1.52738 6.84022 0.49449 6.62742L0.473407 6.68337C0.168277 7.48063 0.130614 8.35547 0.366096 9.176C0.601578 9.99653 1.09744 10.7183 1.77892 11.2324L1.78621 11.2381L1.80567 11.2518L5.03458 13.6699C5.03458 13.6699 6.41306 12.6279 7.99995 11.4286L3.3439 7.91184Z"
                                  fill="#FC6D26"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_872_3176">
                                  <rect width={16} height={16} fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                            Login with GitLab
                          </Button>
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter className="hidden">
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction>Continue</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </motion.div>
              </div>
            </div>
          </div>
          <div className="absolute left-0 top-0 z-[3] rounded-full bg-slate-100 transition-[width] dark:bg-[#000000]" />
        </nav>
      </nav>
    </motion.div>
  );
}
