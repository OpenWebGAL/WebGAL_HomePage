import GamesTitle from './components/GamesTitle'
import GamesList from './components/GamesList'
import GamesDisclaimer from './components/GamesDisclaimer'
import { createTranslator } from 'next-intl'
import { siteConfig } from '@/site.config'

const Games = () => {

  return (
    <div className={'pt-16 pb-4'}>
      <div className={'max-w-screen-xl mx-auto'}>
        <GamesTitle />
        <GamesList />
        <GamesDisclaimer />
      </div>
    </div>
  )
}

export default Games

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const messages = (await import(`../../../locales/${locale}.json`)).default

  const t = createTranslator({ locale, messages })

  return {
    metadataBase: new URL(siteConfig.baseUrl),
    title: t('metadata.games.title'),
    description: t('metadata.games.description'),
    openGraph: {
      title: t('metadata.games.title'),
      description: t('metadata.games.description'),
      url: `/${locale}/games`,
      images: [
        {
          url: '/images/opengraph-image.png',
          width: 512,
          height: 512,
        },
      ],
    },
  }
}