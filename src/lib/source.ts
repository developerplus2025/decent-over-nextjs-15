// .source folder will be generated when you run `next dev`
import { docs } from "@/.source";
import { loader } from "fumadocs-core/source";
import { blogPosts } from "@/.source";
import { createMDXSource } from "fumadocs-mdx";
export const source = loader({
  baseUrl: "/docs",
  source: docs.toFumadocsSource(),
  // To add blog posts, use a different loader or merge sources appropriately.
});
export const blog = loader({
  baseUrl: "/blog",
  source: createMDXSource(blogPosts),
});