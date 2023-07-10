import Button from '@/app/components/Button/Button'
import useWebgalAssets from '@/hooks/useWebgalAssets'
import { i18n } from '@/i18n'
import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'
import { RiGithubFill, RiDownloadFill } from 'react-icons/ri'
import styles from './Download.module.css'

const DownloadWebgal = () => {

  const webgalUrl = 'https://github.com/MakinoharaShoko/WebGAL/releases'
  const webgalApiUrl = 'https://api.github.com/repos/MakinoharaShoko/WebGAL/releases/latest'
  const webgalAssets = useWebgalAssets(webgalApiUrl)
  const locale = useLocale()
  const releaseIndex = i18n.locales.findIndex(item => item.code === locale)
  const t = useTranslations('download')

  return (
    <div className={styles.card}>
      <h2 className={`${styles['card-title']} border-webgal`}>{t('webgal')}</h2>
      <div className={styles['card-info']}>
        <p>{t('version')}: {webgalAssets?.version ? webgalAssets?.version : t('fetching')}</p>
        <p>{t('releaseTime')}: {webgalAssets?.releaseTime ? webgalAssets?.releaseTime.split('T')[0] : t('fetching')} </p>
        <div>
          <p>{t('releaseNote')}: {!(webgalAssets?.releaseNote) && t('fetching')}</p>
          <ul className={styles.list}>
            {
              webgalAssets?.releaseNote[releaseIndex] &&
              webgalAssets?.releaseNote[releaseIndex].map((item, index) => <li key={index}>{item}</li>)
            }
          </ul>
        </div>
      </div>
      <div className={styles['card-button-gourp']}>
        <Button>
          <Link href={webgalUrl} target={'_blank'} ><RiGithubFill />{t('gitHubReleases')}</Link>
        </Button>
        {
          (webgalAssets?.downloadUrl) &&
          <Button>
            <Link href={webgalAssets?.downloadUrl} target='_top'><RiDownloadFill />{t('downloadWebgal')}</Link>
          </Button>
        }
      </div>
    </div>
  )
}

export default DownloadWebgal