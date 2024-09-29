import { Noto_Sans_SC } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'
import { i18n } from '../../i18n'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import { GoogleAnalytics } from '@next/third-parties/google'

const notoSansSC = Noto_Sans_SC({
  subsets: ['latin'],
  weight: ['100', '300', '400', '500', '700', '900'],
})

export function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale: locale.code }))
}

export default async function LangLayout({ children, params: { locale } }
  : { children: React.ReactNode, params: { locale: string } }) {

  let locales
  try {
    locales = (await import(`/locales/${locale}.json`)).default
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
        <GoogleAnalytics gaId="G-6XPF6Q2WY0" />
      </body>
    </html>
  )
}
