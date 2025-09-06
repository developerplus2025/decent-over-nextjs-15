import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Server | Decent",
  description: "Decent - Server",
};
export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col gap-[6rem] items-center justify-center pt-28">
      {children}
    </section>
  );
}
