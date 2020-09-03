// import React from 'react'
// import { RichText } from 'prismic-reactjs'

// import { DocLink } from 'components'
// import { linkResolver } from 'prismic-configuration'
// // import { imageGalleryStyles } from 'styles'

// const ArticleList = ({ slice }) => {

//   console.log(`slice in ArticleList.js :`)
//   console.log(slice)


//   return(
//     <section className=''>
//       <RichText
//         render={slice.primary.title_of_section}
//         linkResolver={linkResolver}
//       />
//       <div className='gallery'>
//         {slice.items.map((item, index) => (
//           <ListItem item={item} key={index} />
//         ))}
//       </div>
//       {/* <style jsx global>{imageGalleryStyles}</style> */}
//     </section>
//   )
// }

// const ListItem = ({ item }) => {

//   // console.log(`articles to link in ArticleList.js :`)
//   // console.log(item.articles_to_link)

//   return (
//     <div className='gallery-item'>
//       {
//         item.articles_to_link.slug
//       }
//     </div>
//   )
// }

// export default ArticleList
