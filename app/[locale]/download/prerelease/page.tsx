import { createTranslator } from 'next-intl'
import DownloadWebgalTerre from '../components/DownloadWebgalTerre'
import DownloadWebgal from '../components/DownloadWebgal'
import SystemRequirements from '../components/SystemRequirements'
import ReadFirst from '../components/ReadFirst'
import License from '../components/License'
import { siteConfig } from '@/site.config'
import Container from '@/components/Container/Container'

const PrereleaseDownload = async ({ params: { locale } }: { params: { locale: string } }) => {
  const messages = (await import(`/locales/${locale}.json`)).default
  const t = createTranslator({ locale, messages })

  return (
    <Container>
      <div className='pt-8 pb-4 px-4'>
        <h1 className='text-2xl font-semibold'>{t('download.prereleasePage.title')}</h1>
        <p className='pt-2 text-gray-700'>{t('download.prereleasePage.description')}</p>
      </div>
      <ReadFirst />
      <DownloadWebgalTerre prerelease />
      <DownloadWebgal prerelease />
      <SystemRequirements />
      <License />
    </Container>
  )
}

export default PrereleaseDownload

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const messages = (await import(`/locales/${locale}.json`)).default

  const t = createTranslator({ locale, messages })

  return {
    metadataBase: new URL(siteConfig.baseUrl),
    title: t('metadata.downloadPrerelease.title'),
    description: t('metadata.downloadPrerelease.description'),
    openGraph: {
      title: t('metadata.downloadPrerelease.title'),
      description: t('metadata.downloadPrerelease.description'),
      url: `/${locale}/download/prerelease`,
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
