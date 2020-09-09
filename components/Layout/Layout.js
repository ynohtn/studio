import styles from './styles.module.scss'
import { motion } from 'framer-motion'

const Layout = ({ children, isGrid = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className={styles.layout}
    >
      {children}
    </motion.div>
  )
}

export default Layout