import styles from './styles.module.scss'
import Nav from '../Nav/Nav'

const Header = () => {
  return (
    <header className={styles.header}>

      <Nav />

    </header>
  )
}

export default Header

// TODO : LINK RESOLVING + MENU AUTO FILLED
// import { default as NextLink } from 'next/link'
// import { RichText } from 'prismic-reactjs'
// import { SmartLink } from '../index'

// const Header = ({ menu }) => (
//   <header className='site-header'>
//     <NextLink href='/'>
//       <a><div className='logo'>Example Site</div></a>
//     </NextLink>
//     <MenuLinks menu={menu} />
//   </header>
// )

// const MenuLinks = ({ menu }) => {

//   console.log(menu)
//   if (menu) {
//     return (
//       <nav>
//         <ul>
//           {menu.data.menu_links.map((menuLink, index) => (
//             <MenuLink
//               menuLink={menuLink}
//               key={`menulink-${index}`}
//             />
//           ))}
//         </ul>
//       </nav>
//     )
//   }
//   return null
// }

// const MenuLink = ({ menuLink }) => (
//   <li>
//     <SmartLink link={menuLink.link}>
//       {RichText.asText(menuLink.label)}
//     </SmartLink>
//   </li>
// )

// export default Header


