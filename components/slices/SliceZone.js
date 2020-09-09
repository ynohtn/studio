import React from 'react'
import {
  TextSection,
  Team
} from './'

const SliceZone = ({ sliceZone }) => (
  <div className='slice-ctn'>
    {sliceZone.map((slice, index) => {
      switch (slice.slice_type) {
        case ('text'):
          return <TextSection slice={slice} key={index} index={index} />
        case ('team'):
          return <Team slice={slice} key={index} index={index} />
        default:
          return null
      }
    })}
  </div>
)

export default SliceZone
