import { Client } from '../../lib/prismic-configuration'
import { getSamplePacks } from '../../lib/api'
import styles from '../../styles/References.module.scss'
import { Layout } from '../../components'


export default function SamplePack({ s, slices }) {
  console.log(s)
  console.log(slices)

  return (
    <Layout>
      <div className={styles.smphead}>
        koukou
        
        {/* <figure>
          <img src={s.cover.url} alt={s.cover.alt} />
        </figure>
        <div className={styles.smpinfo}>
          <h1>{s.pack_name[0].text}</h1>
        </div> */}
      </div>
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
  const req = await Client().getByUID('sample', params.uid)

  const s = req.data
  const slices = req.data.body

  return {
    props: {
      s,
      slices
    }
  }
}