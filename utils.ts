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