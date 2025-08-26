import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { source } from "@/lib/source";
/**
 * Shared layout configurations
 *
 * you can configure layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    // can be JSX too!
    enabled: true,
    url: "https://github.com/developerplus2025/decent-over-nextjs-15/",
    title: "Decent Version 10.9.5",
  },
};
export const docsOptions = {
  ...baseOptions,
  tree: source.pageTree,
};