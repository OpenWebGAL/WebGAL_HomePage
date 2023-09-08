'use client'

import Button from '@/components/Button/Button'
import useWebgalAssets from '@/hooks/useWebgalAssets'
import { i18n } from '@/i18n'
import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'
import { RiGithubFill } from 'react-icons/ri'
import styles from '../Download.module.css'

const DownloadWebgal = () => {

  const webgalUrl = 'https://github.com/MakinoharaShoko/WebGAL/releases'
  const webgalApiUrl = 'https://api.github.com/repos/MakinoharaShoko/WebGAL/releases/latest'
  const webgalAssets = useWebgalAssets(webgalApiUrl)
  const locale = useLocale()
  const releaseIndex = i18n.locales.findIndex(item => item.code === locale)
  const t = useTranslations('download')

  const releaseNote =
    webgalAssets?.releaseNote[releaseIndex]
      ? webgalAssets?.releaseNote[releaseIndex]
      : webgalAssets?.releaseNote[1]
        ? webgalAssets?.releaseNote[1]
        : null

  return (
    <div className={styles.card}>
      <h2 className={`${styles['card-title']} border-webgal`}>{t('webgal')}</h2>
      <div className={styles['card-info']}>
        <p><strong>{t('version')}:</strong> {webgalAssets?.version ? webgalAssets?.version : t('fetching')}</p>
        <p><strong>{t('releaseTime')}:</strong> {webgalAssets?.releaseTime ? webgalAssets?.releaseTime.split('T')[0] : t('fetching')} </p>
        <div>
          <p><strong>{t('releaseNote')}:</strong> {!(releaseNote) && t('fetching')}</p>
          {
            releaseNote &&
            < div dangerouslySetInnerHTML={{ __html: releaseNote }} className={styles['release-note']} />
          }
        </div>
      </div>
      <div className={styles['card-button-gourp']}>
        <Button>
          <Link href={webgalUrl} target={'_blank'} ><RiGithubFill />GitHub</Link>
        </Button>
      </div>
    </div>
  )
}

export default DownloadWebgal