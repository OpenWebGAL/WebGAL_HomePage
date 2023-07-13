import Button from '@/app/components/Button/Button'
import gameData from '@/data/gameData'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'

const Games = () => {
  const t = useTranslations('home')

  return (
    <div className={'flex flex-row flex-wrap justify-center item-center p-4 pb-8 gap-4 text-center bg-white'}>
      <div className={'w-full pt-2'}>
        <h2 className={'text-xl font-medium'}>{t('webgalGames')}</h2>
        <p className={'text-gray-700 font-normal'}>{t('webgalGamesInfo')}</p>
      </div>
      <div className={'w-full flex flex-row flex-wrap justify-center item-center gap-4'}>
        {
          gameData.map((game, index) =>
            <div key={index} className={'bg-white drop-shadow rounded-md hover:drop-shadow-md hover:-translate-y-0.5 transition-transform'} >
              <Link href={game.url} target={'_blank'} className={'flex flex-col justify-center items-center'} >
                <Image src={game.cover} alt={game.title} width={0} height={0} className={'w-80 h-44 object-cover shadow-inner rounded-t-md'} />
                <p className={'text-center p-2 text-gray-700'}>{game.title}</p>
              </Link>
            </div>
          )
        }
      </div>
      <Button>
        <Link href={'mailto:Mahiru_@outlook.com'}> {t('showCaseYourGame')}</Link>
      </Button>
    </div>
  )
}

export default Games