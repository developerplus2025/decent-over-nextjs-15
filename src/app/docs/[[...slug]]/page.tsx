import Link from "next/link";
import { notFound } from "next/navigation";
import { mdxComponents } from "@/../mdx-components";
import {
  IconArrowLeft,
  IconArrowRight,
  IconArrowUpRight,
} from "@tabler/icons-react";
import { findNeighbour } from "fumadocs-core/server";
import { DocsLayout } from "fumadocs-ui/layouts/docs";
import { source } from "@/lib/source";
import { absoluteUrl } from "@/lib/utils";
import { DocsCopyPage } from "@/components/docs-copy-page";
import { DocsTableOfContents } from "@/components/docs-toc";
import { OpenInV0Cta } from "@/components/open-in-v0-cta";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from "fumadocs-ui/page";
export const revalidate = false;
export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);

  if (!page) {
    notFound();
  }

  const doc = page.data;

  if (!doc.title || !doc.description) {
    notFound();
  }

  return {
    title: doc.title,
    description: doc.description,
  };
}

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) {
    notFound();
  }

  const doc = page.data;
  // @ts-expect-error - revisit fumadocs types.
  const MDX = doc.body;
  const neighbours = await findNeighbour(source.pageTree, page.url);

  // @ts-expect-error - revisit fumadocs types.
  const links = doc.links;

  return (
    <DocsPage
      // @ts-expect-error - revisit fumadocs types.
      toc={page.data.toc}
      // @ts-expect-error - revisit fumadocs types.
      full={page.data.full}
      tableOfContent={{
        style: "clerk",
        header: <div className="h-4 w-10"></div>,
      }}
    >
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <div className="flex items-start justify-between">
            <h1 className="scroll-m-20 text-4xl font-semibold tracking-tight sm:text-3xl xl:text-4xl">
              {doc.title}
            </h1>
            <div className="docs-nav bg-background/80 border-border/50 fixed inset-x-0 bottom-0 isolate z-50 flex items-center gap-2 border-t px-6 py-4 backdrop-blur-sm sm:static sm:z-0 sm:border-t-0 sm:bg-transparent sm:px-0 sm:pt-1.5 sm:backdrop-blur-none">
              <DocsCopyPage
                // @ts-expect-error - revisit fumadocs types.
                page={doc.content}
                url={absoluteUrl(page.url)}
              />
              {neighbours.previous && (
                <Button
                  variant="secondary"
                  size="icon"
                  className="extend-touch-target ml-auto size-8 shadow-none md:size-7"
                  asChild
                >
                  <Link href={neighbours.previous.url}>
                    <IconArrowLeft />
                    <span className="sr-only">Previous</span>
                  </Link>
                </Button>
              )}
              {neighbours.next && (
                <Button
                  variant="secondary"
                  size="icon"
                  className="extend-touch-target size-8 shadow-none md:size-7"
                  asChild
                >
                  <Link href={neighbours.next.url}>
                    <span className="sr-only">Next</span>
                    <IconArrowRight />
                  </Link>
                </Button>
              )}
            </div>
          </div>
          {doc.description && (
            <p className="text-muted-foreground text-[1.05rem] text-balance sm:text-base">
              {doc.description}
            </p>
          )}
        </div>
      </div>
      <DocsBody>
        <div
          data-slot="docs"
          className="flex items-stretch text-[1.05rem] sm:text-[15px] xl:w-full"
        >
          <div className="flex min-w-0 flex-1 flex-col">
            <div className="h-(--top-spacing) shrink-0" />
            <div className="mx-auto flex w-full max-w-2xl min-w-0 flex-1 flex-col gap-8 px-4 py-6 text-neutral-800 md:px-0 lg:py-8 dark:text-neutral-300">
              <div className="w-full flex-1 *:data-[slot=alert]:first:mt-0">
                <MDX components={mdxComponents} />
              </div>
            </div>
          </div>
        </div>
      </DocsBody>
    </DocsPage>
  );
}
