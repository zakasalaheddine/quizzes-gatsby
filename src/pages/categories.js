import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Category from "../components/Category"
import "./categories-page.styles.scss"
import { graphql } from "gatsby"

const CategoriesPage = ({ data }) => {
  const { allStrapiCategory } = data
  return (
    <Layout>
      <SEO title="All Categories" />
      <div className="categories-page">
        <h1 className="title">All Categories</h1>
        <div className="columns is-multiline">
          {allStrapiCategory &&
            allStrapiCategory.nodes.map(category => (
              <Category item={category} key={category.id} />
            ))}
        </div>
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
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
export default CategoriesPage
