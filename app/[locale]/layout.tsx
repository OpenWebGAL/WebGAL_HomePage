import { Noto_Sans_SC } from 'next/font/google'
import { NextIntlClientProvider, createTranslator } from 'next-intl'
import { notFound } from 'next/navigation'
import { i18n } from '../../i18n'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Script from 'next/script'

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
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-6XPF6Q2WY0" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          
          gtag('config', '6XPF6Q2WY0');
        `}
        </Script>
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

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const messages = (await import(`../../locales/${locale}.json`)).default

  const t = createTranslator({ locale, messages })

  return {
    metadataBase: new URL('https://openwebgal.com'),
    title: 'WebGAL',
    description: t('metadata.home.description'),
    keywords: t('metadata.home.keywords'),
    openGraph: {
      title: 'WebGAL',
      description: t('metadata.home.description'),
      url: `/${locale}`,
      images: [
        {
          url: '/images/opengraph-image.png',
          width: 512,
          height: 512,
        },
      ],
    },
    // twitter: {
    //   card: 'summary_large_image', // Twitter 大卡片
    // },
  }
}
