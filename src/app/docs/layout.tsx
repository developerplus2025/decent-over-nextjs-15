import { source } from "@/lib/source";
import { DocsSidebar } from "./components/docs-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

import { docsOptions } from "../layout.config";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Sidebar } from "@/src/components/sidebar";
import { DocsLayout } from "@/components/layout/docs";
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      {...docsOptions}
      sidebar={{
        tabs: [
          {
            title: "Docs",
            description: "The docs for SonixLab",
            url: "/docs/",
          },
          {
            title: "API reference",
            description: "The guided for Developer",
            url: "/docs/api-reference",
          },
        ],

        // component: (
        //   <div
        //     className={cn(
        //       "container-wrapper xl:border-input flex flex-col [--fd-sidebar-width:0px] xl:!w-[20rem] xl:border-r",
        //     )}
        //   >
        //     <Sidebar Content />
        //   </div>
        // ),
      }}
    >
      {children}
    </DocsLayout>
  );
}
