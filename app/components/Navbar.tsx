'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import styles from './Navbar.module.scss'
import Image from 'next/image'

const Navbar = () => {
  const pathname = usePathname()

  const navLinks = [
    { label: 'HOME', href: '/' },
    { label: 'DOWNLOAD', href: '/download/' },
    { label: 'DEMO', href: 'https://demo.openwebgal.com/' },
    { label: 'DOCUMENTS', href: 'https://docs.openwebgal.com/' },
    { label: 'GITHUB', href: 'https://github.com/MakinoharaShoko/WebGAL' }
  ]

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div>
          <Link href={'/'}>
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
                  target={/^\//.test(link.href) ? '_self' : '_blank'}
                >
                  {link.label}
                </Link>
              )
            })
          }
        </div >
      </div>
    </nav>
  )
}

export default Navbar