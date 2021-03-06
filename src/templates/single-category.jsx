import React from 'react'
import Layout from '../components/Layout';
import { graphql, Link } from 'gatsby';
import SEO from '../components/seo';
import HomeQuiz from '../components/HomeQuiz';
import './single-category.styles.scss'

const SingleCategory = ({ data }) => {
  const { strapiCategory } = data;
  return (
    <Layout>
      <SEO title={strapiCategory.name} />
      <div className="single-category">

        <h1 className="category-title">{strapiCategory.name}</h1>
        <hr />
        <div className="columns is-multiline">
          {
            strapiCategory.quizzes.length === 0 && (
              <div className="column is-half">
                <h3 className="title">No Quiz Found</h3>
              </div>
            )
          }
          {strapiCategory.quizzes.map(quiz => (
            <div className="column is-one-third" key={quiz.slug}>
              <Link to={`/${quiz.slug}`}>
                <HomeQuiz quiz={quiz} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}
export const query = graphql`
query ($id: Int!)  {
  strapiCategory(strapiId: {eq: $id}) {
    name
    slug
    quizzes {
      id
      title
      slug
      image {
        publicURL
      }
    }
  }
}
`
export default SingleCategory;