"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
type Checked = DropdownMenuCheckboxItemProps["checked"];
export default function AudioBar() {
  const path = usePathname();
  const [play, setPlay] = useState(false);
  const parts = path.slice(1).split("/");
  // => "docs".split("/") => ["docs"]

  const pathAudio = [parts[0], parts.slice(1).join("/")];

  const audioRef = useRef<HTMLAudioElement>(null);
  // Use pathAudio.length - 1 to get the last segment
  const [currentTime, setCurrentTime] = useState(0);
  const [speed, setSpeed] = useState("1");
  const audioFile = pathAudio[pathAudio.length - 1];
  const audio = audioRef.current;
  const time = audio?.currentTime;
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60); // Tính phút
    const seconds = Math.floor(time % 60); // Tính giây còn lại
    // Định dạng với 2 chữ số (ví dụ: 01:05)
    return `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };
  const handlePlay = () => {
    setPlay(true);
    if (audioRef.current) {
      audioRef.current.play();
    }
  };
  useEffect(() => {
    const audioEl = audioRef.current;
    if (!audioEl) return;

    const updateTime = () => {
      setCurrentTime(audioEl.currentTime); // lấy thời gian đã phát
    };

    audioEl.addEventListener("timeupdate", updateTime);
    return () => {
      audioEl.removeEventListener("timeupdate", updateTime);
    };
  }, []);
  const handlePause = () => {
    setPlay(false);
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };
  const speedAudio = (number: number) => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.playbackRate = number;
  };
  const [showAccentMan, setShowAccentMan] = React.useState<Checked>(true);
  const [showAccentWomen, setShowAccentWomen] = React.useState<Checked>(false);
  const [accent, setAccent] = React.useState("Man");
  return (
    <div className="flex w-full items-center justify-between">
      <audio
        onEnded={() => setPlay(false)}
        ref={audioRef}
        src={`/audio/markdown/${pathAudio[1] === "" ? "index" : pathAudio[1]}.mp3`}
      ></audio>
      <div className="flex items-center gap-2">
        <svg
          onClick={() => handlePlay()}
          className={`${play ? "hidden" : ""} cursor-pointer select-none`}
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          fill="#ffffff"
          viewBox="0 0 256 256"
        >
          <path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z"></path>
        </svg>
        <svg
          className={`${!play ? "hidden" : ""} cursor-pointer select-none`}
          onClick={() => handlePause()}
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          fill="#ffffff"
          viewBox="0 0 256 256"
        >
          <path d="M216,48V208a16,16,0,0,1-16,16H160a16,16,0,0,1-16-16V48a16,16,0,0,1,16-16h40A16,16,0,0,1,216,48ZM96,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V48A16,16,0,0,0,96,32Z"></path>
        </svg>
        <div className="border-input border-l"></div>
        <div className="flex items-center gap-2">
          <p className="border-input border-r pr-2 text-sm tabular-nums">
            {formatTime(currentTime)}
          </p>
          <div className="flex gap-2 pl-2 text-sm text-[#a1a1a1]">
            <p
              className={`${speed === "0.5" ? "text-white transition-colors" : ""} cursor-pointer text-[#a1a1a1] select-none`}
              onClick={() => {
                speedAudio(0.5), setSpeed("0.5");
              }}
            >
              0.5x
            </p>
            <p
              className={`${speed === "1" ? "text-white transition-colors" : ""} cursor-pointer text-[#a1a1a1] select-none`}
              onClick={() => {
                speedAudio(1), setSpeed("1");
              }}
            >
              1x
            </p>
            <p
              className={`${speed === "1.5" ? "text-white transition-colors" : ""} cursor-pointer text-[#a1a1a1] select-none`}
              onClick={() => {
                speedAudio(1.5), setSpeed("1.5");
              }}
            >
              1.5x
            </p>
            <p
              className={`${speed === "2" ? "text-white transition-colors" : ""} cursor-pointer text-[#a1a1a1] select-none`}
              onClick={() => {
                speedAudio(2), setSpeed("2");
              }}
            >
              2x
            </p>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger className="cursor-pointer" asChild>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#f0f0f0"
                viewBox="0 0 256 256"
              >
                <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
              </svg>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[12rem]">
              <DropdownMenuLabel className="flex items-center justify-center">
                Accent
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              {/* <DropdownMenuCheckboxItem
                checked={showAccentMan}
                onCheckedChange={setShowAccentMan}
              >
                Accent Man
              </DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem
                checked={showAccentWomen}
                onCheckedChange={setShowAccentWomen}
              >
                Accent Women
              </DropdownMenuCheckboxItem> */}
              <DropdownMenuRadioGroup value={accent} onValueChange={setAccent}>
                <DropdownMenuRadioItem value="Man">
                  Accent Man
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="Women">
                  Accent Women
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#ffffff"
          viewBox="0 0 256 256"
        >
          <path d="M240,88.23a54.43,54.43,0,0,1-16,37L189.25,160a54.27,54.27,0,0,1-38.63,16h-.05A54.63,54.63,0,0,1,96,119.84a8,8,0,0,1,16,.45A38.62,38.62,0,0,0,150.58,160h0a38.39,38.39,0,0,0,27.31-11.31l34.75-34.75a38.63,38.63,0,0,0-54.63-54.63l-11,11A8,8,0,0,1,135.7,59l11-11A54.65,54.65,0,0,1,224,48,54.86,54.86,0,0,1,240,88.23ZM109,185.66l-11,11A38.41,38.41,0,0,1,70.6,208h0a38.63,38.63,0,0,1-27.29-65.94L78,107.31A38.63,38.63,0,0,1,144,135.71a8,8,0,0,0,16,.45A54.86,54.86,0,0,0,144,96a54.65,54.65,0,0,0-77.27,0L32,130.75A54.62,54.62,0,0,0,70.56,224h0a54.28,54.28,0,0,0,38.64-16l11-11A8,8,0,0,0,109,185.66Z"></path>
        </svg>
        <p className="text-sm">Share</p>
      </div>
    </div>
  );
}