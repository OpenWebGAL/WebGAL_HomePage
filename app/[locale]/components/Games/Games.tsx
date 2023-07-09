import gameData from '@/data/gameData'
import Image from 'next/image'
import Link from 'next/link'

const Games = () => {

  return (
    <div className={'flex flex-row flex-wrap justify-center item-center p-4 pb-8 gap-4 bg-gray-50 text-center'}>
      <h2 className={'w-full pt-2 text-xl'}>使用 WebGAL 创作的游戏</h2>
      <p className={'w-full pb-2 text-sm text-gray-700'}>我们挑选了一些使用 WebGAL 创作的游戏，如果想要展示您的游戏，请发送电子邮件<Link href={'mailto:Mahiru_@outlook.com'}>申请</Link></p>
      {
        gameData.map((game, index) =>
          <div key={index} className={'bg-white shadow rounded hover:shadow-md'} >
            <Link href={game.url} target={'_blank'} className={'flex flex-col justify-center items-center'} >
              <Image src={game.cover} alt={game.title} width={0} height={0} className={'w-80 h-44 object-cover shadow-inner rounded-t'} />
              <p className={'text-center p-2 text-gray-700 font-light'}>{game.title}</p>
            </Link>
          </div>
        )
      }
    </div>
  )
}

export default Games