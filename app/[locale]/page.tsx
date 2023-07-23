'use client'

import styles from './Home.module.css'
import WebGALGames from './components/WebGALGames/WebGALGames'
import TopVisual from './components/TopVisual/TopVisual'
import Features from './components/Features/Features'
import Feat from './components/Feat/Feat'

export default function Home() {
  return (
    <main className={styles.main}>
      <TopVisual />
      <Feat />
      <WebGALGames />
      <Features />
    </main >
  )
}
