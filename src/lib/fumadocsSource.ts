// lib/fumadocsSource.ts
import { docs } from "@/.source";
import { blogPosts } from "@/.source";
import { loader } from "fumadocs-core/source";
import { createMDXSource } from "fumadocs-mdx";

export function getSource(locale: string) {
  return loader({
    baseUrl: `/${locale}/docs`,
    source: docs.toFumadocsSource(),
  });
}

export function getBlog(locale: string) {
  return loader({
    baseUrl: `/${locale}/docs`, // hoặc /${locale}/blog nếu bạn định dùng blog
    source: createMDXSource(blogPosts),
  });
}
