import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import '../../app.scss';
import Header from '../Header';
import Footer from '../Footer';
const Layout = ({ children }) => {
  const { allStrapiCategory, allStrapiPage, options } = useStaticQuery(graphql`
  {
    allStrapiCategory(filter: {showInMenu: {eq: true}}) {
      nodes {
        id: strapiId
        name
        slug
      }
    }
    allStrapiPage {
      nodes {
        id: strapiId
        title
        slug
      }
    }
    options: strapiWebsiteOptions {
      description
      title
      tagline
      logo {
        childImageSharp {
          fluid{
            ...GatsbyImageSharpFluid
          }
          fixed(height: 90) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  }
  
  `)
  return (
    <>
      <Header categories={allStrapiCategory} logo={options.logo} tagline={options.tagline} />
      <main className="container main">
        {children}
      </main>
      <Footer categories={allStrapiCategory}
        pages={allStrapiPage}
        logo={options.logo}
        tagline={options.tagline}
        description={options.description} />
    </>
  )
}
export default Layout;