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
import { useEffect, useState } from "react";
import { VisuallyHidden } from "@radix-ui/themes";
import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";
import FeedBack from "./feedback";
import GitHub from "./GitHub";
import X from "./x";
import { LogOut } from "lucide-react";

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

  return (
    <div className={`flex items-center gap-4`}>
      {session?.user && (
        <motion.div
          // initial={{ opacity: 0 }} // Trạng thái ban đầu: mờ và di chuyển xuống
          // animate={active ? { opacity: 1 } : { opacity: 0 }} // Trạng thái sau khi hoàn thành: rõ và về vị trí ban đầu
          // transition={{ duration: 0.5, ease: "easeOut" }}
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
              onClick={() => {
                if (open == "open") {
                  setOpen("closed");
                } else {
                  setOpen("open");
                }
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
                data-state={open}
                data-side="right"
                // initial={{ opacity: 0 }}
                // animate={open ? { opacity: 1 } : { opacity: 0 }}
                // transition={{ duration: 0.5, ease: "easeOut" }}
                className="data-[state=open]:animate-in data data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 absolute top-[3.5rem] right-[2rem] flex h-[27rem] w-[16rem] origin-(--radix-popover-content-transform-origin) translate-0 justify-between rounded-xl border border-[#2c2c2c] bg-black p-4"
              >
                <div className="flex flex-col gap-2">
                  <h1 className="text-sm">{session?.user?.name ?? ""}</h1>
                  <span className="text-sm text-[#a1a1a1]">
                    {session?.user?.email ?? ""}
                  </span>
                  <Button variant="outline" onClick={handleLogout}>
                    Logout <LogOut className="size-4" />
                  </Button>
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
          // initial={{ opacity: 0 }} // Trạng thái ban đầu: mờ và di chuyển xuống
          // animate={active ? { opacity: 1 } : { opacity: 0 }} // Trạng thái sau khi hoàn thành: rõ và về vị trí ban đầu
          // transition={{ duration: 0.5, ease: "easeOut" }}
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
            initial={user ? "hidden" : "visible"}
            animate={user ? "hidden" : "visible"}
            transition={{ duration: 0.5, ease: "easeOut", delay: 4 }}
            className="flex items-center gap-4"
          >
            <Link
              href="/login"
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
