"use client";
import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { motion } from "framer-motion";
import { useAuth } from "@workos-inc/authkit-nextjs/components";
import { Button } from "@/components/ui/button";
import { handleSignOutAction } from "../app/actions/signOut";
import { useRouter } from "next/navigation";
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
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { useEffect, useRef, useState } from "react";
import { VisuallyHidden } from "@radix-ui/themes";
import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";
import FeedBack from "./feedback";
import GitHub from "./GitHub";
import X from "./x";
import { LogOut } from "lucide-react";

function removeVietnameseTones(str?: string): string {
  if (!str) return "";
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D");
}
export default function UserButtonClient() {
  const router = useRouter();

  const {
    data: session,

    isPending, //loading state
    error, //error object
    refetch, //refetch the session
  } = authClient.useSession();
  const handleLogout = async () => {
    await authClient.signOut();
    authClient.refreshToken;
    refetch();
    router.push("/");
  };
  const variants = {
    visible: { opacity: 1, display: "flex" },
    hidden: { opacity: 0, transitionEnd: { display: "none" } },
  };
  const [open, setOpen] = useState("close");
  const { user, loading } = useAuth();
  const [active, setActive] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setActive(true);
    }, 3000);
  }, [active, setActive]);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node)
      ) {
        setOpen(open === "open" ? "closed" : "open");
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  const name = session?.user.name;
  const cleanName = removeVietnameseTones(name); // "Pham Quang Truong An"
  return (
    <div className={`flex items-center gap-4`}>
      {session?.user && (
        <motion.div
          initial={{ opacity: 0 }} // Trạng thái ban đầu: mờ và di chuyển xuống
          animate={active ? { opacity: 1 } : { opacity: 0 }} // Trạng thái sau khi hoàn thành: rõ và về vị trí ban đầu
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={`${active ? "" : "pointer-events-none"} flex items-center gap-2`}
        >
          <div className="hover:bg-muted flex h-[30px] w-[37px] cursor-pointer items-center justify-center rounded-md border transition-all duration-200 ease-out dark:hover:bg-[#101010]">
            <GitHub />
          </div>
          <div className="hover:bg-muted flex h-[30px] w-[37px] cursor-pointer items-center justify-center rounded-md border transition-all duration-200 ease-out dark:hover:bg-[#101010]">
            <X />
          </div>

          <ThemeToggle />

          <FeedBack />
          <div>
            <div
              className="relative cursor-pointer"
              onClick={(e) => {
                e.stopPropagation();
                setOpen(open === "open" ? "closed" : "open");
              }}
            >
              {session && session.user && session.user.image ? (
                <img
                  height={40}
                  width={40}
                  alt={session.user.image}
                  src={session.user.image}
                  className="h-[2.1rem] w-[2.1rem] rounded-full"
                />
              ) : (
                <div className="h-[2.1rem] w-[2.1rem] cursor-pointer rounded-full bg-linear-to-r from-cyan-500 to-blue-500" />
              )}
            </div>
            {open === "open" ? (
              <div
                ref={popoverRef}
                data-state={open}
                data-side="right"
                // initial={{ opacity: 0 }}
                // animate={open ? { opacity: 1 } : { opacity: 0 }}
                // transition={{ duration: 0.5, ease: "easeOut" }}
                className="data-[state=open]:animate-in data data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 absolute top-[3.5rem] right-[2rem] flex h-fit w-[16rem] origin-(--radix-popover-content-transform-origin) translate-0 flex-col justify-between rounded-xl border border-[#2c2c2c] bg-black"
              >
                <div className="flex w-full flex-col gap-2">
                  <div className="flex flex-col gap-2 px-4 py-2">
                    <h1 className="text-sm">{cleanName}</h1>
                    <span className="text-sm text-[#a1a1a1]">
                      {session?.user?.email ?? ""}
                    </span>
                  </div>
                  <div className="border-b border-b-[#302f2f]"></div>
                  <div className="flex w-full flex-col gap-2 px-4 py-2 [&_svg]:size-4">
                    <Button
                      className="w-full justify-between"
                      variant="outline"
                    >
                      Account Settings
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="#ffffff"
                        viewBox="0 0 256 256"
                      >
                        <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.21,107.21,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.71,107.71,0,0,0-26.25-10.87,8,8,0,0,0-7.06,1.49L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.21,107.21,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Zm-16.1-6.5a73.93,73.93,0,0,1,0,8.68,8,8,0,0,0,1.74,5.48l14.19,17.73a91.57,91.57,0,0,1-6.23,15L187,173.11a8,8,0,0,0-5.1,2.64,74.11,74.11,0,0,1-6.14,6.14,8,8,0,0,0-2.64,5.1l-2.51,22.58a91.32,91.32,0,0,1-15,6.23l-17.74-14.19a8,8,0,0,0-5-1.75h-.48a73.93,73.93,0,0,1-8.68,0,8,8,0,0,0-5.48,1.74L100.45,215.8a91.57,91.57,0,0,1-15-6.23L82.89,187a8,8,0,0,0-2.64-5.1,74.11,74.11,0,0,1-6.14-6.14,8,8,0,0,0-5.1-2.64L46.43,170.6a91.32,91.32,0,0,1-6.23-15l14.19-17.74a8,8,0,0,0,1.74-5.48,73.93,73.93,0,0,1,0-8.68,8,8,0,0,0-1.74-5.48L40.2,100.45a91.57,91.57,0,0,1,6.23-15L69,82.89a8,8,0,0,0,5.1-2.64,74.11,74.11,0,0,1,6.14-6.14A8,8,0,0,0,82.89,69L85.4,46.43a91.32,91.32,0,0,1,15-6.23l17.74,14.19a8,8,0,0,0,5.48,1.74,73.93,73.93,0,0,1,8.68,0,8,8,0,0,0,5.48-1.74L155.55,40.2a91.57,91.57,0,0,1,15,6.23L173.11,69a8,8,0,0,0,2.64,5.1,74.11,74.11,0,0,1,6.14,6.14,8,8,0,0,0,5.1,2.64l22.58,2.51a91.32,91.32,0,0,1,6.23,15l-14.19,17.74A8,8,0,0,0,199.87,123.66Z"></path>
                      </svg>
                    </Button>
                    <Button
                      className="w-full justify-between"
                      onClick={() => router.push("/dashboard")}
                      variant="outline"
                    >
                      DashBoard
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="#ffffff"
                        viewBox="0 0 256 256"
                      >
                        <path d="M216,72H131.31L104,44.69A15.86,15.86,0,0,0,92.69,40H40A16,16,0,0,0,24,56V200.62A15.4,15.4,0,0,0,39.38,216H216.89A15.13,15.13,0,0,0,232,200.89V88A16,16,0,0,0,216,72ZM40,56H92.69l16,16H40ZM216,200H40V88H216Z"></path>
                      </svg>
                    </Button>
                    <Button
                      className="w-full justify-between"
                      onClick={() => router.push("/dashboard")}
                      variant="outline"
                    >
                      Create Project
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="#ffffff"
                        viewBox="0 0 256 256"
                      >
                        <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48-88a8,8,0,0,1-8,8H136v32a8,8,0,0,1-16,0V136H88a8,8,0,0,1,0-16h32V88a8,8,0,0,1,16,0v32h32A8,8,0,0,1,176,128Z"></path>
                      </svg>
                    </Button>
                  </div>
                  <div className="border-b border-b-[#302f2f]"></div>
                  <div className="flex flex-col gap-2 px-4 py-2">
                    <Button
                      className="w-full justify-between"
                      variant="outline"
                      onClick={handleLogout}
                    >
                      Home Page
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="#ffffff"
                        viewBox="0 0 256 256"
                      >
                        <path d="M219.31,108.68l-80-80a16,16,0,0,0-22.62,0l-80,80A15.87,15.87,0,0,0,32,120v96a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160h32v56a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V120A15.87,15.87,0,0,0,219.31,108.68ZM208,208H160V152a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v56H48V120l80-80,80,80Z"></path>
                      </svg>
                    </Button>
                    <Button
                      className="w-full justify-between"
                      variant="outline"
                      onClick={handleLogout}
                    >
                      Logout
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="#ffffff"
                        viewBox="0 0 256 256"
                      >
                        <path d="M120,216a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H56V208h56A8,8,0,0,1,120,216Zm109.66-93.66-40-40a8,8,0,0,0-11.32,11.32L204.69,120H112a8,8,0,0,0,0,16h92.69l-26.35,26.34a8,8,0,0,0,11.32,11.32l40-40A8,8,0,0,0,229.66,122.34Z"></path>
                      </svg>
                    </Button>
                  </div>
                  <div className="border-b border-b-[#302f2f]"></div>
                  <div className="flex flex-col px-4 py-2">
                    <Button>Upgrade to Pro</Button>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </motion.div>
      )}
      {!session?.user && (
        <motion.div
          initial={{ opacity: 0 }} // Trạng thái ban đầu: mờ và di chuyển xuống
          animate={active ? { opacity: 1 } : { opacity: 0 }} // Trạng thái sau khi hoàn thành: rõ và về vị trí ban đầu
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={`flex ${active ? "" : "pointer-events-none"} items-center justify-center gap-2`}
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
          <motion.div
            variants={variants}
            // initial={session?.user ? "hidden" : "visible"}
            // animate={session?.user ? "hidden" : "visible"}
            transition={{ duration: 0.5, ease: "easeOut", delay: 4 }}
            className="flex items-center gap-4"
          >
            <Link
              href="/signin"
              className="flex items-center justify-center gap-3"
            >
              <motion.div
                className="relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <div className="absolute bottom-0 left-1/2 h-px w-full -translate-x-1/2 rounded-lg bg-linear-to-r from-transparent via-zinc-700 to-transparent dark:via-zinc-300" />
                <Button
                  variant="outline"
                  className="hover:bg-accent flex h-fit items-center px-3 py-1 dark:hover:bg-[#1a1a1a]"
                >
                  Sign In
                </Button>
              </motion.div>
            </Link>

            <Link href="/signup">
              <motion.div
                className="relative"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <div className="absolute bottom-0 left-1/2 h-px w-full -translate-x-1/2 rounded-lg bg-linear-to-r from-transparent via-zinc-700 to-transparent dark:via-zinc-300" />
                <Button
                  variant="outline"
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
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
