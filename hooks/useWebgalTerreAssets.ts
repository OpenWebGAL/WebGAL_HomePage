import { WebgalTerreAssets } from '@/types'
import { findAssetsUrl, parseReleaseNotes } from '@/utils'
import { useState, useEffect } from 'react'

const useWebgalTerreAssets = (webgalTerreApiUrl: string) => {

  const [webgalTerreAssets, setWebgalTerreAssets] = useState<WebgalTerreAssets>()

  useEffect(() => {
    try {
      fetch(webgalTerreApiUrl)
        .then(response => response.json())
        .then(async data => setWebgalTerreAssets(
          {
            version: data.tag_name,
            releaseTime: data.published_at,
            releaseNote: await parseReleaseNotes(data.body),
            downloadUrl: [
              { platform: 'windows', url: findAssetsUrl(data.assets, 'Windows.*.zip') },
              { platform: 'windowsSetup', url: findAssetsUrl(data.assets, 'Windows_Setup.*.exe') },
              { platform: 'windowsArm64', url: findAssetsUrl(data.assets, 'Windows_Arm64.*.zip') },
              { platform: 'windowsArm64Setup', url: findAssetsUrl(data.assets, 'Windows_Arm64_Setup.*.exe') },
              { platform: 'macos', url: findAssetsUrl(data.assets, 'mac.*.zip') },
              { platform: 'linux', url: findAssetsUrl(data.assets, 'Linux.*.zip') },
              { platform: 'linuxArm64', url: findAssetsUrl(data.assets, 'Linux_Arm64.*.zip') },
              { platform: 'android', url: findAssetsUrl(data.assets, 'Android.*.apk') }
            ]
          }
        ))
    } catch (error) {
      console.error(error)
    }
  }, [webgalTerreApiUrl])

  return webgalTerreAssets
}

export default useWebgalTerreAssets