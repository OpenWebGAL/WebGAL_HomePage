'use client'

import Link from 'next/link'
import styles from './Home.module.scss'
import Games from './components/Games/Games'
import { useLocale } from 'next-intl'

export default function Home() {
  const locale = useLocale()
  return (
    <main className={styles.main}>
      <div className={styles.topVisual}>
        <div className={styles.container}>
          简单介绍
        </div>
      </div>

      <div className={'bg-white'}>
        <div >
          <div className={'max-w-screen-xl mx-auto'}>
            特性
          </div>
          <Games />
          <div className={'max-w-screen-xl mx-auto p-8 text-lg text-center'}>
            <Link href={`/${locale}/download/`}>立即下载 WebGAL 开始制作游戏吧！</Link>
          </div>
        </div>
      </div>
    </main >

  )
}
