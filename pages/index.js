import Head from 'next/head'
import { Client } from '../lib/prismic-configuration'
import { motion } from 'framer-motion'
import { Layout, SliceZone } from '../components'
import styles from '../styles/Home.module.scss'

export default function Home({ res }) {
  
  console.log(res)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Layout>
        <Head>
          <title>STUDIO</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className={styles.homectn}>
          <h1 className={styles.hometitle}>{res.data.site_name[0].text}</h1>
          {/* <SliceZone sliceZone={res.data.page_content} /> */}
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