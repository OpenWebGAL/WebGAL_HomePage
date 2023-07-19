'use client'

import Button from '@/app/components/Button/Button'
import useWebgalTerreAssets from '@/hooks/useWebgalTerreAssets'
import Link from 'next/link'
import { RiGithubFill, RiMicrosoftFill, RiAppleFill, RiUbuntuFill } from 'react-icons/ri'
import styles from './Download.module.css'
import { useLocale, useTranslations } from 'next-intl'
import { i18n } from '@/i18n'

const DownloadWebgalTerre = () => {

  const webgalTerreUrl = 'https://github.com/MakinoharaShoko/WebGAL_Terre/releases'
  const webgalTerreApiUrl = 'https://api.github.com/repos/MakinoharaShoko/WebGAL_Terre/releases/latest'

  const t = useTranslations('download')
  const locale = useLocale()

  const releaseIndex = i18n.locales.findIndex(item => item.code === locale)

  const webgalTerreAssets = useWebgalTerreAssets(webgalTerreApiUrl)

  const releaseNote =
    webgalTerreAssets?.releaseNote[releaseIndex]
      ? webgalTerreAssets?.releaseNote[releaseIndex]
      : webgalTerreAssets?.releaseNote[1]
        ? webgalTerreAssets?.releaseNote[1]
        : null

  return (
    <div className={styles.card}>
      <h2 className={`${styles['card-title']} border-terre`}>{t('webgalTerre')}</h2>
      <div className={styles['card-info']}>
        {/* <div className={styles.corner}>
          <p className={`${styles['corner-text']} bg-terre`}>{t('recommend')}</p>
        </div> */}
        <p>{t('version')}: {webgalTerreAssets?.version ? webgalTerreAssets?.version : t('fetching')}</p>
        <p>{t('releaseTime')}: {webgalTerreAssets?.releaseTime ? webgalTerreAssets?.releaseTime.split('T')[0] : t('fetching')} </p>
        <div>
          <p>{t('releaseNote')}: {!(releaseNote) && t('fetching')}</p>
          <ul className={styles.list}>
            {
              releaseNote &&
              releaseNote.map((item, index) => <li key={index}>{item}</li>)
            }
          </ul>
        </div>
      </div>
      <div className={styles['card-button-gourp']}>
        <Button terre>
          <Link href={webgalTerreUrl} target={'_blank'}><RiGithubFill />{t('gitHubReleases')}</Link>
        </Button>
        {
          (webgalTerreAssets?.downloadUrl.windows) &&
          <Button terre>
            <Link href={webgalTerreAssets?.downloadUrl.windows} target='_top'><RiMicrosoftFill />{t('downloadWindows')}</Link>
          </Button>
        }
        {
          (webgalTerreAssets?.downloadUrl.windowsSetup) &&
          <Button terre>
            <Link href={webgalTerreAssets?.downloadUrl.windowsSetup} target='_top'><RiMicrosoftFill />{t('downloadWindowsSetup')}</Link>
          </Button>
        }
        {
          (webgalTerreAssets?.downloadUrl.macos) &&
          <Button terre>
            <Link href={webgalTerreAssets?.downloadUrl.macos} target='_top'><RiAppleFill />{t('downloadMacos')}</Link>
          </Button>
        }
        {
          (webgalTerreAssets?.downloadUrl.linux) &&
          <Button terre>
            <Link href={webgalTerreAssets?.downloadUrl.linux} target='_top'><RiUbuntuFill />{t('downloadLinux')}</Link>
          </Button>
        }
      </div>
    </div>
  )
}

export default DownloadWebgalTerre