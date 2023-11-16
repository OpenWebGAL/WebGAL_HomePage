import { createTranslator } from 'next-intl'
import DownloadWebgalTerre from './components/DownloadWebgalTerre'
import DownloadWebgal from './components/DownloadWebgal'
import SystemRequirements from './components/SystemRequirements'
import DownloadTitle from './components/DownloadTitle'
import ReadFirst from './components/ReadFirst'
import License from './components/License'
import { siteConfig } from '@/site.config'
import Container from '@/components/Container/Container'

const Download = () => {
  return (
    <Container>
      <DownloadTitle />
      <ReadFirst />
      <DownloadWebgalTerre />
      <DownloadWebgal />
      <SystemRequirements />
      <License />
    </Container>
  )
}

export default Download

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const messages = (await import(`/locales/${locale}.json`)).default

  const t = createTranslator({ locale, messages })

  return {
    metadataBase: new URL(siteConfig.baseUrl),
    title: t('metadata.download.title'),
    description: t('metadata.download.description'),
    openGraph: {
      title: t('metadata.download.title'),
      description: t('metadata.download.description'),
      url: `/${locale}/download`,
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