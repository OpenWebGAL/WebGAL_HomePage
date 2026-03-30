'use client'

import Button from '@/components/Button/Button'
import Image from 'next/image'
import Link from 'next/link'
import {useTranslations} from 'next-intl'
import styles from './JamPromo.module.css'

const JamPromo = () => {
  const t = useTranslations('home.jam')

  return (
    <section className={styles.section}>
      <div className={styles.panel}>
        <div className={styles.copy}>
          <div className={styles.headingGroup}>
            <h2 className={styles.title}>{t('title')}</h2>
          </div>
          <p className={styles.description}>{t('description')}</p>
          <p className={styles.date}>{t('date')}</p>
          <div className={styles.actions}>
            <Button>
              <Link href="https://galgame.mulerun.best/" target="_blank">
                {t('cta')}
              </Link>
            </Button>
            <p className={styles.note}>{t('note')}</p>
          </div>
        </div>

        <div className={styles.visual}>
          <div className={styles.banner}>
            <Image
              src="/images/sponsors/mulerun.svg"
              alt="MuleRun"
              width={312}
              height={76}
              className={styles.logo}
            />
            <p className={styles.bannerText}>{t('bannerLine1')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default JamPromo
