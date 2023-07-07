import { Noto_Sans_SC } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'
import { i18n } from '../../i18n'
import Footer from './components/Footer'
import Navbar from './components/Navbar/Navbar'

const notoSansSC = Noto_Sans_SC({
  subsets: ['latin'],
  weight: '400',
})

export function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale: locale.code }))
}

export default async function LangLayout({ children, params: { locale } }
  : { children: React.ReactNode, params: { locale: string } }) {

  let locales
  try {
    locales = (await import(`../../locales/${locale}.json`)).default
  } catch (error) {
    notFound()
  }

  return (
    <html lang={locale} className={notoSansSC.className}>
      <body>
        <NextIntlClientProvider locale={locale} messages={locales}>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}

export const metadata = {
  title: 'WebGAL',
  description: 'A brand new web Visual Novel engine | 全新的网页端视觉小说引擎',
}
