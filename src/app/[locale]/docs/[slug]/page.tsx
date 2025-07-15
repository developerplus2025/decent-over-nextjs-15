import fs from 'fs'
import path from 'path'
import { GetStaticPaths, GetStaticProps } from 'next'
import { TOC } from '@/components/toc'
import { getHeadingsFromMdx } from '@/lib/getHeadingsFromMdx'
import { compile } from '@mdx-js/mdx'
import * as runtime from 'react/jsx-runtime'
import { renderToStaticMarkup } from 'react-dom/server'

interface Props {
  content: string
  headings: { id: string; text: string; level: number }[]
}

export default function DocPage({ content, headings }: Props) {
  return (
    <div className="flex">
      <TOC headings={headings} />
      <article
        className="prose"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}

// Tạo các slug từ file .mdx
export const getStaticPaths: GetStaticPaths = async () => {
  const docsDir = path.join(process.cwd(), 'content/docs')
  const filenames = fs.readdirSync(docsDir)

  const paths = filenames
    .filter((name) => name.endsWith('.mdx'))
    .map((name) => ({
      params: { slug: name.replace(/\.mdx$/, '') },
    }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string
  const filePath = path.join(process.cwd(), 'content/docs', `${slug}.mdx`)
  const raw = fs.readFileSync(filePath, 'utf8')

  const headings = getHeadingsFromMdx(raw)

  // Compile MDX -> HTML
  const compiled = await compile(raw, {
    outputFormat: 'function-body',
  })

  const { default: Content } = await import('react').then(() =>
    // Dùng react/jsx-runtime cho MDX output
    new Function(String(compiled))(runtime)
  )

  // Render thành chuỗi HTML (chỉ tạm thời dùng để hiển thị)
  const html = renderToStaticMarkup(<Content />)

  return {
    props: {
      content: html,
      headings,
    },
  }
}
