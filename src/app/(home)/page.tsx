import CompAvatar from "@/components/comp-412";
import BeautifulFeaturesLayout from "./components/beautiful-features-layout";
import SocialProof from "./components/social-proof";
import Metric from "./components/metric";
import PowerBy from "./components/power-by";
import AccordionFAQ from "./components/faq";
import { PeopleSay } from "./components/people-say";
import { NavigationEffect } from "@/components/NavigationEffect";
import MainTextHome from "./components/main-text-home";
import variables from "../variables.module.scss";
export default function Home() {
  return (
    <main className="GeistSans relative flex min-h-screen w-full flex-col items-center justify-between gap-4 overflow-x-hidden min-[300px]:pt-40 min-[300px]:pb-16 xl:pt-24 xl:pb-4 dark:bg-black dark:scheme-dark">
      <CompAvatar />
      <MainTextHome />
      <h1 className="xl:text-sm min-[300px]:text-xs text-center min-[300px]:w-[200px] xl:w-full" style={{ color: variables.mutedColor }}>By using VS Code, you agree to its license and privacy statement.</h1>
      <div className="mx-auto mt-40 mb-16 h-px w-full bg-[#262626]"></div>
      <div className="w-full">
        <BeautifulFeaturesLayout />
      </div>
      <div className="mx-auto my-16 h-px w-[700px] bg-linear-to-r from-transparent via-zinc-700 to-transparent dark:via-zinc-300"></div>
      <SocialProof />
      <div className="mx-auto my-16 h-px w-[700px] bg-linear-to-r from-transparent via-zinc-700 to-transparent dark:via-zinc-300"></div>
      <Metric />
      <div className="mx-auto my-16 h-px w-[700px] bg-linear-to-r from-transparent via-zinc-700 to-transparent dark:via-zinc-300"></div>
      <PowerBy />
      <div className="mx-auto my-16 h-px w-[700px] bg-linear-to-r from-transparent via-zinc-700 to-transparent dark:via-zinc-300"></div>
      <AccordionFAQ />
      <div className="mx-auto my-16 h-px w-[700px] bg-linear-to-r from-transparent via-zinc-700 to-transparent dark:via-zinc-300"></div>
      <PeopleSay />
      <div className="mx-auto my-16 h-px w-[700px] bg-linear-to-r from-transparent via-zinc-700 to-transparent dark:via-zinc-300"></div>
      <div className="text-center">
        <p className={`font-[BespokeStencil-BoldItalic] text-[55px]`}>Decent</p>
      </div>
      <div>
        <NavigationEffect />
      </div>
      <div className="mb-20"> </div>
    </main>
  );
}
