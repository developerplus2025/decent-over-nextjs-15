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
    <section className="flex flex-col gap-[2rem]">
      <AnimatedTabs />
      {children}
    </section>
  );
}
