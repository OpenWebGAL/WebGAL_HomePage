'use client'

import Link from 'next/link'
import styles from './Navbar.module.scss'
import { useTranslations } from 'next-intl'
import { useLocale } from 'next-intl'
import { usePathname } from 'next/navigation'
import { i18n } from '../../../i18n'

const Navbar = () => {
  const pathname = usePathname()
  const paths = pathname.split('/').filter(param => param !== '')
  const locale = useLocale()
  const t = useTranslations('nav')

  const navLinks = [
    { label: t('home'), href: `/${locale}/` },
    { label: t('download'), href: `/${locale}/download/` },
    { label: t('demo'), href: 'https://demo.openwebgal.com/' },
    { label: t('document'), href: 'https://docs.openwebgal.com/' },
    { label: 'GITHUB', href: 'https://github.com/MakinoharaShoko/WebGAL' }
  ]

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div>
          <Link href={`/${locale}/`}>
            <h1>WebGAL</h1>
          </Link>
        </div>
        <div className={styles.nav}>
          {
            navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.label}
                  className={isActive ? styles.active : 'text-black'}
                  href={link.href}
                >
                  {link.label}
                </Link>
              )
            })
          }
          {i18n.locales.map(lang =>
            <Link
              key={lang.code}
              href={`/${lang.code}/${(paths.slice(1).join('/'))}`}
              className={locale === lang.code ? styles.active : 'text-black'}
            >
              {lang.lang}
            </Link>
          )}

        </div >
      </div>
    </nav>
  )
}

export default Navbar