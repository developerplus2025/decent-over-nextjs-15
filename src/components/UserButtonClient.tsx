"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
export default function UserButtonClient() {
  const [user, setUser] = useState<any>(null);
  useEffect(() => {
    fetch("/api/user")
      .then((res) => res.json())
      .then((data) => setUser(data.user));
  }, []);
  console.log(user?.profilePictureUrl);
  return (
    <div className="flex items-center gap-4">
      {user ? (
        <div className="flex items-center gap-4">
          <img
            height={"40"}
            width={"40"}
            alt={user?.profilePictureUrl}
            src={`${user?.profilePictureUrl}`}
            className="h-[2.5rem] w-[2.5rem] rounded-md"
          ></img>
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={user ? { opacity: 0 } : { opacity: 1 }}
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
      )}
    </div>
  );
}
