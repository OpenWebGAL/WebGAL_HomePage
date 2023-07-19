'use client'

import { useTranslations } from 'next-intl'
import styles from './Download.module.css'

const SystemRequirements = () => {

  const t = useTranslations('download')

  return (
    <div className={styles.card}>
      <h2 className={`${styles['card-title']} border-gray-500`}>{t('systemRequirements')}</h2>
      <div className={styles['card-info']}>
        <ul className={styles.list} >
          <li>{t('systemRequirementsSystem')}</li>
          <li>{t('systemRequirementsBrowser')}</li>
        </ul>
      </div>
    </div>
  )
}

export default SystemRequirements