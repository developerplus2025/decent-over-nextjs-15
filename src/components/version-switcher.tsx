"use client";

import * as React from "react";
import { Check, ChevronsUpDown, GalleryVerticalEnd } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
type ModeGuided = {
  id: number;
  title: string;
  description: string;
};

export function VersionSwitcher({
  ModeGuided,
  defaultModeGuided,
}: {
  ModeGuided: ModeGuided[];
  defaultModeGuided: string;
}) {
  const [selectedGuidedMode, setSelectedGuidedMode] =
    React.useState(defaultModeGuided);
  const items = ModeGuided;
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger
            className="focus-visible:ring-0 active:bg-black"
            asChild
          >
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <div className="text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg border border-[#404040]">
                <GalleryVerticalEnd className="size-4" />
              </div>
              <div className="flex flex-col gap-0.5 leading-none">
                <span className="font-medium">
                  {
                    items.find((item) => item.title === selectedGuidedMode)
                      ?.title
                  }
                </span>
                <span className="">
                  {" "}
                  {
                    items.find(
                      (item) => item.description === selectedGuidedMode,
                    )?.description
                  }
                </span>
              </div>
              <ChevronsUpDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width)"
            align="start"
          >
            {ModeGuided.map((version) => (
              <DropdownMenuItem
                key={version.id}
                onSelect={() => setSelectedGuidedMode(version.title)}
              >
                {version.description}
                {version.description === selectedGuidedMode && (
                  <Check className="ml-auto" />
                )}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
