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
import dynamic from "next/dynamic";

// const UserButton = dynamic(() => import("./UserButtonClient"), {
//   ssr: false,
//   loading: () => <p>Loading...</p>,
// });
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
      } ${className} sticky top-0 z-20`}
    >
      <nav className="relative z-4 shrink-0 items-center justify-center min-[300px]:hidden sm:hidden md:hidden lg:flex xl:flex">
        <nav
          className={`${isScrolled || isBottom ? "border-b bg-[#0c0c0c]" : "border-b"} ${isDocsPath || isCreative || isGeneration ? "border-b bg-[#0c0c0c]" : "border-b"} relative z-1 flex w-full items-center justify-between gap-8 bg-white px-8 dark:border-[#292929] dark:bg-[#000000]`}
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
          <div className="flex items-center gap-4">
            {/* <div className="flex items-center justify-center gap-4">
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
              <div className="hover:bg-muted flex h-[30px] w-[37px] cursor-pointer items-center justify-center rounded-md border transition-all duration-200 ease-out dark:hover:bg-[#101010]">
                <GitHub />
              </div>
              <div className="hover:bg-muted flex h-[30px] w-[37px] cursor-pointer items-center justify-center rounded-md border transition-all duration-200 ease-out dark:hover:bg-[#101010]">
                <X />
              </div>

              <ThemeToggle />
              {/* <CommandMenu /> */}
              <FeedBack />
            </motion.div>
            {/* <UserButton/> */}
          </div>
          <div className="absolute top-0 left-0 z-3 rounded-full bg-slate-100 transition-[width] dark:bg-[#000000]" />
        </nav>
      </nav>
    </motion.div>
  );
}
