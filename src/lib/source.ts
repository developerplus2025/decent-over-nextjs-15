// .source folder will be generated when you run `next dev`
import { docs } from "@/.source";
import { loader } from "fumadocs-core/source";
import { blogPosts } from "@/.source";
import { createMDXSource } from "fumadocs-mdx";
import { useLocale } from "next-intl";

export const source = loader({
  baseUrl: "/en/docs",
  source: docs.toFumadocsSource(),
  // To add blog posts, use a different loader or merge sources appropriately.
});
export const blog = loader({
  baseUrl: "/en/blog",
  source: createMDXSource(blogPosts),
});
