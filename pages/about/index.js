import { Client } from '../../lib/prismic-configuration'
import { default as NextLink } from 'next/link'

import styles from '../../styles/About.module.scss'
import Head from 'next/head'
import { Layout, SliceZone } from '../../components'


export default function About({ res, slices }) {

  console.log(res)
  console.log(slices)


  return (
    <Layout>
      <Head>
        <title>ABOUT</title>
      </Head>
      <h1>ABOUT PAGE</h1>
      <section className={styles.aboutbody}>
        <SliceZone sliceZone={slices} />
      </section>
      <h2>
        <NextLink href="/">
          <a>Back to home</a>
        </NextLink>
      </h2>
    </Layout>
  )
}

export async function getStaticProps(context) {
  const req = context.req
  const res = await Client(req).getSingle('about')

  const slices = res.data.body
  // const index = slices.findIndex((data) => data['slice_type'] === 'slider')
  // slices[index].items = await getProjectsData(slices[index].items)

  return {
    props: {
      slices,
      res
    }
  }
}