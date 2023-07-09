'use client'

import Link from 'next/link'
import useWebgalAssets from '@/hooks/useWebgalAssets'
import useWebgalTerreAssets from '@/hooks/useWebgalTerreAssets'
import Button from '@/app/components/Button/Button'
import { RiAppleFill, RiArrowRightCircleFill, RiMicrosoftFill, RiUbuntuFill, RiGithubFill, RiDownloadFill } from 'react-icons/ri'
import { useLocale, useTranslations } from 'next-intl'
import { i18n } from '@/i18n'
import styles from './Download.module.css'

const Download = () => {
  const webgalUrl = 'https://github.com/MakinoharaShoko/WebGAL/releases'
  const webgalTerreUrl = 'https://github.com/MakinoharaShoko/WebGAL_Terre/releases'
  const webgalApiUrl = 'https://api.github.com/repos/MakinoharaShoko/WebGAL/releases/latest'
  const webgalTerreApiUrl = 'https://api.github.com/repos/MakinoharaShoko/WebGAL_Terre/releases/latest'

  const webgalAssets = useWebgalAssets(webgalApiUrl)
  const webgalTerreAssets = useWebgalTerreAssets(webgalTerreApiUrl)

  const locale = useLocale()
  const releaseIndex = i18n.locales.findIndex(item => item.code === locale)

  const t = useTranslations('download')

  return (
    <div className={'pt-16'}>
      <div className={'max-w-screen-xl mx-auto space-y-4'}>

        <h1 className={'text-2xl pt-8 pb-4 px-4'}>{t('downloadWebgal')}</h1>

        <div className={styles.card}>
          <h2 className={`${styles['card-title']} border-terre`}>{t('webgalTerre') }</h2>
          <div className={styles['card-info']}>
            <p>{t('version') }: {webgalTerreAssets?.version ? webgalTerreAssets?.version : t('fetching')}</p>
            <p>{t('releaseTime')}: {webgalTerreAssets?.releaseTime ? webgalTerreAssets?.releaseTime.split('T')[0] : t('fetching')} </p>
            <div>
              <p>{t('releaseNote')}: {!(webgalTerreAssets?.releaseNote) && t('fetching')}</p>
              <ul className={styles.list}>
                {webgalTerreAssets?.releaseNote[releaseIndex].map((item, index) => <li key={index}>{item}</li>)}
              </ul>
            </div>
          </div>
          <div className={styles['card-button-gourp']}>
            <Button terre>
              <Link href={webgalTerreUrl}><RiGithubFill />{t('gitHubReleases')}</Link>
            </Button>
            {
              (webgalTerreAssets?.downloadUrl.windows) &&
              <Button terre>
                  <Link href={webgalTerreAssets?.downloadUrl.windows}><RiMicrosoftFill />{t('downloadWindows') }</Link>
              </Button>
            }
            {
              (webgalTerreAssets?.downloadUrl.windowsSetup) &&
              <Button terre>
                  <Link href={webgalTerreAssets?.downloadUrl.windowsSetup}><RiMicrosoftFill />{ t('downloadWindowsSetup')}</Link>
              </Button>
            }
            {
              (webgalTerreAssets?.downloadUrl.macos) &&
              <Button terre>
                  <Link href={webgalTerreAssets?.downloadUrl.macos}><RiAppleFill />{t('downloadMacos') }</Link>
              </Button>
            }
            {
              (webgalTerreAssets?.downloadUrl.linux) &&
              <Button terre>
                  <Link href={webgalTerreAssets?.downloadUrl.linux}><RiUbuntuFill />{t('downloadLinux') }</Link>
              </Button>
            }
          </div>
        </div>

        <div className={styles.card}>
          <h2 className={`${styles['card-title']} border-webgal`}>{t('webgal') }</h2>
          <div className={styles['card-info']}>
            <p>{t('version')}: {webgalAssets?.version ? webgalAssets?.version : t('fetching')}</p>
            <p>{t('releaseTime')}: {webgalAssets?.releaseTime ? webgalAssets?.releaseTime.split('T')[0] : t('fetching')} </p>
            <div>
              <p>{t('releaseNote')}: {!(webgalAssets?.releaseNote) && t('fetching')}</p>
              <ul className={styles.list}>
                {webgalAssets?.releaseNote[releaseIndex].map((item, index) => <li key={index}>{item}</li>)}
              </ul>
            </div>
          </div>
          <div className={styles['card-button-gourp']}>
            <Button>
              <Link href={webgalUrl} ><RiGithubFill />{t('gitHubReleases')}</Link>
            </Button>
            {
              (webgalAssets?.downloadUrl) &&
              <Button>
                <Link href={webgalAssets?.downloadUrl} ><RiDownloadFill />{t('downloadWebgal')}</Link>
              </Button>
            }
          </div>
        </div>

        <div className={styles.card}>
          <h2 className={`${styles['card-title']} border-gray-500`}>{t('otherDownloadLink') }</h2>
          <div className={styles['card-info']}>{t('otherDownloadLinkInfo')}</div>
          <div className={styles['card-button-gourp']}>
            <Button>
              <Link href={'https://www.123pan.com/s/YHszVv-jqzJ.html'} >123网盘</Link>
            </Button>
          </div>
        </div>

        <div className={styles.card}>
          <h2 className={`${styles['card-title']} border-gray-500`}>{t('systemRequirements')}</h2>
          <div className={styles['card-info']}>
            <ul className={styles.list} >
              <li>{t('systemRequirementsSystem')}</li>
              <li>{t('systemRequirementsBrowser') }</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Download