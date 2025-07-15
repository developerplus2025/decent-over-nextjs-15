import fs from 'fs'
import path from 'path'
import { notFound } from 'next/navigation'
import { compile } from '@mdx-js/mdx'
import * as runtime from 'react/jsx-runtime'
import { TOC } from '@/components/toc'
import { getHeadingsFromMdx } from '@/lib/getHeadingsFromMdx'

export async function generateStaticParams() {
  const dir = path.join(process.cwd(), 'content/docs')
  const files = fs.readdirSync(dir)

  return files
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => ({
      locale: 'vi', // hoặc 'en', tùy theo bạn có i18n không
      slug: f.replace(/\.mdx$/, ''),
    }))
}

export default async function Page({
  params,
}: {
  params: { locale: string; slug: string }
}) {
  const { slug } = params

  const filePath = path.join(process.cwd(), 'content/docs', `${slug}.mdx`)
  if (!fs.existsSync(filePath)) {
    notFound()
  }

  const raw = fs.readFileSync(filePath, 'utf8')
  const headings = getHeadingsFromMdx(raw)

  const compiled = await compile(raw, {
    outputFormat: 'function-body',
  })

  const MDXComponent = new Function(String(compiled))(runtime).default

  return (
    <div className="flex">
      <TOC headings={headings} />
      <article className="prose">
        <MDXComponent />
      </article>
    </div>
  )
}
