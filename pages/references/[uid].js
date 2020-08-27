import { Client } from '../../lib/prismic-configuration'
import { getReferences } from '../../lib/api'
import styles from '../../styles/References.module.scss'
import {Layout} from '../../components'


export default function Reference({ reference }) {
  console.log(reference)
  return (
    <Layout>
      <h1>Je suis une page reference</h1>
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
  const reference = await Client().getByUID('reference', params.uid)

  return {
    props: {
      // slices: reference.data.body,
      reference
    }
  }
}