import Redirect from '@/components/Redirect/Redirect'
import { siteConfig } from '@/site.config'
import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.baseUrl),
  title: 'WebGAL',
  description: 'A brand new web Visual Novel engine | 全新的网页端视觉小说引擎 | 未だかつてない Web ベースビジュアルノベルエンジン',
  openGraph: {
    title: 'WebGAL',
    description: 'A brand new web Visual Novel engine | 全新的网页端视觉小说引擎 | 未だかつてない Web ベースビジュアルノベルエンジン',
    url: '/',
    images: [
      {
        url: '/images/opengraph-image.png',
        width: 512,
        height: 512,
      },
    ],
  },
}

export default function RootPage() {
  // redirect(`/${i18n.defaultLocale}`)
  return (
    <html>
      <body>
        <Redirect title='WebGAL HomePage' url='/' />
      </body>
    </html>
  )
}