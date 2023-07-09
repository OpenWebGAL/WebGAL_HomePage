'use client'

import Link from 'next/link'
import useWebgalAssets from '@/hooks/useWebgalAssets'
import useWebgalTerreAssets from '@/hooks/useWebgalTerreAssets'
import Button from '@/app/components/Button/Button'
import { RiAppleFill, RiArrowRightCircleFill, RiMicrosoftFill, RiUbuntuFill, RiGithubFill, RiDownloadFill } from 'react-icons/ri'
import { useLocale } from 'next-intl'
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

  return (
    <div className={'pt-16'}>
      <div className={'max-w-screen-xl mx-auto space-y-4'}>

        <h1 className={'text-2xl pt-8 pb-4 px-4'}>下载 WebGAL</h1>

        <div className={styles.card}>
          <h2 className={`${styles['card-title']} border-terre`}>WebGAL Terre 可视化编辑器</h2>
          <div className={styles['card-info']}>
            <p>版本号: {webgalTerreAssets?.version ? webgalTerreAssets?.version : '获取中'}</p>
            <p>发布日期: {webgalTerreAssets?.releaseTime ? webgalTerreAssets?.releaseTime.split('T')[0] : '获取中'} </p>
            <div>
              <p>发布日志: {!(webgalTerreAssets?.releaseNote) && '获取中'}</p>
              <ul className={styles.list}>
                {webgalTerreAssets?.releaseNote[releaseIndex].map((item, index) => <li key={index}>{item}</li>)}
              </ul>
            </div>
          </div>
          <div className={styles['card-button-gourp']}>
            <Button terre>
              <Link href={webgalTerreUrl}><RiGithubFill />前往 GitHub 下载</Link>
            </Button>
            {
              (webgalTerreAssets?.downloadUrl.windows) &&
              <Button terre>
                <Link href={webgalTerreAssets?.downloadUrl.windows}><RiMicrosoftFill />下载 Windows 版本</Link>
              </Button>
            }
            {
              (webgalTerreAssets?.downloadUrl.windowsSetup) &&
              <Button terre>
                <Link href={webgalTerreAssets?.downloadUrl.windowsSetup}><RiMicrosoftFill />下载 Windows 版本安装器</Link>
              </Button>
            }
            {
              (webgalTerreAssets?.downloadUrl.macos) &&
              <Button terre>
                <Link href={webgalTerreAssets?.downloadUrl.macos}><RiAppleFill />下载 macOS 版本</Link>
              </Button>
            }
            {
              (webgalTerreAssets?.downloadUrl.linux) &&
              <Button terre>
                <Link href={webgalTerreAssets?.downloadUrl.linux}><RiUbuntuFill />下载 Linux 版本</Link>
              </Button>
            }
          </div>
        </div>

        <div className={styles.card}>
          <h2 className={`${styles['card-title']} border-webgal`}>WebGAL</h2>
          <div className={styles['card-info']}>
            <p>版本号: {webgalAssets?.version ? webgalAssets?.version : '获取中'}</p>
            <p>发布日期: {webgalAssets?.releaseTime ? webgalAssets?.releaseTime.split('T')[0] : '获取中'} </p>
            <div>
              <p>发布日志: {!(webgalAssets?.releaseNote) && '获取中'}</p>
              <ul className={styles.list}>
                {webgalAssets?.releaseNote[releaseIndex].map((item, index) => <li key={index}>{item}</li>)}
              </ul>
            </div>
          </div>
          <div className={styles['card-button-gourp']}>
            <Button>
              <Link href={webgalUrl} ><RiGithubFill />前往 GitHub 下载</Link>
            </Button>
            {
              (webgalAssets?.downloadUrl) &&
              <Button>
                <Link href={webgalAssets?.downloadUrl} ><RiDownloadFill />下载 WebGAL</Link>
              </Button>
            }
          </div>
        </div>

        <div className={styles.card}>
          <h2 className={`${styles['card-title']} border-gray-500`}>其他下载地址</h2>
          <div className={styles['card-info']}>如果上面的下载地址下载速度比较慢，请尝试使用以下下载地址</div>
          <div className={styles['card-button-gourp']}>
            <Button>
              <Link href={'https://www.123pan.com/s/YHszVv-jqzJ.html'} >123网盘</Link>
            </Button>
          </div>
        </div>

        <div className={styles.card}>
          <h2 className={`${styles['card-title']} border-gray-500`}>系统需求</h2>
          <div className={styles['card-info']}>
            <ul className={styles.list} >
              <li>系统: Windows 10+ / macOS 10.14+ / Linux 桌面版 </li>
              <li>浏览器: Google Chrome / Mozilla Firefox / Microsoft Edge 或者其他现代浏览器</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Download