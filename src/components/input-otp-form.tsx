"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import VideoPage from "@/app/video/page";
import { usePathname } from "next/navigation";

const FormSchema = z.object({
  pin: z.string().min(6, {
    message: "Your one-time password must be 6 characters.",
  }),
});

export function InputOTPForm() {
  const [active, setActive] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      pin: "",
    },
  });
 const pathname = usePathname();
 const isDocsGlss = pathname === "/docs/glss";
  function onSubmit(data: z.infer<typeof FormSchema>) {
    if (data.pin === "555444") {
      setActive(true);
       if (isDocsGlss) {
         const nddocs = document.getElementById("nd-toc");
         if (nddocs) {
           nddocs.style.display = "none";
         }

         document.body.style.overflowY = "hidden";
       } else {
         document.body.style.overflowY = "auto";
       }
    }
  }

  // Nếu active thì hiển thị VideoPage
  if (active) {
    return <VideoPage />;
  }

  return (
    <Form {...form}>
      <div>
        <h1 className="prose">Enter The Passwork to Open</h1>
      </div>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="pin"
          render={({ field }) => (
            <FormItem>
              <FormLabel>One-Time Password</FormLabel>
              <FormControl>
                <InputOTP maxLength={6} {...field}>
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </FormControl>
              <FormDescription>
                Please enter the one-time password sent to your phone.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
