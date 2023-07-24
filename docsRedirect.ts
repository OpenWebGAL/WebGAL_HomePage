import { useLocale } from 'next-intl'

export const docsRedirect = (
  label: '/' | '/developers' | '/tech' | '/sponsor' | '/guide' | '/guide/showcase-your-game'
) => {
  const docsPath = 'https://docs.openwebgal.com'
  const locale = useLocale()
  const localePath = locale === 'zh-cn' ? docsPath : `${docsPath}/${locale}`
  return `${localePath}${label}`
}