import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Track | Decent",
  description: "Decent - Track",
};
export default function TrackLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center">
      {children}
    </section>
  );
}
