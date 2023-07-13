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

        <div className={styles.feature}>
          <Image src='/images/terre.webp' alt={''} width={1280} height={720} className={styles['feature-image']} />
          <div className={styles['feature-text']}>
            <h2 className={styles['feature-title']}>{t('niceUI.title')}</h2>
            <p className={styles['feature-info']}>{t('niceUI.info')}</p>
          </div>
        </div>

        <div className={`${styles['feature-reverse']}`}>
          <Image src='/images/terre.webp' alt={''} width={1280} height={720} className={styles['feature-image']} />
          <div className={styles['feature-text']}>
            <h2 className={styles['feature-title']}>{t('fullFunction.title')}</h2>
            <p className={styles['feature-info']}>{t('fullFunction.info')}</p>
          </div>
        </div>

        <div className={styles.feature}>
          <Image src='/images/terre.webp' alt={''} width={1280} height={720} className={styles['feature-image']} />
          <div className={styles['feature-text']}>
            <h2 className={styles['feature-title']}>{t('easyToDevelop.title')}</h2>
            <p className={styles['feature-info']}>{t('easyToDevelop.info')}</p>
          </div>
        </div>

        <div className={'max-w-screen-xl mx-auto space-y-4 p-4 flex flex-col justify-center items-center text-center'}>
          <Button>
            <Link href={`/${locale}/download/`}>立即下载 WebGAL 开始创作吧！</Link>
          </Button>
        </div>

      </div>


    </div>

  )
}

export default Features