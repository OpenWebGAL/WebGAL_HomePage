'use client'

import { useTranslations } from 'next-intl'

const BlogTitle = () => {
  const t = useTranslations('common')
  return (
    <h1 className={'text-2xl font-semibold pt-8 pb-4 px-4'}>{t('blog')}</h1>
  )
}

export default BlogTitle