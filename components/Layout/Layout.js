import styles from './styles.module.scss'

const Layout = ({ children, isPost }) => {
  return <main className={ isPost ? styles.layout_post : styles.layout_page } >{children}</main>
}

export default Layout