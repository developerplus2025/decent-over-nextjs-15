"use client";

import { loader } from "fumadocs-core/source";
import { createMDXSource } from "fumadocs-mdx";
import { useLocale } from "next-intl";
import { docs, blogPosts } from "@/.source";

export const useSources = () => {
  const locale = useLocale();

  const source = loader({
    baseUrl: `/${locale}/docs`, // ✅ đúng với đường dẫn locale
    source: docs.toFumadocsSource(),
  });

  const blog = loader({
    baseUrl: `/${locale}/blog`,
    source: createMDXSource(blogPosts),
  });

  return { source, blog };
};
