import { source } from "@/lib/source";
import { DocsSidebar } from "./components/docs-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Sidebar, SidebarContent } from "@/src/components/sidebar";
import { DocsLayout } from "@/components/layout/docs";
import { docsOptions } from "@/lib/layout.shared";


export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      {...docsOptions}
      
        // component: (
        //   <div
        //     className={cn(
        //       "container-wrapper xl:border-input flex flex-col [--fd-sidebar-width:0px] xl:!w-[20rem] xl:border-r",
        //     )}
        //   >
        //     <SidebarContent />
        //   </div>
        // ),
      }}
    >
      {children}
    </DocsLayout>
  );
}
