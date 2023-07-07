'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

type Assets = {
  version: string,
  downloadUrl: {
    windows?: string,
    linux?: string,
    macos?: string,
  },
}

const Download = () => {
  const webgalUrl = 'https://github.com/MakinoharaShoko/WebGAL/releases'
  const webgalTerreUrl = 'https://github.com/MakinoharaShoko/WebGAL_Terre/releases'

  const webgalApiUrl = 'https://api.github.com/repos/MakinoharaShoko/WebGAL/releases/latest'
  const webgalTerreApiUrl = 'https://api.github.com/repos/MakinoharaShoko/WebGAL_Terre/releases/latest'
  const [webgalAssets, setWebgalAssets] = useState<Assets>()
  const [webgalTerreAssets, setWebgalTerreAssets] = useState<Assets>()

  useEffect(() => {
    try {
      fetch(webgalApiUrl)
        .then(response => response.json())
        .then(data => setWebgalAssets(
          {
            version: data.tag_name,
            downloadUrl: {
              windows: data.assets[0].browser_download_url
            }
          }
        ))
    } catch (error) {
      console.error(error)
    }
  }, [])

  useEffect(() => {
    try {
      fetch(webgalTerreApiUrl)
        .then(response => response.json())
        .then(data => setWebgalTerreAssets(
          {
            version: data.tag_name,
            downloadUrl: {
              windows: data.assets[0].browser_download_url
            }
          }
        ))
    } catch (error) {
      console.error(error)
    }
  }, [])

  return (
    <div className={'pt-16'}>
      <div className={'max-w-screen-xl mx-auto'}>

        <h1 className={'text-2xl pt-8 pb-8 pl-4 pr-4'}>下载 WebGAL</h1>
        <div className={'p-4 flex flex-col gap-2'}>
          <h2 className={'text-xl'}>WebGAL 编辑器</h2>
          <p className={'text-gray-700'}>版本号: {webgalTerreAssets?.version ? webgalTerreAssets?.version : '获取中'}</p>
          <div className={'flex flex-row flex-wrap gap-4'}>
            <Link href={webgalTerreUrl} >前往 GitHub 下载</Link>
            {
              (webgalTerreAssets?.downloadUrl.windows) &&
              <Link href={webgalTerreAssets?.downloadUrl.windows} >下载 Windows 版本</Link>
            }
          </div>
        </div>

        <div className={'p-4 flex flex-col gap-2'}>
          <h2 className={'text-xl'}>WebGAL</h2>
          <p className={'text-gray-700'}>版本号: {webgalAssets?.version ? webgalAssets?.version : '获取中'}</p>
          <div className={'flex flex-row flex-wrap gap-4'}>
            <Link href={webgalUrl} >前往 GitHub 下载</Link>
            {
              (webgalAssets?.downloadUrl.windows) &&
              <Link href={webgalAssets?.downloadUrl.windows} >下载 Windows 版本</Link>
            }
          </div>
        </div>

        <div className={'p-4 flex flex-col gap-2'}>
          <h3 className={'text-lg'}>其他下载地址</h3>
          <p className={'text-gray-700'}>如果上面的下载地址下载速度比较慢，请尝试使用以下下载地址</p>
          <div className={'flex flex-row flex-wrap gap-4'}>
            <Link href={'https://www.123pan.com/s/YHszVv-jqzJ.html'} >123网盘</Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Download