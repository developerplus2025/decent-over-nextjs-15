import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const items = [
  {
    id: 1,
    link: "",
  },
];
export default function VideoPage() {
  return (
    <div className="border-input flex h-[30rem] w-[70rem] rounded-xl border">
      <div
        className="styled-scrollbar h-full w-[90rem]"
        style={{ scrollbarWidth: "thin" }}
      >
        {items.map((items) => (
          <iframe src={items.link} key={items.id}></iframe>
        ))}
      </div>
      <div className="divide-input grid h-full w-full grid-cols-2 border border-l">
        {items.map((items) => (
          <Link key={items.id} href={`#${items.id}`}></Link>
        ))}
      </div>
    </div>
  );
}
