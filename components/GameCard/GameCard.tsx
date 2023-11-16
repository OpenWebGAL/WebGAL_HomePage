import Link from 'next/link'
import Image from 'next/image'
import { Game } from '@/types'
import styles from './GameCard.module.css'

const GameCard = ({ game }: { game: Game }) => {
  return (
    <div className={styles.card} >
      <Link href={game.url} target={'_blank'} className={styles.link} >
        <div className={styles.imageContainer}>
          <Image src={`/images/games/${game.cover}`} alt={game.title} width={0} height={0} className={styles.image} />
        </div>
        <div className={styles.info}>
          <p className={styles.title}>{game.title}</p>
          <p className={styles.developer}>{game.developer}</p>
        </div>
      </Link>
    </div>
  )
}

export default GameCard