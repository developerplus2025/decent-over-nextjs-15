import type { Metadata } from "next";
import SideBar from "./components/side-bar";
export const metadata: Metadata = {
  title: "Docs - Page",
  description: "Decent - Docs",
};
export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className="w-full flex  p-[4rem] gap-[2rem] h-[calc(100vh-75.6px)]"><SideBar/>{children}</section>;
}
