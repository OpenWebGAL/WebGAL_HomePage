import { WebgalAssets } from '@/types'
import { parseReleaseNotes } from '@/utils'
import { useEffect, useState } from 'react'

const useWebgalAssets = (webgalApiUrl: string) => {

  const [webgalAssets, setWebgalAssets] = useState<WebgalAssets>()

  useEffect(() => {
    try {
      fetch(webgalApiUrl)
        .then(response => response.json())
        .then(async data => {
          const release = data

          setWebgalAssets(
            {
              version: release.tag_name,
              releaseTime: release.published_at,
              releaseNote: await parseReleaseNotes(release.body),
              releaseUrl: release.html_url,
            }
          )
        })
    } catch (error) {
      console.error(error)
    }
  }, [webgalApiUrl])

  return webgalAssets
}

export default useWebgalAssets
