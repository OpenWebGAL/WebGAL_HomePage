import Button from '@/app/components/Button/Button'
import { useLocale } from 'next-intl'
import Link from 'next/link'
import styles from './TopVisual.module.css'

const TopVisual = () => {
  const locale = useLocale()

  return (
    <div className={styles.topVisual}>
      <div className={'max-w-screen-xl mx-auto h-full flex flex-col justify-end items-center gap-4 pb-36 text-center p-4'}>
        <h1 className={'text-5xl'}>WebGAL</h1>
        <p className={'text-xl'}>界面美观、功能强大、易于开发的全新网页端视觉小说引擎</p>
        <div className={'flex flex-row gap-4'}>
          <Button>
            <Link href={`/${locale}/download/`} >立即下载</Link>
          </Button>
          <Button>
            <Link href={'https://docs.openwebgal.com/'} target={'_blank'}>查看文档</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default TopVisual