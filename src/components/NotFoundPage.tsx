import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

export default function NotFoundPage() {
  return (
    <div className="w-full flex h-[calc(100vh-80px)] justify-center mt-12">
      <div className=" w-[900px] gap-8 h-[400px] flex flex-col items-center justify-center rounded-lg">
        <p className="text-[6rem] font-semibold">404</p>
        <p className="w-[400px] font-medium">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex gap-4">
          <Button> <Link
            href="/"
           
          >
            Home
          </Link></Button>
         <Button> <Link
            href="/docs"
            
          >
            Docs
          </Link></Button><Button> <Link
            href="/pricing"
           
          >
            Pricing
          </Link></Button>
         
         
        </div>
      </div>
    </div>
  );
}
