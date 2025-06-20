'use client'

import Button from '@/components/Button/Button'
import useWebgalTerreAssets from '@/hooks/useWebgalTerreAssets'
import Link from 'next/link'
import {RiGithubFill, RiMicrosoftFill, RiAppleFill, RiUbuntuFill} from 'react-icons/ri'
import styles from '../Download.module.css'
import {useLocale, useTranslations} from 'next-intl'
import {i18n} from '@/i18n'

const DownloadWebgalTerre = () => {

  const webgalTerreUrl = 'https://github.com/OpenWebGAL/WebGAL_Terre/releases'
  const webgalTerreApiUrl = 'https://api.github.com/repos/OpenWebGAL/WebGAL_Terre/releases/latest'

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

  const platformMap = [
    {platform: 'windows', icon: <RiMicrosoftFill/>, label: t('downloadWindows')},
    {platform: 'windowsSetup', icon: <RiMicrosoftFill/>, label: t('downloadWindowsSetup')},
    {platform: 'windowsArm64', icon: <RiMicrosoftFill/>, label: t('downloadWindowsArm64')},
    {platform: 'windowsArm64Setup', icon: <RiMicrosoftFill/>, label: t('downloadWindowsArm64Setup')},
    {platform: 'macos', icon: <RiAppleFill/>, label: t('downloadMacos')},
    {platform: 'linux', icon: <RiUbuntuFill/>, label: t('downloadLinux')},
    {platform: 'linuxArm64', icon: <RiUbuntuFill/>, label: t('downloadLinuxArm64')},
  ]

  const downloadUrls = webgalTerreAssets?.downloadUrl
    .map((item) => {
      const test = platformMap.find(platform => item.platform === platform.platform)
      if (test)
        return {url: item.url, ...test}
    })

  const isZh = locale === 'zh-cn'
  const ghproxyStr = 'https://ghfast.top/'

  return (
    <div className={styles.card}>
      <h2 className={`${styles['card-title']} border-terre`}>{t('webgalTerre')}</h2>
      <div className={styles['card-info']}>
        {/* <div className={styles.corner}>
          <p className={`${styles['corner-text']} bg-terre`}>{t('recommend')}</p>
        </div> */}
        <p><strong>{t('version')}:</strong> {webgalTerreAssets?.version ? webgalTerreAssets?.version : t('fetching')}
        </p>
        <p>
          <strong>{t('releaseTime')}:</strong> {webgalTerreAssets?.releaseTime ? webgalTerreAssets?.releaseTime.split('T')[0] : t('fetching')}
        </p>
        <div>
          <p><strong>{t('releaseNote')}:</strong> {!(releaseNote) && t('fetching')}</p>
          {
            releaseNote &&
              < div dangerouslySetInnerHTML={{__html: releaseNote}} className={styles['release-note']}/>
          }
        </div>
      </div>
      <div className={styles['card-button-gourp']}>
        <Button terre>
          <Link href={webgalTerreUrl} target={'_blank'}><RiGithubFill/>{t('gitHubReleases')}</Link>
        </Button>
        {
          downloadUrls &&
          downloadUrls.map((item) =>
            item?.url &&
              <Button terre key={item.platform}>
                  <Link href={item.url} target='_top'>{item.icon}{item.label}</Link>
              </Button>
          )
        }

      </div>
      {
        isZh && downloadUrls && <div className={styles.cndownload}>
          {/*<details className='space-y-4'>*/}
              <div className='text-terre select-none'>
                {t('otherDownloadLinkInfo')}
              </div>
              <div className={styles['card-button-gourp']}>
                {
                  downloadUrls &&
                  downloadUrls.map((item) =>
                    item?.url &&
                      <Button terre key={item.platform}>
                          <Link href={ghproxyStr + item.url} target='_top'>{item.icon}{item.label}</Link>
                      </Button>
                  )
                }
              </div>
          {/*</details>*/}
          </div>
      }
    </div>
  )
}

export default DownloadWebgalTerre
