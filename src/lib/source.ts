// lib/source.ts
import { loader } from "fumadocs-core/source";
import { createMDXSource } from "fumadocs-mdx";
import { docs, blogPosts } from "@/.source";

export function getSource(locale: string) {
  return loader({
    baseUrl: `/${locale}/docs`,
    source: docs.toFumadocsSource(),
  });
}

export function getBlog(locale: string) {
  return loader({
    baseUrl: `/${locale}/blog`,
    source: createMDXSource(blogPosts),
  });
}
