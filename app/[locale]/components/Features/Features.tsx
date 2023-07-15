import Button from '@/app/components/Button/Button'
import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'
import styles from './Features.module.css'
import Image from 'next/image'

const Features = () => {
  const locale = useLocale()
  const t = useTranslations('features')
  return (
    <div>
      <div className={styles.container}>

        <h2 className={styles['features-title']}>{t('features')}</h2>

        <div className={styles.feature}>
          <Image src='/images/features/nice-ui.webp' alt={''} width={1280} height={720} className={styles['feature-image']} />
          <div className={styles['feature-text']}>
            <h2 className={styles['feature-title']}>{t('niceUI.title')}</h2>
            <p className={styles['feature-info']}>{t('niceUI.info')}</p>
          </div>
        </div>

        <div className={`${styles['feature-reverse']}`}>
          <Image src='/images/features/full-function.webp' alt={''} width={1280} height={640} className={styles['feature-image']} />
          <div className={styles['feature-text']}>
            <h2 className={styles['feature-title']}>{t('fullFunction.title')}</h2>
            <p className={styles['feature-info']}>{t('fullFunction.info')}</p>
          </div>
        </div>

        <div className={styles.feature}>
          <Image src='/images/features/easy-to-develop.webp' alt={''} width={1280} height={720} className={styles['feature-image']} />
          <div className={styles['feature-text']}>
            <h2 className={styles['feature-title']}>{t('easyToDevelop.title')}</h2>
            <p className={styles['feature-info']}>{t('easyToDevelop.info')}</p>
          </div>
        </div>
      </div>

      <div className={'bg-white'}>
        <div className={'max-w-screen-xl mx-auto space-y-4 px-4 py-8 flex flex-col justify-center items-center text-center'}>
          <p>{t('nowDownload.info')}</p>
          <Button>
            <Link href={`/${locale}/download/`}>{t('nowDownload.nowDownload')}</Link>
          </Button>
        </div>
      </div>

    </div>

  )
}

export default Features