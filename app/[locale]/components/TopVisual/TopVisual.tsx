import Button from '@/app/components/Button/Button'
import { useLocale } from 'next-intl'
import Link from 'next/link'
import styles from './TopVisual.module.css'
import Image from 'next/image'

const TopVisual = () => {
  const locale = useLocale()

  return (
    <div className={styles.topVisual}>
      <div className={styles.background}>
        {/* <Image src={'/images/main.webp'} fill alt='background' className={'object-cover object-center'} /> */}
      </div>
      <div className={styles.container}>
        <div className={'flex flex-col item-center gap-2 pb-4 pt-20 text-center'}>
          <h1 className={'text-5xl font-bold'}>WebGAL</h1>
          <p className={'text-xl font-medium'}>界面美观、功能强大、易于开发的全新网页端视觉小说引擎</p>
          <div className={'flex flex-row justify-center items-center gap-4'}>
            <Button>
              <Link href={`/${locale}/download/`} >立即下载</Link>
            </Button>
            <Button>
              <Link href={'https://docs.openwebgal.com/'} target={'_blank'}>查看文档</Link>
            </Button>
          </div>
        </div>
        <div className={styles.card}>
          <Image
            src={'/images/terre.webp'}
            width={720}
            height={1280}
            alt='background'
            className={styles['card-image']} />
        </div>
      </div>
    </div>
  )
}

export default TopVisual