'use client'

import { useTranslations } from 'next-intl'

const DownloadTitle = () => {
  const t = useTranslations('download')
  return (
    <h1 className={'text-2xl font-semibold pt-8 pb-4 px-4'}>{t('downloadWebgal')}</h1>
  )
}

export default DownloadTitle