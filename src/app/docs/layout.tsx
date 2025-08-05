import { source } from "@/lib/source";
import { DocsSidebar } from "./components/docs-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { docsOptions } from "../layout.config";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";
import NavigationMobile from "@/components/Navigation-Mobile";
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      {...docsOptions}
      nav={{
        component: (
          <div>
            {" "}
            <NavigationMobile className="xl:hidden">
              {/* Add children here if needed */}
              <></>
            </NavigationMobile>
          </div>
        ),
      }}
      sidebar={{
        enabled: true,
        component: (
          <div
            className={cn(
              "container-wrapper flex flex-col [--fd-sidebar-width:0px]",
            )}
          >
            <SidebarProvider className="3xl:fixed:container 3xl:fixed:px-3 min-h-min flex-1 items-start px-0 [--sidebar-width:220px] [--top-spacing:0] lg:grid lg:grid-cols-[var(--sidebar-width)_minmax(0,1fr)] lg:[--sidebar-width:240px] lg:[--top-spacing:calc(var(--spacing)*4)]">
              <DocsSidebar tree={source.pageTree} />
            </SidebarProvider>
          </div>
        ),
      }}
    >
      {children}
    </DocsLayout>
  );
}
