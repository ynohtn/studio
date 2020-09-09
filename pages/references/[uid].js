import { Client } from '../../lib/prismic-configuration'
import { getReferences } from '../../lib/api'
import { motion } from 'framer-motion'
import styles from '../../styles/References.module.scss'
import Head from 'next/head'
import { Layout, SliceZone, Header} from '../../components'
import { default as NextLink } from 'next/link'


export default function Reference({ r, menu, slices, uid }) {
  // console.log(r)
  // console.log(uid)
  // console.log(slices)

  return (
    <Layout>
      <Head>
        {/*Primary Meta Tags*/}
        <title>{`${r.artist_name[0].text} - ${r.track_name[0].text}`}</title>
        <meta name="title" content={`Discover ${r.track_name[0].text} by ${r.artist_name[0].text} on Studio`} />
        <meta name="description" content={`Discover ${r.track_name[0].text} by ${r.artist_name[0].text} engineered in Studio`} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://studio-seven.vercel.app/references/${uid}`} />
        <meta property="og:title" content={`Discover ${r.track_name[0].text} by ${r.artist_name[0].text} on Studio`} />
        <meta property="og:description" content={`Discover ${r.track_name[0].text} by ${r.artist_name[0].text} engineered in Studio`} />
        <meta property="og:image" content={r.cover.url} />

        {/* Twitter */}
        <meta property="twitter:card" content={r.cover.url} />
        <meta property="twitter:url" content={`https://studio-seven.vercel.app/references/${uid}`} />
        <meta property="twitter:title" content={`Discover ${r.track_name[0].text} by ${r.artist_name[0].text} on Studio`} />
        <meta property="twitter:description" content={`Discover ${r.track_name[0].text} by ${r.artist_name[0].text} engineered in Studio`} />
        <meta property="twitter:image" content={r.cover.url} />
      </Head>
      
      <Header menu={menu} />

      <section className="scrollctn">
        <section className={styles.refhead}>
          <figure>
            <img src={r.cover.url} alt={r.cover.alt}/>
          </figure>
          <div className={styles.refinfo}>
            <h1>{r.artist_name[0].text}</h1>
            <h2>{r.track_name[0].text}</h2>
          </div>
          <h2 className={styles.backlink}>
            <NextLink href='/references'>
              <a>Back to References</a>
            </NextLink>
          </h2>
        </section>
        <section className={styles.refbody}>
          <SliceZone sliceZone={slices} />
        </section>
      </section>

    </Layout>
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

  const client = Client()

  const doc = await client.getByUID('reference', params.uid, ref ? { ref } : null) || {}
  const menu = await client.getSingle('menu', ref ? { ref } : null) || {}

  const r = doc.data
  const slices = doc.data.body
  const uid = params.uid

  return {
    props: {
      r,
      menu,
      slices,
      uid
    }
  }
}