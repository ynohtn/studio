import { default as NextLink } from 'next/link'

import styles from './styles.module.scss'

const RefCard = ({name, track, cover}) => {
  return (

    <div className={styles.refcard}>
      <figure>
        <img src={cover.url} alt={cover.alt}/>
      </figure>
      <div className={styles.refcardcontent}>
        <h3>{name}</h3>
        <p>{track}</p>
      </div>
    </div>

  )
}

export default RefCard