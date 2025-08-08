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

type ModeItem = {
  id: number;
  name: string;
  title: string;
  description: string;
};

type ModeGuided = {
  docs: ModeItem;
  api: ModeItem;
};

export function VersionSwitcher({
  ModeGuided,
  defaultModeGuided,
}: {
  ModeGuided: ModeGuided;
  defaultModeGuided: ModeGuided[keyof ModeGuided]["name"]; // 'docs' hoặc 'api'
}) {
  const [selectedGuidedMode, setSelectedGuidedMode] = React.useState<
    keyof ModeGuided
  >(defaultModeGuided as keyof ModeGuided);

  const items = Object.entries(ModeGuided); // [['docs', {...}], ['api', {...}]]

  return (
    <SidebarMenu className="pl-[1.5rem]">
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
                  {ModeGuided[selectedGuidedMode].title}
                </span>
                <span className="text-xs">
                  {ModeGuided[selectedGuidedMode].description}
                </span>
              </div>
              <ChevronsUpDown className="ml-auto" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width)"
            align="start"
          >
            {items.map(([key, value]) => (
              <DropdownMenuItem
                key={key}
                onSelect={() => setSelectedGuidedMode(key as keyof ModeGuided)}
              >
                {value.title}
                {key === selectedGuidedMode && <Check className="ml-auto" />}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
