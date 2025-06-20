'use client'

import { useTranslations } from 'next-intl'
import styles from '../Download.module.css'
import Link from 'next/link'

const License = () => {

  const t = useTranslations('license')

  return (
    <div className={styles.card}>
      <h2 className={`${styles['card-title']} border-gray-500`}>{t('title')}</h2>
      <div className={styles['card-info']}>
        <p>{t('line0.part0')} <Link href="https://github.com/OpenWebGAL/WebGAL/blob/main/LICENSE" target="_blank" >Mozilla Public License 2.0 (MPL-2.0) </Link> {t('line0.part1')}</p>
        <p>{t('line1')}</p>
        <p>{t('line2')}</p>
        <ol className={styles.list} >
          <li>{t('additional.line0')}</li>
          <li>{t('additional.line1')}</li>
          <li>{t('additional.line2')}</li>
        </ol>
      </div>
    </div>
  )
}

export default License