import { Client } from '../../lib/prismic-configuration'
import { getSamplePacks } from '../../lib/api'
import { motion } from 'framer-motion'
import styles from '../../styles/Samples.module.scss'
import Head from 'next/head'
import { Layout, SliceZone } from '../../components'
import { default as NextLink } from 'next/link'

export default function SamplePack({ smp, slices }) {
  console.log(smp)
  console.log(slices)
  // console.log(slc)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Layout isPost={true}>
        <Head>
          <title>{`${smp.pack_name[0].text} pack`}</title>
        </Head>
        <section className={styles.smphead}>
          <figure>
            <img src={smp.pack_cover.url} alt={smp.pack_cover.alt} />
          </figure>
          <div className={styles.smpinfo}>
            <h1>{smp.pack_name[0].text}</h1>
          </div>
          <h2 className={styles.backlink}>
            <NextLink href='/samples'>
              <a>Back to Samples</a>
            </NextLink>
          </h2>
        </section>
        <section className={styles.smpbody}>
          <SliceZone sliceZone={slices} />
        </section>
      </Layout>
    </motion.div>
  )
}

export async function getStaticPaths() {
  const response = await getSamplePacks()
  const paths = response.results.map(({ uid }) => ({
    params: {
      uid
    }
  }))
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params, preview = null, previewData = {} }) {
  const { ref } = previewData
  const req = await Client().getByUID('sample_pack', params.uid, ref ? { ref } : null) || {}

  // All slices
  const slices = req.data.body
  // Sample pack
  const smp = req.data

  return {
    props: {
      smp,
      slices
    }
  }
}