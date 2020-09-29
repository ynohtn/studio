import { Client } from '../../lib/prismic-configuration'
import { getSamplePacks } from '../../lib/api'
import styles from '../../styles/Samples.module.scss'
import Head from 'next/head'
import { Layout, SliceZone, Backlink } from '../../components'
import { RichText } from 'prismic-reactjs'

export default function SamplePack({ smp, menu, slices, uid }) {
  // console.log(smp)
  // console.log(slices)
  // console.log(slc)

  return (
    <Layout menu={menu}>
      <Head>
        {/*Primary Meta Tags*/}
        <title>{`${RichText.asText(smp.pack_name)} sample pack`}</title>
        <meta name="title" content={`Discover ${RichText.asText(smp.pack_name)} sample pack from Studio`} />
        <meta name="description" content={`Discover ${RichText.asText(smp.pack_name)} sample pack made with love by passionnate musicians and audio engineers in Studio`} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://studio-seven.vercel.app/samples/${uid}`} />
        <meta property="og:title" content={`Discover ${RichText.asText(smp.pack_name)} sample pack from Studio`} />
        <meta property="og:description" content={`Discover ${RichText.asText(smp.pack_name)} sample pack made with love by passionnate musicians and audio engineers in Studio`} />
        <meta property="og:image" content={smp.pack_cover.url} />

        {/* Twitter */}
        <meta property="twitter:card" content={smp.pack_cover.url} />
        <meta property="twitter:url" content={`https://studio-seven.vercel.app/samples/${uid}`} />
        <meta property="twitter:title" content={`Discover ${RichText.asText(smp.pack_name)} sample pack from Studio`} />
        <meta property="twitter:description" content={`Discover ${RichText.asText(smp.pack_name)} sample pack made with love by passionnate musicians and audio engineers in Studio`} />
        <meta property="twitter:image" content={smp.pack_cover.url} />
      </Head>

      <section className="scrollctn">
        <section className={styles.smphead}>
          <figure>
            <img src={smp.pack_cover.url} alt={smp.pack_cover.alt} />
          </figure>
          <div className={styles.smpinfo}>
            <h1>{RichText.asText(smp.pack_name)}</h1>
          </div>
          <Backlink text='Samples' href='/samples' />
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