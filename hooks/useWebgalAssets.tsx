import { WebgalAssets } from '@/types'
import { parseReleaseNote } from '@/utils'
import { useEffect, useState } from 'react'

const useWebgalAssets = (webgalApiUrl: string) => {

  const [webgalAssets, setWebgalAssets] = useState<WebgalAssets>()

  useEffect(() => {
    try {
      fetch(webgalApiUrl)
        .then(response => response.json())
        .then(data => setWebgalAssets(
          {
            version: data.tag_name,
            releaseTime: data.published_at,
            releaseNote: parseReleaseNote(data.body),
            downloadUrl: data.assets[0].browser_download_url
          }
        ))
    } catch (error) {
      console.error(error)
    }
  }, [webgalApiUrl])

  return webgalAssets
}

export default useWebgalAssets