'use client'

import { useTranslations } from 'next-intl'

const GamesTitle = () => {
  const t = useTranslations('games')

  return (
    <h1 className={'text-2xl font-semibold pt-8 pb-4 px-4'}>{t('webgalGames')}</h1>
  )
}

export default GamesTitle