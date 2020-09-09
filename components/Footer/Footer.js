import Head from 'next/head'
import Link from 'next/link'

import styles from './styles.module.scss'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <nav className={styles.footernav}>
        <ul className={styles.footernavList}>
          <li>
            fr / en
          </li>

          <li>
            mentions légales
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer