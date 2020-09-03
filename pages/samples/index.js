import { Client } from '../../lib/prismic-configuration'
import { useEffect } from 'react'
import { gsap } from 'gsap'
import { motion } from 'framer-motion'
import { stagger, fadeInUp } from '../../lib/animation'
import { getSamplePackData } from '../../lib/api'
import styles from '../../styles/Samples.module.scss'

import Head from 'next/head'
import { default as NextLink } from 'next/link'
import { Layout, SmpCard  } from '../../components'

export default function Samples({ res, items }) {

  // console.log(res)
  // console.log(items)

  useEffect(() => {
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Layout>
        <Head>

          {/*Primary Meta Tags*/}
          <title>Samples</title>
          <meta name="title" content="Samples from Studio"/>
          <meta name="description" content="Discover sample packs made with love by passionnate musicians and audio engineers in Studio"/>

          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website"/>
          <meta property="og:url" content="https://studio-infb8vyzm.vercel.app/samples"/>
          <meta property="og:title" content="Samples from Studio"/>
          <meta property="og:description" content="Discover sample packs made with love by passionnate musicians and audio engineers in Studio"/>
          <meta property="og:image" content="/meta-cover.jpg"/>

          {/* Twitter */}
          <meta property="twitter:card" content="/meta-cover.jpg"/>
          <meta property="twitter:url" content="https://studio-infb8vyzm.vercel.app/samples"/>
          <meta property="twitter:title" content="Samples from Studio"/>
          <meta property="twitter:description" content="Discover sample packs made with love by passionnate musicians and audio engineers in Studio"/>
          <meta property="twitter:image" content="/meta-cover.jpg"/>
          
        </Head>

        <h1>{res.data.samples_title[0].text}</h1>

        <motion.div variants={stagger} className={styles.grid}>
          {items.map((item, i) => (
            <motion.div key={i} id={`griditem`} variants={fadeInUp}>
              <NextLink href={'samples/[uid]'} as={`samples/${item.sample.uid}`}>
                <a>
                  <SmpCard
                    name={item.sample.pack_name[0].text}
                    cover={item.sample.pack_cover}
                  />
                </a>
              </NextLink>
            </motion.div>
          ))}
        </motion.div>
        <h2 className={styles.backlink}>
          <NextLink href='/'>
            <a>Back to Home</a>
          </NextLink>
        </h2>
      </Layout>
    </motion.div>
  )
}

export async function getStaticProps(context) {

  const req = context.req
  const res = await Client(req).getSingle('samples')

  const samples = res.data.body
  const index = samples.findIndex((data) => data['slice_type'] === 'list_of_articles')
  // const items = samples[index].items
  const items = await getSamplePackData(samples[index].items)

  return {
    props: {
      res,
      items
    }
  }
}