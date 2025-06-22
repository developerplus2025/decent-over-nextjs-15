"use client";
import Image from "next/image";
import * as Masonry from "./masonry";
import * as React from "react";
import Activity from "./activity";
import { useStore } from "@nanostores/react";
import { $bookmarks, $likes, $reposts, $views } from "./stores";
const items = [
  {
    name: "Eric Grigorian",
    username: "Senior Software Engineer, Frontend",
    body: "I have tried many music apps before, but this one truly amazed me. The interface is smooth, easy to navigate, and the overall experience is fantastic. I can quickly find my favorite songs and create playlists effortlessly, making my music experience seamless and enjoyable.",
    img: "eric-grigorian",
  },
  {
    name: "Charlton Roberts",
    username: "Charlton Roberts, Product Engineering",
    body: "The audio quality in this app is outstanding. Every note is crystal clear, from the deep bass to the sharp highs. If you're a true music lover, you will appreciate the sound precision and richness this app offers.",
    img: "charlton-roberts",
  },
  {
    name: "Jonathan Melville",
    username: "Daniel Lopes, Frontend Developer",
    body: "One of the best things about this app is its speed. Songs load almost instantly, and there's no lag at all. Even when I have a large playlist, the app handles it effortlessly, making it a top choice for music streaming.",
    img: "jony",
  },
  {
    name: "Alan Cowen",
    username: "Senior Software Engineer, Frontend",
    body: "I have tried many music apps before, but this one truly amazed me. The interface is smooth, easy to navigate, and the overall experience is fantastic. I can quickly find my favorite songs and create playlists effortlessly, making my music experience seamless and enjoyable.",
    img: "alan-cowen",
  },
  {
    name: "Thomas Zahner",
    username: "Charlton Roberts, Product Engineering",
    body: "The audio quality in this app is outstanding. Every note is crystal clear, from the deep bass to the sharp highs. If you're a true music lover, you will appreciate the sound precision and richness this app offers.",
    img: "thomas-zahner",
  },
  {
    name: "Jason Cottrell",
    username: "Daniel Lopes, Frontend Developer",
    body: "One of the best things about this app is its speed. Songs load almost instantly, and there's no lag at all. Even when I have a large playlist, the app handles it effortlessly, making it a top choice for music streaming.",
    img: "jasoncottrell-sm",
  },
  // {
  //   name: "David",
  //   username: "@david",
  //   body: "I love how customizable this app is. From themes to equalizer settings, I can adjust everything to match my preferences. Whether I want more bass or a balanced sound, this app gives me full control over my listening experience.",
  //   img: "https://avatar.vercel.sh/david",
  // },
  // {
  //   name: "Emma",
  //   username: "@emma",
  //   body: "The offline mode is a lifesaver! I can download my favorite playlists and listen to them without needing an internet connection. It's perfect for traveling or when I'm in areas with poor network coverage.",
  //   img: "https://avatar.vercel.sh/emma",
  // },
  // {
  //   name: "Frank",
  //   username: "@frank",
  //   body: "Managing playlists has never been easier. The app allows me to create, edit, and organize my playlists in just a few taps. The intuitive design makes the entire process smooth and enjoyable.",
  //   img: "https://avatar.vercel.sh/frank",
  // },
  // {
  //   name: "Grace",
  //   username: "@grace",
  //   body: "I am amazed by how well the app understands my music taste. The smart recommendations suggest songs that perfectly match my preferences, helping me discover new artists and tracks that I genuinely enjoy.",
  //   img: "https://avatar.vercel.sh/grace",
  // },
  // {
  //   name: "Hannah",
  //   username: "@hannah",
  //   body: "Seamless device syncing is one of my favorite features. I can start listening on my laptop and continue right where I left off on my phone. It's incredibly convenient and enhances my music experience.",
  //   img: "https://avatar.vercel.sh/hannah",
  // },
  // {
  //   name: "Isaac",
  //   username: "@isaac",
  //   body: "Unlike other music apps, this one supports a wide range of audio formats. I can play all my music files without needing to convert them, which is a huge plus for someone who has an extensive collection.",
  //   img: "https://avatar.vercel.sh/isaac",
  // },
  // {
  //   name: "Jack",
  //   username: "@jack",
  //   body: "The equalizer settings are simply amazing. I can fine-tune the sound exactly how I like it. Whether I'm in the mood for deep bass or clear vocals, this app lets me adjust the audio experience to perfection.",
  //   img: "https://avatar.vercel.sh/jack",
  // },
  // {
  //   name: "Kelly",
  //   username: "@kelly",
  //   body: "Battery efficiency is impressive. Unlike some other apps that drain my battery quickly, this one is well-optimized, allowing me to enjoy my music for hours without worrying about my phone running out of power.",
  //   img: "https://avatar.vercel.sh/kelly",
  // },
  // {
  //   name: "Leo",
  //   username: "@leo",
  //   body: "Dark mode is a game-changer! It’s easy on the eyes, especially at night. The sleek design and color scheme make the app look even more premium and enjoyable to use.",
  //   img: "https://avatar.vercel.sh/leo",
  // },
  // {
  //   name: "Mia",
  //   username: "@mia",
  //   body: "As an audiophile, I appreciate that this app supports high-resolution audio. It allows me to experience music at its best quality, bringing out every detail in my favorite songs.",
  //   img: "https://avatar.vercel.sh/mia",
  // },
  // {
  //   name: "Noah",
  //   username: "@noah",
  //   body: "Gesture controls make navigating the app so much more intuitive. Swiping to change tracks or adjust the volume feels natural and responsive, making my music experience even smoother.",
  //   img: "https://avatar.vercel.sh/noah",
  // },
  // {
  //   name: "Olivia",
  //   username: "@olivia",
  //   body: "The built-in radio feature is incredible! I can explore a variety of stations and discover new music from different genres without even having to search for songs manually.",
  //   img: "https://avatar.vercel.sh/olivia",
  // },
  // {
  //   name: "Paul",
  //   username: "@paul",
  //   body: "Having both music and podcast support in the same app is fantastic. I no longer need to switch between different apps, making my listening experience more convenient and enjoyable.",
  //   img: "https://avatar.vercel.sh/paul",
  // },
  // {
  //   name: "Quinn",
  //   username: "@quinn",
  //   body: "The integrated lyrics feature is one of my favorites. I love being able to sing along to my favorite songs without having to search for the lyrics separately.",
  //   img: "https://avatar.vercel.sh/quinn",
  // },
  // {
  //   name: "Ryan",
  //   username: "@ryan",
  //   body: "Frequent updates keep improving the app. It’s great to see that the developers actually listen to user feedback and continue to add new features and fix bugs regularly.",
  //   img: "https://avatar.vercel.sh/ryan",
  // },
  // {
  //   name: "Sophia",
  //   username: "@sophia",
  //   body: "The user community is amazing! I can share my playlists with friends, discover new music, and even interact with other users who have similar tastes in music.",
  //   img: "https://avatar.vercel.sh/sophia",
  // },
  // {
  //   name: "Tom",
  //   username: "@tom",
  //   body: "Cross-platform support is one of the best features of this app. I can use it seamlessly on my Windows PC, MacBook, iPhone, and Android device without any issues.",
  //   img: "https://avatar.vercel.sh/tom",
  // },
  // {
  //   name: "Uma",
  //   username: "@uma",
  //   body: "The best part? No annoying ads! Unlike other apps that constantly interrupt my music, this one provides a truly immersive and uninterrupted listening experience.",
  //   img: "https://avatar.vercel.sh/uma",
  // },
];

