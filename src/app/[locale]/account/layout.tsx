import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "About Us",
  description: "Decent - About Us",
};
export default function AboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
