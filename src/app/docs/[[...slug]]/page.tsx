import Link from "next/link";
import { notFound } from "next/navigation";
import { mdxComponents } from "@/../mdx-components";
import {
  IconArrowLeft,
  IconArrowRight,
  IconArrowUpRight,
} from "@tabler/icons-react";
import { findNeighbour } from "fumadocs-core/server";
import { Suspense } from "react";
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
import { DocsBreadcrumb } from "@/components/docs-breadcrumb";
import VideoPage from "@/app/video/page";
import { InputOTPForm } from "@/components/input-otp-form";
import AudioBar from "../components/audio-bar";
import PathAnimation from "../components/path-animation";
import { Loader } from "@/components/ui/loader";
import PageTree from "../components/page-tree";
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
    openGraph: {
      title: doc.title,
      description: doc.description,
      type: "article",
      url: absoluteUrl(page.url),
      images: [
        {
          url: `/og?title=${encodeURIComponent(
            doc.title,
          )}&description=${encodeURIComponent(doc.description)}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: doc.title,
      description: doc.description,
      images: [
        {
          url: `/og?title=${encodeURIComponent(
            doc.title,
          )}&description=${encodeURIComponent(doc.description)}`,
        },
      ],
      creator: "@neurotune",
    },
  };
}
export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;

  // handle the "api-reference" case here if needed
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
    <Suspense fallback={<Loader variant="classic" />}>
      {" "}
      <DocsPage
        // @ts-expect-error - revisit fumadocs types.
        toc={page.data.toc}
        // @ts-expect-error - revisit fumadocs types.
        full={page.data.full}
        breadcrumb={{ component: <DocsBreadcrumb tree={source.pageTree} /> }}
        tableOfContent={{
          style: "clerk",
          header: <div className="h-4 w-10"></div>,
        }}
      >
        {/* <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <div className="flex items-start justify-between">
            <h1 className="scroll-m-20 text-4xl font-semibold tracking-tight sm:text-3xl xl:text-4xl">
              {doc.title}
            </h1>
            <div className="docs-nav bg-background/80 border-border/50 fixed inset-x-0 bottom-0 isolate z-50 flex items-center gap-2 min-[300px]:flex-col xl:flex-row border-t px-6 py-4 backdrop-blur-sm sm:static sm:z-0 sm:border-t-0 sm:bg-transparent sm:px-0 sm:pt-1.5 sm:backdrop-blur-none">
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
      </div> */}
        <div className="flex pt-4 min-[300px]:flex-col-reverse min-[300px]:items-start min-[300px]:gap-2.5 xl:flex-row xl:items-center xl:justify-between">
          <h1 className="flex items-start justify-between gap-2 text-3xl font-semibold">
            {page.data.title}{" "}
          </h1>
          <DocsCopyPage
            // @ts-expect-error - revisit fumadocs types.
            page={doc.content}
            url={absoluteUrl(page.url)}
          />
        </div>
        <DocsDescription className="border-input mb-0 border-b pb-8">
          {page.data.description}
        </DocsDescription>
        <AudioBar /> <PageTree />
        <DocsBody className="pt-4 sm:px-2 md:px-0 xl:mr-[0rem] xl:px-0">
          <div
            data-slot="docs"
            className="items-stretch text-[1.05rem] sm:text-[15px] xl:w-full"
          >
            <div className="flex min-w-0 flex-col">
              <div className="mx-auto flex w-full min-w-0 flex-1 flex-col gap-8 pt-0 pb-6 text-neutral-800 md:px-0 lg:py-0 dark:text-neutral-300">
                <div className="w-full flex-1 *:data-[slot=alert]:first:mt-0">
                  <MDX
                    components={{
                      mdxComponents,
                      VideoPage,
                      InputOTPForm,
                      PathAnimation,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </DocsBody>
      </DocsPage>
    </Suspense>
  );
}
