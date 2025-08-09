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
    preview:
      "https://drive.google.com/u/0/drive-viewer/AKGpihZbpRPKDaiJPMpdorxRxIn9s2UIfcc3C2YDXC-LLcpmdLKjP2F45SAi4V9EP-AbDOQK4FO1ICcAFBUDq66iZcLvVq61bLYnLUU=s1600-rw-v1",
  },
  {
    id: 2,
    link: "https://drive.google.com/file/d/16GJV_lbb_dIL-iv2ulykwnkd-L_fYf9e/preview",
    preview:
      "https://drive.google.com/u/0/drive-viewer/AKGpihZpAyrjz8a3hjielBRl7_4TNijT2WMCz3vFkyBik1Sj-ZcUvgozwIngRXjtqcbwhZPpZ6eEu7o9e4CL5tTDcXggLyQbmxblLw=s1600-rw-v1",
  },
  {
    id: 3,
    link: "https://drive.google.com/file/d/1c7JOAUW1bzx1UTqA7x_NrEU3Ve7KfSBN/preview",
    preview:
      "https://drive.google.com/u/0/drive-viewer/AKGpiha0luepOityebmeKmuo6BmcHIgFmTNoieqg9CMId7Cml-qp7oRcmdbaswCiBhyLK8t54GoxvZ4e5QAOVqjBG0F2IrR78v0IQUE=s1600-rw-v1",
  },
  {
    id: 4,
    link: "https://drive.google.com/file/d/1YSpnhWHWznFkhUZlNSkt6O359GX2zL-l/preview",
    preview:
      "https://drive.google.com/u/0/drive-viewer/AKGpiha2zf1J71vUiAMnJHK99kHqsgIk6as3YjvNfzSSpAFvzNtWM37oUDcT7CweJQpq4XPV2ARmSEyKRxJJZs4zx5o-e30ZeFCTemQ=s1600-rw-v1",
  },
  {
    id: 5,
    link: "https://drive.google.com/file/d/1-uI-Kvu-iIDSKOYv3xVh51L3M3fvRgOg/preview",
    preview:
      "https://drive.google.com/u/0/drive-viewer/AKGpihaBy2KYK6ZvFnRadrAwDGLButP43N7xj6VoAlk1pCMX6aa5xxQR14hPwk9uXWaPE6kifu-v2vh9nwF7xL7F5dQZOWvXW19bc2U=s1600-rw-v1",
  },
  {
    id: 6,
    link: "https://drive.google.com/file/d/1UJWvoM6FRj88350IEz_FnZMTc0IJzO5-/preview",
    preview:
      "https://drive.google.com/u/0/drive-viewer/AKGpihY4BRoof6viBjiG1cwPcmowqGtw-SQQsYw5czoQLFE4jShS_s4Uxq3ONiegJX5SxywrTamOmEfR667ArnjNKHbabVuXSaXHp5U=s1600-rw-v1",
  },
];
export default function VideoPage() {
  const pathname = usePathname();
  const isDocsGlss = pathname === "/docs/glss";

  useEffect(() => {
    if (isDocsGlss) {
      const nddocs = document.getElementById("nd-toc");
      if (nddocs) {
        nddocs.style.display = "none";
      }

      document.body.style.overflowY = "hidden";
    }
    return () => {
      document.body.style.overflowY = "auto";
    };
  });
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
            id={`"${items.id}"`}
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
            <Link key={items.id} href={`#${items.id}`}></Link>
            <img
              height={"200"}
              width={"200"}
              alt={items.link}
              src={items.preview}
            ></img>
          </div>
        ))}
      </div>
    </div>
  );
}
