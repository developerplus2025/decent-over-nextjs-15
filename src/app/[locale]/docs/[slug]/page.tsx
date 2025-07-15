import fs from 'fs'
import path from 'path'
import { notFound } from 'next/navigation'
import { compile } from '@mdx-js/mdx'
import * as runtime from 'react/jsx-runtime'
import { TOC } from '@/components/toc'
import { getHeadingsFromMdx } from '@/lib/getHeadingsFromMdx'

type Props = {
  params: {
    locale: string
    slug: string
  }
}

// ✅ Trang hiển thị nội dung MDX
export default async function Page({ params }: Props) {
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

// ✅ Tạo các static path từ slug
export async function generateStaticParams() {
  const dir = path.join(process.cwd(), 'content/docs')
  const files = fs.readdirSync(dir)

  return files
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => ({
      locale: 'vi', // hoặc 'en' nếu bạn dùng đa ngôn ngữ
      slug: file.replace(/\.mdx$/, ''),
    }))
}
