import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Category from "../components/Category"

const CategoriesPage = ({ data }) => {
  const { allStrapiCategory } = data
  return (
    <Layout>
      <SEO title="All Categories" />
      <h1 className="title">All Categories</h1>
      <div className="columns is-multiline">
        {allStrapiCategory &&
          allStrapiCategory.nodes.map(category => (
            <Category item={category} key={category.id} />
          ))}
      </div>
    </Layout>
  )
}
export const query = graphql`
  {
    allStrapiCategory {
      nodes {
        id: strapiId
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
