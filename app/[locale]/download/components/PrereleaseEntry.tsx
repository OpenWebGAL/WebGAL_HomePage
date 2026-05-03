'use client'

import Button from '@/components/Button/Button'
import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'
import { RiFlaskFill } from 'react-icons/ri'
import styles from '../Download.module.css'

const PrereleaseEntry = () => {
  const locale = useLocale()
  const t = useTranslations('download.prereleaseEntry')

  return (
    <section className={styles['prerelease-entry']}>
      <div>
        <p className={styles['prerelease-kicker']}>{t('kicker')}</p>
        <h2 className={styles['prerelease-title']}>{t('title')}</h2>
        <p className={styles['prerelease-description']}>{t('description')}</p>
        <ul className={styles['prerelease-list']}>
          <li>{t('feature0')}</li>
          <li>{t('feature1')}</li>
          {/* <li>{t('feature2')}</li> */}
        </ul>
      </div>
      <Button terre>
        <Link href={`/${locale}/download/prerelease/`}><RiFlaskFill />{t('action')}</Link>
      </Button>
    </section>
  )
}

export default PrereleaseEntry
