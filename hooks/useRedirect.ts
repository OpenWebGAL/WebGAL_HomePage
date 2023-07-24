import { useLocale } from 'next-intl'

const useRedirect = () => {

  const locale = useLocale()

  const docsRedirect = (label: string) => {
    const docsPath = 'https://docs.openwebgal.com'
    const localePath = locale === 'zh-cn' ? docsPath : `${docsPath}/${locale}`
    return `${localePath}${label}`
  }

  return { docsRedirect }

}

export default useRedirect
