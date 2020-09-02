import { Client } from '../../lib/prismic-configuration'
import { useEffect } from 'react'
import { gsap} from 'gsap'
import { motion } from 'framer-motion'
import { fadeInUp } from '../../lib/animation'
import { getReferenceData } from '../../lib/api'
import styles from '../../styles/References.module.scss'

import Head from 'next/head'
import { default as NextLink } from 'next/link'
import { Layout, RefCard } from '../../components'


export default function References({ res, items }) {
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
          <title>REFERENCES</title>
        </Head>

        <h1>{res.data.single_title[0].text}</h1>
        
        <motion.div className={styles.grid}>

          {items.map((item, i) => (
            <motion.div key={i} id={`griditem`} variants={fadeInUp}>
              <NextLink href={'references/[uid]'} as={`references/${item.reference.uid}`}>
                <a>
                  <RefCard
                    name={item.reference.artist_name[0].text}
                    track={item.reference.track_name[0].text}
                    cover={item.reference.cover}
                  />
                </a>
              </NextLink>
            </motion.div>
            )
          )}
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
  const res = await Client(req).getSingle('references')

  const references = res.data.body
  const index = references.findIndex((data) => data['slice_type'] === 'list_of_articles')
  // const items = references[index].items
  const items = await getReferenceData(references[index].items)

  return {
    props: {
      res,
      items
    }
  }
}