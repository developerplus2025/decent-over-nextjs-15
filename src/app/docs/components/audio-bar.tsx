"use client";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";

export default function AudioBar() {
  const path = usePathname();
  const [play, setPlay] = useState(false);
  const pathAudio = path.split("/");
  const audioRef = useRef<HTMLAudioElement>(null);

  console.log(pathAudio[pathAudio.length - 1]); // lấy phần tử cuối

  const handlePlay = () => {
    setPlay(true);
    audioRef.current?.play();
  };

  const handlePause = () => {
    setPlay(false);
    audioRef.current?.pause();
  };

  return (
    <div className="flex w-full items-center justify-between">
      <audio
        ref={audioRef}
        src={`audio/markdown/${pathAudio[pathAudio.length - 1]}.mp3`}
      ></audio>

      <div className="flex items-center gap-2">
        <svg
          onClick={handlePlay}
          className={`${play ? "hidden" : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          fill="#ffffff"
          viewBox="0 0 256 256"
        >
          <path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z"></path>
        </svg>
        <svg
          onClick={handlePause}
          className={`${!play ? "hidden" : ""}`}
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#ffffff"
          viewBox="0 0 256 256"
        >
          <path d="M216,48V208a16,16,0,0,1-16,16H160a16,16,0,0,1-16-16V48a16,16,0,0,1,16-16h40A16,16,0,0,1,216,48ZM96,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V48A16,16,0,0,0,96,32Z"></path>
        </svg>
      </div>
    </div>
  );
}
