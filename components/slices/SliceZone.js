import React from 'react'
import {
  TextSection,
  Quote,
  FullWidthImage,
  ImageGallery,
  ImageHighlight,
  // ArticleList
} from './'

const SliceZone = ({ sliceZone }) => (
  <div className="container">
    {sliceZone.map((slice, index) => {
      switch (slice.slice_type) {
        case ('text'):
          return <TextSection slice={slice} key={`slice-${index}`} />
        case ('quote'):
          return <Quote slice={slice} key={`slice-${index}`} />
        case ('image'):
          return <FullWidthImage slice={slice} key={`slice-${index}`} />
        // case ('image_gallery'):
        //   return <ImageGallery slice={slice} key={`slice-${index}`} />
        // case ('image_highlight'):
        //   return <ImageHighlight slice={slice} key={`slice-${index}`} />
        // case ('list_of_articles'):
          // return <ArticleList slice={slice} key={`slice-${index}`} />
        default:
          return null
      }
    })}
  </div>
)

export default SliceZone
