import fs from 'fs'
import path from 'path'
import { notFound } from 'next/navigation'
import { compile } from '@mdx-js/mdx'
import { getHeadingsFromMdx } from '@/lib/getHeadingsFromMdx'
import { TOC } from '@/components/toc'
import * as runtime from 'react/jsx-runtime'
import { renderToStaticMarkup } from 'react-dom/server'

export async function generateStaticParams() {
  const dir = path.join(process.cwd(), 'content/docs')
  const files = fs.readdirSync(dir)
  return files
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => ({ slug: f.replace(/\.mdx$/, '') }))
}

export default async function DocPage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const filePath = path.join(process.cwd(), 'content/docs', `${slug}.mdx`)

  if (!fs.existsSync(filePath)) {
    notFound()
  }

  const raw = fs.readFileSync(filePath, 'utf8')
  const headings = getHeadingsFromMdx(raw)

  const compiled = await compile(raw, { outputFormat: 'function-body' })

  const { default: Content } = new Function(String(compiled))(runtime)
  const html = renderToStaticMarkup(<Content />)

  return (
    <div className="flex">
      <TOC headings={headings} />
      <article
        className="prose"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  )
}
