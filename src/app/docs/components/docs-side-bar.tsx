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
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";
import { div } from "motion/react-client";
import { ChevronRight } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/animate-ui/radix/collapsible";
import { ScrollArea } from "@/components/ui/scroll-area";
import { VersionSwitcher } from "@/components/version-switcher";
const data = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
};
const collapsibleSections = ["docs", "api-reference"];

export function DocsSidebar({
  tree,
  ...props
}: React.ComponentProps<typeof Sidebar> & { tree: typeof source.pageTree }) {
  const pathname = usePathname();
  console.log(tree.children);
  const items = [
    {
        "type": "folder",
        "name": "Docs",
        "root": true,
        "description": "The docs for SonixLab",
        "children": [
            {
                "type": "folder",
                "name": "Get Started",
                "children": [
                    {
                        "$id": "docs/(root)/index.mdx",
                        "type": "page",
                        "name": "Installation",
                        "description": "Learn how to install the music software on your system and ensure everything is set up correctly.",
                        "url": "/docs/docs",
                        "$ref": {
                            "file": "docs/(root)/index.mdx"
                        }
                    },
                    {
                        "$id": "docs/(root)/interface-overview.mdx",
                        "type": "page",
                        "name": "Interface Overview",
                        "description": "Get to know the main sections of the music software interface and how they work.",
                        "url": "/docs/docs/interface-overview",
                        "$ref": {
                            "file": "docs/(root)/interface-overview.mdx"
                        }
                    },
                    {
                        "$id": "docs/(root)/importing-songs.mdx",
                        "type": "page",
                        "name": "Importing Songs",
                        "description": "Learn how to import audio files into the music software and manage your music library.",
                        "url": "/docs/docs/importing-songs",
                        "$ref": {
                            "file": "docs/(root)/importing-songs.mdx"
                        }
                    },
                    {
                        "$id": "docs/(root)/first-play.mdx",
                        "type": "page",
                        "name": "First Play",
                        "description": "Learn how to start your first playback and explore basic controls of the music software.",
                        "url": "/docs/docs/first-play",
                        "$ref": {
                            "file": "docs/(root)/first-play.mdx"
                        }
                    }
                ],
                "$id": "docs/(root)",
                "$ref": {
                    "metaFile": "docs/(root)/meta.json"
                }
            },
            {
                "type": "folder",
                "name": "Playback Features",
                "children": [
                    {
                        "$id": "docs/playback-features/index.mdx",
                        "type": "page",
                        "name": "Playlists",
                        "description": "Learn how to create, manage, and customize playlists in your music library.",
                        "url": "/docs/docs/playback-features",
                        "$ref": {
                            "file": "docs/playback-features/index.mdx"
                        }
                    },
                    {
                        "$id": "docs/playback-features/looping-shuffle.mdx",
                        "type": "page",
                        "name": "Looping & Shuffle",
                        "description": "Learn how to loop tracks or enable shuffle playback in your music experience.",
                        "url": "/docs/docs/playback-features/looping-shuffle",
                        "$ref": {
                            "file": "docs/playback-features/looping-shuffle.mdx"
                        }
                    },
                    {
                        "$id": "docs/playback-features/playback-speed.mdx",
                        "type": "page",
                        "name": "Playback Speed",
                        "description": "Adjust the speed of music playback without affecting pitch.",
                        "url": "/docs/docs/playback-features/playback-speed",
                        "$ref": {
                            "file": "docs/playback-features/playback-speed.mdx"
                        }
                    }
                ],
                "$id": "docs/playback-features",
                "$ref": {
                    "metaFile": "docs/playback-features/meta.json"
                }
            },
            {
                "type": "folder",
                "name": "Audio Effects",
                "children": [
                    {
                        "$id": "docs/audio-effects/index.mdx",
                        "type": "page",
                        "name": "Equalizer",
                        "description": "Learn how to shape your sound using the built-in equalizer.",
                        "url": "/docs/docs/audio-effects",
                        "$ref": {
                            "file": "docs/audio-effects/index.mdx"
                        }
                    },
                    {
                        "$id": "docs/audio-effects/reverb-delay.mdx",
                        "type": "page",
                        "name": "Reverb & Delay",
                        "description": "Add spatial effects to enhance your music experience.",
                        "url": "/docs/docs/audio-effects/reverb-delay",
                        "$ref": {
                            "file": "docs/audio-effects/reverb-delay.mdx"
                        }
                    },
                    {
                        "$id": "docs/audio-effects/custom-fx.mdx",
                        "type": "page",
                        "name": "Custom FX Chains",
                        "description": "Build and manage your own chain of audio effects.",
                        "url": "/docs/docs/audio-effects/custom-fx",
                        "$ref": {
                            "file": "docs/audio-effects/custom-fx.mdx"
                        }
                    }
                ],
                "$id": "docs/audio-effects",
                "$ref": {
                    "metaFile": "docs/audio-effects/meta.json"
                }
            },
            {
                "type": "folder",
                "name": "Library Management",
                "children": [
                    {
                        "$id": "docs/library-management/index.mdx",
                        "type": "page",
                        "name": "Organizing Songs",
                        "description": "Learn how to organize your music library efficiently.",
                        "url": "/docs/docs/library-management",
                        "$ref": {
                            "file": "docs/library-management/index.mdx"
                        }
                    },
                    {
                        "$id": "docs/library-management/tag-editing.mdx",
                        "type": "page",
                        "name": "Tag Editing",
                        "description": "Edit song metadata like title, artist, genre, and album art.",
                        "url": "/docs/docs/library-management/tag-editing",
                        "$ref": {
                            "file": "docs/library-management/tag-editing.mdx"
                        }
                    },
                    {
                        "$id": "docs/library-management/smart-playlists.mdx",
                        "type": "page",
                        "name": "Smart Playlists",
                        "description": "Automatically create playlists based on rules and filters.",
                        "url": "/docs/docs/library-management/smart-playlists",
                        "$ref": {
                            "file": "docs/library-management/smart-playlists.mdx"
                        }
                    }
                ],
                "$id": "docs/library-management",
                "$ref": {
                    "metaFile": "docs/library-management/meta.json"
                }
            },
            {
                "type": "folder",
                "name": "Settings Customization",
                "children": [
                    {
                        "$id": "docs/settings-customization/index.mdx",
                        "type": "page",
                        "name": "Themes",
                        "description": "Change the look and feel of the software with themes.",
                        "url": "/docs/docs/settings-customization",
                        "$ref": {
                            "file": "docs/settings-customization/index.mdx"
                        }
                    },
                    {
                        "$id": "docs/settings-customization/audio-devices.mdx",
                        "type": "page",
                        "name": "Audio Devices",
                        "description": "Manage input and output devices for the best sound experience.",
                        "url": "/docs/docs/settings-customization/audio-devices",
                        "$ref": {
                            "file": "docs/settings-customization/audio-devices.mdx"
                        }
                    },
                    {
                        "$id": "docs/settings-customization/keyboard-shortcuts.mdx",
                        "type": "page",
                        "name": "Keyboard Shortcuts",
                        "description": "Use custom hotkeys for quicker navigation and control.",
                        "url": "/docs/docs/settings-customization/keyboard-shortcuts",
                        "$ref": {
                            "file": "docs/settings-customization/keyboard-shortcuts.mdx"
                        }
                    }
                ],
                "$id": "docs/settings-customization",
                "$ref": {
                    "metaFile": "docs/settings-customization/meta.json"
                }
            },
            {
                "type": "folder",
                "name": "Advanced Usage",
                "children": [
                    {
                        "$id": "docs/advanced-usage/index.mdx",
                        "type": "page",
                        "name": "MIDI Integration",
                        "description": "Connect and control your software with MIDI devices.",
                        "url": "/docs/docs/advanced-usage",
                        "$ref": {
                            "file": "docs/advanced-usage/index.mdx"
                        }
                    },
                    {
                        "$id": "docs/advanced-usage/plugin-support.mdx",
                        "type": "page",
                        "name": "Plugin Support",
                        "description": "Extend functionality using audio plugins (VST, AU).",
                        "url": "/docs/docs/advanced-usage/plugin-support",
                        "$ref": {
                            "file": "docs/advanced-usage/plugin-support.mdx"
                        }
                    },
                    {
                        "$id": "docs/advanced-usage/developer-mode.mdx",
                        "type": "page",
                        "name": "Developer Mode",
                        "description": "Tools and options for developers and advanced users.",
                        "url": "/docs/docs/advanced-usage/developer-mode",
                        "$ref": {
                            "file": "docs/advanced-usage/developer-mode.mdx"
                        }
                    }
                ],
                "$id": "docs/advanced-usage",
                "$ref": {
                    "metaFile": "docs/advanced-usage/meta.json"
                }
            },
            {
                "type": "folder",
                "name": "Troubleshooting",
                "children": [
                    {
                        "$id": "docs/troubleshooting/index.mdx",
                        "type": "page",
                        "name": "No Sound",
                        "description": "How to fix when the software has no audio output.",
                        "url": "/docs/docs/troubleshooting",
                        "$ref": {
                            "file": "docs/troubleshooting/index.mdx"
                        }
                    },
                    {
                        "$id": "docs/troubleshooting/app-crashes.mdx",
                        "type": "page",
                        "name": "App Crashes",
                        "description": "Fixes and tips when the software crashes unexpectedly.",
                        "url": "/docs/docs/troubleshooting/app-crashes",
                        "$ref": {
                            "file": "docs/troubleshooting/app-crashes.mdx"
                        }
                    },
                    {
                        "$id": "docs/troubleshooting/performance.mdx",
                        "type": "page",
                        "name": "Performance Issues",
                        "description": "Tips for resolving lag, slow playback, or high CPU usage.",
                        "url": "/docs/docs/troubleshooting/performance",
                        "$ref": {
                            "file": "docs/troubleshooting/performance.mdx"
                        }
                    }
                ],
                "$id": "docs/troubleshooting",
                "$ref": {
                    "metaFile": "docs/troubleshooting/meta.json"
                }
            }
        ],
        "$id": "docs",
        "$ref": {
            "metaFile": "docs/meta.json"
        }
    },
    {
        "type": "folder",
        "name": "API Reference ",
        "root": true,
        "description": "The guided for Developer",
        "index": {
            "$id": "api-reference/index.mdx",
            "type": "page",
            "name": "API Reference",
            "description": "The Guided For Developer",
            "url": "/docs/api-reference",
            "$ref": {
                "file": "api-reference/index.mdx"
            }
        },
        "children": [
            {
                "$id": "api-reference/index.mdx",
                "type": "page",
                "name": "API Reference",
                "description": "The Guided For Developer",
                "url": "/docs/api-reference",
                "$ref": {
                    "file": "api-reference/index.mdx"
                }
            },
            {
                "type": "folder",
                "name": "Get Started",
                "children": [
                    {
                        "$id": "api-reference/(root)/index.mdx",
                        "type": "page",
                        "name": "Installation",
                        "description": "Learn how to install the music software on your system and ensure everything is set up correctly.",
                        "url": "/docs/api-reference",
                        "$ref": {
                            "file": "api-reference/(root)/index.mdx"
                        }
                    },
                    {
                        "$id": "api-reference/(root)/interface-overview.mdx",
                        "type": "page",
                        "name": "Interface Overview",
                        "description": "Get to know the main sections of the music software interface and how they work.",
                        "url": "/docs/api-reference/interface-overview",
                        "$ref": {
                            "file": "api-reference/(root)/interface-overview.mdx"
                        }
                    },
                    {
                        "$id": "api-reference/(root)/importing-songs.mdx",
                        "type": "page",
                        "name": "Importing Songs",
                        "description": "Learn how to import audio files into the music software and manage your music library.",
                        "url": "/docs/api-reference/importing-songs",
                        "$ref": {
                            "file": "api-reference/(root)/importing-songs.mdx"
                        }
                    },
                    {
                        "$id": "api-reference/(root)/first-play.mdx",
                        "type": "page",
                        "name": "First Play",
                        "description": "Learn how to start your first playback and explore basic controls of the music software.",
                        "url": "/docs/api-reference/first-play",
                        "$ref": {
                            "file": "api-reference/(root)/first-play.mdx"
                        }
                    }
                ],
                "$id": "api-reference/(root)",
                "$ref": {
                    "metaFile": "api-reference/(root)/meta.json"
                }
            }
        ],
        "$id": "api-reference",
        "$ref": {
            "metaFile": "api-reference/meta.json"
        }
    }
];
  return (
    <Sidebar
      className="sticky top-[7rem] z-30 hidden h-[calc(100svh-var(--header-height)-var(--footer-height))] bg-transparent lg:flex"
      collapsible="none"
      {...props}
    >
      <SidebarHeader>
        <VersionSwitcher
          versions={data.versions}
          defaultVersion={data.versions[0]}
        />
      </SidebarHeader>
      <ScrollArea className="h-[calc(100svh-var(--header-height)-var(--footer-height))]">
        <SidebarContent
          style={{ scrollbarWidth: "none" }}
          className="no-scrollbar styled-scrollbar px-2 pb-0 pl-[1.5rem]"
        >
          
          {items.map((item) =>
           
              <SidebarGroup key={item.$id}>
                <SidebarMenu>
                  <Collapsible defaultOpen className="group/collapsible">
                    <SidebarMenuItem>
                      <CollapsibleTrigger
                        className="hover:bg-[#1b1b1b] dark:active:bg-[#1b1b1b] dark:data-[state=open]:hover:bg-[#1b1b1b]"
                        asChild
                      >
                        <SidebarMenuButton>
                          {item.name}
                          <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent className="">
                        {item.type === "folder" && (
                          <SidebarMenuSub className="gap-0.5 border-[#404040]">
                            {item.children.map((item) => {
                              return (
                                item.type === "page" && (
                                  <SidebarMenuItem key={item.$id}>
                                    <SidebarMenuButton
                                      asChild
                                      isActive={item.name === pathname}
                                      className="3xl:fixed:w-full 3xl:fixed:max-w-48 hover:border-input relative h-[30px] w-fit overflow-visible border border-transparent text-[0.8rem] font-medium after:absolute after:inset-x-0 after:-inset-y-1 after:z-0 after:rounded-md data-[active=true]:border-[#404040] data-[active=true]:bg-white dark:hover:!bg-black dark:data-[active=true]:bg-black"
                                    >
                                      <Link href={item.name}>{item.name}</Link>
                                      {item.children?.map((item) => {
                                        return (
                                          item.type === "page" && (
                                            <SidebarMenuItem key={item.$id}>
                                              <SidebarMenuButton
                                                asChild
                                                isActive={
                                                  item.name === pathname
                                                }
                                                className="3xl:fixed:w-full 3xl:fixed:max-w-48 hover:border-input relative h-[30px] w-fit overflow-visible border border-transparent text-[0.8rem] font-medium after:absolute after:inset-x-0 after:-inset-y-1 after:z-0 after:rounded-md data-[active=true]:border-[#404040] data-[active=true]:bg-white dark:hover:!bg-black dark:data-[active=true]:bg-black"
                                              >
                                                <Link href={item.name}>
                                                  {item.name}
                                                </Link>
                                              </SidebarMenuButton>
                                            </SidebarMenuItem>
                                          )
                                        );
                                      })}
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
            
          )}
        </SidebarContent>
      </ScrollArea>
    </Sidebar>
  );
}
