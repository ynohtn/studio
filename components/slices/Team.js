// import React from 'react'
// import { RichText } from 'prismic-reactjs'

// import { default as NextLink } from 'next/link'
// import { linkResolver } from 'prismic-configuration'

const Team = ({ slice }) => (
  <section className='team-section content-section'>
    <h2 className='team-section-title'>{slice.primary.team_section[0].text}</h2>
    <div className='team-grid'>
      {slice.items.map((item, index) => (
        <TeamMember item={item} key={index} />
      ))}
    </div>
  </section>
)

const TeamMember = ({ item }) => (
  <div className='team-grid-item'>
    <figure>
      <img
        src={item.portrait.Mobile.url}
        alt={item.portrait.Mobile.alt}
      />
    </figure>
    <div className='team-grid-item-ctn'>
      <h3>{item.name[0].text}</h3>
      <h4>{item.position[0].text}</h4>
      <p>{item.description[0].text}</p>
    </div>
  </div>
)

export default Team