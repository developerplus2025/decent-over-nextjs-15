"use client";
import AnimateTextHome from "./text-animation";
import DownloadButton from "./DownloadButton";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Modal from "./Modal";
import { useTranslations } from "next-intl";
import { ModalAnimationVideo } from "./modal-animation-video";
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
       <ModalAnimationVideo/>
       
      </div>
    </motion.div>
  );
}
