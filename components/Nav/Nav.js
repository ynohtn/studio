import { default as NextLink } from 'next/link'
import { useRouter } from 'next/router'
import styles from './styles.module.scss'

const Nav = () => {

  const router = useRouter()

  return (

    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li className={router.pathname == '/' ? styles.active : ''}>
          <NextLink href='/'>
            <a>Home</a>
          </NextLink>
        </li>

        <li className={router.pathname.includes('/references') ? styles.active : ''}>
          <NextLink href='/references'>
            <a>References</a>
          </NextLink>
        </li>

        <li className={router.pathname.includes('/samples') ? styles.active : ''}>
          <NextLink href='/samples'>
            <a>Samples</a>
          </NextLink>
        </li>

        <li className={router.pathname == '/about' ? styles.active : ''}>
          <NextLink href='/about'>
            <a>About</a>
          </NextLink>
        </li>
      </ul>
    </nav>

  )
}

export default Nav