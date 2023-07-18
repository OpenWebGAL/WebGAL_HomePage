'use client'

import Link from 'next/link'
import styles from './Footer.module.css'
import { useTranslations } from 'next-intl'

const Footer = () => {
  const t = useTranslations('footer')

  const developmentLink = [
    { href: 'https://github.com/MakinoharaShoko/WebGAL', label: 'WebGAL' },
    { href: 'https://github.com/MakinoharaShoko/WebGAL_Terre', label: 'WebGAL Terre' },
    { href: 'https://docs.openwebgal.com/developers', label: t('contribute') }
  ]

  const communityLink = [
    { href: 'https://jq.qq.com/?_wv=1027&k=gYVremLy', label: `${t('qqGroup')}: 709293432` },
    { href: 'https://discord.gg/kPrQkJttJy', label: 'Discord' },
  ]

  const developerLink = [
    { href: 'https://github.com/MakinoharaShoko', label: 'GitHub' },
    { href: 'https://space.bilibili.com/7321105', label: t('bilibili') },
  ]

  const sponsorLink = [
    { href: 'https://docs.openwebgal.com/sponsor/', label: t('sponsor') },
  ]

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.links}>
          <ul>
            <li className={styles['link-title']}>{t('development')}</li>
            {
              developmentLink.map((item, index) =>
                <li key={index}>
                  <Link href={item.href} target={'_blank'} className={styles.link}>{item.label}</Link>
                </li>
              )
            }
          </ul>
          <ul>
            <li className={styles['link-title']}>{t('community')}</li>
            {
              communityLink.map((item, index) =>
                <li key={index}>
                  <Link href={item.href} target={'_blank'} className={styles.link}>{item.label}</Link>
                </li>
              )
            }
          </ul>
          <ul >
            <li className={styles['link-title']}>{t('developer')}</li>
            {
              developerLink.map((item, index) =>
                <li key={index}>
                  <Link href={item.href} target={'_blank'} className={styles.link}>{item.label}</Link>
                </li>
              )
            }
          </ul>
          <ul >
            <li className={styles['link-title']}>{t('sponsor')}</li>
            {
              sponsorLink.map((item, index) =>
                <li key={index}>
                  <Link href={item.href} target={'_blank'} className={styles.link}>{item.label}</Link>
                </li>
              )
            }
          </ul>
        </div>
      </div>
      <div className={'w-full p-2 text-sm font-light border-t'}>
        <p>Powered by <Link href="https://github.com/MakinoharaShoko/WebGAL" target="_blank">WebGAL</Link> Framework</p>
        <p>Made with ❤ by <Link href="https://github.com/MakinoharaShoko" target="_blank">Mahiru</Link></p>
        <p>
          WebGAL is licensed under the <Link href="https://github.com/MakinoharaShoko/WebGAL/blob/main/LICENSE" target="_blank" >Mozilla Public License 2.0 (MPL-2.0)</Link>
        </p>
      </div>
    </footer>
  )
}

export default Footer