export function PeopleSay() {
  const reposts = useStore($reposts);
  const bookmarks = useStore($bookmarks);
  const likes = useStore($likes);
  const views = useStore($views);
  return (
    <div className="flex flex-col gap-[4rem]">
      <div className="flex flex-col items-center gap-[2rem]">
        <div className="text-center text-4xl font-bold tracking-tighter text-white sm:text-5xl xl:text-[2.75rem]/none">
          <p>What People Say ?</p>
        </div>
        <span className="text-md w-[557px] text-center dark:text-zinc-400">
          Discover what users around the world are saying about our music
          software. From producers to casual listeners, hear real feedback on
          how it&apos;s transforming the way they create, mix, and enjoy music.
        </span>
      </div>
      <div className="grid grid-cols-3 justify-items-center gap-[2rem]">
        {items.map((item) => (
          <div
            key={item.name}
            className="flex-cols gap relative flex w-[400px] flex-col justify-between gap-3 rounded-lg border bg-[#0c0c0c] p-4 text-card-foreground shadow-sm"
          >
            {/* <div className="absolute -left-[10px] -top-[10px] h-[10px] w-[10px] border-b border-r"></div>
              <div className="absolute -right-[10px] -top-[10px] h-[10px] w-[10px] border-b border-l"></div>
              <div className="absolute -bottom-[10px] -left-[10px] h-[10px] w-[10px] border-r border-t"></div>
              <div className="absolute -bottom-[10px] -right-[10px] h-[10px] w-[10px] border-l border-t"></div> */}
            <div className="flex flex-col gap-3">
              <div className="flex justify-between gap-1 text-sm leading-tight sm:text-base">
                <div className="flex items-center gap-3">
                  <div>
                    <Image
                      alt={item.img}
                      src={`/${item.img}.avif`}
                      width={"50"}
                      height={"50"}
                      className="h-[30px] w-[40px]"
                    ></Image>
                  </div>
                  <div className="flex w-full flex-col gap-1">
                    <p className="text-sm">{item.name}</p>
                    <p className="text-xs text-[#a1a1a1]">@{item.username}</p>
                  </div>
                </div>
                <svg
                  data-testid="geist-icon"
                  height={16}
                  strokeLinejoin="round"
                  viewBox="0 0 16 16"
                  width={16}
                  style={{ color: "currentcolor" }}
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.5 0.5H5.75L9.48421 5.71053L14 0.5H16L10.3895 6.97368L16.5 15.5H11.25L7.51579 10.2895L3 15.5H1L6.61053 9.02632L0.5 0.5ZM12.0204 14L3.42043 2H4.97957L13.5796 14H12.0204Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <span className="text-sm text-white">
                &quot;{item.body}&quot;
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#ffffff"
                  viewBox="0 0 256 256"
                >
                  <path d="M240.49,103.52l-80-80A12,12,0,0,0,140,32V68.74c-25.76,3.12-53.66,15.89-76.75,35.47-29.16,24.74-47.32,56.69-51.14,90A16,16,0,0,0,39.67,207h0c10.46-11.14,47-45.74,100.33-50.42V192a12,12,0,0,0,20.48,8.48l80-80A12,12,0,0,0,240.49,103.52ZM164,163V144a12,12,0,0,0-12-12c-49,0-86.57,21.56-109.79,40.11,7.13-18.16,19.63-35.22,36.57-49.59C101.3,103.41,128.67,92,152,92a12,12,0,0,0,12-12V61l51,51Z"></path>
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#ffffff"
                  viewBox="0 0 256 256"
                >
                  <path d="M237,77.47A28,28,0,0,0,216,68H164V56a44.05,44.05,0,0,0-44-44,12,12,0,0,0-10.73,6.63L72.58,92H32a20,20,0,0,0-20,20v88a20,20,0,0,0,20,20H204a28,28,0,0,0,27.78-24.53l12-96A28,28,0,0,0,237,77.47ZM36,116H68v80H36ZM220,96.5l-12,96a4,4,0,0,1-4,3.5H92V106.83L126.82,37.2A20,20,0,0,1,140,56V80a12,12,0,0,0,12,12h64a4,4,0,0,1,4,4.5Z"></path>
                </svg>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#ffffff"
                  viewBox="0 0 256 256"
                >
                  <path d="M216,44H40A20,20,0,0,0,20,64V224A19.82,19.82,0,0,0,31.56,242.1a20.14,20.14,0,0,0,8.49,1.9,19.91,19.91,0,0,0,12.82-4.72l.12-.11L84.47,212H216a20,20,0,0,0,20-20V64A20,20,0,0,0,216,44Zm-4,144H80a11.93,11.93,0,0,0-7.84,2.92L44,215.23V68H212Z"></path>
                </svg>
              </div>
              <p className="text-xs">March 15, 2024</p>
            </div>
            {/* <Activity
              className="~px-0/16"
              likes={likes.count}
              onLike={$likes.toggle}
              liked={likes.hasIncremented}
              reposts={reposts.count}
              onRepost={$reposts.toggle}
              reposted={reposts.hasIncremented}
              bookmarks={bookmarks.count}
              onBookmark={$bookmarks.toggle}
              bookmarked={bookmarks.hasIncremented}
              views={views.count}
            /> */}
          </div>
        ))}
      </div>
    </div>
  );
}
