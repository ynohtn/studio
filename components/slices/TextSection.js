import { useEffect } from 'react'
import { gsap } from 'gsap'
import { RichText } from 'prismic-reactjs'
// import { linkResolver, customLink } from '../../lib/prismic-configuration'

const TextSection = ({ slice, index }) => {
  const sectionClass =
    slice.slice_type ?
      `text-section-${slice.slice_type}-${index}` :
      'text-section'

  useEffect(() => {
    gsap.fromTo('.content-section',
      {
        y: -5,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 1.5
      }
    )
  }, [])

  return (
    <section className={`content-section ${sectionClass}`}>
      <RichText
        render={slice.primary.text}
        // linkResolver={linkResolver}
        // serializeHyperlink={customLink}
        key={index}
      />
    </section>
  )
}

export default TextSection
