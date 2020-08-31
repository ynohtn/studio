import { Client } from '../../lib/prismic-configuration'
import { getReferences } from '../../lib/api'
import { motion } from 'framer-motion'
import styles from '../../styles/References.module.scss'
import Head from 'next/head'
import { Layout, SliceZone} from '../../components'


export default function Reference({ r, slices }) {
  console.log(r)
  console.log(slices)
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Layout isPost={true}>
        <Head>
          <title>{`${r.artist_name[0].text}`}</title>
        </Head>
        <section className={styles.refhead}>
          <figure>
            <img src={r.cover.url} alt={r.cover.alt}/>
          </figure>
          <div className={styles.refinfo}>
            <h1>{r.artist_name[0].text}</h1>
            <h2>{r.track_name[0].text}</h2>
          </div>
        </section>

        <section className={styles.refbody}>
          <SliceZone sliceZone={slices} />
        </section>
      </Layout>
    </motion.div>
  )
}

export async function getStaticPaths() {
  const response = await getReferences()
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

  const req = await Client().getByUID('reference', params.uid, ref ? { ref } : null) || {}
  const r = req.data
  const slices = req.data.body

  return {
    props: {
      r,
      slices
    }
  }
}