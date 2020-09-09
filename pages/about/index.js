import { Client } from '../../lib/prismic-configuration'
import { default as NextLink } from 'next/link'
import styles from '../../styles/About.module.scss'
import Head from 'next/head'
import { Layout, SliceZone, Header } from '../../components'


export default function About({ doc, slices, menu }) {

  // console.log(doc)
  // console.log(slices)

  return (
    <Layout>
      <Head>
        {/*Primary Meta Tags*/}
        <title>About</title>
        <meta name="title" content="About us at Studio" />
        <meta name="description" content="Discover who we work with and what we love to do to your sound, finest audio engineering in Studio" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://studio-seven.vercel.app/about" />
        <meta property="og:title" content="About us at Studio" />
        <meta property="og:description" content="Discover who we are, what we love, what we do. Finest audio engineers in Studio" />
        <meta property="og:image" content="/meta-cover.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="/meta-cover.jpg" />
        <meta property="twitter:url" content="https://studio-seven.vercel.app/about" />
        <meta property="twitter:title" content="About us at Studio" />
        <meta property="twitter:description" content="Discover who we are, what we love, what we do. Finest audio engineers in Studio" />
        <meta property="twitter:image" content="/meta-cover.jpg" />
      </Head>

      <Header menu={menu} />

      <h1 className={styles.abouttitle}>About</h1>

      <section className={styles.aboutbody}>
        <SliceZone sliceZone={slices} />
      </section>
      
      <h2 className={styles.backlink}>
        <NextLink href='/'>
          <a>Back to Home</a>
        </NextLink>
      </h2>
    </Layout>
  )
}

export async function getStaticProps({ preview = null, previewData = {} }) {

  const { ref } = previewData

  const client = Client()

  const doc = await client.getSingle('about', ref ? { ref } : null) || {}
  const menu = await client.getSingle('menu', ref ? { ref } : null) || {}
  const slices = doc.data.body

  return {
    props: {
      doc,
      menu,
      slices,
      preview
    }
  }
}