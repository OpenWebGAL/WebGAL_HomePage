'use client'

import { useTranslations } from 'next-intl'
import Link from 'next/link'

const GamesDisclaimer = () => {
  const t = useTranslations('games')

  return (
    <div className={'px-4'}>
      <h2 className={'font-lg text-black'}>{t('disclaimer')}</h2>
      <p className='text-sm font-light text-gray-800'>{t('disclaimerInfo.line0')}</p>
      <p className='text-sm font-light text-gray-800'>{t('disclaimerInfo.line1')}</p>
      <p className='text-sm font-light text-gray-800'>{t('disclaimerInfo.line2')} <Link href={'mailto:contact@openwebgal.com'} target={'_top'}>contact@openwebgal.com</Link></p>
    </div>
  )
}

export default GamesDisclaimer