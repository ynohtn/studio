import Head from 'next/head'
import { default as NextLink } from 'next/link'

import {Layout} from '../../components'
import { Client } from '../../lib/prismic-configuration'

export default function Samples({ res }) {

  console.log(res)

  return (
    <Layout>
      <Head>
        <title>SAMPLES</title>
      </Head>
      <h1>SAMPLE PAGE</h1>
      <h2>
        <NextLink href="/">
          <a>Back to home</a>
        </NextLink>
      </h2>
    </Layout>
  )
}

export async function getStaticProps(context) {
  const req = context.req
  const res = await Client(req).getSingle('samples')

  // const slices = res.data.body
  // const index = slices.findIndex((data) => data['slice_type'] === 'slider')
  // slices[index].items = await getProjectsData(slices[index].items)

  return {
    props: {
      // slices
      res
    }
  }
}