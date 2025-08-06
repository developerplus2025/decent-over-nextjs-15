import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import React from "react";

export default function VideoPage() {
  return (
    <div className="border-input flex h-[30rem] w-[70rem] rounded-xl border">
      <div className="h-full w-[40rem]"></div>
      <div className="divide-input grid h-full w-full grid-cols-2 border border-l"></div>
    </div>
  );
}
