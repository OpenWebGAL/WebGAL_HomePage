import GamesTitle from './components/GamesTitle'
import GamesList from './components/GamesList'
import GamesDisclaimer from './components/GamesDisclaimer'
import { createTranslator } from 'next-intl'
import { siteConfig } from '@/site.config'
import Container from '@/components/Container/Container'

const Games = () => {

  return (
    <Container>
      <GamesTitle />
      <GamesList />
      <GamesDisclaimer />
    </Container>
  )
}

export default Games

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const messages = (await import(`/locales/${locale}.json`)).default

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