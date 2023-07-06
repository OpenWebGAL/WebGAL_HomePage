import styles from './Download.module.scss'

const Download = () => {
  return (
    <div className={styles.download}>
      <div className={styles.container}>
        <div style={{ height: '20rem', backgroundColor: '#485BB5' }}>
          WebGAL 编辑器下载
        </div>
        <div style={{ height: '20rem', backgroundColor: '#b5495b' }}>
          WebGAL下载
        </div>
      </div>
    </div>
  )
}

export default Download