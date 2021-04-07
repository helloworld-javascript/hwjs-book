import {useStaticQuery, graphql} from 'gatsby'

export type SiteMetadata = {
  title?: string
  shortName?: string
  description?: string
  imageUrl?: string
}

function useSiteMetadata(): SiteMetadata {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          shortName
          description
          imageUrl
        }
      }
    }
  `)
  return data.site.siteMetadata
}

export default useSiteMetadata
