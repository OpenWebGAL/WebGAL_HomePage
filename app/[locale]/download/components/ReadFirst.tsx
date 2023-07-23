'use client'

import { useTranslations } from 'next-intl'
import styles from '../Download.module.css'
import Link from 'next/link'

const ReadFirst = () => {

  const t = useTranslations('download.readFirst')

  return (
    <div className={styles.card}>
      {/* <h2 className={`${styles['card-title']} border-gray-500`}>{t('title')}</h2> */}
      <div className={'text-sm font-light space-y-1'}>
        <p>{t('firstUse.part0')} <Link href={'https://docs.openwebgal.com/guide/'} target={'_blank'}>{t('firstUse.part1')}</Link> {t('firstUse.part2')}</p>
        <p>{t('getHelp')}</p>
        <p>{t('webGALScriptBasics.part0')} <Link href={'https://marketplace.visualstudio.com/items?itemName=c6h5-no2.webgal-script-basics'} target={'_blank'}>WebGAL Script Basics</Link> {t('webGALScriptBasics.part1')}</p>
      </div>
    </div>
  )
}

export default ReadFirst