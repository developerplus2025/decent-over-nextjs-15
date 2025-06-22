"use client";
import AnimateTextHome from "./text-animation";
import DownloadButton from "./DownloadButton";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Modal from "./Modal";
export default function MainTextHome() {
  const { theme, systemTheme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [close, setClose] = useState<boolean>(false);
  const [view, setView] = useState(false);

  useEffect(() => {
    const storedClose = localStorage.getItem("close");
    if (storedClose !== null) {
      setClose(storedClose === "true");
    }
  }, []);

  const handleToggle = () => {
    const newCloseValue = !close;
    setClose(newCloseValue);
    localStorage.setItem("close", newCloseValue.toString());
  };

  const [value, setValue] = React.useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setValue((v) => (v >= 100 ? 0 : v + 10));
    }, 500);

    return () => clearInterval(interval);
  }, []);
  return (
    <motion.div
      style={{
        transform: `translate3d(0, calc(env(safe-area-inset-top) + 14px), 0)`,
      }}
      initial={{ opacity: 0, y: 20, scale: 0.9598145285935085 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      className="relative mx-[5rem] mt-[1rem] flex w-full items-center justify-center gap-[2rem] min-[375px]:flex-col min-[645px]:flex-col xl:flex-col"
    >
      <svg
        className="absolute right-[12rem] hidden h-[40rem] lg:block"
        xmlns="http://www.w3.org/2000/svg"
        width={89}
        height={568}
        viewBox="0 0 89 568"
        fill="none"
      >
        <path
          d="M88 0.23938V207.654L1 285.695C1 285.695 1.5 493.945 1 567.813"
          stroke="url(#animation_gradient)"
          opacity={1}
          pathLength={1}
          strokeDashoffset="0px"
          strokeDasharray="1px 1px"
        />
        <path
          d="M88 0.23938V207.654L1 285.695C1 285.695 1.5 493.945 1 567.813"
          stroke="url(#paint0_linear_right)"
        />
        <defs>
          <linearGradient
            id="animation_gradient"
            gradientUnits="userSpaceOnUse"
            x1={0}
            y1="0%"
            x2={0}
            y2="0%"
          >
            <stop stopColor="#2EB9DF" stopOpacity={0} />
            <stop stopColor="#2EB9DF" />
            <stop offset={1} stopColor="#9E00FF" stopOpacity={0} />
          </linearGradient>
          <linearGradient
            id="paint0_linear_right"
            x1={88}
            y1="4.50012"
            x2={88}
            y2={568}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6F6F6F" stopOpacity="0.3" />
            <stop offset="0.797799" stopColor="#6F6F6F" />
            <stop offset={1} stopColor="#6F6F6F" stopOpacity={0} />
          </linearGradient>
        </defs>
      </svg>

      <svg
        className="absolute left-[12rem] hidden h-[40rem] lg:block"
        xmlns="http://www.w3.org/2000/svg"
        width={89}
        height={568}
        viewBox="0 0 89 568"
        fill="none"
      >
        <path
          d="M1 0.23938V207.654L88 285.695C88 285.695 87.5 493.945 88 567.813"
          stroke="url(#animation_gradient)"
          opacity={1}
          pathLength={1}
          strokeDashoffset="0px"
          strokeDasharray="1px 1px"
        />
        <path
          d="M1 0.23938V207.654L88 285.695C88 285.695 87.5 493.945 88 567.813"
          stroke="url(#paint0_linear_left)"
        />
        <defs>
          <linearGradient
            id="animation_gradient"
            gradientUnits="userSpaceOnUse"
            x1={0}
            y1="120%"
            x2={0}
            y2="100%"
          >
            <stop stopColor="#2EB9DF" stopOpacity={0} />
            <stop stopColor="#2EB9DF" />
            <stop offset={1} stopColor="#9E00FF" stopOpacity={0} />
          </linearGradient>
          <linearGradient
            id="paint0_linear_left"
            x1={1}
            y1="4.50012"
            x2={1}
            y2={568}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6F6F6F" stopOpacity="0.3" />
            <stop offset="0.797799" stopColor="#6F6F6F" />
            <stop offset={1} stopColor="#6F6F6F" stopOpacity={0} />
          </linearGradient>
        </defs>
      </svg>
      <div
        ref={containerRef}
        className="flex flex-col items-center justify-center gap-[2rem]"
      >
        <AnimateTextHome />
        <h1 className="text-md w-[522px] text-center text-[#a1a1a1]">
          Dive into a seamless music experience with our cutting edge software.
          Collaborate effortlessly, unleash your creativity, manage playlists
          and craft professional quality tracks all in one powerful platform.
        </h1>
      </div>
      <div className="flex gap-[2rem]">
        <DownloadButton />
        <Modal isOpen={open} onClose={() => setOpen(false)} />
        <Button onClick={() => setOpen(true)} variant={"default"} className="">
          <svg
            className="mr-2 h-4 w-4"
            data-testid="geist-icon"
            height={16}
            strokeLinejoin="round"
            viewBox="0 0 16 16"
            width={16}
            style={{ color: "currentcolor" }}
          >
            <path
              fill="#666"
              fillRule="evenodd"
              d="M14.5 8a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0ZM16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM6 11l5.5-3L6 5v6Z"
              clipRule="evenodd"
              style={{ fill: "currentColor" }}
            />
          </svg>
          Wacth Demo Now
        </Button>
      </div>
    </motion.div>
  );
}
