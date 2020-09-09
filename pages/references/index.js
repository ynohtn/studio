import { Client } from '../../lib/prismic-configuration'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { getReferenceData } from '../../lib/api'
import styles from '../../styles/References.module.scss'

import Head from 'next/head'
import { default as NextLink } from 'next/link'
import { Layout, RefCard, Header } from '../../components'


export default function References({ doc, items, menu }) {
  // const itemsRef = useRef([]);
  // const [data, setData] = useState([]);
  // console.log(doc)
  // console.log(items)

  useEffect(() => {

    // itemsRef.current = new Array(data.length)

    // setData(data)
    // console.log(data)

    // // itemsRef.current = itemsRef.current.slice(0, data.length)
    // // console.log(itemsRef)

    gsap.fromTo('#griditem',
      {
        y: 100,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.1
      }
    )
  }, [])

  return (
    <Layout>
      <Head>
        {/*Primary Meta Tags*/}
        <title>References</title>
        <meta name="title" content="References from Studio" />
        <meta name="description" content="Discover who we work with and what we love to do to your sound, finest audio engineering in Studio" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://studio-seven.vercel.app/references" />
        <meta property="og:title" content="References from Studio" />
        <meta property="og:description" content="Discover who we work with and what we love to do to your sound, finest audio engineering in Studio" />
        <meta property="og:image" content="/meta-cover.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="/meta-cover.jpg" />
        <meta property="twitter:url" content="https://studio-seven.vercel.app/references" />
        <meta property="twitter:title" content="References from Studio" />
        <meta property="twitter:description" content="Discover who we work with and what we love to do to your sound, finest audio engineering in Studio" />
        <meta property="twitter:image" content="/meta-cover.jpg" />
      </Head>

      <Header menu={menu} />

      <h1>{doc.data.single_title[0].text}</h1>

      <div className={styles.grid}>
        {items.map((item, i) => (
          <NextLink key={i} href={'references/[uid]'} as={`references/${item.reference.uid}`}
            // ref={el => itemsRef.current[i] = el}
          >
              <a id={`griditem`}>
                <RefCard
                  name={item.reference.artist_name[0].text}
                  track={item.reference.track_name[0].text}
                  cover={item.reference.cover}
                />
              </a>
            </NextLink>
          ))}
      </div>

      <h2 className={styles.backlink}>
        <NextLink href='/'>
          <a>Back to Home</a>
        </NextLink>
      </h2>
    </Layout>
  )
}

export async function getStaticProps({ preview = null, previewData = {} }) {

  const { ref } = previewData

  const client = Client()

  const doc = await client.getSingle('references', ref ? { ref } : null) || {}
  const menu = await client.getSingle('menu', ref ? { ref } : null) || {}

  const references = doc.data.body
  const index = references.findIndex((data) => data['slice_type'] === 'list_of_articles')
  const items = await getReferenceData(references[index].items)

  return {
    props: {
      doc,
      menu,
      items,
      preview
    }
  }
}