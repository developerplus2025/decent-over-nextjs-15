import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { GeistSans } from "geist/font/sans";
import Image from "next/image";
import { PageTree } from "../docs/components/page-tree";
import { source } from "@/lib/source";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Decent: A Useful Platform For Musicians",
  description: "Decent - Home",
};
export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {" "}
      <PageTree tree={source.pageTree} />
      {children}
    </section>
  );
}
