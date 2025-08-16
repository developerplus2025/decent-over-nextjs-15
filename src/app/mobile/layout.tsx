import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Mobile | Decent",
  description: "Decent - Mobile",
};
export default function LibraryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="h-dvh overflow-x-hidden overflow-y-hidden">{children}</section>;
}
