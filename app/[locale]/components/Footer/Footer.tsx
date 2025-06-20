'use client'

import Link from 'next/link'
import styles from './Footer.module.css'
import { useTranslations } from 'next-intl'
import useRedirect from '@/hooks/useRedirect'

const Footer = () => {
  const t = useTranslations('footer')
  const { docsRedirect } = useRedirect()

  const linksData = [
    {
      title: t('products'),
      links: [
        { href: 'https://github.com/OpenWebGAL/WebGAL', label: 'WebGAL' },
        { href: 'https://github.com/OpenWebGAL/WebGAL_Terre', label: 'WebGAL Terre' },
      ],
    },
    {
      title: t('development'),
      links: [
        { href: docsRedirect('/'), label: t('gameDevelopDoc') },
        { href: docsRedirect('/developers'), label: t('contribute') },
        { href: docsRedirect('/tech'), label: t('technical') }
      ],
    },
    {
      title: t('community'),
      links: [
        { href: 'https://jq.qq.com/?_wv=1027&k=gYVremLy', label: `${t('qqGroup')}: 709293432` },
        { href: 'https://discord.gg/kPrQkJttJy', label: 'Discord' },
      ],
    },
    {
      title: t('developer'),
      links: [
        { href: 'https://github.com/MakinoharaShoko', label: 'GitHub' },
        { href: 'https://space.bilibili.com/7321105', label: t('bilibili') },
      ],
    },
    {
      title: t('sponsor'),
      links: [
        { href: docsRedirect('/sponsor'), label: t('sponsor') },
      ],
    },
    {
      title: t('links'),
      links: [
        { href: 'https://www.cngal.org/', label: 'CnGal' },
        { href: 'https://humihumi.com/', label: 'HumiHumi' },
      ],
    },
  ]

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.links}>
          {
            linksData.map(item =>
              <ul key={item.title}>
                <li className={styles['link-title']}>{item.title}</li>
                {
                  item.links.map((link, index) =>
                    <li key={index}>
                      <Link href={link.href} target={'_blank'} className={styles.link}>{link.label}</Link>
                    </li>
                  )
                }
              </ul>
            )
          }
        </div>
      </div>
      <div className={'w-full p-2 text-sm font-light border-t'}>
        <p>Powered by <Link href="https://github.com/OpenWebGAL/WebGAL" target="_blank">WebGAL</Link> Framework</p>
        <p>Made with ❤ by <Link href="https://github.com/MakinoharaShoko" target="_blank">Mahiru</Link></p>
        <p>
          WebGAL and WebGAL Terre are licensed under the <Link href="https://github.com/OpenWebGAL/WebGAL/blob/main/LICENSE" target="_blank" >Mozilla Public License 2.0 (MPL-2.0)</Link>
        </p>
      </div>
    </footer>
  )
}

export default Footer