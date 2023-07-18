'use client'

import { useTranslations } from 'next-intl'
import { gamesData } from '@/data/gamesData'
import GameCard from '@/app/components/GameCard/GameCard'
import { gamesDataSort } from '@/utils'
import Link from 'next/link'

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
        <div className={'px-4'}>
          <h2 className={'font-lg text-black'}>{t('disclaimer')}</h2>
          <p className='text-sm font-light text-gray-800'>{t('disclaimerInfo.line0')}</p>
          <p className='text-sm font-light text-gray-800'>{t('disclaimerInfo.line1')}</p>
          <p className='text-sm font-light text-gray-800'>{t('disclaimerInfo.line2')} <Link href={'mailto:Mahiru_@outlook.com'} target={'_top'}>Mahiru_@outlook.com</Link></p>

        </div>
      </div>
    </div>
  )
}

export default Games