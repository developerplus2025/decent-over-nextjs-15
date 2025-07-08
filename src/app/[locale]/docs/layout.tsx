import { DocsLayout } from "fumadocs-ui/layouts/docs";
import type { ReactNode } from "react";
import { baseOptions } from "@/app/[locale]/layout.config";
import { useLocale } from "next-intl";
import { getSource } from "@/lib/source";

export default function Layout({ children }: { children: ReactNode }) {
  const locale = useLocale();
  const source = getSource(locale);
  return (
    <DocsLayout source={source} tree={source.pageTree} {...baseOptions}>
      {children}
    </DocsLayout>
  );
}