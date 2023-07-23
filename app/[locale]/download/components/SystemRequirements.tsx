'use client'

import { useTranslations } from 'next-intl'
import styles from '../Download.module.css'

const SystemRequirements = () => {

  const t = useTranslations('download.systemRequirements')

  return (
    <div className={styles.card}>
      <h2 className={`${styles['card-title']} border-gray-500`}>{t('title')}</h2>
      <div className={styles['card-info']}>
        <ul>
          <li>{t('system')}</li>
          <li>{t('browser')}</li>
        </ul>
      </div>
    </div>
  )
}

export default SystemRequirements