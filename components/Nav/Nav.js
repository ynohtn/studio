import { default as NextLink } from 'next/link'

import styles from './styles.module.scss'

const Nav = () => {
  return (

    <nav className={styles.nav}>
      <ul className={styles.navList}>
        <li>
          <NextLink href="/">
            <a>Home</a>
          </NextLink>
        </li>

        <li>
          <NextLink href="/references">
            <a>References</a>
          </NextLink>
        </li>

        <li>
          <NextLink href="/samples">
            <a>Samples</a>
          </NextLink>
        </li>

        <li>
          <NextLink href="/about">
            <a>About</a>
          </NextLink>
        </li>
      </ul>
    </nav>

  )
}

export default Nav