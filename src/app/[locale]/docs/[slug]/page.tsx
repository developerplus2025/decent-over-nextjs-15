// app/[locale]/docs/[slug]/page.tsx
export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const { default: Post } = await import(`../../content/docs/${slug}.mdx`)
 
  return <Post />
}
export function generateStaticParams() {
  return [{ slug: 'welcome' }, { slug: 'about' },{slug:'index'}]
}

export const dynamicParams = true
