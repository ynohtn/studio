import Prismic from 'prismic-javascript'
// -- Prismic API endpoint
// Determines which repository to query and fetch data from
// Configure your site's access point here
export const apiEndpoint = 'https://studiov2.cdn.prismic.io/api/v2'

// -- Access Token if the repository is not public
// Generate a token in your dashboard and configure it here if your repository is private
export const accessToken = ''

// Client method to query documents from the Prismic repo
export const Client = (req = null) => (
  Prismic.client(apiEndpoint, createClientOptions(req, accessToken))
)

const createClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {}
  const accessTokenOption = prismicAccessToken ? { accessToken: prismicAccessToken } : {}
  return {
    ...reqOption,
    ...accessTokenOption,
  }
}

// // -- Link resolution rules
// // Manages the url links to internal Prismic documents
// export const linkResolver = (doc) => {
//   // if (doc.type === 'page' || doc.type === 'references' || doc.type === 'samples' || doc.type === 'about') {
//   if (doc.type === 'page') {
//     return `/${doc.uid}`
//   }
//   return '/'
// }

// // Additional helper function for Next/Link component
// export const hrefResolver = (doc) => {
//   // if (doc.type === 'page' || doc.type === 'references' || doc.type === 'samples' || doc.type === 'about') {
//   if (doc.type === 'page') {

//     return '/[uid]'
//   }
//   return '/'
// }