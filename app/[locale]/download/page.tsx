import { createTranslator } from 'next-intl'
import DownloadWebgalTerre from './components/DownloadWebgalTerre'
import DownloadWebgal from './components/DownloadWebgal'
import SystemRequirements from './components/SystemRequirements'
import OtherDownloadLink from './components/OtherDownloadLink'
import DownloadTitle from './components/DownloadTitle'
import ReadFirst from './components/ReadFirst'
import License from './components/License'

const Download = ({ params: { locale } }: { params: { locale: string } }) => {
  return (
    <div className={'pt-16 pb-4'}>
      <div className={'max-w-screen-xl mx-auto'}>
        <DownloadTitle />
        <ReadFirst />
        <DownloadWebgalTerre />
        <DownloadWebgal />
        {
          (locale === 'zh-cn') && <OtherDownloadLink />
        }
        <SystemRequirements />
        <License />
      </div>
    </div>
  )
}

export default Download

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const messages = (await import(`../../../locales/${locale}.json`)).default

  const t = createTranslator({ locale, messages })

  return {
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