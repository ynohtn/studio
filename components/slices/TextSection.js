import React from 'react'
import { RichText } from 'prismic-reactjs'

import { linkResolver, customLink } from '../../lib/prismic-configuration'
// import { customLink } from 'utils/prismicHelpers'
// import { textSectionStyles } from 'styles'

const TextSection = ({ slice }) => {
  const sectionClass =
    slice.slice_label ?
    `text-section-${slice.slice_label}` :
    'text-section-1col'

  return (
    // <section className={`content-section ${sectionClass}`}>
    <section>
      <RichText
        render={slice.primary.text}
        linkResolver={linkResolver}
        serializeHyperlink={customLink}
      />
      {/* <style jsx global>{textSectionStyles}</style> */}
    </section>
  )
}

export default TextSection
