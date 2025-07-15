// lib/getHeadingsFromMdx.ts
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkMdx from "remark-mdx";
import { visit } from "unist-util-visit";

export function getHeadingsFromMdx(mdxContent: string) {
  const tree = unified().use(remarkParse).use(remarkMdx).parse(mdxContent);

  const headings: { id: string; text: string; level: number }[] = [];

  visit(tree, "heading", (node: any) => {
    const text = node.children
      .filter((n: any) => n.type === "text")
      .map((n: any) => n.value)
      .join("");
    const id = text.toLowerCase().replace(/[^\w]+/g, "-");
    headings.push({ id, text, level: node.depth });
  });

  return headings;
}
