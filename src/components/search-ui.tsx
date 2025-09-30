"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

export function SearchUi() {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div
          //   style={{
          //     backgroundColor:
          //       "color-mix(in oklab,var(--color-fd-secondary)50%,transparent)",
          //   }}
          style={{
            backgroundColor: "black",
          }}
          className="flex h-[32px] w-fit cursor-pointer items-center justify-center gap-2 rounded-[8px] border border-(--input) p-3 select-none"
        >
          <svg
            className="size-4.5 shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#ffffff"
            viewBox="0 0 256 256"
          >
            <title>Search Icon</title>
            <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
          </svg>
          <p className="text-xs text-[#a1a1a1]"> Search for documents</p>
          <div className="flex gap-1">
            <kbd className="text-muted-foreground pointer-events-none inline-flex h-5 items-center gap-1 rounded border border-(--input) px-1.5 font-sans text-[10px] font-medium opacity-100 select-none">
              <span className="text-xs">Ctrl</span>
            </kbd>
            <kbd className="text-muted-foreground pointer-events-none inline-flex h-5 items-center gap-1 rounded border border-(--input) px-1.5 font-sans text-[10px] font-medium opacity-100 select-none">
              <span className="text-xs">K</span>
            </kbd>
          </div>
        </div>
      </PopoverTrigger>
      <PopoverContent className="border-input w-[400px] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." className="h-9" />
          <CommandList>
            <CommandEmpty>No framework found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value}
                  value={framework.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  {framework.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      value === framework.value ? "opacity-100" : "opacity-0",
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
