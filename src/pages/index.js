import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import HomeQuiz from "../components/HomeQuiz"

const IndexPage = ({ data }) => {
  const { allStrapiQuiz } = data
  return (
    <Layout>
      <SEO title="Home" />
      <div className="columns is-multiline">
        {allStrapiQuiz.nodes.map(quiz => (
          <div className="column is-one-third" key={quiz.slug}>
            <Link to={`/${quiz.slug}`}>
              <HomeQuiz quiz={quiz} />
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  )
}
export const query = graphql`
  {
    allStrapiQuiz(sort: { fields: created_at, order: DESC }) {
      nodes {
        title
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
export default IndexPage
