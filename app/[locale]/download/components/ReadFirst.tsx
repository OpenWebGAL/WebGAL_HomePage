'use client'

import { useTranslations } from 'next-intl'
import styles from '../Download.module.css'
import Link from 'next/link'
import useRedirect from '@/hooks/useRedirect'

const ReadFirst = () => {

  const t = useTranslations('download.readFirst')
  const { docsRedirect } = useRedirect()

  return (
    <div className={styles.card}>
      <div className={'text-sm font-light space-y-1'}>
        <p>{t('firstUse.part0')} <Link href={docsRedirect('/guide')} target={'_blank'}>{t('firstUse.part1')}</Link> {t('firstUse.part2')}</p>
        <p>{t('getHelp')}</p>
        <p>{t('webGALScriptBasics.part0')} <Link href={'https://marketplace.visualstudio.com/items?itemName=c6h5-no2.webgal-script-basics'} target={'_blank'}>WebGAL Script Basics</Link> {t('webGALScriptBasics.part1')}</p>
      </div>
    </div>
  )
}

export default ReadFirst