import { WebgalTerreAssets } from '@/types'
import { findAssetsUrl, parseReleaseNotes } from '@/utils'
import { useState, useEffect } from 'react'

const useWebgalTerreAssets = (webgalTerreApiUrl: string, prerelease = false) => {

  const [webgalTerreAssets, setWebgalTerreAssets] = useState<WebgalTerreAssets>()

  useEffect(() => {
    try {
      fetch(webgalTerreApiUrl)
        .then(response => response.json())
        .then(async data => {
          const release = prerelease && Array.isArray(data)
            ? data.find(item => item.prerelease)
            : data

          if (!release) return

          setWebgalTerreAssets(
            {
              version: release.tag_name,
              releaseTime: release.published_at,
              releaseNote: await parseReleaseNotes(release.body),
              releaseUrl: release.html_url,
              downloadUrl: [
                { platform: 'windows', url: findAssetsUrl(release.assets, 'Windows.*.zip') },
                { platform: 'windowsSetup', url: findAssetsUrl(release.assets, 'Windows_Setup.*.exe') },
                { platform: 'windowsArm64', url: findAssetsUrl(release.assets, 'Windows_Arm64.*.zip') },
                { platform: 'windowsArm64Setup', url: findAssetsUrl(release.assets, 'Windows_Arm64_Setup.*.exe') },
                { platform: 'macos', url: findAssetsUrl(release.assets, 'mac.*.zip') },
                { platform: 'macosIntel', url: findAssetsUrl(release.assets, 'Mac_Intel.*.zip') },
                { platform: 'linux', url: findAssetsUrl(release.assets, 'Linux.*.zip') },
                { platform: 'linuxArm64', url: findAssetsUrl(release.assets, 'Linux_Arm64.*.zip') },
                { platform: 'android', url: findAssetsUrl(release.assets, 'Android.*.apk') }
              ]
            }
          )
        })
    } catch (error) {
      console.error(error)
    }
  }, [webgalTerreApiUrl])

  return webgalTerreAssets
}

export default useWebgalTerreAssets
