import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import { graphql } from 'gatsby'
import './single-page.styles.scss'

const SinglePage = ({ data }) => {
  const { strapiPage } = data
  return (
    <Layout>
      <SEO title={strapiPage.title} />
      <div className="single-page container">
        <h1 className="page-title">{strapiPage.title}</h1>
        {
          strapiPage.Content.map((el, idx) => (
            <article className="content" key={idx}>
              <h2 className="title">{el.title}</h2>
              <p>{el.content}</p>
            </article>
          ))
        }
      </div>
    </Layout>
  )
}
export const query = graphql`
query ($id: Int!){
  strapiPage(strapiId: {eq: $id}) {
    id: strapiId
    title
    Content {
      title
      content
    }
  }
}
`
export default SinglePage