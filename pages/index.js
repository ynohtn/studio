import { Client } from '../lib/prismic-configuration'
import TextLoop from 'react-text-loop'
// import {useEffect} from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { Layout, SliceZone } from '../components'
import styles from '../styles/Home.module.scss'

export default function Home({ res }) {

  // console.log(res)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Layout>
        <Head>
          {/*Primary Meta Tags*/}
          <title>{res.data.site_name[0].text}</title>
          <meta name="title" content="Studio" />
          <meta name="description" content="Discover who we work with and what we love to do to your sound, finest audio engineering at Studio in Paris" />

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://studio-seven.vercel.app/" />
          <meta property="og:title" content="Studio" />
          <meta property="og:description" content="Discover who we work with and what we love to do to your sound, finest audio engineering at Studio in Paris" />
          <meta property="og:image" content="/meta-cover.jpg" />

          {/* Twitter */}
          <meta property="twitter:card" content="/meta-cover.jpg" />
          <meta property="twitter:url" content="https://studio-seven.vercel.app/" />
          <meta property="twitter:title" content="Studio" />
          <meta property="twitter:description" content="Discover who we work with and what we love to do to your sound, finest audio engineering at Studio in Paris" />
          <meta property="twitter:image" content="/meta-cover.jpg" />
          <link rel='icon' href='/favicon.ico' />
        </Head>

        <div className={styles.homectn}>
          <h1 className={styles.hometitle}>{res.data.site_name[0].text}</h1>
          <h2 className={styles.homesubtitle}>
            <span className={styles.space}>We love</span>
            <TextLoop>
              <span>producing</span>
              <span>mixing</span>
              <span>mastering</span>
              <span>your music</span>
            </TextLoop>{' '}
          </h2>
        </div>

      </Layout>
    </motion.div>
  )
}

export async function getStaticProps(context) {
  const req = context.req
  const res = await Client(req).getSingle('homepage')

  return {
    props: {
      res
    }
  }
}