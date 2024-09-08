'use client'

import Button from '@/components/Button/Button'
import {useLocale, useTranslations} from 'next-intl'
import Link from 'next/link'
import styles from './TopVisual.module.css'
import Image from 'next/image'
import {useEffect, useState} from 'react'
import useRedirect from '@/hooks/useRedirect'

const TopVisual = () => {
  const t = useTranslations('home')
  const locale = useLocale()
  const {docsRedirect} = useRedirect()

  const topVisualImagesData = [
    {
      title: 'game',
      src: '/images/game.webp',
    },
    {
      title: 'terre',
      src: '/images/terre.webp',
    },
    {
      title: 'title',
      src: '/images/title.webp',
    },
  ]

  const [topVisualImageIndex, setTopVisualImageIndex] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setTopVisualImageIndex(() => {
        if (topVisualImageIndex === topVisualImagesData.length - 1)
          return 0
        else
          return topVisualImageIndex + 1
      })
    }, 3000)
    return () => {
      clearInterval(timer)
    }
  }, [topVisualImageIndex, topVisualImagesData.length])

  const docsLocale = locale === 'zh-cn' ? '' : `/${locale}`

  return (
    <div className={styles.topVisual}>
      <div className={styles.background}>
        {/* <Image src={'/images/main.webp'} fill alt='background' className={'object-cover object-center'} /> */}
      </div>
      <div className={styles.container}>
        <div className={styles.titlearea}>
          <h1 className={'text-5xl font-bold'} style={{display: 'block'}}>{t('title-l1')}</h1>
          <h1 className={'text-5xl font-bold'} style={{display: 'block'}}>{t('title-l2')}</h1>
          <p className={'text-lg'}>{t('subTitle')}</p>
          <div className={'flex flex-row items-center gap-4 flex-wrap'}>
            <Button large>
              <Link href={`/${locale}/download/`}>{t('nowDownload')}</Link>
            </Button>
            <Button large>
              <Link href={docsRedirect('/')} target={'_blank'}>{t('viewDocument')}</Link>
            </Button>
            <Button large>
              <Link href={`https://docs.openwebgal.com${docsLocale}/sponsor/`}>{t('sponsor')}</Link>
            </Button>
          </div>
          <div className={'flex flex-row justify-center items-center gap-4 pt-2'}>
            <a
              href="https://www.producthunt.com/posts/webgal?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-webgal"
              target="_blank"><img
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=443280&theme=light"
              alt="WebGAL - Galgame&#0032;Editing&#0046;&#0032;Redefined | Product Hunt"
              style={{width: 250, height: 54}} width="250" height="54"/></a>
          </div>
        </div>
        <div className={styles.card}>
          {
            topVisualImagesData.map((item, index) =>
              <Image
                key={index}
                src={item.src}
                alt={item.title}
                width={720}
                height={1280}
                className={styles['card-image']}
                style={index === topVisualImageIndex ? {display: 'block'} : {display: 'none'}}
                priority
              />
            )

          }
        </div>
      </div>
    </div>
  )
}

export default TopVisual
