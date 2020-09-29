import { default as NextLink } from 'next/link'
import styles from './styles.module.scss'

const Backlink = ({text, href}) => {
  return (
    <h2 className={styles.backlink}>
      <NextLink href={href}>
        <a>{text}</a>
      </NextLink>
    </h2>
  )
}

export default Backlink