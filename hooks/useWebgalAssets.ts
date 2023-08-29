import { WebgalAssets } from '@/types'
import { parseReleaseNotes } from '@/utils'
import { useEffect, useState } from 'react'

const useWebgalAssets = (webgalApiUrl: string) => {

  const [webgalAssets, setWebgalAssets] = useState<WebgalAssets>()

  useEffect(() => {
    try {
      fetch(webgalApiUrl)
        .then(response => response.json())
        .then(async data => setWebgalAssets(
          {
            version: data.tag_name,
            releaseTime: data.published_at,
            releaseNote: await parseReleaseNotes(data.body),
          }
        ))
    } catch (error) {
      console.error(error)
    }
  }, [webgalApiUrl])

  return webgalAssets
}

export default useWebgalAssets