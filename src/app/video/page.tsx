"use client";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

const items = [
  {
    id: 1,
    link: "https://drive.google.com/file/d/1Igv3t5hzs4RkGpi_btn_6SllN-XTCTSH/preview",
    preview: "4370-e66a-4f73-9085-36134c914de3",
  },
  {
    id: 2,
    link: "https://drive.google.com/file/d/16GJV_lbb_dIL-iv2ulykwnkd-L_fYf9e/preview",
    preview: "hong-kong-doll-4dfe",
  },
  {
    id: 3,
    link: "https://drive.google.com/file/d/1c7JOAUW1bzx1UTqA7x_NrEU3Ve7KfSBN/preview",
    preview: "hong-kong-doll-3re2",
  },
  {
    id: 4,
    link: "https://drive.google.com/file/d/1YSpnhWHWznFkhUZlNSkt6O359GX2zL-l/preview",
    preview: "hong-kong-doll-7dfe",
  },
  {
    id: 5,
    link: "https://drive.google.com/file/d/1-uI-Kvu-iIDSKOYv3xVh51L3M3fvRgOg/preview",
    preview: "1239-cea1-4073-ba35-1b85b4fe5d78",
  },
  {
    id: 6,
    link: "https://drive.google.com/file/d/1UJWvoM6FRj88350IEz_FnZMTc0IJzO5-/preview",
    preview: "5612-577d-4d39-a134-cd80aa18fcd6",
  },
];
export default function VideoPage() {
  const handleScroll = (id: number) => {
    const el = document.getElementById(id.toString());
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="border-input flex h-[25rem] w-[69rem] gap-[2rem] rounded-xl border">
      <div
        className="styled-scrollbar h-full w-[97rem] overflow-y-auto"
        style={{ scrollbarWidth: "none" }}
      >
        {items.map((items) => (
          <iframe
            className="h-full w-full rounded-tl-xl rounded-bl-xl"
            src={items.link}
            id={items.id.toString()}
            key={items.id}
          ></iframe>
        ))}
      </div>
      <div
        style={{ scrollbarWidth: "none" }}
        className="divide-input styled-scrollbar flex h-full w-full flex-col items-center overflow-y-auto border border-l p-4"
      >
        {items.map((items) => (
          <div key={items.id}>
            <div key={items.id} onClick={() => handleScroll(items.id)}>
              {" "}
              <Image
                height={"200"}
                width={"200"}
                alt={items.link}
                src={`glss/${items.preview}.webp`}
              ></Image>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
