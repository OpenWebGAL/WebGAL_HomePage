'use client'

import { createTranslator, useTranslations } from 'next-intl'
import DownloadWebgalTerre from './DownloadWebgalTerre'
import DownloadWebgal from './DownloadWebgal'
import SystemRequirements from './SystemRequirements'
import OtherDownloadLink from './OtherDownloadLink'

const Download = () => {
  const t = useTranslations('download')
  return (
    <div className={'pt-16'}>
      <div className={'max-w-screen-xl mx-auto space-y-4'}>
        <h1 className={'text-2xl font-semibold pt-8 pb-4 px-4'}>{t('downloadWebgal')}</h1>
        <DownloadWebgalTerre />
        <DownloadWebgal />
        <OtherDownloadLink />
        <SystemRequirements />
      </div>
    </div>
  )
}

export default Download