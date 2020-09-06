import styles from './styles.module.scss'
import { motion } from 'framer-motion'

const Layout = ({ children, isPost = false, isGrid = false }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className={isPost ? styles.layout_post : isGrid ? styles.layout_gridpage : styles.layout_page}
    >
      {children}
    </motion.div>
  )
}

export default Layout