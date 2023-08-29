import { remark } from 'remark'
import { Game } from './types'
import remarkHtml from 'remark-html'
import remarkGfm from 'remark-gfm'

/**
 * 根据文件名查询下载链接
 * @param assets 资源列表
 * @param arg 查询参数
 * @returns 
 */
export const findAssetsUrl = (assets: any[], arg: string) => {
  const reg = new RegExp(arg.toLowerCase(), 'i')
  try {
    return assets.find((asset: { name: string }) => reg.test(asset.name.toLowerCase())).browser_download_url
  } catch (error) {
    return null
  }
}

const mdToHtml = async (md: string) => {
  const processedContent = await remark()
    .use(remarkHtml)
    .use(remarkGfm)
    .process(md)

  return processedContent.value.toString()
}

export const parseReleaseNotes = async (body: string) => {
  try {
    const releaseNotes = body
      .split(/\r\n## /)
      .map(item => item.split(/\r\n### .*\r\n/)[1])

    const releaseNotesHtml = await Promise.all(releaseNotes.map(async item => await mdToHtml(item)))

    return releaseNotesHtml
  } catch (error) {
    return []
  }

}

/**
 * 游戏排序
 * @param games 游戏
 * @param sortBy 根据日期或标题排序
 * @returns 
 */
export const gamesSort = (games: Game[], sortBy: 'date' | 'title') => {
  if (sortBy === 'date')
    return [...games].sort((a, b) => {
      const dateA = Number(a.releaseDate.replaceAll('-', ''))
      const dateB = Number(b.releaseDate.replaceAll('-', ''))
      if (dateA < dateB)
        return 1
      if (dateA > dateB)
        return -1
      return 0
    })
  if (sortBy === 'title')
    return [...games].sort((a, b) => {
      return a.title.localeCompare(b.title, 'en')
    })
  return games
}