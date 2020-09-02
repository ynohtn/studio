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
        x: -200,
        opacity: 0
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.3,
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
