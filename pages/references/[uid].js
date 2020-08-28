import { Client } from '../../lib/prismic-configuration'
import { getReferences } from '../../lib/api'
import styles from '../../styles/References.module.scss'
import Head from 'next/head'
import { Layout, SliceZone} from '../../components'


export default function Reference({ r, slices }) {
  console.log(r)
  console.log(slices)
  
  return (
    <Layout>
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

      <section className="styles.refbody">
        <SliceZone sliceZone={slices} />
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

export async function getStaticProps({ params }) {
  const req = await Client().getByUID('reference', params.uid)
  const r = req.data
  const slices = req.data.body

  return {
    props: {
      r,
      slices
    }
  }
}