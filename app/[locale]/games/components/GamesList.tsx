import { games } from '@/data/games'
import GameCard from '@/app/components/GameCard/GameCard'
import { gamesSort } from '@/utils'

const GamesList = () => {
  return (
    <div className={'w-max-fit grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 justify-center p-4 gap-4'}>
      {
        gamesSort(games, 'date')
          .map((game) =>
            <GameCard game={game} key={game.id} />
          )
      }
    </div>
  )
}

export default GamesList