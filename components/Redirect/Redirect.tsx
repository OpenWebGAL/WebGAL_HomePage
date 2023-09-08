import Image from 'next/image'
import Script from 'next/script'

const Redirect = ({ title, url }: { title: string, url: string }) => {
  return (
    <div>
      <div className='flex justify-center items-center h-screen w-full'>
        <div className='flex flex-row justify-center items-end w-fit gap-4'>
          <Image src={'/images/logo.svg'} width={64} height={64} alt='logo' />
          <div>
            <h1 className='text-xl font-semibold'>{title}</h1>
            <p className='text-lg text-gray-800'>Redirecting...</p>
          </div>
        </div>
      </div>
      <Script id='redirect'>
        {`
          // 添加语言后需要在下面数组添加语言代码才能正常跳转
          if (['zh-cn','en','ja'].find(langCode => langCode === navigator.language.toLowerCase()))
            window.location.replace('/' + navigator.language.toLowerCase() + '${url}')
          else
            window.location.replace('/en${url}')
          `}
      </Script>
    </div>
  )
}

export default Redirect