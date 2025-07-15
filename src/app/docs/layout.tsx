import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Docs - Page",
  description: "Decent - Docs",
};
export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
