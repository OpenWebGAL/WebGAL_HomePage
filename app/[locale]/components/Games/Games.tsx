import gameData from '@/data/gameData'
import Image from 'next/image'
import Link from 'next/link'

const Games = () => {

  return (
    <div className={'p-4 pb-8 flex flex-row flex-wrap justify-center item-center gap-4 bg-gray-100'}>
      <h1 className={'w-full p-2 text-xl text-center '}>使用 WebGAL 开发的游戏</h1>
      {
        gameData.map((game, index) =>
          <div key={index} className={'bg-white shadow-sm rounded hover:shadow'}>
            <Link href={game.url} target={'_blank'} className={'flex flex-col justify-center items-center'}>
              <Image src={game.cover} width={320} height={160} alt={game.title} className={'shadow-inner rounded-t'} />
              <p className={'text-center p-2'}>{game.title}</p>
            </Link>
          </div>
        )
      }
    </div>
  )
}

export default Games