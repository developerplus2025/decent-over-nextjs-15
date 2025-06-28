import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Login | Decent",
  description: "Decent - Login",
};
export default function LoginLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    return (
    
        <section>{children}</section>
    )
}