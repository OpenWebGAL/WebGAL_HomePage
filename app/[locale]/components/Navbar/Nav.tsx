import { RiMenuFill } from 'react-icons/ri'
import styles from './Nav.module.css'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import useRedirect from '@/hooks/useRedirect'

const Nav = ({ locale, pathname }: { locale: string, pathname: string }) => {

  const t = useTranslations('common')
  const { docsRedirect } = useRedirect()

  const navData: { label: string, href: string }[] = [
    { label: t('home'), href: `/${locale}/` },
    { label: t('blog'), href: `/${locale}/blog/` },
    { label: t('download'), href: `/${locale}/download/` },
    { label: t('demo'), href: 'https://demo.openwebgal.com/' },
    { label: t('document'), href: docsRedirect('/') },
    { label: t('games'), href: `/${locale}/games/` },
  ]

  return (
    <div className={styles.nav}>
      <div className={styles.menuButton}>
        <RiMenuFill style={{ width: '24px', height: '24px' }} />
      </div>
      <div className={styles.navLinks}>
        {
          navData.map((link) => {
            const isActive = (link.href === `/${locale}/`) ? pathname === link.href : pathname.includes(link.href)
            return (
              <Link
                key={link.label}
                className={isActive ? styles.active : 'text-black'}
                href={link.href}
                target={link.href.startsWith('/') ? '_self' : '_blank'}
              >
                {link.label}
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}

export default Nav