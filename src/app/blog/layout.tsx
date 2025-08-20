import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import type { Metadata } from "next";
import Link from "next/link";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { DatePickerBlog } from "./date-picker-blog";
// import Tabs from "./tabs";
import TabAnimation from "./tabs";
import { AnimatedTabs } from "./AnimationTab";
export const metadata: Metadata = {
  title: "Blog - Decent",
  description: "Blog - Decent",
};
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-[3rem]">
      <div className="flex items-center justify-between px-[10rem]">
        <div className="flex w-full items-center justify-between gap-[4rem] pt-[3rem]">
          <h2 className="flex-shrink-0 text-2xl font-bold tracking-tight text-nowrap">
            Recent Articles
          </h2>
          <AnimatedTabs />
          <div className="relative w-full">
            <Input
              type="search"
              placeholder="Search for favorite songs"
              className="w-full rounded-full pl-[3rem] placeholder:text-[#7c7c7c]"
            />
            <MagnifyingGlassIcon
              width="21"
              height="21"
              className="search_input-blog absolute top-1/2 left-[16px] -translate-y-1/2"
            />
          </div>
          <DatePickerBlog />
        </div>
      </div>
      {children}
    </section>
  );
}
