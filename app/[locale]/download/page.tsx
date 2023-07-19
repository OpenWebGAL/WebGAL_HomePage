import { createTranslator } from 'next-intl'
import DownloadWebgalTerre from './DownloadWebgalTerre'
import DownloadWebgal from './DownloadWebgal'
import SystemRequirements from './SystemRequirements'
import OtherDownloadLink from './OtherDownloadLink'
import DownloadTitle from './DownloadTitle'

const Download = ({ params: { locale } }: { params: { locale: string } }) => {
  return (
    <div className={'pt-16 pb-4'}>
      <div className={'max-w-screen-xl mx-auto space-y-4'}>
        <DownloadTitle />
        <DownloadWebgalTerre />
        <DownloadWebgal />
        {
          (locale === 'zh-cn') && <OtherDownloadLink />
        }
        <SystemRequirements />
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
    },
  }
}