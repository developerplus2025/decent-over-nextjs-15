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
  return (
    <section className="flex h-[calc(100vh-75.6px)] flex-col items-center justify-center">
      {children}
    </section>
  );
}
