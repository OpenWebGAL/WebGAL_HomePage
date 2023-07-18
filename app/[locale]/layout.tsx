import { Noto_Sans_SC } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl'
import { notFound } from 'next/navigation'
import { i18n } from '../../i18n'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'

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
    locales = (await import(`../../locales/${locale}.json`)).default
  } catch (error) {
    notFound()
  }

  return (
    <html lang={locale} className={notoSansSC.className}>
    <head>
      {/*Google tag (gtag.js)*/}
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-6XPF6Q2WY0"></script>
      <script dangerouslySetInnerHTML={{__html:`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-6XPF6Q2WY0');`}}/>
    </head>
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
  keywords: 'Visual Novel,Game Engine,Visual Editor,视觉小说,游戏引擎,可视化编辑器'
}
