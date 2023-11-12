import Redirect from '@/components/Redirect/Redirect'
import { siteConfig } from '@/site.config'
import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: 'WebGAL GAMES',
  description: 'WebGAL GAMES',
  openGraph: {
    title: 'WebGAL GAMES',
    description: 'WebGAL GAMES',
    url: '/games/',
    images: [
      {
        url: '/images/opengraph-image.png',
        width: 512,
        height: 512,
      },
    ],
  },
}

const GamesRedirect = () => {
  return (
    <html>
      <body>
        <Redirect title='WebGAL GAMES' url='/games/' />
      </body>
    </html>
  )
}

export default GamesRedirect