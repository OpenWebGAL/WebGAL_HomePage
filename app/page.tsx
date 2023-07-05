import styles from './Home.module.scss'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className={styles.main}>
      <div style={{
        height: '100%',
        background: 'linear-gradient(rgba(255, 255, 255, 0.35), rgba(255, 255, 255, .25))',
        paddingTop: '4rem',
      }}>
        <div className={styles.container}>
          简单介绍
        </div>
      </div>

      <div style={{ backgroundColor: '#fff' }}>
        <div className={styles.container}>
          <div style={{ height: '20rem' }}>
            特性
          </div>
          <div style={{ height: '20rem' }}>
            使用 WebGAL 制作的游戏
          </div>
          <div style={{ height: '10rem' }}>
            立即下载
          </div>
        </div>
      </div>
      <Footer />
    </main>

  )
}
