import { Client } from '../../lib/prismic-configuration'
import { getSamplePacks } from '../../lib/api'
import styles from '../../styles/Samples.module.scss'
import Head from 'next/head'
import { Layout, SliceZone, Header } from '../../components'
import { default as NextLink } from 'next/link'

export default function SamplePack({ smp, menu, slices, uid }) {
  // console.log(smp)
  // console.log(slices)
  // console.log(slc)

  return (
    <Layout>
      <Head>
        {/*Primary Meta Tags*/}
        <title>{`${smp.pack_name[0].text} sample pack`}</title>
        <meta name="title" content={`Discover ${smp.pack_name[0].text} sample pack from Studio`} />
        <meta name="description" content={`Discover ${smp.pack_name[0].text} sample pack made with love by passionnate musicians and audio engineers in Studio`} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://studio-seven.vercel.app/samples/${uid}`} />
        <meta property="og:title" content={`Discover ${smp.pack_name[0].text} sample pack from Studio`} />
        <meta property="og:description" content={`Discover ${smp.pack_name[0].text} sample pack made with love by passionnate musicians and audio engineers in Studio`} />
        <meta property="og:image" content={smp.pack_cover.url} />

        {/* Twitter */}
        <meta property="twitter:card" content={smp.pack_cover.url} />
        <meta property="twitter:url" content={`https://studio-seven.vercel.app/samples/${uid}`} />
        <meta property="twitter:title" content={`Discover ${smp.pack_name[0].text} sample pack from Studio`} />
        <meta property="twitter:description" content={`Discover ${smp.pack_name[0].text} sample pack made with love by passionnate musicians and audio engineers in Studio`} />
        <meta property="twitter:image" content={smp.pack_cover.url} />
      </Head>

      <Header menu={menu} />

      <section className="scrollctn">
        <section className={styles.smphead}>
          <figure>
            <img src={smp.pack_cover.url} alt={smp.pack_cover.alt} />
          </figure>
          <div className={styles.smpinfo}>
            <h1>{smp.pack_name[0].text}</h1>
          </div>
          <h2 className={styles.backlink}>
            <NextLink href='/samples'>
              <a>Samples</a>
            </NextLink>
          </h2>
        </section>
        
        <section className={styles.smpbody}>
          <SliceZone sliceZone={slices} />
        </section>
      </section>
    </Layout>
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

  const client = Client()
  const doc = await Client().getByUID('sample_pack', params.uid, ref ? { ref } : null) || {}
  const menu = await client.getSingle('menu', ref ? { ref } : null) || {}

  // All slices
  const slices = doc.data.body
  // Sample pack
  const smp = doc.data
  const uid = params.uid

  return {
    props: {
      smp,
      menu,
      slices,
      uid
    },
    revalidate: 1
  }
}