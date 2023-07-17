'use client'

import { useTranslations } from 'next-intl'
// import styles from './Games.module.css'
import { gamesData } from '@/data/gamesData'
import GameCard from '@/app/components/GameCard/GameCard'
import { gamesDataSort } from '@/utils'

const Games = () => {
  const t = useTranslations('games')
  return (
    <div className={'pt-16 pb-4'}>
      <div className={'max-w-screen-xl mx-auto space-y-4'}>
        <h1 className={'text-2xl font-semibold pt-8 pb-4 px-4'}>{t('webgalGames')}</h1>
        <div className={'w-max-fit grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 justify-center p-4 gap-4'}>
          {
            gamesDataSort(gamesData, 'date')
              .map((game) =>
                <GameCard game={game} key={game.id} />
              )
          }
        </div>
      </div>
    </div>
  )
}

export default Games