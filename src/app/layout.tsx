import type { Metadata } from "next";
// "use client";

// import { usePathname } from "next/navigation";
// import { AnimatePresence, motion } from "framer-motion";
import { Inter } from "next/font/google";
import "./globals.css";
// import 'fumadsocs-ui/dist/style.css';
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
// import { Toaster, toast } from "sonner";
import { ThemeProvider } from "@/components/ui/theme-provider";
import Image from "next/image";
import { Navigation } from "@/components/Navigation";
import { DocsNavigation } from "@/components/DocsNavigation";
import { CMDK } from "@/components/command-menu";
// import { Toaster } from "@/components/ui/sonner";
import Providers from "@/components/ProgressBarProvider";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/sonner";
import CookieAlert from "@/components/cookie-alert";
import { RootProvider } from "fumadocs-ui/provider";
import FrameVideo from "./(home)/components/frame-video";
import { Analytics } from "@vercel/analytics/react";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Decent: Buy and Sell Pi Network",
  description: "Decent App ",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const pathname = usePathname();
  return (
    <>
      <html
        suppressHydrationWarning
        lang="en"
        className={`${GeistSans.className} custom_command_scroll dark`}
        style={{ colorScheme: "dark" }}
      >
        <head>
          <meta name="theme-color" content="#000000" />
        </head>

        <body
          style={{ colorScheme: "dark" }}
          className="theme-default relative overflow-x-hidden antialiased"
        >
          <Analytics />

          <CookieAlert />
          <ThemeProvider
            disableTransitionOnChange
            enableSystem
            attribute="class"
            defaultTheme="dark"
          >
            <Navigation />
            <DocsNavigation />

            <Toaster
              icons={{
                success: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-4"
                  >
                    <path d="M5.85 3.5a.75.75 0 0 0-1.117-1 9.719 9.719 0 0 0-2.348 4.876.75.75 0 0 0 1.479.248A8.219 8.219 0 0 1 5.85 3.5ZM19.267 2.5a.75.75 0 1 0-1.118 1 8.22 8.22 0 0 1 1.987 4.124.75.75 0 0 0 1.48-.248A9.72 9.72 0 0 0 19.266 2.5Z" />
                    <path
                      fillRule="evenodd"
                      d="M12 2.25A6.75 6.75 0 0 0 5.25 9v.75a8.217 8.217 0 0 1-2.119 5.52.75.75 0 0 0 .298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 1 0 7.48 0 24.583 24.583 0 0 0 4.83-1.244.75.75 0 0 0 .298-1.205 8.217 8.217 0 0 1-2.118-5.52V9A6.75 6.75 0 0 0 12 2.25ZM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 0 0 4.496 0l.002.1a2.25 2.25 0 1 1-4.5 0Z"
                      clipRule="evenodd"
                    />
                  </svg>
                ),
              }}
              hotkey={["alt + C"]}
              toastOptions={{
                unstyled: false,
                classNames: {
                  cancelButton: "bg-orange-400",
                  closeButton:
                    "dark:bg-black left-[325px] top-1/2 -translate-y-1/2 border border-[#404040] transition-[background] transition-colors  ease-out duration-500 bg-white hover:bg-muted dark:hover:bg-white dark:hover:text-black",
                },
              }}
              offset={{ top: "80px" }}
              closeButton
              className={` ${GeistSans.className}`}
              position="top-center"
            />
            <RootProvider>{children}</RootProvider>
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
