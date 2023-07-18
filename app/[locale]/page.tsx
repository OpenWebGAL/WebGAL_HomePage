'use client'

import styles from './Home.module.css'
import WebGALGames from './components/WebGALGames/WebGALGames'
import TopVisual from './components/TopVisual/TopVisual'
import Features from './components/Features/Features'

export default function Home() {
  return (
    <main className={styles.main}>
      <TopVisual />
      <WebGALGames />
      <Features />
    </main >
  )
}
