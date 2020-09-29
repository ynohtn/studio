import Head from 'next/head'
// import { Header, Footer, Cursor } from '../components'
import {AnimatePresence} from 'framer-motion'
import '../styles/_globals.scss'

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
        <link href='https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;600;700&display=swap' rel='stylesheet'></link>
      </Head>

      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} />
      </AnimatePresence>

      <figure className='static-bg'>
        <img src='/wavesbg.svg' alt='background' />
      </figure>
    </>
  )
}

export default App