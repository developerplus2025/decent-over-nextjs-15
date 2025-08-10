"use client";
import { usePathname } from "next/navigation";
import { useBreadcrumb } from "fumadocs-core/breadcrumb";
import type { PageTree } from "fumadocs-core/server";
import { Fragment } from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export function DocsBreadcrumb({ tree }: { tree: PageTree.Root }) {
  const pathname = usePathname();
  const items = useBreadcrumb(pathname, tree);

  if (items.length === 0) return null;

  return (
    <div className="text-fd-muted-foreground -mb-3 flex flex-row items-center gap-1 text-sm font-medium">
      <span className="truncate">Docs</span>{" "}
      <ChevronRight className="size-4 shrink-0 rtl:rotate-180" />
      {items.map((item, i) => (
        <Fragment key={i}>
          {i !== 0 && (
            <ChevronRight
              className={`${
                typeof item.name === "string" &&
                [
                  "Getting Started",
                  "Playback Features",
                  "Audio Effects",
                  "Library Management",
                  "Settings Customization",
                  "Advanced Usage",
                  "Troubleshooting",
                ].includes(item.name)
                  ? "!hidden"
                  : ""
              } size-4 shrink-0 rtl:rotate-180`}
            />
          )}
          {item.url ? (
            <Link
              href={item.url}
              className="hover:text-fd-accent-foreground truncate"
            >
              {item.name}
            </Link>
          ) : (
            <span
              className={`truncate ${
                typeof item.name === "string" &&
                [
                  "Getting Started",
                  "Playback Features",
                  "Audio Effects",
                  "Library Management",
                  "Settings Customization",
                  "Advanced Usage",
                  "Troubleshooting",
                ].includes(item.name)
                  ? "!hidden"
                  : ""
              }`}
            >
              {item.name}
            </span>
          )}
        </Fragment>
      ))}
    </div>
  );
}
