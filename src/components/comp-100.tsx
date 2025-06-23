"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
type NavigationIconProps = {
  open: boolean;
  setOpen: (value: boolean) => void;
};
export default function NavigationIcon({ open, setOpen }: NavigationIconProps) {
  return (
    <div
      className="group border-none hover:bg-none focus:bg-none"
      onClick={() => setOpen(!open)}
      aria-expanded={open}
      aria-label={open ? "Close menu" : "Open menu"}
    >
      <svg
        className="pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="#fff"
        viewBox="0 0 256 256"
      >
        <path
          d="M224 128a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8"
          className="ease-[cubic-bezier(.5,.85,.25,1.1)] origin-center -translate-y-[7px] transition-all duration-300 group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
        />
        <path
          d="M224 128a8 8 0 0 1-8 8H40a8 8 0 0 1 0-16h176a8 8 0 0 1 8 8"
          className="ease-[cubic-bezier(.5,.85,.25,1.8)] origin-center transition-all duration-300 group-aria-expanded:rotate-45"
        />
      </svg>
    </div>
  );
}
