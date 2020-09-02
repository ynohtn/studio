import { default as NextLink } from 'next/link'

import styles from './styles.module.scss'

const SmpCard = ({name, cover}) => {
  return (
    <div className={styles.smpcard}>
      <figure>
        <img src={cover.url} alt={cover.alt}/>
      </figure>
      <div className={styles.smpcardcontent}>
        <h3>{name}</h3>
      </div>
    </div>

  )
}

export default SmpCard