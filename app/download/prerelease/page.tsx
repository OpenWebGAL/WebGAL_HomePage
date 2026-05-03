import Redirect from '@/components/Redirect/Redirect'
import { siteConfig } from '@/site.config'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: 'WebGAL Pre-release Download',
  description: 'WebGAL Pre-release Download',
  openGraph: {
    title: 'WebGAL Pre-release Download',
    description: 'WebGAL Pre-release Download',
    url: '/download/prerelease/',
    images: [
      {
        url: '/images/opengraph-image.png',
        width: 512,
        height: 512,
      },
    ],
  },
}

const PrereleaseDownloadRedirect = () => {
  return (
    <main>
      <div>
        <Redirect title='WebGAL Pre-release Download' url='/download/prerelease/' />
      </div>
    </main>
  )
}

export default PrereleaseDownloadRedirect
