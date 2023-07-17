import Button from '@/app/components/Button/Button'
import GameCard from '@/app/components/GameCard/GameCard'
import { gamesData, homeGamesId } from '@/data/gamesData'
import { gamesDataSort } from '@/utils'
import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'

const WebGALGames = () => {
  const t = useTranslations('games')
  const locale = useLocale()

  return (
    <div className={'flex flex-row flex-wrap justify-center item-center p-4 pb-8 gap-4 text-center bg-white'}>
      <div className={'w-full pt-2'}>
        <h2 className={'text-2xl font-semibold p-2'}>{t('webgalGames')}</h2>
        {/* <p className={'text-gray-700 font-normal'}>{t('webgalGamesInfo')}</p> */}
      </div>
      <div className={'max-w-screen-xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 px-4 gap-4'}>
        {
          gamesDataSort(gamesData, 'date')
            .filter(game => homeGamesId.find(id => id === game.id))
            .map((game) =>
              <GameCard game={game} key={game.id} />
            )
        }
      </div>
      <div className={'flex flex-row justify-center w-full gap-4'}>
        <Button>
          <Link href={'https://docs.openwebgal.com/guide/showcase-your-game'} target={'_blank'}> {t('showCaseYourGame')}</Link>
        </Button>
        <Button>
          <Link href={`/${locale}/games/`}> {t('viewMoreGames')}</Link>
        </Button>
      </div>

    </div>
  )
}

export default WebGALGames