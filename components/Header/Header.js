import styles from './styles.module.scss'
import { default as NextLink } from 'next/link'
import { useRouter } from 'next/router'
import { RichText } from 'prismic-reactjs'

const Header = ({ menu }) => (
  <header className={styles.header}>
    <MenuLinks menu={menu} />
  </header>
)

const MenuLinks = ({ menu }) => {
  const router = useRouter()
  if (menu) {
    return (
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {menu.data.menu_links.map((menuLink, index) => (
            <MenuLink
              menuLink={menuLink}
              linkType={menuLink.link.type}
              routerPath={router.pathname}
              key={`menulink-${index}`}
            />
          ))}
        </ul>
      </nav>
    )
  }
  return null
}

const MenuLink = ({ menuLink, routerPath, linkType }) => {
  return (
    <li className={routerPath.includes(`/${menuLink.link.uid}`) || (routerPath === '/' && linkType === 'homepage') ? styles.active : ''}>
      <NextLink href={linkType === 'homepage' ? '/' : `/${menuLink.link.uid}`}>
        <a>
          {RichText.asText(menuLink.label)}
        </a>
      </NextLink>
    </li>
  )
}

export default Header


