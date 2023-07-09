import Button from '@/app/components/Button/Button'
import { useLocale } from 'next-intl'
import Link from 'next/link'

const Features = () => {
  const locale = useLocale()
  return (
    <div className={'bg-white'}>

      <div className={'max-w-screen-xl mx-auto space-y-4 p-4 text-center '}>
        <div>
          <h2>界面美观</h2>
          <p>美观优雅的图形用户界面与交互效果，一切都是为了更好的用户体验。</p>
        </div>
        <div>
          <h2>功能强大</h2>
          <p>不仅支持主流视觉小说引擎所具有的几乎全部功能，你还可以使用 Pixi.js 为你的游戏添加自定义效果。</p>
        </div>
        <div>
          <h2>易于开发</h2>
          <p>无论是使用 WebGAL 脚本还是使用可视化编辑器进行开发，一切都是那么简单自然。</p>
        </div>
      </div>

      <div className={'max-w-screen-xl mx-auto space-y-4 p-4 flex flex-col justify-center items-center text-center'}>
        <p>一次编写，处处运行，无需网页开发基础，3 分钟即可学会所有的语法，只要你有灵感，就可以立刻开始开始创作你自己的 视觉小说！</p>
        <Button>
          <Link href={`/${locale}/download/`}>立即下载 WebGAL 开始创作游戏吧！</Link>
        </Button>
      </div>
    </div>

  )
}

export default Features