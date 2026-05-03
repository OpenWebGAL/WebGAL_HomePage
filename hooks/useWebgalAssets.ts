import { WebgalAssets } from '@/types'
import { parseReleaseNotes } from '@/utils'
import { useEffect, useState } from 'react'

const useWebgalAssets = (webgalApiUrl: string, prerelease = false) => {

  const [webgalAssets, setWebgalAssets] = useState<WebgalAssets>()

  useEffect(() => {
    try {
      fetch(webgalApiUrl)
        .then(response => response.json())
        .then(async data => {
          const release = prerelease && Array.isArray(data)
            ? data.find(item => item.prerelease)
            : data

          if (!release) return

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
