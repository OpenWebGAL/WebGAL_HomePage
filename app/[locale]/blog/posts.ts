import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import remarkHtml from 'remark-html'
import remarkGfm from 'remark-gfm'
import { PostData } from '@/types'

const postsDirectory = path.join(process.cwd(), '/blog/posts')

export const getPostList = async () => {
  const fileNames = fs.readdirSync(postsDirectory, { withFileTypes: true })

  const postList = await Promise.all(
    fileNames
      .filter((file) => file.isDirectory())
      .map(async (file) => {
        const slug = file.name

        const fullPath = path.join(postsDirectory, `${file.name}/index.md`)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const matterResult = matter(fileContents)

        return {
          slug,
          data: matterResult.data as PostData,
        }
      })
  )

  return postList
    .sort((a, b) => (a.data.date < b.data.date) ? 1 : -1)
}

export const getPost = async (slug: string) => {
  const fullPath = path.join(postsDirectory, `${slug}/index.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const matterResult = matter(fileContents)

  const processedContent = await remark()
    .use(remarkHtml)
    .use(remarkGfm)
    .process(matterResult.content)
  const contentHtml = processedContent
    .toString()
    .replaceAll('<img src="image', `<img src="/images/${slug}/image`)

  return {
    slug,
    data: matterResult.data as PostData,
    contentHtml,
  }
}