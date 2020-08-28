import Head from 'next/head'
import { Header } from '../components'
import '../styles/_globals.scss'

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;600;700&display=swap" rel="stylesheet"></link>
      </Head>
      <Header />
      <Component {...pageProps} />
      {/* <Footer /> */}
    </>
  )
}

export default App