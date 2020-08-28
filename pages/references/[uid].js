import { Client } from '../../lib/prismic-configuration'
import { getReferences } from '../../lib/api'
import styles from '../../styles/References.module.scss'
import {Layout} from '../../components'


export default function Reference({ r, slices }) {
  console.log(r)
  console.log(slices)
  
  return (
    <Layout>
      <div className={styles.refhead}>
        <figure>
          <img src={r.cover.url} alt={r.cover.alt}/>
        </figure>
        <div className={styles.refinfo}>
          <h1>{r.artist_name[0].text}</h1>
          <h2>{r.track_name[0].text}</h2>
        </div>
      </div>
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