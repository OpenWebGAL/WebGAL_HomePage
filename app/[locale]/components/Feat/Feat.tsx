'use client'

import { RiAndroidLine, RiAppleLine, RiLightbulbFlashLine, RiMicrosoftLine, RiUbuntuLine } from 'react-icons/ri'
import styles from './Feat.module.css'
import { useTranslations } from 'next-intl'

const Feat = () => {
  const t = useTranslations('features')
  return (
    <div className={'bg-gray-50'}>
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.card}>
            <div className={styles.icon}>
              <RiLightbulbFlashLine />
            </div>
            <h3 className={styles.title}>{t('openSource.title')}</h3>
            <div className={styles.info}>
              <p>{t('openSource.line0')}</p>
              <p>{t('openSource.line1')}</p>
            </div>
          </div>
          <div className={styles.card}>
            <div className={styles['icon-grid']}>
              <RiMicrosoftLine />
              <RiAppleLine />
              <RiUbuntuLine />
              <RiAndroidLine />
            </div>
            <h3 className={styles.title}>{t('multiplatform.title')}</h3>
            <div className={styles.info}>
              <p>{t('multiplatform.line0')}</p>
              <p>{t('multiplatform.line1')}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Feat