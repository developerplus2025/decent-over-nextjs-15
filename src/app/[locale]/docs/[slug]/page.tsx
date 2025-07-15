import fs from 'fs'
import path from 'path'
import { compile } from '@mdx-js/mdx'
import { getHeadingsFromMdx } from '@/lib/getHeadingsFromMdx'
import { TOC } from '@/components/toc'
import * as runtime from 'react/jsx-runtime'
import { notFound } from 'next/navigation'

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

  // ✅ Compile to component (NOT HTML string)
  const compiled = await compile(raw, {
  outputFormat: 'function-body', // ✅ đủ rồi
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
