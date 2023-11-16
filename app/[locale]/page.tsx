import WebGALGames from './components/WebGALGames/WebGALGames'
import TopVisual from './components/TopVisual/TopVisual'
import Features from './components/Features/Features'
import Feat from './components/Feat/Feat'
import Sponsor from './components/Sponsor/Sponsor'
import Contributor from './components/Contributor/Contributor'
import { createTranslator } from 'next-intl'
import { siteConfig } from '@/site.config'

export default function Home() {
  return (
    <main>
      <TopVisual />
      <Feat />
      <WebGALGames />
      <Features />
      <div className={'max-w-screen-xl mx-auto px-20 max-md:px-6 py-8 gap-4 grid grid-cols-2 max-md:grid-cols-1'}>
        <Sponsor />
        <Contributor />
      </div>
    </main >
  )
}

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const messages = (await import(`/locales/${locale}.json`)).default

  const t = createTranslator({ locale, messages })

  return {
    metadataBase: new URL(siteConfig.baseUrl),
    title: 'WebGAL',
    description: t('metadata.home.description'),
    keywords: t('metadata.home.keywords'),
    openGraph: {
      title: 'WebGAL',
      description: t('metadata.home.description'),
      url: `/${locale}`,
      images: [
        {
          url: '/images/opengraph-image.png',
          width: 512,
          height: 512,
        },
      ],
    },
    // twitter: {
    //   card: 'summary_large_image', // Twitter 大卡片
    // },
  }
}

