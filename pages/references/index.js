import { Client } from '../../lib/prismic-configuration'
import { getReferenceData } from '../../lib/api'

import styles from '../../styles/References.module.scss'

import Head from 'next/head'
import { default as NextLink } from 'next/link'
import { Layout, RefCard } from '../../components'


export default function References({ res, items }) {
  console.log(res)
  console.log(items)

  return (
    <Layout>
      <Head>
        <title>REFERENCES</title>
      </Head>

      <h1>{res.data.single_title[0].text}</h1>
      
      <ul className={styles.grid}>
        {items.map((item, i) => (
          <NextLink key={i} href={`references/${item.reference.uid}`}>
            <a>
              <RefCard
                name={item.reference.artist_name[0].text}
                track={item.reference.track_name[0].text}
                cover={item.reference.cover}
              />
            </a>
          </NextLink>
          )
        )}
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
  const res = await Client(req).getSingle('references')

  const references = res.data.body
  const index = references.findIndex((data) => data['slice_type'] === 'list_of_articles')
  const items = await getReferenceData(references[index].items)

  return {
    props: {
      res,
      items
    }
  }
}