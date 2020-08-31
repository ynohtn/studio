import React from 'react'
import { RichText } from 'prismic-reactjs'
import { linkResolver, customLink } from '../../lib/prismic-configuration'

const TextSection = ({ slice, index }) => {
  const sectionClass =
    slice.slice_type ?
      `text-section-${slice.slice_type}-${index}` :
    'text-section'

  return (
    <section className={`content-section ${sectionClass}`}>
      <RichText
        render={slice.primary.text}
        linkResolver={linkResolver}
        serializeHyperlink={customLink}
        // key={}
      />
    </section>
  )
}

export default TextSection
