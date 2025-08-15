"use client";
// import { Slider } from "@/components/ui/slider";
import { cn } from "@/utils/cn";
import * as Slider from "@radix-ui/react-slider";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
const data = [
  {
    id: 1,
    src: "fiction-remix",
    img: "images",
    name: "Fixtion Remix",
    description: "Pháp Sư Việt Nam",
    duration: "4:07",
  },
  {
    id: 2,
    src: "DaiDienHauSinhTuKienLouisRemix-VuongNgocManh-14125736",
    img: "32a35f4d26ee56366397c09953f6c269",
    name: "Đại Điền Hậu Sinh Tử ",
    description: "Vương Ngọc Manh (Remix)",
    duration: "4:05",
  },
  {
    id: 3,
    src: "kw04scrx7h",
    img: "32b9b674c7cd7f39c94ea7b823685dec",
    name: "Pháp Ta Bà",
    description: "Bảo Vân",
    duration: "3:31",
  },
  {
    id: 4,
    src: "tawerrw6f4",
    img: "7a5f6e35848b3362591da8e95b6382ea",
    name: "Đi Giữa Trời Rực Rỡ",
    description: "Ngô Lan Hương",
    duration: "3:40",
  },
  {
    id: 5,
    src: "y2mate.com1",
    img: "5e28cfa087c005ce61523c4e6c2d0e48",
    name: "Phải Chia Tay Thôi ",
    description: "Hương Ly",
    duration: "4:18",
  },
  {
    id: 6,
    src: "y2mate.com2",
    img: "60abf0227372b143476d5785b27bf346",
    name: "Có Duyên Không Nợ ",
    description: "Ngọc Diệp",
    duration: "4:08",
  },
  {
    id: 7,
    src: "y2mate.com3",
    img: "05b73eff55f3d133942abf6ea29bc41b",
    name: "Tát nhật lãng rực rỡ ",
    description: "Fanny Tran",
    duration: "3:24",
  },
];
export default function MobilePage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [index, setIndex] = useState(0);
  const [currentTimeMusic, setCurrentTimeMusic] = useState<string>(
    String(data[index].duration),
  );
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const pathname = usePathname();
  const [value, setValue] = useState<number[]>([0]);
  const durationData = data[index].duration.split(":");
  const totalSecond = Number(durationData[0]) * 60 + Number(durationData[1]);
  const [totalSeconds, setTotalSeconds] = useState<number>(totalSecond);
  console.log([(currentTime / totalSeconds) * 100]);
  const [soundValue, setSoundValue] = useState<number[]>([100]);
  const [soundTempValue, setSoundTempValue] = useState<number[]>([50]);
  const [tempValue, setTempValue] = useState<number[]>([0]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    audio.addEventListener("timeupdate", updateTime);

    return () => audio.removeEventListener("timeupdate", updateTime);
  }, []);

  useEffect(() => {
    if (audioRef.current) {
      setIsPlaying(false);
      audioRef.current.pause();
    }
  }, [pathname]);
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = (Number(value) / 100) * totalSeconds;
    }
  }, [value, totalSeconds]);
  useEffect(() => {
    setSoundTempValue(soundValue);
    if (audioRef.current) {
      audioRef.current.volume = Number(soundTempValue) / 100;
    }
  }, [soundTempValue, soundValue]);

  const increaseVolume = () => {
    if (audioRef.current && audioRef.current.volume <= 1) {
      audioRef.current.volume = Math.min(1, Number(soundValue) / 100 + 0.1); // Tăng âm lượng 0.1 mỗi lần
      console.log(`Current volume: ${Number(soundValue) / 100}`);
      const sound = audioRef.current.volume * 100; // Lấy giá trị âm lượng hiện tại
      setSoundValue([sound]);
    }
  };

  const decreaseVolume = () => {
    if (audioRef.current && audioRef.current.volume >= 0) {
      audioRef.current.volume = Math.max(0, Number(soundValue) / 100 - 0.1); // Giảm âm lượng 0.1 mỗi lần
      console.log(`Current volume: ${Number(soundValue) / 100}`);
      const sound = audioRef.current.volume * 100; // Lấy giá trị âm lượng hiện tại
      setSoundValue([sound]);
    }
  };

  const handlemousedown = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };
  const handlemouseup = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };
  const handlePlayPause = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60); // Tính phút
    const seconds = Math.floor(time % 60); // Tính giây còn lại
    // Định dạng với 2 chữ số (ví dụ: 01:05)
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <div className="flex h-[100dvh] flex-col">
      <div className="flex h-[calc(100dvh-80px)] flex-col items-center justify-center">
        <div className="flex flex-col gap-[2rem]">
          <div>
            <img
              className="h-[300px] w-[300px] rounded-xl"
              width={200}
              height={200}
              src={`/music-pre/${data[index].img}.jpg`}
              alt=""
            />
          </div>
          <div className="flex flex-col items-center gap-2 text-center">
            <p className="">Name: {data[index].name}</p>
            <p className="text-sm text-[#a1a1a1]">
              Artist: {data[index].description}
            </p>
          </div>
        </div>
      </div>

      <div className="z-20 flex h-[80px] w-full items-center justify-center border-t bg-black px-8 select-none">
        <audio
          id="audio"
          ref={audioRef}
          onPlay={() => setIsPlaying(true)}
          onEnded={() => setIsPlaying(false)}
          src={`/${data[index].src}.mp3`}
          loop
          autoPlay
          onTimeUpdate={handleTimeUpdate}
          className="hidden"
        ></audio>

        <div className="flex flex-col items-center gap-4">
          <div className="flex items-center gap-8 [&_svg]:cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#ffffff"
              viewBox="0 0 256 256"
            >
              <path d="M237.66,178.34a8,8,0,0,1,0,11.32l-24,24a8,8,0,0,1-11.32-11.32L212.69,192H200.94a72.12,72.12,0,0,1-58.59-30.15l-41.72-58.4A56.1,56.1,0,0,0,55.06,80H32a8,8,0,0,1,0-16H55.06a72.12,72.12,0,0,1,58.59,30.15l41.72,58.4A56.1,56.1,0,0,0,200.94,176h11.75l-10.35-10.34a8,8,0,0,1,11.32-11.32ZM143,107a8,8,0,0,0,11.16-1.86l1.2-1.67A56.1,56.1,0,0,1,200.94,80h11.75L202.34,90.34a8,8,0,0,0,11.32,11.32l24-24a8,8,0,0,0,0-11.32l-24-24a8,8,0,0,0-11.32,11.32L212.69,64H200.94a72.12,72.12,0,0,0-58.59,30.15l-1.2,1.67A8,8,0,0,0,143,107Zm-30,42a8,8,0,0,0-11.16,1.86l-1.2,1.67A56.1,56.1,0,0,1,55.06,176H32a8,8,0,0,0,0,16H55.06a72.12,72.12,0,0,0,58.59-30.15l1.2-1.67A8,8,0,0,0,113,149Z"></path>
            </svg>
            <svg
              className={`${index == 0 ? "pointer-events-none fill-[#a1a1a1]" : ""} `}
              onClick={() => setIndex((pre) => index - 1)}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill={`${index == 0 ? "#a1a1a1" : "#ffffff"}`}
              viewBox="0 0 256 256"
            >
              <path d="M208,47.88V208.12a16,16,0,0,1-24.43,13.43L64,146.77V216a8,8,0,0,1-16,0V40a8,8,0,0,1,16,0v69.23L183.57,34.45A15.95,15.95,0,0,1,208,47.88Z"></path>
            </svg>
            <svg
              className={`${isPlaying ? "hidden" : "flex"} border-none bg-transparent`}
              onClick={() => {
                setIsPlaying(!isPlaying);
                handlePlayPause();
              }}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#ffffff"
              viewBox="0 0 256 256"
            >
              <path d="M240,128a15.74,15.74,0,0,1-7.6,13.51L88.32,229.65a16,16,0,0,1-16.2.3A15.86,15.86,0,0,1,64,216.13V39.87a15.86,15.86,0,0,1,8.12-13.82,16,16,0,0,1,16.2.3L232.4,114.49A15.74,15.74,0,0,1,240,128Z"></path>
            </svg>
            <svg
              className={`${!isPlaying ? "hidden" : "flex"} border-none bg-transparent`}
              onClick={() => {
                setIsPlaying(!isPlaying);
                handlePlayPause();
              }}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#ffffff"
              viewBox="0 0 256 256"
            >
              <path d="M216,48V208a16,16,0,0,1-16,16H160a16,16,0,0,1-16-16V48a16,16,0,0,1,16-16h40A16,16,0,0,1,216,48ZM96,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H96a16,16,0,0,0,16-16V48A16,16,0,0,0,96,32Z"></path>
            </svg>

            <svg
              className={`${index == 6 ? "pointer-events-none fill-[#a1a1a1]" : ""} `}
              onClick={() => setIndex((pre) => index + 1)}
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill={`${index == 6 ? "#a1a1a1" : "#ffffff"}`}
              viewBox="0 0 256 256"
            >
              <path d="M208,40V216a8,8,0,0,1-16,0V146.77L72.43,221.55A15.95,15.95,0,0,1,48,208.12V47.88A15.95,15.95,0,0,1,72.43,34.45L192,109.23V40a8,8,0,0,1,16,0Z"></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#ffffff"
              viewBox="0 0 256 256"
            >
              <path d="M24,128A72.08,72.08,0,0,1,96,56H204.69L194.34,45.66a8,8,0,0,1,11.32-11.32l24,24a8,8,0,0,1,0,11.32l-24,24a8,8,0,0,1-11.32-11.32L204.69,72H96a56.06,56.06,0,0,0-56,56,8,8,0,0,1-16,0Zm200-8a8,8,0,0,0-8,8,56.06,56.06,0,0,1-56,56H51.31l10.35-10.34a8,8,0,0,0-11.32-11.32l-24,24a8,8,0,0,0,0,11.32l24,24a8,8,0,0,0,11.32-11.32L51.31,200H160a72.08,72.08,0,0,0,72-72A8,8,0,0,0,224,120Z"></path>
            </svg>
          </div>
          <div className="flex w-[270px] items-center gap-4">
            <p className="text-xs tabular-nums">{formatTime(currentTime)}</p>
            {/* <Slider
              onValueChange={(newTempValue) => setTempValue(newTempValue)}
              onValueCommit={(newValue) => setValue(tempValue)}
              defaultValue={[0]}
              value={[(currentTime / totalSeconds) * 100]}
              max={100}
              step={1}
              className={cn("w-full")}
            /> */}
            <Slider.Root
              onValueChange={(newTempValue) => setTempValue(newTempValue)}
              onValueCommit={(newValue) => setValue(tempValue)}
              defaultValue={[0]}
              // value={[(currentTime / totalSeconds) * 100]}
              value={[currentTime]}
              max={100}
              step={1}
              className="relative flex w-full touch-none items-center select-none [&_svg]:cursor-pointer"
            >
              <Slider.Track
                onMouseDown={handlemousedown}
                onMouseUp={handlemouseup}
                className="bg-primary/20 relative h-1 w-full grow overflow-hidden rounded-full"
              >
                {" "}
                <Slider.Range className="bg-primary absolute h-full" />
              </Slider.Track>
              <Slider.Thumb className="border-primary/50 bg-background focus-visible:ring-ring block h-3 w-3 rounded-full border shadow-sm transition-colors focus-visible:ring-1 focus-visible:outline-hidden disabled:pointer-events-none disabled:opacity-50" />
            </Slider.Root>
            <p className="text-xs tabular-nums">{data[index].duration}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
