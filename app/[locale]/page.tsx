'use client'

import styles from './Home.module.css'
import Games from './components/Games/Games'
import TopVisual from './components/TopVisual/TopVisual'
import Features from './components/Features/Features'

export default function Home() {
  return (
    <main className={styles.main}>
      <TopVisual />
      <Games />
      <Features />
    </main >
  )
}
