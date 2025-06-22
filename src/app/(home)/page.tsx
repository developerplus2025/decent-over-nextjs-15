import CompAvatar from "@/components/comp-412";
import BeautifulFeaturesLayout from "./components/beautiful-features-layout";
import SocialProof from "./components/social-proof";
import Metric from "./components/metric";
import PowerBy from "./components/power-by";
import AccordionFAQ from "./components/faq";
import { PeopleSay } from "./components/people-say";
import { NavigationEffect } from "@/components/NavigationEffect";
import MainTextHome from "./components/main-text-home";

export default function Home() {
  return (
    <main className="GeistSans relative flex min-h-screen w-full flex-col items-center justify-between gap-[1rem] overflow-x-hidden pb-[1rem] pt-[6rem] dark:bg-black dark:[color-scheme:dark]">
      <CompAvatar />
      <MainTextHome />
      <div className="mx-auto mb-[4rem] mt-[10rem] h-px w-full bg-[#262626]"></div>
      <div className="w-full">
        <BeautifulFeaturesLayout />
      </div>
      <div className="mx-auto my-[4rem] h-px w-[700px] bg-gradient-to-r from-transparent via-zinc-700 to-transparent dark:via-zinc-300"></div>
      <SocialProof />
      <div className="mx-auto my-[4rem] h-px w-[700px] bg-gradient-to-r from-transparent via-zinc-700 to-transparent dark:via-zinc-300"></div>
      <Metric />
      <div className="mx-auto my-[4rem] h-px w-[700px] bg-gradient-to-r from-transparent via-zinc-700 to-transparent dark:via-zinc-300"></div>
      <PowerBy />
      <div className="mx-auto my-[4rem] h-px w-[700px] bg-gradient-to-r from-transparent via-zinc-700 to-transparent dark:via-zinc-300"></div>
      <AccordionFAQ />
      <div className="mx-auto my-[4rem] h-px w-[700px] bg-gradient-to-r from-transparent via-zinc-700 to-transparent dark:via-zinc-300"></div>
      <PeopleSay />
      <div className="mx-auto my-[4rem] h-px w-[700px] bg-gradient-to-r from-transparent via-zinc-700 to-transparent dark:via-zinc-300"></div>
      <div className="text-center">
        <p className="font-[BespokeStencil-BoldItalic] text-[55px]">Decent</p>
      </div>
      <div>
        <NavigationEffect />
      </div>
      <div className="mb-[5rem]"> </div>
    </main>
  );
}
