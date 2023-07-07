import Link from 'next/link'
import styles from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Powered by <Link href="https://github.com/MakinoharaShoko/WebGAL" target="_blank">WebGAL</Link> Framework</p>
      <p>Made with ❤ by <Link href="https://github.com/MakinoharaShoko" target="_blank">Mahiru</Link></p>
      <p>
        WebGAL is licensed under the <Link href="https://github.com/MakinoharaShoko/WebGAL/blob/main/LICENSE" target="_blank" >Mozilla Public License 2.0</Link> (MPL-2.0)
      </p>
    </footer>
  )
}

export default Footer