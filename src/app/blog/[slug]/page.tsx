import { notFound } from "next/navigation";
import Link from "next/link";
import { InlineTOC } from "fumadocs-ui/components/inline-toc";
import defaultMdxComponents from "fumadocs-ui/mdx";
import { blog } from "@/lib/source";
import { mdxComponents } from "@/../mdx-components";
import { absoluteUrl } from "@/lib/utils";
export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = blog.getPage(params.slug);

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
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
 
   // handle the "api-reference" case here if needed
   const page = blog.getPage([params.slug]);
   if (!page) {
     notFound();
   }
 
   const doc = page.data;
   
   const MDX = doc.body;
  
  return (
    <>
      <div className="container flex w-[1000px] flex-col gap-2 rounded-xl border py-12 md:px-8">
        <div className="flex gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="#ffffff"
            viewBox="0 0 256 256"
          >
            <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
          </svg>
          <Link href="/blog" className="text-sm">
            Back to BLog
          </Link>
        </div>
        <p className="text-sm">Monday, August 18th 2025</p>
        <h1 className="mb-2 text-center text-3xl font-bold">
          {page.data.title}
        </h1>
        <p className="text-fd-muted-foreground mb-4 text-center text-balance">
          {page.data.description}
        </p>
      </div>
      <article className="container flex w-[1000px] flex-col px-4 py-8">
        <div className="prose min-w-0">
          <MDX
            components={{
              ...mdxComponents,
            }}
          />
        </div>
        {/* <div className="flex flex-col gap-4 text-sm">
          <div>
            <p className="text-fd-muted-foreground mb-1">Written by</p>
            <p className="font-medium">{page.data.author}</p>
          </div>
          <div>
            <p className="text-fd-muted-foreground mb-1 text-sm">At</p>
            <p className="font-medium">
              {new Date(page.data.date).toDateString()}
            </p>
          </div>
        </div> */}
      </article>
    </>
  );
}

export function generateStaticParams(): { slug: string }[] {
  return blog.getPages().map((page) => ({
    slug: page.slugs[0],
  }));
}
