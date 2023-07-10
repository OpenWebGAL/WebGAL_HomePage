import Button from '@/app/components/Button/Button'
import Link from 'next/link'
import styles from './Download.module.css'
import { useTranslations } from 'next-intl'

const OtherDownloadLink = () => {

  const t = useTranslations('download')

  return (
    <div className={styles.card}>
      <h2 className={`${styles['card-title']} border-gray-500`}>{t('otherDownloadLink')}</h2>
      <div className={styles['card-info']}>{t('otherDownloadLinkInfo')}</div>
      <div className={styles['card-button-gourp']}>
        <Button>
          <Link href={'https://www.123pan.com/s/YHszVv-jqzJ.html'} target={'_blank'} >123网盘</Link>
        </Button>
      </div>
    </div>
  )
}

export default OtherDownloadLink