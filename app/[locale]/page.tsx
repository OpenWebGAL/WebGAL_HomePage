'use client'

import WebGALGames from './components/WebGALGames/WebGALGames'
import TopVisual from './components/TopVisual/TopVisual'
import Features from './components/Features/Features'
import Feat from './components/Feat/Feat'
import Sponsor from './components/Sponsor/Sponsor'
import Contributor from './components/Contributor/Contributor'

export default function Home() {
  return (
    <main>
      <TopVisual />
      <Feat />
      <WebGALGames />
      <Features />
      <div className={'max-w-screen-xl mx-auto px-20 max-md:px-6 py-8 gap-4 grid grid-cols-2 max-md:grid-cols-1'}>
        <Sponsor />
        <Contributor />
      </div>
    </main >
  )
}
