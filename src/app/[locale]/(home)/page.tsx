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
import { Badge } from "@/components/luxe/badge";
import PopoverRws from "@/components/popover-rws";
import { useTranslations } from "next-intl";
export default function Home() {
   const t = useTranslations('MainTextHome');
  return (
    <main className="GeistSans relative flex min-h-screen w-full flex-col items-center justify-between gap-4 overflow-x-hidden min-[300px]:pt-40 min-[300px]:pb-16 xl:pt-[3rem] xl:pb-4 dark:bg-black dark:scheme-dark">
      <div className="flex items-center justify-center gap-4">
        <Badge variant="animated-border">{t('LableBadge')}</Badge>
        <span className="text-sm">
          {t('BadgeText')}
        </span>
      </div>
      <MainTextHome />
      <h1
        className="text-center min-[300px]:w-[200px] min-[300px]:text-xs xl:w-full xl:text-sm"
        style={{ color: variables.mutedColor }}
      >
        {t('PrivacyText')}
      </h1>
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
        <PopoverRws />
      </div>
      <div>
        <NavigationEffect />
      </div>
      <div className="mb-20"> </div>
    </main>
  );
}
