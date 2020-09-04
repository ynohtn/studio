import Head from 'next/head'
import Link from 'next/link'

import styles from './styles.module.scss'

// TODO : replace create-next-app footer by custom one 
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a
        href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
        target='_blank'
        rel='noopener noreferrer'
      >
        Powered by{' '}
        <img src='/vercel.svg' alt='Vercel Logo' className={styles.logo} />
      </a>
    </footer>
  )
}

export default Footer