// app/[locale]/docs/[slug]/page.tsx

export default async function Page({
  params,
}: {
  params: { slug: string }
}) {
  const { slug } = params
  const { default: Post } = await import(`@/content/${slug}.mdx`)

  return <Post />
}

export function generateStaticParams() {
  return [{ slug: 'welcome' }, { slug: 'about' }]
}

export const dynamicParams = false
