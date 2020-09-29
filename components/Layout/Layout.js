import styles from './styles.module.scss'
import { Header, Footer } from '../index'
import { motion } from 'framer-motion'

const Layout = ({ children, menu }) => {
  return (
    <main>

      <Header menu={menu} />
    
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className={styles.layout}
      >
        {children}
      </motion.div>

      <Footer />

    </main>
  )
}

export default Layout