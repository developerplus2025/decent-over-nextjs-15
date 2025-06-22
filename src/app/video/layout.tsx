import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Video | Decent",
  description: "Decent - Video",
};
export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section>{children}</section>;
}
