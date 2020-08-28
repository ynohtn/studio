import { Client } from '../../lib/prismic-configuration'
import { getSamplePacks } from '../../lib/api'
import styles from '../../styles/Samples.module.scss'
import { Layout } from '../../components'


export default function SamplePack({ smp, slices }) {
  console.log(smp)

  return (
    <Layout>
      <section className={styles.smphead}>
        <figure>
          <img src={smp.pack_cover.url} alt={smp.pack_cover.alt} />
        </figure>
        <div className={styles.smpinfo}>
          <h1>{smp.pack_name[0].text}</h1>
        </div>

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
  const slices = req.data.body
  const smp = req.data

  return {
    props: {
      smp,
      slices
    }
  }
}