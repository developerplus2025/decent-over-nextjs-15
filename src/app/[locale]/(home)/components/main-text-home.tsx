"use client";
import AnimateTextHome from "./text-animation";
import DownloadButton from "./DownloadButton";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Modal from "./Modal";
import { useTranslations } from "next-intl";
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
  const t = useTranslations('MainTextHome');
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
      className="relative mx-20 mt-4 flex w-full items-center justify-center min-[300px]:flex-col min-[300px]:gap-[1rem] min-[645px]:flex-col xl:flex-col xl:gap-8"
    >
      <svg
        className="absolute right-48 hidden h-160 lg:block"
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
        className="absolute left-48 hidden h-160 lg:block"
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
        className="flex flex-col items-center justify-center min-[300px]:gap-4 xl:gap-8"
      >
        <AnimateTextHome />
        <h1 className="w-[299px] text-center text-[3rem] leading-12 font-bold text-pretty min-[300px]:block xl:hidden">
          The Next AI Music Editor
        </h1>
        <h1 className="text-[#a1a1a1] min-[300px]:w-screen min-[300px]:text-center min-[300px]:text-[12px] min-[300px]:text-balance xl:w-[522px] xl:text-center xl:text-[1rem] xl:leading-[1.5rem]">
         {t('DescriptionHome')}
        </h1>
      </div>
      <div className="min-[300px]:flex min-[300px]:w-[200px] min-[300px]:flex-col min-[300px]:items-center min-[300px]:gap-[1rem] xl:flex xl:w-fit xl:flex-row xl:items-center xl:justify-center xl:gap-8">
        <DownloadButton />
        <Modal isOpen={open} onClose={() => setOpen(false)} />
        <Button
          className="min-[300px]:w-full md:w-fit xl:w-fit"
          onClick={() => setOpen(true)}
          variant={"default"}
        >
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
          Watch Demo Now
        </Button>
      </div>
    </motion.div>
  );
}
