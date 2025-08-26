import type { PageTree } from "fumadocs-core/server";


export default function PageTree() {
  const tree: PageTree.Root = {
    name: "root",
    children: [],
  };
  console.log(tree);
  return "";
}

