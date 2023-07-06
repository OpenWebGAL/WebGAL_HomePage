import styles from './Home.module.scss'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.topVisual}>
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
    </main >

  )
}
