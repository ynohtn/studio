import { Client } from '../../lib/prismic-configuration'
import { getSamplePacks } from '../../lib/api'
import { Layout } from '../../components'


export default function SamplePack({ samplePack }) {
  console.log(samplePack)
  return (
    <Layout>
      <h1>Je suis une page de pack de sample</h1>
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
  const samplePack = await Client().getByUID('sample_pack', params.uid)
  // const [prevProject, nextProject] = await getAdditionalData(params.uid)
  return {
    props: {
      // slices: reference.data.body,
      samplePack
    }
  }
}