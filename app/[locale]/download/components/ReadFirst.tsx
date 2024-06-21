'use client'

import {useTranslations} from 'next-intl'
import styles from '../Download.module.css'
import Link from 'next/link'
import useRedirect from '@/hooks/useRedirect'

const ReadFirst = () => {

  const t = useTranslations('download.readFirst')
  const {docsRedirect} = useRedirect()

  return (
    <div className={styles.card}>
      <div className={'text-sm font-light space-y-1'}>
        <div className={styles.hlrf}>
          <p>{t('firstUse.part0')}
            <Link className={styles.link} href={docsRedirect('/')}
                  target={'_blank'}>
              {t('firstUse.part1')}
            </Link>
            {t('firstUse.part2')}
          </p>
        </div>
        <p className={styles.p}>{t('getHelp')}</p>
        <p className={styles.p}>{t('webGALScriptBasics.part0')} <Link
          href={'https://marketplace.visualstudio.com/items?itemName=Xuran1783558957.webgal-for-vscode'} target={'_blank'}>WebGAL
          for VSCode</Link> {t('webGALScriptBasics.part1')}</p>
      </div>
    </div>
  )
}

export default ReadFirst
