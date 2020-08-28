import Head from 'next/head'
import { Client } from '../lib/prismic-configuration'
import { Layout, SliceZone } from '../components'
import styles from '../styles/Home.module.scss'

export default function Home({ res }) {
  
  console.log(res)

  return (
    <Layout>
      <Head>
        <title>STUDIO</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <h1>STUDIO</h1>
        <SliceZone sliceZone={res.data.page_content} />
      </div>

    </Layout>
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