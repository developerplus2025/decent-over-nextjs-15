import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const items = [
  {
    id: 1,
    link: "https://drive.google.com/file/d/1Igv3t5hzs4RkGpi_btn_6SllN-XTCTSH/preview",
  },
  {
    id: 2,
    link: "https://drive.google.com/file/d/16GJV_lbb_dIL-iv2ulykwnkd-L_fYf9e/preview",
  },
  {
    id: 3,
    link: "https://drive.google.com/file/d/1c7JOAUW1bzx1UTqA7x_NrEU3Ve7KfSBN/preview",
  },
  {
    id: 4,
    link: "https://drive.google.com/file/d/1YSpnhWHWznFkhUZlNSkt6O359GX2zL-l/preview",
  },
  {
    id: 5,
    link: "https://drive.google.com/file/d/1-uI-Kvu-iIDSKOYv3xVh51L3M3fvRgOg/preview",
  },
  {
    id: 6,
    link: "https://drive.google.com/file/d/1UJWvoM6FRj88350IEz_FnZMTc0IJzO5-/preview",
  },
];
export default function VideoPage() {
  return (
    <div className="border-input flex h-[25rem] w-[70rem] rounded-xl border">
      <div
        className="styled-scrollbar h-full w-[90rem] overflow-y-auto"
        style={{ scrollbarWidth: "none" }}
      >
        {items.map((items) => (
          <iframe
            className="h-full w-full"
            src={items.link}
            id={`"${items.id}"`}
            key={items.id}
          ></iframe>
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
