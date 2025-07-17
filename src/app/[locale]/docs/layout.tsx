import type { Metadata } from "next";
import SideBar from "./components/side-bar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";
import TocHeading from "./components/toc-heading";
import { Sidebar } from "./components/sidebar";
export const metadata: Metadata = {
  title: "Docs - Page",
  description: "Decent - Docs",
};
export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex h-[calc(100vh-75.6px)] w-full gap-[2rem] p-[4rem]">
      <Sidebar />
      <div className="flex flex-col">{children}</div>
    </section>
  );
}
