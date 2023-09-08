import Redirect from '@/components/Redirect/Redirect'
import { Metadata } from 'next'

export const metadata: Metadata = {
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