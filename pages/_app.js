import Head from 'next/head'
import { Header } from '../components'

import '../styles/reset.scss'
import '../styles/globals.scss'

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
      </Head>
      <Header />
      <Component {...pageProps} />
      {/* <Footer /> */}
    </>
  )
}

export default App