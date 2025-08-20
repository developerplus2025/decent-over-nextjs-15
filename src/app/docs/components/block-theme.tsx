"use client"
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function BlockTheme() {
  const [theme, setTheme] = useState("dark");
  return (
    <div className={`relative h-[80px] w-[300px]`}>
      <div
        className="absolute h-full w-full bg-black"
        style={{ clipPath: "inset(0 0 0 0)" }}
      ></div>
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
            setTheme(theme == "dark" ? "light" : "dark");
          }}
        ></Button>
      </div>
    </div>
  );
}