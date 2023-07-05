import Footer from './components/Footer'
import Navbar from './components/Navbar'
import './globals.scss'
import { Noto_Sans_SC } from 'next/font/google'

const notoSansSC = Noto_Sans_SC({
  subsets: ['latin'],
  weight: '400',
})

export const metadata = {
  title: 'WebGAL',
  description: 'A brand new web Visual Novel engine | 全新的网页端视觉小说引擎',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className={notoSansSC.className}>
        <Navbar />
        {children}
      </body>
    </html >
  )
}
