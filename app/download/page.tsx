import Redirect from '@/components/Redirect/Redirect'
import { siteConfig } from '@/site.config'
import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: 'WebGAL Download',
  description: 'WebGAL Download',
  openGraph: {
    title: 'WebGAL Download',
    description: 'WebGAL Download',
    url: '/download/',
    images: [
      {
        url: '/images/opengraph-image.png',
        width: 512,
        height: 512,
      },
    ],
  },
}

const DownloadRedirect = () => {
  return (
    <html>
      <body>
        <Redirect title='WebGAL Download' url='/download/' />
      </body>
    </html>
  )
}

export default DownloadRedirect