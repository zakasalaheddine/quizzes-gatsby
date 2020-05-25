import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import '../../app.scss';
import Header from '../Header';
import Footer from '../Footer';
const Layout = ({ children }) => {
  const { allStrapiCategory, allStrapiPage } = useStaticQuery(graphql`
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
  }
  `)
  return (
    <>
      <Header categories={allStrapiCategory} />
      <hr />
      <main className="container main">
        {children}
      </main>
      <Footer categories={allStrapiCategory} pages={allStrapiPage} />
    </>
  )
}
export default Layout;