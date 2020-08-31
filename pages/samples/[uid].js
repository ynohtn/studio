import { Client } from '../../lib/prismic-configuration'
import { getSamplePacks } from '../../lib/api'
import styles from '../../styles/Samples.module.scss'
import Head from 'next/head'
import { Layout, SliceZone } from '../../components'


export default function SamplePack({ smp, slices }) {
  console.log(smp)
  console.log(slices)
  // console.log(slc)

  return (
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
      </section>
      <section className="styles.smpbody">
        <SliceZone sliceZone={slices} />
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

export async function getStaticProps({ params }) {
  const req = await Client().getByUID('sample_pack', params.uid)

  // All slices
  const slices = req.data.body
  
  // Slice content
  // const index = slices.findIndex((data) => data['slice_type'])
  // const slc = slices[index]

  // Sample pack
  const smp = req.data

  return {
    props: {
      smp,
      slices,
      // slc
    }
  }
}