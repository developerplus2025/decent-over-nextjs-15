"use client";
import { usePathname } from "next/navigation";
import { useBreadcrumb } from "fumadocs-core/breadcrumb";
import type { PageTree } from "fumadocs-core/server";
import { Fragment, useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export function DocsBreadcrumb({ tree }: { tree: PageTree.Root }) {
  const pathname = usePathname();
  const items = useBreadcrumb(pathname, tree);
 const path = pathname.split("/");
 const [part, setPart] = useState(1);
 useEffect(() => {
   if (path.length === 2) {
     setPart(2);
   } else if (path.length === 3) {
     setPart(3);
   }
 }, [pathname]);
 console.log(part);
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
                part == 2 ? "!hidden" : ""
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
            <span className={`${part == 2 ? "!hidden" : ""} truncate`}>
              {item.name}
            </span>
          )}
        </Fragment>
      ))}
    </div>
  );
}
