import Head from 'next/head'
import { Header, Background } from '../components'
import {AnimatePresence} from 'framer-motion'
import '../styles/_globals.scss'

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;600;700&display=swap" rel="stylesheet"></link>
      </Head>
      <Header/>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} />
      </AnimatePresence>
      <Background />
    </>
  )
}

export default App