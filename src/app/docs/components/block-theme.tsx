"use client"
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function BlockTheme() {
  const [change, setChange] = useState("no-change");
  const [theme, setTheme] = useState("dark");
  return (
    <div className={`relative h-[80px] w-[300px]`}>
      {change === "yes" && (
        <div
          className="theme-switcher_clipPathReveal__l8VbV absolute inset-0 h-full w-full bg-black"
          style={{ clipPath: "inset(0 0 0 0)" }}
        ></div>
      )}
      {change === "no" && (
        <div className="theme-switcher_clipPathReveal__l8VbV absolute inset-0 h-full w-full bg-white"></div>
      )}
      <div className="z-[10]">
        <h1>Experiesdnce the theme switch animation yourself.</h1>
        <p>
          This technique is using clip-path, this element is duplicated and
          overlayed on top of the original one. The duplicated elements have
          different themes and we just reveal the one underneath by animating
          the clip-path property.
        </p>
      </div>
      <div>
        <Button
          onClick={() => {
            setChange("no");
            setTheme(theme == "dark" ? "light" : "dark");
          }}
        ></Button>
      </div>
    </div>
  );
}