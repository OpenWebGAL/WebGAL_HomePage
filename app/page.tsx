import Image from 'next/image'
import Script from 'next/script'

export default function RootPage() {
  // redirect(`/${i18n.defaultLocale}`)
  return (
    <html>
      <head>
        <title>WebGAL</title>
        <meta name="description" content="A brand new web Visual Novel engine | 全新的网页端视觉小说引擎 | 未だかつてない Web ベースビジュアルノベルエンジン" />
      </head>
      <body>
        <div className='flex justify-center items-center h-screen w-full'>
          <div className='flex flex-row justify-center items-end w-fit gap-4'>
            <Image src={'/images/logo.svg'} width={64} height={64} alt='logo' />
            <div>
              <h1 className='text-xl font-semibold'>WebGAL HomePage</h1>
              <p className='text-lg text-gray-800'>Loading...</p>
            </div>
          </div>
        </div>
        <Script id='redirect'>
          {`
          // 添加语言后需要在下面数组添加语言代码才能正常跳转
          if (['zh-cn','en','ja'].find(langCode => langCode === navigator.language.toLowerCase()))
            window.location.replace('./' + navigator.language.toLowerCase())
          else
            window.location.replace('/en')
          `}
        </Script>
      </body>
    </html>
  )
}