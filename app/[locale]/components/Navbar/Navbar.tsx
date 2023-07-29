'use client'

import Link from 'next/link'
import styles from './Navbar.module.css'
import { useLocale } from 'next-intl'
import { usePathname } from 'next/navigation'

import { RiGithubFill, RiDiscordFill, RiPatreonFill } from 'react-icons/ri'
import LocaleSelect from './LocaleSelect'
import Nav from './Nav'
import Image from 'next/image'

const Navbar = () => {
  const pathname = usePathname()
  const paths = pathname.split('/').filter(param => param !== '')
  const locale = useLocale()

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>

        <Link href={`/${locale}/`} className={styles['navbar-title']}>
          <Image src={'/images/logo.svg'} width={32} height={32} alt='logo' />
          <h1>WebGAL</h1>
        </Link>

        <div className={'flex flex-row-reverse items-center md:flex-row'}>

          <Nav locale={locale} pathname={pathname} />

          {/* 导航栏图标 */}
          <div className={'flex flex-row items-center'} >
            <div className={styles.icon}>
              <Link href={'https://github.com/MakinoharaShoko/WebGAL'} target={'_blank'} title='MakinoharaShoko/WebGAL'>
                <RiGithubFill />
              </Link>
            </div>
            <div className={styles.icon}>
              <Link href={'https://www.patreon.com/WebGAL'} target={'_blank'} title='Patreon'>
                <RiPatreonFill />
              </Link>
            </div>
            <div className={styles.icon}>
              <Link href={'https://discord.gg/kPrQkJttJy'} target={'_blank'} title='Discord'>
                <RiDiscordFill />
              </Link>
            </div>
            <LocaleSelect locale={locale} paths={paths} />
          </div>

        </div>

      </div>
    </nav>
  )
}

export default Navbar