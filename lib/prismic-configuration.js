import Prismic from 'prismic-javascript'
import Link from 'next/link'

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

// TODO : LINK RESOLVING SHIT
// -- Link resolution rules
// Manages the url links to internal Prismic documents
export const linkResolver = (doc) => {
  // Pretty URLs for known types
  if (doc.type === 'about' || doc.type === 'references' || doc.type === 'samples') return `/${doc.uid}`
  if (doc.type === 'sample_pack') return `/samples/${doc.uid}`
  if (doc.type === 'reference') return `/references/${doc.uid}`
  // if (doc.type === 'preview') return `/api/preview/${doc.uid}`
  // Fallback for other types, in case new custom types get created
  return '/'
}

// Additional helper function for Next/Link component
export const hrefResolver = (doc) => {
  if (doc.type === 'about' || doc.type === 'references' || doc.type === 'samples') return '/[uid]'
  if (doc.type === 'sample_pack') return '/samples/[uid]'
  if (doc.type === 'reference') return '/references/[uid]'

  return '/'
}

// Helper function to convert Prismic Rich Text links to Next/Link components
export const customLink = (type, element, content, children, index) => (
  <Link key={element.data.id} href={hrefResolver(element.data)} as={linkResolver(element.data)}>
    <a>{content}</a>
  </Link>
)