import { Client } from '../../lib/prismic-configuration'
import { getSamplePackData } from '../../lib/api'

import styles from '../../styles/Samples.module.scss'

import Head from 'next/head'
import { default as NextLink } from 'next/link'
import { Layout, SmpCard } from '../../components'


export default function Samples({ res, items }) {
  console.log(res)
  console.log(items)

  return (
    <Layout>
      <Head>
        <title>SAMPLES</title>
      </Head>

      <h1>{res.data.samples_title[0].text}</h1>

      <ul className={styles.grid}>
        {items.map((item, i) => (
          <NextLink key={i} href={`samples/${item.sample.uid}`}>
            <a>
              <SmpCard
                name={item.sample.pack_name[0].text}
                cover={item.sample.pack_cover}
              />
            </a>
          </NextLink>
        ))}
      </ul>
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
  const res = await Client(req).getSingle('samples')

  const samples = res.data.body
  const index = samples.findIndex((data) => data['slice_type'] === 'list_of_articles')
  const items = await getSamplePackData(samples[index].items)
  // const items = samples[index].items

  return {
    props: {
      res,
      items
    }
  }
}