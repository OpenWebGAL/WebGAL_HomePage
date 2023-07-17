import { Game } from "./types"

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

/**
 * 解析发布日志
 * @param body 
 * @returns 
 */
export const parseReleaseNote = (body: string) => {
  try {
    return body
      .split(/\r\n\r\n## /)
      .filter(item => item !== '')
      .map(item =>
        item
          .split(/\r\n### .*\r\n/)[1]
          .split('\r\n')
          .filter(item => item !== '')
      )
  } catch (error) {
    return []
  }
}

/**
 * 游戏排序
 * @param gamesData 游戏数据
 * @param sortBy 根据日期或标题排序
 * @returns 
 */
export const gamesDataSort = (gamesData: Game[], sortBy: 'date' | 'title') => {
  if (sortBy === 'date')
    return [...gamesData].sort((a, b) => {
      const dateA = Number(a.releaseDate.replaceAll('-', ''))
      const dateB = Number(b.releaseDate.replaceAll('-', ''))
      if (dateA < dateB)
        return 1
      if (dateA > dateB)
        return -1
      return 0
    })
  if (sortBy === 'title')
    return [...gamesData].sort((a, b) => {
      return a.title.localeCompare(b.title, 'en')
    })
  return gamesData
}