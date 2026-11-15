import Redirect from '@/components/Redirect/Redirect'
import { siteConfig } from '@/site.config'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: 'WebGAL Preview Download',
  description: 'WebGAL 4.7 Preview Download',
  openGraph: {
    title: 'WebGAL Preview Download',
    description: 'WebGAL 4.7 Preview Download',
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
    <html>
      <body>
        <Redirect title='WebGAL Preview Download' url='/download/prerelease/' />
      </body>
    </html>
  )
}

export default PrereleaseDownloadRedirect
