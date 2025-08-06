"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import type { source } from "@/lib/source";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { div } from "motion/react-client";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronRight } from "lucide-react";

export function DocsSidebar({
  tree,
  ...props
}: React.ComponentProps<typeof Sidebar> & { tree: typeof source.pageTree }) {
  const pathname = usePathname();

  return (
    <Sidebar
      className="sticky top-[7rem] z-30 hidden h-[calc(100svh-var(--header-height)-var(--footer-height))] bg-transparent lg:flex"
      collapsible="none"
      {...props}
    >
      <SidebarContent
        style={{ scrollbarWidth: "none" }}
        className="no-scrollbar styled-scrollbar px-2 pb-0 pl-[1.5rem]"
      >
        {tree.children.map((item) =>
          item.name === "Library Management" ? (
            <SidebarGroup key={item.$id}>
              <SidebarMenu>
                <Collapsible defaultOpen className="group/collapsible">
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton>
                        {item.name}
                        <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      {item.type === "folder" && (
                        <SidebarMenuSub className="gap-0.5">
                          {item.children.map((item) => {
                            return (
                              item.type === "page" && (
                                <SidebarMenuItem key={item.url}>
                                  <SidebarMenuButton
                                    asChild
                                    isActive={item.url === pathname}
                                    className="data-[active=true]:border-input hover:bg-input 3xl:fixed:w-full 3xl:fixed:max-w-48 relative h-[30px] w-fit overflow-visible border border-transparent text-[0.8rem] font-medium after:absolute after:inset-x-0 after:-inset-y-1 after:z-0 after:rounded-md data-[active=true]:bg-white dark:data-[active=true]:bg-black"
                                  >
                                    <Link href={item.url}>{item.name}</Link>
                                  </SidebarMenuButton>
                                </SidebarMenuItem>
                              )
                            );
                          })}
                        </SidebarMenuSub>
                      )}
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              </SidebarMenu>
            </SidebarGroup>
          ) : (
            <SidebarGroup key={item.$id}>
              <SidebarGroupLabel className="">{item.name}</SidebarGroupLabel>
              <ul className="flex flex-col gap-2 text-sm">
                {item.type === "folder" && (
                  <SidebarMenuSub className="border-input gap-0.5">
                    {item.children.map((item) => {
                      return (
                        item.type === "page" && (
                          <SidebarMenuItem key={item.url}>
                            <SidebarMenuButton
                              asChild
                              isActive={item.url === pathname}
                              className="3xl:fixed:w-full 3xl:fixed:max-w-48 relative h-[30px] w-fit overflow-visible border border-transparent text-[0.8rem] font-medium after:absolute after:inset-x-0 after:-inset-y-1 after:z-0 after:rounded-md data-[active=true]:border-[#404040] data-[active=true]:bg-white dark:hover:!bg-black dark:data-[active=true]:bg-black"
                            >
                              <Link href={item.url}>{item.name}</Link>
                            </SidebarMenuButton>
                          </SidebarMenuItem>
                        )
                      );
                    })}
                  </SidebarMenuSub>
                )}
              </ul>
            </SidebarGroup>
          ),
        )}
      </SidebarContent>
    </Sidebar>
  );
}
