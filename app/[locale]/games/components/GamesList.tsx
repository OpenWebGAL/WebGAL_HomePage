import { gamesData } from '@/data/gamesData'
import GameCard from '@/app/components/GameCard/GameCard'
import { gamesDataSort } from '@/utils'

const GamesList = () => {
  return (
    <div className={'w-max-fit grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 justify-center p-4 gap-4'}>
      {
        gamesDataSort(gamesData, 'date')
          .map((game) =>
            <GameCard game={game} key={game.id} />
          )
      }
    </div>
  )
}

export default GamesList