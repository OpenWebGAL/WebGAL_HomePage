import { findAssetsUrl, parseReleaseNote } from '@/utils'
import { useState, useEffect } from 'react'

type Assets = {
  version: string,
  releaseTime: string,
  releaseNote: string[][],
  downloadUrl: {
    windows?: string,
    windowsSetup?: string,
    macos?: string,
    linux?: string,
  },
}

const useWebgalTerreAssets = (webgalTerreApiUrl: string) => {

  const [webgalTerreAssets, setWebgalTerreAssets] = useState<Assets>()

  useEffect(() => {
    try {
      fetch(webgalTerreApiUrl)
        .then(response => response.json())
        .then(data => setWebgalTerreAssets(
          {
            version: data.tag_name,
            releaseTime: data.published_at,
            releaseNote: parseReleaseNote(data.body),
            downloadUrl: {
              windows: findAssetsUrl(data.assets, 'Windows.zip'),
              windowsSetup: findAssetsUrl(data.assets, 'Windows_Setup.exe'),
              macos: findAssetsUrl(data.assets, 'macOS.zip'),
              linux: findAssetsUrl(data.assets, 'Linux.zip'),
            }
          }
        ))
    } catch (error) {
      console.error(error)
    }
  }, [webgalTerreApiUrl])

  return webgalTerreAssets
}

export default useWebgalTerreAssets