import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"

const CategoriesPage = () => {
  return (
    <Layout>
      <SEO title="All Categories" />
      <h1 className="title">All Categories</h1>
      <div className="columns is-multiline"></div>
    </Layout>
  )
}
export const query = graphql`
  {
    allStrapiCategory {
      nodes {
        id
        name
        slug
        image {
          publicURL
        }
      }
    }
  }
`
export default CategoriesPage
